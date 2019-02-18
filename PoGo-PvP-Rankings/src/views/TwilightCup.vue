<template>
  <TypesRanking :requestedTypes="['fairy', 'dark', 'poison', 'ghost']">
  </TypesRanking>
</template>

<script>
export default {
  name: 'AllTypes',
  components: {
    TypesRanking: () => import('@/components/TypesRanking.vue'),
  },
}
</script>
