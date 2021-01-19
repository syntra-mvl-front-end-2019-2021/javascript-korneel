const App = {
  data() {
    return {
      lineOne: null,
      lineTwo: null,
      symbol: '',
      history: [],
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
      return this.lineOne + parseFloat(this.lineTwo);
    },
    product() {
      return this.lineOne * this.lineTwo;
    },
    minus() {
      return this.lineOne - this.lineTwo;
    },
    divide() {
      return this.lineOne / this.lineTwo;
    },
    root() {
      return Math.pow(this.lineOne, 1 / this.lineTwo);
    },
    power() {
      return Math.pow(this.lineOne, this.lineTwo);
    },
    calculate() {
      if (
        this.lineOne === null ||
        this.lineTwo === null ||
        this.symbol === ''
      ) {
        return;
      }

      let result;

      switch (this.symbol) {
        case '+':
          result = this.sum();
          break;
        case '*':
          result = this.product();
          break;
        case '-':
          result = this.minus();
          break;
        case '/':
          result = this.divide();
          break;
        case '√':
          result = this.root();
          break;
        case '^':
          result = this.power();
          break;
      }

      parseFloat(result.toFixed(2));

      this.addHistoryItem(result);
      this.lineTwo = result;
      this.lineOne = null;
      this.symbol = '';
    },
    addHistoryItem(result) {
      this.history.push(
        `${this.lineOne} ${this.symbol} ${this.lineTwo} = ${result}`
      );
    },
    selectSymbol(symbol) {
      this.calculate();

      this.lineOne = parseFloat(this.lineTwo);
      this.symbol = symbol;
      this.lineTwo = null;
    },
    backspace() {
      if (this.lineTwo === null || this.lineTwo.length === 0) {
        return;
      }

      let subStr = this.lineTwo.toString().slice(0, -1);

      if (subStr.length === 0) {
        this.lineTwo = null;
        return;
      }

      this.lineTwo = parseFloat(subStr);
    },
    clear() {
      this.lineOne = null;
      this.lineTwo = null;
      this.symbol = '';
    },
    keydown(event) {
      console.log(event.key);
      switch (event.key) {
        case '*':
          this.selectSymbol('*');
          break;
        case '/':
          this.selectSymbol('/');
          break;
        case '-':
          event.preventDefault();
          this.selectSymbol('-');
          break;
        case '+':
          event.preventDefault();
          this.selectSymbol('+');
          break;
        case '^':
          this.selectSymbol('^');
          break;
        case '=':
        case 'Enter':
          this.calculate();
          break;
        case 'c':
          this.clear();
          break;
      }
    },
  },
};

/**
 * [ ] styling
 * [x] product
 * [x] minus
 * [x] divide
 * [x] root
 * [x] power
 * [x] backspace
 * [x] clear
 * [x] history
 ** [ ] make line two input field
 */

Vue.createApp(App).mount('#vue-app');
