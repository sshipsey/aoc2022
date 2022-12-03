import { readFile } from './lib/readFile';

const priorities = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
] as const;

type Priority = typeof priorities[number];

const prioritiesMap = priorities.reduce(
  (map: { [key in Priority]: number }, char, idx) => ({
    ...map,
    [char]: idx + 1
  }),
  {} as { [key in Priority]: number }
);

const p1 = (sacks: string[]) =>
  sacks.reduce((sum, sack) => {
    const leftCompartment = new Set(
      sack.slice(0, sack.length / 2).split('') as Priority[]
    );
    const rightCompartment = new Set(
      sack.slice(sack.length / 2, sack.length).split('') as Priority[]
    );
    return (
      sum +
      Array.from(rightCompartment).reduce(
        (s, prio) => (leftCompartment.has(prio) ? s + prioritiesMap[prio] : s),
        0
      )
    );
  }, 0);

const p2 = (sacks: string[]) => {
  let sum = 0;
  for (let i = 0; i < sacks.length; i += 3) {
    sum +=
      prioritiesMap[
        (sacks[i].split('') as Priority[]).filter(
          (v) =>
            (sacks[i + 1].split('') as Priority[]).includes(v) &&
            (sacks[i + 2].split('') as Priority[]).includes(v)
        )[0]
      ];
  }
  return sum;
};

(async () => {
  const lines = (await readFile('./inputs/day3')).split('\r\n');
  console.log(p1(lines), p2(lines));
})();
