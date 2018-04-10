(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cookie"] = factory();
	else
		root["Cookie"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /**
     * 设置Cookie
     * @param {string} key Cookie名
     * @param {string} val Cookie值
     * @param {number} expires 隐含参数，表示过期时间，单位为秒
     * @param {string} domain  隐含参数，域
     */
    setItem: function setItem(key, val /*,expires,domain*/) {
        var expires = arguments[2],
            domain = arguments[3],
            date = new Date();

        if (!expires) {
            //默认1小时过期
            date.setTime(date.getTime() + 1000 * 60 * 60);
        } else {
            date.setTime(date.getTime() + expires * 1000);
        }

        if (null == domain) domain = document.domain;

        key = key + '=' + (val === null ? '; ' : encodeURIComponent(val) + '; ');
        document.cookie = key + 'expires=' + date.toUTCString() + '; path=/; domain=' + domain;
    },

    /**
     * 取得Cookie名对应的Cookie值
     * @param {string} key Cookie名
     * @return {string|object}
     */
    getItem: function getItem(key) {
        if (document.cookie.length === 0) {
            return key ? null : {};
        }

        var obj = {},
            cookies = document.cookie.split("; "); //一个分号加一个空格

        for (var i = 0, c; i < cookies.length; i++) {
            c = cookies[i].split("="); //以赋值号分隔,第一位是Cookie名,第二位是Cookie值

            if (key && c[0] == key) {
                return decodeURIComponent(c[1]);
            } else {
                obj[c[0]] = decodeURIComponent(c[1]);
            }
        }

        return key ? null : obj;
    },

    /**
     * 取得所有的Cookie
     * @return {object}
     */
    getAll: function getAll() {
        return this.getItem();
    },

    /**
     * 移除Cookie名对应的Cookie
     * @param {string} key Cookie名
     * @param {string} domain  隐含参数，域
     */
    removeItem: function removeItem(key /*, domain*/) {
        this.setItem(key, null, -1, arguments[1]);
    },

    /**
     * 移除所有的Cookie
     */
    clear: function clear() /*domain*/{
        if (document.cookie.length === 0) return;
        var cookies = document.cookie.split("; "); //一个分号加一个空格

        for (var i = 0, c; i < cookies.length; i++) {
            c = cookies[i].split("=");
            this.setItem(c[0], null, -1, arguments[0]);
        }
    }
};

/***/ })
/******/ ]);
});