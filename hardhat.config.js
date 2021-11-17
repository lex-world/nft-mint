require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200
    //   }
    // }
  },
  /**
   * @dev default network for deployment can be set
   */
  // defaultNetwork: "rinkeby",
  // networks: {
  //   hardhat: {
  //   },
  //   rinkeby: {
  //     url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
  //     accounts: [privateKey1, privateKey2, ...]
  //   }
  // },

  /**
   * @dev paths for the dev info
   * * Can be customized with the different paths that 
   * * Hardhat uses by providing an object to the paths
   */
  // paths: {
  //   sources: "./contracts",
  //   tests: "./test",
  //   cache: "./cache",
  //   artifacts: "./artifacts"
  // },

  /**
   * @dev on 20sec timeout test
   */
  // mocha: {
  //   timeout: 20000
  // }
};
