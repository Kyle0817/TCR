<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500&display=swap');
@import './assets/vendors/css/reset.css';
@import './assets/vendors/css/bootstrap-grid.min.css';
@import './assets/public/scss/main.scss';
</style>
