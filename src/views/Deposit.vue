<template>
  <div class="deposit view">
    <div class="amountBar row">
      <h1>存款金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn" @click="start">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" @click="cancel" v-if="startBtnText === '存入'">取消</button>
    </div>
    <div class="wrap row">
      <TradeBox :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr" :typeText="true" :typeInput="false" />
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" :typeText="true" :typeInput="false" />
    </div>
    <PopAskStop :showPop="showPop" @askStop="askStop" />
    <div class="confirmDeposit" v-if="stop">
      <div class="overlay"></div>
      <div class="popBox outBox">
        <p>總金額為 $ {{ amount }}，請確認是否存入 ?</p>
        <button class="firstBtn" @click="depositEnd">確認存入</button>
        <button class="firstBtn" @click="keepDeposit">繼續存款</button>
      </div>
    </div>
  </div>
</template>
<script>
import TradeBox from '@/components/public/TradeBox.vue';
import PopAskStop from '@/components/public/PopAskStop.vue';

export default {
  components: {
    TradeBox,
    PopAskStop,
  },
  data() {
    return {
      tcrAPI: '',
      stop: false,
      showPop: false,
      startBtnText: '開始',
      amount: 0,
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔存款',
      topTitleCoin: '硬幣存款',
      cashArr: [
        {
          Denomination: '2000',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '1000',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '500',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '200',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '100',
          Value: '0',
          Amount: '0',
        },
      ],
      coinArr: [
        {
          Denomination: '50',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '10',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '5',
          Value: '0',
          Amount: '0',
        },
        {
          Denomination: '1',
          Value: '0',
          Amount: '0',
        },
      ],
    };
  },
  methods: {
    start() {
      if (this.startBtnText === '開始') {
        // this.$axios;
        // .post(`${this.tcrAPI}Deposit`)
        // .then((res) => {
        //   console.log(JSON.parse(res.data));
        // }).then(this.$axios
        //   .post(`${this.tcrAPI}DepositQuery`)
        //   .then((res) => {
        //     console.log(JSON.parse(JSON.parse(res.data).LParam));
        //   }))
        // .catch((err) => {
        //   console.log(err);
        // });
        this.startBtnText = '存入';
      } else {
        this.showPop = true;
      }
    },
    cancel() {
      // this.$axios
      //   .post(`${this.tcrAPI}DepositCancel`)
      //   .then((res) => {
      //     console.log(JSON.parse(JSON.parse(res.data).LParam));
      this.startBtnText = '開始';
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },
    depositEnd() {
      // this.$axios
      //   .post(`${this.tcrAPI}DepositEnd`)
      //   .then((res) => {
      //     console.log(JSON.parse(JSON.parse(res.data).LParam));
      //     this.cashArr = JSON.parse(JSON.parse(res.data).LParam);
      //     this.amount = this.cashArr.reduce((total, e) => {
      //       console.log(total, e);
      //       return (total.Denomination * total.Value) + (e.Denomination * e.Value);
      //     });
      //     console.log(this.amount);

      this.showPop = false;
      this.stop = false;
      this.startBtnText = '開始';
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },

    askStop(res) {
      this.showPop = false;
      this.stop = res;
    },
    keepDeposit() {
      this.showPop = false;
      this.stop = false;
    },
  },
  created() {
    this.tcrAPI = process.env.VUE_APP_TCR_API;
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_pop.scss';
</style>
