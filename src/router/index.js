import { createRouter, createWebHashHistory } from 'vue-router';
import Menu from '@/components/public/Menu.vue';
import Hamburger from '@/components/public/Hamburger.vue';
import Header from '@/components/public/Header.vue';
import SignIn from '../views/SignIn.vue';

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const detailInfo = () => import(/* webpackChunkName: "search" */ '../views/DetailInfo.vue');
const Record = () => import(/* webpackChunkName: "search" */ '../views/Record.vue');
const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/deposit',
    name: 'Deposit',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/pay',
    name: 'Pay',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/exchange',
    name: 'Exchange',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/counting',
    name: 'Counting',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/replenishCash',
    name: 'ReplenishCash',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/replenishCoin',
    name: 'ReplenishCoin',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/unloadCash',
    name: 'UnloadCash',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/unloadCoin',
    name: 'UnloadCoin',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/changeCash',
    name: 'ChangeCash',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/changeCoin',
    name: 'ChangeCoin',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/setting',
    name: 'Setting',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/detailInfo',
    name: 'DetailInfo',
    components: {
      default: detailInfo,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/record',
    name: 'Record',
    components: {
      default: Record,
      Menu,
      Hamburger,
      Header,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
