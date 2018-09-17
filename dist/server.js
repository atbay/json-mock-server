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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        fs__WEBPACK_IMPORTED_MODULE_0__["readFile"](filepath, 'utf8', function (err, data) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(JSON.parse(data));
                            }
                        });
                    })];
            });
        });
    };
    Common.writeJson = function (filepath, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"](filepath, data, function (err) {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve();
                            }
                        });
                    })];
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
                        response.status(200).send(json);
                        return [2];
                }
            });
        });
    };
    Telemetory.prototype.getById = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var json, id, index, resJson, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].readJson(dbpath)];
                    case 1:
                        json = _a.sent();
                        if (json) {
                            id = request.param('id');
                            for (index in json) {
                                if (json[index].UtmId === id) {
                                    resJson = json[index];
                                    resJson.Result = 'Success';
                                    response.status(200).send(resJson);
                                    break;
                                }
                            }
                        }
                        response.status(404).send({ message: 'Not Found.' });
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        response.status(500).send({ message: 'Internal Server Error.' });
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Telemetory.prototype.post = function (request, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var json, _a, _b, _i, index, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (request.headers['content-type'] !== 'application/json' ||
                            (request.body == null && request.body.UtmId == null)) {
                            console.log("post reqeust " + request.body);
                            response.status(400).send({
                                message: "Bad Content-type [" + request.headers['content-type'] + "]",
                                requestBody: "" + request.body,
                            });
                            return [2];
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 7, , 8]);
                        return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].readJson(dbpath)];
                    case 2:
                        json = _c.sent();
                        if (!json) {
                            json = [];
                        }
                        _a = [];
                        for (_b in json)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3, 6];
                        index = _a[_i];
                        if (!(json[index].UtmId === request.body.UtmId)) return [3, 5];
                        json.splice(index, 1);
                        return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].writeJson(dbpath, JSON.stringify(json))];
                    case 4:
                        _c.sent();
                        return [3, 6];
                    case 5:
                        _i++;
                        return [3, 3];
                    case 6:
                        json.push(request.body);
                        console.log("add data " + json);
                        _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].writeJson(dbpath, JSON.stringify(json, undefined, 1));
                        response.status(201).send('OK!');
                        return [3, 8];
                    case 7:
                        error_2 = _c.sent();
                        console.log(error_2);
                        return [3, 8];
                    case 8: return [2];
                }
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
            var id, json, _a, _b, _i, index, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        id = request.param('id');
                        return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].readJson(dbpath)];
                    case 1:
                        json = _c.sent();
                        if (!json) return [3, 5];
                        _a = [];
                        for (_b in json)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        index = _a[_i];
                        if (!(json[index].UtmId === id)) return [3, 4];
                        json.splice(index, 1);
                        return [4, _common_Common__WEBPACK_IMPORTED_MODULE_0__["Common"].writeJson(dbpath, JSON.stringify(json))];
                    case 3:
                        _c.sent();
                        return [3, 5];
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5:
                        response.status(200).send({ message: 'OK!' });
                        return [3, 7];
                    case 6:
                        error_3 = _c.sent();
                        console.log(error_3);
                        response.status(500).send({ message: 'Internal Server Error.' });
                        return [3, 7];
                    case 7: return [2];
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci90ZWxlbWV0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9nNGpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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LE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLElBQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN2Qkgsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuLy8gaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG4vLyBpbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBsb2c0anMgZnJvbSAnbG9nNGpzJztcclxuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcclxuXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcic7XHJcblxyXG4vLyDjgrXjg7zjg5Dmp4vnr4lcclxuY2xhc3MgQXBwIHtcclxuXHJcbiAgICBwdWJsaWMgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBhY2Nlc3NMb2dnZXI6IGxvZzRqcy5Mb2dnZXI7XHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzTG9nZ2VyID0gbG9nNGpzLmdldExvZ2dlcignYWNjZXNzJyk7XHJcbiAgICAgICAgdGhpcy5jb25maWcoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5yb3RlcnModGhpcy5hcHApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uZmlnKCkgOnZvaWQge1xyXG4gICAgICAgIC8vIGxvZ2dpbmdcclxuICAgICAgICBsb2c0anMuY29uZmlndXJlKHtcclxuICAgICAgICAgICAgYXBwZW5kZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3M6IHsgdHlwZTogJ2NvbnNvbGUnIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHsgYXBwZW5kZXJzOiBbJ2FjY2VzcyddLCBsZXZlbDogJ2luZm8nIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UoY29ycygpKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UobG9nNGpzLmNvbm5lY3RMb2dnZXIodGhpcy5hY2Nlc3NMb2dnZXIsIHtcclxuICAgICAgICAgICAgbGV2ZWwgOiAnSU5GTycsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKCkuYXBwO1xyXG4iLCJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlYWRKc29uKGZpbGVwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZzLnJlYWRGaWxlKGZpbGVwYXRoLCAndXRmOCcsIChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbiwgZGF0YTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGVKc29uKGZpbGVwYXRoOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IFByb21pc2U8e30+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUoZmlsZXBhdGgsIGRhdGEsIChlcnI6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gJy4uL2NvbW1vbi9Db21tb24nO1xyXG4vLyBpbXBvcnQgeyBUZWxlbWV0bW9yeU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvVGVsZW1ldG9yeU1vZGVsJztcclxuXHJcbmNvbnN0IGRicGF0aDogc3RyaW5nID0gJ2RiL2RhdGEuanNvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVsZW1ldG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6rjgr3jg7zjgrnlj5blvpcoYWxsKVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gbmV4dCBuZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXQocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCBDb21tb24ucmVhZEpzb24oZGJwYXRoKTtcclxuICAgICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKGpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Oq44K944O844K55Y+W5b6XKElEKVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gbmV4dCBuZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRCeUlkKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgQ29tbW9uLnJlYWRKc29uKGRicGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHJlcXVlc3QucGFyYW0oJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGpzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbltpbmRleF0uVXRtSWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc0pzb24gPSBqc29uW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzSnNvbi5SZXN1bHQgPSAnU3VjY2Vzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLnNlbmQocmVzSnNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNDA0KS5zZW5kKHsgbWVzc2FnZTogJ05vdCBGb3VuZC4nIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IuJyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Oq44K944O844K56L+95YqgXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBuZXh0IG5leHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHBvc3QocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAocmVxdWVzdC5oZWFkZXJzWydjb250ZW50LXR5cGUnXSAhPT0gJ2FwcGxpY2F0aW9uL2pzb24nIHx8XHJcbiAgICAgICAgIChyZXF1ZXN0LmJvZHkgPT0gbnVsbCAmJiByZXF1ZXN0LmJvZHkuVXRtSWQgPT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHBvc3QgcmVxZXVzdCAke3JlcXVlc3QuYm9keX1gKTtcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgQmFkIENvbnRlbnQtdHlwZSBbJHtyZXF1ZXN0LmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddIH1dYCxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5OiBgJHtyZXF1ZXN0LmJvZHl9YCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBqc29uOiBhbnkgPSBhd2FpdCBDb21tb24ucmVhZEpzb24oZGJwYXRoKTtcclxuICAgICAgICAgICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g6YeN6KSH44GZ44KLSUTjgpLliYrpmaRcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiBqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbltpbmRleF0uVXRtSWQgPT09IHJlcXVlc3QuYm9keS5VdG1JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb24uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBDb21tb24ud3JpdGVKc29uKGRicGF0aCwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpzb24ucHVzaChyZXF1ZXN0LmJvZHkpO1xyXG4gICAgICAgICAgICAvLyBhd2FpdCB0aGlzLmRlbGV0ZUlkKHJlcXVlc3QuYm9keS5VdG1JZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhZGQgZGF0YSAke2pzb259YCk7XHJcbiAgICAgICAgICAgIENvbW1vbi53cml0ZUpzb24oZGJwYXRoLCBKU09OLnN0cmluZ2lmeShqc29uLCB1bmRlZmluZWQsIDEpKTsgLy8g5pW05b2i44GX44Gf5b2i44Gn5Ye65YqbXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDEpLnNlbmQoJ09LIScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHB1dChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgICAgIHJlc3BvbnNlLnNlbmQoJ2NhbGxlZCBwdXQgbWV0aG9kIScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog44Oq44K944O844K55YmK6ZmkXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBuZXh0IG5leHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZShyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcmVxdWVzdC5wYXJhbSgnaWQnKTtcclxuICAgICAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgQ29tbW9uLnJlYWRKc29uKGRicGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGpzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbltpbmRleF0uVXRtSWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgQ29tbW9uLndyaXRlSnNvbihkYnBhdGgsIEpTT04uc3RyaW5naWZ5KGpzb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGF3YWl0IHRoaXMuZGVsZXRlSWQoaWQpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogJ09LIScgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ0ludGVybmFsIFNlcnZlciBFcnJvci4nIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIGRlbGV0ZUlkKGlkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2FsbCEhIScpO1xyXG4gICAgLy8gICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IENvbW1vbi5yZWFkSnNvbihkYnBhdGgpO1xyXG4gICAgLy8gICAgIGlmIChqc29uKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4ganNvbikge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGpzb25baW5kZXhdLlV0bUlkID09PSBpZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGpzb24uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBhd2FpdCBDb21tb24ud3JpdGVKc29uKGRicGF0aCwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBUZWxlbWV0b3J5IH0gZnJvbSAnLi4vY29udHJvbGxlci90ZWxlbWV0b3J5JztcclxuXHJcbmNvbnN0IHZlcjE6IHN0cmluZyA9ICd2MSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuXHJcbiAgICBwcml2YXRlIHRlbGVtZXRvcnk6IFRlbGVtZXRvcnkgPSBuZXcgVGVsZW1ldG9yeSgpO1xyXG5cclxuICAgIHB1YmxpYyByb3RlcnMoYXBwOiBBcHBsaWNhdGlvbikgOnZvaWQge1xyXG5cclxuICAgICAgICAvLyB0ZXN0IGFwaVxyXG4gICAgICAgIGFwcC5yb3V0ZSgnLycpXHJcbiAgICAgICAgLmdldCgocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlcy5qc29uKHsnbWVzc2FnZSc6ICdJdCBXb3JrcyEhJ30pO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnR0VUIHJlcXVlc3Qgc3VjY2Vzc2Z1bGxsISEhIScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0ZWxtZXRvcnkgYXBpXHJcbiAgICAgICAgLy8gYXBwLnJvdXRlKGAke3ZlcjF9L3RlbGVtZXRvcnlgKVxyXG4gICAgICAgIGFwcC5yb3V0ZShgLyR7dmVyMX0vdGVsZW1ldG9yeWApXHJcbiAgICAgICAgLmdldCh0aGlzLnRlbGVtZXRvcnkuZ2V0KVxyXG4gICAgICAgIC5wb3N0KHRoaXMudGVsZW1ldG9yeS5wb3N0KVxyXG4gICAgICAgIC5kZWxldGUodGhpcy50ZWxlbWV0b3J5LmRlbGV0ZSk7XHJcblxyXG4gICAgICAgIGFwcC5yb3V0ZShgLyR7dmVyMX0vdGVsZW1ldG9yeS86aWRgKVxyXG4gICAgICAgIC5nZXQodGhpcy50ZWxlbWV0b3J5LmdldEJ5SWQpXHJcbiAgICAgICAgLnB1dCh0aGlzLnRlbGVtZXRvcnkucHV0KVxyXG4gICAgICAgIC5kZWxldGUodGhpcy50ZWxlbWV0b3J5LmRlbGV0ZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG4vLyBpbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XHJcbi8vIGltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuY29uc3QgUE9SVCA9IDgwODA7XHJcblxyXG4vLyBzc2wgc3VwcG9ydFxyXG4vLyBjb25zdCBzc2xPcHRpb25zID0ge1xyXG4vLyAgICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoJ2NlcnQvc2VydmVyLmtleScpLFxyXG4vLyAgICAgY2VydDogZnMucmVhZEZpbGVTeW5jKCdjZXJ0L3NlcnZlci5jcnQnKVxyXG4vLyAgIH1cclxuLy8gY3JlYXRlIGNlcnRpZmljYXRlcyhUZXJtaW5hbClcclxuLy8gJCBjZCBjZXJ0XHJcbi8vICQgb3BlbnNzbCBnZW5yc2EgLWFlczEyOCAyMDQ4ID4gc2VydmVyLmtleVxyXG4vLyAkIG9wZW5zc2wgcmVxIC1uZXcgLWtleSBzZXJ2ZXIua2V5ID4gc2VydmVyLmNzclxyXG4vLyAkIG9wZW5zc2wgeDUwOSAtaW4gc2VydmVyLmNzciAtZGF5cyAzNjUwMDAgLXJlcSAtc2lnbmtleSBzZXJ2ZXIua2V5ID4gc2VydmVyLmNydFxyXG5cclxuLy8gaHR0cHMuY3JlYXRlU2VydmVyKGh0dHBzT3B0aW9ucywgYXBwKS5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcclxuLy8gfSk7XHJcblxyXG4vLyBzdGFydFxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBzdGFydGVkIG9uIHBvcnQgJHtQT1JUfWApO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZzRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9