import React, {Component} from 'react';

import Head from 'next/head';

export default props => {
    return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center bg-secondary">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
            <img src="assets/img/whitelist/Case Gold Bananas.png" className="img-fluid animated" style={{height: 50 + 'vh', marginBottom: 5 + 'vh'}}/>
            
            <div className="d-block">
                <h2>TIME TO HODL <span>$BNANA</span></h2>
                <a href="#pricing" className="btn-get-started scrollto">Buy $BNANA now</a>
            </div>
            <p className="pt-3">
                We're currently on whitelist phase. We've just release 100 buy spots for the first to buy the token through the 
                site. Hurry up monkeys!
            </p>
            </div>
        </section>
    )
}