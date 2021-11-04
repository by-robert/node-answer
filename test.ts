import { getNumber } from './index';
import t from 'tap';

t.test('numbers', (t) => {
  t.equal(getNumber(0), 'unsupported value: 0', 'unsupported value: 0');
  t.equal(getNumber(1), 'one', 'one');
  t.end();
});
