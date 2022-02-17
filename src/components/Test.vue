<template>
  <div v-for="testComponent in test" :key="testComponent">{{ testComponent.category }}</div>
</template>
<script>
export default {
  props: {
    test: {
      type: Object,
    },
    data() {
      return {
        test123: [],
      };
    },
  },
  watch: {
    test(newVal) {
      if (newVal) {
        // console.log('watch', newVal);
        this.test123 = newVal;
        // console.log(this.test);
      }
    },
  },
  created() {
    // console.log('子層 created', this.test);
  },
  mounted() {
    // console.log(this.test);
    // console.log('子層 mounted', this.test);
  },
};
</script>
