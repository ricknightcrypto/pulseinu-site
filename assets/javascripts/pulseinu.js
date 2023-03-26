const PINU_PARAM = {
  contractName: "PulseInu",
  contractAddress: "0xa367b6Dde12c3A38bcEc4177727D97Ff63e4B3F0",
  abi: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_airdropDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_mintDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_firstAdopterPercent",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_referrerPercent",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_airdropAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "claimer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Minted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "INITIAL_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "OWNER_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "claimFirstAdopter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "claimFreeClaimer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "eachPercent",
          "type": "uint256"
        }
      ],
      "name": "claimReferrer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "claimed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractInfo",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "airdropEndTime",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "mintEndTime",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "firstAdopterPercent",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "referrerPercent",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "pricePINU",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "airdropAmount",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "countClaims",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  metadata:
    '{"compiler":{"version":"0.8.15+commit.e14f2714"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ACCEPTED","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"accepted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"hexAddr","type":"address"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"hexAddressIsClaimable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"launchTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfClaims","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"events":{"Claim(address,uint256)":{"details":"Emitted after a successful token claim","params":{"amount":"of tokens claimed","to":"recipient of claim"}}},"kind":"dev","methods":{"allowance(address,address)":{"details":"See {IERC20-allowance}."},"approve(address,uint256)":{"details":"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See {IERC20-balanceOf}."},"decreaseAllowance(address,uint256)":{"details":"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."},"increaseAllowance(address,uint256)":{"details":"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."},"name()":{"details":"Returns the name of the token."},"symbol()":{"details":"Returns the symbol of the token, usually a shorter version of the name."},"totalSupply()":{"details":"See {IERC20-totalSupply}."},"transfer(address,uint256)":{"details":"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."},"transferFrom(address,address,uint256)":{"details":"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``\'s tokens of at least `amount`."}},"version":1},"userdoc":{"kind":"user","methods":{"ACCEPTED(uint256)":{"notice":"============== Mint Related =============="},"decimals()":{"notice":"============== Functions =============="},"hasClaimed(address)":{"notice":"============== Mutable Storage =============="}},"version":1}},"settings":{"compilationTarget":{"project:/contracts/PulseInu.sol":"PulseInu"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol":{"keccak256":"0x596ed72a251d391b814a4aa19d7acb02ebdcc92ba27d3fff74a6f0c158b12ab7","license":"MIT","urls":["bzz-raw://d5f49013d50b1011c842f76e96f3c3f146ca7cb15084c8805575e0e0e1a5c700","dweb:/ipfs/QmQ3n5qiuioUA74heD6ZddNkYg1kYihjQBNcy9zgwYXKgM"]},"@openzeppelin/contracts/utils/math/SafeMath.sol":{"keccak256":"0x0f633a0223d9a1dcccfcf38a64c9de0874dfcbfac0c6941ccf074d63a2ce0e1e","license":"MIT","urls":["bzz-raw://864a40efcffdf408044c332a5aa38ec5618ed7b4eecb8f65faf45671bd6cdc65","dweb:/ipfs/QmQJquTMtc6fgm5JQzGdsGpA2fqBe3MHWEdt2qzaLySMdN"]},"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xe0c8b625a79bac0fe80f17cfb521e072805cc9cef1c96a5caf45b264e74812fa","license":"MIT","urls":["bzz-raw://12fd1efc9ad061ef675bd50fb0c8e3c6f2952a09f8df0e3c688b8d81b8918838","dweb:/ipfs/QmawN6PjTwy91pU7ANjCSgbsLc8TDA6hwu9GsFFaNSuhb5"]},"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b","license":"MIT","urls":["bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34","dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr"]},"openzeppelin-solidity/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"openzeppelin-solidity/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"project:/contracts/PulseInu.sol":{"keccak256":"0x88715c3d82529078871379a3461f623fae6384145a6ff8c7d48fff99d00884c9","urls":["bzz-raw://e6f797819e28dd998995b85d61bcdbe68819109b80f409cb52968a55cc1d178d","dweb:/ipfs/QmYAHYiX3R6g7dAZWPQwdLDHqD8tL7vpvk2ogHM5qZHYEC"]}},"version":1}',
  bytecode:
    "0x60a06040527307922ea567f31ce10bfe49e8809b12f86f7cec9c600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060200160405280738a810ea8b121d08342e9e7696f4a9915cbe494b773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152506009906001620000ba929190620001b3565b50348015620000c857600080fd5b506040518060400160405280600881526020017f50756c7365496e750000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f50494e55000000000000000000000000000000000000000000000000000000008152508160039081620001469190620004ce565b508060049081620001589190620004ce565b50505042600681905550610e10620001756200018e60201b60201c565b620001819190620005e4565b6080818152505062000709565b6000620151808042620001a2919062000670565b620001ae9190620006a8565b905090565b826001810192821562000222579160200282015b82811115620002215782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190620001c7565b5b50905062000231919062000235565b5090565b5b808211156200025057600081600090555060010162000236565b5090565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002d657607f821691505b602082108103620002ec57620002eb6200028e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003567fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000317565b62000362868362000317565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003af620003a9620003a3846200037a565b62000384565b6200037a565b9050919050565b6000819050919050565b620003cb836200038e565b620003e3620003da82620003b6565b84845462000324565b825550505050565b600090565b620003fa620003eb565b62000407818484620003c0565b505050565b5b818110156200042f5762000423600082620003f0565b6001810190506200040d565b5050565b601f8211156200047e576200044881620002f2565b620004538462000307565b8101602085101562000463578190505b6200047b620004728562000307565b8301826200040c565b50505b505050565b600082821c905092915050565b6000620004a36000198460080262000483565b1980831691505092915050565b6000620004be838362000490565b9150826002028217905092915050565b620004d98262000254565b67ffffffffffffffff811115620004f557620004f46200025f565b5b620005018254620002bd565b6200050e82828562000433565b600060209050601f83116001811462000546576000841562000531578287015190505b6200053d8582620004b0565b865550620005ad565b601f1984166200055686620002f2565b60005b82811015620005805784890151825560018201915060208501945060208101905062000559565b86831015620005a057848901516200059c601f89168262000490565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005f1826200037a565b9150620005fe836200037a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006365762000635620005b5565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006200067d826200037a565b91506200068a836200037a565b9250826200069d576200069c62000641565b5b828204905092915050565b6000620006b5826200037a565b9150620006c2836200037a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620006fe57620006fd620005b5565b5b828202905092915050565b6080516123b562000722600039600050506123b56000f3fe60806040526004361061012a5760003560e01c8063466c35fc116100ab57806395d89b411161006f57806395d89b4114610423578063a457c2d71461044e578063a9059cbb1461048b578063d7aada81146104c8578063dd62ed3e146104f1578063ee9933751461052e5761012a565b8063466c35fc146103285780635c9302c91461035357806370a082311461037e57806373b2e80e146103bb578063790ca413146103f85761012a565b806318160ddd116100f257806318160ddd1461021b57806323b872dd146102465780632b34af7014610283578063313ce567146102c057806339509351146102eb5761012a565b806306fdde031461012f578063095ea7b31461015a5780630ac1c60a146101975780631249c58b146101d45780631456d8aa146101de575b600080fd5b34801561013b57600080fd5b50610144610559565b6040516101519190611531565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c91906115fb565b6105eb565b60405161018e9190611656565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190611671565b61060e565b6040516101cb91906116ad565b60405180910390f35b6101dc610644565b005b3480156101ea57600080fd5b5061020560048036038101906102009190611846565b6106eb565b6040516102129190611656565b60405180910390f35b34801561022757600080fd5b506102306106ff565b60405161023d91906118b1565b60405180910390f35b34801561025257600080fd5b5061026d600480360381019061026891906118cc565b610709565b60405161027a9190611656565b60405180910390f35b34801561028f57600080fd5b506102aa60048036038101906102a5919061191f565b610738565b6040516102b79190611656565b60405180910390f35b3480156102cc57600080fd5b506102d56107d9565b6040516102e29190611968565b60405180910390f35b3480156102f757600080fd5b50610312600480360381019061030d91906115fb565b6107e2565b60405161031f9190611656565b60405180910390f35b34801561033457600080fd5b5061033d610819565b60405161034a91906116ad565b60405180910390f35b34801561035f57600080fd5b5061036861083f565b60405161037591906118b1565b60405180910390f35b34801561038a57600080fd5b506103a560048036038101906103a0919061191f565b61084e565b6040516103b291906118b1565b60405180910390f35b3480156103c757600080fd5b506103e260048036038101906103dd919061191f565b610896565b6040516103ef9190611656565b60405180910390f35b34801561040457600080fd5b5061040d6108b6565b60405161041a91906118b1565b60405180910390f35b34801561042f57600080fd5b506104386108c0565b6040516104459190611531565b60405180910390f35b34801561045a57600080fd5b50610475600480360381019061047091906115fb565b610952565b6040516104829190611656565b60405180910390f35b34801561049757600080fd5b506104b260048036038101906104ad91906115fb565b6109c9565b6040516104bf9190611656565b60405180910390f35b3480156104d457600080fd5b506104ef60048036038101906104ea91906119de565b6109ec565b005b3480156104fd57600080fd5b5061051860048036038101906105139190611a3e565b610bd0565b60405161052591906118b1565b60405180910390f35b34801561053a57600080fd5b50610543610c57565b60405161055091906118b1565b60405180910390f35b60606003805461056890611aad565b80601f016020809104026020016040519081016040528092919081815260200182805461059490611aad565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905090565b6000806105f6610c61565b9050610603818585610c69565b600191505092915050565b6009816001811061061e57600080fd5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000670de0b6b3a76400003461065a9190611b0d565b90506000678ac7230489e80000826106729190611b0d565b905061067e3382610e32565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156106e6573d6000803e3d6000fd5b505050565b60006106f78383610f91565b905092915050565b6000600254905090565b600080610714610c61565b9050610721858285611061565b61072c8585856110ed565b60019150509392505050565b600080600090505b60018110156107ce578273ffffffffffffffffffffffffffffffffffffffff166009826001811061077457610773611b67565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036107bb5760019150506107d4565b80806107c690611b96565b915050610740565b50600090505b919050565b6000600c905090565b6000806107ed610c61565b905061080e8185856107ff8589610bd0565b6108099190611bde565b610c69565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061084961136c565b905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600a6020528060005260406000206000915054906101000a900460ff1681565b6000600654905090565b6060600480546108cf90611aad565b80601f01602080910402602001604051908101604052809291908181526020018280546108fb90611aad565b80156109485780601f1061091d57610100808354040283529160200191610948565b820191906000526020600020905b81548152906001019060200180831161092b57829003601f168201915b5050505050905090565b60008061095d610c61565b9050600061096b8286610bd0565b9050838110156109b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a790611ca6565b60405180910390fd5b6109bd8286868403610c69565b60019250505092915050565b6000806109d4610c61565b90506109e18185856110ed565b600191505092915050565b60646109f661136c565b1115610a37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2e90611d12565b60405180910390fd5b600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abb90611d7e565b60405180910390fd5b610b0f83838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050610f91565b610b4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4590611dea565b60405180910390fd5b610b64600160075461139d90919063ffffffff16565b600781905550610b7b33662386f26fc10000610e32565b3373ffffffffffffffffffffffffffffffffffffffff167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d46103e8604051610bc39190611e4f565b60405180910390a2505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600754905090565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf90611edc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3e90611f6e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e2591906118b1565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ea1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9890611fda565b60405180910390fd5b610ead600083836113b3565b8060026000828254610ebf9190611bde565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f149190611bde565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f7991906118b1565b60405180910390a3610f8d600083836113b8565b5050565b60008083604051602001610fa59190612042565b604051602081830303815290604052805190602001209050610feb837fabe2dbc5c997b27447881309f82a7a0fcb9a1a2cbbe327f75db373dd0e9457b360001b836113bd565b61102a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611021906120a9565b60405180910390fd5b611058837fabe2dbc5c997b27447881309f82a7a0fcb9a1a2cbbe327f75db373dd0e9457b360001b836113bd565b91505092915050565b600061106d8484610bd0565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110e757818110156110d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d090612115565b60405180910390fd5b6110e68484848403610c69565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361115c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611153906121a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c290612239565b60405180910390fd5b6111d68383836113b3565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561125c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611253906122cb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112ef9190611bde565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161135391906118b1565b60405180910390a36113668484846113b8565b50505050565b60006113986201518061138a600654426113d490919063ffffffff16565b6113ea90919063ffffffff16565b905090565b600081836113ab9190611bde565b905092915050565b505050565b505050565b6000826113ca8584611400565b1490509392505050565b600081836113e291906122eb565b905092915050565b600081836113f8919061234e565b905092915050565b60008082905060005b845181101561144b576114368286838151811061142957611428611b67565b5b6020026020010151611456565b9150808061144390611b96565b915050611409565b508091505092915050565b600081831061146e576114698284611481565b611479565b6114788383611481565b5b905092915050565b600082600052816020526040600020905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114d25780820151818401526020810190506114b7565b838111156114e1576000848401525b50505050565b6000601f19601f8301169050919050565b600061150382611498565b61150d81856114a3565b935061151d8185602086016114b4565b611526816114e7565b840191505092915050565b6000602082019050818103600083015261154b81846114f8565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061159282611567565b9050919050565b6115a281611587565b81146115ad57600080fd5b50565b6000813590506115bf81611599565b92915050565b6000819050919050565b6115d8816115c5565b81146115e357600080fd5b50565b6000813590506115f5816115cf565b92915050565b600080604083850312156116125761161161155d565b5b6000611620858286016115b0565b9250506020611631858286016115e6565b9150509250929050565b60008115159050919050565b6116508161163b565b82525050565b600060208201905061166b6000830184611647565b92915050565b6000602082840312156116875761168661155d565b5b6000611695848285016115e6565b91505092915050565b6116a781611587565b82525050565b60006020820190506116c2600083018461169e565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611705826114e7565b810181811067ffffffffffffffff82111715611724576117236116cd565b5b80604052505050565b6000611737611553565b905061174382826116fc565b919050565b600067ffffffffffffffff821115611763576117626116cd565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b61178c81611779565b811461179757600080fd5b50565b6000813590506117a981611783565b92915050565b60006117c26117bd84611748565b61172d565b905080838252602082019050602084028301858111156117e5576117e4611774565b5b835b8181101561180e57806117fa888261179a565b8452602084019350506020810190506117e7565b5050509392505050565b600082601f83011261182d5761182c6116c8565b5b813561183d8482602086016117af565b91505092915050565b6000806040838503121561185d5761185c61155d565b5b600061186b858286016115b0565b925050602083013567ffffffffffffffff81111561188c5761188b611562565b5b61189885828601611818565b9150509250929050565b6118ab816115c5565b82525050565b60006020820190506118c660008301846118a2565b92915050565b6000806000606084860312156118e5576118e461155d565b5b60006118f3868287016115b0565b9350506020611904868287016115b0565b9250506040611915868287016115e6565b9150509250925092565b6000602082840312156119355761193461155d565b5b6000611943848285016115b0565b91505092915050565b600060ff82169050919050565b6119628161194c565b82525050565b600060208201905061197d6000830184611959565b92915050565b600080fd5b60008083601f84011261199e5761199d6116c8565b5b8235905067ffffffffffffffff8111156119bb576119ba611983565b5b6020830191508360208202830111156119d7576119d6611774565b5b9250929050565b6000806000604084860312156119f7576119f661155d565b5b6000611a05868287016115b0565b935050602084013567ffffffffffffffff811115611a2657611a25611562565b5b611a3286828701611988565b92509250509250925092565b60008060408385031215611a5557611a5461155d565b5b6000611a63858286016115b0565b9250506020611a74858286016115b0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ac557607f821691505b602082108103611ad857611ad7611a7e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b18826115c5565b9150611b23836115c5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b5c57611b5b611ade565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611ba1826115c5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611bd357611bd2611ade565b5b600182019050919050565b6000611be9826115c5565b9150611bf4836115c5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c2957611c28611ade565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611c906025836114a3565b9150611c9b82611c34565b604082019050919050565b60006020820190508181036000830152611cbf81611c83565b9050919050565b7f436c61696d2070686173652068617320656e6465642e00000000000000000000600082015250565b6000611cfc6016836114a3565b9150611d0782611cc6565b602082019050919050565b60006020820190508181036000830152611d2b81611cef565b9050919050565b7f416464726573732068617320616c726561647920636c61696d65642e00000000600082015250565b6000611d68601c836114a3565b9150611d7382611d32565b602082019050919050565b60006020820190508181036000830152611d9781611d5b565b9050919050565b7f4865782041646472657373206973204e6f7420436c61696d61626c6500000000600082015250565b6000611dd4601c836114a3565b9150611ddf82611d9e565b602082019050919050565b60006020820190508181036000830152611e0381611dc7565b9050919050565b6000819050919050565b6000819050919050565b6000611e39611e34611e2f84611e0a565b611e14565b6115c5565b9050919050565b611e4981611e1e565b82525050565b6000602082019050611e646000830184611e40565b92915050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611ec66024836114a3565b9150611ed182611e6a565b604082019050919050565b60006020820190508181036000830152611ef581611eb9565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f586022836114a3565b9150611f6382611efc565b604082019050919050565b60006020820190508181036000830152611f8781611f4b565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611fc4601f836114a3565b9150611fcf82611f8e565b602082019050919050565b60006020820190508181036000830152611ff381611fb7565b9050919050565b60008160601b9050919050565b600061201282611ffa565b9050919050565b600061202482612007565b9050919050565b61203c61203782611587565b612019565b82525050565b600061204e828461202b565b60148201915081905092915050565b7f496e76616c69642050726f6f6600000000000000000000000000000000000000600082015250565b6000612093600d836114a3565b915061209e8261205d565b602082019050919050565b600060208201905081810360008301526120c281612086565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006120ff601d836114a3565b915061210a826120c9565b602082019050919050565b6000602082019050818103600083015261212e816120f2565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006121916025836114a3565b915061219c82612135565b604082019050919050565b600060208201905081810360008301526121c081612184565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006122236023836114a3565b915061222e826121c7565b604082019050919050565b6000602082019050818103600083015261225281612216565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006122b56026836114a3565b91506122c082612259565b604082019050919050565b600060208201905081810360008301526122e4816122a8565b9050919050565b60006122f6826115c5565b9150612301836115c5565b92508282101561231457612313611ade565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612359826115c5565b9150612364836115c5565b9250826123745761237361231f565b5b82820490509291505056fea2646970667358221220ba990b4bd23aa40cd09c99b13eca803489b680badc225be1b319bff7ad18edc964736f6c634300080f0033",
  deployedBytecode:
    "0x60806040526004361061012a5760003560e01c8063466c35fc116100ab57806395d89b411161006f57806395d89b4114610423578063a457c2d71461044e578063a9059cbb1461048b578063d7aada81146104c8578063dd62ed3e146104f1578063ee9933751461052e5761012a565b8063466c35fc146103285780635c9302c91461035357806370a082311461037e57806373b2e80e146103bb578063790ca413146103f85761012a565b806318160ddd116100f257806318160ddd1461021b57806323b872dd146102465780632b34af7014610283578063313ce567146102c057806339509351146102eb5761012a565b806306fdde031461012f578063095ea7b31461015a5780630ac1c60a146101975780631249c58b146101d45780631456d8aa146101de575b600080fd5b34801561013b57600080fd5b50610144610559565b6040516101519190611531565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c91906115fb565b6105eb565b60405161018e9190611656565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190611671565b61060e565b6040516101cb91906116ad565b60405180910390f35b6101dc610644565b005b3480156101ea57600080fd5b5061020560048036038101906102009190611846565b6106eb565b6040516102129190611656565b60405180910390f35b34801561022757600080fd5b506102306106ff565b60405161023d91906118b1565b60405180910390f35b34801561025257600080fd5b5061026d600480360381019061026891906118cc565b610709565b60405161027a9190611656565b60405180910390f35b34801561028f57600080fd5b506102aa60048036038101906102a5919061191f565b610738565b6040516102b79190611656565b60405180910390f35b3480156102cc57600080fd5b506102d56107d9565b6040516102e29190611968565b60405180910390f35b3480156102f757600080fd5b50610312600480360381019061030d91906115fb565b6107e2565b60405161031f9190611656565b60405180910390f35b34801561033457600080fd5b5061033d610819565b60405161034a91906116ad565b60405180910390f35b34801561035f57600080fd5b5061036861083f565b60405161037591906118b1565b60405180910390f35b34801561038a57600080fd5b506103a560048036038101906103a0919061191f565b61084e565b6040516103b291906118b1565b60405180910390f35b3480156103c757600080fd5b506103e260048036038101906103dd919061191f565b610896565b6040516103ef9190611656565b60405180910390f35b34801561040457600080fd5b5061040d6108b6565b60405161041a91906118b1565b60405180910390f35b34801561042f57600080fd5b506104386108c0565b6040516104459190611531565b60405180910390f35b34801561045a57600080fd5b50610475600480360381019061047091906115fb565b610952565b6040516104829190611656565b60405180910390f35b34801561049757600080fd5b506104b260048036038101906104ad91906115fb565b6109c9565b6040516104bf9190611656565b60405180910390f35b3480156104d457600080fd5b506104ef60048036038101906104ea91906119de565b6109ec565b005b3480156104fd57600080fd5b5061051860048036038101906105139190611a3e565b610bd0565b60405161052591906118b1565b60405180910390f35b34801561053a57600080fd5b50610543610c57565b60405161055091906118b1565b60405180910390f35b60606003805461056890611aad565b80601f016020809104026020016040519081016040528092919081815260200182805461059490611aad565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905090565b6000806105f6610c61565b9050610603818585610c69565b600191505092915050565b6009816001811061061e57600080fd5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000670de0b6b3a76400003461065a9190611b0d565b90506000678ac7230489e80000826106729190611b0d565b905061067e3382610e32565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156106e6573d6000803e3d6000fd5b505050565b60006106f78383610f91565b905092915050565b6000600254905090565b600080610714610c61565b9050610721858285611061565b61072c8585856110ed565b60019150509392505050565b600080600090505b60018110156107ce578273ffffffffffffffffffffffffffffffffffffffff166009826001811061077457610773611b67565b5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036107bb5760019150506107d4565b80806107c690611b96565b915050610740565b50600090505b919050565b6000600c905090565b6000806107ed610c61565b905061080e8185856107ff8589610bd0565b6108099190611bde565b610c69565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061084961136c565b905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600a6020528060005260406000206000915054906101000a900460ff1681565b6000600654905090565b6060600480546108cf90611aad565b80601f01602080910402602001604051908101604052809291908181526020018280546108fb90611aad565b80156109485780601f1061091d57610100808354040283529160200191610948565b820191906000526020600020905b81548152906001019060200180831161092b57829003601f168201915b5050505050905090565b60008061095d610c61565b9050600061096b8286610bd0565b9050838110156109b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a790611ca6565b60405180910390fd5b6109bd8286868403610c69565b60019250505092915050565b6000806109d4610c61565b90506109e18185856110ed565b600191505092915050565b60646109f661136c565b1115610a37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2e90611d12565b60405180910390fd5b600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abb90611d7e565b60405180910390fd5b610b0f83838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050610f91565b610b4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4590611dea565b60405180910390fd5b610b64600160075461139d90919063ffffffff16565b600781905550610b7b33662386f26fc10000610e32565b3373ffffffffffffffffffffffffffffffffffffffff167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d46103e8604051610bc39190611e4f565b60405180910390a2505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600754905090565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf90611edc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3e90611f6e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e2591906118b1565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ea1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9890611fda565b60405180910390fd5b610ead600083836113b3565b8060026000828254610ebf9190611bde565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f149190611bde565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f7991906118b1565b60405180910390a3610f8d600083836113b8565b5050565b60008083604051602001610fa59190612042565b604051602081830303815290604052805190602001209050610feb837fabe2dbc5c997b27447881309f82a7a0fcb9a1a2cbbe327f75db373dd0e9457b360001b836113bd565b61102a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611021906120a9565b60405180910390fd5b611058837fabe2dbc5c997b27447881309f82a7a0fcb9a1a2cbbe327f75db373dd0e9457b360001b836113bd565b91505092915050565b600061106d8484610bd0565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110e757818110156110d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d090612115565b60405180910390fd5b6110e68484848403610c69565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361115c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611153906121a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c290612239565b60405180910390fd5b6111d68383836113b3565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561125c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611253906122cb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112ef9190611bde565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161135391906118b1565b60405180910390a36113668484846113b8565b50505050565b60006113986201518061138a600654426113d490919063ffffffff16565b6113ea90919063ffffffff16565b905090565b600081836113ab9190611bde565b905092915050565b505050565b505050565b6000826113ca8584611400565b1490509392505050565b600081836113e291906122eb565b905092915050565b600081836113f8919061234e565b905092915050565b60008082905060005b845181101561144b576114368286838151811061142957611428611b67565b5b6020026020010151611456565b9150808061144390611b96565b915050611409565b508091505092915050565b600081831061146e576114698284611481565b611479565b6114788383611481565b5b905092915050565b600082600052816020526040600020905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114d25780820151818401526020810190506114b7565b838111156114e1576000848401525b50505050565b6000601f19601f8301169050919050565b600061150382611498565b61150d81856114a3565b935061151d8185602086016114b4565b611526816114e7565b840191505092915050565b6000602082019050818103600083015261154b81846114f8565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061159282611567565b9050919050565b6115a281611587565b81146115ad57600080fd5b50565b6000813590506115bf81611599565b92915050565b6000819050919050565b6115d8816115c5565b81146115e357600080fd5b50565b6000813590506115f5816115cf565b92915050565b600080604083850312156116125761161161155d565b5b6000611620858286016115b0565b9250506020611631858286016115e6565b9150509250929050565b60008115159050919050565b6116508161163b565b82525050565b600060208201905061166b6000830184611647565b92915050565b6000602082840312156116875761168661155d565b5b6000611695848285016115e6565b91505092915050565b6116a781611587565b82525050565b60006020820190506116c2600083018461169e565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611705826114e7565b810181811067ffffffffffffffff82111715611724576117236116cd565b5b80604052505050565b6000611737611553565b905061174382826116fc565b919050565b600067ffffffffffffffff821115611763576117626116cd565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b61178c81611779565b811461179757600080fd5b50565b6000813590506117a981611783565b92915050565b60006117c26117bd84611748565b61172d565b905080838252602082019050602084028301858111156117e5576117e4611774565b5b835b8181101561180e57806117fa888261179a565b8452602084019350506020810190506117e7565b5050509392505050565b600082601f83011261182d5761182c6116c8565b5b813561183d8482602086016117af565b91505092915050565b6000806040838503121561185d5761185c61155d565b5b600061186b858286016115b0565b925050602083013567ffffffffffffffff81111561188c5761188b611562565b5b61189885828601611818565b9150509250929050565b6118ab816115c5565b82525050565b60006020820190506118c660008301846118a2565b92915050565b6000806000606084860312156118e5576118e461155d565b5b60006118f3868287016115b0565b9350506020611904868287016115b0565b9250506040611915868287016115e6565b9150509250925092565b6000602082840312156119355761193461155d565b5b6000611943848285016115b0565b91505092915050565b600060ff82169050919050565b6119628161194c565b82525050565b600060208201905061197d6000830184611959565b92915050565b600080fd5b60008083601f84011261199e5761199d6116c8565b5b8235905067ffffffffffffffff8111156119bb576119ba611983565b5b6020830191508360208202830111156119d7576119d6611774565b5b9250929050565b6000806000604084860312156119f7576119f661155d565b5b6000611a05868287016115b0565b935050602084013567ffffffffffffffff811115611a2657611a25611562565b5b611a3286828701611988565b92509250509250925092565b60008060408385031215611a5557611a5461155d565b5b6000611a63858286016115b0565b9250506020611a74858286016115b0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611ac557607f821691505b602082108103611ad857611ad7611a7e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b18826115c5565b9150611b23836115c5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b5c57611b5b611ade565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611ba1826115c5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611bd357611bd2611ade565b5b600182019050919050565b6000611be9826115c5565b9150611bf4836115c5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c2957611c28611ade565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611c906025836114a3565b9150611c9b82611c34565b604082019050919050565b60006020820190508181036000830152611cbf81611c83565b9050919050565b7f436c61696d2070686173652068617320656e6465642e00000000000000000000600082015250565b6000611cfc6016836114a3565b9150611d0782611cc6565b602082019050919050565b60006020820190508181036000830152611d2b81611cef565b9050919050565b7f416464726573732068617320616c726561647920636c61696d65642e00000000600082015250565b6000611d68601c836114a3565b9150611d7382611d32565b602082019050919050565b60006020820190508181036000830152611d9781611d5b565b9050919050565b7f4865782041646472657373206973204e6f7420436c61696d61626c6500000000600082015250565b6000611dd4601c836114a3565b9150611ddf82611d9e565b602082019050919050565b60006020820190508181036000830152611e0381611dc7565b9050919050565b6000819050919050565b6000819050919050565b6000611e39611e34611e2f84611e0a565b611e14565b6115c5565b9050919050565b611e4981611e1e565b82525050565b6000602082019050611e646000830184611e40565b92915050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611ec66024836114a3565b9150611ed182611e6a565b604082019050919050565b60006020820190508181036000830152611ef581611eb9565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f586022836114a3565b9150611f6382611efc565b604082019050919050565b60006020820190508181036000830152611f8781611f4b565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611fc4601f836114a3565b9150611fcf82611f8e565b602082019050919050565b60006020820190508181036000830152611ff381611fb7565b9050919050565b60008160601b9050919050565b600061201282611ffa565b9050919050565b600061202482612007565b9050919050565b61203c61203782611587565b612019565b82525050565b600061204e828461202b565b60148201915081905092915050565b7f496e76616c69642050726f6f6600000000000000000000000000000000000000600082015250565b6000612093600d836114a3565b915061209e8261205d565b602082019050919050565b600060208201905081810360008301526120c281612086565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006120ff601d836114a3565b915061210a826120c9565b602082019050919050565b6000602082019050818103600083015261212e816120f2565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006121916025836114a3565b915061219c82612135565b604082019050919050565b600060208201905081810360008301526121c081612184565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006122236023836114a3565b915061222e826121c7565b604082019050919050565b6000602082019050818103600083015261225281612216565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006122b56026836114a3565b91506122c082612259565b604082019050919050565b600060208201905081810360008301526122e4816122a8565b9050919050565b60006122f6826115c5565b9150612301836115c5565b92508282101561231457612313611ade565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612359826115c5565b9150612364836115c5565b9250826123745761237361231f565b5b82820490509291505056fea2646970667358221220ba990b4bd23aa40cd09c99b13eca803489b680badc225be1b319bff7ad18edc964736f6c634300080f0033",
  immutableReferences: {},
  generatedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:6459:7",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "66:40:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "77:22:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "93:5:7",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "87:5:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "87:12:7",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "77:6:7",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "49:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "59:6:7",
                type: "",
              },
            ],
            src: "7:99:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "140:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "157:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "160:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "150:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "150:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "150:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "254:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "257:4:7",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "247:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "247:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "247:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "278:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "281:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "271:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "271:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "271:15:7",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "112:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "326:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "343:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "346:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "336:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "336:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "336:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "440:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "443:4:7",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "433:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "433:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "433:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "464:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "467:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "457:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "457:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "457:15:7",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "298:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "535:269:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "545:22:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "559:4:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "565:1:7",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "555:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "555:12:7",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "545:6:7",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "576:38:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "606:4:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "612:1:7",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "602:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "602:12:7",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "580:18:7",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "653:51:7",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "667:27:7",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "681:6:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "689:4:7",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "677:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "677:17:7",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "667:6:7",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "633:18:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "626:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "626:26:7",
                  },
                  nodeType: "YulIf",
                  src: "623:81:7",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "756:42:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "770:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "770:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "770:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "720:18:7",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "743:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "751:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "740:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "740:14:7",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "717:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "717:38:7",
                  },
                  nodeType: "YulIf",
                  src: "714:84:7",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "519:4:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "528:6:7",
                type: "",
              },
            ],
            src: "484:320:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "864:87:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "874:11:7",
                  value: {
                    name: "ptr",
                    nodeType: "YulIdentifier",
                    src: "882:3:7",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "874:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "902:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "905:3:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "895:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "895:14:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "895:14:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "918:26:7",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "936:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "939:4:7",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "keccak256",
                      nodeType: "YulIdentifier",
                      src: "926:9:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "926:18:7",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "918:4:7",
                    },
                  ],
                },
              ],
            },
            name: "array_dataslot_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "851:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "859:4:7",
                type: "",
              },
            ],
            src: "810:141:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1001:49:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1011:33:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1029:5:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1036:2:7",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1025:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1025:14:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1041:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "1021:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1021:23:7",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "1011:6:7",
                    },
                  ],
                },
              ],
            },
            name: "divide_by_32_ceil",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "984:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "994:6:7",
                type: "",
              },
            ],
            src: "957:93:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1109:54:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1119:37:7",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "1144:4:7",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1150:5:7",
                      },
                    ],
                    functionName: {
                      name: "shl",
                      nodeType: "YulIdentifier",
                      src: "1140:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1140:16:7",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "1119:8:7",
                    },
                  ],
                },
              ],
            },
            name: "shift_left_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "1084:4:7",
                type: "",
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1090:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "1100:8:7",
                type: "",
              },
            ],
            src: "1056:107:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1245:317:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1255:35:7",
                  value: {
                    arguments: [
                      {
                        name: "shiftBytes",
                        nodeType: "YulIdentifier",
                        src: "1276:10:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1288:1:7",
                        type: "",
                        value: "8",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "1272:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1272:18:7",
                  },
                  variables: [
                    {
                      name: "shiftBits",
                      nodeType: "YulTypedName",
                      src: "1259:9:7",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1299:109:7",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "1330:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1341:66:7",
                        type: "",
                        value:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "1311:18:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1311:97:7",
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "1303:4:7",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1417:51:7",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "1448:9:7",
                      },
                      {
                        name: "toInsert",
                        nodeType: "YulIdentifier",
                        src: "1459:8:7",
                      },
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "1429:18:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1429:39:7",
                  },
                  variableNames: [
                    {
                      name: "toInsert",
                      nodeType: "YulIdentifier",
                      src: "1417:8:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1477:30:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1490:5:7",
                      },
                      {
                        arguments: [
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "1501:4:7",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "1497:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1497:9:7",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "1486:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1486:21:7",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1477:5:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1516:40:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1529:5:7",
                      },
                      {
                        arguments: [
                          {
                            name: "toInsert",
                            nodeType: "YulIdentifier",
                            src: "1540:8:7",
                          },
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "1550:4:7",
                          },
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "1536:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1536:19:7",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "1526:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1526:30:7",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "1516:6:7",
                    },
                  ],
                },
              ],
            },
            name: "update_byte_slice_dynamic32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1206:5:7",
                type: "",
              },
              {
                name: "shiftBytes",
                nodeType: "YulTypedName",
                src: "1213:10:7",
                type: "",
              },
              {
                name: "toInsert",
                nodeType: "YulTypedName",
                src: "1225:8:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "1238:6:7",
                type: "",
              },
            ],
            src: "1169:393:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1613:32:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1623:16:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1634:5:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1623:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1595:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1605:7:7",
                type: "",
              },
            ],
            src: "1568:77:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1683:28:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1693:12:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1700:5:7",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "1693:3:7",
                    },
                  ],
                },
              ],
            },
            name: "identity",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1669:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "1679:3:7",
                type: "",
              },
            ],
            src: "1651:60:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1777:82:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1787:66:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "1845:5:7",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "1827:17:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1827:24:7",
                          },
                        ],
                        functionName: {
                          name: "identity",
                          nodeType: "YulIdentifier",
                          src: "1818:8:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1818:34:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "1800:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1800:53:7",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "1787:9:7",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1757:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "1767:9:7",
                type: "",
              },
            ],
            src: "1717:142:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1912:28:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1922:12:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1929:5:7",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "1922:3:7",
                    },
                  ],
                },
              ],
            },
            name: "prepare_store_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1898:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "1908:3:7",
                type: "",
              },
            ],
            src: "1865:75:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2022:193:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2032:63:7",
                  value: {
                    arguments: [
                      {
                        name: "value_0",
                        nodeType: "YulIdentifier",
                        src: "2087:7:7",
                      },
                    ],
                    functionName: {
                      name: "convert_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2056:30:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2056:39:7",
                  },
                  variables: [
                    {
                      name: "convertedValue_0",
                      nodeType: "YulTypedName",
                      src: "2036:16:7",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "2111:4:7",
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "slot",
                                nodeType: "YulIdentifier",
                                src: "2151:4:7",
                              },
                            ],
                            functionName: {
                              name: "sload",
                              nodeType: "YulIdentifier",
                              src: "2145:5:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2145:11:7",
                          },
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "2158:6:7",
                          },
                          {
                            arguments: [
                              {
                                name: "convertedValue_0",
                                nodeType: "YulIdentifier",
                                src: "2190:16:7",
                              },
                            ],
                            functionName: {
                              name: "prepare_store_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2166:23:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2166:41:7",
                          },
                        ],
                        functionName: {
                          name: "update_byte_slice_dynamic32",
                          nodeType: "YulIdentifier",
                          src: "2117:27:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2117:91:7",
                      },
                    ],
                    functionName: {
                      name: "sstore",
                      nodeType: "YulIdentifier",
                      src: "2104:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2104:105:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2104:105:7",
                },
              ],
            },
            name: "update_storage_value_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "1999:4:7",
                type: "",
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2005:6:7",
                type: "",
              },
              {
                name: "value_0",
                nodeType: "YulTypedName",
                src: "2013:7:7",
                type: "",
              },
            ],
            src: "1946:269:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2270:24:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2280:8:7",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "2287:1:7",
                    type: "",
                    value: "0",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "2280:3:7",
                    },
                  ],
                },
              ],
            },
            name: "zero_value_for_split_t_uint256",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "2266:3:7",
                type: "",
              },
            ],
            src: "2221:73:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2353:136:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2363:46:7",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "zero_value_for_split_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2377:30:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2377:32:7",
                  },
                  variables: [
                    {
                      name: "zero_0",
                      nodeType: "YulTypedName",
                      src: "2367:6:7",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "2462:4:7",
                      },
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2468:6:7",
                      },
                      {
                        name: "zero_0",
                        nodeType: "YulIdentifier",
                        src: "2476:6:7",
                      },
                    ],
                    functionName: {
                      name: "update_storage_value_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2418:43:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2418:65:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2418:65:7",
                },
              ],
            },
            name: "storage_set_to_zero_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "2339:4:7",
                type: "",
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2345:6:7",
                type: "",
              },
            ],
            src: "2300:189:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2545:136:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2612:63:7",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2656:5:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2663:1:7",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "storage_set_to_zero_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2626:29:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2626:39:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2626:39:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "start",
                        nodeType: "YulIdentifier",
                        src: "2565:5:7",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "2572:3:7",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "2562:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2562:14:7",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "2577:26:7",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "2579:22:7",
                        value: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2592:5:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2599:1:7",
                              type: "",
                              value: "1",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2588:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2588:13:7",
                        },
                        variableNames: [
                          {
                            name: "start",
                            nodeType: "YulIdentifier",
                            src: "2579:5:7",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "2559:2:7",
                    statements: [],
                  },
                  src: "2555:120:7",
                },
              ],
            },
            name: "clear_storage_range_t_bytes1",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "start",
                nodeType: "YulTypedName",
                src: "2533:5:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2540:3:7",
                type: "",
              },
            ],
            src: "2495:186:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2766:464:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2792:431:7",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2806:54:7",
                        value: {
                          arguments: [
                            {
                              name: "array",
                              nodeType: "YulIdentifier",
                              src: "2854:5:7",
                            },
                          ],
                          functionName: {
                            name: "array_dataslot_t_string_storage",
                            nodeType: "YulIdentifier",
                            src: "2822:31:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2822:38:7",
                        },
                        variables: [
                          {
                            name: "dataArea",
                            nodeType: "YulTypedName",
                            src: "2810:8:7",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2873:63:7",
                        value: {
                          arguments: [
                            {
                              name: "dataArea",
                              nodeType: "YulIdentifier",
                              src: "2896:8:7",
                            },
                            {
                              arguments: [
                                {
                                  name: "startIndex",
                                  nodeType: "YulIdentifier",
                                  src: "2924:10:7",
                                },
                              ],
                              functionName: {
                                name: "divide_by_32_ceil",
                                nodeType: "YulIdentifier",
                                src: "2906:17:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2906:29:7",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2892:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2892:44:7",
                        },
                        variables: [
                          {
                            name: "deleteStart",
                            nodeType: "YulTypedName",
                            src: "2877:11:7",
                            type: "",
                          },
                        ],
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "3093:27:7",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "3095:23:7",
                              value: {
                                name: "dataArea",
                                nodeType: "YulIdentifier",
                                src: "3110:8:7",
                              },
                              variableNames: [
                                {
                                  name: "deleteStart",
                                  nodeType: "YulIdentifier",
                                  src: "3095:11:7",
                                },
                              ],
                            },
                          ],
                        },
                        condition: {
                          arguments: [
                            {
                              name: "startIndex",
                              nodeType: "YulIdentifier",
                              src: "3077:10:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3089:2:7",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "3074:2:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3074:18:7",
                        },
                        nodeType: "YulIf",
                        src: "3071:49:7",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "deleteStart",
                              nodeType: "YulIdentifier",
                              src: "3162:11:7",
                            },
                            {
                              arguments: [
                                {
                                  name: "dataArea",
                                  nodeType: "YulIdentifier",
                                  src: "3179:8:7",
                                },
                                {
                                  arguments: [
                                    {
                                      name: "len",
                                      nodeType: "YulIdentifier",
                                      src: "3207:3:7",
                                    },
                                  ],
                                  functionName: {
                                    name: "divide_by_32_ceil",
                                    nodeType: "YulIdentifier",
                                    src: "3189:17:7",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3189:22:7",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3175:3:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3175:37:7",
                            },
                          ],
                          functionName: {
                            name: "clear_storage_range_t_bytes1",
                            nodeType: "YulIdentifier",
                            src: "3133:28:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3133:80:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3133:80:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "2783:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2788:2:7",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2780:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2780:11:7",
                  },
                  nodeType: "YulIf",
                  src: "2777:446:7",
                },
              ],
            },
            name: "clean_up_bytearray_end_slots_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "2742:5:7",
                type: "",
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "2749:3:7",
                type: "",
              },
              {
                name: "startIndex",
                nodeType: "YulTypedName",
                src: "2754:10:7",
                type: "",
              },
            ],
            src: "2687:543:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3299:54:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3309:37:7",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "3334:4:7",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3340:5:7",
                      },
                    ],
                    functionName: {
                      name: "shr",
                      nodeType: "YulIdentifier",
                      src: "3330:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3330:16:7",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "3309:8:7",
                    },
                  ],
                },
              ],
            },
            name: "shift_right_unsigned_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "3274:4:7",
                type: "",
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3280:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "3290:8:7",
                type: "",
              },
            ],
            src: "3236:117:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3410:118:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3420:68:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3469:1:7",
                                type: "",
                                value: "8",
                              },
                              {
                                name: "bytes",
                                nodeType: "YulIdentifier",
                                src: "3472:5:7",
                              },
                            ],
                            functionName: {
                              name: "mul",
                              nodeType: "YulIdentifier",
                              src: "3465:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3465:13:7",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3484:1:7",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "not",
                              nodeType: "YulIdentifier",
                              src: "3480:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3480:6:7",
                          },
                        ],
                        functionName: {
                          name: "shift_right_unsigned_dynamic",
                          nodeType: "YulIdentifier",
                          src: "3436:28:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3436:51:7",
                      },
                    ],
                    functionName: {
                      name: "not",
                      nodeType: "YulIdentifier",
                      src: "3432:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3432:56:7",
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "3424:4:7",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3497:25:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3511:4:7",
                      },
                      {
                        name: "mask",
                        nodeType: "YulIdentifier",
                        src: "3517:4:7",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "3507:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3507:15:7",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "3497:6:7",
                    },
                  ],
                },
              ],
            },
            name: "mask_bytes_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "3387:4:7",
                type: "",
              },
              {
                name: "bytes",
                nodeType: "YulTypedName",
                src: "3393:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "3403:6:7",
                type: "",
              },
            ],
            src: "3359:169:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3614:214:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3747:37:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3774:4:7",
                      },
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "3780:3:7",
                      },
                    ],
                    functionName: {
                      name: "mask_bytes_dynamic",
                      nodeType: "YulIdentifier",
                      src: "3755:18:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3755:29:7",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "3747:4:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3793:29:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3804:4:7",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3814:1:7",
                            type: "",
                            value: "2",
                          },
                          {
                            name: "len",
                            nodeType: "YulIdentifier",
                            src: "3817:3:7",
                          },
                        ],
                        functionName: {
                          name: "mul",
                          nodeType: "YulIdentifier",
                          src: "3810:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3810:11:7",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "3801:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3801:21:7",
                  },
                  variableNames: [
                    {
                      name: "used",
                      nodeType: "YulIdentifier",
                      src: "3793:4:7",
                    },
                  ],
                },
              ],
            },
            name: "extract_used_part_and_set_length_of_short_byte_array",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "3595:4:7",
                type: "",
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "3601:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "used",
                nodeType: "YulTypedName",
                src: "3609:4:7",
                type: "",
              },
            ],
            src: "3533:295:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3925:1303:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3936:51:7",
                  value: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "3983:3:7",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "3950:32:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3950:37:7",
                  },
                  variables: [
                    {
                      name: "newLen",
                      nodeType: "YulTypedName",
                      src: "3940:6:7",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4072:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4074:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4074:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4074:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "4044:6:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4052:18:7",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4041:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4041:30:7",
                  },
                  nodeType: "YulIf",
                  src: "4038:56:7",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4104:52:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "slot",
                            nodeType: "YulIdentifier",
                            src: "4150:4:7",
                          },
                        ],
                        functionName: {
                          name: "sload",
                          nodeType: "YulIdentifier",
                          src: "4144:5:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4144:11:7",
                      },
                    ],
                    functionName: {
                      name: "extract_byte_array_length",
                      nodeType: "YulIdentifier",
                      src: "4118:25:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4118:38:7",
                  },
                  variables: [
                    {
                      name: "oldLen",
                      nodeType: "YulTypedName",
                      src: "4108:6:7",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "4249:4:7",
                      },
                      {
                        name: "oldLen",
                        nodeType: "YulIdentifier",
                        src: "4255:6:7",
                      },
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "4263:6:7",
                      },
                    ],
                    functionName: {
                      name: "clean_up_bytearray_end_slots_t_string_storage",
                      nodeType: "YulIdentifier",
                      src: "4203:45:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4203:67:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4203:67:7",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4280:18:7",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "4297:1:7",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "srcOffset",
                      nodeType: "YulTypedName",
                      src: "4284:9:7",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "4308:17:7",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "4321:4:7",
                    type: "",
                    value: "0x20",
                  },
                  variableNames: [
                    {
                      name: "srcOffset",
                      nodeType: "YulIdentifier",
                      src: "4308:9:7",
                    },
                  ],
                },
                {
                  cases: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4372:611:7",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4386:37:7",
                            value: {
                              arguments: [
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "4405:6:7",
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "4417:4:7",
                                      type: "",
                                      value: "0x1f",
                                    },
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "4413:3:7",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4413:9:7",
                                },
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "4401:3:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4401:22:7",
                            },
                            variables: [
                              {
                                name: "loopEnd",
                                nodeType: "YulTypedName",
                                src: "4390:7:7",
                                type: "",
                              },
                            ],
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4437:51:7",
                            value: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4483:4:7",
                                },
                              ],
                              functionName: {
                                name: "array_dataslot_t_string_storage",
                                nodeType: "YulIdentifier",
                                src: "4451:31:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4451:37:7",
                            },
                            variables: [
                              {
                                name: "dstPtr",
                                nodeType: "YulTypedName",
                                src: "4441:6:7",
                                type: "",
                              },
                            ],
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4501:10:7",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4510:1:7",
                              type: "",
                              value: "0",
                            },
                            variables: [
                              {
                                name: "i",
                                nodeType: "YulTypedName",
                                src: "4505:1:7",
                                type: "",
                              },
                            ],
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "4569:163:7",
                              statements: [
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4594:6:7",
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "4612:3:7",
                                              },
                                              {
                                                name: "srcOffset",
                                                nodeType: "YulIdentifier",
                                                src: "4617:9:7",
                                              },
                                            ],
                                            functionName: {
                                              name: "add",
                                              nodeType: "YulIdentifier",
                                              src: "4608:3:7",
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "4608:19:7",
                                          },
                                        ],
                                        functionName: {
                                          name: "mload",
                                          nodeType: "YulIdentifier",
                                          src: "4602:5:7",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4602:26:7",
                                      },
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "4587:6:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4587:42:7",
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "4587:42:7",
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "4646:24:7",
                                  value: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4660:6:7",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4668:1:7",
                                        type: "",
                                        value: "1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4656:3:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4656:14:7",
                                  },
                                  variableNames: [
                                    {
                                      name: "dstPtr",
                                      nodeType: "YulIdentifier",
                                      src: "4646:6:7",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "4687:31:7",
                                  value: {
                                    arguments: [
                                      {
                                        name: "srcOffset",
                                        nodeType: "YulIdentifier",
                                        src: "4704:9:7",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4715:2:7",
                                        type: "",
                                        value: "32",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4700:3:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4700:18:7",
                                  },
                                  variableNames: [
                                    {
                                      name: "srcOffset",
                                      nodeType: "YulIdentifier",
                                      src: "4687:9:7",
                                    },
                                  ],
                                },
                              ],
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "4535:1:7",
                                },
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "4538:7:7",
                                },
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "4532:2:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4532:14:7",
                            },
                            nodeType: "YulForLoop",
                            post: {
                              nodeType: "YulBlock",
                              src: "4547:21:7",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "4549:17:7",
                                  value: {
                                    arguments: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "4558:1:7",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4561:4:7",
                                        type: "",
                                        value: "0x20",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4554:3:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4554:12:7",
                                  },
                                  variableNames: [
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "4549:1:7",
                                    },
                                  ],
                                },
                              ],
                            },
                            pre: {
                              nodeType: "YulBlock",
                              src: "4528:3:7",
                              statements: [],
                            },
                            src: "4524:208:7",
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "4768:156:7",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "4786:43:7",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "4813:3:7",
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "4818:9:7",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "4809:3:7",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4809:19:7",
                                      },
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "4803:5:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4803:26:7",
                                  },
                                  variables: [
                                    {
                                      name: "lastValue",
                                      nodeType: "YulTypedName",
                                      src: "4790:9:7",
                                      type: "",
                                    },
                                  ],
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4853:6:7",
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "lastValue",
                                            nodeType: "YulIdentifier",
                                            src: "4880:9:7",
                                          },
                                          {
                                            arguments: [
                                              {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "4895:6:7",
                                              },
                                              {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4903:4:7",
                                                type: "",
                                                value: "0x1f",
                                              },
                                            ],
                                            functionName: {
                                              name: "and",
                                              nodeType: "YulIdentifier",
                                              src: "4891:3:7",
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "4891:17:7",
                                          },
                                        ],
                                        functionName: {
                                          name: "mask_bytes_dynamic",
                                          nodeType: "YulIdentifier",
                                          src: "4861:18:7",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4861:48:7",
                                      },
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "4846:6:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4846:64:7",
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "4846:64:7",
                                },
                              ],
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "4751:7:7",
                                },
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "4760:6:7",
                                },
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "4748:2:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4748:19:7",
                            },
                            nodeType: "YulIf",
                            src: "4745:179:7",
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4944:4:7",
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "newLen",
                                          nodeType: "YulIdentifier",
                                          src: "4958:6:7",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "4966:1:7",
                                          type: "",
                                          value: "2",
                                        },
                                      ],
                                      functionName: {
                                        name: "mul",
                                        nodeType: "YulIdentifier",
                                        src: "4954:3:7",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4954:14:7",
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "4970:1:7",
                                      type: "",
                                      value: "1",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4950:3:7",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4950:22:7",
                                },
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "4937:6:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4937:36:7",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4937:36:7",
                          },
                        ],
                      },
                      nodeType: "YulCase",
                      src: "4365:618:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4370:1:7",
                        type: "",
                        value: "1",
                      },
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "5000:222:7",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "5014:14:7",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5027:1:7",
                              type: "",
                              value: "0",
                            },
                            variables: [
                              {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5018:5:7",
                                type: "",
                              },
                            ],
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "5051:67:7",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "5069:35:7",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "5088:3:7",
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "5093:9:7",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "5084:3:7",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5084:19:7",
                                      },
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "5078:5:7",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "5078:26:7",
                                  },
                                  variableNames: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "5069:5:7",
                                    },
                                  ],
                                },
                              ],
                            },
                            condition: {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "5044:6:7",
                            },
                            nodeType: "YulIf",
                            src: "5041:77:7",
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "5138:4:7",
                                },
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "5197:5:7",
                                    },
                                    {
                                      name: "newLen",
                                      nodeType: "YulIdentifier",
                                      src: "5204:6:7",
                                    },
                                  ],
                                  functionName: {
                                    name: "extract_used_part_and_set_length_of_short_byte_array",
                                    nodeType: "YulIdentifier",
                                    src: "5144:52:7",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5144:67:7",
                                },
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "5131:6:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5131:81:7",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "5131:81:7",
                          },
                        ],
                      },
                      nodeType: "YulCase",
                      src: "4992:230:7",
                      value: "default",
                    },
                  ],
                  expression: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "4345:6:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4353:2:7",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4342:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4342:14:7",
                  },
                  nodeType: "YulSwitch",
                  src: "4335:887:7",
                },
              ],
            },
            name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "3914:4:7",
                type: "",
              },
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3920:3:7",
                type: "",
              },
            ],
            src: "3833:1395:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5262:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5279:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5282:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5272:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5272:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5272:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5376:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5379:4:7",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5369:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5369:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5369:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5400:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5403:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "5393:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5393:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5393:15:7",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "5234:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5464:261:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5474:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "5497:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "5479:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5479:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "5474:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "5508:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "5531:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "5513:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5513:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "5508:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5671:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "5673:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5673:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5673:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "5592:1:7",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5599:66:7",
                            type: "",
                            value:
                              "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                          },
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "5667:1:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "5595:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5595:74:7",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "5589:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5589:81:7",
                  },
                  nodeType: "YulIf",
                  src: "5586:107:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "5703:16:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "5714:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "5717:1:7",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5710:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5710:9:7",
                  },
                  variableNames: [
                    {
                      name: "sum",
                      nodeType: "YulIdentifier",
                      src: "5703:3:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_add_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "5451:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "5454:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "sum",
                nodeType: "YulTypedName",
                src: "5460:3:7",
                type: "",
              },
            ],
            src: "5420:305:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5759:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5776:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5779:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5769:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5769:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5769:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5873:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5876:4:7",
                        type: "",
                        value: "0x12",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5866:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5866:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5866:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5897:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5900:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "5890:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5890:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5890:15:7",
                },
              ],
            },
            name: "panic_error_0x12",
            nodeType: "YulFunctionDefinition",
            src: "5731:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5959:143:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5969:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "5992:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "5974:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5974:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "5969:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "6003:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6026:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "6008:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6008:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "6003:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6050:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x12",
                            nodeType: "YulIdentifier",
                            src: "6052:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6052:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6052:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6047:1:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "6040:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6040:9:7",
                  },
                  nodeType: "YulIf",
                  src: "6037:35:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "6082:14:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "6091:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6094:1:7",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "6087:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6087:9:7",
                  },
                  variableNames: [
                    {
                      name: "r",
                      nodeType: "YulIdentifier",
                      src: "6082:1:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_div_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "5948:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "5951:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "r",
                nodeType: "YulTypedName",
                src: "5957:1:7",
                type: "",
              },
            ],
            src: "5917:185:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6156:300:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6166:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "6189:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "6171:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6171:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "6166:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "6200:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6223:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "6205:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6205:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "6200:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6398:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "6400:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6400:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6400:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "6310:1:7",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nodeType: "YulIdentifier",
                              src: "6303:6:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6303:9:7",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "6296:6:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6296:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "6318:1:7",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "6325:66:7",
                                type: "",
                                value:
                                  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                              },
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "6393:1:7",
                              },
                            ],
                            functionName: {
                              name: "div",
                              nodeType: "YulIdentifier",
                              src: "6321:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6321:74:7",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "6315:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6315:81:7",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "6292:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6292:105:7",
                  },
                  nodeType: "YulIf",
                  src: "6289:131:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "6430:20:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "6445:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6448:1:7",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "6441:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6441:9:7",
                  },
                  variableNames: [
                    {
                      name: "product",
                      nodeType: "YulIdentifier",
                      src: "6430:7:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_mul_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "6139:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "6142:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "product",
                nodeType: "YulTypedName",
                src: "6148:7:7",
                type: "",
              },
            ],
            src: "6108:348:7",
          },
        ],
      },
      contents:
        "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n}\n",
      id: 7,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:27025:7",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "66:40:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "77:22:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "93:5:7",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "87:5:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "87:12:7",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "77:6:7",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "49:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "59:6:7",
                type: "",
              },
            ],
            src: "7:99:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "208:73:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "225:3:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "230:6:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "218:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "218:19:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "218:19:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "246:29:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "265:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "270:4:7",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "261:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "261:14:7",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "246:11:7",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "180:3:7",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "185:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "196:11:7",
                type: "",
              },
            ],
            src: "112:169:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "336:258:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "346:10:7",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "355:1:7",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "350:1:7",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "415:63:7",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "440:3:7",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "445:1:7",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "436:3:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "436:11:7",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "459:3:7",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "464:1:7",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "455:3:7",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "455:11:7",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "449:5:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "449:18:7",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "429:6:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "429:39:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "429:39:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "376:1:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "379:6:7",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "373:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "373:13:7",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "387:19:7",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "389:15:7",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "398:1:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "401:2:7",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "394:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "394:10:7",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "389:1:7",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "369:3:7",
                    statements: [],
                  },
                  src: "365:113:7",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "512:76:7",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "562:3:7",
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "567:6:7",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "558:3:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "558:16:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "576:1:7",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "551:6:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "551:27:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "551:27:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "493:1:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "496:6:7",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "490:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "490:13:7",
                  },
                  nodeType: "YulIf",
                  src: "487:101:7",
                },
              ],
            },
            name: "copy_memory_to_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "318:3:7",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "323:3:7",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "328:6:7",
                type: "",
              },
            ],
            src: "287:307:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "648:54:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "658:38:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "676:5:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "683:2:7",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "672:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "672:14:7",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "692:2:7",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "688:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "688:7:7",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "668:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "668:28:7",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "658:6:7",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "631:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "641:6:7",
                type: "",
              },
            ],
            src: "600:102:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "800:272:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "810:53:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "857:5:7",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "824:32:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "824:39:7",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "814:6:7",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "872:78:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "938:3:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "943:6:7",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "879:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "879:71:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "872:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "985:5:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "992:4:7",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "981:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "981:16:7",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "999:3:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1004:6:7",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory",
                      nodeType: "YulIdentifier",
                      src: "959:21:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "959:52:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "959:52:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1020:46:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1031:3:7",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1058:6:7",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "1036:21:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1036:29:7",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1027:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1027:39:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "1020:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "781:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "788:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "796:3:7",
                type: "",
              },
            ],
            src: "708:364:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1196:195:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1206:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1218:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1229:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1214:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1214:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1206:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1253:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1264:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1249:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1249:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "1272:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1278:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1268:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1268:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1242:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1242:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1242:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1298:86:7",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1370:6:7",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "1379:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1306:63:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1306:78:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1298:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1168:9:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1180:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1191:4:7",
                type: "",
              },
            ],
            src: "1078:313:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1437:35:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1447:19:7",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1463:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1457:5:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1457:9:7",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "1447:6:7",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "1430:6:7",
                type: "",
              },
            ],
            src: "1397:75:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1567:28:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1584:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1587:1:7",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "1577:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1577:12:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1577:12:7",
                },
              ],
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "1478:117:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1690:28:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1707:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1710:1:7",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "1700:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1700:12:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1700:12:7",
                },
              ],
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "1601:117:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1769:81:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1779:65:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1794:5:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1801:42:7",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "1790:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1790:54:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1779:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1751:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1761:7:7",
                type: "",
              },
            ],
            src: "1724:126:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1901:51:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1911:35:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1940:5:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "1922:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1922:24:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1911:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1883:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1893:7:7",
                type: "",
              },
            ],
            src: "1856:96:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2001:79:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2058:16:7",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2067:1:7",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2070:1:7",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2060:6:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2060:12:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2060:12:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2024:5:7",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2049:5:7",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_address",
                              nodeType: "YulIdentifier",
                              src: "2031:17:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2031:24:7",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "2021:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2021:35:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2014:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2014:43:7",
                  },
                  nodeType: "YulIf",
                  src: "2011:63:7",
                },
              ],
            },
            name: "validator_revert_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1994:5:7",
                type: "",
              },
            ],
            src: "1958:122:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2138:87:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2148:29:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2170:6:7",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2157:12:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2157:20:7",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2148:5:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2213:5:7",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_address",
                      nodeType: "YulIdentifier",
                      src: "2186:26:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2186:33:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2186:33:7",
                },
              ],
            },
            name: "abi_decode_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2116:6:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2124:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2132:5:7",
                type: "",
              },
            ],
            src: "2086:139:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2276:32:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2286:16:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "2297:5:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "2286:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2258:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "2268:7:7",
                type: "",
              },
            ],
            src: "2231:77:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2357:79:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2414:16:7",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2423:1:7",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2426:1:7",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2416:6:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2416:12:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2416:12:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2380:5:7",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2405:5:7",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2387:17:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2387:24:7",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "2377:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2377:35:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2370:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2370:43:7",
                  },
                  nodeType: "YulIf",
                  src: "2367:63:7",
                },
              ],
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2350:5:7",
                type: "",
              },
            ],
            src: "2314:122:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2494:87:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2504:29:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2526:6:7",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2513:12:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2513:20:7",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2504:5:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2569:5:7",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2542:26:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2542:33:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2542:33:7",
                },
              ],
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2472:6:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2480:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2488:5:7",
                type: "",
              },
            ],
            src: "2442:139:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2670:391:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2716:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "2718:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2718:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2718:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2691:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2700:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2687:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2687:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2712:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2683:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2683:32:7",
                  },
                  nodeType: "YulIf",
                  src: "2680:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "2809:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2824:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2838:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2828:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2853:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2888:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2899:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2884:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2884:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2908:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "2863:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2863:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2853:6:7",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "2936:118:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2951:16:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2965:2:7",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2955:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2981:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3016:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3027:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3012:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3012:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3036:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "2991:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2991:53:7",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "2981:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2632:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2643:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2655:6:7",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2663:6:7",
                type: "",
              },
            ],
            src: "2587:474:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3109:48:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3119:32:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3144:5:7",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "3137:6:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3137:13:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "3130:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3130:21:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "3119:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_bool",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3091:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "3101:7:7",
                type: "",
              },
            ],
            src: "3067:90:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3222:50:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3239:3:7",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3259:5:7",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_bool",
                          nodeType: "YulIdentifier",
                          src: "3244:14:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3244:21:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3232:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3232:34:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3232:34:7",
                },
              ],
            },
            name: "abi_encode_t_bool_to_t_bool_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3210:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3217:3:7",
                type: "",
              },
            ],
            src: "3163:109:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3370:118:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3380:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "3392:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3403:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3388:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3388:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "3380:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "3454:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3467:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3478:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3463:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3463:17:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_bool_to_t_bool_fromStack",
                      nodeType: "YulIdentifier",
                      src: "3416:37:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3416:65:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3416:65:7",
                },
              ],
            },
            name: "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3342:9:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3354:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "3365:4:7",
                type: "",
              },
            ],
            src: "3278:210:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3560:263:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3606:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "3608:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3608:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3608:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3581:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "3590:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "3577:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3577:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3602:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "3573:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3573:32:7",
                  },
                  nodeType: "YulIf",
                  src: "3570:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "3699:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "3714:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3728:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "3718:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3743:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3778:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3789:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3774:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3774:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3798:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "3753:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3753:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "3743:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "3530:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "3541:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "3553:6:7",
                type: "",
              },
            ],
            src: "3494:329:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3894:53:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "3911:3:7",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "3934:5:7",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_address",
                          nodeType: "YulIdentifier",
                          src: "3916:17:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3916:24:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3904:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3904:37:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3904:37:7",
                },
              ],
            },
            name: "abi_encode_t_address_to_t_address_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3882:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "3889:3:7",
                type: "",
              },
            ],
            src: "3829:118:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4051:124:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4061:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "4073:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4084:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4069:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4069:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "4061:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "4141:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4154:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4165:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4150:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4150:17:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "4097:43:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4097:71:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4097:71:7",
                },
              ],
            },
            name: "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4023:9:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4035:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "4046:4:7",
                type: "",
              },
            ],
            src: "3953:222:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4270:28:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4287:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4290:1:7",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4280:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4280:12:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4280:12:7",
                },
              ],
            },
            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            nodeType: "YulFunctionDefinition",
            src: "4181:117:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4332:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4349:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4352:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4342:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4342:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4342:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4446:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4449:4:7",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4439:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4439:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4439:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4470:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4473:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "4463:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4463:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4463:15:7",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "4304:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4533:238:7",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4543:58:7",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "4565:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "4595:4:7",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "4573:21:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4573:27:7",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4561:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4561:40:7",
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "4547:10:7",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4712:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4714:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4714:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4714:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4655:10:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4667:18:7",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "4652:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4652:34:7",
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4691:10:7",
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "4703:6:7",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "4688:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4688:22:7",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "4649:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4649:62:7",
                  },
                  nodeType: "YulIf",
                  src: "4646:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4750:2:7",
                        type: "",
                        value: "64",
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "4754:10:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4743:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4743:22:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4743:22:7",
                },
              ],
            },
            name: "finalize_allocation",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "4519:6:7",
                type: "",
              },
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "4527:4:7",
                type: "",
              },
            ],
            src: "4490:281:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4818:88:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4828:30:7",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "allocate_unbounded",
                      nodeType: "YulIdentifier",
                      src: "4838:18:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4838:20:7",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "4828:6:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "4887:6:7",
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "4895:4:7",
                      },
                    ],
                    functionName: {
                      name: "finalize_allocation",
                      nodeType: "YulIdentifier",
                      src: "4867:19:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4867:33:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4867:33:7",
                },
              ],
            },
            name: "allocate_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "4802:4:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "4811:6:7",
                type: "",
              },
            ],
            src: "4777:129:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4994:229:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5099:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "5101:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5101:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5101:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5071:6:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5079:18:7",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "5068:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5068:30:7",
                  },
                  nodeType: "YulIf",
                  src: "5065:56:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "5131:25:7",
                  value: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5143:6:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5151:4:7",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "5139:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5139:17:7",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "5131:4:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "5193:23:7",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "5205:4:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5211:4:7",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5201:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5201:15:7",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "5193:4:7",
                    },
                  ],
                },
              ],
            },
            name: "array_allocation_size_t_array$_t_bytes32_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4978:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "4989:4:7",
                type: "",
              },
            ],
            src: "4912:311:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5318:28:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5335:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5338:1:7",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "5328:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5328:12:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5328:12:7",
                },
              ],
            },
            name: "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
            nodeType: "YulFunctionDefinition",
            src: "5229:117:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5397:32:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5407:16:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "5418:5:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "5407:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_bytes32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5379:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "5389:7:7",
                type: "",
              },
            ],
            src: "5352:77:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5478:79:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5535:16:7",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5544:1:7",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5547:1:7",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "5537:6:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5537:12:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5537:12:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5501:5:7",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "5526:5:7",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_bytes32",
                              nodeType: "YulIdentifier",
                              src: "5508:17:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5508:24:7",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "5498:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5498:35:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5491:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5491:43:7",
                  },
                  nodeType: "YulIf",
                  src: "5488:63:7",
                },
              ],
            },
            name: "validator_revert_t_bytes32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5471:5:7",
                type: "",
              },
            ],
            src: "5435:122:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5615:87:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5625:29:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "5647:6:7",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "5634:12:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5634:20:7",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "5625:5:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5690:5:7",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_bytes32",
                      nodeType: "YulIdentifier",
                      src: "5663:26:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5663:33:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5663:33:7",
                },
              ],
            },
            name: "abi_decode_t_bytes32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "5593:6:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "5601:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5609:5:7",
                type: "",
              },
            ],
            src: "5563:139:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5827:608:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5837:90:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "5919:6:7",
                          },
                        ],
                        functionName: {
                          name: "array_allocation_size_t_array$_t_bytes32_$dyn_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "5862:56:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5862:64:7",
                      },
                    ],
                    functionName: {
                      name: "allocate_memory",
                      nodeType: "YulIdentifier",
                      src: "5846:15:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5846:81:7",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "5837:5:7",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5936:16:7",
                  value: {
                    name: "array",
                    nodeType: "YulIdentifier",
                    src: "5947:5:7",
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "5940:3:7",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "5969:5:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5976:6:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5962:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5962:21:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5962:21:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "5992:23:7",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "6003:5:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6010:4:7",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5999:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5999:16:7",
                  },
                  variableNames: [
                    {
                      name: "dst",
                      nodeType: "YulIdentifier",
                      src: "5992:3:7",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6025:44:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "6043:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "6055:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6063:4:7",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "mul",
                          nodeType: "YulIdentifier",
                          src: "6051:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6051:17:7",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "6039:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6039:30:7",
                  },
                  variables: [
                    {
                      name: "srcEnd",
                      nodeType: "YulTypedName",
                      src: "6029:6:7",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6097:103:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                            nodeType: "YulIdentifier",
                            src: "6111:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6111:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6111:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "srcEnd",
                        nodeType: "YulIdentifier",
                        src: "6084:6:7",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "6092:3:7",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "6081:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6081:15:7",
                  },
                  nodeType: "YulIf",
                  src: "6078:122:7",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6285:144:7",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "6300:21:7",
                        value: {
                          name: "src",
                          nodeType: "YulIdentifier",
                          src: "6318:3:7",
                        },
                        variables: [
                          {
                            name: "elementPos",
                            nodeType: "YulTypedName",
                            src: "6304:10:7",
                            type: "",
                          },
                        ],
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "dst",
                              nodeType: "YulIdentifier",
                              src: "6342:3:7",
                            },
                            {
                              arguments: [
                                {
                                  name: "elementPos",
                                  nodeType: "YulIdentifier",
                                  src: "6368:10:7",
                                },
                                {
                                  name: "end",
                                  nodeType: "YulIdentifier",
                                  src: "6380:3:7",
                                },
                              ],
                              functionName: {
                                name: "abi_decode_t_bytes32",
                                nodeType: "YulIdentifier",
                                src: "6347:20:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "6347:37:7",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "6335:6:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6335:50:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6335:50:7",
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "6398:21:7",
                        value: {
                          arguments: [
                            {
                              name: "dst",
                              nodeType: "YulIdentifier",
                              src: "6409:3:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "6414:4:7",
                              type: "",
                              value: "0x20",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "6405:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6405:14:7",
                        },
                        variableNames: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "6398:3:7",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "6238:3:7",
                      },
                      {
                        name: "srcEnd",
                        nodeType: "YulIdentifier",
                        src: "6243:6:7",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "6235:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6235:15:7",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "6251:25:7",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "6253:21:7",
                        value: {
                          arguments: [
                            {
                              name: "src",
                              nodeType: "YulIdentifier",
                              src: "6264:3:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "6269:4:7",
                              type: "",
                              value: "0x20",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "6260:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6260:14:7",
                        },
                        variableNames: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "6253:3:7",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "6213:21:7",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "6215:17:7",
                        value: {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "6226:6:7",
                        },
                        variables: [
                          {
                            name: "src",
                            nodeType: "YulTypedName",
                            src: "6219:3:7",
                            type: "",
                          },
                        ],
                      },
                    ],
                  },
                  src: "6209:220:7",
                },
              ],
            },
            name: "abi_decode_available_length_t_array$_t_bytes32_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "5797:6:7",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5805:6:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "5813:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "5821:5:7",
                type: "",
              },
            ],
            src: "5725:710:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6535:293:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6584:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            nodeType: "YulIdentifier",
                            src: "6586:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6586:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6586:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "6563:6:7",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "6571:4:7",
                                type: "",
                                value: "0x1f",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6559:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6559:17:7",
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "6578:3:7",
                          },
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "6555:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6555:27:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "6548:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6548:35:7",
                  },
                  nodeType: "YulIf",
                  src: "6545:122:7",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "6676:34:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "6703:6:7",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "6690:12:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6690:20:7",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "6680:6:7",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "6719:103:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "6795:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6803:4:7",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6791:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6791:17:7",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "6810:6:7",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "6818:3:7",
                      },
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_array$_t_bytes32_$dyn_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "6728:62:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6728:94:7",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "6719:5:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_t_array$_t_bytes32_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "6513:6:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "6521:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "6529:5:7",
                type: "",
              },
            ],
            src: "6458:370:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6942:576:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6988:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "6990:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6990:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6990:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "6963:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6972:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6959:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6959:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6984:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "6955:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6955:32:7",
                  },
                  nodeType: "YulIf",
                  src: "6952:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "7081:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "7096:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7110:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "7100:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "7125:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "7160:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "7171:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "7156:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7156:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7180:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "7135:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7135:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "7125:6:7",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "7208:303:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "7223:46:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "7254:9:7",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "7265:2:7",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "7250:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7250:18:7",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "7237:12:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7237:32:7",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "7227:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "7316:83:7",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "7318:77:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "7318:79:7",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "7318:79:7",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "7288:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "7296:18:7",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "7285:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7285:30:7",
                      },
                      nodeType: "YulIf",
                      src: "7282:117:7",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "7413:88:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "7473:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "7484:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "7469:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7469:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7493:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_array$_t_bytes32_$dyn_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "7423:45:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7423:78:7",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "7413:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_array$_t_bytes32_$dyn_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "6904:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "6915:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "6927:6:7",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "6935:6:7",
                type: "",
              },
            ],
            src: "6834:684:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7589:53:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "7606:3:7",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "7629:5:7",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "7611:17:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7611:24:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7599:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7599:37:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7599:37:7",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "7577:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "7584:3:7",
                type: "",
              },
            ],
            src: "7524:118:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7746:124:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7756:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "7768:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7779:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "7764:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7764:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "7756:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "7836:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "7849:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "7860:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "7845:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7845:17:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "7792:43:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7792:71:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7792:71:7",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "7718:9:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "7730:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "7741:4:7",
                type: "",
              },
            ],
            src: "7648:222:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7976:519:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "8022:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "8024:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "8024:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "8024:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7997:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "8006:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "7993:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7993:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8018:2:7",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "7989:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7989:32:7",
                  },
                  nodeType: "YulIf",
                  src: "7986:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "8115:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8130:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8144:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8134:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8159:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8194:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8205:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8190:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8190:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8214:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "8169:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8169:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "8159:6:7",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "8242:118:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8257:16:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8271:2:7",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8261:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8287:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8322:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8333:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8318:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8318:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8342:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "8297:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8297:53:7",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "8287:6:7",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "8370:118:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8385:16:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8399:2:7",
                        type: "",
                        value: "64",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8389:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8415:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8450:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8461:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8446:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8446:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8470:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "8425:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8425:53:7",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "8415:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "7930:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "7941:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "7953:6:7",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "7961:6:7",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "7969:6:7",
                type: "",
              },
            ],
            src: "7876:619:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8567:263:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "8613:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "8615:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "8615:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "8615:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8588:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "8597:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "8584:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8584:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8609:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "8580:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "8580:32:7",
                  },
                  nodeType: "YulIf",
                  src: "8577:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "8706:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8721:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8735:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8725:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8750:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8785:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8796:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8781:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8781:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8805:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "8760:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8760:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "8750:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "8537:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "8548:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "8560:6:7",
                type: "",
              },
            ],
            src: "8501:329:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8879:43:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8889:27:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "8904:5:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8911:4:7",
                        type: "",
                        value: "0xff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "8900:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "8900:16:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "8889:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint8",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8861:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "8871:7:7",
                type: "",
              },
            ],
            src: "8836:86:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8989:51:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "9006:3:7",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "9027:5:7",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint8",
                          nodeType: "YulIdentifier",
                          src: "9011:15:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9011:22:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "8999:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "8999:35:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "8999:35:7",
                },
              ],
            },
            name: "abi_encode_t_uint8_to_t_uint8_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8977:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "8984:3:7",
                type: "",
              },
            ],
            src: "8928:112:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9140:120:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "9150:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "9162:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9173:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "9158:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9158:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "9150:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "9226:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "9239:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "9250:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "9235:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9235:17:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint8_to_t_uint8_fromStack",
                      nodeType: "YulIdentifier",
                      src: "9186:39:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9186:67:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9186:67:7",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "9112:9:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "9124:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "9135:4:7",
                type: "",
              },
            ],
            src: "9046:214:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9355:28:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9372:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9375:1:7",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "9365:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9365:12:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9365:12:7",
                },
              ],
            },
            name: "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
            nodeType: "YulFunctionDefinition",
            src: "9266:117:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9496:478:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9545:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            nodeType: "YulIdentifier",
                            src: "9547:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "9547:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "9547:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "9524:6:7",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "9532:4:7",
                                type: "",
                                value: "0x1f",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "9520:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "9520:17:7",
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "9539:3:7",
                          },
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "9516:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9516:27:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "9509:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9509:35:7",
                  },
                  nodeType: "YulIf",
                  src: "9506:122:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "9637:30:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "9660:6:7",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "9647:12:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9647:20:7",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "9637:6:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9710:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
                            nodeType: "YulIdentifier",
                            src: "9712:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "9712:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "9712:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "9682:6:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9690:18:7",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "9679:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9679:30:7",
                  },
                  nodeType: "YulIf",
                  src: "9676:117:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "9802:29:7",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "9818:6:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9826:4:7",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "9814:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9814:17:7",
                  },
                  variableNames: [
                    {
                      name: "arrayPos",
                      nodeType: "YulIdentifier",
                      src: "9802:8:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9885:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                            nodeType: "YulIdentifier",
                            src: "9887:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "9887:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "9887:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "arrayPos",
                            nodeType: "YulIdentifier",
                            src: "9850:8:7",
                          },
                          {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "9864:6:7",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "9872:4:7",
                                type: "",
                                value: "0x20",
                              },
                            ],
                            functionName: {
                              name: "mul",
                              nodeType: "YulIdentifier",
                              src: "9860:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "9860:17:7",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "9846:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9846:32:7",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "9880:3:7",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "9843:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9843:41:7",
                  },
                  nodeType: "YulIf",
                  src: "9840:128:7",
                },
              ],
            },
            name: "abi_decode_t_array$_t_bytes32_$dyn_calldata_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "9463:6:7",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "9471:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "arrayPos",
                nodeType: "YulTypedName",
                src: "9479:8:7",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "9489:6:7",
                type: "",
              },
            ],
            src: "9406:568:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10098:586:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "10144:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "10146:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "10146:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "10146:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "10119:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "10128:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "10115:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10115:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10140:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "10111:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10111:32:7",
                  },
                  nodeType: "YulIf",
                  src: "10108:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "10237:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "10252:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10266:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "10256:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "10281:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "10316:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "10327:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "10312:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "10312:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "10336:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "10291:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10291:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "10281:6:7",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "10364:313:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "10379:46:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "10410:9:7",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "10421:2:7",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "10406:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "10406:18:7",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "10393:12:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10393:32:7",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "10383:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "10472:83:7",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "10474:77:7",
                              },
                              nodeType: "YulFunctionCall",
                              src: "10474:79:7",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "10474:79:7",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "10444:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "10452:18:7",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "10441:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10441:30:7",
                      },
                      nodeType: "YulIf",
                      src: "10438:117:7",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "10569:98:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "10639:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "10650:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "10635:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "10635:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "10659:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_array$_t_bytes32_$dyn_calldata_ptr",
                          nodeType: "YulIdentifier",
                          src: "10587:47:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10587:80:7",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "10569:6:7",
                        },
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "10577:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_array$_t_bytes32_$dyn_calldata_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "10052:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "10063:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "10075:6:7",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "10083:6:7",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "10091:6:7",
                type: "",
              },
            ],
            src: "9980:704:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10773:391:7",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "10819:83:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "10821:77:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "10821:79:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "10821:79:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "10794:7:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "10803:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "10790:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10790:23:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10815:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "10786:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10786:32:7",
                  },
                  nodeType: "YulIf",
                  src: "10783:119:7",
                },
                {
                  nodeType: "YulBlock",
                  src: "10912:117:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "10927:15:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10941:1:7",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "10931:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "10956:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "10991:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "11002:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "10987:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "10987:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "11011:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "10966:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10966:53:7",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "10956:6:7",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "11039:118:7",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "11054:16:7",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11068:2:7",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "11058:6:7",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "11084:63:7",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "11119:9:7",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "11130:6:7",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "11115:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "11115:22:7",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "11139:7:7",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "11094:20:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "11094:53:7",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "11084:6:7",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "10735:9:7",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "10746:7:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "10758:6:7",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "10766:6:7",
                type: "",
              },
            ],
            src: "10690:474:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11198:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11215:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11218:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "11208:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11208:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11208:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11312:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11315:4:7",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "11305:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11305:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11305:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11336:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11339:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "11329:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11329:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11329:15:7",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "11170:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11407:269:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "11417:22:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "11431:4:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11437:1:7",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "11427:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11427:12:7",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "11417:6:7",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "11448:38:7",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "11478:4:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11484:1:7",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "11474:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11474:12:7",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "11452:18:7",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "11525:51:7",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "11539:27:7",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "11553:6:7",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "11561:4:7",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "11549:3:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "11549:17:7",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "11539:6:7",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "11505:18:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "11498:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11498:26:7",
                  },
                  nodeType: "YulIf",
                  src: "11495:81:7",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "11628:42:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "11642:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "11642:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "11642:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "11592:18:7",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "11615:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "11623:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "11612:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "11612:14:7",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "11589:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11589:38:7",
                  },
                  nodeType: "YulIf",
                  src: "11586:84:7",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "11391:4:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "11400:6:7",
                type: "",
              },
            ],
            src: "11356:320:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11710:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11727:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11730:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "11720:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11720:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11720:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11824:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11827:4:7",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "11817:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11817:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11817:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11848:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11851:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "11841:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11841:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11841:15:7",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "11682:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11916:300:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "11926:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "11949:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "11931:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11931:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "11926:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "11960:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "11983:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "11965:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11965:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "11960:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "12158:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "12160:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12160:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "12160:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "12070:1:7",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nodeType: "YulIdentifier",
                              src: "12063:6:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "12063:9:7",
                          },
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "12056:6:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "12056:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "12078:1:7",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "12085:66:7",
                                type: "",
                                value:
                                  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                              },
                              {
                                name: "x",
                                nodeType: "YulIdentifier",
                                src: "12153:1:7",
                              },
                            ],
                            functionName: {
                              name: "div",
                              nodeType: "YulIdentifier",
                              src: "12081:3:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "12081:74:7",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "12075:2:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "12075:81:7",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "12052:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12052:105:7",
                  },
                  nodeType: "YulIf",
                  src: "12049:131:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "12190:20:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "12205:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "12208:1:7",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "12201:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12201:9:7",
                  },
                  variableNames: [
                    {
                      name: "product",
                      nodeType: "YulIdentifier",
                      src: "12190:7:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_mul_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "11899:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "11902:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "product",
                nodeType: "YulTypedName",
                src: "11908:7:7",
                type: "",
              },
            ],
            src: "11868:348:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12250:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12267:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12270:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "12260:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12260:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "12260:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12364:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12367:4:7",
                        type: "",
                        value: "0x32",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "12357:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12357:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "12357:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12388:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12391:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "12381:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12381:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "12381:15:7",
                },
              ],
            },
            name: "panic_error_0x32",
            nodeType: "YulFunctionDefinition",
            src: "12222:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12451:190:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "12461:33:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "12488:5:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "12470:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12470:24:7",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "12461:5:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "12584:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "12586:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12586:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "12586:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "12509:5:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12516:66:7",
                        type: "",
                        value:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "12506:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12506:77:7",
                  },
                  nodeType: "YulIf",
                  src: "12503:103:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "12615:20:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "12626:5:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12633:1:7",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "12622:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12622:13:7",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "12615:3:7",
                    },
                  ],
                },
              ],
            },
            name: "increment_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "12437:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "12447:3:7",
                type: "",
              },
            ],
            src: "12408:233:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12691:261:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "12701:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "12724:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "12706:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12706:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "12701:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "12735:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "12758:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "12740:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12740:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "12735:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "12898:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "12900:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12900:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "12900:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "12819:1:7",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "12826:66:7",
                            type: "",
                            value:
                              "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                          },
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "12894:1:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "12822:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "12822:74:7",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "12816:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12816:81:7",
                  },
                  nodeType: "YulIf",
                  src: "12813:107:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "12930:16:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "12941:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "12944:1:7",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "12937:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12937:9:7",
                  },
                  variableNames: [
                    {
                      name: "sum",
                      nodeType: "YulIdentifier",
                      src: "12930:3:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_add_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "12678:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "12681:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "sum",
                nodeType: "YulTypedName",
                src: "12687:3:7",
                type: "",
              },
            ],
            src: "12647:305:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "13064:118:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "13086:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "13094:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "13082:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "13082:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "13098:34:7",
                        type: "",
                        value: "ERC20: decreased allowance below",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "13075:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13075:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13075:58:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "13154:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "13162:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "13150:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "13150:15:7",
                      },
                      {
                        hexValue: "207a65726f",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "13167:7:7",
                        type: "",
                        value: " zero",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "13143:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13143:32:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13143:32:7",
                },
              ],
            },
            name: "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "13056:6:7",
                type: "",
              },
            ],
            src: "12958:224:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "13334:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "13344:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "13410:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13415:2:7",
                        type: "",
                        value: "37",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "13351:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13351:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "13344:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "13516:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                      nodeType: "YulIdentifier",
                      src: "13427:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13427:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13427:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "13529:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "13540:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13545:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "13536:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13536:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "13529:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "13322:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "13330:3:7",
                type: "",
              },
            ],
            src: "13188:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "13731:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "13741:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "13753:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13764:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "13749:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13749:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "13741:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "13788:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "13799:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "13784:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "13784:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "13807:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "13813:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "13803:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "13803:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "13777:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13777:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13777:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "13833:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "13967:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "13841:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13841:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "13833:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "13711:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "13726:4:7",
                type: "",
              },
            ],
            src: "13560:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "14091:66:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "14113:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "14121:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "14109:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14109:14:7",
                      },
                      {
                        hexValue:
                          "436c61696d2070686173652068617320656e6465642e",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "14125:24:7",
                        type: "",
                        value: "Claim phase has ended.",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "14102:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14102:48:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "14102:48:7",
                },
              ],
            },
            name: "store_literal_in_memory_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "14083:6:7",
                type: "",
              },
            ],
            src: "13985:172:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "14309:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "14319:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "14385:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "14390:2:7",
                        type: "",
                        value: "22",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "14326:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14326:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "14319:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "14491:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03",
                      nodeType: "YulIdentifier",
                      src: "14402:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14402:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "14402:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "14504:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "14515:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "14520:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "14511:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14511:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "14504:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "14297:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "14305:3:7",
                type: "",
              },
            ],
            src: "14163:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "14706:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "14716:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "14728:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "14739:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "14724:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14724:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "14716:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "14763:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "14774:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "14759:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14759:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "14782:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "14788:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "14778:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14778:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "14752:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14752:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "14752:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "14808:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "14942:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "14816:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14816:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "14808:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "14686:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "14701:4:7",
                type: "",
              },
            ],
            src: "14535:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "15066:72:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "15088:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "15096:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "15084:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15084:14:7",
                      },
                      {
                        hexValue:
                          "416464726573732068617320616c726561647920636c61696d65642e",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "15100:30:7",
                        type: "",
                        value: "Address has already claimed.",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "15077:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15077:54:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15077:54:7",
                },
              ],
            },
            name: "store_literal_in_memory_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "15058:6:7",
                type: "",
              },
            ],
            src: "14960:178:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "15290:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "15300:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "15366:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15371:2:7",
                        type: "",
                        value: "28",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "15307:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15307:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "15300:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "15472:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9",
                      nodeType: "YulIdentifier",
                      src: "15383:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15383:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15383:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "15485:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "15496:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15501:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "15492:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15492:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "15485:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "15278:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "15286:3:7",
                type: "",
              },
            ],
            src: "15144:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "15687:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "15697:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "15709:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15720:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "15705:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15705:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "15697:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "15744:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "15755:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "15740:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15740:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "15763:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "15769:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "15759:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15759:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "15733:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15733:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15733:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "15789:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "15923:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "15797:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15797:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "15789:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "15667:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "15682:4:7",
                type: "",
              },
            ],
            src: "15516:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "16047:72:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "16069:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "16077:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "16065:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16065:14:7",
                      },
                      {
                        hexValue:
                          "4865782041646472657373206973204e6f7420436c61696d61626c65",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "16081:30:7",
                        type: "",
                        value: "Hex Address is Not Claimable",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "16058:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16058:54:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16058:54:7",
                },
              ],
            },
            name: "store_literal_in_memory_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "16039:6:7",
                type: "",
              },
            ],
            src: "15941:178:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "16271:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "16281:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "16347:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "16352:2:7",
                        type: "",
                        value: "28",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "16288:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16288:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "16281:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "16453:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a",
                      nodeType: "YulIdentifier",
                      src: "16364:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16364:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16364:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "16466:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "16477:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "16482:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "16473:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16473:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "16466:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "16259:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "16267:3:7",
                type: "",
              },
            ],
            src: "16125:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "16668:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "16678:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "16690:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "16701:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "16686:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16686:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "16678:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16725:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "16736:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "16721:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16721:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "16744:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16750:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "16740:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16740:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "16714:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16714:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16714:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "16770:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "16904:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "16778:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16778:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "16770:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "16648:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "16663:4:7",
                type: "",
              },
            ],
            src: "16497:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "16978:32:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "16988:16:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "16999:5:7",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "16988:7:7",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_rational_1000_by_1",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "16960:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "16970:7:7",
                type: "",
              },
            ],
            src: "16922:88:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "17048:28:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "17058:12:7",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "17065:5:7",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "17058:3:7",
                    },
                  ],
                },
              ],
            },
            name: "identity",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "17034:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "17044:3:7",
                type: "",
              },
            ],
            src: "17016:60:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "17153:93:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "17163:77:7",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "17232:5:7",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_rational_1000_by_1",
                              nodeType: "YulIdentifier",
                              src: "17203:28:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "17203:35:7",
                          },
                        ],
                        functionName: {
                          name: "identity",
                          nodeType: "YulIdentifier",
                          src: "17194:8:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "17194:45:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "17176:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "17176:64:7",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "17163:9:7",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_rational_1000_by_1_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "17133:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "17143:9:7",
                type: "",
              },
            ],
            src: "17082:164:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "17328:77:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "17345:3:7",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "17392:5:7",
                          },
                        ],
                        functionName: {
                          name: "convert_t_rational_1000_by_1_to_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "17350:41:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "17350:48:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "17338:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "17338:61:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "17338:61:7",
                },
              ],
            },
            name: "abi_encode_t_rational_1000_by_1_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "17316:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "17323:3:7",
                type: "",
              },
            ],
            src: "17252:153:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "17520:135:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "17530:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "17542:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "17553:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "17538:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "17538:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "17530:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "17621:6:7",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "17634:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "17645:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "17630:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "17630:17:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_rational_1000_by_1_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "17566:54:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "17566:82:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "17566:82:7",
                },
              ],
            },
            name: "abi_encode_tuple_t_rational_1000_by_1__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "17492:9:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "17504:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "17515:4:7",
                type: "",
              },
            ],
            src: "17411:244:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "17767:117:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "17789:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "17797:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "17785:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "17785:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "17801:34:7",
                        type: "",
                        value: "ERC20: approve from the zero add",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "17778:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "17778:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "17778:58:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "17857:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "17865:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "17853:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "17853:15:7",
                      },
                      {
                        hexValue: "72657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "17870:6:7",
                        type: "",
                        value: "ress",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "17846:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "17846:31:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "17846:31:7",
                },
              ],
            },
            name: "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "17759:6:7",
                type: "",
              },
            ],
            src: "17661:223:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "18036:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "18046:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "18112:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "18117:2:7",
                        type: "",
                        value: "36",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "18053:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18053:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "18046:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "18218:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                      nodeType: "YulIdentifier",
                      src: "18129:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18129:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "18129:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "18231:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "18242:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "18247:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "18238:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18238:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "18231:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "18024:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "18032:3:7",
                type: "",
              },
            ],
            src: "17890:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "18433:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "18443:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "18455:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "18466:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "18451:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18451:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "18443:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "18490:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "18501:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "18486:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "18486:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "18509:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "18515:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "18505:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "18505:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "18479:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18479:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "18479:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "18535:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "18669:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "18543:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18543:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "18535:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "18413:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "18428:4:7",
                type: "",
              },
            ],
            src: "18262:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "18793:115:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "18815:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "18823:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "18811:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "18811:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "18827:34:7",
                        type: "",
                        value: "ERC20: approve to the zero addre",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "18804:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18804:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "18804:58:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "18883:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "18891:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "18879:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "18879:15:7",
                      },
                      {
                        hexValue: "7373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "18896:4:7",
                        type: "",
                        value: "ss",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "18872:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "18872:29:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "18872:29:7",
                },
              ],
            },
            name: "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "18785:6:7",
                type: "",
              },
            ],
            src: "18687:221:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "19060:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "19070:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "19136:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "19141:2:7",
                        type: "",
                        value: "34",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "19077:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19077:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "19070:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "19242:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                      nodeType: "YulIdentifier",
                      src: "19153:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19153:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "19153:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "19255:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "19266:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "19271:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "19262:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19262:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "19255:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "19048:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "19056:3:7",
                type: "",
              },
            ],
            src: "18914:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "19457:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "19467:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "19479:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "19490:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "19475:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19475:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "19467:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "19514:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "19525:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "19510:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "19510:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "19533:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "19539:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "19529:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "19529:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "19503:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19503:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "19503:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "19559:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "19693:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "19567:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19567:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "19559:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "19437:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "19452:4:7",
                type: "",
              },
            ],
            src: "19286:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "19817:75:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "19839:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "19847:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "19835:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "19835:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "19851:33:7",
                        type: "",
                        value: "ERC20: mint to the zero address",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "19828:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "19828:57:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "19828:57:7",
                },
              ],
            },
            name: "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "19809:6:7",
                type: "",
              },
            ],
            src: "19711:181:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "20044:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "20054:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "20120:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "20125:2:7",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "20061:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20061:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "20054:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "20226:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                      nodeType: "YulIdentifier",
                      src: "20137:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20137:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "20137:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "20239:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "20250:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "20255:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "20246:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20246:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "20239:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "20032:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "20040:3:7",
                type: "",
              },
            ],
            src: "19898:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "20441:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "20451:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "20463:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "20474:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "20459:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20459:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "20451:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "20498:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "20509:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "20494:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "20494:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "20517:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "20523:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "20513:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "20513:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "20487:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20487:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "20487:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "20543:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "20677:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "20551:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20551:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "20543:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "20421:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "20436:4:7",
                type: "",
              },
            ],
            src: "20270:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "20737:52:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "20747:35:7",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "20772:2:7",
                        type: "",
                        value: "96",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "20776:5:7",
                      },
                    ],
                    functionName: {
                      name: "shl",
                      nodeType: "YulIdentifier",
                      src: "20768:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20768:14:7",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "20747:8:7",
                    },
                  ],
                },
              ],
            },
            name: "shift_left_96",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "20718:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "20728:8:7",
                type: "",
              },
            ],
            src: "20695:94:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "20842:47:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "20852:31:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "20877:5:7",
                      },
                    ],
                    functionName: {
                      name: "shift_left_96",
                      nodeType: "YulIdentifier",
                      src: "20863:13:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20863:20:7",
                  },
                  variableNames: [
                    {
                      name: "aligned",
                      nodeType: "YulIdentifier",
                      src: "20852:7:7",
                    },
                  ],
                },
              ],
            },
            name: "leftAlign_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "20824:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "aligned",
                nodeType: "YulTypedName",
                src: "20834:7:7",
                type: "",
              },
            ],
            src: "20795:94:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "20942:53:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "20952:37:7",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "20983:5:7",
                      },
                    ],
                    functionName: {
                      name: "leftAlign_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "20963:19:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "20963:26:7",
                  },
                  variableNames: [
                    {
                      name: "aligned",
                      nodeType: "YulIdentifier",
                      src: "20952:7:7",
                    },
                  ],
                },
              ],
            },
            name: "leftAlign_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "20924:5:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "aligned",
                nodeType: "YulTypedName",
                src: "20934:7:7",
                type: "",
              },
            ],
            src: "20895:100:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "21084:74:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "21101:3:7",
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "21144:5:7",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_address",
                              nodeType: "YulIdentifier",
                              src: "21126:17:7",
                            },
                            nodeType: "YulFunctionCall",
                            src: "21126:24:7",
                          },
                        ],
                        functionName: {
                          name: "leftAlign_t_address",
                          nodeType: "YulIdentifier",
                          src: "21106:19:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "21106:45:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "21094:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21094:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "21094:58:7",
                },
              ],
            },
            name: "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "21072:5:7",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "21079:3:7",
                type: "",
              },
            ],
            src: "21001:157:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "21280:140:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "21353:6:7",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "21362:3:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
                      nodeType: "YulIdentifier",
                      src: "21291:61:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21291:75:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "21291:75:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "21375:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "21386:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "21391:2:7",
                        type: "",
                        value: "20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "21382:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21382:12:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "21375:3:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "21404:10:7",
                  value: {
                    name: "pos",
                    nodeType: "YulIdentifier",
                    src: "21411:3:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "21404:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_packed_t_address__to_t_address__nonPadded_inplace_fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "21259:3:7",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "21265:6:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "21276:3:7",
                type: "",
              },
            ],
            src: "21164:256:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "21532:57:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "21554:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "21562:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "21550:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "21550:14:7",
                      },
                      {
                        hexValue: "496e76616c69642050726f6f66",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "21566:15:7",
                        type: "",
                        value: "Invalid Proof",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "21543:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21543:39:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "21543:39:7",
                },
              ],
            },
            name: "store_literal_in_memory_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "21524:6:7",
                type: "",
              },
            ],
            src: "21426:163:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "21741:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "21751:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "21817:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "21822:2:7",
                        type: "",
                        value: "13",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "21758:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21758:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "21751:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "21923:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486",
                      nodeType: "YulIdentifier",
                      src: "21834:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21834:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "21834:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "21936:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "21947:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "21952:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "21943:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "21943:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "21936:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "21729:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "21737:3:7",
                type: "",
              },
            ],
            src: "21595:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "22138:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "22148:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "22160:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "22171:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "22156:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22156:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "22148:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "22195:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "22206:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "22191:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "22191:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "22214:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "22220:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "22210:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "22210:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "22184:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22184:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "22184:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "22240:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "22374:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "22248:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22248:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "22240:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "22118:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "22133:4:7",
                type: "",
              },
            ],
            src: "21967:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "22498:73:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "22520:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "22528:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "22516:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "22516:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "22532:31:7",
                        type: "",
                        value: "ERC20: insufficient allowance",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "22509:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22509:55:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "22509:55:7",
                },
              ],
            },
            name: "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "22490:6:7",
                type: "",
              },
            ],
            src: "22392:179:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "22723:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "22733:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "22799:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "22804:2:7",
                        type: "",
                        value: "29",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "22740:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22740:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "22733:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "22905:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                      nodeType: "YulIdentifier",
                      src: "22816:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22816:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "22816:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "22918:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "22929:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "22934:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "22925:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "22925:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "22918:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "22711:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "22719:3:7",
                type: "",
              },
            ],
            src: "22577:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "23120:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "23130:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "23142:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "23153:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "23138:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23138:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "23130:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "23177:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "23188:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "23173:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "23173:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "23196:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "23202:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "23192:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "23192:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "23166:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23166:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "23166:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "23222:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "23356:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "23230:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23230:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "23222:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "23100:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "23115:4:7",
                type: "",
              },
            ],
            src: "22949:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "23480:118:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "23502:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "23510:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "23498:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "23498:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "23514:34:7",
                        type: "",
                        value: "ERC20: transfer from the zero ad",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "23491:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23491:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "23491:58:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "23570:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "23578:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "23566:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "23566:15:7",
                      },
                      {
                        hexValue: "6472657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "23583:7:7",
                        type: "",
                        value: "dress",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "23559:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23559:32:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "23559:32:7",
                },
              ],
            },
            name: "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "23472:6:7",
                type: "",
              },
            ],
            src: "23374:224:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "23750:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "23760:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "23826:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "23831:2:7",
                        type: "",
                        value: "37",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "23767:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23767:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "23760:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "23932:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                      nodeType: "YulIdentifier",
                      src: "23843:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23843:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "23843:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "23945:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "23956:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "23961:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "23952:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "23952:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "23945:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "23738:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "23746:3:7",
                type: "",
              },
            ],
            src: "23604:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "24147:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "24157:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "24169:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "24180:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "24165:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24165:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "24157:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "24204:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "24215:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "24200:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "24200:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "24223:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "24229:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "24219:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "24219:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "24193:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24193:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "24193:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "24249:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "24383:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "24257:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24257:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "24249:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "24127:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "24142:4:7",
                type: "",
              },
            ],
            src: "23976:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "24507:116:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "24529:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "24537:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "24525:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "24525:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "24541:34:7",
                        type: "",
                        value: "ERC20: transfer to the zero addr",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "24518:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24518:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "24518:58:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "24597:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "24605:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "24593:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "24593:15:7",
                      },
                      {
                        hexValue: "657373",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "24610:5:7",
                        type: "",
                        value: "ess",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "24586:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24586:30:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "24586:30:7",
                },
              ],
            },
            name: "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "24499:6:7",
                type: "",
              },
            ],
            src: "24401:222:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "24775:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "24785:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "24851:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "24856:2:7",
                        type: "",
                        value: "35",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "24792:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24792:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "24785:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "24957:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                      nodeType: "YulIdentifier",
                      src: "24868:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24868:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "24868:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "24970:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "24981:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "24986:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "24977:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "24977:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "24970:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "24763:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "24771:3:7",
                type: "",
              },
            ],
            src: "24629:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "25172:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "25182:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "25194:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "25205:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "25190:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25190:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "25182:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "25229:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "25240:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "25225:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "25225:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "25248:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "25254:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "25244:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "25244:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "25218:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25218:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "25218:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "25274:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "25408:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "25282:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25282:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "25274:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "25152:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "25167:4:7",
                type: "",
              },
            ],
            src: "25001:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "25532:119:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "25554:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "25562:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "25550:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "25550:14:7",
                      },
                      {
                        hexValue:
                          "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "25566:34:7",
                        type: "",
                        value: "ERC20: transfer amount exceeds b",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "25543:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25543:58:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "25543:58:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "25622:6:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "25630:2:7",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "25618:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "25618:15:7",
                      },
                      {
                        hexValue: "616c616e6365",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "25635:8:7",
                        type: "",
                        value: "alance",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "25611:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25611:33:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "25611:33:7",
                },
              ],
            },
            name: "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "25524:6:7",
                type: "",
              },
            ],
            src: "25426:225:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "25803:220:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "25813:74:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "25879:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "25884:2:7",
                        type: "",
                        value: "38",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "25820:58:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25820:67:7",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "25813:3:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "25985:3:7",
                      },
                    ],
                    functionName: {
                      name: "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                      nodeType: "YulIdentifier",
                      src: "25896:88:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "25896:93:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "25896:93:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "25998:19:7",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "26009:3:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26014:2:7",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "26005:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26005:12:7",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "25998:3:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "25791:3:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "25799:3:7",
                type: "",
              },
            ],
            src: "25657:366:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "26200:248:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "26210:26:7",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "26222:9:7",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26233:2:7",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "26218:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26218:18:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "26210:4:7",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "26257:9:7",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "26268:1:7",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "26253:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "26253:17:7",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "26276:4:7",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "26282:9:7",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "26272:3:7",
                        },
                        nodeType: "YulFunctionCall",
                        src: "26272:20:7",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "26246:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26246:47:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "26246:47:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "26302:139:7",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "26436:4:7",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "26310:124:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26310:131:7",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "26302:4:7",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "26180:9:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "26195:4:7",
                type: "",
              },
            ],
            src: "26029:419:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "26499:146:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "26509:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "26532:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "26514:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26514:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "26509:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "26543:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "26566:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "26548:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26548:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "26543:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "26590:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "26592:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "26592:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "26592:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "26584:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "26587:1:7",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "26581:2:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26581:8:7",
                  },
                  nodeType: "YulIf",
                  src: "26578:34:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "26622:17:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "26634:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "26637:1:7",
                      },
                    ],
                    functionName: {
                      name: "sub",
                      nodeType: "YulIdentifier",
                      src: "26630:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26630:9:7",
                  },
                  variableNames: [
                    {
                      name: "diff",
                      nodeType: "YulIdentifier",
                      src: "26622:4:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_sub_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "26485:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "26488:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "diff",
                nodeType: "YulTypedName",
                src: "26494:4:7",
                type: "",
              },
            ],
            src: "26454:191:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "26679:152:7",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26696:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26699:77:7",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "26689:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26689:88:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "26689:88:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26793:1:7",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26796:4:7",
                        type: "",
                        value: "0x12",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "26786:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26786:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "26786:15:7",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26817:1:7",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "26820:4:7",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "26810:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26810:15:7",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "26810:15:7",
                },
              ],
            },
            name: "panic_error_0x12",
            nodeType: "YulFunctionDefinition",
            src: "26651:180:7",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "26879:143:7",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "26889:25:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "26912:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "26894:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26894:20:7",
                  },
                  variableNames: [
                    {
                      name: "x",
                      nodeType: "YulIdentifier",
                      src: "26889:1:7",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "26923:25:7",
                  value: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "26946:1:7",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "26928:17:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26928:20:7",
                  },
                  variableNames: [
                    {
                      name: "y",
                      nodeType: "YulIdentifier",
                      src: "26923:1:7",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "26970:22:7",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x12",
                            nodeType: "YulIdentifier",
                            src: "26972:16:7",
                          },
                          nodeType: "YulFunctionCall",
                          src: "26972:18:7",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "26972:18:7",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "26967:1:7",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "26960:6:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "26960:9:7",
                  },
                  nodeType: "YulIf",
                  src: "26957:35:7",
                },
                {
                  nodeType: "YulAssignment",
                  src: "27002:14:7",
                  value: {
                    arguments: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "27011:1:7",
                      },
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "27014:1:7",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "27007:3:7",
                    },
                    nodeType: "YulFunctionCall",
                    src: "27007:9:7",
                  },
                  variableNames: [
                    {
                      name: "r",
                      nodeType: "YulIdentifier",
                      src: "27002:1:7",
                    },
                  ],
                },
              ],
            },
            name: "checked_div_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "x",
                nodeType: "YulTypedName",
                src: "26868:1:7",
                type: "",
              },
              {
                name: "y",
                nodeType: "YulTypedName",
                src: "26871:1:7",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "r",
                nodeType: "YulTypedName",
                src: "26877:1:7",
                type: "",
              },
            ],
            src: "26837:185:7",
          },
        ],
      },
      contents:
        '{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_array$_t_bytes32_$dyn_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := mul(length, 0x20)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes32(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_bytes32(value) {\n        if iszero(eq(value, cleanup_t_bytes32(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes32(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes32(value)\n    }\n\n    // bytes32[]\n    function abi_decode_available_length_t_array$_t_bytes32_$dyn_memory_ptr(offset, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_array$_t_bytes32_$dyn_memory_ptr(length))\n        let dst := array\n\n        mstore(array, length)\n        dst := add(array, 0x20)\n\n        let srcEnd := add(offset, mul(length, 0x20))\n        if gt(srcEnd, end) {\n            revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef()\n        }\n        for { let src := offset } lt(src, srcEnd) { src := add(src, 0x20) }\n        {\n\n            let elementPos := src\n\n            mstore(dst, abi_decode_t_bytes32(elementPos, end))\n            dst := add(dst, 0x20)\n        }\n    }\n\n    // bytes32[]\n    function abi_decode_t_array$_t_bytes32_$dyn_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_array$_t_bytes32_$dyn_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_array$_t_bytes32_$dyn_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_array$_t_bytes32_$dyn_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() {\n        revert(0, 0)\n    }\n\n    // bytes32[]\n    function abi_decode_t_array$_t_bytes32_$dyn_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x20)), end) { revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() }\n    }\n\n    function abi_decode_tuple_t_addresst_array$_t_bytes32_$dyn_calldata_ptr(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1, value2 := abi_decode_t_array$_t_bytes32_$dyn_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: decreased allowance below")\n\n        mstore(add(memPtr, 32), " zero")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03(memPtr) {\n\n        mstore(add(memPtr, 0), "Claim phase has ended.")\n\n    }\n\n    function abi_encode_t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9(memPtr) {\n\n        mstore(add(memPtr, 0), "Address has already claimed.")\n\n    }\n\n    function abi_encode_t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a(memPtr) {\n\n        mstore(add(memPtr, 0), "Hex Address is Not Claimable")\n\n    }\n\n    function abi_encode_t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function cleanup_t_rational_1000_by_1(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_rational_1000_by_1_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_rational_1000_by_1(value)))\n    }\n\n    function abi_encode_t_rational_1000_by_1_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, convert_t_rational_1000_by_1_to_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_rational_1000_by_1__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_rational_1000_by_1_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: approve from the zero add")\n\n        mstore(add(memPtr, 32), "ress")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: approve to the zero addre")\n\n        mstore(add(memPtr, 32), "ss")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: mint to the zero address")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function shift_left_96(value) -> newValue {\n        newValue :=\n\n        shl(96, value)\n\n    }\n\n    function leftAlign_t_uint160(value) -> aligned {\n        aligned := shift_left_96(value)\n    }\n\n    function leftAlign_t_address(value) -> aligned {\n        aligned := leftAlign_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_address(cleanup_t_address(value)))\n    }\n\n    function abi_encode_tuple_packed_t_address__to_t_address__nonPadded_inplace_fromStack_reversed(pos , value0) -> end {\n\n        abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value0,  pos)\n        pos := add(pos, 20)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486(memPtr) {\n\n        mstore(add(memPtr, 0), "Invalid Proof")\n\n    }\n\n    function abi_encode_t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: insufficient allowance")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: transfer from the zero ad")\n\n        mstore(add(memPtr, 32), "dress")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: transfer to the zero addr")\n\n        mstore(add(memPtr, 32), "ess")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), "ERC20: transfer amount exceeds b")\n\n        mstore(add(memPtr, 32), "alance")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n}\n',
      id: 7,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap:
    "218:8143:6:-:0;;;1127:42;1097:72;;;;;;;;;;;;;;;;;;;;1592:73;;;;;;;;1622:42;1592:73;;;;;;;;;;;;;;;:::i;:::-;;284:128;;;;;;;;;;1978:113:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2052:5;2044;:13;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;:::i;:::-;;1978:113;;353:15:6::1;339:11;:29;;;;398:7;388;:5;;;:7;;:::i;:::-;:17;;;;:::i;:::-;378:27;;;;::::0;::::1;218:8143:::0;;6341:100;6375:7;6428:6;6419;6401:15;:24;;;;:::i;:::-;:33;;;;:::i;:::-;6394:40;;6341:100;:::o;218:8143::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:99:7:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5234:180::-;5282:77;5279:1;5272:88;5379:4;5376:1;5369:15;5403:4;5400:1;5393:15;5420:305;5460:3;5479:20;5497:1;5479:20;:::i;:::-;5474:25;;5513:20;5531:1;5513:20;:::i;:::-;5508:25;;5667:1;5599:66;5595:74;5592:1;5589:81;5586:107;;;5673:18;;:::i;:::-;5586:107;5717:1;5714;5710:9;5703:16;;5420:305;;;;:::o;5731:180::-;5779:77;5776:1;5769:88;5876:4;5873:1;5866:15;5900:4;5897:1;5890:15;5917:185;5957:1;5974:20;5992:1;5974:20;:::i;:::-;5969:25;;6008:20;6026:1;6008:20;:::i;:::-;6003:25;;6047:1;6037:35;;6052:18;;:::i;:::-;6037:35;6094:1;6091;6087:9;6082:14;;5917:185;;;;:::o;6108:348::-;6148:7;6171:20;6189:1;6171:20;:::i;:::-;6166:25;;6205:20;6223:1;6205:20;:::i;:::-;6200:25;;6393:1;6325:66;6321:74;6318:1;6315:81;6310:1;6303:9;6296:17;6292:105;6289:131;;;6400:18;;:::i;:::-;6289:131;6448:1;6445;6441:9;6430:20;;6108:348;;;;:::o;218:8143:6:-;;;;;;;;;;;;",
  deployedSourceMap:
    "218:8143:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:2;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1592:73:6;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7763:596;;;:::i;:::-;;3757:191;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3244:106:2;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5192:286;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6490:235:6;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2366:135;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5873:234:2;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1097:72:6;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3215:119;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3408:125:2;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1932:42:6;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2660:115;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2367:102:2;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6594:427;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3729:189;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5549:708:6;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3976:149:2;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2934:123:6;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2156:98:2;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;4532:13;4548:12;:10;:12::i;:::-;4532:28;;4570:32;4579:5;4586:7;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;:::o;1592:73:6:-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7763:596::-;8079:17;8111:19;8099:9;:31;;;;:::i;:::-;8079:51;;8159:18;1715:20;8180:9;:26;;;;:::i;:::-;8159:47;;8239:29;8245:10;8257;8239:5;:29::i;:::-;8319:12;;;;;;;;;;;8311:30;;:41;8342:9;8311:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7796:563;;7763:596::o;3757:191::-;3876:4;3903:38;3926:7;3935:5;3903:22;:38::i;:::-;3896:45;;3757:191;;;;:::o;3244:106:2:-;3305:7;3331:12;;3324:19;;3244:106;:::o;5192:286::-;5319:4;5335:15;5353:12;:10;:12::i;:::-;5335:30;;5375:38;5391:4;5397:7;5406:6;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;5467:4;5460:11;;;5192:286;;;;;:::o;6490:235:6:-;6544:4;6565:6;6574:1;6565:10;;6560:137;6581:15;6577:1;:19;6560:137;;;6636:5;6621:20;;:8;6630:1;6621:11;;;;;;;:::i;:::-;;;;;;;;;;;;;:20;;;6617:70;;6668:4;6661:11;;;;;6617:70;6598:3;;;;;:::i;:::-;;;;6560:137;;;;6713:5;6706:12;;6490:235;;;;:::o;2366:135::-;2464:5;2492:2;2485:9;;2366:135;:::o;5873:234:2:-;5961:4;5977:13;5993:12;:10;:12::i;:::-;5977:28;;6015:64;6024:5;6031:7;6068:10;6040:25;6050:5;6057:7;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;:::-;6096:4;6089:11;;;5873:234;;;;:::o;1097:72:6:-;;;;;;;;;;;;;:::o;3215:119::-;3284:7;3314:13;:11;:13::i;:::-;3307:20;;3215:119;:::o;3408:125:2:-;3482:7;3508:9;:18;3518:7;3508:18;;;;;;;;;;;;;;;;3501:25;;3408:125;;;:::o;1932:42:6:-;;;;;;;;;;;;;;;;;;;;;;:::o;2660:115::-;2727:7;2757:11;;2750:18;;2660:115;:::o;2367:102:2:-;2423:13;2455:7;2448:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2367:102;:::o;6594:427::-;6687:4;6703:13;6719:12;:10;:12::i;:::-;6703:28;;6741:24;6768:25;6778:5;6785:7;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;:::-;7010:4;7003:11;;;;6594:427;;;;:::o;3729:189::-;3808:4;3824:13;3840:12;:10;:12::i;:::-;3824:28;;3862;3872:5;3879:2;3883:6;3862:9;:28::i;:::-;3907:4;3900:11;;;3729:189;;;;:::o;5549:708:6:-;1028:3;5641:13;:11;:13::i;:::-;:33;;5633:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;5720:10;:14;5731:2;5720:14;;;;;;;;;;;;;;;;;;;;;;;;;5719:15;5711:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;5785:33;5808:2;5812:5;;5785:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:22;:33::i;:::-;5777:74;;;;;;;;;;;;:::i;:::-;;;;;;;;;6003:22;6023:1;6003:15;;:19;;:22;;;;:::i;:::-;5985:15;:40;;;;6130:36;6136:10;6148:17;6130:5;:36::i;:::-;6233:10;6227:23;;;6245:4;6227:23;;;;;;:::i;:::-;;;;;;;;5549:708;;;:::o;3976:149:2:-;4065:7;4091:11;:18;4103:5;4091:18;;;;;;;;;;;;;;;:27;4110:7;4091:27;;;;;;;;;;;;;;;;4084:34;;3976:149;;;;:::o;2934:123:6:-;3005:7;3035:15;;3028:22;;2934:123;:::o;640:96:5:-;693:7;719:10;712:17;;640:96;:::o;10119:370:2:-;10267:1;10250:19;;:5;:19;;;10242:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10347:1;10328:21;;:7;:21;;;10320:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10429:6;10399:11;:18;10411:5;10399:18;;;;;;;;;;;;;;;:27;10418:7;10399:27;;;;;;;;;;;;;;;:36;;;;10466:7;10450:32;;10459:5;10450:32;;;10475:6;10450:32;;;;;;:::i;:::-;;;;;;;;10119:370;;;:::o;8411:389::-;8513:1;8494:21;;:7;:21;;;8486:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8562:49;8591:1;8595:7;8604:6;8562:20;:49::i;:::-;8638:6;8622:12;;:22;;;;;;;:::i;:::-;;;;;;;;8676:6;8654:9;:18;8664:7;8654:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8718:7;8697:37;;8714:1;8697:37;;;8727:6;8697:37;;;;;;:::i;:::-;;;;;;;;8745:48;8773:1;8777:7;8786:6;8745:19;:48::i;:::-;8411:389;;:::o;3954:379:6:-;4074:4;4094:12;4136:7;4119:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;4109:36;;;;;;4094:51;;4193:49;4212:5;733:66;4219:16;;4237:4;4193:18;:49::i;:::-;4185:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;4277:49;4296:5;733:66;4303:16;;4321:4;4277:18;:49::i;:::-;4270:56;;;3954:379;;;;:::o;10770:441:2:-;10900:24;10927:25;10937:5;10944:7;10927:9;:25::i;:::-;10900:52;;10986:17;10966:16;:37;10962:243;;11047:6;11027:16;:26;;11019:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11129:51;11138:5;11145:7;11173:6;11154:16;:25;11129:8;:51::i;:::-;10962:243;10890:321;10770:441;;;:::o;7484:651::-;7626:1;7610:18;;:4;:18;;;7602:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7702:1;7688:16;;:2;:16;;;7680:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7755:38;7776:4;7782:2;7786:6;7755:20;:38::i;:::-;7804:19;7826:9;:15;7836:4;7826:15;;;;;;;;;;;;;;;;7804:37;;7874:6;7859:11;:21;;7851:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7989:6;7975:11;:20;7957:9;:15;7967:4;7957:15;;;;;;;;;;;;;;;:38;;;;8032:6;8015:9;:13;8025:2;8015:13;;;;;;;;;;;;;;;;:23;;;;;;;:::i;:::-;;;;;;;;8069:2;8054:26;;8063:4;8054:26;;;8073:6;8054:26;;;;;;:::i;:::-;;;;;;;;8091:37;8111:4;8117:2;8121:6;8091:19;:37::i;:::-;7592:543;7484:651;;;:::o;3340:153:6:-;3410:7;3440:46;3479:6;3441:32;3461:11;;3441:15;:19;;:32;;;;:::i;:::-;3440:38;;:46;;;;:::i;:::-;3433:53;;3340:153;:::o;2755:96:1:-;2813:7;2843:1;2839;:5;;;;:::i;:::-;2832:12;;2755:96;;;;:::o;11795:121:2:-;;;;:::o;12504:120::-;;;;:::o;1153:184:0:-;1274:4;1326;1297:25;1310:5;1317:4;1297:12;:25::i;:::-;:33;1290:40;;1153:184;;;;;:::o;3122:96:1:-;3180:7;3210:1;3206;:5;;;;:::i;:::-;3199:12;;3122:96;;;;:::o;3850:::-;3908:7;3938:1;3934;:5;;;;:::i;:::-;3927:12;;3850:96;;;;:::o;1991:290:0:-;2074:7;2093:20;2116:4;2093:27;;2135:9;2130:116;2154:5;:12;2150:1;:16;2130:116;;;2202:33;2212:12;2226:5;2232:1;2226:8;;;;;;;;:::i;:::-;;;;;;;;2202:9;:33::i;:::-;2187:48;;2168:3;;;;;:::i;:::-;;;;2130:116;;;;2262:12;2255:19;;;1991:290;;;;:::o;8054:147::-;8117:7;8147:1;8143;:5;:51;;8174:20;8189:1;8192;8174:14;:20::i;:::-;8143:51;;;8151:20;8166:1;8169;8151:14;:20::i;:::-;8143:51;8136:58;;8054:147;;;;:::o;8207:261::-;8275:13;8379:1;8373:4;8366:15;8407:1;8401:4;8394:15;8447:4;8441;8431:21;8422:30;;8207:261;;;;:::o;7:99:7:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1397:75::-;1430:6;1463:2;1457:9;1447:19;;1397:75;:::o;1478:117::-;1587:1;1584;1577:12;1601:117;1710:1;1707;1700:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:329::-;3553:6;3602:2;3590:9;3581:7;3577:23;3573:32;3570:119;;;3608:79;;:::i;:::-;3570:119;3728:1;3753:53;3798:7;3789:6;3778:9;3774:22;3753:53;:::i;:::-;3743:63;;3699:117;3494:329;;;;:::o;3829:118::-;3916:24;3934:5;3916:24;:::i;:::-;3911:3;3904:37;3829:118;;:::o;3953:222::-;4046:4;4084:2;4073:9;4069:18;4061:26;;4097:71;4165:1;4154:9;4150:17;4141:6;4097:71;:::i;:::-;3953:222;;;;:::o;4181:117::-;4290:1;4287;4280:12;4304:180;4352:77;4349:1;4342:88;4449:4;4446:1;4439:15;4473:4;4470:1;4463:15;4490:281;4573:27;4595:4;4573:27;:::i;:::-;4565:6;4561:40;4703:6;4691:10;4688:22;4667:18;4655:10;4652:34;4649:62;4646:88;;;4714:18;;:::i;:::-;4646:88;4754:10;4750:2;4743:22;4533:238;4490:281;;:::o;4777:129::-;4811:6;4838:20;;:::i;:::-;4828:30;;4867:33;4895:4;4887:6;4867:33;:::i;:::-;4777:129;;;:::o;4912:311::-;4989:4;5079:18;5071:6;5068:30;5065:56;;;5101:18;;:::i;:::-;5065:56;5151:4;5143:6;5139:17;5131:25;;5211:4;5205;5201:15;5193:23;;4912:311;;;:::o;5229:117::-;5338:1;5335;5328:12;5352:77;5389:7;5418:5;5407:16;;5352:77;;;:::o;5435:122::-;5508:24;5526:5;5508:24;:::i;:::-;5501:5;5498:35;5488:63;;5547:1;5544;5537:12;5488:63;5435:122;:::o;5563:139::-;5609:5;5647:6;5634:20;5625:29;;5663:33;5690:5;5663:33;:::i;:::-;5563:139;;;;:::o;5725:710::-;5821:5;5846:81;5862:64;5919:6;5862:64;:::i;:::-;5846:81;:::i;:::-;5837:90;;5947:5;5976:6;5969:5;5962:21;6010:4;6003:5;5999:16;5992:23;;6063:4;6055:6;6051:17;6043:6;6039:30;6092:3;6084:6;6081:15;6078:122;;;6111:79;;:::i;:::-;6078:122;6226:6;6209:220;6243:6;6238:3;6235:15;6209:220;;;6318:3;6347:37;6380:3;6368:10;6347:37;:::i;:::-;6342:3;6335:50;6414:4;6409:3;6405:14;6398:21;;6285:144;6269:4;6264:3;6260:14;6253:21;;6209:220;;;6213:21;5827:608;;5725:710;;;;;:::o;6458:370::-;6529:5;6578:3;6571:4;6563:6;6559:17;6555:27;6545:122;;6586:79;;:::i;:::-;6545:122;6703:6;6690:20;6728:94;6818:3;6810:6;6803:4;6795:6;6791:17;6728:94;:::i;:::-;6719:103;;6535:293;6458:370;;;;:::o;6834:684::-;6927:6;6935;6984:2;6972:9;6963:7;6959:23;6955:32;6952:119;;;6990:79;;:::i;:::-;6952:119;7110:1;7135:53;7180:7;7171:6;7160:9;7156:22;7135:53;:::i;:::-;7125:63;;7081:117;7265:2;7254:9;7250:18;7237:32;7296:18;7288:6;7285:30;7282:117;;;7318:79;;:::i;:::-;7282:117;7423:78;7493:7;7484:6;7473:9;7469:22;7423:78;:::i;:::-;7413:88;;7208:303;6834:684;;;;;:::o;7524:118::-;7611:24;7629:5;7611:24;:::i;:::-;7606:3;7599:37;7524:118;;:::o;7648:222::-;7741:4;7779:2;7768:9;7764:18;7756:26;;7792:71;7860:1;7849:9;7845:17;7836:6;7792:71;:::i;:::-;7648:222;;;;:::o;7876:619::-;7953:6;7961;7969;8018:2;8006:9;7997:7;7993:23;7989:32;7986:119;;;8024:79;;:::i;:::-;7986:119;8144:1;8169:53;8214:7;8205:6;8194:9;8190:22;8169:53;:::i;:::-;8159:63;;8115:117;8271:2;8297:53;8342:7;8333:6;8322:9;8318:22;8297:53;:::i;:::-;8287:63;;8242:118;8399:2;8425:53;8470:7;8461:6;8450:9;8446:22;8425:53;:::i;:::-;8415:63;;8370:118;7876:619;;;;;:::o;8501:329::-;8560:6;8609:2;8597:9;8588:7;8584:23;8580:32;8577:119;;;8615:79;;:::i;:::-;8577:119;8735:1;8760:53;8805:7;8796:6;8785:9;8781:22;8760:53;:::i;:::-;8750:63;;8706:117;8501:329;;;;:::o;8836:86::-;8871:7;8911:4;8904:5;8900:16;8889:27;;8836:86;;;:::o;8928:112::-;9011:22;9027:5;9011:22;:::i;:::-;9006:3;8999:35;8928:112;;:::o;9046:214::-;9135:4;9173:2;9162:9;9158:18;9150:26;;9186:67;9250:1;9239:9;9235:17;9226:6;9186:67;:::i;:::-;9046:214;;;;:::o;9266:117::-;9375:1;9372;9365:12;9406:568;9479:8;9489:6;9539:3;9532:4;9524:6;9520:17;9516:27;9506:122;;9547:79;;:::i;:::-;9506:122;9660:6;9647:20;9637:30;;9690:18;9682:6;9679:30;9676:117;;;9712:79;;:::i;:::-;9676:117;9826:4;9818:6;9814:17;9802:29;;9880:3;9872:4;9864:6;9860:17;9850:8;9846:32;9843:41;9840:128;;;9887:79;;:::i;:::-;9840:128;9406:568;;;;;:::o;9980:704::-;10075:6;10083;10091;10140:2;10128:9;10119:7;10115:23;10111:32;10108:119;;;10146:79;;:::i;:::-;10108:119;10266:1;10291:53;10336:7;10327:6;10316:9;10312:22;10291:53;:::i;:::-;10281:63;;10237:117;10421:2;10410:9;10406:18;10393:32;10452:18;10444:6;10441:30;10438:117;;;10474:79;;:::i;:::-;10438:117;10587:80;10659:7;10650:6;10639:9;10635:22;10587:80;:::i;:::-;10569:98;;;;10364:313;9980:704;;;;;:::o;10690:474::-;10758:6;10766;10815:2;10803:9;10794:7;10790:23;10786:32;10783:119;;;10821:79;;:::i;:::-;10783:119;10941:1;10966:53;11011:7;11002:6;10991:9;10987:22;10966:53;:::i;:::-;10956:63;;10912:117;11068:2;11094:53;11139:7;11130:6;11119:9;11115:22;11094:53;:::i;:::-;11084:63;;11039:118;10690:474;;;;;:::o;11170:180::-;11218:77;11215:1;11208:88;11315:4;11312:1;11305:15;11339:4;11336:1;11329:15;11356:320;11400:6;11437:1;11431:4;11427:12;11417:22;;11484:1;11478:4;11474:12;11505:18;11495:81;;11561:4;11553:6;11549:17;11539:27;;11495:81;11623:2;11615:6;11612:14;11592:18;11589:38;11586:84;;11642:18;;:::i;:::-;11586:84;11407:269;11356:320;;;:::o;11682:180::-;11730:77;11727:1;11720:88;11827:4;11824:1;11817:15;11851:4;11848:1;11841:15;11868:348;11908:7;11931:20;11949:1;11931:20;:::i;:::-;11926:25;;11965:20;11983:1;11965:20;:::i;:::-;11960:25;;12153:1;12085:66;12081:74;12078:1;12075:81;12070:1;12063:9;12056:17;12052:105;12049:131;;;12160:18;;:::i;:::-;12049:131;12208:1;12205;12201:9;12190:20;;11868:348;;;;:::o;12222:180::-;12270:77;12267:1;12260:88;12367:4;12364:1;12357:15;12391:4;12388:1;12381:15;12408:233;12447:3;12470:24;12488:5;12470:24;:::i;:::-;12461:33;;12516:66;12509:5;12506:77;12503:103;;12586:18;;:::i;:::-;12503:103;12633:1;12626:5;12622:13;12615:20;;12408:233;;;:::o;12647:305::-;12687:3;12706:20;12724:1;12706:20;:::i;:::-;12701:25;;12740:20;12758:1;12740:20;:::i;:::-;12735:25;;12894:1;12826:66;12822:74;12819:1;12816:81;12813:107;;;12900:18;;:::i;:::-;12813:107;12944:1;12941;12937:9;12930:16;;12647:305;;;;:::o;12958:224::-;13098:34;13094:1;13086:6;13082:14;13075:58;13167:7;13162:2;13154:6;13150:15;13143:32;12958:224;:::o;13188:366::-;13330:3;13351:67;13415:2;13410:3;13351:67;:::i;:::-;13344:74;;13427:93;13516:3;13427:93;:::i;:::-;13545:2;13540:3;13536:12;13529:19;;13188:366;;;:::o;13560:419::-;13726:4;13764:2;13753:9;13749:18;13741:26;;13813:9;13807:4;13803:20;13799:1;13788:9;13784:17;13777:47;13841:131;13967:4;13841:131;:::i;:::-;13833:139;;13560:419;;;:::o;13985:172::-;14125:24;14121:1;14113:6;14109:14;14102:48;13985:172;:::o;14163:366::-;14305:3;14326:67;14390:2;14385:3;14326:67;:::i;:::-;14319:74;;14402:93;14491:3;14402:93;:::i;:::-;14520:2;14515:3;14511:12;14504:19;;14163:366;;;:::o;14535:419::-;14701:4;14739:2;14728:9;14724:18;14716:26;;14788:9;14782:4;14778:20;14774:1;14763:9;14759:17;14752:47;14816:131;14942:4;14816:131;:::i;:::-;14808:139;;14535:419;;;:::o;14960:178::-;15100:30;15096:1;15088:6;15084:14;15077:54;14960:178;:::o;15144:366::-;15286:3;15307:67;15371:2;15366:3;15307:67;:::i;:::-;15300:74;;15383:93;15472:3;15383:93;:::i;:::-;15501:2;15496:3;15492:12;15485:19;;15144:366;;;:::o;15516:419::-;15682:4;15720:2;15709:9;15705:18;15697:26;;15769:9;15763:4;15759:20;15755:1;15744:9;15740:17;15733:47;15797:131;15923:4;15797:131;:::i;:::-;15789:139;;15516:419;;;:::o;15941:178::-;16081:30;16077:1;16069:6;16065:14;16058:54;15941:178;:::o;16125:366::-;16267:3;16288:67;16352:2;16347:3;16288:67;:::i;:::-;16281:74;;16364:93;16453:3;16364:93;:::i;:::-;16482:2;16477:3;16473:12;16466:19;;16125:366;;;:::o;16497:419::-;16663:4;16701:2;16690:9;16686:18;16678:26;;16750:9;16744:4;16740:20;16736:1;16725:9;16721:17;16714:47;16778:131;16904:4;16778:131;:::i;:::-;16770:139;;16497:419;;;:::o;16922:88::-;16970:7;16999:5;16988:16;;16922:88;;;:::o;17016:60::-;17044:3;17065:5;17058:12;;17016:60;;;:::o;17082:164::-;17143:9;17176:64;17194:45;17203:35;17232:5;17203:35;:::i;:::-;17194:45;:::i;:::-;17176:64;:::i;:::-;17163:77;;17082:164;;;:::o;17252:153::-;17350:48;17392:5;17350:48;:::i;:::-;17345:3;17338:61;17252:153;;:::o;17411:244::-;17515:4;17553:2;17542:9;17538:18;17530:26;;17566:82;17645:1;17634:9;17630:17;17621:6;17566:82;:::i;:::-;17411:244;;;;:::o;17661:223::-;17801:34;17797:1;17789:6;17785:14;17778:58;17870:6;17865:2;17857:6;17853:15;17846:31;17661:223;:::o;17890:366::-;18032:3;18053:67;18117:2;18112:3;18053:67;:::i;:::-;18046:74;;18129:93;18218:3;18129:93;:::i;:::-;18247:2;18242:3;18238:12;18231:19;;17890:366;;;:::o;18262:419::-;18428:4;18466:2;18455:9;18451:18;18443:26;;18515:9;18509:4;18505:20;18501:1;18490:9;18486:17;18479:47;18543:131;18669:4;18543:131;:::i;:::-;18535:139;;18262:419;;;:::o;18687:221::-;18827:34;18823:1;18815:6;18811:14;18804:58;18896:4;18891:2;18883:6;18879:15;18872:29;18687:221;:::o;18914:366::-;19056:3;19077:67;19141:2;19136:3;19077:67;:::i;:::-;19070:74;;19153:93;19242:3;19153:93;:::i;:::-;19271:2;19266:3;19262:12;19255:19;;18914:366;;;:::o;19286:419::-;19452:4;19490:2;19479:9;19475:18;19467:26;;19539:9;19533:4;19529:20;19525:1;19514:9;19510:17;19503:47;19567:131;19693:4;19567:131;:::i;:::-;19559:139;;19286:419;;;:::o;19711:181::-;19851:33;19847:1;19839:6;19835:14;19828:57;19711:181;:::o;19898:366::-;20040:3;20061:67;20125:2;20120:3;20061:67;:::i;:::-;20054:74;;20137:93;20226:3;20137:93;:::i;:::-;20255:2;20250:3;20246:12;20239:19;;19898:366;;;:::o;20270:419::-;20436:4;20474:2;20463:9;20459:18;20451:26;;20523:9;20517:4;20513:20;20509:1;20498:9;20494:17;20487:47;20551:131;20677:4;20551:131;:::i;:::-;20543:139;;20270:419;;;:::o;20695:94::-;20728:8;20776:5;20772:2;20768:14;20747:35;;20695:94;;;:::o;20795:::-;20834:7;20863:20;20877:5;20863:20;:::i;:::-;20852:31;;20795:94;;;:::o;20895:100::-;20934:7;20963:26;20983:5;20963:26;:::i;:::-;20952:37;;20895:100;;;:::o;21001:157::-;21106:45;21126:24;21144:5;21126:24;:::i;:::-;21106:45;:::i;:::-;21101:3;21094:58;21001:157;;:::o;21164:256::-;21276:3;21291:75;21362:3;21353:6;21291:75;:::i;:::-;21391:2;21386:3;21382:12;21375:19;;21411:3;21404:10;;21164:256;;;;:::o;21426:163::-;21566:15;21562:1;21554:6;21550:14;21543:39;21426:163;:::o;21595:366::-;21737:3;21758:67;21822:2;21817:3;21758:67;:::i;:::-;21751:74;;21834:93;21923:3;21834:93;:::i;:::-;21952:2;21947:3;21943:12;21936:19;;21595:366;;;:::o;21967:419::-;22133:4;22171:2;22160:9;22156:18;22148:26;;22220:9;22214:4;22210:20;22206:1;22195:9;22191:17;22184:47;22248:131;22374:4;22248:131;:::i;:::-;22240:139;;21967:419;;;:::o;22392:179::-;22532:31;22528:1;22520:6;22516:14;22509:55;22392:179;:::o;22577:366::-;22719:3;22740:67;22804:2;22799:3;22740:67;:::i;:::-;22733:74;;22816:93;22905:3;22816:93;:::i;:::-;22934:2;22929:3;22925:12;22918:19;;22577:366;;;:::o;22949:419::-;23115:4;23153:2;23142:9;23138:18;23130:26;;23202:9;23196:4;23192:20;23188:1;23177:9;23173:17;23166:47;23230:131;23356:4;23230:131;:::i;:::-;23222:139;;22949:419;;;:::o;23374:224::-;23514:34;23510:1;23502:6;23498:14;23491:58;23583:7;23578:2;23570:6;23566:15;23559:32;23374:224;:::o;23604:366::-;23746:3;23767:67;23831:2;23826:3;23767:67;:::i;:::-;23760:74;;23843:93;23932:3;23843:93;:::i;:::-;23961:2;23956:3;23952:12;23945:19;;23604:366;;;:::o;23976:419::-;24142:4;24180:2;24169:9;24165:18;24157:26;;24229:9;24223:4;24219:20;24215:1;24204:9;24200:17;24193:47;24257:131;24383:4;24257:131;:::i;:::-;24249:139;;23976:419;;;:::o;24401:222::-;24541:34;24537:1;24529:6;24525:14;24518:58;24610:5;24605:2;24597:6;24593:15;24586:30;24401:222;:::o;24629:366::-;24771:3;24792:67;24856:2;24851:3;24792:67;:::i;:::-;24785:74;;24868:93;24957:3;24868:93;:::i;:::-;24986:2;24981:3;24977:12;24970:19;;24629:366;;;:::o;25001:419::-;25167:4;25205:2;25194:9;25190:18;25182:26;;25254:9;25248:4;25244:20;25240:1;25229:9;25225:17;25218:47;25282:131;25408:4;25282:131;:::i;:::-;25274:139;;25001:419;;;:::o;25426:225::-;25566:34;25562:1;25554:6;25550:14;25543:58;25635:8;25630:2;25622:6;25618:15;25611:33;25426:225;:::o;25657:366::-;25799:3;25820:67;25884:2;25879:3;25820:67;:::i;:::-;25813:74;;25896:93;25985:3;25896:93;:::i;:::-;26014:2;26009:3;26005:12;25998:19;;25657:366;;;:::o;26029:419::-;26195:4;26233:2;26222:9;26218:18;26210:26;;26282:9;26276:4;26272:20;26268:1;26257:9;26253:17;26246:47;26310:131;26436:4;26310:131;:::i;:::-;26302:139;;26029:419;;;:::o;26454:191::-;26494:4;26514:20;26532:1;26514:20;:::i;:::-;26509:25;;26548:20;26566:1;26548:20;:::i;:::-;26543:25;;26587:1;26584;26581:8;26578:34;;;26592:18;;:::i;:::-;26578:34;26637:1;26634;26630:9;26622:17;;26454:191;;;;:::o;26651:180::-;26699:77;26696:1;26689:88;26796:4;26793:1;26786:15;26820:4;26817:1;26810:15;26837:185;26877:1;26894:20;26912:1;26894:20;:::i;:::-;26889:25;;26928:20;26946:1;26928:20;:::i;:::-;26923:25;;26967:1;26957:35;;26972:18;;:::i;:::-;26957:35;27014:1;27011;27007:9;27002:14;;26837:185;;;;:::o",
  source:
    'pragma solidity ^0.8.13;\n\nimport "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";\nimport "@openzeppelin/contracts/utils/math/SafeMath.sol";\nimport "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";\n\ncontract PulseInu is ERC20 {\n    using SafeMath for uint256;\n\n    constructor() ERC20("PulseInu", "PINU")\n    {\n         _launchTime = block.timestamp;\n        MINTEND = today() + 1 hours;\n    }\n\n    /// ============== Constants ==============\n\n    /* Root hash of the HEX Stakers Merkle tree */\n    // bytes32 internal constant MERKLE_TREE_ROOT = 0x8f4e1c18aa0323d567b9abc6cf64f9626e82ef1b41a404b3f48bfa92eecb9142;\n    // TODO: Add real hex staker addresses\n    //\n    bytes32 internal constant MERKLE_TREE_ROOT = 0xabe2dbc5c997b27447881309f82a7a0fcb9a1a2cbbe327f75db373dd0e9457b3;\n\n    /* Benevolent Address (PINU TEST) */\n    // address internal constant BENEVOLANT_ADDR = 0xE8088619b7796E7dB519e36970E8De2568a13397;\n\n    /* Length of airdrop claim phase */\n    uint256 internal constant CLAIM_PHASE_DAYS = 100;\n\n    /* Mint Address (MA) */\n    // TODO: Add mint address\n\n    address public MINT_ADDRESS = 0x07922Ea567F31Ce10bFE49e8809b12f86F7cEc9c;\n\n    /// ============== Contract Deploy ==============\n\n    /* Time of contract launch, set in constructor */\n    uint256 private _launchTime;\n\n    /* Number of airdrop token claims, initial 0*/\n    uint256 private _numberOfClaims;\n\n    /* HEX OA PLSD BA mint flag, initial false */\n    bool private _BaTokensMinted;\n\n    /// ============== Mint Related ==============\n\n    // Find and supply tesnet addresses\n    //\n    address[1] public ACCEPTED = [0x8a810ea8B121d08342E9e7696f4a9915cBE494B7];\n\n    uint256 internal constant PINU_PER_PULSE = 10000000000000000000; // 10,000,000 tokens\n\n    // Specific launch window\n    uint immutable MINTEND;\n\n    /// ============== Mutable Storage ==============\n\n    /* Mapping of addresses who have claimed tokens */\n    mapping(address => bool) public hasClaimed;\n\n    /// ============== Events ==============\n\n    /// @dev Emitted after a successful token claim\n    /// @param to recipient of claim\n    /// @param amount of tokens claimed\n\n    event Claim(address indexed to, uint256 amount);\n\n    /// ============== Functions ==============\n\n    /*\n     * @dev PUBLIC FUNCTION: Overridden decimals function\n     * @return contract decimals\n     */\n    function decimals()\n        public\n        view\n        virtual\n        override\n        returns (uint8)\n    {\n        return 12;\n    }\n\n    /*\n     * @dev PUBLIC FUNCTION: External helper for returning the contract launch time\n     * @return The contract launch time in epoch time\n     */\n    function launchTime()\n        public\n        view\n        returns (uint256)\n    {\n        return _launchTime;\n    }\n\n    /*\n     * @dev PUBLIC FUNCTION: External helper for returning the number of airdrop claims\n     * @return The total number of airdrop claims\n     */\n    function numberOfClaims()\n        public\n        view\n        returns (uint256)\n    {\n        return _numberOfClaims;\n    }\n\n    /*\n     * @dev PUBLIC FUNCTION: External helper for the current day number since launch time\n     * @return Current day number (zero-based)\n     */\n    function currentDay()\n        external\n        view\n        returns (uint256)\n    {\n        return _currentDay();\n    }\n\n    function _currentDay()\n        internal\n        view\n        returns (uint256)\n    {\n        return (block.timestamp.sub(_launchTime)).div(1 days);\n    }\n\n    /*\n     * @dev PUBLIC FUNCTION: Determine if an address and amount are eligble for the airdrop\n     * @param hexAddr HEX staker address\n     * @param plsdAmount PLSD token amount\n     * @param proof Merkle tree proof\n     * @return true or false\n     */\n    function hexAddressIsClaimable(address hexAddr, bytes32[] memory proof)\n        external\n        pure\n        returns (bool)\n    {\n        return _hexAddressIsClaimable(hexAddr, proof);\n    }\n\n    function _hexAddressIsClaimable(address hexAddr, bytes32[] memory proof)\n        internal\n        pure\n        returns (bool)\n    {\n        bytes32 leaf = keccak256(abi.encodePacked(hexAddr));\n        // bool isValidLeaf =\n        require(MerkleProof.verify(proof, MERKLE_TREE_ROOT, leaf), "Invalid Proof");\n        return MerkleProof.verify(proof, MERKLE_TREE_ROOT, leaf);\n    }\n\n    /*\n     * @dev PUBLIC FUNCTION: Mint HEX Origin & PLSD Benevolant Address tokens. Must be after claim phase has ended. Tokens can only be minted once.\n     */\n    // function mintBaTokens()\n    //     external\n    // {\n    //     // Claim phase must be over // REMOVE FOR TESTING\n    //     // require(_currentDay() > CLAIM_PHASE_DAYS, "Claim phase has not ended.");\n\n    //     // HEX OA & PLSD BA tokens must not have already been minted\n    //     require(!_BaTokensMinted, "Benevolent Address Tokens have already been minted.");\n\n    //     // HEX OA & PLSD BA tokens can only be minted once, set flag\n    //     _BaTokensMinted = true;\n\n    //     // Determine the amount of tokens each address will receive and mint those tokens\n    //     uint256 tokenPayout = 1000; // Set arbitrary for testing\n    //     _mint(BENEVOLANT_ADDR, tokenPayout);\n    // }\n\n    /*\n     * @dev PUBLIC FUNCTION: External function to claim airdrop tokens. Must be before the end of the claim phase.\n     * Tokens can only be minted once per unique address. The address must be within the airdrop set.\n     * @param to HEX staker address\n     * @param amount PLSD token amount\n     * @param proof Merkle tree proof\n     */\n    function claim(address to, bytes32[] calldata proof)\n        external\n    {\n        require(_currentDay() <= CLAIM_PHASE_DAYS, "Claim phase has ended.");\n        require(!hasClaimed[to], "Address has already claimed.");\n        require(_hexAddressIsClaimable(to, proof), "Hex Address is Not Claimable");\n\n        // Set claim flag for address\n        // hasClaimed[to] = true;\n\n        // Increment the number of claims counter\n        _numberOfClaims = _numberOfClaims.add(1);\n\n        // TODO: Decide what the fixed claim amount will be\n        // Mint tokens to address\n        _mint(msg.sender, 10000000000000000); // 10,000 tokens\n\n        // Emit claim event\n        emit Claim(msg.sender, 1000);\n    }\n\n    // ============================== Mint Functions\n    // @dev midnight UTC\n    function today() internal returns(uint256) {\n        return block.timestamp / 1 days * 1 days;\n    }\n\n    // @dev Returns true if accepted token\n    function accepted(address token) public view returns (bool) {\n        for (uint i = 0; i < ACCEPTED.length; i++) {\n            if (ACCEPTED[i] == token) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    // // @dev Mint using accepted TOKEN\n    // function mint(address token, uint256 amount) public {\n\n    //     require(today() <= MINTEND, "Minting window is over");\n    //     require(accepted(token), "This is not an accepted token");\n    //     require(amount > 0, "Amount must be greater than zero");\n\n    //     // Transfer tokens in\n    //     IERC20 erc = IERC20(token);\n\n    //     // Is this the correct address to send it to?\n    //     erc.transferFrom(msg.sender, address(0x07922Ea567F31Ce10bFE49e8809b12f86F7cEc9c), amount);\n\n    //     uint256 pinuMinted;\n\n    //     pinuMinted = amount * PINU_PER_PULSE; // 10,000,000 tokens\n\n    //     // Mint\n    //     _mint(msg.sender, pinuMinted);\n    // }\n\n    // https://levelup.gitconnected.com/minting-your-own-erc-20-tokens-in-ethereum-a477bd38c135\n\n\n    // https://ethereum.stackexchange.com/questions/43362/what-is-msg-value -> How msg Value works\n\n    // User Specifies the amount of PLS they want to use to Mint PINU\n    // PINU Amount is printed to the user\n    //\n    function mint() external payable {\n        // msg.value (in Wei) is the ether sent to the token contract\n        // msg.sender is the account that sends the ether to the token contract\n        // amount is the token bought by the sender\n\n        // require\n        // TODO: Convert MSG.value to PLS from WEI\n        uint256 plsAmount = msg.value * 1000000000000000000; // 1 wei -> 1 PLS\n\n        uint256 pinuMinted = plsAmount * PINU_PER_PULSE;  // 10,000,000 tokens\n\n        _mint(msg.sender, pinuMinted);\n\n        // Pay the mint address\n        payable(MINT_ADDRESS).transfer(msg.value);\n    }\n}\n',
  sourcePath: "/Users/erik/Dev/erik/pulsinu2/contracts/PulseInu.sol",
  ast: {
    absolutePath: "project:/contracts/PulseInu.sol",
    exportedSymbols: {
      Context: [1524],
      ERC20: [1399],
      IERC20: [1477],
      IERC20Metadata: [1502],
      MerkleProof: [501],
      PulseInu: [1829],
      SafeMath: [813],
    },
    id: 1830,
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1526,
        literals: ["solidity", "^", "0.8", ".13"],
        nodeType: "PragmaDirective",
        src: "0:24:6",
      },
      {
        absolutePath: "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        file: "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        id: 1527,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 1830,
        sourceUnit: 1400,
        src: "26:63:6",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath: "@openzeppelin/contracts/utils/math/SafeMath.sol",
        file: "@openzeppelin/contracts/utils/math/SafeMath.sol",
        id: 1528,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 1830,
        sourceUnit: 814,
        src: "90:57:6",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        absolutePath:
          "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol",
        file: "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol",
        id: 1529,
        nameLocation: "-1:-1:-1",
        nodeType: "ImportDirective",
        scope: 1830,
        sourceUnit: 502,
        src: "148:68:6",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 1530,
              name: "ERC20",
              nodeType: "IdentifierPath",
              referencedDeclaration: 1399,
              src: "239:5:6",
            },
            id: 1531,
            nodeType: "InheritanceSpecifier",
            src: "239:5:6",
          },
        ],
        canonicalName: "PulseInu",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 1829,
        linearizedBaseContracts: [1829, 1399, 1502, 1477, 1524],
        name: "PulseInu",
        nameLocation: "227:8:6",
        nodeType: "ContractDefinition",
        nodes: [
          {
            global: false,
            id: 1534,
            libraryName: {
              id: 1532,
              name: "SafeMath",
              nodeType: "IdentifierPath",
              referencedDeclaration: 813,
              src: "257:8:6",
            },
            nodeType: "UsingForDirective",
            src: "251:27:6",
            typeName: {
              id: 1533,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "270:7:6",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
          },
          {
            body: {
              id: 1553,
              nodeType: "Block",
              src: "328:84:6",
              statements: [
                {
                  expression: {
                    id: 1544,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 1541,
                      name: "_launchTime",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1567,
                      src: "339:11:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      expression: {
                        id: 1542,
                        name: "block",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967292,
                        src: "353:5:6",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_block",
                          typeString: "block",
                        },
                      },
                      id: 1543,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "timestamp",
                      nodeType: "MemberAccess",
                      src: "353:15:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "339:29:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 1545,
                  nodeType: "ExpressionStatement",
                  src: "339:29:6",
                },
                {
                  expression: {
                    id: 1551,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 1546,
                      name: "MINTEND",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1583,
                      src: "378:7:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 1550,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        arguments: [],
                        expression: {
                          argumentTypes: [],
                          id: 1547,
                          name: "today",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 1764,
                          src: "388:5:6",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$__$returns$_t_uint256_$",
                            typeString: "function () returns (uint256)",
                          },
                        },
                        id: 1548,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "388:7:6",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "+",
                      rightExpression: {
                        hexValue: "31",
                        id: 1549,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "398:7:6",
                        subdenomination: "hours",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_3600_by_1",
                          typeString: "int_const 3600",
                        },
                        value: "1",
                      },
                      src: "388:17:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "378:27:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 1552,
                  nodeType: "ExpressionStatement",
                  src: "378:27:6",
                },
              ],
            },
            id: 1554,
            implemented: true,
            kind: "constructor",
            modifiers: [
              {
                arguments: [
                  {
                    hexValue: "50756c7365496e75",
                    id: 1537,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "string",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "304:10:6",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_stringliteral_894bb51e8de5459b71a9289e89cf7bb7b0871a4a09021526f4e685c6ac213ac1",
                      typeString: 'literal_string "PulseInu"',
                    },
                    value: "PulseInu",
                  },
                  {
                    hexValue: "50494e55",
                    id: 1538,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "string",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "316:6:6",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_stringliteral_3d2ceaf394fa6e92964ea9df1723d8f6e49b9224aa121d37cdbba8c8e5cbe551",
                      typeString: 'literal_string "PINU"',
                    },
                    value: "PINU",
                  },
                ],
                id: 1539,
                kind: "baseConstructorSpecifier",
                modifierName: {
                  id: 1536,
                  name: "ERC20",
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 1399,
                  src: "298:5:6",
                },
                nodeType: "ModifierInvocation",
                src: "298:25:6",
              },
            ],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1535,
              nodeType: "ParameterList",
              parameters: [],
              src: "295:2:6",
            },
            returnParameters: {
              id: 1540,
              nodeType: "ParameterList",
              parameters: [],
              src: "328:0:6",
            },
            scope: 1829,
            src: "284:128:6",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            constant: true,
            documentation: {
              id: 1555,
              nodeType: "StructuredDocumentation",
              src: "418:44:6",
              text: "============== Constants ==============",
            },
            id: 1558,
            mutability: "constant",
            name: "MERKLE_TREE_ROOT",
            nameLocation: "714:16:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "688:111:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bytes32",
              typeString: "bytes32",
            },
            typeName: {
              id: 1556,
              name: "bytes32",
              nodeType: "ElementaryTypeName",
              src: "688:7:6",
              typeDescriptions: {
                typeIdentifier: "t_bytes32",
                typeString: "bytes32",
              },
            },
            value: {
              hexValue:
                "307861626532646263356339393762323734343738383133303966383261376130666362396131613263626265333237663735646233373364643065393435376233",
              id: 1557,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "733:66:6",
              typeDescriptions: {
                typeIdentifier:
                  "t_rational_77746321359168083019758242117957865557563034300019947776844312812911664060339_by_1",
                typeString: "int_const 7774...(69 digits omitted)...0339",
              },
              value:
                "0xabe2dbc5c997b27447881309f82a7a0fcb9a1a2cbbe327f75db373dd0e9457b3",
            },
            visibility: "internal",
          },
          {
            constant: true,
            id: 1561,
            mutability: "constant",
            name: "CLAIM_PHASE_DAYS",
            nameLocation: "1009:16:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "983:48:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 1559,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "983:7:6",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            value: {
              hexValue: "313030",
              id: 1560,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "1028:3:6",
              typeDescriptions: {
                typeIdentifier: "t_rational_100_by_1",
                typeString: "int_const 100",
              },
              value: "100",
            },
            visibility: "internal",
          },
          {
            constant: false,
            functionSelector: "466c35fc",
            id: 1564,
            mutability: "mutable",
            name: "MINT_ADDRESS",
            nameLocation: "1112:12:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1097:72:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_address",
              typeString: "address",
            },
            typeName: {
              id: 1562,
              name: "address",
              nodeType: "ElementaryTypeName",
              src: "1097:7:6",
              stateMutability: "nonpayable",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
            },
            value: {
              hexValue:
                "307830373932324561353637463331436531306246453439653838303962313266383646376345633963",
              id: 1563,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "1127:42:6",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
              value: "0x07922Ea567F31Ce10bFE49e8809b12f86F7cEc9c",
            },
            visibility: "public",
          },
          {
            constant: false,
            documentation: {
              id: 1565,
              nodeType: "StructuredDocumentation",
              src: "1176:50:6",
              text: "============== Contract Deploy ==============",
            },
            id: 1567,
            mutability: "mutable",
            name: "_launchTime",
            nameLocation: "1301:11:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1285:27:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 1566,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "1285:7:6",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            id: 1569,
            mutability: "mutable",
            name: "_numberOfClaims",
            nameLocation: "1386:15:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1370:31:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 1568,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "1370:7:6",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            id: 1571,
            mutability: "mutable",
            name: "_BaTokensMinted",
            nameLocation: "1471:15:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1458:28:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bool",
              typeString: "bool",
            },
            typeName: {
              id: 1570,
              name: "bool",
              nodeType: "ElementaryTypeName",
              src: "1458:4:6",
              typeDescriptions: {
                typeIdentifier: "t_bool",
                typeString: "bool",
              },
            },
            visibility: "private",
          },
          {
            constant: false,
            documentation: {
              id: 1572,
              nodeType: "StructuredDocumentation",
              src: "1493:47:6",
              text: "============== Mint Related ==============",
            },
            functionSelector: "0ac1c60a",
            id: 1578,
            mutability: "mutable",
            name: "ACCEPTED",
            nameLocation: "1610:8:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1592:73:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_array$_t_address_$1_storage",
              typeString: "address[1]",
            },
            typeName: {
              baseType: {
                id: 1573,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "1592:7:6",
                stateMutability: "nonpayable",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              id: 1575,
              length: {
                hexValue: "31",
                id: 1574,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "number",
                lValueRequested: false,
                nodeType: "Literal",
                src: "1600:1:6",
                typeDescriptions: {
                  typeIdentifier: "t_rational_1_by_1",
                  typeString: "int_const 1",
                },
                value: "1",
              },
              nodeType: "ArrayTypeName",
              src: "1592:10:6",
              typeDescriptions: {
                typeIdentifier: "t_array$_t_address_$1_storage_ptr",
                typeString: "address[1]",
              },
            },
            value: {
              components: [
                {
                  hexValue:
                    "307838613831306561384231323164303833343245396537363936663461393931356342453439344237",
                  id: 1576,
                  isConstant: false,
                  isLValue: false,
                  isPure: true,
                  kind: "number",
                  lValueRequested: false,
                  nodeType: "Literal",
                  src: "1622:42:6",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  value: "0x8a810ea8B121d08342E9e7696f4a9915cBE494B7",
                },
              ],
              id: 1577,
              isConstant: false,
              isInlineArray: true,
              isLValue: false,
              isPure: true,
              lValueRequested: false,
              nodeType: "TupleExpression",
              src: "1621:44:6",
              typeDescriptions: {
                typeIdentifier: "t_array$_t_address_$1_memory_ptr",
                typeString: "address[1] memory",
              },
            },
            visibility: "public",
          },
          {
            constant: true,
            id: 1581,
            mutability: "constant",
            name: "PINU_PER_PULSE",
            nameLocation: "1698:14:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1672:63:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 1579,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "1672:7:6",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            value: {
              hexValue: "3130303030303030303030303030303030303030",
              id: 1580,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "1715:20:6",
              typeDescriptions: {
                typeIdentifier: "t_rational_10000000000000000000_by_1",
                typeString: "int_const 10000000000000000000",
              },
              value: "10000000000000000000",
            },
            visibility: "internal",
          },
          {
            constant: false,
            id: 1583,
            mutability: "immutable",
            name: "MINTEND",
            nameLocation: "1808:7:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1793:22:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 1582,
              name: "uint",
              nodeType: "ElementaryTypeName",
              src: "1793:4:6",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "internal",
          },
          {
            constant: false,
            documentation: {
              id: 1584,
              nodeType: "StructuredDocumentation",
              src: "1822:50:6",
              text: "============== Mutable Storage ==============",
            },
            functionSelector: "73b2e80e",
            id: 1588,
            mutability: "mutable",
            name: "hasClaimed",
            nameLocation: "1964:10:6",
            nodeType: "VariableDeclaration",
            scope: 1829,
            src: "1932:42:6",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
              typeString: "mapping(address => bool)",
            },
            typeName: {
              id: 1587,
              keyType: {
                id: 1585,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "1940:7:6",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              nodeType: "Mapping",
              src: "1932:24:6",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                typeString: "mapping(address => bool)",
              },
              valueType: {
                id: 1586,
                name: "bool",
                nodeType: "ElementaryTypeName",
                src: "1951:4:6",
                typeDescriptions: {
                  typeIdentifier: "t_bool",
                  typeString: "bool",
                },
              },
            },
            visibility: "public",
          },
          {
            anonymous: false,
            documentation: {
              id: 1589,
              nodeType: "StructuredDocumentation",
              src: "2027:125:6",
              text: "@dev Emitted after a successful token claim\n @param to recipient of claim\n @param amount of tokens claimed",
            },
            eventSelector:
              "47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4",
            id: 1595,
            name: "Claim",
            nameLocation: "2163:5:6",
            nodeType: "EventDefinition",
            parameters: {
              id: 1594,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1591,
                  indexed: true,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "2185:2:6",
                  nodeType: "VariableDeclaration",
                  scope: 1595,
                  src: "2169:18:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1590,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "2169:7:6",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 1593,
                  indexed: false,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "2197:6:6",
                  nodeType: "VariableDeclaration",
                  scope: 1595,
                  src: "2189:14:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 1592,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2189:7:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2168:36:6",
            },
            src: "2157:48:6",
          },
          {
            baseFunctions: [888],
            body: {
              id: 1604,
              nodeType: "Block",
              src: "2475:26:6",
              statements: [
                {
                  expression: {
                    hexValue: "3132",
                    id: 1602,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "2492:2:6",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_12_by_1",
                      typeString: "int_const 12",
                    },
                    value: "12",
                  },
                  functionReturnParameters: 1601,
                  id: 1603,
                  nodeType: "Return",
                  src: "2485:9:6",
                },
              ],
            },
            documentation: {
              id: 1596,
              nodeType: "StructuredDocumentation",
              src: "2211:44:6",
              text: "============== Functions ==============",
            },
            functionSelector: "313ce567",
            id: 1605,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "decimals",
            nameLocation: "2375:8:6",
            nodeType: "FunctionDefinition",
            overrides: {
              id: 1598,
              nodeType: "OverrideSpecifier",
              overrides: [],
              src: "2438:8:6",
            },
            parameters: {
              id: 1597,
              nodeType: "ParameterList",
              parameters: [],
              src: "2383:2:6",
            },
            returnParameters: {
              id: 1601,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1600,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1605,
                  src: "2464:5:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint8",
                    typeString: "uint8",
                  },
                  typeName: {
                    id: 1599,
                    name: "uint8",
                    nodeType: "ElementaryTypeName",
                    src: "2464:5:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint8",
                      typeString: "uint8",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2463:7:6",
            },
            scope: 1829,
            src: "2366:135:6",
            stateMutability: "view",
            virtual: true,
            visibility: "public",
          },
          {
            body: {
              id: 1612,
              nodeType: "Block",
              src: "2740:35:6",
              statements: [
                {
                  expression: {
                    id: 1610,
                    name: "_launchTime",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 1567,
                    src: "2757:11:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 1609,
                  id: 1611,
                  nodeType: "Return",
                  src: "2750:18:6",
                },
              ],
            },
            functionSelector: "790ca413",
            id: 1613,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "launchTime",
            nameLocation: "2669:10:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1606,
              nodeType: "ParameterList",
              parameters: [],
              src: "2679:2:6",
            },
            returnParameters: {
              id: 1609,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1608,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1613,
                  src: "2727:7:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 1607,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "2727:7:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "2726:9:6",
            },
            scope: 1829,
            src: "2660:115:6",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 1620,
              nodeType: "Block",
              src: "3018:39:6",
              statements: [
                {
                  expression: {
                    id: 1618,
                    name: "_numberOfClaims",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 1569,
                    src: "3035:15:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 1617,
                  id: 1619,
                  nodeType: "Return",
                  src: "3028:22:6",
                },
              ],
            },
            functionSelector: "ee993375",
            id: 1621,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "numberOfClaims",
            nameLocation: "2943:14:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1614,
              nodeType: "ParameterList",
              parameters: [],
              src: "2957:2:6",
            },
            returnParameters: {
              id: 1617,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1616,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1621,
                  src: "3005:7:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 1615,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3005:7:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3004:9:6",
            },
            scope: 1829,
            src: "2934:123:6",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 1629,
              nodeType: "Block",
              src: "3297:37:6",
              statements: [
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 1626,
                      name: "_currentDay",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1646,
                      src: "3314:11:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$__$returns$_t_uint256_$",
                        typeString: "function () view returns (uint256)",
                      },
                    },
                    id: 1627,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3314:13:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 1625,
                  id: 1628,
                  nodeType: "Return",
                  src: "3307:20:6",
                },
              ],
            },
            functionSelector: "5c9302c9",
            id: 1630,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "currentDay",
            nameLocation: "3224:10:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1622,
              nodeType: "ParameterList",
              parameters: [],
              src: "3234:2:6",
            },
            returnParameters: {
              id: 1625,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1624,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1630,
                  src: "3284:7:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 1623,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3284:7:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3283:9:6",
            },
            scope: 1829,
            src: "3215:119:6",
            stateMutability: "view",
            virtual: false,
            visibility: "external",
          },
          {
            body: {
              id: 1645,
              nodeType: "Block",
              src: "3423:70:6",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        hexValue: "31",
                        id: 1642,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3479:6:6",
                        subdenomination: "days",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_86400_by_1",
                          typeString: "int_const 86400",
                        },
                        value: "1",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_rational_86400_by_1",
                          typeString: "int_const 86400",
                        },
                      ],
                      expression: {
                        components: [
                          {
                            arguments: [
                              {
                                id: 1638,
                                name: "_launchTime",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 1567,
                                src: "3461:11:6",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              ],
                              expression: {
                                expression: {
                                  id: 1635,
                                  name: "block",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967292,
                                  src: "3441:5:6",
                                  typeDescriptions: {
                                    typeIdentifier: "t_magic_block",
                                    typeString: "block",
                                  },
                                },
                                id: 1636,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: "timestamp",
                                nodeType: "MemberAccess",
                                src: "3441:15:6",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              id: 1637,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sub",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 692,
                              src: "3441:19:6",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                typeString:
                                  "function (uint256,uint256) pure returns (uint256)",
                              },
                            },
                            id: 1639,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "3441:32:6",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                        ],
                        id: 1640,
                        isConstant: false,
                        isInlineArray: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "TupleExpression",
                        src: "3440:34:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      id: 1641,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "div",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 722,
                      src: "3440:38:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        typeString:
                          "function (uint256,uint256) pure returns (uint256)",
                      },
                    },
                    id: 1643,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3440:46:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 1634,
                  id: 1644,
                  nodeType: "Return",
                  src: "3433:53:6",
                },
              ],
            },
            id: 1646,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "_currentDay",
            nameLocation: "3349:11:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1631,
              nodeType: "ParameterList",
              parameters: [],
              src: "3360:2:6",
            },
            returnParameters: {
              id: 1634,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1633,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1646,
                  src: "3410:7:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 1632,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3410:7:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3409:9:6",
            },
            scope: 1829,
            src: "3340:153:6",
            stateMutability: "view",
            virtual: false,
            visibility: "internal",
          },
          {
            body: {
              id: 1661,
              nodeType: "Block",
              src: "3886:62:6",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 1657,
                        name: "hexAddr",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1648,
                        src: "3926:7:6",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 1658,
                        name: "proof",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1651,
                        src: "3935:5:6",
                        typeDescriptions: {
                          typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                          typeString: "bytes32[] memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                          typeString: "bytes32[] memory",
                        },
                      ],
                      id: 1656,
                      name: "_hexAddressIsClaimable",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1699,
                      src: "3903:22:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_address_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bool_$",
                        typeString:
                          "function (address,bytes32[] memory) pure returns (bool)",
                      },
                    },
                    id: 1659,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3903:38:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  functionReturnParameters: 1655,
                  id: 1660,
                  nodeType: "Return",
                  src: "3896:45:6",
                },
              ],
            },
            functionSelector: "1456d8aa",
            id: 1662,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "hexAddressIsClaimable",
            nameLocation: "3766:21:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1652,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1648,
                  mutability: "mutable",
                  name: "hexAddr",
                  nameLocation: "3796:7:6",
                  nodeType: "VariableDeclaration",
                  scope: 1662,
                  src: "3788:15:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1647,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3788:7:6",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 1651,
                  mutability: "mutable",
                  name: "proof",
                  nameLocation: "3822:5:6",
                  nodeType: "VariableDeclaration",
                  scope: 1662,
                  src: "3805:22:6",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                    typeString: "bytes32[]",
                  },
                  typeName: {
                    baseType: {
                      id: 1649,
                      name: "bytes32",
                      nodeType: "ElementaryTypeName",
                      src: "3805:7:6",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32",
                      },
                    },
                    id: 1650,
                    nodeType: "ArrayTypeName",
                    src: "3805:9:6",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr",
                      typeString: "bytes32[]",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3787:41:6",
            },
            returnParameters: {
              id: 1655,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1654,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1662,
                  src: "3876:4:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 1653,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "3876:4:6",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3875:6:6",
            },
            scope: 1829,
            src: "3757:191:6",
            stateMutability: "pure",
            virtual: false,
            visibility: "external",
          },
          {
            body: {
              id: 1698,
              nodeType: "Block",
              src: "4084:249:6",
              statements: [
                {
                  assignments: [1673],
                  declarations: [
                    {
                      constant: false,
                      id: 1673,
                      mutability: "mutable",
                      name: "leaf",
                      nameLocation: "4102:4:6",
                      nodeType: "VariableDeclaration",
                      scope: 1698,
                      src: "4094:12:6",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32",
                      },
                      typeName: {
                        id: 1672,
                        name: "bytes32",
                        nodeType: "ElementaryTypeName",
                        src: "4094:7:6",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 1680,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 1677,
                            name: "hexAddr",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1664,
                            src: "4136:7:6",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          ],
                          expression: {
                            id: 1675,
                            name: "abi",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967295,
                            src: "4119:3:6",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_abi",
                              typeString: "abi",
                            },
                          },
                          id: 1676,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberName: "encodePacked",
                          nodeType: "MemberAccess",
                          src: "4119:16:6",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function () pure returns (bytes memory)",
                          },
                        },
                        id: 1678,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4119:25:6",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory",
                        },
                      ],
                      id: 1674,
                      name: "keccak256",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 4294967288,
                      src: "4109:9:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        typeString:
                          "function (bytes memory) pure returns (bytes32)",
                      },
                    },
                    id: 1679,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4109:36:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4094:51:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 1684,
                            name: "proof",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1667,
                            src: "4212:5:6",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_array$_t_bytes32_$dyn_memory_ptr",
                              typeString: "bytes32[] memory",
                            },
                          },
                          {
                            id: 1685,
                            name: "MERKLE_TREE_ROOT",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1558,
                            src: "4219:16:6",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                          {
                            id: 1686,
                            name: "leaf",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1673,
                            src: "4237:4:6",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier:
                                "t_array$_t_bytes32_$dyn_memory_ptr",
                              typeString: "bytes32[] memory",
                            },
                            {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                            {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32",
                            },
                          ],
                          expression: {
                            id: 1682,
                            name: "MerkleProof",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 501,
                            src: "4193:11:6",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_MerkleProof_$501_$",
                              typeString: "type(library MerkleProof)",
                            },
                          },
                          id: 1683,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "verify",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 23,
                          src: "4193:18:6",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bool_$",
                            typeString:
                              "function (bytes32[] memory,bytes32,bytes32) pure returns (bool)",
                          },
                        },
                        id: 1687,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4193:49:6",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue: "496e76616c69642050726f6f66",
                        id: 1688,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "4244:15:6",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486",
                          typeString: 'literal_string "Invalid Proof"',
                        },
                        value: "Invalid Proof",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_d95d531e7ef85c3e7467db7c164ce0d8b7b23d0a5a166a2fc91faa2aab5ab486",
                          typeString: 'literal_string "Invalid Proof"',
                        },
                      ],
                      id: 1681,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "4185:7:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 1689,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4185:75:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1690,
                  nodeType: "ExpressionStatement",
                  src: "4185:75:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 1693,
                        name: "proof",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1667,
                        src: "4296:5:6",
                        typeDescriptions: {
                          typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                          typeString: "bytes32[] memory",
                        },
                      },
                      {
                        id: 1694,
                        name: "MERKLE_TREE_ROOT",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1558,
                        src: "4303:16:6",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                      {
                        id: 1695,
                        name: "leaf",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1673,
                        src: "4321:4:6",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                          typeString: "bytes32[] memory",
                        },
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32",
                        },
                      ],
                      expression: {
                        id: 1691,
                        name: "MerkleProof",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 501,
                        src: "4277:11:6",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_MerkleProof_$501_$",
                          typeString: "type(library MerkleProof)",
                        },
                      },
                      id: 1692,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "verify",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 23,
                      src: "4277:18:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_pure$_t_array$_t_bytes32_$dyn_memory_ptr_$_t_bytes32_$_t_bytes32_$returns$_t_bool_$",
                        typeString:
                          "function (bytes32[] memory,bytes32,bytes32) pure returns (bool)",
                      },
                    },
                    id: 1696,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4277:49:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  functionReturnParameters: 1671,
                  id: 1697,
                  nodeType: "Return",
                  src: "4270:56:6",
                },
              ],
            },
            id: 1699,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "_hexAddressIsClaimable",
            nameLocation: "3963:22:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1668,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1664,
                  mutability: "mutable",
                  name: "hexAddr",
                  nameLocation: "3994:7:6",
                  nodeType: "VariableDeclaration",
                  scope: 1699,
                  src: "3986:15:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1663,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3986:7:6",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 1667,
                  mutability: "mutable",
                  name: "proof",
                  nameLocation: "4020:5:6",
                  nodeType: "VariableDeclaration",
                  scope: 1699,
                  src: "4003:22:6",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr",
                    typeString: "bytes32[]",
                  },
                  typeName: {
                    baseType: {
                      id: 1665,
                      name: "bytes32",
                      nodeType: "ElementaryTypeName",
                      src: "4003:7:6",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32",
                      },
                    },
                    id: 1666,
                    nodeType: "ArrayTypeName",
                    src: "4003:9:6",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr",
                      typeString: "bytes32[]",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "3985:41:6",
            },
            returnParameters: {
              id: 1671,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1670,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1699,
                  src: "4074:4:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 1669,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "4074:4:6",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "4073:6:6",
            },
            scope: 1829,
            src: "3954:379:6",
            stateMutability: "pure",
            virtual: false,
            visibility: "internal",
          },
          {
            body: {
              id: 1750,
              nodeType: "Block",
              src: "5623:634:6",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 1711,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [],
                          expression: {
                            argumentTypes: [],
                            id: 1708,
                            name: "_currentDay",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1646,
                            src: "5641:11:6",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_view$__$returns$_t_uint256_$",
                              typeString: "function () view returns (uint256)",
                            },
                          },
                          id: 1709,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "5641:13:6",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "<=",
                        rightExpression: {
                          id: 1710,
                          name: "CLAIM_PHASE_DAYS",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 1561,
                          src: "5658:16:6",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "5641:33:6",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "436c61696d2070686173652068617320656e6465642e",
                        id: 1712,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5676:24:6",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03",
                          typeString: 'literal_string "Claim phase has ended."',
                        },
                        value: "Claim phase has ended.",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_52acb5e72336846460a7a02b144aa213f888adfb641628b0dad2d021f2ba6a03",
                          typeString: 'literal_string "Claim phase has ended."',
                        },
                      ],
                      id: 1707,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "5633:7:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 1713,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5633:68:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1714,
                  nodeType: "ExpressionStatement",
                  src: "5633:68:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 1719,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "UnaryOperation",
                        operator: "!",
                        prefix: true,
                        src: "5719:15:6",
                        subExpression: {
                          baseExpression: {
                            id: 1716,
                            name: "hasClaimed",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1588,
                            src: "5720:10:6",
                            typeDescriptions: {
                              typeIdentifier: "t_mapping$_t_address_$_t_bool_$",
                              typeString: "mapping(address => bool)",
                            },
                          },
                          id: 1718,
                          indexExpression: {
                            id: 1717,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1701,
                            src: "5731:2:6",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "5720:14:6",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "416464726573732068617320616c726561647920636c61696d65642e",
                        id: 1720,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5736:30:6",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9",
                          typeString:
                            'literal_string "Address has already claimed."',
                        },
                        value: "Address has already claimed.",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_0cab26bd6c4b823e0af7bb4d869844644caa9d254d1678766c9a3687bcb542b9",
                          typeString:
                            'literal_string "Address has already claimed."',
                        },
                      ],
                      id: 1715,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "5711:7:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 1721,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5711:56:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1722,
                  nodeType: "ExpressionStatement",
                  src: "5711:56:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 1725,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1701,
                            src: "5808:2:6",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          {
                            id: 1726,
                            name: "proof",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1704,
                            src: "5812:5:6",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_array$_t_bytes32_$dyn_calldata_ptr",
                              typeString: "bytes32[] calldata",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                            {
                              typeIdentifier:
                                "t_array$_t_bytes32_$dyn_calldata_ptr",
                              typeString: "bytes32[] calldata",
                            },
                          ],
                          id: 1724,
                          name: "_hexAddressIsClaimable",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 1699,
                          src: "5785:22:6",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_pure$_t_address_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_bool_$",
                            typeString:
                              "function (address,bytes32[] memory) pure returns (bool)",
                          },
                        },
                        id: 1727,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "5785:33:6",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      },
                      {
                        hexValue:
                          "4865782041646472657373206973204e6f7420436c61696d61626c65",
                        id: 1728,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5820:30:6",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a",
                          typeString:
                            'literal_string "Hex Address is Not Claimable"',
                        },
                        value: "Hex Address is Not Claimable",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_07f7e2ee9c2bb9516ff3ae578b78c03cce70647bdc009f20200d7cc0ff3f5b2a",
                          typeString:
                            'literal_string "Hex Address is Not Claimable"',
                        },
                      ],
                      id: 1723,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [4294967278, 4294967278],
                      referencedDeclaration: 4294967278,
                      src: "5777:7:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure",
                      },
                    },
                    id: 1729,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5777:74:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1730,
                  nodeType: "ExpressionStatement",
                  src: "5777:74:6",
                },
                {
                  expression: {
                    id: 1736,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 1731,
                      name: "_numberOfClaims",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1569,
                      src: "5985:15:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          hexValue: "31",
                          id: 1734,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "6023:1:6",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_1_by_1",
                            typeString: "int_const 1",
                          },
                          value: "1",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_1_by_1",
                            typeString: "int_const 1",
                          },
                        ],
                        expression: {
                          id: 1732,
                          name: "_numberOfClaims",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 1569,
                          src: "6003:15:6",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        id: 1733,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "add",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 677,
                        src: "6003:19:6",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          typeString:
                            "function (uint256,uint256) pure returns (uint256)",
                        },
                      },
                      id: 1735,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "6003:22:6",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "5985:40:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 1737,
                  nodeType: "ExpressionStatement",
                  src: "5985:40:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 1739,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "6136:3:6",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 1740,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "6136:10:6",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "3130303030303030303030303030303030",
                        id: 1741,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6148:17:6",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_10000000000000000_by_1",
                          typeString: "int_const 10000000000000000",
                        },
                        value: "10000000000000000",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_rational_10000000000000000_by_1",
                          typeString: "int_const 10000000000000000",
                        },
                      ],
                      id: 1738,
                      name: "_mint",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1216,
                      src: "6130:5:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256)",
                      },
                    },
                    id: 1742,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6130:36:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1743,
                  nodeType: "ExpressionStatement",
                  src: "6130:36:6",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        expression: {
                          id: 1745,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "6233:3:6",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 1746,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "6233:10:6",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "31303030",
                        id: 1747,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6245:4:6",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_1000_by_1",
                          typeString: "int_const 1000",
                        },
                        value: "1000",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_rational_1000_by_1",
                          typeString: "int_const 1000",
                        },
                      ],
                      id: 1744,
                      name: "Claim",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1595,
                      src: "6227:5:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256)",
                      },
                    },
                    id: 1748,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6227:23:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1749,
                  nodeType: "EmitStatement",
                  src: "6222:28:6",
                },
              ],
            },
            functionSelector: "d7aada81",
            id: 1751,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "claim",
            nameLocation: "5558:5:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1705,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1701,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "5572:2:6",
                  nodeType: "VariableDeclaration",
                  scope: 1751,
                  src: "5564:10:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1700,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "5564:7:6",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 1704,
                  mutability: "mutable",
                  name: "proof",
                  nameLocation: "5595:5:6",
                  nodeType: "VariableDeclaration",
                  scope: 1751,
                  src: "5576:24:6",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_bytes32_$dyn_calldata_ptr",
                    typeString: "bytes32[]",
                  },
                  typeName: {
                    baseType: {
                      id: 1702,
                      name: "bytes32",
                      nodeType: "ElementaryTypeName",
                      src: "5576:7:6",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32",
                      },
                    },
                    id: 1703,
                    nodeType: "ArrayTypeName",
                    src: "5576:9:6",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr",
                      typeString: "bytes32[]",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "5563:38:6",
            },
            returnParameters: {
              id: 1706,
              nodeType: "ParameterList",
              parameters: [],
              src: "5623:0:6",
            },
            scope: 1829,
            src: "5549:708:6",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            body: {
              id: 1763,
              nodeType: "Block",
              src: "6384:57:6",
              statements: [
                {
                  expression: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 1761,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      commonType: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      id: 1759,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        expression: {
                          id: 1756,
                          name: "block",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967292,
                          src: "6401:5:6",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_block",
                            typeString: "block",
                          },
                        },
                        id: 1757,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "timestamp",
                        nodeType: "MemberAccess",
                        src: "6401:15:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "BinaryOperation",
                      operator: "/",
                      rightExpression: {
                        hexValue: "31",
                        id: 1758,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6419:6:6",
                        subdenomination: "days",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_86400_by_1",
                          typeString: "int_const 86400",
                        },
                        value: "1",
                      },
                      src: "6401:24:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "*",
                    rightExpression: {
                      hexValue: "31",
                      id: 1760,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "6428:6:6",
                      subdenomination: "days",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_86400_by_1",
                        typeString: "int_const 86400",
                      },
                      value: "1",
                    },
                    src: "6401:33:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 1755,
                  id: 1762,
                  nodeType: "Return",
                  src: "6394:40:6",
                },
              ],
            },
            id: 1764,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "today",
            nameLocation: "6350:5:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1752,
              nodeType: "ParameterList",
              parameters: [],
              src: "6355:2:6",
            },
            returnParameters: {
              id: 1755,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1754,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1764,
                  src: "6375:7:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 1753,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "6375:7:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "6374:9:6",
            },
            scope: 1829,
            src: "6341:100:6",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "internal",
          },
          {
            body: {
              id: 1795,
              nodeType: "Block",
              src: "6550:175:6",
              statements: [
                {
                  body: {
                    id: 1791,
                    nodeType: "Block",
                    src: "6603:94:6",
                    statements: [
                      {
                        condition: {
                          commonType: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          id: 1786,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            baseExpression: {
                              id: 1782,
                              name: "ACCEPTED",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 1578,
                              src: "6621:8:6",
                              typeDescriptions: {
                                typeIdentifier: "t_array$_t_address_$1_storage",
                                typeString: "address[1] storage ref",
                              },
                            },
                            id: 1784,
                            indexExpression: {
                              id: 1783,
                              name: "i",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 1772,
                              src: "6630:1:6",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "6621:11:6",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            id: 1785,
                            name: "token",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1766,
                            src: "6636:5:6",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          src: "6621:20:6",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                        id: 1790,
                        nodeType: "IfStatement",
                        src: "6617:70:6",
                        trueBody: {
                          id: 1789,
                          nodeType: "Block",
                          src: "6643:44:6",
                          statements: [
                            {
                              expression: {
                                hexValue: "74727565",
                                id: 1787,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "bool",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "6668:4:6",
                                typeDescriptions: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool",
                                },
                                value: "true",
                              },
                              functionReturnParameters: 1770,
                              id: 1788,
                              nodeType: "Return",
                              src: "6661:11:6",
                            },
                          ],
                        },
                      },
                    ],
                  },
                  condition: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 1778,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 1775,
                      name: "i",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1772,
                      src: "6577:1:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "<",
                    rightExpression: {
                      expression: {
                        id: 1776,
                        name: "ACCEPTED",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1578,
                        src: "6581:8:6",
                        typeDescriptions: {
                          typeIdentifier: "t_array$_t_address_$1_storage",
                          typeString: "address[1] storage ref",
                        },
                      },
                      id: 1777,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "length",
                      nodeType: "MemberAccess",
                      src: "6581:15:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "6577:19:6",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  id: 1792,
                  initializationExpression: {
                    assignments: [1772],
                    declarations: [
                      {
                        constant: false,
                        id: 1772,
                        mutability: "mutable",
                        name: "i",
                        nameLocation: "6570:1:6",
                        nodeType: "VariableDeclaration",
                        scope: 1792,
                        src: "6565:6:6",
                        stateVariable: false,
                        storageLocation: "default",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        typeName: {
                          id: 1771,
                          name: "uint",
                          nodeType: "ElementaryTypeName",
                          src: "6565:4:6",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        visibility: "internal",
                      },
                    ],
                    id: 1774,
                    initialValue: {
                      hexValue: "30",
                      id: 1773,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "6574:1:6",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_0_by_1",
                        typeString: "int_const 0",
                      },
                      value: "0",
                    },
                    nodeType: "VariableDeclarationStatement",
                    src: "6565:10:6",
                  },
                  loopExpression: {
                    expression: {
                      id: 1780,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "UnaryOperation",
                      operator: "++",
                      prefix: false,
                      src: "6598:3:6",
                      subExpression: {
                        id: 1779,
                        name: "i",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1772,
                        src: "6598:1:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 1781,
                    nodeType: "ExpressionStatement",
                    src: "6598:3:6",
                  },
                  nodeType: "ForStatement",
                  src: "6560:137:6",
                },
                {
                  expression: {
                    hexValue: "66616c7365",
                    id: 1793,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "bool",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "6713:5:6",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    value: "false",
                  },
                  functionReturnParameters: 1770,
                  id: 1794,
                  nodeType: "Return",
                  src: "6706:12:6",
                },
              ],
            },
            functionSelector: "2b34af70",
            id: 1796,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "accepted",
            nameLocation: "6499:8:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1767,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1766,
                  mutability: "mutable",
                  name: "token",
                  nameLocation: "6516:5:6",
                  nodeType: "VariableDeclaration",
                  scope: 1796,
                  src: "6508:13:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 1765,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "6508:7:6",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "6507:15:6",
            },
            returnParameters: {
              id: 1770,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 1769,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 1796,
                  src: "6544:4:6",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 1768,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "6544:4:6",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "6543:6:6",
            },
            scope: 1829,
            src: "6490:235:6",
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 1827,
              nodeType: "Block",
              src: "7796:563:6",
              statements: [
                {
                  assignments: [1800],
                  declarations: [
                    {
                      constant: false,
                      id: 1800,
                      mutability: "mutable",
                      name: "plsAmount",
                      nameLocation: "8087:9:6",
                      nodeType: "VariableDeclaration",
                      scope: 1827,
                      src: "8079:17:6",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 1799,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "8079:7:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 1805,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 1804,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        id: 1801,
                        name: "msg",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967281,
                        src: "8099:3:6",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_message",
                          typeString: "msg",
                        },
                      },
                      id: 1802,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "value",
                      nodeType: "MemberAccess",
                      src: "8099:9:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "*",
                    rightExpression: {
                      hexValue: "31303030303030303030303030303030303030",
                      id: 1803,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "8111:19:6",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_1000000000000000000_by_1",
                        typeString: "int_const 1000000000000000000",
                      },
                      value: "1000000000000000000",
                    },
                    src: "8099:31:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "8079:51:6",
                },
                {
                  assignments: [1807],
                  declarations: [
                    {
                      constant: false,
                      id: 1807,
                      mutability: "mutable",
                      name: "pinuMinted",
                      nameLocation: "8167:10:6",
                      nodeType: "VariableDeclaration",
                      scope: 1827,
                      src: "8159:18:6",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 1806,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "8159:7:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 1811,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 1810,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 1808,
                      name: "plsAmount",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1800,
                      src: "8180:9:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "*",
                    rightExpression: {
                      id: 1809,
                      name: "PINU_PER_PULSE",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1581,
                      src: "8192:14:6",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "8180:26:6",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "8159:47:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 1813,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "8245:3:6",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 1814,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "8245:10:6",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 1815,
                        name: "pinuMinted",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 1807,
                        src: "8257:10:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 1812,
                      name: "_mint",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 1216,
                      src: "8239:5:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256)",
                      },
                    },
                    id: 1816,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8239:29:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1817,
                  nodeType: "ExpressionStatement",
                  src: "8239:29:6",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 1823,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "8342:3:6",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 1824,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "value",
                        nodeType: "MemberAccess",
                        src: "8342:9:6",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      expression: {
                        arguments: [
                          {
                            id: 1820,
                            name: "MINT_ADDRESS",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 1564,
                            src: "8319:12:6",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          ],
                          id: 1819,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "8311:8:6",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_payable_$",
                            typeString: "type(address payable)",
                          },
                          typeName: {
                            id: 1818,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "8311:8:6",
                            stateMutability: "payable",
                            typeDescriptions: {},
                          },
                        },
                        id: 1821,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8311:21:6",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable",
                        },
                      },
                      id: 1822,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: "transfer",
                      nodeType: "MemberAccess",
                      src: "8311:30:6",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256)",
                      },
                    },
                    id: 1825,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "8311:41:6",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 1826,
                  nodeType: "ExpressionStatement",
                  src: "8311:41:6",
                },
              ],
            },
            functionSelector: "1249c58b",
            id: 1828,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "mint",
            nameLocation: "7772:4:6",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 1797,
              nodeType: "ParameterList",
              parameters: [],
              src: "7776:2:6",
            },
            returnParameters: {
              id: 1798,
              nodeType: "ParameterList",
              parameters: [],
              src: "7796:0:6",
            },
            scope: 1829,
            src: "7763:596:6",
            stateMutability: "payable",
            virtual: false,
            visibility: "external",
          },
        ],
        scope: 1830,
        src: "218:8143:6",
        usedErrors: [],
      },
    ],
    src: "0:8362:6",
  },
  compiler: {
    name: "solc",
    version: "0.8.15+commit.e14f2714.Emscripten.clang",
  },
  networks: {
    5777: {
      events: {},
      links: {},
      address: "0xcE979C01192A8e1C3EFED5137803d0B837383004",
      transactionHash:
        "0x08744e5120d5e00fe8a7eaa0c3fd12d7a3e15edac83c3521fa75dd662a9a6195",
    },
  },
  schemaVersion: "3.4.8",
  updatedAt: "2022-09-02T09:26:42.059Z",
  networkType: "ethereum",
  devdoc: {
    events: {
      "Claim(address,uint256)": {
        details: "Emitted after a successful token claim",
        params: {
          amount: "of tokens claimed",
          to: "recipient of claim",
        },
      },
    },
    kind: "dev",
    methods: {
      "allowance(address,address)": {
        details: "See {IERC20-allowance}.",
      },
      "approve(address,uint256)": {
        details:
          "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.",
      },
      "balanceOf(address)": {
        details: "See {IERC20-balanceOf}.",
      },
      "decreaseAllowance(address,uint256)": {
        details:
          "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.",
      },
      "increaseAllowance(address,uint256)": {
        details:
          "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.",
      },
      "name()": {
        details: "Returns the name of the token.",
      },
      "symbol()": {
        details:
          "Returns the symbol of the token, usually a shorter version of the name.",
      },
      "totalSupply()": {
        details: "See {IERC20-totalSupply}.",
      },
      "transfer(address,uint256)": {
        details:
          "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.",
      },
      "transferFrom(address,address,uint256)": {
        details:
          "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.",
      },
    },
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {
      "ACCEPTED(uint256)": {
        notice: "============== Mint Related ==============",
      },
      "decimals()": {
        notice: "============== Functions ==============",
      },
      "hasClaimed(address)": {
        notice: "============== Mutable Storage ==============",
      },
    },
    version: 1,
  },
};
