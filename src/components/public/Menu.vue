<template>
  <div class="menuBg">
    <ul class="outUl">
      <li>
        <router-link to="/">
          <i class="fas fa-home"></i>
          <p>首頁</p>
        </router-link>
      </li>
      <li>
        <i class="fas fa-cash-register"></i>
        <p>交易</p>
        <div class="tooltip">
          <ul>
            <li>存款</li>
            <li>提款</li>
            <li>繳費</li>
            <li>兌換</li>
            <li>點鈔</li>
          </ul>
        </div>
      </li>
      <li>
        <i class="fas fa-toolbox"></i>

        <p>維護</p>
      </li>
      <li>
        <i class="fas fa-search-dollar"></i>

        <p>查詢</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/public/scss/_menu.scss';
</style>
