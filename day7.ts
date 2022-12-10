import { readFile } from './lib/readFile';

let sum = 0;
const p1 = (input: string[]) => {
  let filesystem: any = {
    size: 0,
  };
  let ptr = filesystem;
  for (let line of input) {
    if (line.startsWith('$ cd')) {
      const dir = line.split('$ cd ')[1];
      if (dir === '/') {
        ptr = filesystem;
      } else if (dir === '..') {
        ptr = ptr.parent ?? ptr;
      } else {
        ptr = ptr[dir];
      }
    } else if (line.startsWith('dir ')) {
      const dir = line.split('dir ')[1];
      ptr[dir] = { parent: ptr };
    } else if (line !== '$ ls') {
      const size = Number(line.split(' ')[0]);
      ptr.size = ptr.size ? ptr.size + size : size;
    }
  }
  iterate(filesystem);
  return sum;
};

const p2 = (input: string[]) => {};

const iterate = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null && key !== 'parent') {
      iterate(obj[key]);
    } else if (key === 'size') {
      sum += obj[key];
    }
  });
};

(async () => {
  const input = (await readFile('./inputs/day7t')).split('\r\n');
  console.log(p1(input), p2(input));
})();
