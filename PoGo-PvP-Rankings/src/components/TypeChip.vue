<template>
  <v-chip :color="type"
          text-color="white">
    <v-avatar :color="`${type} darken-3`">
      <img :src="imgSrc"/>
    </v-avatar>
    <span class="hidden-md-and-down">{{ type }}</span>
  </v-chip>
</template>

<script>
export default {
  name: 'TypeChip',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`../assets/${this.type}.png`);
    },
  },
};
</script>

<style scoped>
</style>
