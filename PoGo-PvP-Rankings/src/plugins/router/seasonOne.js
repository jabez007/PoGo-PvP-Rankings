const path = '/cups/season1';

export default [
  {
    path: `${path}/boulder`,
    name: 'boulderCup',
    component: () => import('@/views/cups/season1/Boulder.vue'),
  },
  {
    path: `${path}/twilight`,
    name: 'twilightCup',
    component: () => import('@/views/cups/season1/Twilight.vue'),
  },
  {
    path: `${path}/tempest`,
    name: 'tempestCup',
    component: () => import('@/views/cups/season1/Tempest.vue'),
  },
];
