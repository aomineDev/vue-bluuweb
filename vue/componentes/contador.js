Vue.component('contador', {
	template:
	`<div class="d-flex mb-4">
	<h3 class="mr-3">{{ numero }}</h3>
	<button @click="numero++">+</button>
	</div>`,
	data(){
		return {
			numero: 0
		}
	}
})