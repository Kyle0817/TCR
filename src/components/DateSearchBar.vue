<template>
  <div class="inputGroup">
    <form action="">
      <date-picker v-model="selectedDate" :input-debounce="500" color="teal" :max-date="new Date()" :model-config="modelConfig">
        <template v-slot="{ inputValue, inputEvents }">
          <input :value="inputValue" v-on="inputEvents" placeholder="日期: YYYY/MM/DD" />
        </template>
      </date-picker>
      <button>
        <font-awesome-icon icon="search" />
      </button>
    </form>
  </div>
</template>
<script>
import { DatePicker } from 'v-calendar';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      selectedDate: null,
      modelConfig: {
        type: 'string',
        mask: 'YYYYMMDD', // Uses 'iso' if missing
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.inputGroup {
  // border: 1px solid black;
  vertical-align: middle;
  font-size: 0;
  div {
    display: inline-block;
    input {
      font-size: 16px;
      padding: 5px;
      border: 2px solid $secondColor;
      border-radius: 5px 0 0 5px;
      border-right: none;
      outline: none;
      &:focus {
        background-color: $body;
      }
    }
  }
  button {
    display: inline-block;
    border: none;
    padding: 4px 10px;
    background-color: $secondColor;
    vertical-align: top;
    font-size: 16px;
    text-align: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    svg {
      color: $white;
      font-size: 18px;
    }
  }
}
</style>
