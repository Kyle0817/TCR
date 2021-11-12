<template>
  <table>
    <thead>
      <tr>
        <th>作業項目</th>
        <th>總金額</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in statistics" :key="value">
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
