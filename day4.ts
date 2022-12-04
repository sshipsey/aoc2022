import { readFile } from './lib/readFile';

const contains = (arr1: number[], arr2: number[]) =>
  (arr1[0] >= arr2[0] && arr1[1] <= arr2[1]) ||
  (arr2[0] >= arr1[0] && arr2[1] <= arr1[1]);

const overlap = (arr1: number[], arr2: number[]) =>
  (arr1[0] >= arr2[0] && arr1[0] <= arr2[1]) ||
  (arr1[1] >= arr2[0] && arr1[1] <= arr2[1]);

const p1 = (elfPairs: number[][][]) =>
  elfPairs.reduce(
    (acc, elfPair) => (contains(elfPair[0], elfPair[1]) ? acc + 1 : acc),
    0
  );

const p2 = (elfPairs: number[][][]) =>
  elfPairs.reduce(
    (acc, elfPair) =>
      contains(elfPair[0], elfPair[1]) || overlap(elfPair[0], elfPair[1])
        ? acc + 1
        : acc,
    0
  );

(async () => {
  const lines = (await readFile('./inputs/day4')).split('\r\n');
  const elfPairs = lines.map((line) =>
    line.split(',').map((elf) => elf.split('-').map(Number))
  );
  console.log(p1(elfPairs), p2(elfPairs));
})();
