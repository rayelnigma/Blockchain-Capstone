// // migrating the appropriate contracts
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SolnSquareVerifier);
// };

// migrating the appropriate contracts
var RealEstateMarketplaceToken = artifacts.require("./RealEstateMarketplaceToken.sol");
var SquareVerifier = artifacts.require("./SquareVerifier.sol");

module.exports = function (deployer) {
  deployer.deploy(RealEstateMarketplaceToken);
  deployer.deploy(SquareVerifier);
};
