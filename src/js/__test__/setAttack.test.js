/* eslint-disable linebreak-style */
import { Magician } from '../character';

test('setAttack', () => {
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 80,
    defence: 40,
    distance: 3,
  };
  function test() {
    const magician = new Magician('Magician', 3);
    magician.attack = 100;
    return magician;
  }
  expect(test()).toEqual(expected);
});

test('setAttack1', () => {
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 90,
    defence: 40,
    distance: 2,
  };
  function test() {
    const magician = new Magician('Magician', 2);
    magician.attack = 100;
    return magician;
  }
  expect(test()).toEqual(expected);
});

test('setAttack2', () => {
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 70,
    defence: 40,
    distance: 4,
  };
  function test() {
    const magician = new Magician('Magician', 4);
    magician.attack = 100;
    return magician;
  }
  expect(test()).toEqual(expected);
});

test('setAttack3', () => {
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 60,
    defence: 40,
    distance: 5,
  };
  function test() {
    const magician = new Magician('Magician', 5);
    magician.attack = 100;
    return magician;
  }
  expect(test()).toEqual(expected);
});
