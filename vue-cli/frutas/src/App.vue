<template>
  <div id="app">
    <Cabecera />
    <Lista />
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
