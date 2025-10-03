package com.resume.backend.service;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;

public interface ResumeService {

    Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException;
}