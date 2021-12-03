<template>
  <div class="record view">
    <div class="whiteBox outBox">
      <div class="row">
        <h1 class="col-2">交易紀錄</h1>
        <DateSearchBar @searchDate="transactionDate" />
      </div>
      <table class="fixed">
        <thead>
          <tr>
            <th v-for="title in titles" :key="title">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="tcrEjs.length <= 0">
            <tr class="noData">
              <td>無資料</td>
            </tr>
          </template>
          <template v-else>
            <tr v-for="tcrEj in tcrEjs" :key="tcrEj">
              <td>{{ tcrEj.SNO }}</td>
              <td>{{ tcrEj.TRN }}</td>
              <td>{{ tcrEj.EID }}</td>
              <td>{{ tcrEj.Date }}</td>
              <td>{{ tcrEj.Time }}</td>
              <td>{{ tcrEj.Status }}</td>
              <td class="number">{{ tcrEj.Amount }}</td>
              <td>
                <button class="svgBtn" type="button" @click="showDetail(tcrEj)">
                  <font-awesome-icon icon="clipboard-list" />
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="overlay" v-show="showInfo"></div>
      <div class="moreInfo outBox whiteBox" v-show="showInfo">
        <h3>交易序號:{{ infoSno }}</h3>
        <div class="times" @click="showInfo = !showInfo">
          <font-awesome-icon icon="times" />
        </div>
        <table>
          <tbody>
            <tr>
              <th v-for="infoTitle in infoTitles" :key="infoTitle">{{ infoTitle }}</th>
            </tr>
            <tr v-for="(curr, index) in currArr" :key="index">
              <td>{{ curr.Denomination }}</td>
              <td>{{ curr.Value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import DateSearchBar from '@/components/DateSearchBar.vue';

export default {
  components: { DateSearchBar },
  data() {
    return {
      titles: ['交易序號', '交易類別', '員工編號', '交易日期', '交易時間', '狀態', '總金額', '明細'],
      infoTitles: ['面額', '張數'],
      infoSno: '',
      showInfo: false,
      tcrEjs: [],
      currArr: [],
      meg: '',
      date: moment(),
    };
  },
  methods: {
    showDetail(tcrEj) {
      this.currArr = [];
      this.infoSno = tcrEj.SNO;
      const meg = tcrEj.Message.split(/[,]/);
      for (let i = 0; i < meg.length; i += 1) {
        const { 0: Denomination, 1: Value } = { ...meg[i].split(/[*]/) };
        this.currArr.push({ Denomination, Value });
      }
      this.showInfo = !this.showInfo;
    },
    transactionDate(emitDate) {
      if (emitDate !== null) {
        this.date = moment(emitDate);
        this.transactionRecord();
      }
    },
    transactionRecord() {
      const tcrAPI = process.env.VUE_APP_TCR_API;
      this.$axios
        .post(`${tcrAPI}EJLog/${this.date.format('yyyyMMDD')}`)
        .then((res) => {
          this.tcrEjs = JSON.parse(JSON.parse(res.data).LParam);
          console.log(this.tcrEjs);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.tcrEjs = [
      {
        SNO: '13123',
        TRN: '提款',
        EID: '1111',
        Date: '2021/12/02',
        Time: '19:00:00',
        Amount: 2000,
        Status: '成功',
        Message: '$1000*5,$100*5',
      },
      {
        SNO: '13124',
        TRN: '提款',
        EID: '1111',
        Date: '2021/12/02',
        Time: '19:00:00',
        Amount: 2000,
        Status: '成功',
        Message: '$1000*1',
      },
    ];
    this.transactionRecord();
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/record.scss';
@import '@/assets/public/scss/_table.scss';
@import '@/assets/public/scss/_tableFixed.scss';
</style>
