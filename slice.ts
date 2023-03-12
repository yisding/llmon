/**
 * Concentrate JSON to use fewer tokens
 *
 * arguments:
 *  -f <file>
 *  -f <file> is the JSON file to concentrate
 *  -f <file> is required
 *
 *  --levelsDown
 *  --levelsDown is the number of levels to go down
 */

import { readFile } from "node:fs/promises";
import yargs from "yargs";

import { objectSubtrees } from "./utils";

(async () => {
  const options = yargs
    .usage("Usage: -f <file> --levelsDown <number>")
    .option("f", {
      alias: "file",
      describe: "JSON file to slice",
      type: "string",
      demandOption: true,
    })
    .option("levelsDown", {
      describe: "Number of levels to go down",
      type: "number",
      demandOption: true,
    }).argv;

  const { file, levelsDown } = options;

  const input = await readFile(file, { encoding: "utf8" });
  const data = JSON.parse(input);

  const slices = objectSubtrees(data, levelsDown);

  slices.map((slice, index) => {
    console.log(`SLICE ${index}:`);
    console.log(JSON.stringify(slice));
  });
})();
