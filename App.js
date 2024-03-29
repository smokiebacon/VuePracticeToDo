const app = new Vue({
    //create element of id: 'app' where our app will live.
    el: '#app',
    data: {
        title: 'Hello Coder!',
        newToDo: '',  /* links to v-model in <input> instead of using onChange in React*/
        toDos: []
    },
    methods: {
        addToDo() {
            this.toDos.push({
                title: this.newToDo,
                done: false
            })
            this.newToDo = '';
        },
        deleteToDo(todo) {
            const todoIndex = this.toDos.indexOf(todo);
            this.toDos.splice(todoIndex, 1);
        },
        allDone() {
            this.toDos.forEach(todo => {
                todo.done = true
            })
        }
    }
})