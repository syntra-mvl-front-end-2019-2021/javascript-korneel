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

function cleanProgram(program) {
    const cleanProg = program.split('');

    return cleanProg.filter(isBrainFuckInstruction);
}

function interpretBrainFuck(program, inputArray, arrayLength) {
    const array = initArray(arrayLength);
    let result = '';
    let pointer = 0;
    const cleanProg = cleanProgram(program);
    let instrIndex = 0;

    console.log(array);
    console.log(cleanProg);

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
                instrIndex++;
                break;
            case ']':
                instrIndex++;
                break;
        }
    }

    return result;
}
