<script>
	import todoStore from './store/todoStore.js';
	import { onDestroy } from 'svelte';
	import Header from './ui/Header.svelte';
	import Tabel from './component/Data.svelte';

	let todos;

	const unsubscribe = todoStore.subscribe(t => {
		todos = t;
	});

	$: console.log(todoStore);

	let todo;
	let edited = false;
	let editeId;

	onDestroy(unsubscribe);

	function submitForm(event) {
		if (edited) {
			todos[editeId] = event.target.todo.value;
			todoStore.set(todos);
		} else {
			todoStore.update(t => {
				return [...t, todo];
			});
		}
		editeId = null;
		edited = false;
		todo = '';
	}

	function hapusTodo(event) {
		todos.splice(event.detail.id, 1);
		todoStore.set(todos);
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
