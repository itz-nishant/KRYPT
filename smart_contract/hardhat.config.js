require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/7-ozZmaPqhRtpRY00jkMMwtG48ny2XyU',
      accounts: ['e5ab321dd8fcac8c7c6470d00aa9901481a484ed13713cacd3aed0ea8bafecc2'],
    },
  },
};

//https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv