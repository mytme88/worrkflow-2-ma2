
import { spaceReplace } from './spaceReplace.js';

test('spaceReplace', () => {
    expect(spaceReplace('Hello world ! ').indexOf(' ')).toBe(-1);
});