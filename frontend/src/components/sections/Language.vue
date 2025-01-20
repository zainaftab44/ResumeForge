<template>


  <FormSection>
    <h2 class="text-lg font-semibold">Language</h2>
    <div v-for="(language, index) in resume.languages" :key="index" class="space-y-2">
      <input class="input" v-model="language.name" placeholder="Language" />
      <input class="input" v-model="language.fluency" placeholder="Proficiency Level" />
    </div>
    <button class="button" @click.prevent="addLanguage">Add Language</button>
  </FormSection>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: { FormSection },
  setup() {
    const resume = useResumeStore();
    const addLanguage = () => resume.languages.push({ name: '', fluency: '' });
    return { resume, addLanguage,};
  },
};
</script>
