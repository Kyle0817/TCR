<template>
  <div class="home">
    <statistics></statistics>
  </div>
</template>

<script>
// @ is an alias to /src
import statistics from '@/components/Statistics.vue';

export default {
  name: 'Home',
  components: {
    statistics,
  },
};
</script>
