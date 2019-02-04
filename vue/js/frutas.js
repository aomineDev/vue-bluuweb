const app = new Vue({
	el: '#app',
	data: {
		msg: 'Vue.js!!',
		title: 'Frutas',
		frutas: [
		{
			name: 'ManzaNA',
			stock:15
		},
		{
			name: 'NARanJA',
			stock: 20
		},
		{
			name: 'PERa',
			stock: 0
		}
		],
		newFruta: {
			name: '',
			stock: ''
		},
		total: 0
	},
	methods: {
		addFruta(){
			if (this.newFruta.name != '' && this.newFruta.stock != '' && this.newFruta.stock > 0) {
				this.frutas.push({
					name: this.newFruta.name,
					stock: this.newFruta.stock
				});
				this.newFruta.name = '';
				this.newFruta.stock = '';
			}
		},
		addStock(index){
			return this.frutas[index].stock++;
		},
		lessStock(index){
			if (this.frutas[index].stock != 0) {
				this.frutas[index].stock--;
			}
		},
		removeFruta(index){
			this.frutas.splice(index, 1	);
		}	
	},
	computed:{
		sumarFrutas(){
			this.total = 0;
			for(fruta of this.frutas){
				this.total += fruta.stock;
			}
			return this.total;
		}
	},
	filters: {
		capitalize: function (str) {
			str = str.toString();
			str = str.toLowerCase();
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	}
})