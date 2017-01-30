/**
 * @description Pick a random value from an array
 * @param {Array<Any>} arr - A collection of other types
 * @returns {Any}
 */

export default arr => arr[Math.floor(Math.random() * arr.length)];
