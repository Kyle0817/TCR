<template>
  <table>
    <thead>
      <tr>
        <th v-for="item in th" :key="item">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="th.length === 6">
        <tr v-for="(item, index) in cassetteData" :key="index">
          <td>{{ item.Cassette }}</td>
          <td>
            {{ item.Mode ? mode.getMode(item.Mode) : item.Cassette === 'BR' ? '鈔票回收' : '硬幣回收' }}
          </td>
          <td class="number">
            {{ item.Denomination }}
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
          <td class="number">
            {{ item.Value }}
          </td>
          <td class="number">${{ formatDollar.format(item.Denomination * item.Value) }}</td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(item, index) in cassetteData" :key="index">
          <td>{{ item.Cassette }}</td>
          <td>{{ item.Denomination }}</td>
          <td>{{ item.Load }}</td>
          <td>{{ item.UnLoad }}</td>
          <td>{{ item.Deposit }}</td>
          <td>{{ item.Dispense }}</td>
          <td>{{ item.Rejected }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import textMapping from '@/data/textMapping';

const formatter = new Intl.NumberFormat();

export default {
  props: {
    th: {
      type: Array,
    },
    tagBoxName: {
      type: String,
    },
    tcrData: {
      type: Array,
    },
  },
  data() {
    return {
      cashBox: [], // 鈔箱
      coinBox: [], // 硬幣盒
      recycleBox: [], // 回收盒
      cassetteData: [],
      historyArr: [],
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
      this.tcrData.forEach((item) => {
        switch (true) {
          case item.Cassette.startsWith('B') && !item.Cassette.includes('R'):
            this.dataLoop(item, this.cashBox);
            break;
          case item.Cassette.startsWith('C') && !item.Cassette.includes('R'):
            this.dataLoop(item, this.coinBox);
            break;
          case item.Cassette.includes('R'):
            this.dataLoop(item, this.recycleBox);
            break;
          default:
        }
      });
    },
    dataLoop(item, box) {
      if (this.th.length === 6) {
        // 鈔箱庫存狀態
        item.Inventory.forEach((inventory) => {
          box.push({
            Cassette: item.Cassette,
            Mode: item.Mode,
            Denomination: inventory.Denomination,
            Status: item.Status,
            Value: inventory.Value,
            Total: inventory.Denomination * inventory.Value,
          });
        });
      } else {
        // // 鈔箱歷史狀態
        this.convertHistory(item, box);
      }
    },
    convertHistory(item, box) {
      const arr = [];
      const {
        Cassette, Load, UnLoad, Deposit, Dispense, Rejected,
      } = item;
      const tempArr = [Load, UnLoad, Deposit, Dispense, Rejected];
      tempArr.forEach((data) => {
        data.forEach((obj) => {
          arr.push({
            Cassette,
            Denomination: obj.Denomination,
            Load: 0,
            UnLoad: 0,
            Deposit: 0,
            Dispense: 0,
            Rejected: 0,
          });
        });
      });
      // 去除重複物件，使每個鈔箱面額不重複
      const countDenomination = [...new Set(arr.map((m) => JSON.stringify(m)))].map((m) => JSON.parse(m));
      countDenomination.forEach((denoObj) => {
        this.processData('Load', Load, Cassette, denoObj);
        this.processData('UnLoad', UnLoad, Cassette, denoObj);
        this.processData('Deposit', Deposit, Cassette, denoObj);
        this.processData('Dispense', Dispense, Cassette, denoObj);
        this.processData('Rejected', Rejected, Cassette, denoObj);
        box.push(denoObj);
        // box.sort((x, y) => y.Denomination - x.Denomination);
      });
    },
    processData(name, arr, cassette, obj) {
      const tempObj = obj;
      arr.forEach((val) => {
        const isCassette = tempObj.Cassette === cassette && tempObj.Denomination === val.Denomination;
        switch (true) {
          case name === 'Load' && isCassette:
            tempObj.Load = val.Value;
            break;
          case name === 'UnLoad' && isCassette:
            tempObj.UnLoad = val.Value;
            break;
          case name === 'Deposit' && isCassette:
            tempObj.Deposit = val.Value;
            break;
          case name === 'Dispense' && isCassette:
            tempObj.Dispense = val.Value;
            break;
          case name === 'Rejected' && isCassette:
            tempObj.Rejected = val.Value;
            break;
          default:
        }
      });
    },
  },
  watch: {
    tcrData(newVal) {
      if (newVal) {
        this.tcrClassification();
      }
    },
  },
  created() {
    this.cassetteData = this.cashBox;
  },
  beforeUpdate() {
    if (this.tagBoxName === '鈔箱盒') this.cassetteData = this.cashBox;
    else if (this.tagBoxName === '硬幣盒') this.cassetteData = this.coinBox;
    else this.cassetteData = this.recycleBox;
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_table.scss';
@import '@/assets/public/scss/_tableFixed.scss';
.fixed tbody {
  height: 300px;
}
</style>
