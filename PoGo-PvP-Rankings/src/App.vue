<template>
  <v-app id="app"
         dark>
    <v-toolbar id="nav"
               app
               fixed>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
