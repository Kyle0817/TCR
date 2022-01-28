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
    <WaitStop :waitStop="waitStop" />
  </div>
</template>

<script>
import TradeBox from '@/components/public/TradeBox.vue';
import WaitStop from '@/components/public/WaitStop.vue';

export default {
  components: {
    TradeBox,
    WaitStop,
  },
  data() {
    return {
      startBtnText: '確認提款',
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔提款',
      topTitleCoin: '硬幣提款',
      currencies: [],
      dispenseArr: [],
      waitStop: false,
      noCashWarn: '',
      enoughWarn: '',
      cashArr: [
        {
          Denomination: 2000,
          Value: 0,
        },
        {
          Denomination: 1000,
          Value: 0,
        },
        {
          Denomination: 500,
          Value: 0,
        },
        {
          Denomination: 200,
          Value: 0,
        },
        {
          Denomination: 100,
          Value: 0,
        },
      ],
      coinArr: [
        {
          Denomination: 50,
          Value: 0,
        },
        {
          Denomination: 10,
          Value: 0,
        },
        {
          Denomination: 5,
          Value: 0,
        },
        {
          Denomination: 1,
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
      const noMoney = [];
      this.currencies.forEach((curr) => {
        let has = 0;
        const currD = curr.Denomination;
        // 判斷有沒有面額
        const x = this.dispenseArr.find((e) => e.Denomination === currD);
        if (!x) noMoney.push(currD);
        // 判斷有面額 但有無足夠張數
        this.dispenseArr.forEach((dis) => {
          const disD = dis.Denomination;
          if (currD === disD) {
            if (has === 0 && curr.Value > dis.Value) {
              has = curr.Value - dis.Value;
            } else if (has > dis.Value) {
              this.enoughWarn = `提領${currD}:超過${has - dis.Value}張`;
            }
          }
        });
      });
      if (noMoney.length !== 0) {
        const noMoneyText = noMoney.join('、');
        this.noCashWarn = `沒有面額${noMoneyText}可提領`;
      }
      this.textWarn();
    },
    textWarn() {
      if (this.noCashWarn === '' && this.enoughWarn === '') {
        this.waitStop = true;
      } else {
        console.log(this.enoughWarn);
        console.log(this.noCashWarn);
        this.noCashWarn = '';
        this.enoughWarn = '';
      }
    },
    sum(arr) {
      return arr.reduce((a, b) => a + b.Denomination * b.Value, 0);
    },
    hasDen() {},
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
