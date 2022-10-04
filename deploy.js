import HDWalletProvider from "@truffle/hdwallet-provider";
import Web3 from "web3";
import dotenv from "dotenv";
import inboxSource from "./compile.js";

dotenv.config();
const { abi, evm } = inboxSource;

const provider = new HDWalletProvider(
  [process.env.PRIVATE_KEY],
  process.env.PROVIDER_URL
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
    })
    .send({
      gas: "10000000",
      from: accounts[0],
    });
  console.log(abi);
  console.log(result.options.address);
  provider.engine.stop();
};
deploy();
