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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! log4js */ "log4js");
/* harmony import */ var log4js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(log4js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/router */ "./src/router/router.ts");





var App = (function () {
    function App() {
        this.router = new _router_router__WEBPACK_IMPORTED_MODULE_4__["Router"]();
        this.app = express__WEBPACK_IMPORTED_MODULE_0__();
        this.accessLogger = log4js__WEBPACK_IMPORTED_MODULE_2__["getLogger"]('access');
        this.config();
        this.router.roters(this.app);
    }
    App.prototype.config = function () {
        log4js__WEBPACK_IMPORTED_MODULE_2__["configure"]({
            appenders: {
                access: { type: 'console' },
            },
            categories: {
                default: { appenders: ['access'], level: 'info' },
            },
        });
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["urlencoded"]({ extended: true }));
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]());
        this.app.use(cors__WEBPACK_IMPORTED_MODULE_3__());
        this.app.use(log4js__WEBPACK_IMPORTED_MODULE_2__["connectLogger"](this.accessLogger, {
            level: 'INFO',
        }));
    };
    return App;
}());
/* harmony default export */ __webpack_exports__["default"] = (new App().app);


/***/ }),

/***/ "./src/common/Common.ts":
/*!******************************!*\
  !*** ./src/common/Common.ts ***!
  \******************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Common = (function () {
    function Common() {
    }
    Common.readJson = function (filepath) {
        return new Promise(function (resolve) {
            fs__WEBPACK_IMPORTED_MODULE_0__["readFile"](filepath, 'utf8', function (err, data) {
                resolve(JSON.parse(data));
            });
        });
    };
    Common.writeJson = function (filepath, data) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Common.readJson(filepath)];
                    case 1:
                        json = _a.sent();
                        console.log(json);
                        return [2, new Promise(function (resolve) {
                                fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"](filepath, 'utf8', function (err) {
                                    resolve();
                                });
                            })];
                }
            });
        });
    };
    return Common;
}());



/***/ }),

/***/ "./src/controller/telemetory.ts":
/*!**************************************!*\
  !*** ./src/controller/telemetory.ts ***!
  \**************************************/
/*! exports provided: Telemetory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telemetory", function() { return Telemetory; });
/* harmony import */ var _common_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Common */ "./src/common/Common.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var dbpath = 'db/data.json';
var Telemetory = (function () {
    function Telemetory() {
    }
    Telemetory.prototype.get = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].readJson(dbpath)];
                    case 1:
                        json = _a.sent();
                        console.log(json[0].id);
                        response.status(200).send(json);
                        return [2];
                }
            });
        });
    };
    Telemetory.prototype.getById = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var json, id, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].readJson(dbpath)];
                    case 1:
                        json = _a.sent();
                        if (!json) {
                            response.status(404).send({ message: 'not found' });
                            return [2];
                        }
                        id = request.param('id');
                        console.log(json);
                        console.log(typeof json);
                        for (index in json) {
                            console.log(json[index]);
                            if (json[index].id === id) {
                                response.status(200).send(json[index]);
                            }
                        }
                        response.status(404).send({ message: 'not found' });
                        return [2];
                }
            });
        });
    };
    Telemetory.prototype.post = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                response.send('OK!');
                return [2];
            });
        });
    };
    Telemetory.prototype.put = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                response.send('called put method!');
                return [2];
            });
        });
    };
    Telemetory.prototype.delete = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                response.send('called delete method!');
                return [2];
            });
        });
    };
    return Telemetory;
}());



/***/ }),

/***/ "./src/router/router.ts":
/*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _controller_telemetory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/telemetory */ "./src/controller/telemetory.ts");

