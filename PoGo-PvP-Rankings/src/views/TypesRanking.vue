<template>
  <v-card width="100%">
    <TypesRankingTabs v-if="$vuetify.breakpoint.mdAndDown"
                      :baseTypes="baseTypes"
                       :types="types">
    </TypesRankingTabs>
    <TypesRankingTable v-else
                       :baseTypes="baseTypes"
                       :types="types">
    </TypesRankingTable>
  </v-card>
</template>

<script>
export default {
  name: 'TypesRanking',
  components: {
    TypesRankingTable: () => import('@/components/TypesRankingTable.vue'),
    TypesRankingTabs: () => import('@/components/TypesRankingTabs.vue'),
  },
  data: () => ({
    baseTypes: [],
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
        baseTypes.sort();
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
    onResize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          this.height = 53;
          break;
        case 'sm':
          this.height = 53;
          break;
        case 'md':
          this.height = 53;
          break;
        case 'lg':
          this.height = 53;
          break;
        case 'xl':
          this.height = 53;
          break;
        default:
          this.height = 53;
          break;
      }
    },
  },
};
</script>

<style scoped>

</style>
