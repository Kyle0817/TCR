<template>
  <div class="home">
    <div class="main">
      <Statistics />
      <div>
        <CassetteState />
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
            <p>${{ formatDollar.format(item) }}</p>
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

const formatter = new Intl.NumberFormat();

export default {
  name: 'Home',
  components: {
    Statistics,
    CassetteState,
  },
  inject: ['inventoryData'],
  data() {
    return {
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
