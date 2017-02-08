/**
 * Generate a pincode number sequence
 * @param  {Number} min    [minimum range to calc from]
 * @param  {Number} max    [max range to calc to]
 * @param  {Number} amount [number of digits to return]
 * @return {Number}
 */
export default (min, max, amount) => {
  let pin = ``;

  for (let i = 0;i < amount;i ++) {
    pin += Math.floor((Math.random() * (max - min + 1)) + min);
  }

  return parseInt(pin);
};
