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

    while (instrIndex < cleanProg.length) {
        const instruction = cleanProg[instrIndex];

        switch (instruction) {
            case '+':
                array[pointer]++;
                instrIndex++;
                break;
            case '-':
                array[pointer]--;
                instrIndex++;
                break;
            case '>':
                pointer++;
                instrIndex++;
                break;
            case '<':
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
                const activeCell = array[pointer];
                if (activeCell === 0) {
                    const closingBracketIndex = cleanProg.indexOf(
                        ']',
                        instrIndex
                    );
                    instrIndex = closingBracketIndex + 1;
                } else {
                    instrIndex++;
                }
                break;
            case ']':
                const openingBracketIndex = cleanProg.lastIndexOf(
                    '[',
                    instrIndex
                );
                instrIndex = openingBracketIndex;
                break;
        }
    }

    return result;
}
