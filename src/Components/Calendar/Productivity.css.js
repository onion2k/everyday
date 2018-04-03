import palx from 'palx';
import months from './months.json';

const colors = palx('#f00');
let e = {};
Object.keys(months).map((month, i) => {
  let m = months[month].short.toLowerCase();
  for (let x = 0; x < 10; x++) {
    e[m+'-'+x] = { backgroundColor: colors[months[month].color][x] }
  }
  return;
});

export default e;
