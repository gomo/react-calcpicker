/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	window.onload = function () {
	  var template = ReactDOM.render(React.createElement(_index.App, {
	    locale: 'ja',
	    initialAmount: 12300.49,
	    className: 'btn btn-default'
	  }), document.getElementById('wrapper'));
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _App = __webpack_require__(2);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _App2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _currency = __webpack_require__(4);
	
	var _currency2 = _interopRequireDefault(_currency);
	
	var _Calculator = __webpack_require__(6);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _currency2.default.locale(props.locale);
	    _this.state = {
	      openCalclator: false,
	      amount: parseInt(props.initialAmount | 0, 10)
	    };
	    return _this;
	  }
	
	  App.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.locale != nextProps.locale) {
	      _currency2.default.locale(nextProps.locale);
	    }
	  };
	
	  App.prototype.onClickAmount = function onClickAmount(e) {
	    e.preventDefault();
	    return false;
	  };
	
	  App.prototype.render = function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      'div',
	      { className: 'react-currency-calculator' },
	      React.createElement(
	        'button',
	        { className: this.props.className, onClick: function onClick(e) {
	            return _this2.onClickAmount(e);
	          } },
	        (0, _currency2.default)(this.state.amount).format()
	      ),
	      React.createElement(_Calculator2.default, {
	        initialAmount: this.state.amount
	      })
	    );
	  };
	
	  return App;
	}(_react.Component);
	
	exports.default = App;
	
	
	App.propTypes = {};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _locales = __webpack_require__(5);
	
	var _locales2 = _interopRequireDefault(_locales);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Currency = function () {
	  function Currency(amount) {
	    _classCallCheck(this, Currency);
	
	    this.amount = amount;
	  }
	
	  Currency.prototype.format = function format(localLocale) {
	    var locale = _locales2.default[localLocale || Currency.locale];
	
	    //round at most 2 decimal places.
	    var value = Math.round((this.amount || 0) * 100) / 100;
	    var intAndDecimal = value.toString().split('.').map(function (val) {
	      return parseInt(val, 10);
	    });
	    if (intAndDecimal.length == 1) {
	      intAndDecimal.push(0);
	    }
	
	    var result = '';
	
	    if (locale.symbol.front) {
	      result += locale.symbol.val;
	    }
	
	    var int = intAndDecimal[0];
	    //If there is no decimal delim setting, round decimals.
	    if (locale.delim.decimal === undefined) {
	      if (intAndDecimal[1] >= 50) {
	        ++int;
	      }
	    }
	
	    if (locale.delim.thousands !== undefined) {
	      result += int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delim.thousands);
	    } else {
	      result += int.toString();
	    }
	
	    if (locale.delim.decimal !== undefined) {
	      result += locale.delim.decimal + (intAndDecimal[1] < 10 ? intAndDecimal[1] + '0' : intAndDecimal[1]);
	    }
	
	    if (!locale.symbol.front) {
	      result += locale.symbol.val;
	    }
	
	    return result;
	  };
	
	  return Currency;
	}();
	
	var currency = function currency(amount) {
	  return new Currency(amount);
	};
	
	currency.locale = function (locale) {
	  Currency.locale = locale;
	};
	
	//defualt locale
	Currency.locale = 'en-us';
	
	exports.default = currency;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var locales = {
	  'ja': {
	    delim: {
	      thousands: ',',
	      decimal: undefined
	    },
	    symbol: {
	      val: '¥',
	      front: true
	    }
	  },
	  'en-us': {
	    delim: {
	      thousands: ',',
	      decimal: '.'
	    },
	    symbol: {
	      val: '$',
	      front: true
	    }
	  },
	  'fr-fr': {
	    delim: {
	      thousands: ' ',
	      decimal: ','
	    },
	    symbol: {
	      val: ' €',
	      front: false
	    }
	  }
	};
	
	exports.default = locales;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _currency = __webpack_require__(4);
	
	var _currency2 = _interopRequireDefault(_currency);
	
	var _Button = __webpack_require__(7);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Calculator = function (_Component) {
	  _inherits(Calculator, _Component);
	
	  function Calculator(props) {
	    _classCallCheck(this, Calculator);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      amount: props.initialAmount
	    };
	    return _this;
	  }
	
	  Calculator.prototype.render = function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      'div',
	      { className: 'react-currency-calculator__calculator' },
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-display' },
	        (0, _currency2.default)(this.state.amount).format()
	      ),
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-buttons' },
	        React.createElement(_Button2.default, { classType: 'clear', display: 'AC', onClick: function onClick() {
	            return _this2.allClear();
	          } }),
	        React.createElement(_Button2.default, { classType: 'clear', display: 'C', onClick: function onClick() {
	            return _this2.clear();
	          } }),
	        React.createElement(_Button2.default, { classType: 'func', display: '%', onClick: function onClick() {
	            return _this2.onClickPercent();
	          } }),
	        React.createElement(_Button2.default, { classType: 'func', display: '\xF7', onClick: function onClick() {
	            return _this2.onClickDiv();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-buttons' },
	        React.createElement(_Button2.default, { classType: 'number', display: '7', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '8', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '9', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'func', display: '\xD7', onClick: function onClick() {
	            return _this2.onClickMulti();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-buttons' },
	        React.createElement(_Button2.default, { classType: 'number', display: '4', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '5', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '6', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'func', display: '-', onClick: function onClick() {
	            return _this2.onClickSub();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-buttons' },
	        React.createElement(_Button2.default, { classType: 'number', display: '1', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '2', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '3', onClick: function onClick(display) {
	            return _this2.onClickNumber(display);
	          } }),
	        React.createElement(_Button2.default, { classType: 'func', display: '+', onClick: function onClick() {
	            return _this2.onClickAdd();
	          } })
	      ),
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-buttons' },
	        React.createElement(_Button2.default, { classType: 'number', display: '0', onClick: function onClick() {
	            return _this2.onClickZero();
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '00', onClick: function onClick() {
	            return _this2.onClickDoubleZero();
	          } }),
	        React.createElement(_Button2.default, { classType: 'number', display: '.', onClick: function onClick() {
	            return _this2.onClickDecimal();
	          } }),
	        React.createElement(_Button2.default, { classType: 'func', display: '=', onClick: function onClick() {
	            return _this2.onClickEnter();
	          } })
	      )
	    );
	  };
	
	  return Calculator;
	}(_react.Component);
	
	exports.default = Calculator;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _currency = __webpack_require__(4);
	
	var _currency2 = _interopRequireDefault(_currency);
	
	var _Button = __webpack_require__(7);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _classNames = __webpack_require__(8);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Calculator = function (_Component) {
	  _inherits(Calculator, _Component);
	
	  function Calculator(props) {
	    _classCallCheck(this, Calculator);
	
	    return _possibleConstructorReturn(this, _Component.call(this, props));
	  }
	
	  Calculator.prototype.onClick = function onClick(e) {
	    e.preventDefault();
	    this.props.onClick(this.props.display);
	    return false;
	  };
	
	  Calculator.prototype.render = function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      'button',
	      { className: (0, _classNames2.default)("react-currency-calculator__calculator-button react-currency-calculator__calculator-button-" + this.props.classType), onClick: function onClick(e) {
	          return _this2.onClick(e);
	        } },
	      this.props.display
	    );
	  };
	
	  return Calculator;
	}(_react.Component);
	
	exports.default = Calculator;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2Q4NDlkMGFjMjE1NDZiMWUxMjYiLCJ3ZWJwYWNrOi8vLy4vZG9jcy1zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXJyZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzLW5hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJ0ZW1wbGF0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwibG9jYWxlIiwic3RhdGUiLCJvcGVuQ2FsY2xhdG9yIiwiYW1vdW50IiwicGFyc2VJbnQiLCJpbml0aWFsQW1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIm9uQ2xpY2tBbW91bnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc05hbWUiLCJmb3JtYXQiLCJwcm9wVHlwZXMiLCJDdXJyZW5jeSIsImxvY2FsTG9jYWxlIiwidmFsdWUiLCJNYXRoIiwicm91bmQiLCJpbnRBbmREZWNpbWFsIiwidG9TdHJpbmciLCJzcGxpdCIsIm1hcCIsInZhbCIsImxlbmd0aCIsInB1c2giLCJyZXN1bHQiLCJzeW1ib2wiLCJmcm9udCIsImludCIsImRlbGltIiwiZGVjaW1hbCIsInVuZGVmaW5lZCIsInRob3VzYW5kcyIsInJlcGxhY2UiLCJjdXJyZW5jeSIsImxvY2FsZXMiLCJDYWxjdWxhdG9yIiwiYWxsQ2xlYXIiLCJjbGVhciIsIm9uQ2xpY2tQZXJjZW50Iiwib25DbGlja0RpdiIsIm9uQ2xpY2tOdW1iZXIiLCJkaXNwbGF5Iiwib25DbGlja011bHRpIiwib25DbGlja1N1YiIsIm9uQ2xpY2tBZGQiLCJvbkNsaWNrWmVybyIsIm9uQ2xpY2tEb3VibGVaZXJvIiwib25DbGlja0RlY2ltYWwiLCJvbkNsaWNrRW50ZXIiLCJvbkNsaWNrIiwiY2xhc3NUeXBlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUdBQSxRQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDcEIsT0FBSUMsV0FBV0MsU0FBU0MsTUFBVCxDQUNiO0FBQ0UsYUFBTyxJQURUO0FBRUUsb0JBQWUsUUFGakI7QUFHRSxnQkFBVTtBQUhaLEtBRGEsRUFNYkMsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQU5hLENBQWY7QUFRRCxFQVRELEM7Ozs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7O1NBRVFDLEc7Ozs7Ozs7Ozs7OztBQ0ZSOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkEsRzs7O0FBRW5CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0RBQ2pCLHNCQUFNQSxLQUFOLENBRGlCOztBQUVqQix3QkFBU0MsTUFBVCxDQUFnQkQsTUFBTUMsTUFBdEI7QUFDQSxXQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWUsS0FESjtBQUVYQyxlQUFRQyxTQUFTTCxNQUFNTSxhQUFOLEdBQW9CLENBQTdCLEVBQWdDLEVBQWhDO0FBRkcsTUFBYjtBQUhpQjtBQU9sQjs7aUJBRURD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiLi4vZG9jcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNkODQ5ZDBhYzIxNTQ2YjFlMTI2IiwiaW1wb3J0IHtBcHB9IGZyb20gJy4uL2luZGV4JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICB2YXIgdGVtcGxhdGUgPSBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcFxuICAgICAgbG9jYWxlPSdqYSdcbiAgICAgIGluaXRpYWxBbW91bnQ9ezEyMzAwLjQ5fVxuICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpXG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzLXNyYy9hcHAuanMiLCJpbXBvcnQgQXBwIGZyb20gJy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwJztcblxuZXhwb3J0IHtBcHB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9jdXJyZW5jeSdcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGN1cnJlbmN5LmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjbGF0b3I6IGZhbHNlLFxuICAgICAgYW1vdW50OiBwYXJzZUludChwcm9wcy5pbml0aWFsQW1vdW50fDAsIDEwKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBuZXh0UHJvcHMubG9jYWxlKXtcbiAgICAgIGN1cnJlbmN5LmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tBbW91bnQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrQW1vdW50KGUpfT57Y3VycmVuY3kodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCgpfTwvYnV0dG9uPlxuICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgIGluaXRpYWxBbW91bnQ9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbG9jYWxlcyBmcm9tICcuL2xvY2FsZXMnXG5cbmNsYXNzIEN1cnJlbmN5XG57XG4gIGNvbnN0cnVjdG9yKGFtb3VudCkge1xuICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICB9XG5cbiAgZm9ybWF0KGxvY2FsTG9jYWxlKXtcbiAgICBjb25zdCBsb2NhbGUgPSBsb2NhbGVzW2xvY2FsTG9jYWxlfHxDdXJyZW5jeS5sb2NhbGVdXG5cbiAgICAvL3JvdW5kIGF0IG1vc3QgMiBkZWNpbWFsIHBsYWNlcy5cbiAgICBjb25zdCB2YWx1ZSA9IE1hdGgucm91bmQoKHRoaXMuYW1vdW50fHwwKSAqIDEwMCkgLyAxMDBcbiAgICBjb25zdCBpbnRBbmREZWNpbWFsID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpLm1hcCh2YWwgPT4gcGFyc2VJbnQodmFsLCAxMCkpXG4gICAgaWYoaW50QW5kRGVjaW1hbC5sZW5ndGggPT0gMSl7XG4gICAgICBpbnRBbmREZWNpbWFsLnB1c2goMClcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgICBpZihsb2NhbGUuc3ltYm9sLmZyb250KXtcbiAgICAgIHJlc3VsdCArPSBsb2NhbGUuc3ltYm9sLnZhbDtcbiAgICB9XG5cbiAgICBsZXQgaW50ID0gaW50QW5kRGVjaW1hbFswXVxuICAgIC8vSWYgdGhlcmUgaXMgbm8gZGVjaW1hbCBkZWxpbSBzZXR0aW5nLCByb3VuZCBkZWNpbWFscy5cbiAgICBpZihsb2NhbGUuZGVsaW0uZGVjaW1hbCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIGlmKGludEFuZERlY2ltYWxbMV0gPj0gNTApe1xuICAgICAgICArK2ludDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihsb2NhbGUuZGVsaW0udGhvdXNhbmRzICE9PSB1bmRlZmluZWQpe1xuICAgICAgcmVzdWx0ICs9IGludC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxJyArIGxvY2FsZS5kZWxpbS50aG91c2FuZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gaW50LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYobG9jYWxlLmRlbGltLmRlY2ltYWwgIT09IHVuZGVmaW5lZCl7XG4gICAgICByZXN1bHQgKz0gbG9jYWxlLmRlbGltLmRlY2ltYWwgKyAoaW50QW5kRGVjaW1hbFsxXSA8IDEwID8gaW50QW5kRGVjaW1hbFsxXSArICcwJyA6IGludEFuZERlY2ltYWxbMV0pO1xuICAgIH1cblxuICAgIGlmKCFsb2NhbGUuc3ltYm9sLmZyb250KXtcbiAgICAgIHJlc3VsdCArPSBsb2NhbGUuc3ltYm9sLnZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmNvbnN0IGN1cnJlbmN5ID0gKGFtb3VudCkgPT4ge1xuICByZXR1cm4gbmV3IEN1cnJlbmN5KGFtb3VudClcbn1cblxuY3VycmVuY3kubG9jYWxlID0gKGxvY2FsZSkgPT4ge1xuICBDdXJyZW5jeS5sb2NhbGUgPSBsb2NhbGVcbn1cblxuLy9kZWZ1YWx0IGxvY2FsZVxuQ3VycmVuY3kubG9jYWxlID0gJ2VuLXVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jdXJyZW5jeS5qcyIsImNvbnN0IGxvY2FsZXMgPSAge1xuICAnamEnOiB7XG4gICAgZGVsaW06IHtcbiAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgZGVjaW1hbDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBzeW1ib2w6IHtcbiAgICAgIHZhbDogJ8KlJyxcbiAgICAgIGZyb250OiB0cnVlXG4gICAgfVxuICB9LFxuICAnZW4tdXMnOiB7XG4gICAgZGVsaW06IHtcbiAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgZGVjaW1hbDogJy4nXG4gICAgfSxcbiAgICBzeW1ib2w6IHtcbiAgICAgIHZhbDogJyQnLFxuICAgICAgZnJvbnQ6IHRydWVcbiAgICB9XG4gIH0sXG4gICdmci1mcic6IHtcbiAgICBkZWxpbToge1xuICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICBkZWNpbWFsOiAnLCdcbiAgICB9LFxuICAgIHN5bWJvbDoge1xuICAgICAgdmFsOiAnIOKCrCcsXG4gICAgICBmcm9udDogZmFsc2VcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvY2FsZXMuanMiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vY3VycmVuY3knXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbW91bnQ6IHByb3BzLmluaXRpYWxBbW91bnRcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1kaXNwbGF5XCI+e2N1cnJlbmN5KHRoaXMuc3RhdGUuYW1vdW50KS5mb3JtYXQoKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImNsZWFyXCIgZGlzcGxheT1cIkFDXCIgb25DbGljaz17KCkgPT4gdGhpcy5hbGxDbGVhcigpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwiY2xlYXJcIiBkaXNwbGF5PVwiQ1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xlYXIoKX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImZ1bmNcIiBkaXNwbGF5PVwiJVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja1BlcmNlbnQoKX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImZ1bmNcIiBkaXNwbGF5PVwiw7dcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2tEaXYoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiN1wiIG9uQ2xpY2s9e2Rpc3BsYXkgPT4gdGhpcy5vbkNsaWNrTnVtYmVyKGRpc3BsYXkpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjhcIiBvbkNsaWNrPXtkaXNwbGF5ID0+IHRoaXMub25DbGlja051bWJlcihkaXNwbGF5KX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCI5XCIgb25DbGljaz17ZGlzcGxheSA9PiB0aGlzLm9uQ2xpY2tOdW1iZXIoZGlzcGxheSl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJmdW5jXCIgZGlzcGxheT1cIsOXXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrTXVsdGkoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiNFwiIG9uQ2xpY2s9e2Rpc3BsYXkgPT4gdGhpcy5vbkNsaWNrTnVtYmVyKGRpc3BsYXkpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjVcIiBvbkNsaWNrPXtkaXNwbGF5ID0+IHRoaXMub25DbGlja051bWJlcihkaXNwbGF5KX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCI2XCIgb25DbGljaz17ZGlzcGxheSA9PiB0aGlzLm9uQ2xpY2tOdW1iZXIoZGlzcGxheSl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJmdW5jXCIgZGlzcGxheT1cIi1cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2tTdWIoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiMVwiIG9uQ2xpY2s9e2Rpc3BsYXkgPT4gdGhpcy5vbkNsaWNrTnVtYmVyKGRpc3BsYXkpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjJcIiBvbkNsaWNrPXtkaXNwbGF5ID0+IHRoaXMub25DbGlja051bWJlcihkaXNwbGF5KX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCIzXCIgb25DbGljaz17ZGlzcGxheSA9PiB0aGlzLm9uQ2xpY2tOdW1iZXIoZGlzcGxheSl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJmdW5jXCIgZGlzcGxheT1cIitcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2tBZGQoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja1plcm8oKX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCIwMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja0RvdWJsZVplcm8oKX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCIuXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrRGVjaW1hbCgpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwiZnVuY1wiIGRpc3BsYXk9XCI9XCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrRW50ZXIoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN1cnJlbmN5IGZyb20gJy4uL2N1cnJlbmN5J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuZGlzcGxheSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b24gcmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLmNsYXNzVHlwZSl9IG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfT57dGhpcy5wcm9wcy5kaXNwbGF5fTwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzLW5hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==