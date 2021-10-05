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
        <td>{{ mode.getMode(item.Mode) }}</td>
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
          {{ inventoryInside.Denomination * inventoryInside.Value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import textMapping from '@/data/textMapping';

export default {
  data() {
    return {
      cashBox: [], // 鈔箱
      coinBox: [], // 硬幣盒
      recycleBox: [], // 回收盒
      inventory: [],
      inventoryData: [
        {
          Cassette: 'B1', // 鈔箱
          Mode: 'R', // 模式
          Status: 'E', // 鈔箱水位狀態
          Value: 0, // 張數
          Inventory: [
            // 庫存
            {
              Currency: 'TWD', // 貨幣
              Denomination: 1000, // 面額
              Value: 0, // 張數
            },
          ],
        },
        {
          Cassette: 'B2', // 鈔箱
          Mode: 'D', // 模式
          Status: 'G', // 鈔箱水位狀態
          Value: 100, // 張數
          Inventory: [
            {
              Currency: 'TWD', // 貨幣
              Denomination: 500, // 面額
              Value: 10, // 張數
            },
          ],
        },
        {
          Cassette: 'C1', // 鈔箱
          Mode: 'M', // 模式
          Status: 'F', // 鈔箱水位狀態
          Value: 0, // 張數
          Inventory: [
            {
              Currency: 'TWD', // 貨幣
              Denomination: 10, // 面額
              Value: 0, // 張數
            },
          ],
        },
        {
          Cassette: 'C2', // 鈔箱
          Mode: 'M', // 模式
          Status: 'F', // 鈔箱水位狀態
          Value: 0, // 張數
          Inventory: [
            {
              Currency: 'TWD', // 貨幣
              Denomination: 50, // 面額
              Value: 0, // 張數
            },
          ],
        },
        {
          Cassette: 'BR', // 鈔箱
          Mode: '', // 模式
          Status: 'F', // 鈔箱水位狀態
          Value: 10, // 張數
          Inventory: [
            {
              Currency: 'TWD', // 貨幣
              Denomination: 1000, // 面額
              Value: 10, // 張數
            },
          ],
        },
        {
          Cassette: 'CR', // 鈔箱
          Mode: '', // 模式
          Status: 'F', // 鈔箱水位狀態
          Value: 20, // 張數
          Inventory: [
            {
              Currency: 'TWD', // 貨幣
              Denomination: 50, // 面額
              Value: 20, // 張數
            },
          ],
        },
      ],
    };
  },
  computed: {
    mode() {
      return textMapping;
    },
  },
  methods: {
    tcrClassification() {
      this.inventoryData.forEach((item) => {
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
      console.log('鈔箱:', this.cashBox);
      console.log('硬幣盒:', this.coinBox);
      console.log('回收盒:', this.recycleBox);
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
