<template>
  <div class="mt-5">
    <h1>Forms</h1>

    <form action="">
      <b-row>
        <b-col cols="12" md="3">
          <b-form-input type="text" v-model="text" :state="comprobar"></b-form-input>
          <small>minimo 3 cáracteres</small>
          <p>texto: {{ text }}</p>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animals"></b-form-select>
          <p>seleccion: {{ select }}</p>
        </b-col>
        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="fruits"></b-form-radio-group>
          <p>Radio: {{ radio }}</p>
        </b-col>
        <b-col md="3">
          <b-form-checkbox-group v-model="checks" :options="colors"></b-form-checkbox-group>
          <p v-for="check of checks">Check: {{ check }}</p>
        </b-col>
      </b-row>
    </form>

    <b-nav-item :to="{name: 'home'}">Home</b-nav-item>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data(){
    return{
      text: '',
      select: null,
      animals: [
        {value: null, text: 'Seleccione un animal'},
        {value: 'perro', text: 'Guau'},
        {value: 'gato', text: 'Miau'},
        {value: 'pato', text: 'Cuack'}
      ],
      radio: null,
      fruits: [
        {value: 'manzana', text: 'apple'},
        {value: 'naranja', text: 'orange'},
        {value: 'platano', text: 'banana'}
      ],
      checks: [],
      colors: [
        {value: 'green', text: 'green'},
        {value: 'red', text: 'red'},
        {value: 'blue', text: 'blue'},
      ]
    }
  },
  computed:{
    comprobar(){
      return this.text.length > 2 ? true : false;
    }
  }
}
</script>

