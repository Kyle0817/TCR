<template>
  <header>
    <div class="logoWrap">
      <img :src="imgSrc" alt="logo" />
    </div>
    <div class="textSection">
      <div class="lightWrap">
        <span class="leftLight active">左</span>
        <span class="rightLight">右</span>
      </div>
      <div>
        <p>S47123</p>
        <p class="name">某某某</p>
      </div>
      <button type="button">
        <i class="fas fa-sign-out-alt"></i>
        <i class="fas fa-sign-in-alt" v-if="false"></i>
      </button>
    </div>
  </header>
</template>
<script>
const src = require('@/assets/img/long-logo.png');

export default {
  data() {
    return {
      imgSrc: src,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_header.scss';
</style>
