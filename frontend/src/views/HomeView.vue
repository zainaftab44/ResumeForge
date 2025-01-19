<script setup lang="ts">
import {useResumeStore} from "@/stores/resume.ts";
import CVForm from "@/views/CVForm.vue";
import CVPreview from "@/views/CVPreview.vue";

const resume = useResumeStore();
</script>
<template>
  <main>
    <div class="flex gap-4 h-screen column-2">
      <div class="w-1/2 p-4 bg-gray-100 overflow-auto">
        <CVForm/>
        <h2 class="text-xl font-bold mt-8">JSON Preview</h2>
        <pre class="bg-white p-4 border rounded mt-4 text-sm overflow-auto">{{ resume }}</pre>
      </div>

      <div class="w-1/2 p-4 bg-white border-l overflow-auto">
        <h2 class="text-xl font-bold mb-4">Resume Preview</h2>
        <CVPreview/>
      </div>
    </div>

  </main>
</template>
