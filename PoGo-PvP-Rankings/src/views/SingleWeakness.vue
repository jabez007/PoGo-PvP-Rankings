<template>
  <TypesRanking :maxWeaknesses="1" :maxVulnerabilities="0">
  </TypesRanking>
</template>

<script>
export default {
  name: 'SingleWeakness',
  components: {
    TypesRanking: () => import('@/components/TypesRanking.vue'),
  },
};
</script>
