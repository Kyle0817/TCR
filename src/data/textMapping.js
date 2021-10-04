export default {
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
    R: '回收箱',
    D: '存款箱',
    P: '放款箱',
    M: '混鈔存款',
  },

  getItemKey(key) {
    return this.itemKey[key];
  },

  getMode(key) {
    return this.mode[key];
  },
};
