<template>
  <div class="deposit view">
    <div class="depositBar row">
      <h1>存款金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn" @click="start">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" v-if="startBtnText === '確認存入'">取消</button>
    </div>
    <div class="wrap row">
      <trade-box :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr"> </trade-box>
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" />
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
      this.startBtnText = '確認存入';
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/deposit.scss';
</style>
