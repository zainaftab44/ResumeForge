<template>

  <FormSection>
    <h2 class="text-lg font-semibold">Publication</h2>
    <div v-for="(publication, index) in resume.publications" :key="index" class="space-y-2">
      <input class="input" v-model="publication.title" placeholder="Publication Title" />
      <input class="input" v-model="publication.publisher" placeholder="Journal/Publisher" />
      <input class="input" v-model="publication.url" placeholder="URL" />
      <input class="input" v-model="publication.releaseDate" type="date" />
    </div>
    <button class="button" @click.prevent="addPublication">Add Publication</button>
  </FormSection>

</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from "@/components/FormSection.vue";

export default {
  components: { FormSection },
  setup() {
    const resume = useResumeStore();
    const addPublication = () => resume.publications.push({ title: '', journal: '', date: '' });

    return { resume,  addPublication,};
  },
};
</script>
