import { getNumber } from './index';
import t from 'tap';

t.test('numbers', (t) => {
  t.equal(getNumber(0), '0', '0');

  t.end();
});
