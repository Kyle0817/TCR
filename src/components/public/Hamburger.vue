<template>
  <div class="hamburger">
    <CassetteState />
  </div>
</template>
<script>
import CassetteState from '@/components/CassetteState.vue';

export default {
  components: { CassetteState },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_hamburger.scss';
</style>
