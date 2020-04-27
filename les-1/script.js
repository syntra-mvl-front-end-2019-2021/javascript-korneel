
    // alert('Hello World');

    // let name = prompt('Wat is je naam?');
    let name = 'Korneel';
    
    console.log(name);

    let divText = 'Je naam is ' + name;

    document
        .getElementById('cool-div')
        .innerHTML = name;

    var variable1 = 1;
    let variable2 = 2;
    const variable3 = 3;

    if (true) {
        var varInIf1 = 'joepie';
        let varInIf2 = 'joepiejeej';
    }

    console.log(varInIf1);
    //console.log(varInIf2); // error

    /* let coolDiv = document.getElementById('cool-div');
    coolDiv.innerHTML = divText; 
    */

    // wordt behandeld als html
    // document.getElementById('cool-div').innerHTML = '<span>test123</span>'; 

    // wordt behandeld als string
    // document.getElementById('cool-div').textContent = '<span>test123</span>'; 

    let aNumber = 1.4;
    let anotherNumber = 0;
    let aString = 'een string';
    let aBoolean = true;
    let anotherBoolean = false;
    let aNullValue = null;
    let aNotANumberVal = NaN;
    let aNaN = 3 / 'test';
    console.log(aNaN);
    let anUndefined = undefined;
    let anotherUndefined;
    console.log(anotherUndefined);

    let sumVal = 3 / '3';
    console.log(sumVal);

    parseInt('3'); // gehele getallen
    parseFloat('3.3'); // komma getallen

    let twoStrings = 'Test123' + 'Test123';
    let twoNumbers = 1 + parseInt('1');
    console.log(twoNumbers);

    console.log(twoStrings);
    console.log(twoStrings.length);
    console.log(twoStrings.substring(0, 4));
    console.log(twoStrings.indexOf('123'));
    console.log(twoStrings.lastIndexOf('123'));
    console.log(twoStrings.replace('123', '456'));
    console.log(twoStrings.toUpperCase());
    console.log(twoStrings.toLowerCase());

let randomNumber = 10;

console.log(randomNumber == 10); // true
console.log(randomNumber === 10); // true
console.log(randomNumber == '10'); // true
console.log(randomNumber === '10'); // false

console.log(randomNumber != '10'); // false
console.log(randomNumber !== '10'); // true

console.log(!true); // false

console.log(randomNumber > 5); // true
console.log(randomNumber >= 10); // true
console.log(randomNumber < 5); // false
console.log(randomNumber <= 10); // true
