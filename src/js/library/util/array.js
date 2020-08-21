/**
 * Adds all the values in an array.
 *
 * @param  {Array.<number>} arr an array of numbers
 * @returns {number} the sum of all the array values
 */
const sumArray = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
}

/**
 * Multiplies all the values in an array.
 *
 * @param  {Array.<number>} arr an array of numbers
 * @returns {number} the product of all the array values
 */
const multiplyArray = (arr) => {
    return arr.reduce((a, b) => a * b, 1);
}

export {
    sumArray,
    multiplyArray
}

