const inputField = document.getElementById('input');
const button = document.getElementById('btn');
const resultPar = document.getElementById('result');

console.log(inputField.value);

function printInputValue(event) {
    resultPar.innerText = inputField.value;
}

button.addEventListener('click', printInputValue);

inputField.addEventListener('input', printInputValue);
