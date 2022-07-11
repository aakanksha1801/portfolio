"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ZFeedbacks)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(6842);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(4931);
;// CONCATENATED MODULE: ./components/ZFeedbackCard.jsx




const FeedbackCard = ({ data  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_reveal_.Fade, {
        bottom: true,
        duration: 2000,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
            className: "card-lift--hover shadow mt-4",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.CardBody, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-flex px-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pl-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-info",
                                children: data.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "description mt-3",
                                children: data.feedback
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const ZFeedbackCard = (FeedbackCard);

;// CONCATENATED MODULE: ./containers/ZFeedbacks.jsx






const Feedbacks = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-star text-info"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "display-3 text-info",
                                children: "MY INTERESTS"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                    className: "row-grid align-items-center",
                    children: portfolio/* feedbacks.map */.KK.map((data, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            lg: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ZFeedbackCard, {
                                data: data
                            })
                        }, i);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ZFeedbacks = (Feedbacks);


/***/ })

};
;