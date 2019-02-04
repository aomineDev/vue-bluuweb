import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0},
      {nombre: 'Pera', cantidad: 0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      state.frutas.forEach(item => {
        item.cantidad = 0;
      })
      // for(let i of state.frutas){
      //   i.cantidad = 0;
      // }
    }
  },
  actions: {

  }
})
