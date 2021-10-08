<template>
  <div class="home">
    <div class="main">
      <div class="top row">
        <div class="col whiteBox outBox">
          <h1>統計資料</h1>
          <h3>上次營業日:{{ lastDate }}</h3>
          <Statistics />
        </div>
        <div class="col secondBox outBox">
          <h1>今日統計資料</h1>
          <Statistics />
        </div>
      </div>
      <div class="bottom row">
        <div class="whiteBox outBox col">
          <h1>鈔箱狀態</h1>
          <Tag :straight="straight" />
          <CassetteState />
        </div>
      </div>
    </div>
    <div class="sideInfoWrap">
      <div class="calendar">
        <div class="date boxShadow">
          <p>{{ toDate.year() }}</p>
          <p class="weekday">{{ getWeek }}</p>
        </div>
        <div class="date boxShadow">
          <p class="date">{{ toDate.month() + 1 }}</p>
        </div>
        <div class="date boxShadow">
          <p class="date">{{ toDate.date() }}</p>
        </div>
      </div>
      <table class="infoWrap">
        <tr v-for="tcrInfo in tcrInfos" :key="tcrInfo.title">
          <td>{{ tcrInfo.title }}</td>
          <td>{{ tcrInfo.info }}</td>
        </tr>
      </table>

      <div class="totalWrap">
        <div class="threeTotal" v-for="(item, key, index) in inventoryArr" :key="key">
          <div class="textWrap">
            <h1>${{ formatDollar.format(item) }}</h1>
            <p>{{ textMapping.getStatisticText(key) }}</p>
          </div>
          <div class="iconWrap">
            <i class="fas" :class="iconArr[index]"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment';
import textMapping from '@/data/textMapping';
import Statistics from '@/components/Statistics.vue';
import CassetteState from '@/components/CassetteState.vue';
import Tag from '@/components/public/Tag.vue';

const formatter = new Intl.NumberFormat();

export default {
  name: 'Home',
  components: {
    Statistics,
    CassetteState,
    Tag,
  },
  inject: ['inventoryData'],
  data() {
    return {
      straight: true,
      lastDate: '2021/09/28',
      toDate: moment(),
      week: moment().isoWeekday(),
      tcrInfos: [
        { title: 'TCR機台號', info: 'TCR14301' },
        { title: 'TCR櫃號', info: '9301' },
        { title: '櫃員編號', info: '114203' },
        { title: '分行系統狀態', info: '連線' },
        { title: 'TCR機台狀態', info: '正常' },
      ],
      formatDollar: formatter,
      inventoryArr: {
        TNA: this.inventoryData.LParam.statisticData.TNA,
        TCA: this.inventoryData.LParam.statisticData.TCA,
        INVENTORY_SUM:
          this.inventoryData.LParam.statisticData.TNA + this.inventoryData.LParam.statisticData.TCA,
      },
      iconArr: ['fa-money-bill-wave', 'fa-coins', 'fa-dollar-sign'],
    };
  },
  computed: {
    getWeek() {
      return textMapping.getWeek(this.week);
    },
    textMapping() {
      return textMapping;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
