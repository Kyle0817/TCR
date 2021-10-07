export default {

  mappingWeek: {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    7: '星期日',
  },

  statisticMapping: {
    TNA: '庫存鈔票總金額',
    TND: '吐鈔總金額',
    TND2: '存鈔總金額',
    TNU: '卸鈔總金額',
    TNL: '補鈔總金額',
    TCA: '庫存硬幣總金額',
    TCD: '吐幣總金額',
    TCD2: '存幣總金額',
    TCU: '卸幣總金額',
    TCL: '補幣總金額',
    INVENTORY_SUM: '庫存合計總金額',
  },

  itemKey: {
    TND: '提鈔',
    TND2: '存鈔',
    TNL: '補鈔',
    TNU: '卸鈔',
    TCD: '提幣',
    TCD2: '存幣',
    TCL: '補幣',
    TCU: '卸幣',
  },

  mode: {
    R: '存提循環',
    D: '存款箱',
    P: '放款箱',
    M: '混鈔存款',
  },

  getWeek(key) {
    return this.mappingWeek[key];
  },

  getStatisticText(key) {
    return this.statisticMapping[key];
  },

  getItemKey(key) {
    return this.itemKey[key];
  },

  getMode(key) {
    return this.mode[key];
  },
};
