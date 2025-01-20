<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Award</h2>
    <div v-for="(award, index) in resume.awards" :key="index" class="space-y-2">
      <input class="input" v-model="award.title" placeholder="Award Title" />
      <input class="input" v-model="award.organization" placeholder="Organization" />
      <input class="input" v-model="award.date" type="date" />
      <textarea class="textarea" v-model="award.summary" placeholder="Details"></textarea>
    </div>
    <button class="button" @click.prevent="addAward">Add Award</button>
  </FormSection>

</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: { FormSection },
  setup() {
    const resume = useResumeStore();
    const addAward = () => resume.awards.push({ title: '', organization: '', date: '', summary: '' });

    return { resume, addAward};
  },
};
</script>
