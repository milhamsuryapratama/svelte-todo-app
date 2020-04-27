<script>
  import todoStore from "./store/todoStore.js";
  import { onDestroy } from "svelte";
  import Header from "./ui/Header.svelte";
  import Tabel from "./component/Data.svelte";
  import TextInput from './ui/TextInput.svelte';

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
    todo = "";
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

<Header />

<div class="row">
	<TextInput on:input={event => (todo = event.target.value)} on:submit={submitForm} value={todo} />
  <div class="col-md-6">
    <Tabel data={todos} on:hapusTodo={hapusTodo} on:editTodo={editTodo} />
  </div>
</div>
