<template>
  <v-card>
    <v-card-title>
      <v-flex xs2>
        <v-card color="green accent-4"
                class="header"
                flat>
          <v-layout fill-height
                    align-center
                    row>
            <v-flex xs2>
              <v-chip color="success darken-4"
                      text-color="white">
                {{ Math.round($typesEffective.def.immune * 100) }}%
              </v-chip>
            </v-flex>
            <v-flex xs8
                    offset-xs1
                    class="hidden-md-and-down">
              <TypeSelect label="Filter by immunities"
                          class="title grey--text text--lighten-5"
                          :types="baseTypes"
                          v-model="immuneFilter">
              </TypeSelect>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card color="green accent-3"
                class="header"
                flat>
          <v-layout fill-height
                    align-center
                    row>
            <v-flex xs2>
              <v-chip color="green darken-3"
                      text-color="white">
                {{ Math.round($typesEffective.def.endures * 100) }}%
              </v-chip>
            </v-flex>
            <v-flex xs8
                    offset-xs1
                    class="hidden-md-and-down">
              <TypeSelect label="Filter by endurances"
                          class="title grey--text text--lighten-4"
                          :types="baseTypes"
                          v-model="enduresFilter">
              </TypeSelect>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card color="green accent-2"
                class="header"
                flat>
          <v-layout fill-height
                    align-center
                    row>
            <v-flex xs2>
              <v-chip color="green darken-2"
                      text-color="white">
                {{ Math.round($typesEffective.def.resists * 100) }}%
              </v-chip>
            </v-flex>
            <v-flex xs8
                    offset-xs1
                    class="hidden-md-and-down">
              <TypeSelect label="Filter by resistances"
                          class="title grey--text text--lighten-3"
                          :types="baseTypes"
                          v-model="resistsFilter">
              </TypeSelect>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <TypeSelect label="Filter by type"
                    :types="baseTypes"
                    v-model="filter">
        </TypeSelect>
      </v-flex>
      <v-flex xs2>
        <v-card color="red accent-2"
                class="header"
                flat>
          <v-layout fill-height
                    align-center
                    row>
            <v-flex xs8
                    offset-xs1
                    class="hidden-md-and-down">
              <TypeSelect label="Filter by weaknesses"
                          class="title grey--text text--lighten-3"
                          :types="baseTypes"
                          v-model="weakFilter">
              </TypeSelect>
            </v-flex>
            <v-flex xs2>
              <v-chip color="red darken-2"
                      text-color="white">
                {{ Math.round($typesEffective.def.weak * 100) }}%
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card color="red accent-3"
                class="header"
                flat>
          <v-layout fill-height
                    align-center
                    row>
            <v-flex xs8
                    offset-xs1
                    class="hidden-md-and-down">
              <TypeSelect label="Filter by Vulnerabilities"
                          class="title grey--text text--lighten-4"
                          :types="baseTypes"
                          v-model="vulnerableFilter">
              </TypeSelect>
            </v-flex>
            <v-flex xs2>
              <v-chip color="red darken-3"
                      text-color="white">
                {{ Math.round($typesEffective.def.vulnerable * 100) }}%
              </v-chip>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-card-title>
    <v-card-text class="scroll"
                 :style="`max-height: ${height}em;`">
      <v-layout v-for="(t, index) in displayedTypes"
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
  name: 'TypesRankingTable',
  props: {
    baseTypes: {
      type: Array,
      required: true,
    },
    types: {
      type: Array,
      required: true,
    },
    height: {
      type: Number,
      default: 53,
    },
  },
  components: {
    TypesCard: () => import('@/components/TypesCard.vue'),
    PokemonOfTypeDialog: () => import('@/components/PokemonOfTypeDialog.vue'),
    TypeSelect: () => import('@/components/TypeSelect.vue'),
  },
  data: () => ({
    filter: [],
    immuneFilter: [],
    enduresFilter: [],
    resistsFilter: [],
    weakFilter: [],
    vulnerableFilter: [],
  }),
  computed: {
    displayedTypes() {
      return this.types
        .filter(t => (this.filter.length === 0 ? t.score < 18 : this.filter.every(f => t.name.includes(f))))
        .filter(t => (this.immuneFilter.length === 0 || this.immuneFilter.some(f => t.def.immune.includes(f))))
        .filter(t => (this.enduresFilter.length === 0 || this.enduresFilter.some(f => t.def.endures.includes(f))))
        .filter(t => (this.resistsFilter.length === 0 || this.resistsFilter.some(f => t.def.resists.includes(f))))
        .filter(t => (this.weakFilter.length === 0 || this.weakFilter.some(f => t.def.weak.includes(f))))
        .filter(t => (this.vulnerableFilter.length === 0 || this.vulnerableFilter.some(f => t.def.vulnerable.includes(f))));
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
