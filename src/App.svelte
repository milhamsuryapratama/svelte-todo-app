<script>
	import Header from './ui/Header.svelte';
	import Tabel from './component/Data.svelte';
	import TextInput from './ui/TextInput.svelte';

	let todo;
	let todos = [];
	let edited = false;
	let editeId;

	$: console.log(todo);

	function submitForm(event) {
		if (edited) {
			todos[editeId] = todo;
			edited = false;
		} else {
			todos = [...todos, todo];			
		}
		todo = '';
	}

	function hapusTodo(event) {
		let to = todos;
		to.splice(event.detail.id, 1);
		todos = to;
	}

	function editTodo(event) {
		edited = true;
		editeId = event.detail.id;
		todo = todos[event.detail.id];
	}
</script>

<Header/>

<div class="row">
	<TextInput on:input={event => (todo = event.target.value)}  on:submit={submitForm} value={todo}/>

	<div class="col-md-6">
		<Tabel 
			data={todos}
			on:hapusTodo={hapusTodo}
			on:editTodo={editTodo}
			/>
	</div>
</div>
