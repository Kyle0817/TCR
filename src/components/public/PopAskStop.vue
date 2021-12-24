<template>
  <div class="overlay" v-show="showPop"></div>
  <div class="popBox outBox" v-show="showPop">
    <p class="askStop">請確認機器是否已停止運作 ?</p>
    <button class="firstBtn" @click="closePop(true)">是</button>
    <button class="cancelBtn" @click="closePop(false)">否</button>
  </div>
</template>
<script>
export default {
  props: ['showPop'],
  emits: ['askStop'],
  data() {
    return {};
  },
  methods: {
    closePop(res) {
      this.$emit('askStop', res);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_pop.scss';
</style>
