require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.NETWORK_URL,
      accounts: [process.env.ACCOUNTS],
    },
  },
  solidity: {
    version: "0.8.0",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
