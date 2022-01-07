<template>
  <div class="home view">
    <div class="main">
      <div class="top row">
        <div class="col whiteBox outBox">
          <h1>統計資料</h1>
          <h3>上次營業日:{{ date }}</h3>
          <Statistics :statistics="inventoryData.STATISTIC2" />
        </div>
        <div class="col secondBox outBox">
          <h1>今日統計資料</h1>
          <Statistics :statistics="inventoryData.STATISTIC1" />
        </div>
      </div>
      <div class="bottom row">
        <div class="whiteBox outBox col">
          <h1>鈔箱狀態</h1>
          <Tag :straight="straight" @selectBox="clickBox" />
          <CassetteState :home="true" :tag-boxName="tagBoxName" :th="tableTh" :tcrData="inventoryData.HISTORY" class="fixed" />
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
            <font-awesome-icon :icon="iconArr[index]" />
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
  data() {
    return {
      inventoryData: [],
      straight: true,
      toDate: moment(),
      week: moment().isoWeekday(),
      tagBoxName: '鈔箱盒',
      date: '', // 上次營業日
      tcrInfos: [
        { title: 'TCR機台號', info: 'TCR14301' },
        { title: 'TCR櫃號', info: '9301' },
        { title: '櫃員編號', info: '114203' },
        { title: '分行系統狀態', info: '連線' },
        { title: 'TCR機台狀態', info: '正常' },
      ],
      tableTh: ['鈔箱', '面額', '補鈔數', '卸鈔數', '存款數', '提款數', '吐拒數'],
      inventoryArr: {},
      iconArr: ['money-bill-wave', 'coins', 'dollar-sign'], // 庫存總金額icon
      formatDollar: formatter,
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
  watch: {
    // inventoryData(newVal) {
    //   if (newVal) {
    //     console.log(newVal);
    //     this.initData();
    //   }
    // },
  },
  methods: {
    clickBox(box) {
      this.tagBoxName = box;
    },
    initData() {
      this.inventoryArr = {
        TNA: this.inventoryData.STATISTIC1.TNA,
        TCA: this.inventoryData.STATISTIC1.TCA,
        INVENTORY_SUM: this.inventoryData.STATISTIC1.TNA + this.inventoryData.STATISTIC1.TCA,
      };
      this.date = moment(this.inventoryData.STATISTIC1.Date).format('yyyy/MM/DD');
    },
  },
  created() {
    this.$emitter.on('sendInventoryData', (data) => {
      this.inventoryData = data;
      this.initData();
    });
  },
  async beforeRouteUpdate(to, from) {
    if (to.fullPath !== from.fullPath) {
      console.log('to', to.fullPath, 'from', from.fullPath);
      this.$emitter.on('sendInventoryData', (data) => {
        this.inventoryData = data;
        this.initData();
      });
    }
    console.log('to', to.fullPath, 'from', from.fullPath);
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
