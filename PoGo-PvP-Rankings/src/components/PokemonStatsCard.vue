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
    types: {
      pokemon: String,
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
  })
  computed: {
    speed() {
      return 1 + ((this.stats.speed - 75) / 500);
    },
    attack() {
      return Math.round(this.scaled(this.stats.attack, this.stats.special_attack) * this.speed);
    },
    defense() {
    return Math.round(this.scaled(this.stats.defense, this.stats.special_defense) * this.speed);
    },
    stamina() {
      return 2 * this.stats.hp;
    },
  },
  created() {
    const self = this;
    this.$pokedex.getPokemonByName(this.pokemon)
      .then((response) => {
        response.stats
          .forEach((s) => {
            self.stats[s.stat.name.replace('-','_')] = s.base_stat;
          });
      });
  },
  methods: {
    scaled(physical, special) {
      return Math.round(2 * ((7 / 8) * Math.max(physical, special) + (1 / 8) * Math.min(physical, special)));
    },
  },
};
</script>

<style scoped>
</style>
