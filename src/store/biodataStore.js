import { writable } from 'svelte/store';

const biodata = writable([
    {
        id: 1,
        nama: 'Ilham',
        alamat: 'Maron',
        jk: 'L'
    }
]);

const event = {
    subscribe: biodata.subscribe,
    addBiodata: bio => {
        biodata.update(t => {
            return [...t, bio];
        });
    },
    deleteBiodata: id => {
        biodata.update(items => {
            return items.filter(i => i.id !== id);
        });
    },
    updateBiodata: bio => {
        return biodata.set(bio);
    }
}

export default event;