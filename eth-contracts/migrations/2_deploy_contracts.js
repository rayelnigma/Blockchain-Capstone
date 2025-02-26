// migrating the appropriate contracts
var RealEstateMarketplaceToken = artifacts.require("./RealEstateMarketplaceToken.sol");
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function (deployer) {
  deployer.deploy(RealEstateMarketplaceToken, "RealEstateMarketPlaceToken",
    "RET");
  deployer.deploy(SquareVerifier)
    .then(() => SquareVerifier.deployed())
    .then(_instance => deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "JeromyNFT",
      "JLC"));
};
