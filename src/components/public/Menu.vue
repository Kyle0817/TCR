<template>
  <div class="menuBg">
    <ul class="outUl" :class="active">
      <li class="outLi home">
        <router-link to="/home" @click="activeRouter('home')">
          <font-awesome-icon icon="home" />
          <p>首頁</p>
        </router-link>
      </li>
      <li class="outLi" v-for="list in lists" :key="list.title" :class="list.router">
        <div>
          <font-awesome-icon :icon="list.class" />
          <p>{{ list.title }}</p>
        </div>
        <div class="tooltip">
          <ul class="boxShadow inUl">
            <li v-for="li in list.li" :key="li.title">
              <router-link :to="{ name: li.link }" @click="activeRouter(list.router)"> {{ li.title }}</router-link>
            </li>
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
      active: 'home',
      lists: [
        {
          title: '交易',
          class: 'cash-register',
          router: 'trade',
          li: [
            {
              title: '存款',
              link: 'Deposit',
            },
            {
              title: '提款',
              link: 'Withdrawal',
            },
            {
              title: '繳費',
              link: 'Pay',
            },
            {
              title: '兌換',
              link: 'Exchange',
            },
            {
              title: '點鈔',
              link: 'Counting',
            },
          ],
        },
        {
          title: '維護',
          class: 'toolbox',
          router: 'maintain',
          li: [
            {
              title: '補鈔',
              link: 'ReplenishCash',
            },
            {
              title: '補幣',
              link: 'ReplenishCoin',
            },
            {
              title: '卸鈔',
              link: 'UnloadCash',
            },
            {
              title: '卸幣',
              link: 'UnloadCoin',
            },
            {
              title: '鈔箱更換',
              link: 'ChangeCash',
            },
            {
              title: '幣筒更換',
              link: 'ChangeCoin',
            },
            {
              title: '鈔箱設定',
              link: 'Setting',
            },
          ],
        },
        {
          title: '查詢',
          class: 'search-dollar',
          router: 'search',
          li: [
            {
              title: '交易紀錄',
              link: 'Record',
            },
          ],
        },
      ],
    };
  },
  methods: {
    activeRouter(item) {
      this.active = item;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/public/scss/_menu.scss';
</style>
