(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollShow = require('./ScrollShow');

var _ScrollShow2 = _interopRequireDefault(_ScrollShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Homepage = function Homepage() {
  _classCallCheck(this, Homepage);

  var scrollShow = new _ScrollShow2.default({
    query: '.portfolio-entries--home',
    inViewClass: 'portfolio-entries--in-view',
    debug: true,
    fireOnce: true

  });
};

exports.default = Homepage;

},{"./ScrollShow":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollShow = function () {
    function ScrollShow(options) {
        var _this = this;

        _classCallCheck(this, ScrollShow);

        var defaults = {
            enterOffset: 100,
            exitMargin: 0,
            query: null,
            debounce: 50,
            debug: false,
            fireOnce: false,
            outOfViewClass: 'out-of-view',
            inViewClass: 'in-view'
        };

        // Merge defaults with provided values
        var populated = Object.assign(defaults, options);
        for (var key in populated) {
            if (populated.hasOwnProperty(key)) {
                this[key] = populated[key];
            }

            this.options = populated;
            this.scrollElements = document.querySelectorAll(populated.query);
            var timeout = null;

            // Debounce for performance
            window.addEventListener('scroll', function () {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    _this.checkScroll();
                    timeout = null;
                }, _this.options.debounce);
            });
        }

        this.checkScroll();
    }

    _createClass(ScrollShow, [{
        key: 'checkScroll',
        value: function checkScroll() {
            if (this.options.debug) console.log('Checking scroll');
            var windowHeight = window.innerHeight - this.options.enterOffset;
            var windowTop = window.scrollY + this.options.exitMargin;
            var windowBottom = window.scrollY + windowHeight;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.scrollElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var scrollElement = _step.value;

                    var elementHeight = scrollElement.offsetHeight;
                    var elementTop = scrollElement.offsetTop;
                    var elementBottom = elementTop + elementHeight;

                    //check to see if this current container is within viewport
                    if (elementBottom >= windowTop && elementTop <= windowBottom) {
                        scrollElement.classList.add(this.options.inViewClass);
                        scrollElement.classList.remove(this.options.outOfViewClass);
                    } else if (this.options.fireOnce == false) {
                        scrollElement.classList.add(this.options.outOfViewClass);
                        scrollElement.classList.remove(this.options.inViewClass);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return ScrollShow;
}();

;

exports.default = ScrollShow;

},{}],3:[function(require,module,exports){
"use strict";

var _Homepage = require("./Homepage");

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homepage = new _Homepage2.default();

},{"./Homepage":1}]},{},[3]);
