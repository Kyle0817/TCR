<template>
  <div class="record view">
    <div class="whiteBox outBox">
      <div class="row">
        <h1 class="col-2">交易紀錄</h1>
        <DateSearchBar />
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
                <button class="svgBtn" type="button" @click="showDetail(tcrEj.Currency, tcrEj.Message)">
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
            <tr>
              <th colspan="2">備註</th>
            </tr>
            <tr>
              <td colspan="2" class="textLeft">{{ meg || '無' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import DateSearchBar from '@/components/DateSearchBar.vue';

export default {
  components: { DateSearchBar },
  data() {
    return {
      titles: ['交易序號', '交易類別', '員工編號', '交易日期', '交易時間', '狀態', '總金額', '明細'],
      infoTitles: ['面額', '張數'],
      infoSno: 'S1234567',
      showInfo: false,
      tcrEjs: [
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '這裡是備註這裡是備註這裡是備註這裡是備註這裡是備註',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$2,000,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '這裡是備註這裡是備註這裡是備註這裡是備註這裡是備註',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
        {
          SNO: 'S1234567',
          TRN: '提款',
          EID: 'T123456',
          Date: '2021/11/09',
          Time: '10:09:08',
          Status: '成功',
          Amount: '$20,000',
          Currency: [
            {
              Denomination: 2000,
              Value: 99,
            },
            {
              Denomination: 1000,
              Value: 10,
            },
            {
              Denomination: 500,
              Value: 5,
            },
            {
              Denomination: 100,
              Value: 2,
            },
          ],
          Message: '',
        },
      ],
      currArr: [],
      meg: '',
    };
  },
  methods: {
    showDetail(currency, message) {
      this.showInfo = !this.showInfo;
      this.currArr = currency;
      this.meg = message;
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/record.scss';
@import '@/assets/public/scss/_table.scss';
@import '@/assets/public/scss/_tableFixed.scss';
</style>
