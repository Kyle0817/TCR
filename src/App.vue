<template>
  <router-view name="Menu"></router-view>
  <router-view name="Header"></router-view>
  <router-view name="Hamburger"></router-view>
  <router-view />
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&display=swap');
@import './assets/vendors/css/reset.css';
@import './assets/vendors/css/bootstrap-grid.min.css';
</style>
