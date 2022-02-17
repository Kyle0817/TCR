<template>
  <div class="home view">
    <Test :test="test" />
  </div>
</template>

<script>
import Test from '@/components/Test.vue';

export default {
  components: {
    Test,
  },
  data() {
    return {
      test: {},
    };
  },
  mounted() {
    // console.log('父層 mounted', this.test);
  },
  methods: {},
  created() {
    this.$emitter.on('sendTestData', (data) => {
      console.log('接收sendTestData', data);
      this.test = data;
    });
    // console.log('父層 created');
    // this.$axios.get('https://vue3-course-api.hexschool.io/api/jing-siao-api/products/all').then((res) => {
    //   this.test = res.data.products;
    //   // console.log('父層 created Axios', this.test);
    // });
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
