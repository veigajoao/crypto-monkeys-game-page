import React, { Component } from 'react';
import {connectWallet, checkNetwork} from '../ethereum/web3';

class BSCConnector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserWallet: false,
            web3: "",
            networkSuccess: false,
        }
    }

    //handle connection to metamask
    connectClientWallet() {
        let {isUserWallet, web3, networkSuccess} = connectWallet();
        this.setState({isUserWallet, web3, networkSuccess});
    }

    //fetch important contract data

    //fetch game conract data



    render() {
            return <button onClick={() => this.connectClientWallet()}>Connect MetaMask</button>
        }

}

export default BSCConnector;