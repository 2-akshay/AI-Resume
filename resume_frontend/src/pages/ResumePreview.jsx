import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fdfdfd",
    fontFamily: "Helvetica",
    fontSize: 11,
  },
  leftColumn: {
    width: "35%",
    backgroundColor: "#2E86C1",
    color: "white",
    padding: 20,
  },
  rightColumn: {
    width: "65%",
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  role: {
    fontSize: 12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2E86C1",
    borderBottomWidth: 1,
    borderBottomColor: "#2E86C1",
    paddingBottom: 3,
  },
  leftSectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 3,
  },
  text: {
    marginBottom: 4,
  },
  bulletPoint: {
    marginLeft: 10,
    marginBottom: 3,
  },
});

// ResumePreview Component
const ResumePreview = ({ resumeData }) => {
  if (!resumeData) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ padding: 20 }}>
            <Text>No resume data available.</Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <Text style={styles.name}>{resumeData.personalInformation?.name}</Text>
          <Text style={styles.role}>{resumeData.personalInformation?.role}</Text>
          <Text>{resumeData.personalInformation?.email}</Text>
          <Text>{resumeData.personalInformation?.phone}</Text>
          <Text>{resumeData.personalInformation?.location}</Text>

          {/* Skills */}
          {resumeData.skills && resumeData.skills.length > 0 && (
            <>
              <Text style={styles.leftSectionTitle}>Skills</Text>
              {resumeData.skills.map((skill, i) => (
                <Text key={i} style={styles.bulletPoint}>
                  • {typeof skill === "string" ? skill : skill.name || JSON.stringify(skill)}
                </Text>
              ))}
            </>
          )}

          {/* Languages */}
          {resumeData.languages && resumeData.languages.length > 0 && (
            <>
              <Text style={styles.leftSectionTitle}>Languages</Text>
              {resumeData.languages.map((langObj, i) => (
                <Text key={i} style={styles.bulletPoint}>
                  • {langObj.language} {langObj.proficiency ? `- ${langObj.proficiency}` : ""}
                </Text>
              ))}
            </>
          )}

          {/* Interests */}
          {resumeData.interests && resumeData.interests.length > 0 && (
            <>
              <Text style={styles.leftSectionTitle}>Interests</Text>
              {resumeData.interests.map((int, i) => (
                <Text key={i} style={styles.bulletPoint}>
                  • {typeof int === "string" ? int : int.hobby || JSON.stringify(int)}
                </Text>
              ))}
            </>
          )}
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Experience */}
          {resumeData.experience && resumeData.experience.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Experience</Text>
              {resumeData.experience.map((exp, i) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>{exp.role} - {exp.company}</Text>
                  <Text style={{ fontSize: 10, color: "gray" }}>{exp.duration}</Text>
                  <Text>{exp.description}</Text>
                </View>
              ))}
            </>
          )}

          {/* Education */}
          {resumeData.education && resumeData.education.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu, i) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>{edu.degree}</Text>
                  <Text>{edu.institution} ({edu.year}) {edu.gpa ? `- GPA: ${edu.gpa}` : ""}</Text>
                </View>
              ))}
            </>
          )}

          {/* Projects */}
          {resumeData.projects && resumeData.projects.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Projects</Text>
              {resumeData.projects.map((proj, i) => (
                <View key={i} style={{ marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold" }}>{proj.name}</Text>
                  <Text>{proj.description} {proj.link ? `- ${proj.link}` : ""}</Text>
                </View>
              ))}
            </>
          )}

          {/* Certifications */}
          {resumeData.certifications && resumeData.certifications.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Certifications</Text>
              {resumeData.certifications.map((cert, i) => (
                <Text key={i} style={styles.text}>
                  • {typeof cert === "string" ? cert : cert.title || JSON.stringify(cert)}
                </Text>
              ))}
            </>
          )}

          {/* Achievements */}
          {resumeData.achievements && resumeData.achievements.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Achievements</Text>
              {resumeData.achievements.map((ach, i) => (
                <Text key={i} style={styles.text}>
                  • {typeof ach === "string" ? ach : ach.title || JSON.stringify(ach)}
                </Text>
              ))}
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePreview;
