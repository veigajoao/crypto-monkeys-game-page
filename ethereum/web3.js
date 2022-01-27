import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

const bscTestId = '0x61';
const bscTestRpcurls = [
    'https://data-seed-prebsc-1-s1.binance.org:8545/',
    'https://data-seed-prebsc-2-s1.binance.org:8545/',
    'https://data-seed-prebsc-1-s2.binance.org:8545/',
    'https://data-seed-prebsc-2-s2.binance.org:8545/',
    'https://data-seed-prebsc-1-s3.binance.org:8545/',
    'https://data-seed-prebsc-2-s3.binance.org:8545/'
];
const bscTestBlockExplorer = 'https://testnet.bscscan.com';

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
        if (switchError.code === 4902) {
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
        // handle other "switch" errors
        return false;
    }
};

const checkNetwork = async () => {
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    if (chainId != bscTestId) {
        return switchToBsc();
    }
}

const connectWallet = async () => {

    let respArray;
    //check if code is on client or server side
    if (typeof window !== 'undefined') {
        provider = await detectEthereumProvider();
    } else {
        provider = 'undefined';
    }

    if (provider !== 'undefined') {
        //if on client environment
        web3 = new Web3(provider);
        let networkSuccess = checkNetwork();
        respArray = {
            isUserWallet: true,
            web3: web3,
            networkSuccess: networkSuccess,
        };
    } else {
        //if on server environment
        const providerServer = new Web3.providers.HttpProvider(
            'https://data-seed-prebsc-1-s1.binance.org:8545/'
            );
        web3 = new Web3(providerServer);
        respArray = {
            isUserWallet: true,
            web3: web3,
            networkSuccess: true,
        };
    }
    return respArray;
}



export {connectWallet, checkNetwork};