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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	window.onload = function () {
	  var template = ReactDOM.render(React.createElement(_index.App, {
	    locale: 'ja',
	    amount: 12300.49
	  }), document.getElementById('wrapper'));
	};

/***/ }),

/***/ 1:
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _currency = __webpack_require__(41);
	
	var _currency2 = _interopRequireDefault(_currency);
	
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
	    return _this;
	  }
	
	  App.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.locale != nextProps.locale) {
	      _currency2.default.locale(nextProps.locale);
	    }
	  };
	
	  App.prototype.render = function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        null,
	        (0, _currency2.default)(this.props.amount).format()
	      )
	    );
	  };
	
	  return App;
	}(_react.Component);
	
	exports.default = App;
	
	
	App.propTypes = {};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _locales = __webpack_require__(42);
	
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

/***/ 42:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MwNjIwNzhmZTRlYTBhNDdiNGEiLCJ3ZWJwYWNrOi8vLy4vZG9jcy1zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXJyZW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9jYWxlcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJ0ZW1wbGF0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwibG9jYWxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsImFtb3VudCIsImZvcm1hdCIsInByb3BUeXBlcyIsIkN1cnJlbmN5IiwibG9jYWxMb2NhbGUiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsImludEFuZERlY2ltYWwiLCJ0b1N0cmluZyIsInNwbGl0IiwibWFwIiwicGFyc2VJbnQiLCJ2YWwiLCJsZW5ndGgiLCJwdXNoIiwicmVzdWx0Iiwic3ltYm9sIiwiZnJvbnQiLCJpbnQiLCJkZWxpbSIsImRlY2ltYWwiLCJ1bmRlZmluZWQiLCJ0aG91c2FuZHMiLCJyZXBsYWNlIiwiY3VycmVuY3kiLCJsb2NhbGVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQTs7QUFHQUEsUUFBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCLE9B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QUF4QjtBQUNEOztBQUVELFlBQU9HLE1BQVA7QUFDRCxJOzs7OztBQUdILEtBQU1TLFdBQVcsU0FBWEEsUUFBVyxDQUFDekIsTUFBRCxFQUFZO0FBQzNCLFVBQU8sSUFBSUcsUUFBSixDQUFhSCxNQUFiLENBQVA7QUFDRCxFQUZEOztBQUlBeUIsVUFBUzVCLE1BQVQsR0FBa0IsVUFBQ0EsTUFBRCxFQUFZO0FBQzVCTSxZQUFTTixNQUFULEdBQWtCQSxNQUFsQjtBQUNELEVBRkQ7O0FBSUE7QUFDQU0sVUFBU04sTUFBVCxHQUFrQixPQUFsQjs7bUJBRWU0QixROzs7Ozs7Ozs7Ozs7QUM3RGYsS0FBTUMsVUFBVztBQUNmLFNBQU07QUFDSk4sWUFBTztBQUNMRyxrQkFBVyxHQUROO0FBRUxGLGdCQUFTQztBQUZKLE1BREg7QUFLSkwsYUFBUTtBQUNOSixZQUFLLEdBREM7QUFFTkssY0FBTztBQUZEO0FBTEosSUFEUztBQVdmLFlBQVM7QUFDUEUsWUFBTztBQUNMRyxrQkFBVyxHQUROO0FBRUxGLGdCQUFTO0FBRkosTUFEQTtBQUtQSixhQUFRO0FBQ05KLFlBQUssR0FEQztBQUVOSyxjQUFPO0FBRkQ7QUFMRCxJQVhNO0FBcUJmLFlBQVM7QUFDUEUsWUFBTztBQUNMRyxrQkFBVyxHQUROO0FBRUxGLGdCQUFTO0FBRkosTUFEQTtBQUtQSixhQUFRO0FBQ05KLFlBQUssSUFEQztBQUVOSyxjQUFPO0FBRkQ7QUFMRDtBQXJCTSxFQUFqQjs7bUJBaUNlUSxPIiwiZmlsZSI6Ii4uL2RvY3MvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYzA2MjA3OGZlNGVhMGE0N2I0YSIsImltcG9ydCB7QXBwfSBmcm9tICcuLi9pbmRleCc7XG5cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgdmFyIHRlbXBsYXRlID0gUmVhY3RET00ucmVuZGVyKFxuICAgIDxBcHBcbiAgICAgIGxvY2FsZT0namEnXG4gICAgICBhbW91bnQ9ezEyMzAwLjQ5fVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJylcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RvY3Mtc3JjL2FwcC5qcyIsImltcG9ydCBBcHAgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9BcHAnO1xuXG5leHBvcnQge0FwcH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN1cnJlbmN5IGZyb20gJy4uL2N1cnJlbmN5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY3VycmVuY3kubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBuZXh0UHJvcHMubG9jYWxlKXtcbiAgICAgIGN1cnJlbmN5LmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PntjdXJyZW5jeSh0aGlzLnByb3BzLmFtb3VudCkuZm9ybWF0KCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBsb2NhbGVzIGZyb20gJy4vbG9jYWxlcydcblxuY2xhc3MgQ3VycmVuY3lcbntcbiAgY29uc3RydWN0b3IoYW1vdW50KSB7XG4gICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gIH1cblxuICBmb3JtYXQobG9jYWxMb2NhbGUpe1xuICAgIGNvbnN0IGxvY2FsZSA9IGxvY2FsZXNbbG9jYWxMb2NhbGV8fEN1cnJlbmN5LmxvY2FsZV1cblxuICAgIC8vcm91bmQgYXQgbW9zdCAyIGRlY2ltYWwgcGxhY2VzLlxuICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZCgodGhpcy5hbW91bnR8fDApICogMTAwKSAvIDEwMFxuICAgIGNvbnN0IGludEFuZERlY2ltYWwgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJykubWFwKHZhbCA9PiBwYXJzZUludCh2YWwsIDEwKSlcbiAgICBpZihpbnRBbmREZWNpbWFsLmxlbmd0aCA9PSAxKXtcbiAgICAgIGludEFuZERlY2ltYWwucHVzaCgwKVxuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgIGlmKGxvY2FsZS5zeW1ib2wuZnJvbnQpe1xuICAgICAgcmVzdWx0ICs9IGxvY2FsZS5zeW1ib2wudmFsO1xuICAgIH1cblxuICAgIGxldCBpbnQgPSBpbnRBbmREZWNpbWFsWzBdXG4gICAgLy9JZiB0aGVyZSBpcyBubyBkZWNpbWFsIGRlbGltIHNldHRpbmcsIHJvdW5kIGRlY2ltYWxzLlxuICAgIGlmKGxvY2FsZS5kZWxpbS5kZWNpbWFsID09PSB1bmRlZmluZWQpe1xuICAgICAgaWYoaW50QW5kRGVjaW1hbFsxXSA+PSA1MCl7XG4gICAgICAgICsraW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGxvY2FsZS5kZWxpbS50aG91c2FuZHMgIT09IHVuZGVmaW5lZCl7XG4gICAgICByZXN1bHQgKz0gaW50LnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEnICsgbG9jYWxlLmRlbGltLnRob3VzYW5kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBpbnQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZihsb2NhbGUuZGVsaW0uZGVjaW1hbCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHJlc3VsdCArPSBsb2NhbGUuZGVsaW0uZGVjaW1hbCArIChpbnRBbmREZWNpbWFsWzFdIDwgMTAgPyBpbnRBbmREZWNpbWFsWzFdICsgJzAnIDogaW50QW5kRGVjaW1hbFsxXSk7XG4gICAgfVxuXG4gICAgaWYoIWxvY2FsZS5zeW1ib2wuZnJvbnQpe1xuICAgICAgcmVzdWx0ICs9IGxvY2FsZS5zeW1ib2wudmFsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuY29uc3QgY3VycmVuY3kgPSAoYW1vdW50KSA9PiB7XG4gIHJldHVybiBuZXcgQ3VycmVuY3koYW1vdW50KVxufVxuXG5jdXJyZW5jeS5sb2NhbGUgPSAobG9jYWxlKSA9PiB7XG4gIEN1cnJlbmN5LmxvY2FsZSA9IGxvY2FsZVxufVxuXG4vL2RlZnVhbHQgbG9jYWxlXG5DdXJyZW5jeS5sb2NhbGUgPSAnZW4tdXMnXG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbmN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2N1cnJlbmN5LmpzIiwiY29uc3QgbG9jYWxlcyA9ICB7XG4gICdqYSc6IHtcbiAgICBkZWxpbToge1xuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHN5bWJvbDoge1xuICAgICAgdmFsOiAnwqUnLFxuICAgICAgZnJvbnQ6IHRydWVcbiAgICB9XG4gIH0sXG4gICdlbi11cyc6IHtcbiAgICBkZWxpbToge1xuICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICBkZWNpbWFsOiAnLidcbiAgICB9LFxuICAgIHN5bWJvbDoge1xuICAgICAgdmFsOiAnJCcsXG4gICAgICBmcm9udDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ2ZyLWZyJzoge1xuICAgIGRlbGltOiB7XG4gICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgIGRlY2ltYWw6ICcsJ1xuICAgIH0sXG4gICAgc3ltYm9sOiB7XG4gICAgICB2YWw6ICcg4oKsJyxcbiAgICAgIGZyb250OiBmYWxzZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbG9jYWxlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=