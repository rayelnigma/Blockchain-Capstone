# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

# Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Testing Instructions

To test using truffles built in ganache, do the following:

```
cd eth-contracts
npm install
truffle develop
compile
test
```

To test on the Rinkeby network you will need to create a .env file within the eth-contracts folder.

```
INFURA_KEY=<your infura key>
FROM_ADDRESS=<the address in your wallet that has ether>
MNEMONIC=<the mnemonic for your wallet>
```

NOTE: I was using the 2nd address in my wallet, so if you want to use a different one you will need to update the truffle-config.js line:

```
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`, 1),
```

from 1 to whatever your address position is (zero index is first).

# Writeup for project submission:

Project Link: https://github.com/rayelnigma/Blockchain-Capstone

Rinkeby contract address: 0x1FAD7E0821ACC768d9cE3881D09817d30aF2BA59
Rinkeby contract linke: https://rinkeby.etherscan.io/address/0x1FAD7E0821ACC768d9cE3881D09817d30aF2BA59

Contract ABIs:

- [eth-contracts\build\contracts\RealEstateMarketplaceToken.json](https://raw.githubusercontent.com/rayelnigma/Blockchain-Capstone/master/eth-contracts/build/contracts/RealEstateMarketplaceToken.json)
- [eth-contracts\build\contracts\SolnSquareVerifier.json](https://raw.githubusercontent.com/rayelnigma/Blockchain-Capstone/master/eth-contracts/build/contracts/SolnSquareVerifier.json)
- [eth-contracts\build\contracts\SquareVerifier.json](https://raw.githubusercontent.com/rayelnigma/Blockchain-Capstone/master/eth-contracts/build/contracts/SquareVerifier.json)

OpenSea MarketPlace Storefront link: https://testnets.opensea.io/collection/jeromynft

# Jeromy's Notes

Previously had Docker Toolbox, but it seems it was out of date, the Oracle Virtual Box wouldn't even work. I discovered that the new Docker Desktop would work with WSL 2. I had to upgrade various things to get it working, but now it is working.

PS C:\Users\jerom> wsl -l -v
NAME STATE VERSION

- docker-desktop Running 2
  Ubuntu-20.04 Stopped 2
  docker-desktop-data Running 2

Docker Desktop 4.1.1 (69879)

Microsoft Windows [Version 10.0.19042.1288]

docker run -v //c/users/jerom/source/Blockchain-Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
zokrates compile -i square.code
zokrates setup
zokrates compute-witness -a 5 25
zokrates generate-proof
zokrates export-verifier
