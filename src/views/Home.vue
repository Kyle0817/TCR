<template>
  <div class="home">
    <statistics></statistics>
  </div>
  <div>
    <cassetteState></cassetteState>
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
