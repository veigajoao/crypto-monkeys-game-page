import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

import contractFileWhitelist from './contracts_build/WhiteListedPresale.json';
import contractFileBananacoin from './contracts_build/BananaCoin.json';

const abiWhitelist = contractFileWhitelist.abi;
const whitelistAddress = "0x8E0ED58bAf27CA6f8FE61317C7cf53BB37e5b00f";

const abiBusd = contractFileBananacoin.abi;
const busdAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";

const bnanaAddress = "0xf9b27685bfaAF96AaedffD45DA69BF7F5d0ea07D";

const bscTestId = '0x61';
const bscTestRpcurls = [
    'https://data-seed-prebsc-1-s1.binance.org:8545/',
    'https://data-seed-prebsc-2-s1.binance.org:8545/',
    'https://data-seed-prebsc-1-s2.binance.org:8545/',
    'https://data-seed-prebsc-2-s2.binance.org:8545/',
    'https://data-seed-prebsc-1-s3.binance.org:8545/',
    'https://data-seed-prebsc-2-s3.binance.org:8545/'
];
const bscTestBlockExplorer = ['https://testnet.bscscan.com'];

const bscId = '0x38';
const bscRpcurls = [
    'https://bsc-dataseed.binance.org/',
    'https://bsc-dataseed1.defibit.io/',
    'https://bsc-dataseed1.ninicoin.io/',
    'https://bsc-dataseed2.defibit.io/',
    'https://bsc-dataseed3.defibit.io/',
    'https://bsc-dataseed4.defibit.io/',
    'https://bsc-dataseed2.ninicoin.io/',
    'https://bsc-dataseed3.ninicoin.io/',
    'https://bsc-dataseed4.ninicoin.io/',
    'https://bsc-dataseed1.binance.org/',
    'https://bsc-dataseed2.binance.org/',
    'https://bsc-dataseed3.binance.org/',
    'https://bsc-dataseed4.binance.org/'
];

const bscBlockExplorer = ['https://bscscan.com/'];

let web3;
let provider;

//returns true if change was successfu, false if it wasn't
const switchToBsc = async () => {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: bscId }],
        });
        return true;
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                {
                    chainId: bscId,
                    chainName: 'Binance Smart Chain',
                    rpcUrls: bscRpcurls,
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18,
                    },
                    blockExplorerUrls: bscBlockExplorer,
                },
                ],
            });
            return true;
        } catch (addError) {
            // handle "add" error

            return false;
        }
    }
};

const addToken = async () => {
    return await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: bnanaAddress,
                symbol: 'BNANA',
                decimals: 18,
                image: 'https://game.cryptomonkeys.me/assets/img/whitelist/Case Gold Bananas.png',
            },
        },
    });
}

const checkNetwork = async () => {
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    if (chainId != bscId) {
        return await switchToBsc();
    } else {
        return true;
    }
}

const connectWallet = async () => {

    let respArray;
    //check if code is on client or server side
    if (typeof window !== 'undefined') {
        
        provider = await detectEthereumProvider();
        if (provider == null) {
            provider = 'undefined';
        }
    } else {
        provider = 'undefined';
    }

    if (provider !== 'undefined') {
        //if on client environment
        web3 = new Web3(provider);
        let networkSuccess = await checkNetwork();
        respArray = {
            isUserWallet: true,
            web3: web3,
            networkSuccess: networkSuccess,
            whitelistContract: new web3.eth.Contract(abiWhitelist, whitelistAddress),
            priceTokenContract:  new web3.eth.Contract(abiBusd, busdAddress)
        };
        console.log(respArray)
        await addToken();
    } else {
        //if on server environment
        const providerServer = new Web3.providers.HttpProvider(
            'https://data-seed-prebsc-1-s1.binance.org:8545/'
            );
        web3 = new Web3(providerServer);
        respArray = {
            isUserWallet: false,
            web3: web3,
            networkSuccess: true,
            whitelistContract: false,
            priceTokenContract: false
        };
    }
    return respArray;
}



export {connectWallet, checkNetwork};