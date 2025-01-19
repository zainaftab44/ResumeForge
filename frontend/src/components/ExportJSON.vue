<template>
  <button @click="exportJSON">Download JSON</button>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    exportJSON() {
      const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.json";
      link.click();
      URL.revokeObjectURL(url);
    },
  },
};
</script>
