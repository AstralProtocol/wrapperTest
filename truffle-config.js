const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

// Create a .env file with your MNEMONIC and a ROPSTEN API key from INFURA
let mnemonic = process.env.MNEMONIC
let ropstenURL = process.env.ROPSTEN_API_KEY


let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonic,
  },
  providerOrUrl: ropstenURL,
});

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ropsten: {
      provider: provider,
      network_id: "3",
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
    },
  },
};
