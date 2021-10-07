<template>
  <div class="hamburgerWrap" :class="{ 'is-active': isActive }">
    <button
      type="button"
      class="btn hamburger hamburger--arrow"
      :class="{ 'is-active': isActive }"
      @click="slideOut"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="infoWrap">
      <Tag />
      <CassetteState />
    </div>
  </div>
</template>
<script>
import Tag from '@/components/public/Tag.vue';
import CassetteState from '@/components/CassetteState.vue';

export default {
  components: { CassetteState, Tag },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    slideOut() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_hamburger.scss';
@import '../../assets/vendors/css/hamburgers.css';
</style>
