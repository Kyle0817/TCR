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
@import './assets/vendors/css/reset.css';
@import './assets/vendors/css/bootstrap-grid.min.css';
</style>
