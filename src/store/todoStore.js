import { writable } from 'svelte/store';

const todos = writable([
    'Yolo', 'Jojo'
]);

const event = {
    subscribe: todos.subscribe,
    addTodo: todo => {
        todos.update(t => {
            return [...t, todo];
        });
    },
    deleteTodo: id => {
        todos.update(t => {
            return t.splice(id, id);
        });
    },
    updateTodo: todos => {
        return todos.set(todos);
    }
}

export default event;