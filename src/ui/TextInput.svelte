<script>
  export let value;
</script>

<div class="form-group">  
  <input
    type="text"
    class="form-control"
    id="todo"
    name="todo"
    value={value === undefined ? '' : value}
    aria-describedby="emailHelp"
    on:input />
</div>
