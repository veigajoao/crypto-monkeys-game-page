(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(53678)}])},53678:function(t,e,n){"use strict";n.r(e);var r=n(34051),o=n.n(r),s=n(85893),c=n(67294),a=n(26709),i=n(85789),u=n(96987),l=n(33307),f=n(2711),h=n.n(f),p=n(44431),w=n.n(p);function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e,n,r,o,s,c){try{var a=t[s](c),i=a.value}catch(u){return void n(u)}a.done?e(i):Promise.resolve(i).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function c(t){v(s,r,o,c,a,"next",t)}function a(t){v(s,r,o,c,a,"throw",t)}c(void 0)}))}}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return!e||"object"!==x(e)&&"function"!==typeof e?b(t):e}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var x=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}var _=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(f,t);var e,n,r,c=P(f);function f(t){var e,n,r,s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),e=c.call(this,t),n=b(e),r="getWalletAllowance",s=d(o().mark((function t(){var e,n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return e=t.sent,n=e[0],t.next=6,this.state.whitelistContract.methods.getCurrentAllowance(n).call();case 6:r=t.sent,this.setState({allowance:r,activeAccount:n});case 8:case"end":return t.stop()}}),t,this)})).bind(e)).bind(b(e)),r in n?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,e.state={isUserWallet:!1,web3:"",networkSuccess:!1,whitelistContract:!1,priceTokenContract:!1,allowance:"unset",activeAccount:"unset",fetchInProgress:!1},e.connectClientWallet.bind(b(e)),e.getWalletAllowance.bind(b(e)),e.purchaseToken.bind(b(e)),e.closeModal.bind(b(e)),e}return e=f,(n=[{key:"connectClientWallet",value:function(){return d(o().mark((function t(){var e,n,r,s,c,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.U)();case 2:if(e=t.sent,n=e.isUserWallet,r=e.web3,s=e.networkSuccess,c=e.whitelistContract,i=e.priceTokenContract,this.setState({isUserWallet:n,web3:r,networkSuccess:s,whitelistContract:c,priceTokenContract:i}),!this.state.isUserWallet){t.next=14;break}return t.next=12,this.getWalletAllowance();case 12:t.next=15;break;case 14:this.setState({fetchInProgress:"noMM"});case 15:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"purchaseToken",value:function(t){return d(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isUserWallet){e.next=33;break}return n=this.state.web3.utils.toWei(w()(t).multipliedBy("0.065").toString()),r=this.state.web3.utils.toWei(t,"ether"),this.setState({fetchInProgress:"sendBlock"}),e.prev=5,e.next=8,this.state.priceTokenContract.methods.approve(this.state.whitelistContract.options.address,n).send({from:this.state.activeAccount});case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(5),this.setState({fetchInProgress:"tokenApprovalFailure"}),console.log(e.t0),e.abrupt("return","");case 15:return e.prev=15,e.next=18,this.state.whitelistContract.methods.buyTokens(r).send({gas:"1000000",from:this.state.activeAccount});case 18:e.next=25;break;case 20:return e.prev=20,e.t1=e.catch(15),this.setState({fetchInProgress:"whitelistBuyFailure"}),console.log(e.t1),e.abrupt("return","");case 25:return this.setState({fetchInProgress:"justBought"}),e.next=28,this.getWalletAllowance();case 28:e.next=31;break;case 30:this.setState({fetchInProgress:"noAllowance"});case 31:e.next=34;break;case 33:this.setState({fetchInProgress:"noMM"});case 34:case"end":return e.stop()}}),e,this,[[5,10],[15,20]])})).bind(this))()}},{key:"closeModal",value:function(){return d(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({fetchInProgress:!1});case 1:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"componentDidMount",value:function(){h().init({duration:2e3})}},{key:"render",value:function(){var t=this;return(0,s.jsxs)(i.Z,{connectClientWallet:function(e){return t.connectClientWallet()},activeAccount:this.state.activeAccount,fetchInProgress:this.state.fetchInProgress,closeModal:function(e){return t.closeModal()},children:[(0,s.jsx)(u.Z,{}),(0,s.jsx)(l.Z,{isUserWallet:this.state.isUserWallet,allowance:this.state.allowance,purchaseFunction:function(e){return t.purchaseToken(e)}})]})}}])&&y(e.prototype,n),r&&y(e,r),f}(c.Component);e.default=_}},function(t){t.O(0,[482,714,901,388,774,888,179],(function(){return e=78581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);