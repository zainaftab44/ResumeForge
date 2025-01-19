<template>
  <div>
    <button @click="exportJSON">Export JSON</button>
    <button @click="exportPDF">Export PDF</button>
    <input type="file" @change="importJSON" />
  </div>
</template>

<script lang="ts">
import { useResumeStore } from '@/stores/resume';
import { exportToPDF } from '@/utils/pdfExport';

export default {
  setup() {
    const resume = useResumeStore();

    const exportJSON = () => {
      const dataStr = JSON.stringify(resume.$state, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.json';
      a.click();
      URL.revokeObjectURL(url);
    };

    const exportPDF = () => {
      exportToPDF(resume.$state);
    };

    const importJSON = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        resume.updateResume(data);
      };
      reader.readAsText(file);
    };

    return { exportJSON, exportPDF, importJSON };
  },
};
</script>
