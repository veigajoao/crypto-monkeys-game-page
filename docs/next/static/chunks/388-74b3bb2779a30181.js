(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[388],{85789:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var s=n(34051),r=n.n(s),a=n(85893),i=n(67294),o=n(9008),l=n(71874),c=n(12053),u=n(33691),d=n(43489);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n,s,r,a,i){try{var o=e[a](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,r)}function m(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?p(e):t}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return b(this,n)}}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(f,e);var t,n,s,i=g(f);function f(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),y(p(t=i.call(this,e)),"toggleIsOpen",(function(e){t.state.isOpen?t.setState({isOpen:!1}):t.setState({isOpen:!0})})),y(p(t),"closeModal",(function(e){t.setState({showModal:!1})})),y(p(t),"triggerConnect",(n=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.connectClientWallet();case 2:case"end":return e.stop()}}),e,this)})).bind(t),function(){var e=this,t=arguments;return new Promise((function(s,r){var a=n.apply(e,t);function i(e){h(a,s,r,i,o,"next",e)}function o(e){h(a,s,r,i,o,"throw",e)}i(void 0)}))}).bind(p(t))),t.state={isOpen:!0},t.triggerConnect.bind(p(t)),t.toggleIsOpen.bind(p(t)),t}return t=f,(n=[{key:"componentDidMount",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e,t,n;if("unset"==this.props.activeAccount){var s=this;e=(0,a.jsx)("a",{onClick:function(){return s.triggerConnect()},role:"button",className:"btn-getstarted fw-bold d-block d-lg-none",children:"Connect MetaMask"}),t=(0,a.jsx)("a",{onClick:function(){return s.triggerConnect()},role:"button",className:"btn-getstarted fw-bold",children:"Connect MetaMask"})}else e=(0,a.jsxs)("a",{role:"button",className:"btn-getstarted fw-bold d-block d-lg-none",children:[(0,a.jsx)("img",{src:"assets/img/MetaMask.png",className:"metamask-icon me-3"}),"0x...",this.props.activeAccount.slice(-4)]}),t=(0,a.jsxs)("a",{role:"button",className:"btn-getstarted fw-bold",children:[(0,a.jsx)("img",{src:"assets/img/MetaMask.png",className:"metamask-icon me-3"}),"0x...",this.props.activeAccount.slice(-4)]});if("sendBlock"==this.props.fetchInProgress)n=(0,a.jsxs)(l.Z,{show:!0,children:[(0,a.jsx)("div",{className:"modal-header d-flex justify-content-center",children:(0,a.jsxs)("div",{className:"d-block w-100",children:[(0,a.jsx)("h5",{className:"modal-title text-center",id:"staticBackdropLabel",children:"Processing Blockchain Transaction"}),(0,a.jsx)("div",{className:"d-flex justify-content-center",children:(0,a.jsx)("div",{className:"spinner-border",role:"status",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})}),(0,a.jsxs)(c.Z,{children:["MetaMask is sending your transactions to the blockchain. This process usually takes arround 30 seconds, but might take longer depending on network congestion. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Remember to approve the transactions when prompted by your MetaMask extension."]})]});else if("noMM"==this.props.fetchInProgress){var r=this;n=(0,a.jsxs)(l.Z,{show:!0,children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"You need to install metamask"}),(0,a.jsx)("button",{onClick:function(e){return r.props.closeModal()},type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("div",{className:"modal-body",children:["In order to purchase $BNANA at our whitelist sale, you need to have MetaMask wallet installed in your browser. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"It's really simple, just install it from their website and come back once your done. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://metamask.io/",rel:"noopener noreferrer",target:"_blank",children:"MetaMask website"})]}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{onClick:function(e){return r.props.closeModal()},type:"button",className:"btn btn-primary",children:"Understood"})})]})}else if("tokenApprovalFailure"==this.props.fetchInProgress){var i=this;n=(0,a.jsxs)(l.Z,{show:!0,children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Token approval failed"}),(0,a.jsx)("button",{onClick:function(e){return i.props.closeModal()},type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("div",{className:"modal-body",children:["Transaction failed at the approval stage. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"This can be caused by ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(1) you not approving the transaction when prompted by MetaMask, ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(2) a bad internet connection or ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(3) a problem in your wallet. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"If the error persists, please ",(0,a.jsx)("a",{href:"https://t.me/chatcryptomonkeys",rel:"noopener noreferrer",target:"_blank",children:"contact our support team through the telegram group"})]}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{onClick:function(e){return i.props.closeModal()},type:"button",className:"btn btn-primary",children:"Understood"})})]})}else if("whitelistBuyFailure"==this.props.fetchInProgress){var p=this;n=(0,a.jsxs)(l.Z,{show:!0,children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Whitelist purchase failed"}),(0,a.jsx)("button",{onClick:function(e){return p.props.closeModal()},type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("div",{className:"modal-body",children:["Transaction failed at the purchase stage. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"This can be caused by ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(1) you not approving the transaction when prompted by MetaMask; ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(2) you do not own enough BUSD tokens for the purchase, remembering that the contract address for BUSD in BSC is 0xe9e7cea3dedca5984780bafc599bd69add087d56; ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(3) you're not whitelisted or have already bought you quota; ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(4) the sale hasn't opened yet, remember that it starts at 12:00 (noon) UTC ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"(4) your internet connection is problematic at the moment. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"If the error persists, please ",(0,a.jsx)("a",{href:"https://t.me/chatcryptomonkeys",rel:"noopener noreferrer",target:"_blank",children:"contact our support team through the telegram group"})]}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{onClick:function(e){return p.props.closeModal()},type:"button",className:"btn btn-primary",children:"Understood"})})]})}else if("justBought"==this.props.fetchInProgress){var h=this;n=(0,a.jsxs)(l.Z,{show:!0,children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Congrats monkey!"}),(0,a.jsx)("button",{onClick:function(e){return h.props.closeModal()},type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("div",{className:"modal-body",children:["You might just have become a millionaire! ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Now you can mint exclusive NFTs once the minting date comes and start earning more $BNANAS by playing the game! ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Remeber to hodl as much as possible for greater profit! ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Join our ",(0,a.jsx)("a",{href:"https://discord.io/CryptoMonkeys",rel:"noopener noreferrer",target:"_blank",children:"discord server"})," and ",(0,a.jsx)("a",{href:"https://t.me/chatcryptomonkeys",rel:"noopener noreferrer",target:"_blank",children:"telegram chat"})," for news, tips and other cool monkey stuff!"]}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{onClick:function(e){return h.props.closeModal()},type:"button",className:"btn btn-primary",children:"Uhulllll"})})]})}else if("noAllowance"==this.props.fetchInProgress){var m=this;n=(0,a.jsxs)(l.Z,{show:!0,children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Oops, looks like you're not in the list :("}),(0,a.jsx)("button",{onClick:function(e){return m.props.closeModal()},type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,a.jsxs)("div",{className:"modal-body",children:["Your current wallet is not registered in our whitelist :( ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"You can check all selected addresses ",(0,a.jsx)("a",{href:"https://cryptomonkeys.me/whitelist.txt",rel:"noopener noreferrer",target:"_blank",children:"in this link"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"This might be because you already bought your $BNANAS with this wallet in the whitelist ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Also, you can have multiple different wallets inside yout metamsk. Check that you are currently using the correct wallet. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Refresh this page and try again ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"In case you want to buy but are not in the whitelist, you'll have to wait until the public sale, that is scheduled for the 27th march. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Join our ",(0,a.jsx)("a",{href:"https://discord.io/CryptoMonkeys",rel:"noopener noreferrer",target:"_blank",children:"discord server"})," and ",(0,a.jsx)("a",{href:"https://t.me/chatcryptomonkeys",rel:"noopener noreferrer",target:"_blank",children:"telegram chat"})," to know more."]}),(0,a.jsx)("div",{className:"modal-footer",children:(0,a.jsx)("button",{onClick:function(e){return m.props.closeModal()},type:"button",className:"btn btn-primary",children:"Understood"})})]})}else n="";var f=function(e){return(0,a.jsx)(d.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){y(e,t,n[t])}))}return e}({},e,{children:"Coming soon"}))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.default,{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"}),(0,a.jsx)("title",{children:"Cryptomonkeys - Game"}),(0,a.jsx)("meta",{content:"",name:"description"}),(0,a.jsx)("meta",{content:"",name:"keywords"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n                    })(window,document,'script','dataLayer','GTM-KB7PSPQ');"}}),(0,a.jsx)("link",{href:"assets/img/favicon.png",rel:"icon"}),(0,a.jsx)("link",{href:"assets/img/apple-touch-icon.png",rel:"apple-touch-icon"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap",rel:"stylesheet"}),(0,a.jsx)("script",{defer:!0,src:"assets/vendor/bootstrap/js/bootstrap.bundle.min.js"}),(0,a.jsx)("script",{defer:!0,src:"assets/vendor/aos/aos.js"}),(0,a.jsx)("script",{defer:!0,src:"assets/vendor/glightbox/js/glightbox.min.js"}),(0,a.jsx)("script",{defer:!0,src:"assets/vendor/isotope-layout/isotope.pkgd.min.js"}),(0,a.jsx)("script",{defer:!0,src:"assets/vendor/swiper/swiper-bundle.min.js"}),(0,a.jsx)("script",{defer:!0,src:"assets/vendor/swiper/swiper-bundle.min.js"}),(0,a.jsx)("script",{defer:!0,src:"assets/js/main.js"})]}),(0,a.jsx)("header",{id:"header",className:"header fixed-top","data-scrollto-offset":"0",children:(0,a.jsxs)("div",{className:"container-fluid d-flex align-items-center justify-content-between",children:[(0,a.jsx)("a",{href:"index.html",className:"logo d-flex align-items-center ms-3 me-auto me-lg-0",children:(0,a.jsx)("img",{src:"assets/img/logo.png",alt:""})}),e,(0,a.jsxs)("nav",{id:"navbar",className:"navbar",children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"nav-link scrollto",href:"https://cryptomonkeys.me",rel:"noopener noreferrer",target:"_blank",children:"Main Site"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u.Z,{placement:"bottom",overlay:f,children:(0,a.jsxs)("a",{href:"#",children:[(0,a.jsx)("span",{children:"Game"})," ",(0,a.jsx)("i",{className:"bi bi-chevron-down dropdown-indicator"})]})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"nav-link scrollto",href:"#pricing",children:"Buy Token"})}),(0,a.jsx)("li",{children:(0,a.jsx)(u.Z,{placement:"bottom",overlay:f,children:(0,a.jsx)("a",{className:"nav-link scrollto",href:"#",children:"NFTs"})})})]}),t,(0,a.jsx)("i",{className:"bi bi-list mobile-nav-toggle d-none"})]})]})}),this.props.children,(0,a.jsx)("footer",{id:"footer",className:"footer",children:(0,a.jsx)("div",{className:"footer-legal text-center",children:(0,a.jsxs)("div",{className:"container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center",children:[(0,a.jsx)("div",{className:"d-flex flex-column align-items-center align-items-lg-start",children:(0,a.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",(0,a.jsx)("strong",{children:(0,a.jsx)("span",{children:"Cryptomonkeys"})}),". All Rights Reserved"]})}),(0,a.jsxs)("div",{className:"social-links order-first order-lg-last mb-3 mb-lg-0",children:[(0,a.jsx)("a",{href:"https://twitter.com/_CryptoMonkeys",rel:"noopener noreferrer",target:"_blank",className:"twitter",children:(0,a.jsx)("i",{className:"bi bi-twitter"})}),(0,a.jsx)("a",{href:"https://t.me/cryptomonkeysgame",rel:"noopener noreferrer",target:"_blank",className:"instagram",children:(0,a.jsx)("i",{className:"bi bi-telegram"})}),(0,a.jsx)("a",{href:"https://discord.io/CryptoMonkeys",rel:"noopener noreferrer",target:"_blank",className:"google-plus",children:(0,a.jsx)("i",{className:"bi bi-discord"})})]})]})})}),(0,a.jsx)("a",{href:"#",className:"scroll-top d-flex align-items-center justify-content-center",children:(0,a.jsx)("i",{className:"bi bi-arrow-up-short"})}),n]})}}])&&m(t.prototype,n),s&&m(t,s),f}(i.Component)},96987:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(85893);n(67294),n(9008);function r(e){return(0,s.jsx)("section",{id:"hero-animated",className:"hero-animated d-flex align-items-center bg-secondary",children:(0,s.jsxs)("div",{className:"container d-flex flex-column justify-content-center align-items-center text-center position-relative","data-aos":"zoom-out",children:[(0,s.jsx)("img",{src:"assets/img/whitelist/Case Gold Bananas.png",className:"img-fluid animated",style:{height:"50vh",marginBottom:"5vh"}}),(0,s.jsxs)("div",{className:"d-block",children:[(0,s.jsxs)("h2",{children:["TIME TO HODL ",(0,s.jsx)("span",{children:"$BNANA"})]}),(0,s.jsx)("a",{href:"#pricing",className:"btn-get-started scrollto",children:"Buy $BNANA now"})]}),(0,s.jsx)("p",{className:"pt-3",children:"We're currently on whitelist phase. We've just release 100 buy spots for the first to buy the token through the site. Hurry up monkeys!"})]})})}},33307:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(34051),r=n.n(s),a=n(85893),i=n(67294);n(9008);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n,s,r,a,i){try{var o=e[a](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,r)}function c(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?o(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return d(this,n)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,s,i=m(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).triggerPurchase=t.triggerPurchase.bind(o(t)),t}return t=u,(n=[{key:"triggerPurchase",value:function(e){return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.purchaseFunction(e);case 2:case"end":return t.stop()}}),t,this)})).bind(this),function(){var e=this,n=arguments;return new Promise((function(s,r){var a=t.apply(e,n);function i(e){l(a,s,r,i,o,"next",e)}function o(e){l(a,s,r,i,o,"throw",e)}i(void 0)}))})();var t}},{key:"render",value:function(){var e=this;return(0,a.jsx)("main",{id:"main",className:"bg-secondary",children:(0,a.jsx)("section",{id:"pricing",className:"pricing",children:(0,a.jsxs)("div",{className:"container","data-aos":"fade-up",children:[(0,a.jsxs)("div",{className:"section-header",children:[(0,a.jsx)("h2",{children:"Whitelist options"}),(0,a.jsx)("button",{type:"button",className:"btn btn-lg btn-success",disabled:!0,children:"Flash sale. Only 100 Wallets will be able to buy $BNANAS at whitelist price"}),(0,a.jsx)("p",{className:"mt-3",children:"You can only buy one option a single time. After the whitelist period is expired, if there are still tokens left, sales will be opened to everyone for a limited time period."})]}),(0,a.jsxs)("div",{className:"row gy-4",children:[(0,a.jsx)("div",{className:"col-lg-4","data-aos":"zoom-in","data-aos-delay":"200",children:(0,a.jsxs)("div",{className:"pricing-item",children:[(0,a.jsxs)("div",{className:"pricing-header",children:[(0,a.jsx)("h3",{children:"1,500 BNANA"}),(0,a.jsxs)("h4",{children:[(0,a.jsx)("sup",{children:"BUSD"})," 97.50",(0,a.jsx)("span",{})]})]}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"A good option for intern monkeys, starting to invest in cryptocurrency"})})}),(0,a.jsx)("div",{className:"text-center mt-auto",children:(0,a.jsx)("button",{onClick:function(t){return e.triggerPurchase("1500")},className:"buy-btn",children:"Buy Now"})})]})}),(0,a.jsx)("div",{className:"col-lg-4","data-aos":"zoom-in","data-aos-delay":"400",children:(0,a.jsxs)("div",{className:"pricing-item",children:[(0,a.jsxs)("div",{className:"pricing-header",children:[(0,a.jsx)("h3",{children:"2,500 BNANA"}),(0,a.jsxs)("h4",{children:[(0,a.jsx)("sup",{children:"BUSD"})," 162.50",(0,a.jsx)("span",{})]})]}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"A great deal of $BNANAS to start your own monkey squad. Cryptoinvestor monkey started his empire with this ammount"})})}),(0,a.jsx)("div",{className:"text-center mt-auto",children:(0,a.jsx)("button",{onClick:function(t){return e.triggerPurchase("2500")},className:"buy-btn",children:"Buy Now"})})]})}),(0,a.jsx)("div",{className:"col-lg-4","data-aos":"zoom-in","data-aos-delay":"600",children:(0,a.jsxs)("div",{className:"pricing-item featured",children:[(0,a.jsxs)("div",{className:"pricing-header",children:[(0,a.jsx)("h3",{children:"5,000 BNANA"}),(0,a.jsxs)("h4",{children:[(0,a.jsx)("sup",{children:"BUSD"})," 325.00",(0,a.jsx)("span",{})]})]}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)("span",{children:"Woww with this many $BNANAS you're going to be richer than the King Monkey pretty soon..."})})}),(0,a.jsx)("div",{className:"text-center mt-auto",children:(0,a.jsx)("button",{onClick:function(t){return e.triggerPurchase("5000")},className:"buy-btn",children:"Buy Now"})})]})})]})]})})})}}])&&c(t.prototype,n),s&&c(t,s),u}(i.Component)},26709:function(e,t,n){"use strict";n.d(t,{U:function(){return k}});var s=n(34051),r=n.n(s),a=n(3283),i=n.n(a),o=n(92003),l=n.n(o),c=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_ERC20TokenSourceWallet","type":"address"},{"internalType":"address","name":"_saleTokenAddress","type":"address"},{"internalType":"address","name":"_priceTokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"uint256","name":"_tokenOffer1","type":"uint256"},{"internalType":"uint256","name":"_tokenOffer2","type":"uint256"},{"internalType":"uint256","name":"_tokenOffer3","type":"uint256"},{"internalType":"address[]","name":"_whiteListAddresses","type":"address[]"},{"internalType":"uint256[]","name":"_whiteListBuyLimits","type":"uint256[]"},{"internalType":"bool","name":"_whitelistOnly","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"ERC20TokenSourceWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenQuantity","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_whitelistOnly","type":"bool"}],"name":"changeWhitelistRequirement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getCurrentAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxBuyMapping","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOffer1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOffer2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOffer3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]}'),u=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');function d(e,t,n,s,r,a,i){try{var o=e[a](i),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(s,r)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var a=e.apply(t,n);function i(e){d(a,s,r,i,o,"next",e)}function o(e){d(a,s,r,i,o,"throw",e)}i(void 0)}))}}var h,m,y=c.Mt,f=u.Mt,b="0x38",x=["https://bsc-dataseed.binance.org/","https://bsc-dataseed1.defibit.io/","https://bsc-dataseed1.ninicoin.io/","https://bsc-dataseed2.defibit.io/","https://bsc-dataseed3.defibit.io/","https://bsc-dataseed4.defibit.io/","https://bsc-dataseed2.ninicoin.io/","https://bsc-dataseed3.ninicoin.io/","https://bsc-dataseed4.ninicoin.io/","https://bsc-dataseed1.binance.org/","https://bsc-dataseed2.binance.org/","https://bsc-dataseed3.binance.org/","https://bsc-dataseed4.binance.org/"],j=["https://bscscan.com/"],g=function(){var e=p(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.prev=8,e.next=11,ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:b,chainName:"Binance Smart Chain",rpcUrls:x,nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},blockExplorerUrls:j}]});case 11:return e.abrupt("return",!0);case 14:return e.prev=14,e.t1=e.catch(8),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,6],[8,14]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=p(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:"0xf9b27685bfaAF96AaedffD45DA69BF7F5d0ea07D",symbol:"BNANA",decimals:18,image:"https://game.cryptomonkeys.me/assets/img/whitelist/Case Gold Bananas.png"}}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=p(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ethereum.request({method:"eth_chainId"});case 2:if(e.sent==b){e.next=9;break}return e.next=6,g();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=p(r().mark((function e(){var t,n,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=4,l()();case 4:null==(m=e.sent)&&(m="undefined"),e.next=9;break;case 8:m="undefined";case 9:if("undefined"===m){e.next=19;break}return h=new(i())(m),e.next=13,w();case 13:return n=e.sent,t={isUserWallet:!0,web3:h,networkSuccess:n,whitelistContract:new h.eth.Contract(y,"0x8E0ED58bAf27CA6f8FE61317C7cf53BB37e5b00f"),priceTokenContract:new h.eth.Contract(f,"0xe9e7cea3dedca5984780bafc599bd69add087d56")},e.next=17,v();case 17:e.next=20;break;case 19:s=new(i().providers.HttpProvider)("https://data-seed-prebsc-1-s1.binance.org:8545/"),h=new(i())(s),t={isUserWallet:!1,web3:h,networkSuccess:!0,whitelistContract:!1,priceTokenContract:!1};case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}}]);