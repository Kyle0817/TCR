<template>
  <div class="exchange view">
    <div class="amountBar row">
      <h1>兌換金額 :</h1>
      <h1 class="line col-6">$ {{ amount }}</h1>
      <button type="button" class="firstBtn" @click="start">{{ startBtnText }}</button>
      <button type="button" class="cancelBtn" @click="cancel" v-if="startBtnText === '確認兌換'">取消</button>
    </div>
    <div class="wrap row">
      <TradeBox :topTitle="topTitleCash" :titles="titles" :amountArrs="cashArr" :typeText="false" :typeInput="true" />
      <TradeBox :topTitle="topTitleCoin" :titles="titles" :amountArrs="coinArr" :typeText="false" :typeInput="true" />
    </div>
    <PopAskStop :showPop="showPop" @askStop="askStop" />
    <WaitStop :waitStop="stop" />
  </div>
</template>
<script>
import TradeBox from '@/components/public/TradeBox.vue';
import PopAskStop from '@/components/public/PopAskStop.vue';
import WaitStop from '@/components/public/waitStop.vue';

export default {
  components: {
    TradeBox,
    PopAskStop,
    WaitStop,
  },
  data() {
    return {
      stop: false,
      showPop: false,
      startBtnText: '開始兌換',
      amount: 0,
      titles: ['面額', '數量', '金額'],
      topTitleCash: '紙鈔兌換',
      topTitleCoin: '硬幣兌換',
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
      if (this.startBtnText === '開始兌換') {
        this.startBtnText = '確認兌換';
      } else {
        this.showPop = true;
      }
    },
    cancel() {
      this.startBtnText = '開始兌換';
    },
    askStop(res) {
      this.showPop = false;
      this.stop = res;
      this.startBtn = false;
    },
  },
};
</script>
