// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var truffleAssert = require('truffle-assertions');

contract('SolnSquareVerifier', accounts => {

    let theContract;
    const proof1 = {
        "proof": {
            "a": [
                "0x062b9d6b228e1df1bbd304bb7d32aa6309bd069265510e1962d987d14961a06c",
                "0x1b61a39c0394851fca635ab60600d2eb14099aaf47fd06f62ddb5d6b5fb6e9ef"
            ],
            "b": [
                [
                    "0x0f6fe5c8cd47976dec6f1a0c87401ba1c2be7ab79c12f727acc6d8678ee37834",
                    "0x1e1784d31136ad302c55e68811da86dde74bd4cb765debb203b52071af1ded80"
                ],
                [
                    "0x27ec8332f6849f957c376dae65f789d391b338930a4c4b5a9e194093a0d73881",
                    "0x2962133233bd5b54757e866bfeb34b74a9ee1f42d8306a9316b0017697806783"
                ]
            ],
            "c": [
                "0x019ec1816b5ac8c5c0feccfd4e7a9c1b04aeaeb716aaf81c0693c2c76854b83d",
                "0x204faa1d41b49554787a5eb4ec9de8298b7dfb6f4a0fed6577a27ab942982ece"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000019",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    };
    before(async () => {
        console.log('before');
        theContract = await SolnSquareVerifier.deployed();
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('', async function () {
        let result1 = await theContract.addSolution(accounts[1], "testing");
        truffleAssert.eventEmitted(result1, 'SolutionAdded', (ev) => {
            console.log(ev);
            return true;
        });
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('', async function () {
    });

    // Test if an ERC721 token is rejected when a duplicate solution is provided
    it('', async function () {
    });

    // Test if an ERC721 token is rejected when an invalid proof is provided
    it('', async function () {
    });
});

