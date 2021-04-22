/* eslint-disable linebreak-style */
import { Daemon } from '../character';

test('getStoned', () => {
  const daemon = new Daemon('Daemon');
  daemon.stoned = true;
  expect(daemon.stoned).toEqual(true);
});

test('getStoned1', () => {
  const daemon = new Daemon('Daemon');
  daemon.stoned = false;
  expect(daemon.stoned).toEqual(false);
});
