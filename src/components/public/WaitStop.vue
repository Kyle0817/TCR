<template>
  <div v-if="waitStop">
    <div class="overlay"></div>
    <div class="popBox outBox">
      <p class="wait">處理中... 請稍後</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['stop'],
  data() {
    return {
      stop: false,
    };
  },
};
</script>
