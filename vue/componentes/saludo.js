Vue.component('saludo', {
	template:
	`<div>
	<h1 class="text-center">{{ saludo }}</h1>
	</div>`,
	data(){
		return {
			saludo: 'Hola desde vue'
		}
	}
});