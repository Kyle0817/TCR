<template>
  <div class="btns" :class="{ straight: straight }">
    <p
      class="box"
      v-for="title in titles"
      :key="title"
      :class="{ active: title === box, straight: straight }"
      @click="select(title)"
    >
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    straight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      titles: ['鈔箱盒', '硬幣盒', '回收盒'],
      box: '鈔箱盒',
    };
  },
  methods: {
    select(box) {
      this.box = box;
      this.$emit('selectBox', this.box);
    },
  },
};
</script>
<style lang="scss" scoped>
.btns {
  // border: 1px solid black;
  position: absolute;
  top: -37px;
  display: flex;
  left: 30px;
  &.straight {
    top: 20px;
    left: -43px;
    flex-direction: column;
  }

  p.box {
    // border: 1px solid black;
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
      background-color: $fourthColor;
      border-radius: 10px 10px 0 0;
      box-shadow: 2px -3px 5px rgba(114, 114, 114, 0.3);
      transform: perspective(10px) scale(1.1, 1.3) rotateX(5deg);
      z-index: -1;
    }
    &.active {
      z-index: 1;
      &::after {
        background-color: $white;
      }
    }
    &.straight {
      writing-mode: vertical-rl;
      padding: 15px 6px 15px 15px;
      margin-top: 20px;
      &::after {
        border-radius: 10px 0 0 10px;
        box-shadow: -2px 3px 5px rgba(114, 114, 114, 0.3);
        transform: perspective(10px) scale(1.1, 1.3) rotateY(-5deg);
      }
    }
  }
}
</style>
