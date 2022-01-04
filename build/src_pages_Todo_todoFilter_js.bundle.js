"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp_batch_2"] = self["webpackChunkcss_corp_batch_2"] || []).push([["src_pages_Todo_todoFilter_js"],{

/***/ "./src/pages/Todo/todoFilter.js":
/*!**************************************!*\
  !*** ./src/pages/Todo/todoFilter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_todoContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/todoContext */ \"./src/context/todoContext.js\");\n\n\n\n\n\nvar TodoFilter = function TodoFilter() {\n  console.log('TodoFilter render');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_todoContext__WEBPACK_IMPORTED_MODULE_2__.TodoConsumer, null, function (filterType, loadTodo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"button\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex-1', {\n        'text-red-400': filterType === 'all'\n      }),\n      onClick: function onClick() {\n        return loadTodo('all');\n      }\n    }, \"All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"button\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex-1', {\n        'text-red-400': filterType === 'pending'\n      }),\n      onClick: function onClick() {\n        return loadTodo('pending');\n      }\n    }, \"Pending\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"button\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex-1', {\n        'text-red-400': filterType === 'completed'\n      }),\n      onClick: function onClick() {\n        return loadTodo('completed');\n      }\n    }, \"Completed\"));\n  });\n};\n\nTodoFilter.displayName = 'TodoFilter';\nTodoFilter.propTypes = {\n  filterTodo: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TodoFilter));\n\n//# sourceURL=webpack://css-corp-batch-2/./src/pages/Todo/todoFilter.js?");

/***/ })

}]);