//select textarea
let userInput = document.getElementById('user-input');
//select btn
let submitBtn = document.getElementById('submit-btn');
//select result container
let resultContainer = document.getElementById('result-container');
//# select wordCount
let wordCountContainer = document.getElementById('word-count');
//# select letterCount
let letterCountContainer = document.getElementById('letter-count');

function getUserInput() {
    //return value of userInput
    return userInput.value;
}

function textToWordArray(text) {
    //return array of words
    return text.split(' ');
}

function arrayToText(array) {
    return array.join(' ');
}

function getRandomNumber(max) {
    //return random number between 0 and max (including 0 and excluding max)
    return Math.floor(Math.random() * max);
}

function scrambleArray(oldArray) {
    //return scrambled array
    //   for (let i = oldArray.length-1; i >=0; i--) {
    //     let randomIndex = getRandomNumber(i);
    //     let randomValue = oldArray[randomIndex];
    //     let arrayValue = oldArray[i];
    //     oldArray[i] = randomValue;
    //     oldArray[randomIndex] = arrayValue;
    //   }

    const scrambledArray = [];
    while (oldArray.length > 0) {
        const randomIndex = getRandomNumber(oldArray.length);
        const randomValue = oldArray.splice(randomIndex, 1);
        scrambleArray.push(randomValue[0]);
    }

    return scrambleArray;
}

function updateWordCount(array) {
    //# return word count
    wordCountContainer.innerHTML = array.length;
}

function updateLetterCount(text) {
    //# return letter count
    letterCountContainer.innerHTML = text.length;
}

function scrambleText(text) {
    // return scrambled text
    let array = textToWordArray(text);
    updateWordCount(array);
    let scrambled = scrambleArray(array);
    return arrayToText(scrambled);
}

function scramble() {
    // update textContent of resultContainer
    let text = getUserInput();
    let scrambledText = scrambleText(text);
    resultContainer.innerHTML = scrambledText;
    updateLetterCount(text);
}

//add click event listener to submitBtn
submitBtn.addEventListener('click', scramble);
//## add input event listener to userinput for realTimeScramble
userInput.addEventListener('input', scramble);
