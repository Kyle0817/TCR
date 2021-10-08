<template>
  <div class="menuBg">
    <ul class="outUl">
      <li class="outLi">
        <router-link to="/">
          <i class="fas fa-home"></i>
          <p>首頁</p>
        </router-link>
      </li>
      <li class="outLi" v-for="list in lists" :key="list.title">
        <div>
          <i class="fas" :class="list.class"></i>
          <p>{{ list.title }}</p>
        </div>
        <div class="tooltip">
          <ul class="boxShadow inUl">
            <li v-for="li in list.li" :key="li">{{ li }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          title: '交易',
          class: 'fa-cash-register',
          li: ['存款', '提款', '繳費', '兌換', '點鈔'],
        },
        {
          title: '維護',
          class: 'fa-toolbox',
          li: ['補鈔', '補幣', '卸鈔', '卸幣', '鈔箱更換', '幣筒更換', '鈔箱設定'],
        },
        {
          title: '查詢',
          class: 'fa-search-dollar',
          li: ['鈔箱詳細狀態', '交易紀錄'],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_menu.scss';
</style>
