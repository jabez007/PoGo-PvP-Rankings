<template>
  <v-card height="100%"
          flat
          tile>
  </v-card>
</template>

<script>
export default {
  name: 'PokemonStatsCard',
  props: {
    pokemon: {
      type: String,
      required: true,
    },
  },
  components: {
    // TypeChip: () => import('@/components/TypeChip.vue'),
  },
  data: () => ({
    stats: {
      attack: 0,
      special_attack: 0,
      defense: 0,
      special_defense: 0,
      speed: 0,
      hp: 0,
    },
  }),
  computed: {
    // https://pokemongo.gamepress.gg/explaining-october-2018-stat-change
    speed() {
      return 1 + ((this.stats.speed - 75) / 500);
    },
    scaledAttack() {
      return Math.round(2 * ((7 / 8) * Math.max(this.stats.attack, this.stats.special_attack) + (1 / 8) * Math.min(this.stats.attack, this.stats.special_attack)));
    },
    attack() {
      return Math.round(this.scaledAttack * this.speed);
    },
    scaledDefense() {
      return Math.round(2 * ((5 / 8) * Math.max(this.stats.defense, this.stats.special_defense) + (3 / 8) * Math.min(this.stats.defense, this.stats.special_defense)));
    },
    defense() {
      return Math.round(this.scaledDefense * this.speed);
    },
    stamina() {
      return Math.floor(this.stats.hp * 1.75 + 50);
    },
  },
  created() {
    const self = this;
    this.$pokedex.getPokemonByName(this.pokemon)
      .then((response) => {
        response.stats
          .forEach((s) => {
            self.stats[s.stat.name.replace('-', '_')] = s.base_stat;
          });
      });
  },
};
</script>

<style scoped>
</style>
