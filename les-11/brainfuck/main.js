function initArray(arrayLength) {
    const array = [];

    for (let i = 0; i < arrayLength; i++) {
        array.push(0);
    }

    return array;
}

function isBrainFuckInstruction(char) {
    const brainFuckInstr = '+-><.,[]';
    return brainFuckInstr.includes(char);
}

/**
 * cleanProgram
 * @param {string} program
 * @returns {string[]}
 */
function cleanProgram(program) {
    const cleanProg = program.split('');

    return cleanProg.filter(isBrainFuckInstruction);
}

function genBracketPairs(code) {
    const bracketPairs = code.reduce(
        function (result, val, index) {
            // index = 11 val = ']' result = { valid: true, pairs: [[5,8], [2,11], [12]] }
            if (result.valid) {
                if (val === '[') {
                    result.pairs.push([index]);
                }
                if (val === ']') {
                    result = result.pairs.reduceRight(
                        function (pairResult, pair) {
                            // pairResult = { valid: true, pairs: [[5,7], [2,12]] } pair = [2,11]
                            if (!pairResult.valid && pair.length === 1) {
                                pair.push(index);
                                pairResult.valid = true;
                            }
                            pairResult.pairs.push(pair);
                            return pairResult;
                        },
                        { valid: false, pairs: [] }
                    );
                }
            }
            return result;
        },
        { valid: true, pairs: [] }
    );

    // [[5,8], [2,11], [12]]
    // [[12]]
    const singleOpenBracket = bracketPairs.pairs.filter(function (pair) {
        return pair.length === 1;
    });

    bracketPairs.valid = bracketPairs.valid && singleOpenBracket.length === 0;

    return bracketPairs;
}

function findBrotherIndex(bracketPairs, curIndex) {
    // bracketPairs = {valid: true, pairs: [[1,2],[4,5]]} curIndex = 4
    return bracketPairs.pairs.reduce((result, pair) => {
        // result = -1 pair = [4,5]
        let foundIndex = pair.indexOf(curIndex); // 0
        if (foundIndex === -1) {
            return result;
        }
        return pair[1 - foundIndex]; // if foundIndex = 1 -> 0 else if foundIndex = 0 -> 1
    }, -1);
}

/**
 * interpretBrainfuck
 * @param {string} program
 * @param {number[]}inputArray
 * @param {number} arrayLength
 * @returns {string}
 */
function interpretBrainFuck(program, inputArray, arrayLength) {
    const array = initArray(arrayLength);
    let result = '';
    let pointer = 0;
    const cleanProg = cleanProgram(program);
    let instrIndex = 0;
    const bracketPairs = genBracketPairs(cleanProg);

    if (!bracketPairs.valid) {
        return 'SYNTAX ERROR';
    }

    console.log(bracketPairs);

    while (instrIndex < cleanProg.length) {
        const instruction = cleanProg[instrIndex];

        switch (instruction) {
            case '+':
                if (array[pointer] === 255) {
                    return 'INCORRECT VALUE';
                }
                array[pointer]++;
                instrIndex++;
                break;
            case '-':
                if (array[pointer] === 0) {
                    return 'INCORRECT VALUE';
                }
                array[pointer]--;
                instrIndex++;
                break;
            case '>':
                if (pointer === arrayLength - 1) {
                    return 'POINTER OUT OF BOUNDS';
                }
                pointer++;
                instrIndex++;
                break;
            case '<':
                if (pointer === 0) {
                    return 'POINTER OUT OF BOUNDS';
                }
                pointer--;
                instrIndex++;
                break;
            case '.':
                result += String.fromCharCode(array[pointer]);
                instrIndex++;
                break;
            case ',':
                array[pointer] = inputArray.shift();
                instrIndex++;
                break;
            case '[':
                if (array[pointer] === 0) {
                    instrIndex = findBrotherIndex(bracketPairs, instrIndex) + 1;
                } else {
                    instrIndex++;
                }
                break;
            case ']':
                instrIndex = findBrotherIndex(bracketPairs, instrIndex);
                break;
        }
    }

    return result;
}
