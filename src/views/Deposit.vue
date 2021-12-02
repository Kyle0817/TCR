<template>
  <div class="deposit view">
    <div class="amountBar row">
      <h1>存款金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn" @click="start">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" @click="cancel" v-if="startBtnText === '確認存入'">取消</button>
    </div>
    <div class="wrap row">
      <TradeBox :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr" :typeText="true" :typeInput="false" />
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" :typeText="true" :typeInput="false" />
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
      tcrAPI: '',
      startBtnText: '開始',
      amount: 0,
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔存款',
      topTitleCoin: '硬幣存款',
      cashArr: [{
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
        this.$axios
          .post(`${this.tcrAPI}Deposit`)
          .then((res) => {
            console.log(JSON.parse(res.data));
          }).then(this.$axios
            .post(`${this.tcrAPI}DepositQuery`)
            .then((res) => {
              console.log(JSON.parse(JSON.parse(res.data).LParam));
            }))
          .catch((err) => {
            console.log(err);
          });
        this.startBtnText = '確認存入';
      } else if (this.startBtnText === '確認存入') {
        this.$axios
          .post(`${this.tcrAPI}DepositEnd`)
          .then((res) => {
            console.log(JSON.parse(JSON.parse(res.data).LParam));
            this.cashArr = JSON.parse(JSON.parse(res.data).LParam);
            this.amount = this.cashArr.reduce((total, e) => {
              console.log(total, e);
              return (total.Denomination * total.Value) + (e.Denomination * e.Value);
            });
            console.log(this.amount);
            this.startBtnText = '開始';
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cancel() {
      this.$axios
        .post(`${this.tcrAPI}DepositCancel`)
        .then((res) => {
          console.log(JSON.parse(JSON.parse(res.data).LParam));
          this.startBtnText = '開始';
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.tcrAPI = process.env.VUE_APP_TCR_API;
  },
};
</script>
