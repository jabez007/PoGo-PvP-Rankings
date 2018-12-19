<template>
  <v-dialog v-model="dialog">
    <TypesCard slot="activator"
               :types="types"
               :hover="false">
    </TypesCard>
    <v-card>
      <v-toolbar card>
        <v-spacer></v-spacer>
        <TypeChip v-for="(type, index) in types"
                  :key="index"
                  :type="type">
        </TypeChip>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = !dialog"
               icon>
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      TODO: List Pokemon of this typing
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'PokemonOfTypeDialog',
  props: {
    types: {
      type: Array,
      required: true,
    },
  },
  components: {
    TypesCard: () => import('@/components/TypesCard.vue'),
    TypeChip: () => import('@/components/TypeChip.vue'),
  },
  data: () => ({
    dialog: false,
    pokemon: [],
  }),
  created() {
    // fetch pokemon of given type(s)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
