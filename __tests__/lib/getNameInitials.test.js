import getNameInitials from 'src/lib/getNameInitials';

describe(`Method: getNameInitials`, () => {

  it(`should return the initials for a firstname and lastname`, () => {
    expect(getNameInitials(`Thibault Maekelbergh`)).toEqual([`T`, `M`]);
  });

  it(`should not return lowercase strings`, () => {
    expect(getNameInitials(`Thibault Maekelbergh`)).not.toEqual([`t`, `m`]);
  });

  it(`should not return a value for each space based word`, () => {
    expect(getNameInitials(`Thibault Maekelbergh`).length).not.toBeGreaterThan(2);
  });

  it(`should not return an initial for a dash-based name`, () => {
    expect(getNameInitials(`Jean-Louis Michel`)).toEqual([`J`, `M`]);
  });
  
});
