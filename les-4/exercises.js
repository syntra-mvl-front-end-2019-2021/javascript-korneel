// Count the number of occurrences of a word in a sentence in,
// e.g. 'Ik heb honger, heb jij ook honger.', 'heb' → 2
function wordCount(sentence, word) {}

// Calculate scrabbleScore of a word
// See letter values here: https://www.playmeo.com/face-value-scrabble-tiles/
// letterMultipliers, an array of objects like this:
// [{index: 2, multiplier: 2}, {index: 5, multiplier: 3}]
// → this would mean the letter with index 2 has to be multiplied by 2
// and the letter with index 5 has to be multiplied by 3
// wordMultiplier → the number of times the word score has to be multiplied
function scrabbleScoreCalculator(word, letterMultipliers, wordMultiplier) {}

// Determine if a sentence is a pangram
// https://en.wikipedia.org/wiki/Pangram
// e.g. 'The quick brown fox jumps over the lazy dog' → true
function isPangram(sentence) {}

// Given a word and a list of possible anagrams,
// return an array with all the correct anagrams.
// e.g. 'master', [stream', 'pigeon', 'maters'] → ['stream', 'maters']
function findAnagrams(word, possibleAnagrams) {}
