<template>
  <div class="pay view">
    <div class="amountBar row">
      <h1>繳費金額 :</h1>
      <div class="inputWrap col-4">
        <input type="number" v-model="payment" />
      </div>
      <button type="button" class="firstBtn" @click="start" v-if="startBtn">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" @click="cancel" v-if="showCancel">取消</button>
    </div>
    <div class="amountBar row">
      <h1>已付金額 :</h1>
      <h1 class="line col-4">$ {{ amount }}</h1>
      <h1>應找金額 :</h1>
      <h1 class="line col-4">$ {{ ChangeAmount }}</h1>
    </div>
    <div class="wrap row">
      <TradeBox :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr" :typeText="true" :typeInput="false" />
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" :typeText="true" :typeInput="false" />
    </div>
    <PopAskStop :showPop="showPop" @askStop="askStop" />
    <div v-if="stop">
      <div class="overlay"></div>
      <div class="popBox outBox">
        <p class="wait">處理中... 請稍後</p>
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
      showPop: false,
      startBtn: true,
      stop: false,
      startBtnText: '開始繳費',
      payment: 0,
      amount: 0,
      ChangeAmount: 0,
      showCancel: false,
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔找零',
      topTitleCoin: '硬幣找零',
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
      if (this.startBtnText === '開始繳費') {
        this.startBtnText = '確認繳費';
        this.showCancel = true;
      } else {
        this.showCancel = false;
        this.ChangeAmount = this.payment - this.amount;
        this.showPop = true;
      }
    },
    cancel() {
      this.startBtnText = '開始繳費';
      this.showCancel = false;
      // 已付金額不為0才可以call api
    },
    askStop(res) {
      this.showPop = false;
      this.stop = res;
      this.startBtn = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_pop.scss';
</style>
