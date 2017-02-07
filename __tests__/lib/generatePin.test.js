import generatePin from 'src/lib/generatePin';

describe(`Method: generatePin`, () => {

  it(`should return a number`, () => {
    expect(typeof generatePin(0, 9, 4)).toBe(`number`);
  });

  it(`should be of length specified`, () => {
    const amount = 4;
    expect(generatePin(0, 9, amount).toString()).toHaveLength(amount);
  });

});
