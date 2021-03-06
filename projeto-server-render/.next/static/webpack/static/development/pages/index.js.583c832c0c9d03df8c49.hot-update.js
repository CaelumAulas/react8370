webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/omariosouto/Desktop/geraprojeto/projeto-server-render/pages/index.js";

 // Usando isso, vc é obrigado a usar Node
// Aprender a lidar com uma infra de Node

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps() {
    console.log('antes do fetch');
    const dadosDousuario = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()('https://api.github.com/users/omariosouto').then(resposta => {
      return resposta.json();
    });
    console.log('depois do fetch');
    return {
      login: dadosDousuario.login
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Ol\xE1 mundo!", this.props.login);
  }

}

/***/ })

})
//# sourceMappingURL=index.js.583c832c0c9d03df8c49.hot-update.js.map