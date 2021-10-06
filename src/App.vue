<template>
  <router-view name="Menu"></router-view>
  <Header />
  <router-view name="Hamburger"></router-view>
  <router-view />
</template>
<script>
import Header from '@/components/public/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&display=swap');
@import './assets/vendors/css/reset.css';
@import './assets/vendors/css/bootstrap-grid.min.css';
@import './assets/public/scss/_main.scss';
</style>
