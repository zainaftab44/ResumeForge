// components/BasicsForm.vue
<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Basics</h2>
    <input class="input" v-model="resume.basics.name" placeholder="Name" />
    <input class="input" v-model="resume.basics.email" placeholder="Email" />
    <input class="input" v-model="resume.basics.phone" placeholder="Phone" />
    <textarea class="textarea" v-model="resume.basics.summary" placeholder="Summary"></textarea>
  </FormSection>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: {FormSection},
  setup() {
    const resume = useResumeStore();
    return { resume };
  },
};
</script>
