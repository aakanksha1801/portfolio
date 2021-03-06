"use strict";
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 9703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6842);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5895);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);


// import { Link } from "react-router-dom";




const Navigation = ()=>{
    const { 0: collapseClasses , 1: setCollapseClasses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onExiting = ()=>setCollapseClasses("collapsing-out");
    const onExited = ()=>setCollapseClasses("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let headroom = new (headroom_js__WEBPACK_IMPORTED_MODULE_3___default())(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            className: "header-global",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {
                className: "navbar-main navbar-transparent navbar-light headroom",
                expand: "lg",
                id: "navbar-main",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavbarBrand, {
                            href: "/",
                            className: "mr-lg-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-white",
                                id: "nav-title",
                                children: _portfolio__WEBPACK_IMPORTED_MODULE_2__/* .greetings.name */ .c0.name
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "navbar-toggler",
                            "aria-label": "navbar_toggle",
                            id: "navbar_global",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.UncontrolledCollapse, {
                            toggler: "#navbar_global",
                            navbar: true,
                            className: collapseClasses,
                            onExiting: onExiting,
                            onExited: onExited,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "navbar-collapse-header",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
                                                className: "collapse-brand",
                                                xs: "6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-black",
                                                    id: "nav-title",
                                                    children: _portfolio__WEBPACK_IMPORTED_MODULE_2__/* .greetings.name */ .c0.name
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
                                                className: "collapse-close",
                                                xs: "6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "navbar-toggler",
                                                    id: "navbar_global",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {
                                    className: "align-items-lg-center ml-lg-auto",
                                    navbar: true,
                                    children: [
                                        _portfolio__WEBPACK_IMPORTED_MODULE_2__/* .socialLinks.instagram */ .KT.instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                                rel: "noopener",
                                                "aria-label": "Instagram",
                                                className: "nav-link-icon",
                                                href: "https://www.instagram.com/toska_wal.dein.sam.keit/",
                                                target: "_blank",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-instagram"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "nav-link-inner--text d-lg-none ml-2",
                                                        children: "Instagram"
                                                    })
                                                ]
                                            })
                                        }),
                                        _portfolio__WEBPACK_IMPORTED_MODULE_2__/* .socialLinks.github */ .KT.github && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                                rel: "noopener",
                                                "aria-label": "Github",
                                                className: "nav-link-icon",
                                                href: "https://github.com/aakanksha1801/",
                                                target: "_blank",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-github"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "nav-link-inner--text d-lg-none ml-2",
                                                        children: "Github"
                                                    })
                                                ]
                                            })
                                        }),
                                        _portfolio__WEBPACK_IMPORTED_MODULE_2__/* .socialLinks.linkedin */ .KT.linkedin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                                rel: "noopener",
                                                "aria-label": "Linkedin",
                                                className: "nav-link-icon",
                                                href: "https://www.linkedin.com/in/aakanksha-jaiswar-949392201/",
                                                target: "_blank",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-linkedin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "nav-link-inner--text d-lg-none ml-2",
                                                        children: "Linkedin"
                                                    })
                                                ]
                                            })
                                        }),
                                        _portfolio__WEBPACK_IMPORTED_MODULE_2__/* .socialLinks.twitter */ .KT.twitter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                                                rel: "noopener",
                                                "aria-label": "Twitter",
                                                className: "nav-link-icon",
                                                href: "https://twitter.com/aakanksha180102",
                                                target: "_blank",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-twitter-square"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "nav-link-inner--text d-lg-none ml-2",
                                                        children: "Twitter"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ })

};
;