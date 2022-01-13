
const Nft = artifacts.require("Nft");
import Web3 from "web3"

declare var web3: Web3;

module.exports = async function (deployer,network, accounts) {
  await deployer.deploy(Nft, "TEST", "test", 100);
} as Truffle.Migration;

export {};