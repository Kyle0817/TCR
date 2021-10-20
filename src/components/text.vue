<template>
  <table>
    <tbody>
      <tr>
        <th v-for="item in th" :key="item">{{ item }}</th>
      </tr>
      <tr v-for="(item, index) in inventory" :key="index">
        <td>{{ item.Cassette }}</td>
        <td>
          {{
            item.Mode ? mode.getMode(item.Mode) : item.Cassette === 'BR' ? '鈔票回收' : '硬幣回收'
          }}
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
    inventoryData: {
      type: Array,
    },
    historyData: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      cashBox: [], // 鈔箱
      coinBox: [], // 硬幣盒
      recycleBox: [], // 回收盒
      inventory: [],
      formatDollar: formatter,
      history: [
        {
          Cassette: 'B1',
          Denomination: '1000',
          denominationValue: '200',
          unLoadValue: '20',
          depositValue: '1500',
          dispenseValue: '2500',
          rejectedValue: '10',
        },
        {
          Cassette: 'B1',
          Denomination: '500',
          denominationValue: '100',
          unLoadValue: '15',
          depositValue: '850',
          dispenseValue: '1250',
          rejectedValue: '5',
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
            this.inventoryLoop(item, this.cashBox);
            break;
          case item.Cassette.startsWith('C') && !item.Cassette.includes('R'):
            this.inventoryLoop(item, this.coinBox);
            break;
          case item.Cassette.includes('R'):
            this.inventoryLoop(item, this.recycleBox);
            break;
          default:
        }
      });
    },
    inventoryLoop(item, box) {
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
    },
    historyLoop() {
      const arr = [];
      this.historyData.forEach((el) => {
        const denoTyp = [];
        const theEl = el;
        theEl.Load.forEach((item) => {
          denoTyp.push(item.Denomination);
        });
        theEl.UnLoad.forEach((item) => {
          denoTyp.push(item.Denomination);
        });
        theEl.Deposit.forEach((item) => {
          denoTyp.push(item.Denomination);
        });
        theEl.Dispense.forEach((item) => {
          denoTyp.push(item.Denomination);
        });
        theEl.Rejected.forEach((item) => {
          denoTyp.push(item.Denomination);
        });
        theEl.typ = [...new Set(denoTyp)];
      });
      this.historyData.forEach((x) => {
        x.typ.forEach((el) => {
          arr.push({
            Cassette: x.Cassette,
            Denomination: el,
          });
        });
      });
      arr.forEach((el) => {
        const obj = el;
        this.historyData.forEach((item) => {
          item.Load.forEach((Load) => {
            if (el.Denomination === Load.Denomination && el.Cassette === item.Cassette) {
              obj.loadValue = Load.Value;
            }
            if (Load.Value === '') {
              obj.loadValue = 0;
            }
          });
          item.UnLoad.forEach((UnLoad) => {
            if (el.Denomination === UnLoad.Denomination && el.Cassette === item.Cassette) {
              obj.unLoadValue = UnLoad.Value;
            }
          });
          item.Deposit.forEach((Deposit) => {
            if (el.Denomination === Deposit.Denomination && el.Cassette === item.Cassette) {
              obj.depositValue = Deposit.Value;
            }
          });
          item.Dispense.forEach((Dispense) => {
            if (el.Denomination === Dispense.Denomination && el.Cassette === item.Cassette) {
              obj.dispenseValue = Dispense.Value;
            }
          });
          item.Rejected.forEach((Rejected) => {
            if (el.Denomination === Rejected.Denomination && el.Cassette === item.Cassette) {
              obj.rejectedValue = Rejected.Value;
            }
          });
        });
      });
      console.log(arr);
    },
  },
  mounted() {
    this.historyLoop();
    this.tcrClassification();
    this.inventory = this.cashBox;
  },
  updated() {
    if (this.tagBoxName === '鈔箱盒') this.inventory = this.cashBox;
    else if (this.tagBoxName === '硬幣盒') this.inventory = this.coinBox;
    else this.inventory = this.recycleBox;
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_table.scss';
</style>
