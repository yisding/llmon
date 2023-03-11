/**
 * Concentrate JSON to use fewer tokens
 *
 * arguments:
 *  -f <file>
 *  -f <file> is the JSON file to concentrate
 *  -f <file> is required
 *
 *  --yaml
 *  --yaml outputs yaml
 *
 *  --toml
 *  --toml outputs toml
 */

import { readFile } from "node:fs/promises";
import TOML from "@iarna/toml";
import YAML from "yaml";
import yargs from "yargs";

(async () => {
  const options = yargs
    .usage("Usage: -f <file> --yaml --toml")
    .option("f", {
      alias: "file",
      describe: "JSON file to concentrate",
      type: "string",
      demandOption: true,
    })
    .option("yaml", {
      describe: "Output yaml",
      type: "boolean",
      demandOption: false,
    })
    .option("toml", {
      describe: "Output toml",
      type: "boolean",
      demandOption: false,
    }).argv;

  const { file, yaml, toml } = options;

  const input = await readFile(file, { encoding: "utf8" });
  const data = JSON.parse(input);

  if (yaml) {
    console.log(YAML.stringify(data));
    return;
  }
  if (toml) {
    console.log(TOML.stringify(data));
    return;
  }
  console.log(JSON.stringify(data));
})();
