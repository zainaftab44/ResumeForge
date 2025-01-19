<template>
  <input type="file" @change="importJSON" />
</template>

<script>
export default {
  methods: {
    importJSON(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const json = JSON.parse(e.target.result);
        this.$emit("updateData", json);
      };
      reader.readAsText(file);
    },
  },
};
</script>
