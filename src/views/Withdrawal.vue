<template>
  <div class="withdrawal view">
    <div class="amountBar row">
      <h1>提款金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn" @click="starWithdrawal">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" @click="clear">清空</button>
    </div>
    <div class="wrap row">
      <TradeBox :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr" :typeText="false" :typeInput="true" />
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" :typeText="false" :typeInput="true" />
    </div>
  </div>
</template>

<script>
import TradeBox from '@/components/public/TradeBox.vue';

export default {
  components: {
    TradeBox,
  },
  data() {
    return {
      startBtnText: '確認提款',
      // amount: 0,
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔提款',
      topTitleCoin: '硬幣提款',
      currencies: [],
      dispenseArr: [],
      noCash: '',
      cashArr: [
        {
          Denomination: '2000',
          Value: 0,
        },
        {
          Denomination: '1000',
          Value: 0,
        },
        {
          Denomination: '500',
          Value: 0,
        },
        {
          Denomination: '200',
          Value: 0,
        },
        {
          Denomination: '100',
          Value: 0,
        },
      ],
      coinArr: [
        {
          Denomination: '50',
          Value: 0,
        },
        {
          Denomination: '10',
          Value: 0,
        },
        {
          Denomination: '5',
          Value: 0,
        },
        {
          Denomination: '1',
          Value: 0,
        },
      ],
    };
  },
  computed: {
    amount() {
      return this.sum(this.cashArr) + this.sum(this.coinArr);
    },
  },
  methods: {
    clear() {
      /* eslint-disable no-param-reassign */
      this.cashArr.forEach((item) => {
        item.Value = 0;
      });
      this.coinArr.forEach((item) => {
        item.Value = 0;
      });
    },
    starWithdrawal() {
      this.currencies = [];
      this.forEachFun(this.cashArr);
      this.forEachFun(this.coinArr);
      this.currencies.forEach((curr) => {
        this.dispenseArr.forEach((dis) => {
          const currD = parseInt(curr.Denomination, 10);
          const disD = parseInt(dis.Denomination, 10);
          if (currD === disD && curr.Value > dis.Value) {
            console.log(`提領${currD}:超過${curr.Value - dis.Value}張`);
          }
          // if (currD !== disD) {
          //   console.log(`沒有${currD}面額`);
          // }
        });
      });
      console.log(this.currencies);
      console.log(this.dispenseArr);
    },
    sum(arr) {
      return arr.reduce((a, b) => a + b.Denomination * b.Value, 0);
    },
    forEachFun(arr) {
      arr.forEach((item) => {
        if (item.Value !== 0 && item.Value !== '') {
          this.currencies.push({
            Currency: 'TWD',
            Denomination: item.Denomination,
            Value: item.Value,
          });
        }
      });
    },
  },
  created() {
    this.$emitter.on('sendData', (data) => {
      this.dispenseArr = data;
    });
  },
};
</script>
