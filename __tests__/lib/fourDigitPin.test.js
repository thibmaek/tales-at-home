import fourDigitPin from 'src/lib/fourDigitPin';

describe(`Method: fourDigitPin`, () => {

  it(`should return a number`, () => {
    expect(typeof fourDigitPin(0, 9, 4)).toBe(`number`);
  });

  it(`should be of length specified`, () => {
    const amount = 4;
    expect(fourDigitPin(0, 9, amount).toString()).toHaveLength(amount);
  });

});
