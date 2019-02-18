import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/cups/boulder',
      name: 'boulderCup',
      component: () => import('./views/BoulderCup.vue'),
    },
    {
      path: '/cups/twilight',
      name: 'twilightCup',
      component: () => import('./views/TwilightCup.vue'),
    },
      {
      path: '/cups/tempest',
      name: 'tempestCup',
      component: () => import('./views/TempestCup.vue'),
    },
    {
      path: '*',
      component: () => import('./views/AllTypes.vue'),
    },
  ],
});
