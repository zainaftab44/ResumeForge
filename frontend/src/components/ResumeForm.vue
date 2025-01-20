<template>
  <div class="flex h-screen max-w-full">
    <div class="w-full">
      <div class="relative right-0">
        <ul class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100" data-tabs="tabs" role="list">
          <li class="z-30 flex-auto text-center">
          <a
            v-for="(section, index) in sections"
            :key="index"
            @click="currentSection = section"
            class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
            :class="{ 'tab-active': currentSection === section }">
            {{ section.label }}
          </a>
        </li>
      </ul>
      </div>
      <component :is="currentSection.component"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import BasicsForm from '@/components/sections/Basics.vue';
import WorkExperienceForm from '@/components/sections/Experience.vue';
import EducationForm from '@/components/sections/Education.vue';
import SkillsForm from '@/components/sections/Skills.vue';
import VolunteerForm from '@/components/sections/Volunteer.vue';
import AwardForm from '@/components/sections/Award.vue';
import CertificateForm from '@/components/sections/Certificate.vue';
import PublicationForm from '@/components/sections/Publication.vue';
import LanguageForm from '@/components/sections/Language.vue';
import InterestForm from '@/components/sections/Interest.vue';
import ReferenceForm from '@/components/sections/Reference.vue';
import ProjectForm from '@/components/sections/Project.vue';
import {useResumeStore} from '@/stores/resume';

export default {
  components: {
    BasicsForm,
    WorkExperienceForm,
    EducationForm,
    SkillsForm,
    VolunteerForm,
    AwardForm,
    CertificateForm,
    PublicationForm,
    LanguageForm,
    InterestForm,
    ReferenceForm,
    ProjectForm,
  },
  setup() {
    const resume = useResumeStore();
    const sections = [
      {label: 'Basics', component: BasicsForm},
      {label: 'Experience', component: WorkExperienceForm},
      {label: 'Education', component: EducationForm},
      {label: 'Skills', component: SkillsForm},
      {label: 'Volunteer', component: VolunteerForm},
      {label: 'Awards', component: AwardForm},
      {label: 'Certificates', component: CertificateForm},
      {label: 'Publications', component: PublicationForm},
      {label: 'Languages', component: LanguageForm},
      {label: 'Interests', component: InterestForm},
      {label: 'References', component: ReferenceForm},
      {label: 'Projects', component: ProjectForm},
    ];
    const currentSection = ref(sections[0]);

    return {sections, currentSection, resume};
  },
};
</script>
