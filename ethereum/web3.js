import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

// import {abiWhitelist, abiBusd, contractAddress, busdAddress} from './WhitelistedPresale';


import contractFileWhitelist from './contracts_build/WhiteListedPresale.json';
import contractFileBananacoin from './contracts_build/BananaCoin.json';

const abiWhitelist = contractFileWhitelist.abi;
const whitelistAddress = "0x4Dd4835fceD7679792D5191C4446726Db1Ff1900";

const abiBusd = contractFileBananacoin.abi;
const busdAddress = "0x59c7d11fB3B1ebE6B4c467279c851DFF225830D4";

const bnanaAddress = "0x2b644584C714beAe9A2dc9f05Cc16202461D56CA";

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


let web3;
let provider;

//returns true if change was successfu, false if it wasn't
const switchToBsc = async () => {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: bscTestId }],
        });
        return true;
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                {
                    chainId: bscTestId,
                    chainName: 'Testnet Binance Smart Chain',
                    rpcUrls: bscTestRpcurls,
                    nativeCurrency: {
                        name: 'Test BNB',
                        symbol: 'BNB', // 2-6 characters long
                        decimals: 18,
                    },
                    blockExplorerUrls: bscTestBlockExplorer,
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
    if (chainId != bscTestId) {
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
    await addToken();
    return respArray;
}



export {connectWallet, checkNetwork};