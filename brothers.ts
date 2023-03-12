import { readFile } from "node:fs/promises";
import yargs from "yargs";

import { getAide, objectSubtrees } from "./utils";

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

  for (let i = 0; i < slices.length; ++i) {
    console.log(`SLICE ${i}:`);
    const sliceText = JSON.stringify(slices[i])
    console.log(sliceText);
    const text = await getAide(sliceText);
    console.log(text);
  }
})();
