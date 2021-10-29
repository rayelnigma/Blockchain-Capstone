pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import "./RealEstateMarketplaceToken.sol";

library SharedProof {
    struct G1Point {
        uint256 X;
        uint256 Y;
    }
    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint256[2] X;
        uint256[2] Y;
    }
    struct Proof {
        G1Point a;
        G2Point b;
        G1Point c;
    }
}

// DONE define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is RealEstateMarketplaceToken {
    Verifier squareVerifierContract;

    // DONE update to pass name and symbol...
    constructor(
        address squareVerifierAddress,
        string memory name,
        string memory symbol
    ) public RealEstateMarketplaceToken(name, symbol) {
        squareVerifierContract = Verifier(squareVerifierAddress);
    }

    // DONE define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 indexOfSolution;
        address ownerAddress;
        bytes32 solutionHash;
    }

    // DONE define an array of the above struct
    Solution[] private submittedSolutions;

    // DONE define a mapping to store unique solutions submitted
    // mapping (bytes32 hash => Solution solution)
    mapping(bytes32 => Solution) private uniqueSolutions;

    // DONE Create an event to emit when a solution is added
    event SolutionAdded(
        uint256 indexOfSolution,
        address ownerAddress,
        bytes32 solutionHash
    );

    // DONE Create a function to add the solutions to the array and emit the event
    function addSolution(address ownerAddress, bytes32 solutionHash) private {
        uint256 indexOfSolution = submittedSolutions.length + 1;
        Solution memory _solution = Solution(
            indexOfSolution,
            ownerAddress,
            solutionHash
        );
        submittedSolutions.push(_solution);
        uniqueSolutions[solutionHash] = _solution;
        emit SolutionAdded(indexOfSolution, ownerAddress, solutionHash);
    }

    // DONE define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    function verifyProof(
        SharedProof.Proof memory proof,
        uint256[2] memory input
    ) private view returns (bool) {
        return squareVerifierContract.verifyTx(proof, input);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mint(
        SharedProof.Proof memory proof,
        uint256[2] memory input,
        address to,
        uint256 tokenId
    ) public returns (bool) {
        bytes32 solutionHash = keccak256(
            abi.encodePacked(
                proof.a.X,
                proof.a.Y,
                proof.b.X,
                proof.b.Y,
                proof.c.X,
                proof.c.Y,
                input
            )
        );
        require(
            uniqueSolutions[solutionHash].indexOfSolution == 0,
            "must be a unique solution"
        );
        require(verifyProof(proof, input), "must be a valid proof to continue");
        addSolution(to, solutionHash);
        return mint(to, tokenId);
    }
}

contract Verifier {
    function verifyTx(SharedProof.Proof memory proof, uint256[2] memory input)
        public
        view
        returns (bool r);
}
