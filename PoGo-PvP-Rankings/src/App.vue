<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list three-line dense>
        <v-list-group prepend-icon="" :value="true" no-action lazy>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Silph Arena</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group prepend-icon="" :value="false" sub-group no-action lazy>
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>Season 1 (2019)</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/cups/season1/boulder" ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>Boulder Cup</v-list-tile-title>
                    <v-list-tile-sub-title>January</v-list-tile-sub-title>
                    <v-list-tile-sub-title
                      >Rock, Ground, Steel, Fighting</v-list-tile-sub-title
                    >
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/cups/season1/twilight" ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>Twilight Cup</v-list-tile-title>
                    <v-list-tile-sub-title>February</v-list-tile-sub-title>
                    <v-list-tile-sub-title
                      >Fairy, Dark, Poison, Ghost</v-list-tile-sub-title
                    >
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/cups/season1/tempest" ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>Tempest Cup</v-list-tile-title>
                    <v-list-tile-sub-title>March</v-list-tile-sub-title>
                    <v-list-tile-sub-title
                      >Electric, Ice, Flying, Ground</v-list-tile-sub-title
                    >
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
        </v-list-group>
        <v-list-tile to="/weaknesses/1" ripple>
            <v-list-tile-content>
              <v-list-tile-title>Single Weakness</v-list-tile-title>
              <v-list-tile-sub-title>No Vulnerabilities</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar clipped-left fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PoGo PvP Rankings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat>
          Home
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center align-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    season1: false,
  }),
  computed: {
    group: {
      get() {
        return this.season1;
      },
      set() {
        this.season1 = true;
      },
    },
  },
};
</script>

<style>
div.v-dialog__activator {
  width: 100% !important;
  height: 100% !important;
}
</style>
