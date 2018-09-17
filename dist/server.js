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
                            return [2];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci90ZWxlbWV0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9nNGpzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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SSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsSUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZCSCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vLyBpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbi8vIGltcG9ydCAqIGFzIGh0dHBzIGZyb20gJ2h0dHBzJztcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCAqIGFzIGxvZzRqcyBmcm9tICdsb2c0anMnO1xyXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJztcclxuXHJcbi8vIOOCteODvOODkOani+eviVxyXG5jbGFzcyBBcHAge1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XHJcbiAgICBwcml2YXRlIGFjY2Vzc0xvZ2dlcjogbG9nNGpzLkxvZ2dlcjtcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NMb2dnZXIgPSBsb2c0anMuZ2V0TG9nZ2VyKCdhY2Nlc3MnKTtcclxuICAgICAgICB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLnJvdGVycyh0aGlzLmFwcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25maWcoKSA6dm9pZCB7XHJcbiAgICAgICAgLy8gbG9nZ2luZ1xyXG4gICAgICAgIGxvZzRqcy5jb25maWd1cmUoe1xyXG4gICAgICAgICAgICBhcHBlbmRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGFjY2VzczogeyB0eXBlOiAnY29uc29sZScgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczoge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogeyBhcHBlbmRlcnM6IFsnYWNjZXNzJ10sIGxldmVsOiAnaW5mbycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xyXG4gICAgICAgIHRoaXMuYXBwLnVzZShsb2c0anMuY29ubmVjdExvZ2dlcih0aGlzLmFjY2Vzc0xvZ2dlciwge1xyXG4gICAgICAgICAgICBsZXZlbCA6ICdJTkZPJyxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKS5hcHA7XHJcbiIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb24ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVhZEpzb24oZmlsZXBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZnMucmVhZEZpbGUoZmlsZXBhdGgsICd1dGY4JywgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uLCBkYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3cml0ZUpzb24oZmlsZXBhdGg6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZShmaWxlcGF0aCwgZGF0YSwgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSAnLi4vY29tbW9uL0NvbW1vbic7XHJcbi8vIGltcG9ydCB7IFRlbGVtZXRtb3J5TW9kZWwgfSBmcm9tICcuLi9tb2RlbC9UZWxlbWV0b3J5TW9kZWwnO1xyXG5cclxuY29uc3QgZGJwYXRoOiBzdHJpbmcgPSAnZGIvZGF0YS5qc29uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZWxlbWV0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOODquOCveODvOOCueWPluW+lyhhbGwpXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBuZXh0IG5leHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IENvbW1vbi5yZWFkSnNvbihkYnBhdGgpO1xyXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLnNlbmQoanNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6rjgr3jg7zjgrnlj5blvpcoSUQpXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdCByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBuZXh0IG5leHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldEJ5SWQocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCBDb21tb24ucmVhZEpzb24oZGJwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcmVxdWVzdC5wYXJhbSgnaWQnKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4ganNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uW2luZGV4XS5VdG1JZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzSnNvbiA9IGpzb25baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNKc29uLlJlc3VsdCA9ICdTdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuc2VuZChyZXNKc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDQpLnNlbmQoeyBtZXNzYWdlOiAnTm90IEZvdW5kLicgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogJ0ludGVybmFsIFNlcnZlciBFcnJvci4nIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6rjgr3jg7zjgrnov73liqBcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSByZXNwb25zZSByZXNwb25zZVxyXG4gICAgICogQHBhcmFtIG5leHQgbmV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcG9zdChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddICE9PSAnYXBwbGljYXRpb24vanNvbicgfHxcclxuICAgICAgICAgKHJlcXVlc3QuYm9keSA9PSBudWxsICYmIHJlcXVlc3QuYm9keS5VdG1JZCA9PSBudWxsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcG9zdCByZXFldXN0ICR7cmVxdWVzdC5ib2R5fWApO1xyXG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXMoNDAwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBCYWQgQ29udGVudC10eXBlIFske3JlcXVlc3QuaGVhZGVyc1snY29udGVudC10eXBlJ10gfV1gLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGAke3JlcXVlc3QuYm9keX1gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGpzb246IGFueSA9IGF3YWl0IENvbW1vbi5yZWFkSnNvbihkYnBhdGgpO1xyXG4gICAgICAgICAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICAgICAgICAgIGpzb24gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDph43opIfjgZnjgotJROOCkuWJiumZpFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChqc29uW2luZGV4XS5VdG1JZCA9PT0gcmVxdWVzdC5ib2R5LlV0bUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganNvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IENvbW1vbi53cml0ZUpzb24oZGJwYXRoLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAganNvbi5wdXNoKHJlcXVlc3QuYm9keSk7XHJcbiAgICAgICAgICAgIC8vIGF3YWl0IHRoaXMuZGVsZXRlSWQocmVxdWVzdC5ib2R5LlV0bUlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGFkZCBkYXRhICR7anNvbn1gKTtcclxuICAgICAgICAgICAgQ29tbW9uLndyaXRlSnNvbihkYnBhdGgsIEpTT04uc3RyaW5naWZ5KGpzb24sIHVuZGVmaW5lZCwgMSkpOyAvLyDmlbTlvaLjgZfjgZ/lvaLjgaflh7rliptcclxuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMSkuc2VuZCgnT0shJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcHV0KHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCgnY2FsbGVkIHB1dCBtZXRob2QhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDjg6rjgr3jg7zjgrnliYrpmaRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0IHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSByZXNwb25zZSByZXNwb25zZVxyXG4gICAgICogQHBhcmFtIG5leHQgbmV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSByZXF1ZXN0LnBhcmFtKCdpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCBDb21tb24ucmVhZEpzb24oZGJwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4ganNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uW2luZGV4XS5VdG1JZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBDb21tb24ud3JpdGVKc29uKGRicGF0aCwgSlNPTi5zdHJpbmdpZnkoanNvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYXdhaXQgdGhpcy5kZWxldGVJZChpZCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiAnT0shJyB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yLicgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgYXN5bmMgZGVsZXRlSWQoaWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdjYWxsISEhJyk7XHJcbiAgICAvLyAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgQ29tbW9uLnJlYWRKc29uKGRicGF0aCk7XHJcbiAgICAvLyAgICAgaWYgKGpzb24pIHtcclxuICAgIC8vICAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiBqc29uKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoanNvbltpbmRleF0uVXRtSWQgPT09IGlkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAganNvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGF3YWl0IENvbW1vbi53cml0ZUpzb24oZGJwYXRoLCBKU09OLnN0cmluZ2lmeShqc29uKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IFRlbGVtZXRvcnkgfSBmcm9tICcuLi9jb250cm9sbGVyL3RlbGVtZXRvcnknO1xyXG5cclxuY29uc3QgdmVyMTogc3RyaW5nID0gJ3YxJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xyXG5cclxuICAgIHByaXZhdGUgdGVsZW1ldG9yeTogVGVsZW1ldG9yeSA9IG5ldyBUZWxlbWV0b3J5KCk7XHJcblxyXG4gICAgcHVibGljIHJvdGVycyhhcHA6IEFwcGxpY2F0aW9uKSA6dm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHRlc3QgYXBpXHJcbiAgICAgICAgYXBwLnJvdXRlKCcvJylcclxuICAgICAgICAuZ2V0KChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gcmVzLmpzb24oeydtZXNzYWdlJzogJ0l0IFdvcmtzISEnfSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdHRVQgcmVxdWVzdCBzdWNjZXNzZnVsbGwhISEhJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRlbG1ldG9yeSBhcGlcclxuICAgICAgICAvLyBhcHAucm91dGUoYCR7dmVyMX0vdGVsZW1ldG9yeWApXHJcbiAgICAgICAgYXBwLnJvdXRlKGAvJHt2ZXIxfS90ZWxlbWV0b3J5YClcclxuICAgICAgICAuZ2V0KHRoaXMudGVsZW1ldG9yeS5nZXQpXHJcbiAgICAgICAgLnBvc3QodGhpcy50ZWxlbWV0b3J5LnBvc3QpXHJcbiAgICAgICAgLmRlbGV0ZSh0aGlzLnRlbGVtZXRvcnkuZGVsZXRlKTtcclxuXHJcbiAgICAgICAgYXBwLnJvdXRlKGAvJHt2ZXIxfS90ZWxlbWV0b3J5LzppZGApXHJcbiAgICAgICAgLmdldCh0aGlzLnRlbGVtZXRvcnkuZ2V0QnlJZClcclxuICAgICAgICAucHV0KHRoaXMudGVsZW1ldG9yeS5wdXQpXHJcbiAgICAgICAgLmRlbGV0ZSh0aGlzLnRlbGVtZXRvcnkuZGVsZXRlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XHJcbi8vIGltcG9ydCAqIGFzIGh0dHBzIGZyb20gJ2h0dHBzJztcclxuLy8gaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5jb25zdCBQT1JUID0gODA4MDtcclxuXHJcbi8vIHNzbCBzdXBwb3J0XHJcbi8vIGNvbnN0IHNzbE9wdGlvbnMgPSB7XHJcbi8vICAgICBrZXk6IGZzLnJlYWRGaWxlU3luYygnY2VydC9zZXJ2ZXIua2V5JyksXHJcbi8vICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoJ2NlcnQvc2VydmVyLmNydCcpXHJcbi8vICAgfVxyXG4vLyBjcmVhdGUgY2VydGlmaWNhdGVzKFRlcm1pbmFsKVxyXG4vLyAkIGNkIGNlcnRcclxuLy8gJCBvcGVuc3NsIGdlbnJzYSAtYWVzMTI4IDIwNDggPiBzZXJ2ZXIua2V5XHJcbi8vICQgb3BlbnNzbCByZXEgLW5ldyAta2V5IHNlcnZlci5rZXkgPiBzZXJ2ZXIuY3NyXHJcbi8vICQgb3BlbnNzbCB4NTA5IC1pbiBzZXJ2ZXIuY3NyIC1kYXlzIDM2NTAwMCAtcmVxIC1zaWdua2V5IHNlcnZlci5rZXkgPiBzZXJ2ZXIuY3J0XHJcblxyXG4vLyBodHRwcy5jcmVhdGVTZXJ2ZXIoaHR0cHNPcHRpb25zLCBhcHApLmxpc3RlbihQT1JULCAoKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xyXG4vLyB9KTtcclxuXHJcbi8vIHN0YXJ0XHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHN0YXJ0ZWQgb24gcG9ydCAke1BPUlR9YCk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9nNGpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=