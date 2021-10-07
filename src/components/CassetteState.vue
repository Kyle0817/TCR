<template>
  <button type="button" @click="inventory = cashBox">鈔箱</button>
  <button type="button" @click="inventory = coinBox">硬幣盒</button>
  <button type="button" @click="inventory = recycleBox">回收盒</button>
  <table>
    <tbody>
      <tr>
        <th>鈔箱</th>
        <th>模式</th>
        <th>面額</th>
        <th>狀態</th>
        <th>庫存數</th>
        <th>總額</th>
      </tr>
      <tr v-for="item in inventory" :key="item.Cassette">
        <td>{{ item.Cassette }}</td>
        <td>
          {{
            item.Mode ? mode.getMode(item.Mode) : item.Cassette === 'BR' ? '鈔票回收' : '硬幣回收'
          }}
        </td>
        <td
          class="number"
          v-for="inventoryInside in item.Inventory"
          :key="inventoryInside.Denomination"
        >
          {{ inventoryInside.Denomination }}
        </td>
        <td>
          <div
            :class="{
              full: item.Status === 'F',
              high: item.Status === 'H',
              good: item.Status === 'G',
              low: item.Status === 'L',
              empty: item.Status === 'E',
            }"
          >
            <p>{{ item.Status }}</p>
          </div>
        </td>
        <td
          class="number"
          v-for="inventoryInside in item.Inventory"
          :key="inventoryInside.Denomination"
        >
          {{ inventoryInside.Value }}
        </td>
        <td
          class="number"
          v-for="inventoryInside in item.Inventory"
          :key="inventoryInside.Denomination"
        >
          {{ '$' + formatDollar.format(inventoryInside.Denomination * inventoryInside.Value) }}
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
      cashBox: [], // 鈔箱
      coinBox: [], // 硬幣盒
      recycleBox: [], // 回收盒
      inventory: [],
      formatDollar: formatter,
    };
  },
  computed: {
    mode() {
      return textMapping;
    },
  },
  methods: {
    tcrClassification() {
      this.inventoryData.LParam.INVENTORY.forEach((item) => {
        switch (true) {
          case item.Cassette.startsWith('B') && !item.Cassette.includes('R'):
            this.cashBox.push(item);
            break;
          case item.Cassette.startsWith('C') && !item.Cassette.includes('R'):
            this.coinBox.push(item);
            break;
          case item.Cassette.includes('R'):
            this.recycleBox.push(item);
            break;
          default:
        }
      });
    },
  },
  mounted() {
    this.tcrClassification();
    this.inventory = this.cashBox;
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_table.scss';
</style>
