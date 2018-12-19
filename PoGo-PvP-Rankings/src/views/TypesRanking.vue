<template>
  <v-card width="100%">
    <v-toolbar card>
      <v-flex xs2>
        <v-card color="green accent-4"
                class="header"
                flat>
          <v-layout align-center
                    row>
            <v-chip color="success darken-4"
                    text-color="white">
              {{ Math.round($typesEffective.def.immune * 100) }}%
            </v-chip>
            <v-spacer></v-spacer>
            <h6 class="title grey--text text--lighten-5 hidden-md-and-down">Immune</h6>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card color="green accent-3"
                class="header"
                flat>
          <v-layout align-center
                    row>
            <v-chip color="green darken-3"
                    text-color="white">
              {{ Math.round($typesEffective.def.endures * 100) }}%
            </v-chip>
            <v-spacer></v-spacer>
            <h6 class="title grey--text text--lighten-4 hidden-md-and-down">Endures</h6>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card color="green accent-2"
                class="header"
                flat>
          <v-layout align-center
                    row>
            <v-chip color="green darken-2"
                    text-color="white">
              {{ Math.round($typesEffective.def.resists * 100) }}%
            </v-chip>
            <v-spacer></v-spacer>
            <h6 class="title grey--text text--lighten-3 hidden-md-and-down">Resists</h6>
            <v-spacer></v-spacer>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-select label="Filter by type"
                  prepend-inner-icon="filter_list"
                  :items="baseTypes"
                  v-model="filter"
                  hide-details
                  dense
                  multiple
                  clearable>
          <template slot="selection"
                    slot-scope="data">
            <v-chip @input="filter.splice(filter.indexOf(data.item), 1)"
                    :color="data.item"
                    text-color="white"
                    small
                    close>
              <v-avatar :color="`${data.item} darken-3`">
                <img :src="getImgSrc(data.item)" />
              </v-avatar>
            </v-chip>
          </template>
        </v-select>
      </v-flex>
      <v-flex xs2>
        <v-card color="red accent-2"
                class="header"
                flat>
          <v-layout align-center
                    row>
            <v-spacer></v-spacer>
            <h6 class="title grey--text text--lighten-3 hidden-md-and-down">Weak to</h6>
            <v-spacer></v-spacer>
            <v-chip color="red darken-2"
                    text-color="white">
              {{ Math.round($typesEffective.def.weak * 100) }}%
            </v-chip>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card color="red accent-3"
                class="header"
                flat>
          <v-layout align-center
                    row>
            <v-spacer></v-spacer>
            <h6 class="title grey--text text--lighten-4 hidden-md-and-down">Vulnerable to</h6>
            <v-spacer></v-spacer>
            <v-chip color="red darken-3"
                    text-color="white">
              {{ Math.round($typesEffective.def.vulnerable * 100) }}%
            </v-chip>
          </v-layout>
        </v-card>
      </v-flex>
    </v-toolbar>
    <v-card-text class="scroll"
                 :style="`max-height: ${height}em;`">
      <v-layout v-for="(t, index) in types.filter((t) => filter.length === 0 || filter.every((f) => t.name.includes(f)))"
                :key="t.name"
                row>
        <v-flex xs2>
          <TypesCard :types="t.def.immune"
                     :color="`blue-grey ${index % 2 === 0 ? 'lighten-1' : 'darken-1'}`">
          </TypesCard>
        </v-flex>
        <v-flex xs2>
          <TypesCard :types="t.def.endures"
                     :color="`blue-grey ${index % 2 === 0 ? 'lighten-1' : 'darken-1'}`">
          </TypesCard>
        </v-flex>
        <v-flex xs2>
          <TypesCard :types="t.def.resists"
                     :color="`blue-grey ${index % 2 === 0 ? 'lighten-1' : 'darken-1'}`">
          </TypesCard>
        </v-flex>
        <v-flex xs2>
          <PokemonOfTypeDialog :types="t.name.split('/')">
            <v-chip>
              {{ Math.round(t.score * 100) / 100 }}
            </v-chip>
          </PokemonOfTypeDialog>
        </v-flex>
        <v-flex xs2>
          <TypesCard :types="t.def.weak"
                     :color="`blue-grey ${index % 2 === 0 ? 'lighten-1' : 'darken-1'}`">
          </TypesCard>
        </v-flex>
        <v-flex xs2>
          <TypesCard :types="t.def.vulnerable"
                     :color="`blue-grey ${index % 2 === 0 ? 'lighten-1' : 'darken-1'}`">
          </TypesCard>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TypesRanking',
  components: {
    TypesCard: () => import('@/components/TypesCard.vue'),
    PokemonOfTypeDialog: () => import('@/components/PokemonOfTypeDialog.vue'),
  },
  data: () => ({
    baseTypes: [],
    filter: [],
    types: [],
    height: 0,
  }),
  created() {
    const self = this;
    const promises = [];
    for (let i = 1; i <= 18; i += 1) {
      promises.push(this.$pokedex.resource(`/api/v2/type/${i}/`));
    }
    Promise.all(promises)
      .then((responses) => {
        const types = {};
        responses
          .forEach((response) => {
            types[response.name] = {
              def: {
                immune: [],
                endures: response.damage_relations.no_damage_from
                  .map(type => type.name),
                resists: response.damage_relations.half_damage_from
                  .map(type => type.name),
                weak: response.damage_relations.double_damage_from
                  .map(type => type.name),
                vulnerable: [],
              },
            };
          });
        const baseTypes = Object.keys(types);
        self.baseTypes = baseTypes;
        for (let i = 0; i < baseTypes.length - 1; i += 1) {
          for (let j = i + 1; j < baseTypes.length; j += 1) {
            const typeOne = baseTypes[i];
            const typeTwo = baseTypes[j];
            types[`${typeOne}/${typeTwo}`] = self.$combineTypes(types[typeOne], types[typeTwo]);
          }
        }

        self.types = Object.keys(types)
          .map(t => ({
            name: t,
            def: types[t].def,
            score: self.$getTypeDefScore(types[t]),
          }))
          .sort((t1, t2) => {
            if (t1.score < t2.score) {
              return -1;
            }
            if (t1.score > t2.score) {
              return 1;
            }
            // same score
            if (t1.def.immune.length > t2.def.immune.length || t1.def.vulnerable.length < t2.def.vulnerable.length) {
              return -1;
            } if (t1.def.immune.length < t2.def.immune.length && t1.def.vulnerable.length > t2.def.vulnerable.length) {
              return 1;
            }
            // same number of immunities and vulnerabilities
            if (t1.def.resists.length > t2.def.resists.length || t1.def.weak.length < t2.def.weak.length) {
              return -1;
            } if (t1.def.resists.length < t2.def.resists.length && t1.def.weak.length > t2.def.weak.length) {
              return 1;
            }
            // same number of resistances and weaknesses
            return 0;
          });
      });
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },
  methods: {
    getImgSrc(type) {
      return require(`../assets/${type}.png`);
    },
    onResize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          this.height = 56;
          break;
        case 'sm':
          this.height = 56;
          break;
        case 'md':
          this.height = 56;
          break;
        case 'lg':
          this.height = 56;
          break;
        case 'xl':
          this.height = 56;
          break;
      }
    },
  },
};
</script>

<style scoped>
  .header {
    border-radius: 28px;
  }
  .scroll {
    overflow-y: scroll !important;
  }

  div.v-dialog__container {
    width: 100% !important;
    height: 100% !important;
  }
</style>
