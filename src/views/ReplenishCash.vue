<template>
  <div class="home view">
    <Test :test="test" />
    <!-- <Statistics :statistics="inventoryData1.STATISTIC2" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import mitt from 'mitt';
import Test from '@/components/Test.vue';
// import Statistics from '@/components/Statistics.vue';

// const emitter = mitt();
export default {
  components: {
    Test,
    // Statistics,
  },
  data() {
    return {
      test: {},
      // inventoryData1: [],
    };
  },

  methods: {},
  // 假資料用
  created() {
    this.$emitter.on('sendTest', (data) => {
      console.log('接收', data);
      this.test = data;
    });
    // this.$emitter.on('sendInventoryData', (data) => {
    //   console.log('接收inventoryData', data);
    //   this.inventoryData1 = data;
    // });
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
