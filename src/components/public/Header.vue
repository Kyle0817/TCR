<template>
  <header>
    <div class="logoWrap">
      <img :src="imgSrc" alt="logo" />
    </div>
    <div class="textSection">
      <div class="lightWrap">
        <span class="leftLight" :class="{ active: flag }">左</span>
        <span class="rightLight">右</span>
      </div>
      <div>
        <p>{{ userNum }}</p>
      </div>
      <button type="button" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </header>
</template>
<script>
const src = require('@/assets/img/long-logo.png');

export default {
  data() {
    return {
      userNum: sessionStorage.getItem('userNum'),
      flag: true,
      imgSrc: src,
    };
  },
  methods: {
    logout() {
      this.userNum = '';
      this.flag = false;
      sessionStorage.removeItem('userNum');
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_header.scss';
</style>
