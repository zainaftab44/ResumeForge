<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Skills</h2>
    <div v-for="(skill, index) in resume.skills" :key="index" class="space-y-2">
      <input class="input" v-model="skill.name" placeholder="Skill" />
      <input class="input" v-model="skill.level" placeholder="Level" />
    </div>
    <button class="button" @click.prevent="addSkill">Add Skill</button>
  </FormSection>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: {FormSection},
  setup() {
    const resume = useResumeStore();

    const addSkill = () => resume.skills.push({ name: '', level: '' });

    return { resume, addSkill };
  },
};
</script>
