
const Nft = artifacts.require("Nft");
import Web3 from "web3"

declare var web3: Web3;

module.exports = async function (deployer,network, accounts) {
  await deployer.deploy(Nft, "FBEE", "Fil Bee", 20, "ipfs://QmSMoHBEdqhbgZbnHHPDk4f5mLmTRjrSAz7HubbbfaL63e/");
} as Truffle.Migration;

export {};