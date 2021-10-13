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
      <Tag @selectBox="clickBox" />
      <CassetteState :tag-boxName="tagBoxName" :inventory-data="inventoryData.LParam.INVENTORY" />
    </div>
  </div>
</template>
<script>
import Tag from '@/components/public/Tag.vue';
import CassetteState from '@/components/CassetteState.vue';

export default {
  inject: ['inventoryData'],
  components: { CassetteState, Tag },
  data() {
    return {
      tagBoxName: '',
      isActive: false,
    };
  },
  methods: {
    slideOut() {
      this.isActive = !this.isActive;
    },
    clickBox(box) {
      this.tagBoxName = box;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_hamburger.scss';
@import '../../assets/vendors/css/hamburgers.css';
</style>
