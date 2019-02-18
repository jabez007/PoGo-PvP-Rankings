<template>
  <TypesRanking :requestedTypes="['electric', 'ice', 'flying', 'ground']">
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
