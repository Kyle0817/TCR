<template>
  <div class="outBox whiteBox col">
    <div class="btns">
      <p class="box">
        {{ topTitle }}
      </p>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="title in titles" :key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="amountArr in amountArrs" :key="amountArr">
          <td class="col-4">{{ amountArr.Denomination }}</td>
          <template v-if="typeText">
            <td>{{ amountArr.Value }}</td>
          </template>
          <template v-if="typeInput">
            <td class="col-4">
              <input type="number" v-model.lazy="amountArr.Value" />
            </td>
          </template>
          <td class="number col-4">{{ parseInt(amountArr.Denomination) * parseInt(amountArr.Value) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ['topTitle', 'titles', 'amountArrs', 'typeText', 'typeInput'],
  computed: {},
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_table.scss';
table tr td {
  line-height: 35px;
  // padding: 10px;
}
.btns {
  // border: 1px solid black;
  position: absolute;
  top: -37px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  p.box {
    padding: 8px 30px 6px;
    position: relative;
    font-size: 17px;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $white;
      border-radius: 10px 10px 0 0;
      box-shadow: 2px -3px 5px rgba(114, 114, 114, 0.2);
      transform: perspective(10px) scale(1.1, 1.3) rotateX(5deg);
      z-index: -1;
    }
  }
}
</style>
