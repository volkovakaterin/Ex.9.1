/* eslint-disable linebreak-style */
import { Bowman, Swordsman } from '../character';

test('damage', () => {
  expect(() => {
    const bowman = new Bowman('Bowman');
    bowman.damage(1000);
    return bowman.levelUp();
  }).toThrow(Error);
});
test('damage1', () => {
  function test() {
    const swordsman = new Swordsman('Swordsman');
    swordsman.damage(15);
    return swordsman;
  }
  const expected = new Swordsman('Swordsman');
  expect(test()).toEqual(expected);
});
