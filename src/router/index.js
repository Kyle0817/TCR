import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '@/components/public/Menu.vue';
import Hamburger from '@/components/public/Hamburger.vue';
import Header from '@/components/public/Header.vue';

const signIn = () => import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      Menu,
      Hamburger,
      Header,
    },
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: signIn,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
