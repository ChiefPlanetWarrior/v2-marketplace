"use strict";
exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 3487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IB": () => (/* binding */ NETWORK),
/* harmony export */   "YJ": () => (/* binding */ MARKETPLACE_ADDRESS),
/* harmony export */   "f2": () => (/* binding */ NFT_COLLECTION_ADDRESS),
/* harmony export */   "t0": () => (/* binding */ ETHERSCAN_URL)
/* harmony export */ });
/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5488);
/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__);
/** Replace the values below with the addresses of your smart contracts. */ // 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.

const NETWORK = _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__.Polygon;
// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
const MARKETPLACE_ADDRESS = "0x535D7aEEde5c848705Ead5555296D182A15867DF";
// 3. The address of your NFT collection smart contract.
const NFT_COLLECTION_ADDRESS = "0x1c1dbC21EB4Be122e5c41b9eF158Fcd152Fea114";
// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
const ETHERSCAN_URL = "https://polygonscan.com";


/***/ })

};
;