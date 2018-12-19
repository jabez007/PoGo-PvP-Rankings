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
                    close>
              <v-avatar :color="`${data.item} darken-3`">
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
    <v-card-text class="scroll">
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
          <TypesCard :types="t.name.split('/')"
                     :hover="false"
                     :color="`blue-grey ${index % 2 === 0 ? 'lighten-1' : 'darken-1'}`">
            <v-chip>
              {{ Math.round(t.score * 100) / 100 }}
            </v-chip>
          </TypesCard>
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
  },
  data: () => ({
    baseTypes: [],
    filter: [],
    types: [],
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
            types[`${typeOne}/${typeTwo}`] = {
              def: {
                immune: [],
                endures: [],
                resists: [],
                weak: [],
                vulnerable: [],
              },
            };

            const endurances = types[typeOne].def.immune
              .concat(types[typeTwo].def.immune);
            const resistances = types[typeOne].def.resists
              .concat(types[typeTwo].def.resists);
            const weaknesses = types[typeOne].def.weak
              .concat(types[typeTwo].def.weak);

            endurances
              .forEach((t, idx, a) => {
                if (a.indexOf(t) === idx) { // filter out duplicates
                  if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this endurance
                    if (resistances.indexOf(t) > -1) { // one type endures while the other type resists
                      // combines as immune
                      types[`${typeOne}/${typeTwo}`].def.immune.push(t);
                    } else if (weaknesses.indexOf(t) > -1) { // one type is immue and the other type is weak
                      // combined, that leaves resists
                      types[`${typeOne}/${typeTwo}`].def.resists.push(t);
                    } else { // doesn't pair up
                      // then it stays as is
                      types[`${typeOne}/${typeTwo}`].def.immune.push(t);
                    }
                  } else { // does there exist a double immunity?
                    console.log(`${typeOne}/${typeTwo} double immune to ${t}`);
                  }
                }
              });
            resistances
              .forEach((t, idx, a) => {
                if (a.indexOf(t) === idx) { // filter out duplicates
                  if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type is resistant
                    if (endurances.indexOf(t) > -1) { // already checked this
                      // do nothing this time
                    } else if (weaknesses.indexOf(t) > -1) { // one type resists while the other type is weak
                      // then they just cancel out
                    } else { // doesn't pair up
                      // then it stays as is
                      types[`${typeOne}/${typeTwo}`].def.resists.push(t);
                    }
                  } else { // both types have this strength
                    // combined as an immunity
                    types[`${typeOne}/${typeTwo}`].def.immune.push(t);
                  }
                }
              });
            weaknesses
              .forEach((t, idx, a) => {
                if (a.lastIndexOf(t) === idx) { // filter out duplicates
                  if (a.indexOf(t) === a.lastIndexOf(t)) { // only one type has this weakness
                    if (endurances.indexOf(t) > -1) { // already checked this
                      // do nothing this time
                    } else if (resistances.indexOf(t) > -1) { // already checked this
                      // do nothing this time
                    } else { // doesn't pair up
                      // then it stays as is
                      types[`${typeOne}/${typeTwo}`].def.weak.push(t);
                    }
                  } else { // both types have this weakness
                    // combined as a vulnerability
                    types[`${typeOne}/${typeTwo}`].def.vulnerable.push(t);
                  }
                }
              });
          }
        }

        self.types = Object.keys(types)
          .map(t => ({
            name: t,
            def: types[t].def,
            score: (18 - (types[t].def.immune.length + types[t].def.endures.length + types[t].def.resists.length + types[t].def.weak.length + types[t].def.vulnerable.length))
              + (types[t].def.immune.length * self.$typesEffective.def.immune)
              + (types[t].def.endures.length * self.$typesEffective.def.endures)
              + (types[t].def.resists.length * self.$typesEffective.def.resists)
              + (types[t].def.weak.length * self.$typesEffective.def.weak)
              + (types[t].def.vulnerable.length * self.$typesEffective.def.vulnerable),
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
};
</script>

<style scoped>
  .header {
    border-radius: 28px;
  }
  .scroll {
    max-height: 56em;
    overflow-y: scroll !important;
  }
</style>
