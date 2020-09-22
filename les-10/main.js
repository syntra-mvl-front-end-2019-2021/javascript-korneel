function higherThanFive(num) {
    return num > 5;
}

/**
 * Copy van de filter function
 * @param {function} callbackFunction
 */
Array.prototype.myFilter = function (callbackFunction) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const result = callbackFunction(this[i]);
        if (result) {
            newArray.push(this[i]);
        }
    }

    return newArray;
};

const testArray = [1, 2, 3, 4, 5, 6];

// console.log('myFilter', testArray.myFilter(higherThanFive));

// console.log('filter', testArray.filter(higherThanFive));

function doSomething(val) {
    console.log('Val is: ' + val);
}

const foreachTest = ['test', 'test2', 'test3'];

Array.prototype.myForEach = function (callbackFunction) {
    for (let i = 0; i < this.length; i++) {
        callbackFunction(this[i]);
    }
};

// foreachTest.myForEach(doSomething);
// foreachTest.forEach(doSomething);

function timesTwo(num) {
    return num * 2;
}

const mapTestArray = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (callbackFunction) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callbackFunction(this[i]));
    }

    return newArray;
};

// console.log('myMap', mapTestArray.myMap(timesTwo));
// console.log('map', mapTestArray.map(timesTwo));

function sumAllNumbers(sum, num) {
    return sum + num;
}

const reduceTestArray = [1, 2, 3, 4, 5, 6];

Array.prototype.myReduce = function (callbackFunction, initial) {
    let accumulator = initial;
    for (let i = 0; i < this.length; i++) {
        const returnVal = callbackFunction(accumulator, this[i]);
        accumulator = returnVal;
    }

    return accumulator;

    // for (let i = 0; i < this.length; i++) {
    //     initial = callbackFunction(initial, this[i]);
    // }
    //
    // return initial;
};

console.log('myReduce', reduceTestArray.myReduce(sumAllNumbers, 0));
console.log('reduce', reduceTestArray.reduce(sumAllNumbers, 0));

function highestNumber(accumulator, arrayVal) {
    if (accumulator > arrayVal) {
        return accumulator;
    }

    return arrayVal;

    // return Math.max(accumulator, arrayVal);
}

console.log('myReduce', reduceTestArray.myReduce(highestNumber, 0));
console.log('reduce', reduceTestArray.reduce(highestNumber, 0));
