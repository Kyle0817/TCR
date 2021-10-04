<template>
  <table>
    <tbody>
      <tr>
        <th>作業項目</th>
        <th>總金額</th>
      </tr>
      <tr v-for="(value, key) in statisticsItem" :key="value">
        <td>{{ getWorkItemKey.getItemKey(key) }}</td>
        <td>{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import statisticsMapping from '@/data/statisticsMapping';

export default {
  data() {
    return {
      statisticsItem: {
        TND: '$612,384', // 提鈔
        TND2: '$456,612,384', // 存鈔
        TNL: '$612,384', // 補鈔
        TNU: '$612,384', // 卸鈔
        TCD: '$1,612,384', // 提幣
        TCD2: '$12,384', // 存幣
        TCL: '$2,384', // 補幣
        TCU: '$0', // 卸幣
      },
    };
  },
  computed: {
    getWorkItemKey() {
      return statisticsMapping;
    },
  },
};
</script>
