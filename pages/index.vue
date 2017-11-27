<template>
  <v-card flat key = "card1">
    <v-parallax src="/img/index-head.png">
      <v-layout column align-center justify-center>
        <h1 class="primary--text use-font">Racing off to Launceston for the 2018 National Finals</h1>
        <h3 class="primary--text use-font">Best Manufactured Car and Fastest Lap at the NSW State Finals</h4>
      </v-layout>
    </v-parallax>
  </v-card>
</template>
<script>
  export default{
    layout: "nav",
    data(){
      return{
        name: "Blaze Racing"
      }
    },
    head(){
      return{
        title: this.name
      }
    }
  }
</script>
