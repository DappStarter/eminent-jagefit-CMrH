require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth praise coconut grace crew fringe gentle'; 
let testAccounts = [
"0xbb2acc699d02e9d6fee1d49a6819419cd79ac2ca394ce385c4d449332465b27a",
"0x5a001f9c04cf4d70170395cfe6373b362f33005d203d196f8ff14169a08b353c",
"0xfcb2061b088dd43747637db1b1a7ba8895b2cc693c3a9431a8c4a3def973c4e3",
"0x941b0fa88dbb7ce2d6ffd65f966177d459fec718f7b964c7fa3385225da8a255",
"0x6b04c013f2038bc98bfbcf8978b1473af69991ff56b499d0930acdd3ee8cfe31",
"0x50f271c3f411d055bbefa7a5d7d5c7db8ad86cf18242103280f9be60a956ba33",
"0x57c77d28f4f47571f6505ecda64903d52fde6f081202e169290032389f20314b",
"0x91917dceccaa731dc8dc9e6e32236837bbb59943f3f16423f3f88c31cd591954",
"0x09051a6c9592cfdd59adfd38a955d01db97e6fd61d0f76b06d475de39c525645",
"0x24f6f8226114d23ac306b10a9bb449554267d35042d703255b1e4a4bc314ac64"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

