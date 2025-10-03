package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public ResumeServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) {
        try {
            // Prepare request body
            Map<String, Object> part = new HashMap<>();
            part.put("text", generatePrompt(userResumeDescription));

            Map<String, Object> content = new HashMap<>();
            content.put("parts", new Map[]{part});

            Map<String, Object>[] contents = new Map[]{content};

            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("contents", contents);

            // Headers
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("X-Goog-Api-Key", geminiApiKey);

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

            // Call Gemini API
            ResponseEntity<String> response = restTemplate.postForEntity(geminiApiUrl, entity, String.class);

            if (response.getBody() == null || response.getBody().isEmpty()) {
                throw new RuntimeException("Gemini returned empty response.");
            }

            // Extract the text part from response
            Map<?, ?> rawResponse = objectMapper.readValue(response.getBody(), Map.class);
            Object candidatesObj = rawResponse.get("candidates");
            if (!(candidatesObj instanceof Iterable<?> candidates)) {
                throw new RuntimeException("Invalid Gemini response format: missing candidates.");
            }

            String jsonText = null;
            for (Object candidateObj : candidates) {
                Map<?, ?> candidate = (Map<?, ?>) candidateObj;
                Map<?, ?> contentMap = (Map<?, ?>) candidate.get("content");
                Object partsObj = contentMap.get("parts");
                if (partsObj instanceof Iterable<?> parts) {
                    for (Object partObj : parts) {
                        Map<?, ?> partMap = (Map<?, ?>) partObj;
                        jsonText = (String) partMap.get("text");
                        break;
                    }
                }
                if (jsonText != null) break;
            }

            if (jsonText == null) throw new RuntimeException("No JSON content found in Gemini response.");

            // Remove ```json and ``` if present
            jsonText = jsonText.replace("```json", "").replace("```", "").trim();

            // Convert string JSON to Map
            Map<String, Object> result = objectMapper.readValue(jsonText, Map.class);
            return result;

        } catch (Exception e) {
            throw new RuntimeException("Error processing Gemini response: " + e.getMessage(), e);
        }
    }



    private String generatePrompt(String userDescription) {
        return "Generate a professional IT job resume in JSON format based on the following description. " +
                "Return ONLY JSON without extra text or backticks. " +
                "Use the exact structure: personalInformation, skills, experience, education, certifications, projects, achievements, languages, interests.\n" +
                "Candidate Description:\n\"" + userDescription + "\"";
    }
}
