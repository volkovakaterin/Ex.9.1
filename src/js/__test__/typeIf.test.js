/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import { Zombie, Undead } from '../character';

test('typeIf', () => {
  expect(() => {
    new Zombie('Zombie');
  }).toThrow(Error);
});
test('typeIf1', () => {
  expect(() => {
    new Undead('Undead');
  }).toThrow(Error);
});
