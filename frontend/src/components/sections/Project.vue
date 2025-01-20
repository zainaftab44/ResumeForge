<template>

  <FormSection>
    <h2 class="text-lg font-semibold">Project</h2>
    <div v-for="(project, index) in resume.projects" :key="index" class="space-y-2">
      <input class="input" v-model="project.name" placeholder="Project Name"/>
      <input class="input" v-model="project.highlights" placeholder="Role"/>
      <input class="input" v-model="project.url" placeholder="URL"/>
      <input class="input" v-model="project.startDate" type="date"/>
      <input class="input" v-model="project.endDate" type="date"/>
      <textarea class="textarea" v-model="project.description" placeholder="Description"></textarea>
    </div>
    <button class="button" @click.prevent="addProject">Add Project</button>
  </FormSection>
</template>

<script lang="ts">
import {useResumeStore} from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: {FormSection},
  setup() {
    const resume = useResumeStore();

    const addProject = () => resume.projects.push({
      name: '',
      highlights: '',
      url: '',
      startDate: '',
      endDate: '',
      description: ''
    });

    return {resume, addProject};
  },
};
</script>
