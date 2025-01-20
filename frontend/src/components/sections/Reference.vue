<template>

  <FormSection>
    <h2 class="text-lg font-semibold">Reference</h2>
    <div v-for="(reference, index) in resume.references" :key="index" class="space-y-2">
      <input class="input" v-model="reference.name" placeholder="Name" />
      <input class="input" v-model="reference.reference" placeholder="Contact" />
<!--      <textarea class="textarea" v-model="reference.note" placeholder="Note"></textarea>-->
    </div>
    <button class="button" @click.prevent="addReference">Add Reference</button>
  </FormSection>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: { FormSection },
  setup() {
    const resume = useResumeStore();

    const addReference = () => resume.references.push({ name: '', reference: '' });

    return { resume, addReference};
  },
};
</script>
