<template>
  <TypesRanking :requestedTypes="['rock', 'ground', 'steel', 'fighting']">
  </TypesRanking>
</template>

<script>
export default {
  name: 'AllTypes',
  components: {
    TypesRanking: () => import('@/components/TypesRanking.vue'),
  },
};
</script>
