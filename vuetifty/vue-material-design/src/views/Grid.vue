<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="blue darken-2">
          <v-card-text class="white--text text-xs-center">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card class="blue lighten-2">
          <v-card-text class="white--text text-xs-center">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card class="blue darken-2">
          <v-card-text class="white--text text-xs-center">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card class="blue lighten-2">
          <v-card-text class="white--text text-xs-center">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card class="blue darken-2">
          <v-card-text class="white--text text-xs-center">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card class="blue lighten-2">
          <v-card-text class="white--text text-xs-center">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row mt-5 justify-center align-center class="green elevation-5" style="height: 500px">
      <v-flex xs3>
        <v-card class="red">
          <v-card-text><h1 class="white--text text-xs-center">Centrado</h1></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card class="red">
          <v-card-text><h1 class="white--text text-xs-center">Centrado</h1></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout mt-5>
        <v-flex>
          <h2 class="display-1 ma-5">Lorem, ipsum dolor.</h2>
          <h2 class="display-2 pa-5">Lorem, ipsum dolor.</h2>
          <h2 class="display-3 text-xs-center">Lorem, ipsum dolor.</h2>
          <h2 class="display-4 text-uppercase">Lorem, ipsum dolor.</h2>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Grid'
  }
</script>
