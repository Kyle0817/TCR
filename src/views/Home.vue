<template>
  <div class="home">
    <Statistics />
    <div>
      <CassetteState />
    </div>
    <div>
      <table>
        <tr>
          <td>TCR機台號</td>
          <td>TCR14301</td>
        </tr>
        <tr>
          <td>TCR櫃號</td>
          <td>9301</td>
        </tr>
        <tr>
          <td>櫃員編號</td>
          <td>114203</td>
        </tr>
        <tr>
          <td>分行系統狀態</td>
          <td>連線</td>
        </tr>
        <tr>
          <td>TCR機台狀態</td>
          <td>正常</td>
        </tr>
      </table>
    </div>
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
};
</script>
<style lang="scss" scoped>
.home {
  border: 1px solid black;
  display: inline-block;
  margin-left: 86px;
  margin-top: 65px;
  max-width: calc(100vw - 76px);
}
</style>
