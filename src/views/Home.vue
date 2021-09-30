<template>
  <div class="home">
    <tcrStatus></tcrStatus>
  </div>
</template>

<script>
// @ is an alias to /src
import tcrStatus from '@/components/TcrStatus.vue';

export default {
  name: 'Home',
  components: {
    tcrStatus,
  },
};
</script>
