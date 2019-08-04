<template>
<div>
  <v-layout wrap class="mt-5">
    <v-flex xs12>
      <v-card>
        <v-date-picker
        full-width
        v-model="date"
        locale="es-pe"
        :min="min"
        :max="max"
        @change="getDolar(date)"
        ></v-date-picker>
      </v-card>
      <v-card color="error" dark>
        <v-card-text class="display-1 text-xs-center">{{ value }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  
</div>
</template>

<script>

import axios from 'axios';
import { mapMutations } from 'vuex';

  export default {
    name: 'Home',
    data(){
      return {
        date: new Date().toISOString().substr(0, 10),
        min: '1984',
        max: new Date().toISOString().substr(0, 10),
        value: ''
      }
    },
    methods: {

    ...mapMutations(['showLoading', 'hideLoading']),

      async getDolar(day){
        let ddmmyy = day.split('-').reverse().join('-');
        try {
          this.showLoading({title: 'Accediendo a la información'});
          let data = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`);
          if(data.data.serie.length > 0){
            this.value = await data.data.serie[0].valor;
          }else {
            this.value = 'Sin resultados';
          }
        }catch(error){
          console.log(error)
        }finally {
          this.hideLoading();
        }
      }
    },
    created() {
      this.getDolar(this.date);
    }
  }
</script>
