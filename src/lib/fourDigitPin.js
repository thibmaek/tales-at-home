export default (min, max, amount) => {
  let pin = ``;

  for (let i = 0;i < amount;i ++)
    pin += Math.floor((Math.random() * (max - min + 1)) + min);
  return pin;
};
