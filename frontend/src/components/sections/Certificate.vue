<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Certificate</h2>
    <div v-for="(certificate, index) in resume.certificates" :key="index" class="space-y-2">
      <input class="input" v-model="certificate.name" placeholder="Certificate Name"/>
      <input class="input" v-model="certificate.issuer" placeholder="Issuing Organization"/>
      <input class="input" v-model="certificate.date" type="date"/>
    </div>
    <button class="button" @click.prevent="addCertificate">Add Certificate</button>
  </FormSection>
</template>
<script lang="ts">
import {useResumeStore} from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: {FormSection},
  setup() {
    const resume = useResumeStore();

    const addCertificate = () => resume.certificates.push({name: '', issuingOrganization: '', date: ''});

    return {resume, addCertificate};
  },
};
</script>
