exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 2452:
/***/ ((module) => {

// Exports
module.exports = {
	"nftImage": "NFT_nftImage__XUpsb",
	"nftTokenId": "NFT_nftTokenId__KPWzm",
	"nftName": "NFT_nftName__El7OO",
	"priceContainer": "NFT_priceContainer__Eh8FZ",
	"nftPriceContainer": "NFT_nftPriceContainer__GBfIg",
	"nftPriceLabel": "NFT_nftPriceLabel__NgamC",
	"nftPriceValue": "NFT_nftPriceValue__bDpQk"
};


/***/ }),

/***/ 3029:
/***/ ((module) => {

// Exports
module.exports = {
	"nftGridContainer": "Buy_nftGridContainer__d7KMb",
	"nftContainer": "Buy_nftContainer__SfnF6",
	"title": "Buy_title__pWos_"
};


/***/ }),

/***/ 3704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NFTComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2352);
/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const_contractAddresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3487);
/* harmony import */ var _Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1231);
/* harmony import */ var _NFT_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2452);
/* harmony import */ var _NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NFT_module_css__WEBPACK_IMPORTED_MODULE_5__);






function NFTComponent({ nft  }) {
    const { contract: marketplace , isLoading: loadingContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(_const_contractAddresses__WEBPACK_IMPORTED_MODULE_3__/* .MARKETPLACE_ADDRESS */ .YJ, "marketplace-v3");
    // 1. Load if the NFT is for direct listing
    const { data: directListing , isLoading: loadingDirect  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useValidDirectListings)(marketplace, {
        tokenContract: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_3__/* .NFT_COLLECTION_ADDRESS */ .f2,
        tokenId: nft.metadata.id
    });
    // 2. Load if the NFT is for auction
    const { data: auctionListing , isLoading: loadingAuction  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useValidEnglishAuctions)(marketplace, {
        tokenContract: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_3__/* .NFT_COLLECTION_ADDRESS */ .f2,
        tokenId: nft.metadata.id
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ThirdwebNftMedia, {
                metadata: nft.metadata,
                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftImage)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftTokenId),
                children: [
                    "Token ID #",
                    nft.metadata.id
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftName),
                children: nft.metadata.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().priceContainer),
                children: loadingContract || loadingDirect || loadingAuction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    width: "100%",
                    height: "100%"
                }) : directListing && directListing[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceContainer),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceLabel),
                                children: "Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceValue),
                                children: `${directListing[0]?.currencyValuePerToken.displayValue}
          ${directListing[0]?.currencyValuePerToken.symbol}`
                            })
                        ]
                    })
                }) : auctionListing && auctionListing[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceContainer),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceLabel),
                                children: "Minimum Bid"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceValue),
                                children: `${auctionListing[0]?.minimumBidCurrencyValue.displayValue}
          ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceContainer),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceLabel),
                                children: "Price"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_NFT_module_css__WEBPACK_IMPORTED_MODULE_5___default().nftPriceValue),
                                children: "Not for sale"
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 7467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NFTGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const_contractAddresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3487);
/* harmony import */ var _Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1231);
/* harmony import */ var _NFT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3704);
/* harmony import */ var _styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3029);
/* harmony import */ var _styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6__);







function NFTGrid({ isLoading , data , overrideOnclickBehavior , emptyText ="No NFTs found for this collection."  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6___default().nftGridContainer),
        children: isLoading ? [
            ...Array(20)
        ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6___default().nftContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    width: "100%",
                    height: "312px"
                }, index)
            }, index)) : data && data.length > 0 ? data.map((nft)=>!overrideOnclickBehavior ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/token/${_const_contractAddresses__WEBPACK_IMPORTED_MODULE_3__/* .NFT_COLLECTION_ADDRESS */ .f2}/${nft.metadata.id}`,
                className: (_styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6___default().nftContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NFT__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    nft: nft
                })
            }, nft.metadata.id) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Buy_module_css__WEBPACK_IMPORTED_MODULE_6___default().nftContainer),
                onClick: ()=>overrideOnclickBehavior(nft),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NFT__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    nft: nft
                })
            }, nft.metadata.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: emptyText
        })
    });
}


/***/ })

};
;