<template>
  <div class="home">
    <!-- <div class="row"> -->
    <div class="main col-9">
      <Statistics />
      <div>
        <CassetteState />
      </div>
    </div>
    <div class="sideInfoWrap col-3">
      <div class="calendar">
        <div class="date boxShadow">
          <p>2021</p>
          <p class="weekday">星期五</p>
        </div>
        <div class="date boxShadow">
          <p class="date">10</p>
        </div>
        <div class="date boxShadow">
          <p class="date">20</p>
        </div>
      </div>
      <table class="infoWrap">
        <tr v-for="tcrInfo in tcrInfos" :key="tcrInfo.title">
          <td>{{ tcrInfo.title }}</td>
          <td>{{ tcrInfo.info }}</td>
        </tr>
      </table>

      <div class="totalWrap">
        <div class="threeTotal">
          <div class="textWrap">
            <p>$676,200</p>
            <p>庫存鈔票總金額</p>
          </div>
          <div class="iconWrap">
            <i class="fas fa-money-bill-wave"></i>
          </div>
        </div>
        <div class="threeTotal">
          <div class="textWrap">
            <p>$676,200,200</p>
            <p>庫存硬幣總金額</p>
          </div>
          <div class="iconWrap">
            <i class="fas fa-money-bill-wave"></i>
          </div>
        </div>

        <div class="threeTotal">
          <div class="textWrap">
            <p>$6,200,200,200</p>
            <p>庫存合計總金額</p>
          </div>
          <div class="iconWrap">
            <i class="fas fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Statistics from '@/components/Statistics.vue';
import CassetteState from '@/components/CassetteState.vue';

export default {
  name: 'Home',
  components: {
    Statistics,
    CassetteState,
  },
  data() {
    return {
      tcrInfos: [
        { title: 'TCR機台號', info: 'TCR14301' },
        { title: 'TCR櫃號', info: '9301' },
        { title: '櫃員編號', info: '114203' },
        { title: '分行系統狀態', info: '連線' },
        { title: 'TCR機台狀態', info: '正常' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/home.scss';
</style>
