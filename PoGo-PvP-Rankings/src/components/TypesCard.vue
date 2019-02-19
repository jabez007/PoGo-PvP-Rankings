<template>
  <v-card height="100%"
          :color="color"
          flat
          tile
          :hover="onHover">
    <v-layout fill-height
              align-content-center
              row
              wrap>
      <v-flex>
        <v-layout justify-center
                  row
                  wrap>
          <slot>
          </slot>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout justify-center
                  row
                  wrap>
          <TypeChip v-for="(type, index) in types"
                    :key="index"
                    :type="type">
          </TypeChip>
        </v-layout>
      </v-flex>
    </v-layout>
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
