exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 9540:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__WAGEk",
	"xs": "Container_xs__lmLxX",
	"sm": "Container_sm__NxnH_",
	"md": "Container_md__R9xsg",
	"lg": "Container_lg__ri4gN",
	"xl": "Container_xl__2fgyR"
};


/***/ }),

/***/ 8931:
/***/ ((module) => {

// Exports
module.exports = {
	"skeleton": "Skeleton_skeleton__2C_Ou",
	"pulse": "Skeleton_pulse__kM_6B"
};


/***/ }),

/***/ 5676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9540);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_css__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A container component that sets the max-width of its children, and centers them on the page.
 * @param maxWidth: The max-width of the container. Can be "sm", "md", "lg", "xl", or "2xl".
 */ function Container({ maxWidth , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)} ${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default())[maxWidth]}`,
        children: children
    });
}


/***/ }),

/***/ 1231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8931);
/* harmony import */ var _Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Skeleton({ height , width  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width,
            height,
            borderRadius: "inherit"
        },
        className: (_Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2___default().skeleton)
    });
}


/***/ })

};
;