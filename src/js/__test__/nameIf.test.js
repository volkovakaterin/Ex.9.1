/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import { Zombie } from '../character';

test('nameIf', () => {
  expect(() => {
    new Zombie('Z');
  }).toThrow(Error);
});
test('nameIf1', () => {
  expect(() => {
    new Zombie('Zombie78910');
  }).toThrow(Error);
});
