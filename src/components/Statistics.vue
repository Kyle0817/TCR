<template>
  <table>
    <thead>
      <tr>
        <th>作業項目</th>
        <th>總金額</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in showStatistics" :key="value">
        <td>{{ getWorkItemKey.getItemKey(key) }}</td>
        <td class="number">${{ formatDollar.format(value) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import textMapping from '@/data/textMapping';

const formatter = new Intl.NumberFormat();

export default {
  props: {
    statistics: {
      type: Object,
    },
  },
  data() {
    return {
      showStatistics: {},
      formatDollar: formatter,
    };
  },
  computed: {
    getWorkItemKey() {
      return textMapping;
    },
  },
  watch: {
    statistics(newVal) {
      if (newVal) {
        const {
          TND, TND2, TNU, TNL, TCD, TCD2, TCU, TCL,
        } = this.statistics;
        this.showStatistics = {
          TND, TND2, TNU, TNL, TCD, TCD2, TCU, TCL,
        };
      }
    },
  },
  created() {
    console.log(this.statistics);
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_table.scss';
</style>
