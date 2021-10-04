<template>
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
        <td v-for="inventoryInside in item.Inventory" :key="inventoryInside.Denomination">
          {{ inventoryInside.Denomination }}
        </td>
        <td>{{ item.Status }}</td>
        <td v-for="inventoryInside in item.Inventory" :key="inventoryInside.Denomination">
          {{ inventoryInside.Value }}</td>
        <td v-for="inventoryInside in item.Inventory" :key="inventoryInside.Denomination">
          {{ inventoryInside.Denomination * inventoryInside.Value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import textMapping from '@/data/textMapping';

export default {
  data() {
    return {
      inventory: [
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
          Cassette: 'B3', // 鈔箱
          Mode: 'M', // 模式
          Status: 'F', // 鈔箱水位狀態
          Value: 1000, // 張數
          Inventory: [
            {
              Currency: 'TWD', // 貨幣
              Denomination: 1000, // 面額
              Value: 100, // 張數
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
};
</script>
