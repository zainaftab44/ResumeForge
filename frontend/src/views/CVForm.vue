<template>
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
</template>

<script lang="ts">
import {ref} from 'vue';
import BasicsForm from '@/components/sections/Basics.vue';
import WorkExperienceForm from '@/components/sections/Experience.vue';
import EducationForm from '@/components/sections/Education.vue';
import SkillsForm from '@/components/sections/Skills.vue';
import {useResumeStore} from '@/stores/resume';


export default {
  components: {BasicsForm, WorkExperienceForm, EducationForm, SkillsForm},
  setup() {
    const resume = useResumeStore();
    const sections = [
      {label: 'Basics', component: BasicsForm},
      {label: 'Experience', component: WorkExperienceForm},
      {label: 'Education', component: EducationForm},
      {label: 'Skills', component: SkillsForm},
    ];
    const currentSection = ref(sections[0]);

    return {sections, currentSection, resume};
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

<!--
<template>
  <form @submit.prevent="saveData">
    <FormSection>
      <h2>Basics</h2>
      <input v-model="resume.basics.name" placeholder="Name" />
      <input v-model="resume.basics.email" placeholder="Email" />
      <input v-model="resume.basics.phone" placeholder="Phone" />
      <textarea v-model="resume.basics.summary" placeholder="Summary"></textarea>
    </FormSection>

    <FormSection>
      <h2>Work Experience</h2>
      <div v-for="(job, index) in resume.work" :key="index">
        <input v-model="job.company" placeholder="Company" />
        <input v-model="job.position" placeholder="Position" />
        <input v-model="job.startDate" type="date" />
        <input v-model="job.endDate" type="date" />
        <textarea v-model="job.summary" placeholder="Summary"></textarea>
      </div>
      <button @click.prevent="addWork">Add Work</button>
    </FormSection>

    <FormSection>
      <h2>Education</h2>
      <div v-for="(edu, index) in resume.education" :key="index">
        <input v-model="edu.institution" placeholder="Institution" />
        <input v-model="edu.area" placeholder="Field of Study" />
        <input v-model="edu.studyType" placeholder="Degree Type" />
        <input v-model="edu.startDate" type="date" />
        <input v-model="edu.endDate" type="date" />
      </div>
      <button @click.prevent="addEducation">Add Education</button>
    </FormSection>

    <FormSection>
      <h2>Skills</h2>
      <div v-for="(skill, index) in resume.skills" :key="index">
        <input v-model="skill.name" placeholder="Skill" />
        <input v-model="skill.level" placeholder="Level" />
      </div>
      <button @click.prevent="addSkill">Add Skill</button>
    </FormSection>

    <button type="submit">Save</button>
  </form>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import FormSection from '@/components/FormSection.vue';

export default {
  components: { FormSection },
  setup() {
    const resume = useResumeStore();

    const addWork = () => resume.work.push({ company: '', position: '', startDate: '', endDate: '', summary: '' });
    const addEducation = () => resume.education.push({ institution: '', area: '', studyType: '', startDate: '', endDate: '' });
    const addSkill = () => resume.skills.push({ name: '', level: '' });

    const saveData = () => {
      console.log(JSON.stringify(resume.$state));
    };

    return { resume, addWork, addEducation, addSkill, saveData };
  },
};
</script>
-->
