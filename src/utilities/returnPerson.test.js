
import { returnPerson } from './returnPerson.js';

test('person object', () => {
    expect(returnPerson('Hanne', 32)).toEqual({ name: 'Hanne', age: 32 });
});