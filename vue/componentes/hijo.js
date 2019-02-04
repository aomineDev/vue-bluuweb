Vue.component('hijo', {
	template: 
	`<div class="p-5 bg-light text-dark">
	<h4>Componente hijo {{ numero }}</h4>
	<h5>nombre: {{ nombre }}</h5>
	</div>`,
	props: ['numero'],
	data(){
		return {
			nombre: 'aomine'
		}
	},
	mounted(){
		this.$emit('nombreHijo', this.nombre)
	}
});