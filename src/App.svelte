<script>
	import Header from './ui/Header.svelte';
	import Tabel from './component/Data.svelte';

	let todo;
	let todos = [];
	let edited = false;
	let editeId;

	function submitForm(event) {
		let to = event.target.todo.value;
		if (edited) {
			todos[editeId] = to;
			edited = false;
		} else {
			todos = [...todos, to];
			todo = '';
		}
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
	<div class="col-md-6">
		<form on:submit|preventDefault={submitForm}>
			<div class="form-group">
				<label for="exampleInputEmail1">Todo</label>
				<input type="text" class="form-control" id="todo" name="todo" aria-describedby="emailHelp" bind:value={todo}>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>	
	</div>

	<div class="col-md-6">
		<Tabel 
			data={todos}
			on:hapusTodo={hapusTodo}
			on:editTodo={editTodo}
			/>
	</div>
</div>
