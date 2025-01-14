var RealEstateMarketplaceToken = artifacts.require('RealEstateMarketplaceToken');
var truffleAssert = require('truffle-assertions');

contract('RealEstateMarketplaceToken', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    let tokens = new Array();
    let tokenIndex = 0;
    let theContract;
    before(async () => {
        console.log('before');
        theContract = await RealEstateMarketplaceToken.deployed();
        tokens.push(await theContract.mint(account_one, ++tokenIndex));
        tokens.push(await theContract.mint(account_one, ++tokenIndex));
        tokens.push(await theContract.mint(account_two, ++tokenIndex));
        tokens.push(await theContract.mint(account_two, ++tokenIndex));
        tokens.push(await theContract.mint(account_two, ++tokenIndex));
    });

    describe('match erc721 spec', function () {
        it('should return total supply', async function () {
            let totalSupply = await theContract.totalSupply();
            assert.equal(totalSupply, tokenIndex);
        })

        it('should get token balance', async function () {
            let tokenBalance = await theContract.balanceOf(account_two);
            assert.equal(tokenBalance, 3);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenUri = await theContract.tokenURI(1);
            let expectedUri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/" + 1;
            assert.equal(tokenUri, expectedUri);
        })

        it('should transfer token from one owner to another', async function () {
            await theContract.transferFrom(account_one, account_two, 2);
            let tokenBalance = await theContract.balanceOf(account_one);
            assert.equal(tokenBalance, 1);
        })
    });

    describe('have ownership properties', function () {
        it('should fail when minting when address is not contract owner', async function () {
            await truffleAssert.reverts(
                theContract.mint(account_two, 999, { from: account_two }),
                'this function can only be called by the owner of the contract');

        })

        it('should return contract owner', async function () {
            let contractOwner = await theContract.owner();
            assert.equal(contractOwner, account_one);
        })
    });
});