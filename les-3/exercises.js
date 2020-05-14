// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
function getLargestItemInArray(array) {
    let largestVal = array[0];

    for (let i = 1; i < array.length; i++) {
        if (largestVal < array[i]) {
            largestVal = array[i];
        }
    }

    return largestVal;
}

// Reverse order of array, e.g. [1,2,3] → [3,2,1]
function reverseArray(anArray) {
    let reversedArray = [];

    for (let anArrayIndex in anArray) {
        reversedArray.unshift(anArray[anArrayIndex]);
    }

    return reversedArray;
}

// Make a sum of all elements, e.g. [1,2,3] → 6
function arraySum(anArray) {
    let result = 0;

    for (let anArrayIndex in anArray) {
        result += anArray[anArrayIndex];
    }

    return result;
}

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
function stringOfFirstLetters(anArray) {
    let result = '';

    for (let anArrayIndex in anArray) {
        result += anArray[anArrayIndex].substr(0, 1);
    }

    return result;
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
function combineArrays(arrayOne, arrayTwo) {
    let result = [];
    let longestLength =
        arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;

    for (let i = 0; i < longestLength; i++) {
        if (arrayOne[i] !== undefined) {
            result.push(arrayOne[i]);
        }

        if (arrayTwo[i] !== undefined) {
            result.push(arrayTwo[i]);
        }
    }

    return result;
}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
function numberToDigitArray(aNumber) {
    let digitStringArray = aNumber.toString().split('');
    let result = [];

    for (let i in digitStringArray) {
        result.push(parseInt(digitStringArray[i]));
    }

    return result;
}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {
    let wordArray = aString.split(' ');
    let pigLtnArray = [];

    for (let i in wordArray) {
        let curWord = wordArray[i];
        let curWordFirsLetter = curWord.substr(0, 1);
        let curWordOtherLetters = curWord.substr(1);
        if (curWordFirsLetter === curWordFirsLetter.toUpperCase()) {
            curWordOtherLetters =
                curWordOtherLetters.substr(0, 1).toUpperCase() +
                curWordOtherLetters.substr(1);

            curWordFirsLetter = curWordFirsLetter.toLowerCase();
        }

        let pigLtnWord = curWordOtherLetters + curWordFirsLetter + 'ay';
        pigLtnArray.push(pigLtnWord);
    }

    return pigLtnArray.join(' ');
}

// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
// if (iets = 'h') {
// iets doen
// } else if (iets = 'e') {

// }...

// switch (iets) {
//     case 'H':
//     case 'h':
//         console.log('h');
//         break;
//     case 'e':
//         console.log('e');
//         break;
//     default:
//         console.log('kweetnie');
//         break;
// }

function letterToMorse(letter) {
    let morseLetter;

    switch (letter.toLowerCase()) {
        case 'a':
            morseLetter = '*_';
            break;
        case 'b':
            morseLetter = '_***';
            break;
        case 'c':
            morseLetter = '_*_*';
            break;
        case 'd':
            morseLetter = '_**';
            break;
        case 'e':
            morseLetter = '*';
            break;
        case 'f':
            morseLetter = '**_*';
            break;
        case 'g':
            morseLetter = '__*';
            break;
        case 'h':
            morseLetter = '****';
            break;
        case 'i':
            morseLetter = '**';
            break;
        case 'j':
            morseLetter = '*___';
            break;
        case 'k':
            morseLetter = '_*_';
            break;
        case 'l':
            morseLetter = '*_**';
            break;
        case 'm':
            morseLetter = '__';
            break;
        case 'n':
            morseLetter = '_*';
            break;
        case 'o':
            morseLetter = '___';
            break;
        case 'p':
            morseLetter = '*__*';
            break;
        case 'q':
            morseLetter = '__*_';
            break;
        case 'r':
            morseLetter = '*_*';
            break;
        case 's':
            morseLetter = '***';
            break;
        case 't':
            morseLetter = '_';
            break;
        case 'u':
            morseLetter = '**_';
            break;
        case 'v':
            morseLetter = '***_';
            break;
        case 'w':
            morseLetter = '*__';
            break;
        case 'x':
            morseLetter = '_**_';
            break;
        case 'y':
            morseLetter = '_*__';
            break;
        case 'z':
            morseLetter = '__**';
            break;
    }

    return morseLetter;
}

function translateToMorse(aString) {
    let aStringArray = aString.split('');
    let resultArray = [];

    for (let i in aStringArray) {
        let curLetter = aStringArray[i];
        if (curLetter === ' ') {
            resultArray.push(' ');
        } else {
            resultArray.push(letterToMorse(curLetter) + '|');
        }
    }

    return resultArray.join('');
}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {
    let aStringArray = aString.split(' ');
    let resultArray = [];

    for (let i in aStringArray) {
        let curWordArray = aStringArray[i].split('');

        for (let j in curWordArray) {
            let curLetter = curWordArray[j];
            resultArray.push(letterToMorse(curLetter));

            if (j < curWordArray.length - 1) {
                resultArray.push('|');
            }
        }

        if (i < aStringArray.length - 1) {
            resultArray.push(' ');
        }
    }

    return resultArray.join('');
}
