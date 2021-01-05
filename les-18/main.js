const App = {
  data() {
    return {
      name: 'Korneel Eeckhout',
      count: 1,
      containerClasses: 'red',
      newTodo: '',
      todoList: [],
    };
  },
  mounted() {
    setInterval(() => {
      // this.count++;
      // if (this.containerClasses === 'red') {
      //   this.containerClasses = 'blue';
      // } else {
      //   this.containerClasses = 'red';
      // }
    }, 1000);
  },
  methods: {
    addOne() {
      this.count++;
    },
    addTodo() {
      this.todoList.push(this.newTodo);
      console.log(this.todoList);
    },
  },
};

Vue.createApp(App).mount('#app');
