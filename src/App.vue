<template>
  <Menu />
  <router-view />
</template>
<script>
import Menu from '@/components/public/Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&display=swap');
@import './assets/vendors/css/reset.css';
@import './assets/vendors/css/bootstrap-grid.min.css';
@import './assets/public/scss/main.scss';
</style>
