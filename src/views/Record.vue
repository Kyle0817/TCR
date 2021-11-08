<template>
  <div class="record view">
    <div class="whiteBox outBox">
      <div class="row">
        <h1 class="col-2">交易紀錄</h1>
        <DateSearchBar />
      </div>
    </div>
  </div>
</template>
<script>
import DateSearchBar from '@/components/DateSearchBar.vue';

export default {
  components: { DateSearchBar },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/record.scss';
</style>
