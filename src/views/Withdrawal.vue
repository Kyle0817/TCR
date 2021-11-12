<template>
  <div class="withdrawal view">
    <div class="amountBar row">
      <h1>提款金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn">清空</button>
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
      amount: 0,
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔提款',
      topTitleCoin: '硬幣提款',
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
  methods: {},
};
</script>
