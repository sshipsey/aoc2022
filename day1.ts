import { readFile } from './lib/readFile';

const p1 = (cals: number[]) => Math.max(...cals);

const p2 = (cals: number[]) => {
  const sortedCals = cals.sort((a, b) => b - a);
  return sortedCals[0] + sortedCals[1] + sortedCals[2];
};

(async () => {
  const elves = (await readFile('./inputs/day1')).split('\r\n\r\n');
  const calories = elves.map((elf) =>
    elf
      .split('\r\n')
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
  console.log(p1(calories), p2(calories));
})();
