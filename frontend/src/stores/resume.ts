import { defineStore } from 'pinia';
import type {Resume} from "@/types/Resume.ts";


export const useResumeStore = defineStore('resume', {
  state: (): Resume => ({
    basics: {
      name: "",
      label: "",
      email: "",
      phone: "",
      summary: "",
      location: {
        address: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: "",
      },
      profiles: [],
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: [],
  }),
  actions: {
    updateResume(data: Partial<Resume>) {
      Object.assign(this, data);
    },
  },
});
