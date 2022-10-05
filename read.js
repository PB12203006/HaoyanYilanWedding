import Web3 from "web3";
import dotenv from "dotenv";
import abi, { ARRAY_FIELD_LENGTHS } from "./abi.js";

dotenv.config();
const provider = new Web3.providers.HttpProvider(process.env.PROVIDER_URL);
const web3 = new Web3(provider);

const contract = new web3.eth.Contract(
  abi,
  "0xac94D0e9D1C9ECE5EB8D943409Feb4624909fE9B"
);

async function main() {
  for (let method of abi) {
    if (!method.inputs.length) {
      console.log("---");
      console.log(`${method.name} :`);
      console.log(await contract.methods[method.name]().call());
    } else {
      for (let i = 0; i < ARRAY_FIELD_LENGTHS[method.name]; i++) {
        console.log("---");
        console.log(`${method.name}${i} :`);
        console.log(await contract.methods[method.name](i).call());
      }
    }
  }
}

main();
