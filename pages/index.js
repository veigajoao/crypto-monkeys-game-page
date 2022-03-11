import React, { Component } from 'react';
import {connectWallet, checkNetwork} from '../ethereum/web3';

import Layout from '../components/Layout';
import WhitelistHero from '../components/WhitelistHero';
import WhitelistOptions from '../components/WhitelistOptions';

import AOS from 'aos';
import BigNumber from 'bignumber.js';

class WhitelistPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserWallet: false,
            web3: "",
            networkSuccess: false,
            whitelistContract: false,
            priceTokenContract:  false,
            allowance: "unset",
            activeAccount: "unset",
            fetchInProgress: false
        }
        this.connectClientWallet.bind(this);
        this.getWalletAllowance.bind(this);
        this.purchaseToken.bind(this);
        this.closeModal.bind(this);
    }

    //handle connection to metamask
    async connectClientWallet() {
        let {isUserWallet, web3, networkSuccess, whitelistContract, priceTokenContract} = await connectWallet();
        this.setState({isUserWallet, web3, networkSuccess, whitelistContract, priceTokenContract});
        if (this.state.isUserWallet) {
            await this.getWalletAllowance();
        } else {
            this.setState({fetchInProgress: "noMM"});
        }
        
    }

    //access whitelist contract
    getWalletAllowance = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const activeAccount = accounts[0];
        const allowance = await this.state.whitelistContract.methods.getCurrentAllowance(activeAccount).call();
        this.setState({allowance, activeAccount});
    }

    async purchaseToken (buyQty) {
        if (this.state.isUserWallet) {
            if (parseInt(this.state.allowance) > 0) {
                // * 0.065 * 10**18
                const price = this.state.web3.utils.toWei(BigNumber(buyQty).multipliedBy("0.065").toString());
                const correctBuyQty = this.state.web3.utils.toWei(buyQty, "ether");
                
                this.setState({fetchInProgress: "sendBlock"});

                try {
                    await this.state.priceTokenContract.methods.approve(this.state.whitelistContract.options.address, price).send({
                        from: this.state.activeAccount
                    })
                } catch (e) {
                    this.setState({fetchInProgress: "tokenApprovalFailure"});
                    console.log(e);
                    return ""
                }
                try {
                    await this.state.whitelistContract.methods.buyTokens(correctBuyQty).send({
                         gas: '1000000', from: this.state.activeAccount 
                    });
                } catch (e) {
                    this.setState({fetchInProgress: "whitelistBuyFailure"});
                    console.log(e);
                    return ""
                }
                
                this.setState({fetchInProgress: "justBought"});
                await this.getWalletAllowance();
            } else {
                this.setState({fetchInProgress: "noAllowance"});
            }
        } else {
            this.setState({fetchInProgress: "noMM"});
        }
    }

    async closeModal() {
        this.setState({fetchInProgress: false});
    }

    componentDidMount() {
        AOS.init({
          duration : 2000
        });
      }

    render() {

        return (
            <Layout connectClientWallet={_ => this.connectClientWallet()} activeAccount={this.state.activeAccount} fetchInProgress={this.state.fetchInProgress} closeModal={_ => this.closeModal()}>
                <WhitelistHero/>
                <WhitelistOptions isUserWallet={this.state.isUserWallet} allowance={this.state.allowance} purchaseFunction={(v) => this.purchaseToken(v)}/>
            </Layout>
        )
    }

}

export default WhitelistPage;