import { defineStore } from 'pinia';
import type {Resume} from "@/types/Resume.ts";


export const useResumeStore = defineStore('resume', {
  state: (): Resume => ({
    basics: { name: '', email: '', phone: '', summary: '' },
    work: [],
    education: [],
    skills: [],
  }),
  actions: {
    updateResume(data: Partial<Resume>) {
      Object.assign(this, data);
    },
  },
});
