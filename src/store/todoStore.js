import { writable } from 'svelte/store';

const todos = writable([
    'Yolo', 'Jojo'
]);

export default todos;