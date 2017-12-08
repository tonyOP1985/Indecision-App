new Vue({
	el: '#app',
	data: {
		message: '',
		todos: [],
		todoStyle: true
	},
	methods: {
		createTodo() {
			this.todos.push(this.message);
			this.message = '';
		},
		selectTodo() {
			let index = Math.floor(Math.random() * this.todos.length);
			alert(this.todos[index]);
		},
		deleteTodo(index) {
			this.todos.splice(index, 1);
		}
	}
});  

// agogo anime