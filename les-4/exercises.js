// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2
function wordCount(sentence, word) {
    const wordArray = sentence.split(' ');
    let wordCount = 0;
    for (let curWord of wordArray) {
        if (curWord.toLowerCase() === word.toLowerCase()) {
            wordCount++;
        }
    }

    return wordCount;
}

// Calculate scrabbleScore of a word
// See letter values here: https://www.playmeo.com/face-value-scrabble-tiles/
// letterMultipliers, an array of objects like this:
// [{index: 2, multiplier: 2}, {index: 5, multiplier: 3}]
// → this would mean the letter with index 2 has to be multiplied by 2
// and the letter with index 5 has to be multiplied by 3
// wordMultiplier → the number of times the word score has to be multiplied
// 'hello', [{index: 2, multiplier: 2}], 1
function letterVal(letter) {
    const upperCaseLetter = letter.toUpperCase();
    const letterVals = {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
    };

    for (let letterValue in letterVals) {
        if (letterVals[letterValue].includes(upperCaseLetter)) {
            return parseInt(letterValue);
        }
    }

    return 0;
}

function scrabbleScoreCalculator(word, letterMultipliers, wordMultiplier) {
    const letterArray = word.toUpperCase().split('');
    let wordScore = 0;
    for (let letterIndex in letterArray) {
        let letterScore = letterVal(letterArray[letterIndex]);

        for (let letterMultiplier of letterMultipliers) {
            if (letterMultiplier.index === parseInt(letterIndex)) {
                letterScore *= letterMultiplier.multiplier;
            }
        }

        wordScore += letterScore;
    }

    return wordScore * wordMultiplier;
}

// Determine if a sentence is a pangram
// https://en.wikipedia.org/wiki/Pangram
// e.g. 'The quick brown fox jumps over the lazy dog' → true
function isPangram(sentence) {
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    for (let letter of alphabet) {
        if (!sentence.toLowerCase().includes(letter)) {
            return false;
        }
    }

    return true;
}

// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', ['stream', 'pigeon', 'maters'] → ['stream', 'maters']
function removeSpaces(word) {
    return word.split(' ').join('');
}

function isAnagram(word, possibleAnagram) {
    const spacelessWord = removeSpaces(word);
    const spacelessPossibleAnagram = removeSpaces(possibleAnagram);

    const letterArray = spacelessWord.toLowerCase().split(''); // 'test' > ['t','e','s','t']

    if (spacelessWord.length !== spacelessPossibleAnagram.length) {
        return false;
    }

    for (let letter of letterArray) {
        if (!possibleAnagram.toLowerCase().includes(letter)) {
            return false;
        }
    }

    return true;
}

function findAnagrams(word, possibleAnagrams) {
    let anagrams = [];

    for (let possibleAnagram of possibleAnagrams) {
        if (isAnagram(word, possibleAnagram)) {
            anagrams.push(possibleAnagram);
        }
    }

    return anagrams;
}
