const app = new Vue({
	el: '#app',
	data: {
		msg: 'Vue',
		tareas: [],
		nuevaTarea: ''
	},
	methods: {
		addTarea(){
			if (this.nuevaTarea != '') {
				this.tareas.push({
					nombre: this.nuevaTarea,
					estado: false,
					estadoX: 'Pendiente'
				});
				this.nuevaTarea = '';
			}
		},
		editarTarea(index){
			if(!this.tareas[index].estado){
				this.tareas[index].estado = true;
				this.tareas[index].estadoX = 'Finalizado';
			}
		},
		eliminarTarea(index){
			this.tareas.splice(index, 1);	
		},
		LS(){
			localStorage.setItem('gym-vue', JSON.stringify(this.tareas));;
		}
	},
	created: function(){
		let datosLS = JSON.parse(localStorage.getItem('gym-vue'));
		if(datosLS == null)
			this.tareas = [];
		else
			this.tareas = datosLS;
	}
})