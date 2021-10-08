import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const mainApp = createApp(App);

const inventoryData = {
  LParam: {
    INVENTORY: [
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
        Value: 160, // 張數
        Inventory: [
          {
            Currency: 'TWD', // 貨幣
            Denomination: 1000, // 面額
            Value: 100, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 500, // 面額
            Value: 10, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 100, // 面額
            Value: 50, // 張數
          },
        ],
      },
      {
        Cassette: 'B3', // 鈔箱
        Mode: 'M', // 模式
        Status: 'L', // 鈔箱水位狀態
        Value: 100, // 張數
        Inventory: [
          {
            Currency: 'TWD', // 貨幣
            Denomination: 200, // 面額
            Value: 20, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 100, // 面額
            Value: 80, // 張數
          },
        ],
      },
      {
        Cassette: 'B4', // 鈔箱
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
        Cassette: 'B5', // 鈔箱
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
        Cassette: 'B6', // 鈔箱
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
        Cassette: 'B7', // 鈔箱
        Mode: 'D', // 模式
        Status: 'G', // 鈔箱水位狀態
        Value: 200, // 張數
        Inventory: [
          {
            Currency: 'TWD', // 貨幣
            Denomination: 500, // 面額
            Value: 80, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 200, // 面額
            Value: 20, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 100, // 面額
            Value: 100, // 張數
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
            Denomination: 5, // 面額
            Value: 10, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 10, // 面額
            Value: 20, // 張數
          },
          {
            Currency: 'TWD', // 貨幣
            Denomination: 50, // 面額
            Value: 15, // 張數
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
            Value: 5, // 張數
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
    statisticData: {
      Date: '20210924',
      TNA: 50000000,
      TND: 600, // 提鈔
      TNT: 1,
      TND2: 1340700, // 存鈔
      TNT2: 14,
      TNU: 2922000, // 卸鈔
      TNL: 10000, // 補鈔
      TCA: 10000000,
      TCD: 76, // 提幣
      TCT: 3,
      TCD2: 236, // 存幣
      TCT2: 2,
      TCU: 3451, // 卸幣
      TCL: 0, // 補幣
    },
  },
};

mainApp.provide('inventoryData', inventoryData);
mainApp.use(router);
mainApp.mount('#app');
