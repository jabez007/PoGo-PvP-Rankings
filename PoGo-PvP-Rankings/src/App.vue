<template>
  <v-app id="app"
         dark>
    <v-navigation-drawer id="nav"
                         v-model="drawer"
                         clipped
                         fixed
                         app>
    </v-navigation-drawer>
    <v-toolbar clipped-left
               fixed
               app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PoGo PvP Rankings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!--v-btn to="/"
                  flat>
          Home
        </v-btn-->
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
