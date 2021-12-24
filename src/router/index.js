import { createRouter, createWebHashHistory } from 'vue-router';
import Menu from '@/components/public/Menu.vue';
import Hamburger from '@/components/public/Hamburger.vue';
import Header from '@/components/public/Header.vue';
import SignIn from '../views/SignIn.vue';

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const Record = () => import(/* webpackChunkName: "search" */ '../views/Record.vue');
const Deposit = () => import(/* webpackChunkName: "trade" */ '../views/Deposit.vue');
const Withdrawal = () => import(/* webpackChunkName: "trade" */ '../views/Withdrawal.vue');
const Pay = () => import(/* webpackChunkName: "trade" */ '../views/Pay.vue');
const Exchange = () => import(/* webpackChunkName: "trade" */ '../views/Exchange.vue');
const Counting = () => import(/* webpackChunkName: "trade" */ '../views/Counting.vue');
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
    path: '/trade/deposit',
    name: 'Deposit',
    components: {
      default: Deposit,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/trade/withdrawal',
    name: 'Withdrawal',
    components: {
      default: Withdrawal,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/trade/pay',
    name: 'Pay',
    components: {
      default: Pay,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/trade/exchange',
    name: 'Exchange',
    components: {
      default: Exchange,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/trade/counting',
    name: 'Counting',
    components: {
      default: Counting,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/replenishCash',
    name: 'ReplenishCash',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/replenishCoin',
    name: 'ReplenishCoin',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/unloadCash',
    name: 'UnloadCash',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/unloadCoin',
    name: 'UnloadCoin',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/changeCash',
    name: 'ChangeCash',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/changeCoin',
    name: 'ChangeCoin',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/maintain/setting',
    name: 'Setting',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/search/record',
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
