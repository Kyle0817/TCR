<template>
  <div v-for="testComponent in test" :key="testComponent">{{ testComponent.category }}</div>
</template>
<script>
export default {
  props: {
    test: {
      type: Object,
    },
  },
};
</script>
