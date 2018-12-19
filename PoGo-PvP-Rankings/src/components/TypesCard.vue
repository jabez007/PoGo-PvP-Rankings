<template>
  <v-card height="100%"
          class="text-xs-center"
          :color="color"
          flat
          tile
          :hover="onHover">
    <slot>
    </slot>
    <TypeChip v-for="(type, index) in types"
              :key="index"
              :type="type">
    </TypeChip>
  </v-card>
</template>

<script>
export default {
  name: 'TypesCard',
  props: {
    types: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: undefined,
    },
    hover: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    TypeChip: () => import('@/components/TypeChip.vue'),
  },
  computed: {
    onHover() {
      if (this.types.length === 0) {
        return false;
      }
      return this.hover;
    },
  },
};
</script>

<style scoped>
</style>
