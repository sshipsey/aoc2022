import { readFile } from './lib/readFile';

const p1 = (input: string) => findMarker(input, 4);

const p2 = (input: string) => findMarker(input, 14);

const findMarker = (input: string, markerLength: number) => {
  const window = input.slice(0, markerLength).split('');
  let ptr = markerLength;

  while (ptr < input.length) {
    const currentChar = input[ptr];
    if (new Set(window).size === window.length) {
      return ptr;
    }
    window.shift();
    window.push(currentChar);
    ptr++;
  }
  return -1;
};

(async () => {
  const input = await readFile('./inputs/day6');
  console.log(p1(input), p2(input));
})();
