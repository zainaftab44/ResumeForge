<template>
  <div>
    <h1>{{ resume.basics.name }}</h1>
    <p>Email: {{ resume.basics.email }}</p>
    <p>Phone: {{ resume.basics.phone }}</p>
    <p>{{ resume.basics.summary }}</p>

    <h2>Work Experience</h2>
    <div v-for="job in resume.work" :key="job.company">
      <h3>{{ job.position }} at {{ job.company }}</h3>
      <p>{{ job.startDate }} - {{ job.endDate }}</p>
      <p>{{ job.summary }}</p>
    </div>

    <h2>Education</h2>
    <div v-for="edu in resume.education" :key="edu.institution">
      <h3>{{ edu.studyType }} in {{ edu.area }}</h3>
      <p>{{ edu.institution }}</p>
      <p>{{ edu.startDate }} - {{ edu.endDate }}</p>
    </div>

    <h2>Skills</h2>
    <ul>
      <li v-for="skill in resume.skills" :key="skill.name">{{ skill.name }} - {{ skill.level }}</li>
    </ul>
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
