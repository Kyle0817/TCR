export default {
  data() {
    return {
      inventoryData: [],
      // test: {},
    };
  },
  methods: {
    async getTcrData() {
      const tcrData = {
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
              Mode: 'R', // 模式
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
              Status: 'H', // 鈔箱水位狀態
              Value: 100, // 張數
              Inventory: [
                {
                  Currency: 'TWD', // 貨幣
                  Denomination: 1000, // 面額
                  Value: 100, // 張數
                },
              ],
            },
            {
              Cassette: 'B5', // 鈔箱
              Mode: 'D', // 模式
              Status: 'G', // 鈔箱水位狀態
              Value: 10, // 張數
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
              Value: 10, // 張數
              Inventory: [
                {
                  Currency: 'TWD', // 貨幣
                  Denomination: 100, // 面額
                  Value: 10, // 張數
                },
              ],
            },
            {
              Cassette: 'B7', // 鈔箱
              Mode: 'P', // 模式
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
              Value: 45, // 張數
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
              Value: 5, // 張數
              Inventory: [
                {
                  Currency: 'TWD', // 貨幣
                  Denomination: 50, // 面額
                  Value: 5, // 張數
                },
              ],
            },
            {
              Cassette: 'C3', // 鈔箱
              Mode: 'R', // 模式
              Status: 'L', // 鈔箱水位狀態
              Value: 35, // 張數
              Inventory: [
                {
                  Currency: 'TWD', // 貨幣
                  Denomination: 10, // 面額
                  Value: 35, // 張數
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
          HISTORY: [
            {
              Cassette: 'B1',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 200, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 100, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 200, // 面額
                  Value: 65, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 500, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 20, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 15, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 200, // 面額
                  Value: 28, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 30, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 1500, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 850, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 2000, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 2500, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 1250, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 200, // 面額
                  Value: 85, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 3800, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 10, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 5, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 25, // 張數
                },
              ],
            },
            {
              Cassette: 'B2',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 152, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 105, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 452, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 7, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 23, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 666, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 321, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 853, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 1216, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 465, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 1878, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 7, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 15, // 張數
                },
              ],
            },
            {
              Cassette: 'B3',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 32, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 200, // 面額
                  Value: 6, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 56, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 18, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 200, // 面額
                  Value: 7, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 26, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 86, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 22, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 200, // 面額
                  Value: 13, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 156, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 452, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 102, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 583, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 6, // 張數
                },
              ],
            },
            {
              Cassette: 'B4',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 16, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 8, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 28, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 8, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 2, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 35, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 75, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 20, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 162, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 102, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 26, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 77, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 2, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 8, // 張數
                },
              ],
            },
            {
              Cassette: 'B5',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 21, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 16, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 75, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 11, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 7, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 23, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 69, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 13, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 85, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 125, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 35, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 268, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 13, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 8, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 19, // 張數
                },
              ],
            },
            {
              Cassette: 'B6',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 7, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 26, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 8, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 24, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 30, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 28, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 37, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 9, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 8, // 張數
                },
              ],
            },
            {
              Cassette: 'B7',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 8, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 17, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 6, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 4, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 13, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 38, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 14, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 53, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 61, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 33, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 72, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 0, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 6, // 張數
                },
              ],
            },
            {
              Cassette: 'BR',
              Load: [
                // 補鈔
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 13, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 18, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 1000, // 面額
                  Value: 10, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 500, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 100, // 面額
                  Value: 23, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
              ],
            },
            {
              Cassette: 'CR',
              Load: [
                // 補鈔
              ],
              UnLoad: [
                // 卸鈔
              ],
              Deposit: [
                // 存款張數
              ],
              Dispense: [
                // 提款張數
              ],
              Rejected: [
                // 吐拒張數
              ],
            },
            {
              Cassette: 'C1',
              Load: [
                // 補幣
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 33, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 102, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 15, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 33, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 30, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 15, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 13, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 176, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 12, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 85, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 109, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 5, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 85, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 109, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 5, // 張數
                },
              ],
            },
            {
              Cassette: 'C2',
              Load: [
                // 補幣
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 22, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 3, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 12, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 3, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 13, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 25, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 6, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 23, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 78, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 8, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 23, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 78, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 8, // 張數
                },
              ],
            },
            {
              Cassette: 'C3',
              Load: [
                // 補幣
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 6, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 6, // 張數
                },
              ],
              UnLoad: [
                // 卸鈔
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 3, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 6, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 6, // 張數
                },
              ],
              Deposit: [
                // 存款張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 30, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 67, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 6, // 張數
                },
              ],
              Dispense: [
                // 提款張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 20, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 81, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 6, // 張數
                },
              ],
              Rejected: [
                // 吐拒張數
                {
                  Currency: 'TWD',
                  Denomination: 50, // 面額
                  Value: 20, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 10, // 面額
                  Value: 81, // 張數
                },
                {
                  Currency: 'TWD',
                  Denomination: 1, // 面額
                  Value: 6, // 張數
                },
              ],
            },
          ],
          STATISTIC1: {
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
          STATISTIC2: {
            Date: '20210927',
            TNA: 30000000,
            TND: 500, // 提鈔
            TNT: 1,
            TND2: 2340700, // 存鈔
            TNT2: 14,
            TNU: 1922000, // 卸鈔
            TNL: 20000, // 補鈔
            TCA: 10000000,
            TCD: 86, // 提幣
            TCT: 3,
            TCD2: 256, // 存幣
            TCT2: 2,
            TCU: 345, // 卸幣
            TCL: 100, // 補幣
          },
        },
      };
      this.inventoryData = tcrData.LParam;
      //----------------
      // const tcrAPI = process.env.VUE_APP_TCR_API;
      // await this.$axios.post(`${tcrAPI}Detail`).then((res) => {
      //   this.inventoryData = JSON.parse(JSON.parse(res.data).LParam);
      // });
      // const tcrAPI = 'https://vue3-course-api.hexschool.io/api/jing-siao-api/products/all';
      // await this.$axios.get(tcrAPI).then((res) => {
      //   this.test = res.data.products;
      // });
    },
  },
};
