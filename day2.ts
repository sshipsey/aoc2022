import { readFile } from './lib/readFile';

type OpponentThrow = 'A' | 'B' | 'C';
type SelfThrow = 'X' | 'Y' | 'Z';
type RoundResult = SelfThrow;

const p1 = (lines: `${OpponentThrow} ${SelfThrow}`[]) => {
  const rounds: [OpponentThrow, SelfThrow][] = lines.map(line => line.split(' ') as [OpponentThrow, SelfThrow]);
  const scoreMap: { [key in SelfThrow]: number } = {
    X: 1,
    Y: 2,
    Z: 3
  };

  const roundMap: { [key in OpponentThrow]: {[key in SelfThrow]: number }} = {
    A: {
      X: 3,
      Y: 6,
      Z: 0
    },
    B: {
      X: 0,
      Y: 3,
      Z: 6
    },
    C:{
      X: 6,
      Y: 0,
      Z: 3
    }
  };
  return rounds.reduce((score, round) => roundMap[round[0]][round[1]] + scoreMap[round[1]] + score, 0);
}

const p2 = (lines: `${OpponentThrow} ${RoundResult}`[]) => {
  const rounds: [OpponentThrow, RoundResult][] = lines.map(line => line.split(' ') as [OpponentThrow, RoundResult]);
  const scoreMap: { [key in RoundResult]: number } = {
    X: 0,
    Y: 3,
    Z: 6
  };

  const roundMap: { [key in OpponentThrow]: {[key in RoundResult]: number }} = {
    A: {
      X: 3,
      Y: 1,
      Z: 2
    },
    B: {
      X: 1,
      Y: 2,
      Z: 3
    },
    C:{
      X: 2,
      Y: 3,
      Z: 1
    }
  };
  return rounds.reduce((score, round) => roundMap[round[0]][round[1]] + scoreMap[round[1]] + score, 0);
}

(async () => {
  const lines = (await readFile('./inputs/day2')).split('\r\n');
  console.log(
    p1(lines  as `${OpponentThrow} ${SelfThrow}`[]),
    p2(lines  as `${OpponentThrow} ${RoundResult}`[])
    );
})();