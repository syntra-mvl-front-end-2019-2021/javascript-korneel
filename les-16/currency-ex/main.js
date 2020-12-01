const baseUrl = "https://api.exchangeratesapi.io/";
const $resultContainer = document.getElementById("result-container");
const $currencyFrom = document.querySelector("#currency-from");
const $currencyTo = document.querySelector("#currency-to");
const $date = document.querySelector("#date-input");

function setMaxDate() {
  const today = new Date().toLocaleDateString('en-CA');
  $date.max = today;
  $date.value = today;
}

function printCurrency(currencyFrom, currencyTo, date, rate) {
  $resultContainer.innerHTML = `<p>1${currencyFrom} = ${rate}${currencyTo} (${date})</p>`
}

function addOptions() {
  fetch(baseUrl + 'latest?base=USD')
    .then(response => response.json())
    .then(response => {
      console.log(Object.keys(response.rates));
      const currencies = Object.keys(response.rates);

      currencies.forEach(function(currency) {
        const html = '<option value="' + currency +'">' + currency +'</option>';

        $currencyFrom.insertAdjacentHTML('beforeend', html);
        $currencyTo.insertAdjacentHTML('beforeend', html);
      })
    })
    .catch(error => console.error(error));
}

function formSubmit(event) {
  event.preventDefault();

  const currencyFrom = $currencyFrom.value;
  const currencyTo = $currencyTo.value;
  const date = $date.value;

  fetch(baseUrl + date + "?base=" + currencyFrom + '&symbols=' + currencyTo)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const rate = response.rates[currencyTo];
      const date = new Date(response.date);
      printCurrency(currencyFrom, currencyTo, date.toLocaleDateString('nl-BE'), rate);
    })
    .catch(function(error) {
      console.log(error);
    });
}
setMaxDate();
addOptions();
document.forms.currency.addEventListener('submit', formSubmit);
