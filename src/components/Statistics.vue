<template>
  <table>
    <tbody>
      <tr>
        <th>作業項目</th>
        <th>總金額</th>
      </tr>
      <tr v-for="(value, key) in statisticsItem" :key="value">
        <td>{{ getWorkItemKey.getItemKey(key) }}</td>
        <td class="number">
          ${{ formatDollar.format(value) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import textMapping from '@/data/textMapping';

const formatter = new Intl.NumberFormat();

export default {
  inject: ['inventoryData'],
  data() {
    return {
      statisticsItem: {
        TND: this.inventoryData.LParam.statisticData.TND, // 提鈔
        TND2: this.inventoryData.LParam.statisticData.TND2, // 存鈔
        TNL: this.inventoryData.LParam.statisticData.TNL, // 補鈔
        TNU: this.inventoryData.LParam.statisticData.TNU, // 卸鈔
        TCD: this.inventoryData.LParam.statisticData.TCD, // 提幣
        TCD2: this.inventoryData.LParam.statisticData.TCD2, // 存幣
        TCL: this.inventoryData.LParam.statisticData.TCL, // 補幣
        TCU: this.inventoryData.LParam.statisticData.TCU, // 卸幣
      },
      formatDollar: formatter,
    };
  },
  computed: {
    getWorkItemKey() {
      return textMapping;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_table.scss';
</style>
