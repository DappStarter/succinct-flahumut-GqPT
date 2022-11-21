require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain snow gesture dry forget two'; 
let testAccounts = [
"0xbfce95e4354111bc5021603c8768a16b01632b321236108f6c3f33e6a9324dde",
"0x75ed6174bab9217cd8b5ae7ab1545ceb64de1a9958c21daede4066a20f01983f",
"0x839bd7dff862f5162550244a4afb9edf1e07305e75115494ee991d9f90ef8836",
"0xfcfe6ed006e1d25a557cea5151232cb197b532a91d6c41c40283638a6ed4bf34",
"0x35231a387468e723da7c1778e6fe5e0bca9a4c86e1d309f9006279654ef2a857",
"0xbbd0f298ccf20bc43f5c37a699cbe773be147067182d41733e0f62902e33b79c",
"0x87112a569e1fcaebd8820f48bed4daaedcd52c4462515b28f16b73b185d9a6d4",
"0x6385033ee95e6a20a1ef8c466706ea85d83cc9674f10343e8c5fe30c00ee5808",
"0x60abb45df6fd2ee790ad74760c5557252dbd53bc5e12c48dc25f241fab408590",
"0x9dd27a7755630216879bf4e6f852a87daee6d54841bb76c38357cd3b643b906b"
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

