// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var truffleAssert = require('truffle-assertions');

contract('SolnSquareVerifier', accounts => {

    let theContract;
    const proofs = [
        {
            "proof": {
                "a": [
                    "0x21446d5504ba6708f843f18543e074451881f6f50e22314019aefca51cf7a9dd",
                    "0x23fd44f57e8dc8b491b0d6f2a239b41d2dbfcdb29bbc5c4d02cb82219bdafbe3"
                ],
                "b": [
                    [
                        "0x10818f32d54c8e49c2e5e4c159a7cafefa351a4b3e42aed5ddd951bc34cb1bb9",
                        "0x2bcd7ace50ff394c90a9005bd22f9984b6d145cc66bb2b7df84ef2c18126621a"
                    ],
                    [
                        "0x22cd009fe6dcc184ab7360cb9c7912097cf7adb2a31fb7d5f3823a3641f3f5a6",
                        "0x11f60290c2307ab4a79e4798a2d8a85230dbec712b0e296d244e7a5536936621"
                    ]
                ],
                "c": [
                    "0x08834e158a2d69173822c8d85e8dd39fd2311903463d656dc801ae93c245a6ab",
                    "0x17938a5383ce63c7ecab57c288e26a226cf3cca036dd3f88a06f7af298a8e34d"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000004",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x1f60efc03274cd7b654548820790e321a3fa0be031df24cbe94fc8eb28f0b5f4",
                    "0x0669fa6628bcddab4151189d94b4a1a12c7fdc2d023485f26856943487515420"
                ],
                "b": [
                    [
                        "0x051b7c6517d619bbc2f5c9bfc3f2bfeff536e6956c2fdba790c8704d938411e8",
                        "0x197958a8f6ad4beee9a59bff2e6d8a0b65a3c283420a0615bea5cb2f53e31996"
                    ],
                    [
                        "0x15af2ef38c982df43a33eca7d98f9db93ea68afa0350753f906e98df0f675110",
                        "0x0e1e19c76b559a913ee4f4b68ff36e17aca60bc95f38f0bd253ef1eeeaba379f"
                    ]
                ],
                "c": [
                    "0x0ca5c7ee6456d26bd1b3bf3daf87ba146eac07413dbbe4b5c371a50a94d0a9bf",
                    "0x1a35b5daae51a2710531c2f0f312e3db3d67415721e4798a56fc38acf008df11"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000009",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x2a6de6574927db1cd91f894edb7b7952794b063709b23625984a8726cb143e5a",
                    "0x2596564ec5b8a171cdc5fbb6dbba11f01ea83232d22593035ea18639d2175300"
                ],
                "b": [
                    [
                        "0x0037239459f8221848bb062035556625e71dfb1d10acd8ac669d0127906a6352",
                        "0x04dfbd60f1fca70b14440573b4836ebbd238465707fbd66c8e51e0b0badd74d6"
                    ],
                    [
                        "0x14c8e45f3063a961518fedfb7bf3ff28dd41e586175085b5c55d0e128386cf2d",
                        "0x165311288ffb37989a034a7c4864fa3b51f54f50c91f5b51b651790d5e8ced2b"
                    ]
                ],
                "c": [
                    "0x08110dd611164e58cc3de0f57b6fe2cd8c36ad11a10d651f2984cb3167b26fc8",
                    "0x021fb5337a02fdae0133eef636a1b65b520d8c7ea0c99c869ed1616ef4147e0b"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000010",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x26dd21fac7a06e58cffe2aaa48734dcafdea4506d048f796255037e1454b77bb",
                    "0x0d49dcc5b3a2c81f7cddb56461282ec62ee4e0829aed24f5a3a33ca9be77b45c"
                ],
                "b": [
                    [
                        "0x27a58ac0cab322cbcc981d9086419af676ce2fecdf12d0cb5810725aaaba3f84",
                        "0x18e9de296e5d3b70eb6b85da93485c76d84a3c5601756f0e760a05cc4b22649d"
                    ],
                    [
                        "0x1ea288a5d2418cceef6a6a6fd3604fe2eefe458f5ed984bbadea9365770c9bcc",
                        "0x16d99b39922d7e2644d1d82767eff72f74800405c789055820363f7aff8556a3"
                    ]
                ],
                "c": [
                    "0x278a7967b49dc530bc958f1ef12428cb685511ff7769a9ce6d69beb79fe294a8",
                    "0x021d4d649ae5bc17381cb83dc4426cfb653e472e206431dbd85e9bdbd4d66d2b"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000019",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x104332a6fc8cad2a9529745581d1dc908d8f32b71e3832fda3c40dd88d2e3566",
                    "0x2fad18151e470eaa3dc87f1e894e8cd73d095ae050ca7bfa48562afd7b193be6"
                ],
                "b": [
                    [
                        "0x24e7a28bd6a7d0b7f5add473510da8584336e7b48e9387affd6308c76ff98c18",
                        "0x1629ea965cf1e0de18d93e576919493707be8dfd608cb47b3fd843f704f8b85f"
                    ],
                    [
                        "0x282a0602660ac4dbf66292e513e48c52aed74d73903dabe3035d95083d015e15",
                        "0x10fcc1577cd1e0071725c4f455f13c94591028f885e6727edafad76436fd2b9b"
                    ]
                ],
                "c": [
                    "0x01dda3cda21929b3b4ba35468e34d952d38b96d98265aff7576e9f3334e2191b",
                    "0x00139f1f41c19d550d526e3fff848371c2c23b34311f287a0bc4bf57481a3447"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000024",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x11ad412432371e0d375d83382210734b5033fa5186a5ada18eb494bf3452aa3c",
                    "0x2a5b30f4bf113d9f17e0aacea8c4e33af17a542194928fe6432c42abfc63e34d"
                ],
                "b": [
                    [
                        "0x2511b5fe801e56083f99ae0ac5068e7c850b85d85c5b39bedcdca22069c9d312",
                        "0x232e1421a55160bfecc67ff5cda270e868022cae25db46dd454090b5f097e633"
                    ],
                    [
                        "0x052fc3835fc51639388ce9286f5de3c9a24b821adcb1c91c0fe19d2ef6b2221a",
                        "0x20c3e9790c3d0daacd292f985c006deed46b285c234c77538ac1081d92d6dbe8"
                    ]
                ],
                "c": [
                    "0x1769c1d475a6e761b357a6558a5837f69744864d3d5bf7e4abdc386dd4dd32ff",
                    "0x2294f32c26a073099412c639ee5926806b663fd8f364172d3ac81917134bcd32"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000031",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x28f373dc49f3d2acdcab95cb465436c282b9e398ef41a91a848989ddc1624ee1",
                    "0x247e095dd9d109c723b102ab39411988833ff1453364f94430c19ef26d8b4dbd"
                ],
                "b": [
                    [
                        "0x192173ddd1dea20269ae5826e573a0ef6da60e7412cd026154112f5bbffcf3d6",
                        "0x1b9f902b71c5711fb3af5624569009984cc16890aaec57647dd77840d2e0bf01"
                    ],
                    [
                        "0x2e3f694f8cea5d3615c397d93dc5266cbd611435819d65d69fee5bbf197cd122",
                        "0x07c869899a64f1c590e5a196417a91ba209497288e5998b6200e11c10601f068"
                    ]
                ],
                "c": [
                    "0x1f4c74ca8db316a10e5747af417c85e8271473eeed8b2c94fbd702063afa3d65",
                    "0x1cd1dace52982544025e725acceabf6b8d87e737725f9506ad16124aca3fce16"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000040",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x2c9e1c107f5a0bdf8ecb5b078fc8521c7983987f69c5e02abf4bf3f0754700b9",
                    "0x1a0ded31d96c05a27d808648613a746cc78407f3af8db549240a00db57a907f4"
                ],
                "b": [
                    [
                        "0x2eaa9b114c78db8a70579c6bd87aaed0f93514ce7bafd83d8919d478709b5618",
                        "0x1ef1dbd44eba2c842d0c8b6794e81e6fe0e894677fd9e5e1d6fe40675349a804"
                    ],
                    [
                        "0x0cc571cd2ffba1f43c76170710cdb0347066ac50c66ded3eb37a065d247cf214",
                        "0x1c0e939febe3f23b1eb7bf55cc7f2770d039856b9a1adf88df406863a422c69c"
                    ]
                ],
                "c": [
                    "0x278ac691959e01dc7ecbfe152d6059e95cebfab7ed657567513ddb2632e472cd",
                    "0x0d430da5112c0377c77b9afd921125f2f200ddc8392a1102d3fb95a7d401ca99"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000051",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x234fe6019d57c9cee46cfa19d36517cb4b3fa4a0d96fcaaae28dbfd5cb1e5809",
                    "0x2d41bce49e73984225cc611bdf4991761e3098fc9b8ad91726a180cc4ebf26ef"
                ],
                "b": [
                    [
                        "0x260499a87d4d5f8501be5cc4268a83ea30319c8015457d68c8a8cba58f5895ed",
                        "0x1c556ef9261690d834dd9c88a6fcd01c1cf28484260666770025a832d233dc17"
                    ],
                    [
                        "0x1479e426c541a0c79cb0ea243a98557109fba715d834121a7104baa6978e3174",
                        "0x2808bb0ad8c0532cccb646e97b1feecc99a74928455c68d5cd6bb79bdbfd21ba"
                    ]
                ],
                "c": [
                    "0x17d2f3ad091d4fcf64331bf86f58d80a85687f81066056fa388b72626d472db1",
                    "0x061d806ed001025f129c6a998c27ee8c0db6a15fe3d390d766ea2a566c3aecf8"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000064",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        },
        {
            "proof": {
                "a": [
                    "0x2a81ac93fd7bc6d4b5396d58e5ed127b5cc6299ae70390ea39973fcc0dd8603d",
                    "0x2ea492a2e5510bd0be53412a99470b9b7f7e4bfe97b3a8b2108d4d75ba85c85a"
                ],
                "b": [
                    [
                        "0x0515114070af6f148c1122c9446ac5636e04689f7d21707645a91e589cbf50b8",
                        "0x2e68164d0f2f5eb91994fade6e85e806e37d0ebbfee41d4ea81961c58a1acf95"
                    ],
                    [
                        "0x0a4d2638617f7e3815318be3008310faed3c992281174583255af8bc597f17d9",
                        "0x09223aca996dcec6d5866b1bf05b0a182952bb02902e3af1d444da2323a697ea"
                    ]
                ],
                "c": [
                    "0x265aa57ba7306a70597a9c29e47e0dede8790fc2ebdf630a42d2f6aaf3d6c64f",
                    "0x0e971e72145418f851b132d8ce67205860f63715e3131f209685261aba09aa97"
                ]
            },
            "inputs": [
                "0x0000000000000000000000000000000000000000000000000000000000000079",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ]
        }
    ];
    let tokenId = 1;

    before(async () => {
        console.log('before');
        // theContract = await SolnSquareVerifier.deployed();
        theContract = await SolnSquareVerifier.at("0x1FAD7E0821ACC768d9cE3881D09817d30aF2BA59");
    });

    // Mint coins
    it('mint 10 coins', async function () {
        console.log('total number of proofs available: ', proofs.length);
        for (i = 0; i < proofs.length; i++) {
            console.log('minting coin: ', tokenId, ', owner: ', accounts[0]);
            await theContract.mint(proofs[i].proof, proofs[i].inputs, accounts[0], tokenId++)
                .catch(error => {
                    console.log('there was an error: ', error);
                    throw error;
                });
        }
    });

});

