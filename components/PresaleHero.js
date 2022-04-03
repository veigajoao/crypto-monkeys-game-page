import React, {Component, useState} from 'react';

import Head from 'next/head';

export default props => {

    const [formValue, setFormValue] = useState("");

    const web3 = props.web3;
    const isUserWallet = props.isUserWallet;


    const buyTokens = async (bnbAmount) => {
        if (isUserWallet) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                props.loadingTransaction();
                await props.presaleContract.methods.buyTokens().send({ 
                    gas: '1000000', 
                    from: accounts[0], 
                    value: web3.utils.toWei(bnbAmount.toString(), "ether") 
                });
                props.justBought();
            } catch (e) {
                props.whitelistBuyFailure();
            }
            
        } else {
            props.metamaskModal();
        }
    }

    const onChangeFunc = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setFormValue(e.target.value)
        }
    }

    return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center bg-secondary">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
            <img src="assets/img/whitelist/Case Gold Bananas.png" className="img-fluid animated" style={{height: 50 + 'vh', marginBottom: 5 + 'vh'}}/>
            
            <div className="d-block">
                <h2>TIME TO HODL <span>$BNANA</span></h2>
            </div>
            <p className="pt-3">
                Exlusive presale of $BNANA. <br/>
                Connect your MetaMask and input the amount you want to buy in here. <br/>
                Each BNB will get you 6500 $BNANA tokens.
                Investors will receive 20% of the token amount immediatelly and another 40% every 30 days.
            </p>
            <div class="input-group mb-3 w-50">
                <span class="input-group-text" id="basic-addon3">BNB amount</span>
                <input type="text" class="form-control" value={formValue} onChange={onChangeFunc}/>
            </div>
            <button onClick={_ => buyTokens(formValue)} className="btn-get-started scrollto">Buy $BNANA now</button>
            </div>
        </section>
    )
}