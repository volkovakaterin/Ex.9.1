/* eslint-disable linebreak-style */
import { Bowman, Swordsman, Magician } from '../character';

test('levelUp', () => {
  expect(() => {
    const bowman = new Bowman('Bowman');
    bowman.levelUp();
  }).toThrow(Error);
});
test('levelUp1', () => {
  expect(() => {
    const swordsman = new Swordsman('Swordsman');
    swordsman.levelUp();
  }).toThrow(Error);
});
test('levelUp2', () => {
  function test() {
    const magician = new Magician('Magician');
    magician.levelUp();
    return magician;
  }
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 2,
    _attack: 125,
    defence: 50,
    distance: undefined,
  };
  expect(test()).toEqual(expected);
});
