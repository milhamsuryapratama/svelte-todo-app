<script>
    import { createEventDispatcher } from 'svelte';

    export let data;

    const dispatch = createEventDispatcher();

    function hapusData(i) {
      dispatch('hapusTodo', { id: i })
    }

    function editData(i) {
      dispatch('editTodo', { id: i });
    }
</script>

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">NO</th>
      <th scope="col">TODO</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {#if data.length > 0}
      {#each data as d, i}
          <tr>
              <td>{i + 1}</td>
              <td>{d}</td>
              <td>
                <button type="button" class="btn btn-primary" on:click={() => editData(i)}>Edit</button>
                <button type="button" class="btn btn-danger" on:click={() => hapusData(i)}>Hapus</button>
              </td>
          </tr>
      {/each}
    {:else}  
      <tr>
        <td colspan="3" style="text-align: center"> Tidak ada data </td>
      </tr>
    {/if}    
  </tbody>
</table>