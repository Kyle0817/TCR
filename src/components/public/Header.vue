<template>
  <header>
    <div class="logoWrap">
      <img :src="imgSrc" alt="logo" />
    </div>
    <div class="textSection">
      <div class="lightWrap">
        <span class="leftLight">左</span>
        <span class="rightLight">右</span>
      </div>
      <div>
        <p>S47123</p>
        <p>某某某</p>
      </div>
      <button>
        <i class="fas fa-sign-out-alt"></i>
        <p>登出</p>
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
