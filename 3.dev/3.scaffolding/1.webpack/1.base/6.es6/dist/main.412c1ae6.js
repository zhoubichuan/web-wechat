/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js):\\nSyntaxError: c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\src\\\\index.js: Decorators are not enabled.\\nIf you are using [\\\"@babel/plugin-proposal-decorators\\\", { \\\"legacy\\\": true }], make sure it comes *before* \\\"@babel/plugin-proposal-class-properties\\\" and enable loose mode, like so:\\n\\t[\\\"@babel/plugin-proposal-decorators\\\", { \\\"legacy\\\": true }]\\n\\t[\\\"@babel/plugin-proposal-class-properties\\\", { \\\"loose\\\": true }]\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39mfn()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 | \\u001b[39m\\u001b[33m@\\u001b[39mlog\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mA\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m  a \\u001b[33m=\\u001b[39m \\u001b[35m1\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m}\\u001b[0m\\n    at File.buildCodeFrameError (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_core@7.4.0@@babel\\\\core\\\\lib\\\\transformation\\\\file\\\\file.js:261:12)\\n    at NodePath.buildCodeFrameError (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\path\\\\index.js:157:21)\\n    at verifyUsedFeatures (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_helper-create-class-features-plugin@7.4.0@@babel\\\\helper-create-class-features-plugin\\\\lib\\\\features.js:40:18)\\n    at PluginPass.Class (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_helper-create-class-features-plugin@7.4.0@@babel\\\\helper-create-class-features-plugin\\\\lib\\\\index.js:71:42)\\n    at newFn (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\visitors.js:193:21)\\n    at NodePath._call (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\path\\\\context.js:53:20)\\n    at NodePath.call (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\path\\\\context.js:40:17)\\n    at NodePath.visit (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\path\\\\context.js:88:12)\\n    at TraversalContext.visitQueue (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\context.js:118:16)\\n    at TraversalContext.visitMultiple (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\context.js:85:17)\\n    at TraversalContext.visit (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\context.js:144:19)\\n    at Function.traverse.node (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\index.js:94:17)\\n    at NodePath.visit (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\path\\\\context.js:95:18)\\n    at TraversalContext.visitQueue (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\context.js:118:16)\\n    at TraversalContext.visitSingle (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\context.js:90:19)\\n    at TraversalContext.visit (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\context.js:146:19)\\n    at Function.traverse.node (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\index.js:94:17)\\n    at traverse (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_traverse@7.4.0@@babel\\\\traverse\\\\lib\\\\index.js:76:12)\\n    at transformFile (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_core@7.4.0@@babel\\\\core\\\\lib\\\\transformation\\\\index.js:88:29)\\n    at runSync (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_core@7.4.0@@babel\\\\core\\\\lib\\\\transformation\\\\index.js:45:3)\\n    at runAsync (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_core@7.4.0@@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (c:\\\\FrontEndNote\\\\3.dev\\\\3.scaffolding\\\\1.webpack\\\\1.base\\\\6.es6\\\\node_modules\\\\_@babel_core@7.4.0@@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });