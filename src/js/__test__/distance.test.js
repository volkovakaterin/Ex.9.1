/* eslint-disable linebreak-style */
import { Magician, Daemon } from '../character';

test('distance', () => {
  function test() {
    const magician = new Magician('Maga', 1);
    return magician;
  }
  const expected = {
    name: 'Maga',
    type: 'Magician',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    distance: 1,
  };
  expect(test()).toEqual(expected);
});

test('distance1', () => {
  function test() {
    const daemon = new Daemon('Daemon', 2);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    distance: 2,
  };
  expect(test()).toEqual(expected);
});

test('distance2', () => {
  function test() {
    const daemon = new Daemon('Daemon', 3);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    distance: 3,
  };
  expect(test()).toEqual(expected);
});

test('distance3', () => {
  function test() {
    const daemon = new Daemon('Daemon', 4);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    distance: 4,
  };
  expect(test()).toEqual(expected);
});

test('distance4', () => {
  function test() {
    const daemon = new Daemon('Daemon', 5);
    return daemon;
  }
  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 100,
    defence: 40,
    distance: 5,
  };
  expect(test()).toEqual(expected);
});
