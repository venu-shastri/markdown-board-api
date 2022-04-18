"use strict";
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 5074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7533);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9357);
// If you don't want to use TypeScript you can delete this file!
const UsingTypescript=({data,path})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"Using TypeScript"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Gatsby supports TypeScript by default!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"This means that you can create and write ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,".ts/.tsx")," files for your pages, components etc. Please note that the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"gatsby-*.js")," files (like gatsby-node.js) currently don't support TypeScript yet."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"For type checking you'll want to install ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"typescript")," via npm and run ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"tsc --init")," to create a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em",null,"tsconfig")," file."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"You're currently on the page \"",path,"\" which was built on"," ",data.site.buildTime,"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"To learn more, head over to our"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://www.gatsbyjs.com/docs/typescript/"},"documentation about TypeScript"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},"Go back to the homepage"));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsingTypescript);const query="2907560070";

/***/ }),

/***/ 5592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/Venu/Documents/markdown-board-api/node_modules/react/index.js"
var index_js_ = __webpack_require__(7056);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=({siteTitle})=>/*#__PURE__*/index_js_.createElement("header",{style:{background:`rebeccapurple`,marginBottom:`1.45rem`}},/*#__PURE__*/index_js_.createElement("div",{style:{margin:`0 auto`,maxWidth:960,padding:`1.45rem 1.0875rem`}},/*#__PURE__*/index_js_.createElement("h1",{style:{margin:0}},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/",style:{color:`white`,textDecoration:`none`}},siteTitle))));Header.propTypes={siteTitle:(prop_types_default()).string};Header.defaultProps={siteTitle:``};/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */const Layout=({children})=>{var _data$site$siteMetada;const data=(0,gatsby_browser_entry.useStaticQuery)("3649515864");return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||`Title`}),/*#__PURE__*/index_js_.createElement("div",{style:{margin:`0 auto`,maxWidth:960,padding:`0 1.0875rem 1.45rem`}},/*#__PURE__*/index_js_.createElement("main",null,children),/*#__PURE__*/index_js_.createElement("footer",{style:{marginTop:`2rem`}},"\xA9 ",new Date().getFullYear(),", Built with",` `,/*#__PURE__*/index_js_.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))));};Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7533);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function Seo({description,lang,meta,title}){var _site$siteMetadata,_site$siteMetadata2;const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;const defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:defaultTitle?`%s | ${defaultTitle}`:null,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`},{name:`twitter:card`,content:`summary`},{name:`twitter:creator`,content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||``},{name:`twitter:title`,content:title},{name:`twitter:description`,content:metaDescription}].concat(meta)});}Seo.defaultProps={lang:`en`,meta:[],description:``};Seo.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-using-typescript-tsx.js.map