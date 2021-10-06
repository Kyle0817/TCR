import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '@/components/public/Menu.vue';
import Hamburger from '@/components/public/Hamburger.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      Menu,
      Hamburger,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
