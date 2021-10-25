// // migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SquareVerifier);
//   deployer.deploy(SolnSquareVerifier);
// };

// migrating the appropriate contracts
var RealEstateMarketplaceToken = artifacts.require("./RealEstateMarketplaceToken.sol");

module.exports = function (deployer) {
  deployer.deploy(RealEstateMarketplaceToken);
};
