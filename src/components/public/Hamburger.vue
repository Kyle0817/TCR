<template>
  <div class="hamburgerWrap" :class="{ 'is-active': isActive }">
    <button type="button" class="btn hamburger hamburger--arrow" :class="{ 'is-active': isActive }" @click="slideOut">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="infoWrap">
      <h1>鈔箱庫存狀態</h1>
      <Tag @selectBox="clickBox" />
      <CassetteState :hamburger="true" :th="tableTh" :tag-boxName="tagBoxName" :tcrData="inventoryData.INVENTORY" />
    </div>
  </div>
</template>
<script>
import Tag from '@/components/public/Tag.vue';
import CassetteState from '@/components/CassetteState.vue';
import inventoryData from '@/mixins/inventoryData';

export default {
  components: { CassetteState, Tag },
  mixins: [inventoryData],
  data() {
    return {
      tagBoxName: '鈔箱盒',
      isActive: false,
      tableTh: ['鈔箱', '模式', '面額', '狀態', '庫存數', '總額'],
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
  created() {
    this.getTcrData();
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_hamburger.scss';
@import '../../assets/vendors/css/hamburgers.css';
</style>
