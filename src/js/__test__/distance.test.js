/* eslint-disable linebreak-style */
import { Magician, Daemon } from '../character';

test('distance', () => {
  function test() {
    const magician = new Magician('Maga', 1, true);
    return magician;
  }
  const expected = {
    name: 'Maga',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 100,
    defence: 40,
    distance: 1,
    stoned: true,
  };
  expect(test()).toEqual(expected);
});

test('distance1', () => {
  function test() {
    const daemon = new Daemon('Daemon', 2, false);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 90,
    defence: 40,
    distance: 2,
    stoned: false,
  };
  expect(test()).toEqual(expected);
});

test('distance2', () => {
  function test() {
    const daemon = new Daemon('Daemon', 3, false);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 80,
    defence: 40,
    distance: 3,
    stoned: false,
  };
  expect(test()).toEqual(expected);
});

test('distance3', () => {
  function test() {
    const daemon = new Daemon('Daemon', 4, false);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 70,
    defence: 40,
    distance: 4,
    stoned: false,
  };
  expect(test()).toEqual(expected);
});

test('distance4', () => {
  function test() {
    const daemon = new Daemon('Daemon', 5, false);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 60,
    defence: 40,
    distance: 5,
    stoned: false,
  };
  expect(test()).toEqual(expected);
});
