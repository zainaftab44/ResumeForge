<template>
  <div class="flex h-screen">
    <div class="w-1/3 bg-gray-100 p-4">
      <div class="tabs mb-4">
        <button
          v-for="(section, index) in sections"
          :key="index"
          @click="currentSection = section"
          class="tab"
          :class="{ 'tab-active': currentSection === section }"
        >
          {{ section.label }}
        </button>
      </div>
      <component :is="currentSection.component"></component>
    </div>

    <div class="w-2/3 p-4">
      <h2 class="text-xl font-bold">Resume Preview</h2>
      <pre class="bg-white p-4 border rounded">{{ resume }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import BasicsForm from '@/components/sections/Basics.vue';
import WorkExperienceForm from '@/components/sections/Experience.vue';
import EducationForm from '@/components/sections/Education.vue';
import SkillsForm from '@/components/sections/Skills.vue';
import {useResumeStore} from '@/stores/resume';


export default {
  components: { BasicsForm, WorkExperienceForm, EducationForm, SkillsForm },
  setup() {
    const resume = useResumeStore();
    const sections = [
      { label: 'Basics', component: BasicsForm },
      { label: 'Work Experience', component: WorkExperienceForm },
      { label: 'Education', component: EducationForm },
      { label: 'Skills', component: SkillsForm },
    ];
    const currentSection = ref(sections[0]);

    return { sections, currentSection, resume };
  },
};
</script>

<style>
.input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.textarea {
  display: block;
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0.5rem 0;
}
.button:hover {
  background-color: #0056b3;
}
.tabs {
  display: flex;
  border-bottom: 2px solid #ddd;
}
.tab {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background: none;
  font-weight: bold;
}
.tab-active {
  border-bottom: 2px solid #007bff;
  color: #007bff;
}
</style>
