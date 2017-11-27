<template>
  <v-app light>
    <v-toolbar color = "primary" dark flat>
      <v-toolbar-title class = "white--text use-font-bold">Blaze Racing</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot = "activator"></v-toolbar-side-icon>
            <v-list dark color = "primary">
              <v-list-tile v-for = 'navObj in navSet' @click="">
                <v-list-tile-title class = "use-font">{{navObj.label}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
        <v-toolbar-items class="hidden-sm-and-down" v-for = 'navObj in navSet'>
            <v-btn flat class = "use-font">{{navObj.label}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <nuxt/>
    <v-footer app dark>
        <v-container>
          <v-layout column light>
            <v-flex xs4>Test</v-flex>
            <v-flex xs4></v-flex>
            <v-flex xs4></v-flex>
          </v-layout>
        </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default{
    data (){
      return{
        navSet: [{label: "The Competition", src: "/f1inschools"}, {label: "The Team", src: "/about"}, {label: "Sponsorship", src: "/sponsorship"}, {label: "Blog", src: "/blog"}, {label: "Contact", src: "/contact"}]
      }
    }
  }
</script>

<style>
  @import 'assets/css/master.css';
  a {
    text-decoration: none;
  }
</style>
