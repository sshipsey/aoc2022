import { readFile } from './lib/readFile';

const p1 = (lines: number[][], containers: string[][]) =>
  moveStacks(lines, containers, false);

const p2 = (lines: number[][], containers: string[][]) =>
  moveStacks(lines, containers, true);

const moveStacks = (
  lines: number[][],
  containers: string[][],
  multiGrab: boolean
) => {
  for (let line of lines) {
    const [move, from, to] = line;
    const crane = containers[from].splice(containers[from].length - move, move);
    containers[to].push(...(multiGrab ? crane : crane.reverse()));
  }

  return containers.map((c) => c[c.length - 1]).join('');
};

(async () => {
  const lines = (await readFile('./inputs/day5')).split('\r\n').map((line) => {
    const parsedLine = line
      .replace('move ', '')
      .replace(' from ', '|')
      .replace(' to ', '|')
      .split('|')
      .map(Number);
    parsedLine[1] -= 1;
    parsedLine[2] -= 1;
    return parsedLine;
  });
  const containers = [
    ['S', 'L', 'W'],
    ['J', 'T', 'N', 'Q'],
    ['S', 'C', 'H', 'F', 'J'],
    ['T', 'R', 'M', 'W', 'N', 'G', 'B'],
    ['T', 'R', 'L', 'S', 'D', 'H', 'Q', 'B'],
    ['M', 'J', 'B', 'V', 'F', 'H', 'R', 'L'],
    ['D', 'W', 'R', 'N', 'J', 'M'],
    ['B', 'Z', 'T', 'F', 'H', 'N', 'D', 'J'],
    ['H', 'L', 'Q', 'N', 'B', 'F', 'T'],
  ];
  console.log(
    p1(lines, JSON.parse(JSON.stringify(containers))),
    p2(lines, JSON.parse(JSON.stringify(containers)))
  );
})();
