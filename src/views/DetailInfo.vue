<template>
  <div class="detailInfo view row">
    <h1>鈔箱詳細狀態</h1>
    <div class="whiteBox outBox wrap">
      <Tag @selectBox="clickBox" />
      <CassetteState
        :th="tableTh"
        :tag-boxName="tagBoxName"
        :inventory-data="inventoryData.LParam.INVENTORY"
      />
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
      tagBoxName: '鈔箱盒',
      tableTh: [
        '鈔箱',
        '模式',
        '面額',
        '補鈔數',
        '卸鈔數',
        '存款數',
        '提款數',
        '吐拒數',
        '狀態',
        '庫存數',
        '總額',
      ],
    };
  },
  methods: {
    clickBox(box) {
      this.tagBoxName = box;
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 20px;
  text-align: center;
}
.wrap {
  margin-top: 60px;
  position: relative;
}
</style>
