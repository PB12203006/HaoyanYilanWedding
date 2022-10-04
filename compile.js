import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import solc from "solc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inboxPath = path.resolve(__dirname, "HaoyanYilanWedding.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "HaoyanYilanWedding.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

export default JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "HaoyanYilanWedding.sol"
].HaoyanYilanWedding;
