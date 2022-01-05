<template>
  <div v-if="waitStop">
    <div class="overlay"></div>
    <div class="popBox outBox">
      <p class="wait">處理中... 請稍後</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['waitStop'],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_pop.scss';
</style>
