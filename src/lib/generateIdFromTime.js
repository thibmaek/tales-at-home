const isNumber = n => typeof n === `number`;

/**
 * @description Creates a unique hash id using the djb2 algorithm
 * @param {Number} id - A generated number (e.g from `Date.now()`)
 * @return {Number}
 */
export default id => {
  return isNumber(id)
  ? id.toString().split(``)
    .reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0)
  : new TypeError(`id is not a number`);
};
