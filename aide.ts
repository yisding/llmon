import { readFile } from "node:fs/promises";

import { getAide } from './utils'

import yargs from "yargs";

(async () => {
  const options = yargs.usage("Usage: -f <file>").option("f", {
    alias: "file",
    describe: "JSON file to get aide",
    type: "string",
    demandOption: true,
  }).argv;

  const { file } = options;

  const input = await readFile(file, { encoding: "utf8" });

  const text = await getAide(input);

  console.log(text);
})();
