<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="(fruta, index) of ordenar" :key="fruta.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
        {{ 1 + index }} - {{ fruta.nombre }}
        <span class="badge badge-primary badge-pill">{{ fruta.cantidad }}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block mt-2" @click="reiniciar()">Reiniciar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "Lista",
  computed: {
    ...mapState(['frutas']),
    ordenar(){
      // eslint-disable-next-line
      return this.frutas.sort( (a, b) => b.cantidad - a.cantidad)
    }
  },
  methods: {
    ...mapMutations(['aumentar']),
    ...mapMutations(['reiniciar'])
  }
};
</script>

<style scoped>
  li{
    cursor: pointer;
  }
  li:hover{
    background-color: #ECECF6;
  }
</style>
