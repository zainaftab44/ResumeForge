<template>
  <FormSection>
    <h2 class="text-lg font-semibold">Volunteer</h2>
    <div v-for="(volunteer, index) in resume.volunteer" :key="index" class="space-y-2">
      <input class="input" v-model="volunteer.organization" placeholder="Organization"/>
      <input class="input" v-model="volunteer.position" placeholder="Role"/>
      <input class="input" v-model="volunteer.startDate" type="date"/>
      <input class="input" v-model="volunteer.endDate" type="date"/>
      <textarea class="textarea" v-model="volunteer.summary" placeholder="Description"></textarea>
    </div>
    <button class="button" @click.prevent="addVolunteer">Add Volunteer</button>
  </FormSection>
</template>

<script lang="ts">
import {useResumeStore} from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: {FormSection},
  setup() {
    const resume = useResumeStore();

    const addVolunteer = () => resume.volunteer.push({
      organization: '',
      position: '',
      startDate: '',
      endDate: '',
      summary: ''
    });

    return {resume, addVolunteer};
  },
};
</script>
