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
zokrates compute-witness -a ?
zokrates generate-proof
zokrates export-verifier
