<template>
  <div>
    <h1>Galeria de Fotos</h1>
    <router-link v-for="(foto, index) of fotos" :key="index" :to="{name: 'fotos', params: {id: foto}}"><button>foto  {{ foto }}</button></router-link>
    <Foto />
      <button v-on:click="home">Home</button>
      <button v-on:click="anterior">Anterior</button>
      <button v-on:click="siguiente">Siguiente</button>
  </div>
</template>


<script>
import Foto from '@/components/Foto.vue';

export default {
  components: {
    Foto
  },
  data(){
    return {
      fotos: [1, 2, 3]
    }
  },
  methods: {
    home(){
      this.$router.push('/')
    },
    anterior(){
      this.$router.go(-1)
    },
    siguiente(){
      this.$router.go(1)
    }
  }
}
</script>