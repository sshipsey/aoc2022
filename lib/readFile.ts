import * as fs from 'fs';
import * as path from 'path';

export const readFile = (file: string) =>
  new Promise<string>((resolve) =>
    fs.readFile(path.join(__dirname, `../${file}`), 'utf-8', (_, data) =>
      resolve(data)
    )
  );
