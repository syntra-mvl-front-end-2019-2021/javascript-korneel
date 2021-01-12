const App = {
  data() {
    return {
      lineOne: null,
      lineTwo: null,
      symbol: '',
    };
  },
  methods: {
    addNumber(number) {
      if (this.lineTwo === null) {
        this.lineTwo = number;
        return;
      }

      this.lineTwo = parseInt('' + this.lineTwo + number);
    },
    sum() {
      return this.lineOne + this.lineTwo;
    },
    calculate() {
      if (
        this.lineOne === null ||
        this.lineTwo === null ||
        this.symbol === ''
      ) {
        return;
      }

      switch (this.symbol) {
        case '+':
          this.lineTwo = this.sum();
      }

      this.lineOne = null;
      this.symbol = '';
    },
    selectSymbol(symbol) {
      this.calculate();

      this.lineOne = this.lineTwo;
      this.symbol = symbol;
      this.lineTwo = null;
    },
  },
};

/**
 * [ ] styling
 * [ ] product
 * [ ] minus
 * [ ] divide
 * [ ] root
 * [ ] power
 * [ ] backspace
 * [ ] clear
 * [ ] history
 ** [ ] make line two input field
 */

Vue.createApp(App).mount('#vue-app');
