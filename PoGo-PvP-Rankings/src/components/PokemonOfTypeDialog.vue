<template>
  <v-dialog v-model="dialog"
            width="500"
            lazy>
    <TypesCard slot="activator"
               :types="types"
               :hover="false">
      <slot>
      </slot>
    </TypesCard>
    <v-card>
      <v-toolbar card>
        <slot>
        </slot>
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
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(p, i) in pokemon"
                                   :key="i">
          <div slot="header">{{ p }}</div>
          <PokemonStatsCard :pokemon="p">
          </PokemonStatsCard>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
    PokemonStatsCard: () => import('@/components/PokemonStatsCard.vue'),
  },
  data: () => ({
    dialog: false,
    pokemon: [],
  }),
  mounted() {
    const self = this;
    // fetch pokemon of given type(s)
    if (this.types.length === 1) {
      this.$pokedex.getTypeByName(this.types[0])
        .then((response) => {
          response.pokemon
            .forEach((p) => {
              self.pokemon.push(p.pokemon.name);
            });
        });
    } else {
      Promise.all(this.types.map((t) => self.$pokedex.getTypeByName(t)))
        .then((responses) => {
          responses
            .reduce((aggregate, r) => aggregate.concat(r.pokemon), [])
            .map((p) => p.pokemon.name)
            .forEach((pkmn, idx, array) => {
              if (array.indexOf(pkmn) === idx) { // filter out duplicates
                if (array.indexOf(pkmn) !== array.lastIndexOf(pkmn)) {  // but we want duplicates
                  // this really only works correctly for dual typing
                  self.pokemon.push(pkmn);
                }
              }
            });
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
