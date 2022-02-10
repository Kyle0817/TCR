<template>
  <div v-if="warnPop">
    <div class="overlay"></div>
    <div class="popBox outBox warnBox">
      <p v-html="warnText" class="twoLines"></p>
      <button class="warnBtn" @click="closePop(false)">確認</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['warnPop', 'warnText'],
  emits: ['closePop'],
  data() {
    return {};
  },
  methods: {
    closePop(res) {
      this.$emit('closePop', res);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_pop.scss';
</style>
