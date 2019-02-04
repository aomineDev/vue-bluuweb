const app = new Vue({
	el: '#app',
	data: {
		title: 'Vue',
		msg: 'LifeCyle de Vue.js',
		contador: 0
	},
	methods: {
		Destruir(){
			this.$destroy();
		}
	},
	beforeCreate(){
		console.log('before create')
	},
	created(){
		//Al crear los métodos, observadores y eventos, pero aún no accede al DOM.
		//Aún no se puede acceder al 'el'
		console.log('created');
	},
	beforeMount(){
		//Se ejecuta antes de insertar el DOM
		console.log('beforeMount');
	},
	mounted(){
		//Se ejecuta al insertar el DOM
		console.log('created');
	},
	beforeUpdate(){
		//Al detectar el cambio
		console.log('beforeUpdate');
	},
	updated(){
		//Al realizar los cambios
		console.log('updated');
	},
	beforeDestroy(){
		//Antes de destruir la instancia
		console.log('beforeDestroy');
	},
	destroyed(){
		//Se destruye la instancia
		console.log('destroyed');
	}
})