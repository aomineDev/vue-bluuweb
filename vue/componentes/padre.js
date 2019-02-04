Vue.component('padre', {
	template: 
	`<div class="p-5 bg-dark text-light">
	<h2>Componente Padre: {{ numeroPadre }}</h2>
	<h3>Nombre Padre: {{ nombrePadre }}</h3>
	<button class="btn btn-danger my-2 mr-2" v-on:click="numeroPadre++">+</button>
	<button class="btn btn-success my-2" v-on:click="numeroPadre--">-</button>
	<hijo v-bind:numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
	</div>`,
	data(){
		return {
			numeroPadre: 0,
			nombrePadre: ''
		}
	}
});