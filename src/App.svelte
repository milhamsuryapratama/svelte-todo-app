<script>
  import biodataStore from "./store/biodataStore.js";
  import { onDestroy } from "svelte";
  import Header from "./ui/Header.svelte";
  import Tabel from "./component/Data.svelte";
  import TextInput from "./ui/TextInput.svelte";

  let biodata;

  const unsubscribe = biodataStore.subscribe(bio => {
    biodata = bio;
  });

  $: console.log(biodata);

  let data = {
    id: Math.random(),
    nama: "",
    alamat: "",
    jk: ""
  };
  let edited = false;
  let editeId;

  onDestroy(unsubscribe);

  function submitForm(event) {
    if (edited) {
      biodata[editeId] = data;
      biodataStore.updateBiodata(biodata);
    } else {
      biodataStore.addBiodata(data);
    }
    editeId = null;
    edited = false;
    resetData();
  }

  function resetData() {
    data = {
      id: Math.random(),
      nama: "",
      alamat: ""
    };
  }

  function hapusBiodata(event) {
    biodataStore.deleteBiodata(event.detail.id);
  }

  function editBiodata(event) {
    edited = true;
    editeId = event.detail.id;
    data = biodata[event.detail.id];
  }
</script>

<Header />

<div class="row">
  <div class="col-md-6">
    <form on:submit|preventDefault={submitForm}>
      <label for="exampleInputEmail1">Nama</label>
      <TextInput
        on:input={event => (data.nama = event.target.value)}
        value={data.nama} />
      <label for="exampleInputEmail1">Alamat</label>
      <TextInput
        on:input={event => (data.alamat = event.target.value)}
        value={data.alamat} />
      <label for="exampleInputEmail1">Jenis Kelamin</label>
      <label>
        <input type="radio" name="jk" value="L" bind:group={data.jk} checked={data.jk == 'L'} />
        Laki - Laki
      </label>
      <label>
        <input type="radio" name="jk" value="P" bind:group={data.jk} checked={data.jk == 'P'} />
        Perempuan
      </label>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <div class="col-md-6">
    <Tabel
      data={biodata}
      on:hapusBiodata={hapusBiodata}
      on:editBiodata={editBiodata} />
  </div>
</div>
