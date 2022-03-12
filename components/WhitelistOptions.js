import React, {Component} from 'react';

import Head from 'next/head';

export default class WhiteListOptions extends Component {

    constructor(props) {
      super(props);

      this.triggerPurchase = this.triggerPurchase.bind(this);
    }

    async triggerPurchase (q) {
      await this.props.purchaseFunction(q);
    }

    render () {
        let banner;
        if (this.props.isUserWallet) {
            if (this.props.allowance > 0) {
                banner = <button type="button" className="btn btn-lg btn-success" disabled>Congrats! You're whitelisted. Time to buy your $BNANAS</button>
            } else {
                banner = <button type="button" className="btn btn-lg btn-danger" disabled>Looks like your wallet isn't in the whitelist :( You can try a different wallet or wait for the public sale</button>;
            }
            
        } else {
            banner = <button type="button" className="btn btn-lg btn-danger" disabled>Connect your wallet to check if you are whitelisted</button>;
        }

        return (
            <main id="main" className="bg-secondary">
            <section id="pricing" className="pricing">
              <div className="container" data-aos="fade-up">
        
                <div className="section-header">
                  <h2>Whitelist options</h2>
                  {banner}
                  <p className="mt-3">
                    You can only buy one option a single time. After the whitelist period is expired, if there are still tokens left,
                    sales will be opened to everyone for a limited time period.  
                  </p>
                </div>
        
                <div className="row gy-4">
        
                  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="pricing-item">
        
                      <div className="pricing-header">
                        <h3>1,500 BNANA</h3>
                        <h4><sup>BUSD</sup> 97.50<span></span></h4>
                      </div>
        
                      <ul>
                        <li><span>
                          A good option for intern monkeys, starting to invest
                          in cryptocurrency
                        </span></li>
                      </ul>
        
                      <div className="text-center mt-auto">
                        <button onClick={_ => this.triggerPurchase("1500")} className="buy-btn">Buy Now</button>
                      </div>
        
                    </div>
                  </div>
        
                  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
                    <div className="pricing-item">
        
                      <div className="pricing-header">
                        <h3>2,500 BNANA</h3>
                        <h4><sup>BUSD</sup> 162.50<span></span></h4>
                      </div>
        
                      <ul>
                        <li><span>
                          A great deal of $BNANAS to start your own monkey squad. Cryptoinvestor monkey started his empire with this ammount
                        </span></li>
                      </ul>
        
                      <div className="text-center mt-auto">
                        <button onClick={_ => this.triggerPurchase("2500")} className="buy-btn">Buy Now</button>
                      </div>
        
                    </div>
                  </div>
        
                  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
                    <div className="pricing-item featured">
        
                      <div className="pricing-header">
                        <h3>5,000 BNANA</h3>
                        <h4><sup>BUSD</sup> 325.00<span></span></h4>
                      </div>
        
                      <ul>
                        <li><span>
                          Woww with this many $BNANAS you're going to be richer than the King Monkey pretty soon...
                        </span></li>
                      </ul>
        
                      <div className="text-center mt-auto">
                        <button onClick={_ => this.triggerPurchase("5000")} className="buy-btn">Buy Now</button>
                      </div>
        
                    </div>
                  </div>
        
                </div>
        
              </div>
            </section>
        
          </main>
        )
    }
}