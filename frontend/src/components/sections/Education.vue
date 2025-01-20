
<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Education</h2>
    <div v-for="(edu, index) in resume.education" :key="index" class="space-y-2">
      <input class="input" v-model="edu.institution" placeholder="Institution" />
      <input class="input" v-model="edu.area" placeholder="Field of Study" />
      <input class="input" v-model="edu.studyType" placeholder="Degree Type" />
      <input class="input" v-model="edu.startDate" type="date" />
      <input class="input" v-model="edu.endDate" type="date" />
    </div>
    <button class="button" @click.prevent="addEducation">Add Education</button>
  </FormSection>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default{
  components: {FormSection},
  setup() {
    const resume = useResumeStore();

    const addEducation = () => resume.education.push({ institution: '', area: '', studyType: '', startDate: '', endDate: '' });

    return { resume, addEducation };
  },
};
</script>
