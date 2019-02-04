const app = new Vue({
	el: '#app',
	data: {
		msg: 'Vue.js!!',
		background: 'bg-danger',
		color: false
	},
	methods: {
		changeValue(){
			this.color = !this.color;
		}
	}
})