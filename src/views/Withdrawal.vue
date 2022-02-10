<template>
  <div class="withdrawal view">
    <div class="amountBar row">
      <h1>提款金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn" @click="startWithdrawal">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" @click="clear">清空</button>
    </div>
    <div class="wrap row">
      <TradeBox :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr" :typeText="false" :typeInput="true" />
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" :typeText="false" :typeInput="true" />
    </div>
    <WaitStop :waitStop="waitStop" />
    <WarnPop :warnPop="warnPop" :warnText="warnText" @closePop="closePop" />
  </div>
</template>

<script>
import capacity from '@/data/capacity';
import TradeBox from '@/components/public/TradeBox.vue';
import WaitStop from '@/components/public/WaitStop.vue';
import WarnPop from '@/components/public/WarnPop.vue';

export default {
  components: {
    TradeBox,
    WaitStop,
    WarnPop,
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
      warnPop: false,
      warnText: '',
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
    startWithdrawal() {
      if (this.amount === 0) {
        this.warnPop = true;
        this.warnText = '請輸入提款數量';
      } else {
        this.currencies = [];
        this.forEachFun(this.cashArr);
        this.forEachFun(this.coinArr);
        const noMoney = [];
        this.currencies.forEach((curr) => {
          const currD = curr.Denomination;
          // 判斷有沒有面額
          const x = this.dispenseArr.find((e) => e.Denomination === currD);
          if (!x) noMoney.push(currD);
          // 判斷有面額 但有無足夠張數
          this.dispenseArr.forEach((dis) => {
            const disD = dis.Denomination;
            if (currD === disD && curr.Value > dis.Value) {
              this.enoughWarn += `${currD}面額超過提領數量:${curr.Value - dis.Value}<br/>`;
            }
          });
        });
        if (noMoney.length !== 0) {
          const noMoneyText = noMoney.join('、');
          this.noCashWarn = `沒有面額${noMoneyText}可提領`;
        }
        this.textWarn();
      }
    },
    textWarn() {
      if (this.noCashWarn === '' && this.enoughWarn === '') {
        this.waitStop = true;
        // this.postDispense();
        this.checkCapacity();
      } else {
        this.warnText = `${this.enoughWarn}<br />${this.noCashWarn}`;
        this.warnPop = true;
        this.noCashWarn = '';
        this.enoughWarn = '';
      }
    },
    sum(arr) {
      return arr.reduce((a, b) => a + b.Denomination * b.Value, 0);
    },
    closePop(res) {
      this.warnPop = res;
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
    checkCapacity() {
      console.log(JSON.stringify(this.currencies));
      console.log(capacity);
    },
    postDispense() {
      this.$axios({
        method: 'post',
        url: `${process.env.VUE_APP_TCR_API}Dispense`,
        params: {
          currencies: JSON.stringify(this.currencies),
        },
      })
        .then((res) => {
          console.log(res.data);
          this.waitStop = false;
        })
        .catch((err) => {
          console.log(err);
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
