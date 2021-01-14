const App = {
  data() {
    return {
      startValOne: 3,
      startValTwo: 4,
    };
  },

  methods: {
    log(val) {
      console.log(val);
    },
  },
};

const vueApp = Vue.createApp(App);

vueApp.component('counter', {
  props: ['startVal'],
  template: `<p>{{counter}}</p>
  <slot></slot>
  <button type="button" @click="incrementCounter">+1</button>`,
  data() {
    return { counter: this.startVal };
  },
  methods: {
    incrementCounter() {
      this.counter++;
      this.$emit('increment', this.counter);
    },
  },
});

vueApp.mount('#app');
