package com.resume.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class ResumeAiBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResumeAiBackendApplication.class, args);
	}

	// Add this method to create RestTemplate bean
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
