/* eslint-disable linebreak-style */
import { Daemon } from '../character';

test('getStoned', () => {
  const daemon = new Daemon('Daemon', 2);
  daemon.attack = 100;
  daemon.stoned = true;
  expect(daemon.stoned).toEqual(85);
});

test('getStoned1', () => {
  const daemon = new Daemon('Daemon', 2);
  daemon.attack = 100;
  daemon.stoned = false;
  expect(daemon.stoned).toEqual(90);
});
