<template>
  <div class="resume-preview">
    <div class="header">
      <h1>{{ resume.basics.name || "Your Name" }}</h1>
      <h2>{{ resume.basics.label || "Your Profession" }}</h2>
      <p v-if="resume.basics.email">{{ resume.basics.email }}</p>
      <p v-if="resume.basics.phone">{{ resume.basics.phone }}</p>
      <p v-if="resume.basics.location.city">{{ resume.basics.location.city }}, {{ resume.basics.location.region }}</p>
      <p v-if="resume.basics.summary">{{ resume.basics.summary }}</p>
    </div>

    <div v-if="resume.work.length" class="section">
      <h3>Work Experience</h3>
      <div v-for="(job, index) in resume.work" :key="index" class="entry">
        <h4>{{ job.position || "Position Title" }} - {{ job.company || "Company Name" }}</h4>
        <p>{{ job.startDate }} to {{ job.endDate }}</p>
        <p>{{ job.summary }}</p>
      </div>
    </div>

    <div v-if="resume.volunteer.length" class="section">
      <h3>Volunteer Experience</h3>
      <div v-for="(volunteer, index) in resume.volunteer" :key="index" class="entry">
        <h4>{{ volunteer.position || "Position Title" }} - {{ volunteer.organization || "Organization Name" }}</h4>
        <p>{{ volunteer.startDate }} to {{ volunteer.endDate }}</p>
        <p>{{ volunteer.summary }}</p>
      </div>
    </div>

    <div v-if="resume.education.length" class="section">
      <h3>Education</h3>
      <div v-for="(education, index) in resume.education" :key="index" class="entry">
        <h4>{{ education.area || "Field of Study" }} - {{ education.institution || "Institution Name" }}</h4>
        <p>{{ education.startDate }} to {{ education.endDate }}</p>
      </div>
    </div>

    <div v-if="resume.awards.length" class="section">
      <h3>Awards</h3>
      <div v-for="(award, index) in resume.awards" :key="index" class="entry">
        <h4>{{ award.title || "Award Title" }} - {{ award.organization || "Awarding Organization" }}</h4>
        <p>{{ award.date }}</p>
        <p>{{ award.summary }}</p>
      </div>
    </div>

    <div v-if="resume.certificates.length" class="section">
      <h3>Certificates</h3>
      <div v-for="(certificate, index) in resume.certificates" :key="index" class="entry">
        <h4>{{ certificate.name || "Certificate Name" }}</h4>
        <p>{{ certificate.issuingOrganization || "Issuing Organization" }} - {{ certificate.date }}</p>
      </div>
    </div>

    <div v-if="resume.publications.length" class="section">
      <h3>Publications</h3>
      <div v-for="(publication, index) in resume.publications" :key="index" class="entry">
        <h4>{{ publication.title || "Publication Title" }} - {{ publication.journal || "Journal Name" }}</h4>
        <p>{{ publication.date }}</p>
      </div>
    </div>

    <div v-if="resume.languages.length" class="section">
      <h3>Languages</h3>
      <ul>
        <li v-for="(language, index) in resume.languages" :key="index">
          {{ language.name || "Language" }} - {{ language.fluency || "Fluency Level" }}
        </li>
      </ul>
    </div>

    <div v-if="resume.interests.length" class="section">
      <h3>Interests</h3>
      <ul>
        <li v-for="(interest, index) in resume.interests" :key="index">
          {{ interest.title || "Interest" }}
        </li>
      </ul>
    </div>

    <div v-if="resume.references.length" class="section">
      <h3>References</h3>
      <div v-for="(reference, index) in resume.references" :key="index" class="entry">
        <h4>{{ reference.name || "Reference Name" }}</h4>
        <p>{{ reference.reference || "Reference Details" }}</p>
      </div>
    </div>

    <div v-if="resume.projects.length" class="section">
      <h3>Projects</h3>
      <div v-for="(project, index) in resume.projects" :key="index" class="entry">
        <h4>{{ project.name || "Project Name" }}</h4>
        <p>{{ project.startDate }} to {{ project.endDate }}</p>
        <p>{{ project.description }}</p>
        <a :href="project.url" target="_blank" v-if="project.url">View Project</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';

export default {
  setup() {
    const resume = useResumeStore();
    return { resume };
  },
};
</script>

<style scoped>
.resume-preview {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.header {
  text-align: center;
}

.section {
  margin-bottom: 20px;
}

h3 {
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.entry {
  margin-bottom: 10px;
}

ul {
  padding-left: 20px;
}

li {
  list-style-type: circle;
}
</style>
