const app = new Vue({
	el: '#app',
	data: {
		title: 'Vue',
		msg: 'Computed',
		contador: 0
	},
	methods:{
		contadorMenos(){
			if(this.contador != 0)
				this.contador -= 5;
		},
		contadorMas(){
			if(this.contador != 100)
				this.contador += 5;
		}
	},
	computed: {
		invertido(){
			return this.msg.split('').reverse().join('');
		},
		color(){
			return {
				'bg-success': this.contador <= 40,
				'bg-warning': this.contador >40 && this.contador <= 80,
				'bg-danger': this.contador >80 && this.contador <= 100,
			}
		}
	}
})