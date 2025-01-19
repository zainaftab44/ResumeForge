<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Work Experience</h2>
    <div v-for="(job, index) in resume.work" :key="index" class="space-y-2">
      <input class="input" v-model="job.company" placeholder="Company" />
      <input class="input" v-model="job.position" placeholder="Position" />
      <input class="input" v-model="job.startDate" type="date" />
      <input class="input" v-model="job.endDate" type="date" />
      <textarea class="textarea" v-model="job.summary" placeholder="Summary"></textarea>
    </div>
    <button class="button" @click.prevent="addWork">Add Work</button>
  </FormSection>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: {FormSection},
  setup() {
    const resume = useResumeStore();

    const addWork = () => resume.work.push({ company: '', position: '', startDate: '', endDate: '', summary: '' });

    return { resume, addWork };
  },
};
</script>
