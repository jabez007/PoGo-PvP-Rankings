<template>
  <v-card height="100%"
          flat
          tile>
    <v-card-text class="text-xs-center">
      <v-chip>
        <v-avatar>
          ATK
        </v-avatar>
        {{ attack }}
      </v-chip>
      <v-chip>
        <v-avatar>
          DEF
        </v-avatar>
        {{ defense }}
      </v-chip>
      <v-chip>
        <v-avatar>
          STA
        </v-avatar>
        {{ stamina }}
      </v-chip>
    </v-card-text>
    <PokemonStatsRadar :chart-data="chartData"
                       :options="options">
    </PokemonStatsRadar>
    <v-card-actions>
    </v-card-actions>
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
    PokemonStatsRadar: () => import('@/components/PokemonStatsRadar'),
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
    options: {
      legend: {
        display: false,
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 0,
          bottom: 0,
        },
      },
      scale: {
        ticks: {
          // show/hides the scale labels
          display: false,
          //
          beginAtZero: true,
          suggestedMax: 500,
        },
      },
    },
    lineColor: '',
    fillColor: '',
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
    backgroundRgb() {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.fillColor);
      return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, 0.2)` : '';
    },
    chartData() {
      return {
        labels: ['Attack', 'Defense', 'Stamina'],
        datasets: [
          {
            label: 'Pokemon Go',
            data: [this.attack, this.defense, this.stamina],
            borderColor: this.lineColor,
            backgroundColor: this.backgroundRgb,
            fill: true,
          },
        ],
      };
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
        if (response.types.length === 1) {
          self.lineColor = self.$vuetify.theme[response.types[0].type.name];
          self.fillColor = self.$vuetify.theme[response.types[0].type.name];
        } else {
          self.lineColor = self.$vuetify.theme[response.types[0].type.name];
          self.fillColor = self.$vuetify.theme[response.types[1].type.name];
        }
      });
  },
};
</script>

<style scoped>
</style>