var ver1 = 'v1';
var Router = (function () {
    function Router() {
        this.telemetory = new _controller_telemetory__WEBPACK_IMPORTED_MODULE_0__["Telemetory"]();
    }
    Router.prototype.roters = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: 'GET request successfulll!!!!',
            });
        });
        app.route("/" + ver1 + "/telemetory")
            .get(this.telemetory.get)
            .post(this.telemetory.post)
            .delete(this.telemetory.delete);
        app.route("/" + ver1 + "/telemetory/:id")
            .get(this.telemetory.getById)
            .put(this.telemetory.put)
            .delete(this.telemetory.delete);
    };
    return Router;
}());



/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");

var PORT = 8080;
_app__WEBPACK_IMPORTED_MODULE_0__["default"].listen(PORT, function () {
    console.log("started on port " + PORT);
});


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci90ZWxlbWV0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9nNGpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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T0FBTyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQzthQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUwsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakNEO0FBQUE7QUFBd0I7QUFHeEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBa0JsQiw0Q0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixJQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkJILHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbi8vIGltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuLy8gaW1wb3J0ICogYXMgaHR0cHMgZnJvbSAnaHR0cHMnO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0ICogYXMgbG9nNGpzIGZyb20gJ2xvZzRqcyc7XHJcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInO1xyXG5cclxuLy8g44K144O844OQ5qeL56+JXHJcbmNsYXNzIEFwcCB7XHJcblxyXG4gICAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcclxuICAgIHByaXZhdGUgYWNjZXNzTG9nZ2VyOiBsb2c0anMuTG9nZ2VyO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcclxuICAgICAgICB0aGlzLmFjY2Vzc0xvZ2dlciA9IGxvZzRqcy5nZXRMb2dnZXIoJ2FjY2VzcycpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucm90ZXJzKHRoaXMuYXBwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZygpIDp2b2lkIHtcclxuICAgICAgICAvLyBsb2dnaW5nXHJcbiAgICAgICAgbG9nNGpzLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICAgIGFwcGVuZGVyczoge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzOiB7IHR5cGU6ICdjb25zb2xlJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7IGFwcGVuZGVyczogWydhY2Nlc3MnXSwgbGV2ZWw6ICdpbmZvJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGNvcnMoKSk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGxvZzRqcy5jb25uZWN0TG9nZ2VyKHRoaXMuYWNjZXNzTG9nZ2VyLCB7XHJcbiAgICAgICAgICAgIGxldmVsIDogJ0lORk8nLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCgpLmFwcDtcclxuIiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkSnNvbihmaWxlcGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZnMucmVhZEZpbGUoZmlsZXBhdGgsICd1dGY4JywgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uLCBkYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGVKc29uKGZpbGVwYXRoOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8e30+IHtcclxuXHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgQ29tbW9uLnJlYWRKc29uKGZpbGVwYXRoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKGZpbGVwYXRoLCAndXRmOCcsIChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb21tb24gfSBmcm9tICcuLi9jb21tb24vQ29tbW9uJztcclxuLy8gaW1wb3J0IHsgVGVsZW1ldG1vcnlNb2RlbCB9IGZyb20gJy4uL21vZGVsL1RlbGVtZXRvcnlNb2RlbCc7XHJcblxyXG5jb25zdCBkYnBhdGg6IHN0cmluZyA9ICdkYi9kYXRhLmpzb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlbGVtZXRvcnkge1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXQocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCBDb21tb24ucmVhZEpzb24oZGJwYXRoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uWzBdLmlkKTtcclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRCeUlkKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgQ29tbW9uLnJlYWRKc29uKGRicGF0aCk7XHJcbiAgICAgICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlOiAnbm90IGZvdW5kJyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSByZXF1ZXN0LnBhcmFtKCdpZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBqc29uKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGpzb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbltpbmRleF0pO1xyXG4gICAgICAgICAgICBpZiAoanNvbltpbmRleF0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKGpzb25baW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2U6ICdub3QgZm91bmQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBwb3N0KHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCgnT0shJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHB1dChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgICAgIHJlc3BvbnNlLnNlbmQoJ2NhbGxlZCBwdXQgbWV0aG9kIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICByZXNwb25zZS5zZW5kKCdjYWxsZWQgZGVsZXRlIG1ldGhvZCEnKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgVGVsZW1ldG9yeSB9IGZyb20gJy4uL2NvbnRyb2xsZXIvdGVsZW1ldG9yeSc7XHJcblxyXG5jb25zdCB2ZXIxOiBzdHJpbmcgPSAndjEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZWxlbWV0b3J5OiBUZWxlbWV0b3J5ID0gbmV3IFRlbGVtZXRvcnkoKTtcclxuXHJcbiAgICBwdWJsaWMgcm90ZXJzKGFwcDogQXBwbGljYXRpb24pIDp2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdGVzdCBhcGlcclxuICAgICAgICBhcHAucm91dGUoJy8nKVxyXG4gICAgICAgIC5nZXQoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXMuanNvbih7J21lc3NhZ2UnOiAnSXQgV29ya3MhISd9KTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0dFVCByZXF1ZXN0IHN1Y2Nlc3NmdWxsbCEhISEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGVsbWV0b3J5IGFwaVxyXG4gICAgICAgIC8vIGFwcC5yb3V0ZShgJHt2ZXIxfS90ZWxlbWV0b3J5YClcclxuICAgICAgICBhcHAucm91dGUoYC8ke3ZlcjF9L3RlbGVtZXRvcnlgKVxyXG4gICAgICAgIC5nZXQodGhpcy50ZWxlbWV0b3J5LmdldClcclxuICAgICAgICAucG9zdCh0aGlzLnRlbGVtZXRvcnkucG9zdClcclxuICAgICAgICAuZGVsZXRlKHRoaXMudGVsZW1ldG9yeS5kZWxldGUpO1xyXG5cclxuICAgICAgICBhcHAucm91dGUoYC8ke3ZlcjF9L3RlbGVtZXRvcnkvOmlkYClcclxuICAgICAgICAuZ2V0KHRoaXMudGVsZW1ldG9yeS5nZXRCeUlkKVxyXG4gICAgICAgIC5wdXQodGhpcy50ZWxlbWV0b3J5LnB1dClcclxuICAgICAgICAuZGVsZXRlKHRoaXMudGVsZW1ldG9yeS5kZWxldGUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcclxuLy8gaW1wb3J0ICogYXMgaHR0cHMgZnJvbSAnaHR0cHMnO1xyXG4vLyBpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmNvbnN0IFBPUlQgPSA4MDgwO1xyXG5cclxuLy8gc3NsIHN1cHBvcnRcclxuLy8gY29uc3Qgc3NsT3B0aW9ucyA9IHtcclxuLy8gICAgIGtleTogZnMucmVhZEZpbGVTeW5jKCdjZXJ0L3NlcnZlci5rZXknKSxcclxuLy8gICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYygnY2VydC9zZXJ2ZXIuY3J0JylcclxuLy8gICB9XHJcbi8vIGNyZWF0ZSBjZXJ0aWZpY2F0ZXMoVGVybWluYWwpXHJcbi8vICQgY2QgY2VydFxyXG4vLyAkIG9wZW5zc2wgZ2VucnNhIC1hZXMxMjggMjA0OCA+IHNlcnZlci5rZXlcclxuLy8gJCBvcGVuc3NsIHJlcSAtbmV3IC1rZXkgc2VydmVyLmtleSA+IHNlcnZlci5jc3JcclxuLy8gJCBvcGVuc3NsIHg1MDkgLWluIHNlcnZlci5jc3IgLWRheXMgMzY1MDAwIC1yZXEgLXNpZ25rZXkgc2VydmVyLmtleSA+IHNlcnZlci5jcnRcclxuXHJcbi8vIGh0dHBzLmNyZWF0ZVNlcnZlcihodHRwc09wdGlvbnMsIGFwcCkubGlzdGVuKFBPUlQsICgpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9YCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gc3RhcnRcclxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3RhcnRlZCBvbiBwb3J0ICR7UE9SVH1gKTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2c0anNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==