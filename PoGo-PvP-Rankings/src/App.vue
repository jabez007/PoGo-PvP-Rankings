<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer"
                         clipped
                         fixed
                         app>
      <v-list three-line 
              dense>
        <v-list-group prepend-icon=""
                      :value="true"
                      no-action
                      lazy>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Silph Arena Cups</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/cups/boulder"
                       ripple>
            <v-list-tile-content>
              <v-list-tile-title>Boulder Cup</v-list-tile-title>
              <v-list-tile-sub-title>January</v-list-tile-title>
              <v-list-tile-sub-title>Rock, Ground, Steel, Fighting</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/cups/twilight"
                       ripple>
            <v-list-tile-content>
              <v-list-tile-title>Twilight Cup</v-list-tile-title>
              <v-list-tile-sub-title>February</v-list-tile-title>
              <v-list-tile-sub-title>Fairy, Dark, Poison, Ghost</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/cups/tempest"
                       ripple>
            <v-list-tile-content>
              <v-list-tile-title>Tempest Cup</v-list-tile-title>
              <v-list-tile-sub-title>March</v-list-tile-title>
              <v-list-tile-sub-title>Electric, Ice, Flying, Ground</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar clipped-left
               fixed
               app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PoGo PvP Rankings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/"
               flat>
          Home
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center
                  align-center>
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
  }),
};
</script>

<style>
  div.v-dialog__activator {
    width: 100% !important;
    height: 100% !important;
  }
</style>
