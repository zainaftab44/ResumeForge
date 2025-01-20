<template>

  <FormSection>
    <h2 class="text-lg font-semibold">Interest</h2>
    <div v-for="(interest, index) in resume.interests" :key="index" class="space-y-2">
      <input class="input" v-model="interest.name" placeholder="Interest" />
    </div>
    <button class="button" @click.prevent="addInterest">Add Interest</button>
  </FormSection>

</template>
<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: { FormSection },
  setup() {
    const resume = useResumeStore();
   const addInterest = () => resume.interests.push({ title: '' });

    return { resume,addInterest };
  },
};
</script>
