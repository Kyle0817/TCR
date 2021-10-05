<template>
  <div class="home">
    <statistics></statistics>
    <div>
      <cassetteState></cassetteState>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import statistics from '@/components/Statistics.vue';
import cassetteState from '@/components/CassetteState.vue';

export default {
  name: 'Home',
  components: {
    statistics,
    cassetteState,
  },
};
</script>
<style lang="scss" scoped>
.home {
  border: 1px solid black;
  display: inline-block;
  margin-left: 86px;
  max-width: calc(100vw - 76px);
}
</style>
