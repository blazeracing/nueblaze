<template>
  <v-app light>
    <v-toolbar color = "primary" dark flat>
      <v-toolbar-title class = "white--text">Blaze</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat class = "use-font">The Competition</v-btn>
          <v-btn flat class = "use-font">The Team</v-btn>
          <v-btn flat class = "use-font">Sponsorship</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
    <v-footer app fixed color = "second"></v-footer>
  </v-app>
</template>

<script>
  export default{
    data (){
      return{
        stateIndex: undefined,
        senateMode: "below"
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
