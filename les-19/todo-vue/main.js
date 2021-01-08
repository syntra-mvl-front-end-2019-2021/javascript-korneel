const App = {
  data() {
    return {
      title: 'Todo',
      todoItems: [],
      loadingList: false,
      loadingForm: false,
      modalOpen: false,
      activeTodoItem: {
        id: null,
        done: false,
        description: '',
      },
      errorMessage: '',
    };
  },
  mounted() {
    this.fetchAllTodos();
  },
  methods: {
    fetchAllTodos() {
      this.loadingList = true;
      fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
        method: 'GET',
        headers: {
          Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
        },
      })
        .then((result) => {
          if (!result.ok) {
            throw new Error('No luck');
          }

          return result.json();
        })
        .then((result) => {
          this.todoItems = result.data;
          this.loadingList = false;
        })
        .catch((error) => {
          console.error(error);
          this.loadingList = false;
        });
    },
    resetForm() {
      this.activeTodoItem.id = null;
      this.activeTodoItem.done = false;
      this.activeTodoItem.description = '';
    },
    fillForm(todoItem) {
      this.activeTodoItem.id = todoItem.id;
      this.activeTodoItem.done = todoItem.done;
      this.activeTodoItem.description = todoItem.description;
    },
    addTodo() {
      this.resetForm();
      this.modalOpen = true;
    },
    updateTodo(todoItem) {
      this.fillForm(todoItem);
      this.modalOpen = true;
    },
    deleteTodo(todoItemId, todoItemIndex) {
      this.loadingList = true;

      fetch(
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' +
          todoItemId,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
          },
        }
      )
        .then((result) => {
          if (!result.ok) {
            throw new Error('No luck');
          }

          this.todoItems.splice(todoItemIndex, 1);
          this.loadingList = false;
        })
        .catch(function (error) {
          console.error(error);
          this.loadingList = false;
        });
    },
    submitTodoForm() {
      console.log('Submit form started');
      this.errorMessage = '';

      if (!this.activeTodoItem.description) {
        this.errorMessage = 'Please enter a description';
        return;
      }

      this.loadingForm = true;

      const url =
        'https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo' +
        (this.activeTodoItem.id > 0 ? '/' + this.activeTodoItem.id : '');
      const method = this.activeTodoItem.id > 0 ? 'PATCH' : 'POST';

      fetch(url, {
        method: method,
        headers: {
          Authorization: 'bearer ABcEHA2kcrKY4a6ipUA3',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.activeTodoItem),
      })
        .then((result) => {
          if (!result.ok) {
            throw new Error('No luck');
          }

          return result.json(); // JSON.parse
        })
        .then((result) => {
          if (this.activeTodoItem.id > 0) {
            this.todoItems = this.todoItems.map((todoItem) => {
              if (todoItem.id === this.activeTodoItem.id) {
                return result.data;
              }

              return todoItem;
            });
          } else {
            this.todoItems.push(result.data);
          }

          this.loadingForm = false;
          this.modalOpen = false;
        })
        .catch(function (error) {
          console.error(error);
          this.loadingForm = false;
          this.errorMessage = error.message;
        });
    },
  },
};

Vue.createApp(App).mount('#vue-app');
