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

console.log('myFilter', testArray.myFilter(higherThanFive));

console.log('filter', testArray.filter(higherThanFive));
