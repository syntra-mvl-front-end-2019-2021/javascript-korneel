// console.log(document);

let testOne = document.getElementById('test-2');
let testPars = document.getElementsByClassName('test-class');
let testParsTwo = document.getElementsByTagName('p');
let testElement = document.querySelector('.test-class span');
let testElements = document.querySelectorAll('.test-class');

// console.log(testElement);

// console.log(testElement.innerHTML);
// console.log(testElement.innerText);

testElement.innerHTML = '<span>Hello World</span>';
// testElement.innerText = '<span>Hello World</span>';

// console.log(testElement.classList);

testElement.classList.add('test-class-2', 'test-class-3');
testElement.classList.toggle('test-class-2');
testElement.classList.remove('test-class-3');

function clickTestElement(event) {
    console.log(event);
}

testElement.addEventListener('click', clickTestElement);
testOne.addEventListener('click', clickTestElement);

// testOne.addEventListener('click', function() {
//     console.log('clicked2');
// });
