import Vue from 'vue';
import Router from 'vue-router';
import seasonOne from './seasonOne';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    ...seasonOne,
    {
      path: '/weaknesses/1',
      name: 'singleWeakness',
      component: () => import('@/views/SingleWeakness.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/AllTypes.vue'),
    },
  ],
});
