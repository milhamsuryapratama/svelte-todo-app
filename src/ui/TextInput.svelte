<script>
  export let value;
</script>

<div class="col-md-6">
  <form on:submit|preventDefault>
    <div class="form-group">
      <label for="exampleInputEmail1">Todo</label>
      <input
        type="text"
        class="form-control"
        id="todo"
        name="todo"
        value={value === undefined ? '' : value}
        aria-describedby="emailHelp"
        on:input />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
