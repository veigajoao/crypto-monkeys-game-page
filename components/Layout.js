import React, {Component} from 'react';

import Head from 'next/head';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


export default class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }

        this.triggerConnect.bind(this);
        this.toggleIsOpen.bind(this);
    }


    toggleIsOpen = _ => {
        if (this.state.isOpen) {
            this.setState({isOpen: false})
        } else {
            this.setState({isOpen: true})
        }
    }

    componentDidMount() {
        this.setState({isOpen: true})
    }

    closeModal = _ => {
        this.setState({showModal: false});
    }

    triggerConnect = async () => {
        await this.props.connectClientWallet();
    }

    render() {

        let metaMaskButton1;
        let metaMaskButton2;
        if (this.props.activeAccount == "unset") {
            metaMaskButton1 = <a onClick={() => this.triggerConnect()} role="button" className="btn-getstarted fw-bold d-block d-lg-none">Connect MetaMask</a>
            metaMaskButton2 = <a onClick={() => this.triggerConnect()} role="button" className="btn-getstarted fw-bold">Connect MetaMask</a>

        } else {
            metaMaskButton1 = <a role="button" className="btn-getstarted fw-bold d-block d-lg-none"><img src="assets/img/MetaMask.png" className='metamask-icon me-3'/>0x...{this.props.activeAccount.slice(-4)}</a>
            metaMaskButton2 = <a role="button" className="btn-getstarted fw-bold"><img src="assets/img/MetaMask.png" className='metamask-icon me-3'/>0x...{this.props.activeAccount.slice(-4)}</a>
        }

        let modal;
        if (this.props.fetchInProgress == "sendBlock") {
            modal = (
                <Modal show={true}>
                    <div className="modal-header d-flex justify-content-center">
                        <div className='d-block w-100'>
                            <h5 className="modal-title text-center" id="staticBackdropLabel">Processing Blockchain Transaction</h5>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalBody>
                        MetaMask is sending your transactions to the blockchain. This process usually takes arround 30
                        seconds, but might take longer depending on network congestion. <br/><br/>
                        Remember to approve the transactions when prompted by your MetaMask extension.
                    </ModalBody>
                </Modal>
                
            )
        } else if (this.props.fetchInProgress == "noMM") { 
            modal = (
                <Modal show={true}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">You need to install metamask</h5>
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        In order to purchase $BNANA at our whitelist sale, you need to have MetaMask wallet
                        installed in your browser. <br/><br/>
                        It's really simple, just install it from their website and come back once your done. <br/><br/>
                        <a href="https://metamask.io/" rel="noopener noreferrer" target="_blank">MetaMask website</a>
                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn btn-primary">Understood</button>
                    </div>
                </Modal>
            )
        } else if (this.props.fetchInProgress == "tokenApprovalFailure") {
            modal = (
                <Modal show={true}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Token approval failed</h5>
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Transaction failed at the approval stage. <br/><br/>
                        This can be caused by <br/><br/>
                        (1) you not approving the transaction when prompted by MetaMask, <br/><br/>
                        (2) a bad internet connection or <br/><br/>
                        (3) a problem in your wallet. <br/><br/>
                        If the error persists, please <a href="https://t.me/chatcryptomonkeys" rel="noopener noreferrer" target="_blank">contact our support team through the telegram group</a>
                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn btn-primary">Understood</button>
                    </div>
                </Modal>
            )
        } else if (this.props.fetchInProgress == "whitelistBuyFailure") {
            modal = (
                <Modal show={true}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Whitelist purchase failed</h5>
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Transaction failed at the purchase stage. <br/><br/>
                        This can be caused by <br/><br/>
                        (1) you not approving the transaction when prompted by MetaMask; <br/><br/>
                        (2) you do not own enough BUSD tokens for the purchase, remembering that 
                        the contract address for BUSD in BSC is 0xe9e7cea3dedca5984780bafc599bd69add087d56; <br/><br/>
                        (3) you're not whitelisted or have already bought you quota; <br/><br/>
                        (4) the sale hasn't opened yet, remember that it starts at 12:00 (noon) UTC <br/><br/>
                        (4) your internet connection is problematic at the moment. <br/><br/>
                        If the error persists, please <a href="https://t.me/chatcryptomonkeys" rel="noopener noreferrer" target="_blank">contact our support team through the telegram group</a>
                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn btn-primary">Understood</button>
                    </div>
                </Modal>
            )
        } else if (this.props.fetchInProgress == "justBought") {
            modal = (
                <Modal show={true}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Congrats monkey!</h5>
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        You might just have become a millionaire! <br/><br/>
                        Now you can mint exclusive NFTs once the minting date comes and start earning
                        more $BNANAS by playing the game! <br/><br/>
                        Remeber to hodl as much as possible for greater profit! <br/><br/>
                        Join our <a href="https://discord.io/CryptoMonkeys" rel="noopener noreferrer" target="_blank">discord server</a> and <a href="https://t.me/chatcryptomonkeys" rel="noopener noreferrer" target="_blank">telegram chat</a> for news, tips and other cool monkey stuff!

                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn btn-primary">Uhulllll</button>
                    </div>
                </Modal>
            )
        } else if (this.props.fetchInProgress == "noAllowance") {
            modal = (
                <Modal show={true}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Oops, looks like you're not in the list :(</h5>
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Your current wallet is not registered in our whitelist :( <br/><br/>
                        You can check all selected addresses <a href="https://cryptomonkeys.me/whitelist.txt" rel="noopener noreferrer" target="_blank">in this link</a> <br/><br/>
                        This might be because you already bought your $BNANAS with this wallet in the whitelist <br/><br/>
                        Also, you can have multiple different wallets inside yout metamsk. Check that 
                        you are currently using the correct wallet. <br/><br/>
                        Refresh this page and try again <br/><br/>
                        In case you want to buy but are not in the whitelist, you'll have to 
                        wait until the public sale, that is scheduled for the 27th march. <br/><br/>
                        Join our <a href="https://discord.io/CryptoMonkeys" rel="noopener noreferrer" target="_blank">discord server</a> and <a href="https://t.me/chatcryptomonkeys" rel="noopener noreferrer" target="_blank">telegram chat</a> to know more.

                    </div>
                    <div className="modal-footer">
                        <button onClick={_ => this.props.closeModal()} type="button" className="btn btn-primary">Understood</button>
                    </div>
                </Modal>
            )
        } else {
            modal = ""
        }

        const renderTooltip = props => (
            <Tooltip {...props}>Coming soon</Tooltip>
        );

        return (
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                    <title>Cryptomonkeys - Game</title>
                    <meta content="" name="description"/>
                    <meta content="" name="keywords"/>

                    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KB7PSPQ');`}}></script>

                    <link href="assets/img/favicon.png" rel="icon"/>
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>

                    <script defer src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script defer src="assets/vendor/aos/aos.js"></script>
                    <script defer src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                    <script defer src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                    <script defer src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                    <script defer src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                    <script defer src="assets/js/main.js"></script>

                </Head>
                <header id="header" className="header fixed-top" data-scrollto-offset="0">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <a href="index.html" className="logo d-flex align-items-center ms-3 me-auto me-lg-0">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
    
                        {metaMaskButton1}

                        <nav id="navbar" className="navbar">
                            <ul>
                            <li> 
                                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                    <a href="#"><span>Game</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                </OverlayTrigger>
                            </li>
                            {/* <li className="dropdown"><a href="#"><span>Game</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                <li><a href="#" className="fw-bold active">Farm mode</a></li>
                                <li><a href="#"className="fw-bold">Strategy mode</a></li>
                                <li><a href="#" className="fw-bold">PvP mode</a></li>
                                </ul>
                            </li> */}
                            <li>
                                    <a className="nav-link scrollto" href="#pricing">Buy Token</a>
                            </li>
                            <li>
                                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                    <a className="nav-link scrollto" href="#">NFTs</a>
                                </OverlayTrigger>
                            </li>
                            </ul>
                            {metaMaskButton2}
                            <i className="bi bi-list mobile-nav-toggle d-none"></i>
                        </nav>
                    </div>

                </header>
    
                {this.props.children}
    
                <footer id="footer" className="footer">
                    <div className="footer-legal text-center">
                    <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                        <div className="d-flex flex-column align-items-center align-items-lg-start">
                            <div className="copyright">
                                &copy; Copyright <strong><span>Cryptomonkeys</span></strong>. All Rights Reserved
                            </div>
                        </div>
    
                        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                            <a href="https://twitter.com/_CryptoMonkeys" rel="noopener noreferrer" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="https://t.me/cryptomonkeysgame" rel="noopener noreferrer" target="_blank" className="instagram"><i className="bi bi-telegram"></i></a>
                            <a href="https://discord.io/CryptoMonkeys" rel="noopener noreferrer" target="_blank" className="google-plus"><i className="bi bi-discord"></i></a>
                        </div>
                    </div>
                    </div>
                </footer>
    
                <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

                {modal}

            </div>
        )
    }
}