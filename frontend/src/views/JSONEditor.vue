<template>
  <textarea v-model="jsonData" @input="updateJSON" rows="20" cols="50"></textarea>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      jsonData: JSON.stringify(this.data, null, 2),
    };
  },
  methods: {
    updateJSON() {
      try {
        const parsed = JSON.parse(this.jsonData);
        this.$emit("updateData", parsed);
      } catch (error) {
        console.error("Invalid JSON");
      }
    },
  },
};
</script>
