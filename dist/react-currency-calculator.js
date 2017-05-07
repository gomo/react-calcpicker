(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactCurrencyCalculator"] = factory(require("react"), require("react-dom"));
	else
		root["ReactCurrencyCalculator"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Action = exports.Rect = exports.CurrencyCalculator = undefined;
	
	var _CurrencyCalculator = __webpack_require__(1);
	
	var _CurrencyCalculator2 = _interopRequireDefault(_CurrencyCalculator);
	
	var _Rect = __webpack_require__(9);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Action = __webpack_require__(12);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CurrencyCalculator = _CurrencyCalculator2.default;
	exports.Rect = _Rect2.default;
	exports.Action = _Action2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _numeral = __webpack_require__(3);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	__webpack_require__(4);
	
	var _Calculator = __webpack_require__(5);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	var _reactPortal = __webpack_require__(10);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CurrencyCalculator = function (_React$Component) {
	  _inherits(CurrencyCalculator, _React$Component);
	
	  function CurrencyCalculator(props) {
	    _classCallCheck(this, CurrencyCalculator);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _numeral2.default.locale(props.locale);
	    _this.state = {
	      openCalculator: false,
	      amount: props.initialAmount
	    };
	
	    window.onkeydown = function (e) {
	      if (_this.state.openCalculator) {
	        switch (e.key) {
	          case '0':
	          case '1':
	          case '2':
	          case '3':
	          case '4':
	          case '5':
	          case '6':
	          case '7':
	          case '8':
	          case '9':
	            _this.refs.calculator.inputNumber(e.key);
	            break;
	          case '+':
	          case '-':
	            _this.refs.calculator.onClickOperator(e.key);
	            break;
	          case '/':
	            _this.refs.calculator.onClickOperator('÷');
	            break;
	          case '*':
	            _this.refs.calculator.onClickOperator('×');
	            break;
	          case '%':
	            _this.refs.calculator.onClickPercent();
	            break;
	          case '=':
	          case 'Enter':
	            _this.refs.calculator.onClickEnter();
	            break;
	          case 'Clear':
	            _this.refs.calculator.allClear();
	            break;
	          case 'Backspace':
	            _this.refs.calculator.delete();
	            break;
	          default:
	
	        }
	      }
	    };
	    return _this;
	  }
	
	  CurrencyCalculator.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.locale != nextProps.locale) {
	      _numeral2.default.locale(nextProps.locale);
	    }
	  };
	
	  CurrencyCalculator.prototype.onClickAmount = function onClickAmount(e) {
	    e.preventDefault();
	    this.setState({ openCalculator: true });
	    return false;
	  };
	
	  CurrencyCalculator.prototype.onCloseCalculator = function onCloseCalculator() {
	    //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
	    if (this.state.openCalculator == true) {
	      this.setState({ openCalculator: false });
	    }
	  };
	
	  CurrencyCalculator.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'react-currency-calculator' },
	      _react2.default.createElement(
	        'button',
	        { ref: 'button', className: this.props.className, onClick: function onClick(e) {
	            return _this2.onClickAmount(e);
	          } },
	        (0, _numeral2.default)(this.state.amount).format(this.props.currencyFormat)
	      ),
	      _react2.default.createElement(
	        _reactPortal2.default,
	        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this2.onCloseCalculator();
	          } },
	        _react2.default.createElement(_Calculator2.default, {
	          ref: 'calculator',
	          initialAmount: this.state.amount,
	          onClickClose: function onClickClose() {
	            return _this2.setState({ openCalculator: false });
	          },
	          button: this.refs.button,
	          positions: this.props.positions,
	          buttons: this.props.buttons
	        })
	      )
	    );
	  };
	
	  return CurrencyCalculator;
	}(_react2.default.Component);
	
	exports.default = CurrencyCalculator;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
	 * numeral.js
	 * version : 2.0.6
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
	
	(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        module.exports = factory();
	    } else {
	        global.numeral = factory();
	    }
	}(this, function () {
	    /************************************
	        Variables
	    ************************************/
	
	    var numeral,
	        _,
	        VERSION = '2.0.6',
	        formats = {},
	        locales = {},
	        defaults = {
	            currentLocale: 'en',
	            zeroFormat: null,
	            nullFormat: null,
	            defaultFormat: '0,0',
	            scalePercentBy100: true
	        },
	        options = {
	            currentLocale: defaults.currentLocale,
	            zeroFormat: defaults.zeroFormat,
	            nullFormat: defaults.nullFormat,
	            defaultFormat: defaults.defaultFormat,
	            scalePercentBy100: defaults.scalePercentBy100
	        };
	
	
	    /************************************
	        Constructors
	    ************************************/
	
	    // Numeral prototype object
	    function Numeral(input, number) {
	        this._input = input;
	
	        this._value = number;
	    }
	
	    numeral = function(input) {
	        var value,
	            kind,
	            unformatFunction,
	            regexp;
	
	        if (numeral.isNumeral(input)) {
	            value = input.value();
	        } else if (input === 0 || typeof input === 'undefined') {
	            value = 0;
	        } else if (input === null || _.isNaN(input)) {
	            value = null;
	        } else if (typeof input === 'string') {
	            if (options.zeroFormat && input === options.zeroFormat) {
	                value = 0;
	            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
	                value = null;
	            } else {
	                for (kind in formats) {
	                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;
	
	                    if (regexp && input.match(regexp)) {
	                        unformatFunction = formats[kind].unformat;
	
	                        break;
	                    }
	                }
	
	                unformatFunction = unformatFunction || numeral._.stringToNumber;
	
	                value = unformatFunction(input);
	            }
	        } else {
	            value = Number(input)|| null;
	        }
	
	        return new Numeral(input, value);
	    };
	
	    // version number
	    numeral.version = VERSION;
	
	    // compare numeral object
	    numeral.isNumeral = function(obj) {
	        return obj instanceof Numeral;
	    };
	
	    // helper functions
	    numeral._ = _ = {
	        // formats numbers separators, decimals places, signs, abbreviations
	        numberToFormat: function(value, format, roundingFunction) {
	            var locale = locales[numeral.options.currentLocale],
	                negP = false,
	                optDec = false,
	                leadingCount = 0,
	                abbr = '',
	                trillion = 1000000000000,
	                billion = 1000000000,
	                million = 1000000,
	                thousand = 1000,
	                decimal = '',
	                neg = false,
	                abbrForce, // force abbreviation
	                abs,
	                min,
	                max,
	                power,
	                int,
	                precision,
	                signed,
	                thousands,
	                output;
	
	            // make sure we never format a null value
	            value = value || 0;
	
	            abs = Math.abs(value);
	
	            // see if we should use parentheses for negative number or if we should prefix with a sign
	            // if both are present we default to parentheses
	            if (numeral._.includes(format, '(')) {
	                negP = true;
	                format = format.replace(/[\(|\)]/g, '');
	            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
	                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
	                format = format.replace(/[\+|\-]/g, '');
	            }
	
	            // see if abbreviation is wanted
	            if (numeral._.includes(format, 'a')) {
	                abbrForce = format.match(/a(k|m|b|t)?/);
	
	                abbrForce = abbrForce ? abbrForce[1] : false;
	
	                // check for space before abbreviation
	                if (numeral._.includes(format, ' a')) {
	                    abbr = ' ';
	                }
	
	                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');
	
	                if (abs >= trillion && !abbrForce || abbrForce === 't') {
	                    // trillion
	                    abbr += locale.abbreviations.trillion;
	                    value = value / trillion;
	                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
	                    // billion
	                    abbr += locale.abbreviations.billion;
	                    value = value / billion;
	                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
	                    // million
	                    abbr += locale.abbreviations.million;
	                    value = value / million;
	                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
	                    // thousand
	                    abbr += locale.abbreviations.thousand;
	                    value = value / thousand;
	                }
	            }
	
	            // check for optional decimals
	            if (numeral._.includes(format, '[.]')) {
	                optDec = true;
	                format = format.replace('[.]', '.');
	            }
	
	            // break number and format
	            int = value.toString().split('.')[0];
	            precision = format.split('.')[1];
	            thousands = format.indexOf(',');
	            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;
	
	            if (precision) {
	                if (numeral._.includes(precision, '[')) {
	                    precision = precision.replace(']', '');
	                    precision = precision.split('[');
	                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
	                } else {
	                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
	                }
	
	                int = decimal.split('.')[0];
	
	                if (numeral._.includes(decimal, '.')) {
	                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
	                } else {
	                    decimal = '';
	                }
	
	                if (optDec && Number(decimal.slice(1)) === 0) {
	                    decimal = '';
	                }
	            } else {
	                int = numeral._.toFixed(value, 0, roundingFunction);
	            }
	
	            // check abbreviation again after rounding
	            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
	                int = String(Number(int) / 1000);
	
	                switch (abbr) {
	                    case locale.abbreviations.thousand:
	                        abbr = locale.abbreviations.million;
	                        break;
	                    case locale.abbreviations.million:
	                        abbr = locale.abbreviations.billion;
	                        break;
	                    case locale.abbreviations.billion:
	                        abbr = locale.abbreviations.trillion;
	                        break;
	                }
	            }
	
	
	            // format number
	            if (numeral._.includes(int, '-')) {
	                int = int.slice(1);
	                neg = true;
	            }
	
	            if (int.length < leadingCount) {
	                for (var i = leadingCount - int.length; i > 0; i--) {
	                    int = '0' + int;
	                }
	            }
	
	            if (thousands > -1) {
	                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
	            }
	
	            if (format.indexOf('.') === 0) {
	                int = '';
	            }
	
	            output = int + decimal + (abbr ? abbr : '');
	
	            if (negP) {
	                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
	            } else {
	                if (signed >= 0) {
	                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
	                } else if (neg) {
	                    output = '-' + output;
	                }
	            }
	
	            return output;
	        },
	        // unformats numbers separators, decimals places, signs, abbreviations
	        stringToNumber: function(string) {
	            var locale = locales[options.currentLocale],
	                stringOriginal = string,
	                abbreviations = {
	                    thousand: 3,
	                    million: 6,
	                    billion: 9,
	                    trillion: 12
	                },
	                abbreviation,
	                value,
	                i,
	                regexp;
	
	            if (options.zeroFormat && string === options.zeroFormat) {
	                value = 0;
	            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
	                value = null;
	            } else {
	                value = 1;
	
	                if (locale.delimiters.decimal !== '.') {
	                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
	                }
	
	                for (abbreviation in abbreviations) {
	                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');
	
	                    if (stringOriginal.match(regexp)) {
	                        value *= Math.pow(10, abbreviations[abbreviation]);
	                        break;
	                    }
	                }
	
	                // check for negative number
	                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;
	
	                // remove non numbers
	                string = string.replace(/[^0-9\.]+/g, '');
	
	                value *= Number(string);
	            }
	
	            return value;
	        },
	        isNaN: function(value) {
	            return typeof value === 'number' && isNaN(value);
	        },
	        includes: function(string, search) {
	            return string.indexOf(search) !== -1;
	        },
	        insert: function(string, subString, start) {
	            return string.slice(0, start) + subString + string.slice(start);
	        },
	        reduce: function(array, callback /*, initialValue*/) {
	            if (this === null) {
	                throw new TypeError('Array.prototype.reduce called on null or undefined');
	            }
	
	            if (typeof callback !== 'function') {
	                throw new TypeError(callback + ' is not a function');
	            }
	
	            var t = Object(array),
	                len = t.length >>> 0,
	                k = 0,
	                value;
	
	            if (arguments.length === 3) {
	                value = arguments[2];
	            } else {
	                while (k < len && !(k in t)) {
	                    k++;
	                }
	
	                if (k >= len) {
	                    throw new TypeError('Reduce of empty array with no initial value');
	                }
	
	                value = t[k++];
	            }
	            for (; k < len; k++) {
	                if (k in t) {
	                    value = callback(value, t[k], k, t);
	                }
	            }
	            return value;
	        },
	        /**
	         * Computes the multiplier necessary to make x >= 1,
	         * effectively eliminating miscalculations caused by
	         * finite precision.
	         */
	        multiplier: function (x) {
	            var parts = x.toString().split('.');
	
	            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
	        },
	        /**
	         * Given a variable number of arguments, returns the maximum
	         * multiplier that must be used to normalize an operation involving
	         * all of them.
	         */
	        correctionFactor: function () {
	            var args = Array.prototype.slice.call(arguments);
	
	            return args.reduce(function(accum, next) {
	                var mn = _.multiplier(next);
	                return accum > mn ? accum : mn;
	            }, 1);
	        },
	        /**
	         * Implementation of toFixed() that treats floats more like decimals
	         *
	         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	         * problems for accounting- and finance-related software.
	         */
	        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
	            var splitValue = value.toString().split('.'),
	                minDecimals = maxDecimals - (optionals || 0),
	                boundedPrecision,
	                optionalsRegExp,
	                power,
	                output;
	
	            // Use the smallest precision value possible to avoid errors from floating point representation
	            if (splitValue.length === 2) {
	              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
	            } else {
	              boundedPrecision = minDecimals;
	            }
	
	            power = Math.pow(10, boundedPrecision);
	
	            // Multiply up by precision, round accurately, then divide and use native toFixed():
	            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);
	
	            if (optionals > maxDecimals - boundedPrecision) {
	                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
	                output = output.replace(optionalsRegExp, '');
	            }
	
	            return output;
	        }
	    };
	
	    // avaliable options
	    numeral.options = options;
	
	    // avaliable formats
	    numeral.formats = formats;
	
	    // avaliable formats
	    numeral.locales = locales;
	
	    // This function sets the current locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    numeral.locale = function(key) {
	        if (key) {
	            options.currentLocale = key.toLowerCase();
	        }
	
	        return options.currentLocale;
	    };
	
	    // This function provides access to the loaded locale data.  If
	    // no arguments are passed in, it will simply return the current
	    // global locale object.
	    numeral.localeData = function(key) {
	        if (!key) {
	            return locales[options.currentLocale];
	        }
	
	        key = key.toLowerCase();
	
	        if (!locales[key]) {
	            throw new Error('Unknown locale : ' + key);
	        }
	
	        return locales[key];
	    };
	
	    numeral.reset = function() {
	        for (var property in defaults) {
	            options[property] = defaults[property];
	        }
	    };
	
	    numeral.zeroFormat = function(format) {
	        options.zeroFormat = typeof(format) === 'string' ? format : null;
	    };
	
	    numeral.nullFormat = function (format) {
	        options.nullFormat = typeof(format) === 'string' ? format : null;
	    };
	
	    numeral.defaultFormat = function(format) {
	        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
	    };
	
	    numeral.register = function(type, name, format) {
	        name = name.toLowerCase();
	
	        if (this[type + 's'][name]) {
	            throw new TypeError(name + ' ' + type + ' already registered.');
	        }
	
	        this[type + 's'][name] = format;
	
	        return format;
	    };
	
	
	    numeral.validate = function(val, culture) {
	        var _decimalSep,
	            _thousandSep,
	            _currSymbol,
	            _valArray,
	            _abbrObj,
	            _thousandRegEx,
	            localeData,
	            temp;
	
	        //coerce val to string
	        if (typeof val !== 'string') {
	            val += '';
	
	            if (console.warn) {
	                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
	            }
	        }
	
	        //trim whitespaces from either sides
	        val = val.trim();
	
	        //if val is just digits return true
	        if (!!val.match(/^\d+$/)) {
	            return true;
	        }
	
	        //if val is empty return false
	        if (val === '') {
	            return false;
	        }
	
	        //get the decimal and thousands separator from numeral.localeData
	        try {
	            //check if the culture is understood by numeral. if not, default it to current locale
	            localeData = numeral.localeData(culture);
	        } catch (e) {
	            localeData = numeral.localeData(numeral.locale());
	        }
	
	        //setup the delimiters and currency symbol based on culture/locale
	        _currSymbol = localeData.currency.symbol;
	        _abbrObj = localeData.abbreviations;
	        _decimalSep = localeData.delimiters.decimal;
	        if (localeData.delimiters.thousands === '.') {
	            _thousandSep = '\\.';
	        } else {
	            _thousandSep = localeData.delimiters.thousands;
	        }
	
	        // validating currency symbol
	        temp = val.match(/^[^\d]+/);
	        if (temp !== null) {
	            val = val.substr(1);
	            if (temp[0] !== _currSymbol) {
	                return false;
	            }
	        }
	
	        //validating abbreviation symbol
	        temp = val.match(/[^\d]+$/);
	        if (temp !== null) {
	            val = val.slice(0, -1);
	            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
	                return false;
	            }
	        }
	
	        _thousandRegEx = new RegExp(_thousandSep + '{2}');
	
	        if (!val.match(/[^\d.,]/g)) {
	            _valArray = val.split(_decimalSep);
	            if (_valArray.length > 2) {
	                return false;
	            } else {
	                if (_valArray.length < 2) {
	                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
	                } else {
	                    if (_valArray[0].length === 1) {
	                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
	                    } else {
	                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
	                    }
	                }
	            }
	        }
	
	        return false;
	    };
	
	
	    /************************************
	        Numeral Prototype
	    ************************************/
	
	    numeral.fn = Numeral.prototype = {
	        clone: function() {
	            return numeral(this);
	        },
	        format: function(inputString, roundingFunction) {
	            var value = this._value,
	                format = inputString || options.defaultFormat,
	                kind,
	                output,
	                formatFunction;
	
	            // make sure we have a roundingFunction
	            roundingFunction = roundingFunction || Math.round;
	
	            // format based on value
	            if (value === 0 && options.zeroFormat !== null) {
	                output = options.zeroFormat;
	            } else if (value === null && options.nullFormat !== null) {
	                output = options.nullFormat;
	            } else {
	                for (kind in formats) {
	                    if (format.match(formats[kind].regexps.format)) {
	                        formatFunction = formats[kind].format;
	
	                        break;
	                    }
	                }
	
	                formatFunction = formatFunction || numeral._.numberToFormat;
	
	                output = formatFunction(value, format, roundingFunction);
	            }
	
	            return output;
	        },
	        value: function() {
	            return this._value;
	        },
	        input: function() {
	            return this._input;
	        },
	        set: function(value) {
	            this._value = Number(value);
	
	            return this;
	        },
	        add: function(value) {
	            var corrFactor = _.correctionFactor.call(null, this._value, value);
	
	            function cback(accum, curr, currI, O) {
	                return accum + Math.round(corrFactor * curr);
	            }
	
	            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
	
	            return this;
	        },
	        subtract: function(value) {
	            var corrFactor = _.correctionFactor.call(null, this._value, value);
	
	            function cback(accum, curr, currI, O) {
	                return accum - Math.round(corrFactor * curr);
	            }
	
	            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
	
	            return this;
	        },
	        multiply: function(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = _.correctionFactor(accum, curr);
	                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
	            }
	
	            this._value = _.reduce([this._value, value], cback, 1);
	
	            return this;
	        },
	        divide: function(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = _.correctionFactor(accum, curr);
	                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
	            }
	
	            this._value = _.reduce([this._value, value], cback);
	
	            return this;
	        },
	        difference: function(value) {
	            return Math.abs(numeral(this._value).subtract(value).value());
	        }
	    };
	
	    /************************************
	        Default Locale && Format
	    ************************************/
	
	    numeral.register('locale', 'en', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function(number) {
	            var b = number % 10;
	            return (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });
	
	
	
	(function() {
	        numeral.register('format', 'bps', {
	            regexps: {
	                format: /(BPS)/,
	                unformat: /(BPS)/
	            },
	            format: function(value, format, roundingFunction) {
	                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
	                    output;
	
	                value = value * 10000;
	
	                // check for space before BPS
	                format = format.replace(/\s?BPS/, '');
	
	                output = numeral._.numberToFormat(value, format, roundingFunction);
	
	                if (numeral._.includes(output, ')')) {
	                    output = output.split('');
	
	                    output.splice(-1, 0, space + 'BPS');
	
	                    output = output.join('');
	                } else {
	                    output = output + space + 'BPS';
	                }
	
	                return output;
	            },
	            unformat: function(string) {
	                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
	            }
	        });
	})();
	
	
	(function() {
	        var decimal = {
	            base: 1000,
	            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	        },
	        binary = {
	            base: 1024,
	            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
	        };
	
	    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
	            return decimal.suffixes.indexOf(item) < 0;
	        }));
	        var unformatRegex = allSuffixes.join('|');
	        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
	        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';
	
	    numeral.register('format', 'bytes', {
	        regexps: {
	            format: /([0\s]i?b)/,
	            unformat: new RegExp(unformatRegex)
	        },
	        format: function(value, format, roundingFunction) {
	            var output,
	                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
	                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
	                power,
	                min,
	                max;
	
	            // check for space before
	            format = format.replace(/\s?i?b/, '');
	
	            for (power = 0; power <= bytes.suffixes.length; power++) {
	                min = Math.pow(bytes.base, power);
	                max = Math.pow(bytes.base, power + 1);
	
	                if (value === null || value === 0 || value >= min && value < max) {
	                    suffix += bytes.suffixes[power];
	
	                    if (min > 0) {
	                        value = value / min;
	                    }
	
	                    break;
	                }
	            }
	
	            output = numeral._.numberToFormat(value, format, roundingFunction);
	
	            return output + suffix;
	        },
	        unformat: function(string) {
	            var value = numeral._.stringToNumber(string),
	                power,
	                bytesMultiplier;
	
	            if (value) {
	                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
	                    if (numeral._.includes(string, decimal.suffixes[power])) {
	                        bytesMultiplier = Math.pow(decimal.base, power);
	
	                        break;
	                    }
	
	                    if (numeral._.includes(string, binary.suffixes[power])) {
	                        bytesMultiplier = Math.pow(binary.base, power);
	
	                        break;
	                    }
	                }
	
	                value *= (bytesMultiplier || 1);
	            }
	
	            return value;
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('format', 'currency', {
	        regexps: {
	            format: /(\$)/
	        },
	        format: function(value, format, roundingFunction) {
	            var locale = numeral.locales[numeral.options.currentLocale],
	                symbols = {
	                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
	                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
	                },
	                output,
	                symbol,
	                i;
	
	            // strip format of spaces and $
	            format = format.replace(/\s?\$\s?/, '');
	
	            // format the number
	            output = numeral._.numberToFormat(value, format, roundingFunction);
	
	            // update the before and after based on value
	            if (value >= 0) {
	                symbols.before = symbols.before.replace(/[\-\(]/, '');
	                symbols.after = symbols.after.replace(/[\-\)]/, '');
	            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
	                symbols.before = '-' + symbols.before;
	            }
	
	            // loop through each before symbol
	            for (i = 0; i < symbols.before.length; i++) {
	                symbol = symbols.before[i];
	
	                switch (symbol) {
	                    case '$':
	                        output = numeral._.insert(output, locale.currency.symbol, i);
	                        break;
	                    case ' ':
	                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
	                        break;
	                }
	            }
	
	            // loop through each after symbol
	            for (i = symbols.after.length - 1; i >= 0; i--) {
	                symbol = symbols.after[i];
	
	                switch (symbol) {
	                    case '$':
	                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
	                        break;
	                    case ' ':
	                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
	                        break;
	                }
	            }
	
	
	            return output;
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('format', 'exponential', {
	        regexps: {
	            format: /(e\+|e-)/,
	            unformat: /(e\+|e-)/
	        },
	        format: function(value, format, roundingFunction) {
	            var output,
	                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
	                parts = exponential.split('e');
	
	            format = format.replace(/e[\+|\-]{1}0/, '');
	
	            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);
	
	            return output + 'e' + parts[1];
	        },
	        unformat: function(string) {
	            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
	                value = Number(parts[0]),
	                power = Number(parts[1]);
	
	            power = numeral._.includes(string, 'e-') ? power *= -1 : power;
	
	            function cback(accum, curr, currI, O) {
	                var corrFactor = numeral._.correctionFactor(accum, curr),
	                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
	                return num;
	            }
	
	            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('format', 'ordinal', {
	        regexps: {
	            format: /(o)/
	        },
	        format: function(value, format, roundingFunction) {
	            var locale = numeral.locales[numeral.options.currentLocale],
	                output,
	                ordinal = numeral._.includes(format, ' o') ? ' ' : '';
	
	            // check for space before
	            format = format.replace(/\s?o/, '');
	
	            ordinal += locale.ordinal(value);
	
	            output = numeral._.numberToFormat(value, format, roundingFunction);
	
	            return output + ordinal;
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('format', 'percentage', {
	        regexps: {
	            format: /(%)/,
	            unformat: /(%)/
	        },
	        format: function(value, format, roundingFunction) {
	            var space = numeral._.includes(format, ' %') ? ' ' : '',
	                output;
	
	            if (numeral.options.scalePercentBy100) {
	                value = value * 100;
	            }
	
	            // check for space before %
	            format = format.replace(/\s?\%/, '');
	
	            output = numeral._.numberToFormat(value, format, roundingFunction);
	
	            if (numeral._.includes(output, ')')) {
	                output = output.split('');
	
	                output.splice(-1, 0, space + '%');
	
	                output = output.join('');
	            } else {
	                output = output + space + '%';
	            }
	
	            return output;
	        },
	        unformat: function(string) {
	            var number = numeral._.stringToNumber(string);
	            if (numeral.options.scalePercentBy100) {
	                return number * 0.01;
	            }
	            return number;
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('format', 'time', {
	        regexps: {
	            format: /(:)/,
	            unformat: /(:)/
	        },
	        format: function(value, format, roundingFunction) {
	            var hours = Math.floor(value / 60 / 60),
	                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
	                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));
	
	            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
	        },
	        unformat: function(string) {
	            var timeArray = string.split(':'),
	                seconds = 0;
	
	            // turn hours and minutes into seconds and add them all up
	            if (timeArray.length === 3) {
	                // hours
	                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
	                // minutes
	                seconds = seconds + (Number(timeArray[1]) * 60);
	                // seconds
	                seconds = seconds + Number(timeArray[2]);
	            } else if (timeArray.length === 2) {
	                // minutes
	                seconds = seconds + (Number(timeArray[0]) * 60);
	                // seconds
	                seconds = seconds + Number(timeArray[1]);
	            }
	            return Number(seconds);
	        }
	    });
	})();
	
	return numeral;
	}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
	 * numeral.js
	 * locales : 2.0.6
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
	
	(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        factory(require('./numeral'));
	    } else {
	        factory(global.numeral);
	    }
	}(this, function (numeral) {
	    
	(function() {
	        numeral.register('locale', 'bg', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: { // I found these here http://www.unicode.org/cldr/charts/28/verify/numbers/bg.html
	            thousand: 'хил',
	            million: 'млн',
	            billion: 'млрд',
	            trillion: 'трлн'
	        },
	        ordinal: function (number) {
	            // google translate suggests:
	            // 1st=1-ви; 2nd=2-ри; 7th=7-ми;
	            // 8th=8-ми and many others end with -ти
	            // for example 3rd=3-ти
	            // However since I've seen suggestions that in
	            // Bulgarian the ordinal can be taken in
	            // different forms (masculine, feminine, neuter)
	            // I've opted to wimp out on commiting that to code
	            return '';
	        },
	        currency: {
	            symbol: 'лв'
	        }
	    });
	})();
	
	
	(function() {
	    
	    numeral.register('locale', 'chs', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: '千',
	            million: '百万',
	            billion: '十亿',
	            trillion: '兆'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '¥'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'cs', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'tis.',
	            million: 'mil.',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function () {
	            return '.';
	        },
	        currency: {
	            symbol: 'Kč'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'da-dk', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'mio',
	            billion: 'mia',
	            trillion: 'b'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: 'DKK'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'de-ch', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: 'CHF'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'de', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'en-au', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            var b = number % 10;
	            return (~~ (number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'en-gb', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            var b = number % 10;
	            return (~~ (number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '£'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'en-za', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            var b = number % 10;
	            return (~~ (number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                    (b === 2) ? 'nd' :
	                        (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: 'R'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'es-es', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'mm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            var b = number % 10;
	            return (b === 1 || b === 3) ? 'er' :
	                (b === 2) ? 'do' :
	                    (b === 7 || b === 0) ? 'mo' :
	                        (b === 8) ? 'vo' :
	                            (b === 9) ? 'no' : 'to';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'es', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'mm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            var b = number % 10;
	            return (b === 1 || b === 3) ? 'er' :
	                (b === 2) ? 'do' :
	                (b === 7 || b === 0) ? 'mo' :
			(b === 8) ? 'vo' :
			(b === 9) ? 'no' : 'to';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'et', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: ' tuh',
	            million: ' mln',
	            billion: ' mld',
	            trillion: ' trl'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'fi', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'M',
	            billion: 'G',
	            trillion: 'T'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'fr-ca', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'M',
	            billion: 'G',
	            trillion: 'T'
	        },
	        ordinal : function (number) {
	            return number === 1 ? 'er' : 'e';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'fr-ch', {
	        delimiters: {
	            thousands: '\'',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal : function (number) {
	            return number === 1 ? 'er' : 'e';
	        },
	        currency: {
	            symbol: 'CHF'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'fr', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal : function (number) {
	            return number === 1 ? 'er' : 'e';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'hu', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'E',  // ezer
	            million: 'M',   // millió
	            billion: 'Mrd', // milliárd
	            trillion: 'T'   // trillió
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: ' Ft'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'it', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'mila',
	            million: 'mil',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            return 'º';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'ja', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: '千',
	            million: '百万',
	            billion: '十億',
	            trillion: '兆'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '¥'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'lv', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: ' tūkst.',
	            million: ' milj.',
	            billion: ' mljrd.',
	            trillion: ' trilj.'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'nl-be', {
	        delimiters: {
	            thousands: ' ',
	            decimal  : ','
	        },
	        abbreviations: {
	            thousand : 'k',
	            million  : ' mln',
	            billion  : ' mld',
	            trillion : ' bln'
	        },
	        ordinal : function (number) {
	            var remainder = number % 100;
	
	            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
	        },
	        currency: {
	            symbol: '€ '
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'nl-nl', {
	        delimiters: {
	            thousands: '.',
	            decimal  : ','
	        },
	        abbreviations: {
	            thousand : 'k',
	            million  : 'mln',
	            billion  : 'mrd',
	            trillion : 'bln'
	        },
	        ordinal : function (number) {
	            var remainder = number % 100;
	            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
	        },
	        currency: {
	            symbol: '€ '
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'no', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: 'kr'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'pl', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'tys.',
	            million: 'mln',
	            billion: 'mld',
	            trillion: 'bln'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: 'PLN'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'pt-br', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'mil',
	            million: 'milhões',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function (number) {
	            return 'º';
	        },
	        currency: {
	            symbol: 'R$'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'pt-pt', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal : function (number) {
	            return 'º';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'ru-ua', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'тыс.',
	            million: 'млн',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function () {
	            // not ideal, but since in Russian it can taken on
	            // different forms (masculine, feminine, neuter)
	            // this is all we can do
	            return '.';
	        },
	        currency: {
	            symbol: '\u20B4'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'ru', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'тыс.',
	            million: 'млн.',
	            billion: 'млрд.',
	            trillion: 'трлн.'
	        },
	        ordinal: function () {
	            // not ideal, but since in Russian it can taken on
	            // different forms (masculine, feminine, neuter)
	            // this is all we can do
	            return '.';
	        },
	        currency: {
	            symbol: 'руб.'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'sk', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'tis.',
	            million: 'mil.',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function () {
	            return '.';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'sl', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'mio',
	            billion: 'mrd',
	            trillion: 'trilijon'
	        },
	        ordinal: function () {
	            return '.';
	        },
	        currency: {
	            symbol: '€'
	        }
	    });
	})();
	
	
	(function() {
	    
	
	    numeral.register('locale', 'th', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'พัน',
	            million: 'ล้าน',
	            billion: 'พันล้าน',
	            trillion: 'ล้านล้าน'
	        },
	        ordinal: function (number) {
	            return '.';
	        },
	        currency: {
	            symbol: '฿'
	        }
	    });
	})();
	
	
	(function() {
	        var suffixes = {
	            1: '\'inci',
	            5: '\'inci',
	            8: '\'inci',
	            70: '\'inci',
	            80: '\'inci',
	
	            2: '\'nci',
	            7: '\'nci',
	            20: '\'nci',
	            50: '\'nci',
	
	            3: '\'üncü',
	            4: '\'üncü',
	            100: '\'üncü',
	
	            6: '\'ncı',
	
	            9: '\'uncu',
	            10: '\'uncu',
	            30: '\'uncu',
	
	            60: '\'ıncı',
	            90: '\'ıncı'
	        };
	
	    numeral.register('locale', 'tr', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'bin',
	            million: 'milyon',
	            billion: 'milyar',
	            trillion: 'trilyon'
	        },
	        ordinal: function (number) {
	            if (number === 0) {  // special case for zero
	                return '\'ıncı';
	            }
	
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	
	          return suffixes[a] || suffixes[b] || suffixes[c];
	        },
	        currency: {
	            symbol: '\u20BA'
	        }
	    });
	})();
	
	
	(function() {
	        numeral.register('locale', 'uk-ua', {
	        delimiters: {
	            thousands: ' ',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: 'тис.',
	            million: 'млн',
	            billion: 'млрд',
	            trillion: 'блн'
	        },
	        ordinal: function () {
	            // not ideal, but since in Ukrainian it can taken on
	            // different forms (masculine, feminine, neuter)
	            // this is all we can do
	            return '';
	        },
	        currency: {
	            symbol: '\u20B4'
	        }
	    });
	})();
	
	
	(function() {
	    
	    numeral.register('locale', 'vi', {
	        delimiters: {
	            thousands: '.',
	            decimal: ','
	        },
	        abbreviations: {
	            thousand: ' nghìn',
	            million: ' triệu',
	            billion: ' tỷ',
	            trillion: ' nghìn tỷ'
	        },
	        ordinal: function () {
	            return '.';
	        },
	        currency: {
	            symbol: '₫'
	        }
	    });
	})();
	
	
	}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _numeral = __webpack_require__(3);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	var _Button = __webpack_require__(6);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Rect = __webpack_require__(9);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Calculator = function (_React$Component) {
	  _inherits(Calculator, _React$Component);
	
	  function Calculator(props) {
	    _classCallCheck(this, Calculator);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      display: props.initialAmount,
	      amount: props.initialAmount,
	      appendMode: false,
	      format: '0,0[.]0[000000000]',
	      operator: {},
	      unit: {},
	      x: 0,
	      y: 0
	    };
	
	    window.onresize = function () {
	      return _this.adjustPosition();
	    };
	    return _this;
	  }
	
	  Calculator.prototype.adjustPosition = function adjustPosition() {
	    if (this.refs.calculator) {
	      var windowRect = _Rect2.default.createWithWindow();
	      var buttonRect = _Rect2.default.createWithElement(this.props.button);
	      var calcRect = _Rect2.default.createWithElement(this.refs.calculator, this.state.x, this.state.y);
	
	      var newCalcRect = undefined;
	      for (var i = 0; i < this.props.positions.length; i++) {
	        var posKey = this.props.positions[i];
	        var rect = buttonRect.getRelativeRect(calcRect, posKey);
	        if (windowRect.contains(rect)) {
	          newCalcRect = rect;
	          break;
	        }
	      }
	
	      if (!newCalcRect) {
	        newCalcRect = windowRect.getRelativeRect(calcRect, _Rect2.default.CENTER);
	      }
	
	      this.setState({
	        x: newCalcRect.transformX,
	        y: newCalcRect.transformY
	      });
	    }
	  };
	
	  Calculator.prototype.inputNumber = function inputNumber(number) {
	    if (this.state.appendMode) {
	      this.setState({
	        display: this.state.display + number
	      });
	    } else {
	      this.setState({
	        appendMode: true,
	        display: number
	      });
	    }
	  };
	
	  Calculator.prototype.calc = function calc(left, operator, right) {
	    switch (operator) {
	      case '+':
	        if (this.state.unit.value == '%') {
	          right = left * (right / 100);
	        }
	
	        return left + right;
	      case '-':
	        if (this.state.unit.value == '%') {
	          right = left * (right / 100);
	        }
	
	        return left - right;
	      case '/':
	        if (this.state.unit.value == '%') {
	          right = right / 100;
	        }
	
	        return left / right;
	      case '*':
	        if (this.state.unit.value == '%') {
	          right = right / 100;
	        }
	
	        return left * right;
	      default:
	        throw 'Invalid operator ' + operator + ' specified.';
	    }
	  };
	
	  Calculator.prototype.execute = function execute() {
	    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	
	    var display = this.state.display;
	    var amount = this.state.amount;
	
	    if (this.state.operator.value) {
	      display = this.calc(parseFloat(amount, 10), this.state.operator.value, parseFloat(display, 10));
	    }
	
	    amount = display;
	
	    this.setState({
	      operator: {},
	      unit: {},
	      display: display,
	      amount: amount,
	      appendMode: false
	    }, callback);
	  };
	
	  Calculator.prototype.inputOperator = function inputOperator(operator, btnProps) {
	    var _this2 = this;
	
	    if (this.state.appendMode) {
	      this.execute(function () {
	        _this2.setState({
	          appendMode: false,
	          operator: {
	            value: operator,
	            display: btnProps.display
	          }
	        });
	      });
	    } else {
	      this.setState({
	        operator: {
	          value: operator,
	          display: btnProps.display
	        }
	      });
	    }
	  };
	
	  Calculator.prototype.inputDecimal = function inputDecimal() {
	    if (this.state.display.indexOf('.') === -1) {
	      this.inputNumber('.');
	    }
	  };
	
	  Calculator.prototype.inputPercent = function inputPercent(btnProps) {
	    if (this.state.operator.value) {
	      this.setState({ unit: {
	          value: '%',
	          display: btnProps.display
	        } });
	    } else {
	      this.setState({ display: this.state.display / 100 });
	    }
	  };
	
	  Calculator.prototype.clear = function clear() {
	    if (this.state.appendMode) {
	      this.setState({
	        display: '0',
	        appendMode: false,
	        unit: {}
	      });
	    }
	  };
	
	  Calculator.prototype.allClear = function allClear() {
	    this.setState({
	      display: '0',
	      amount: '0',
	      operator: {},
	      appendMode: false,
	      unit: {}
	    });
	  };
	
	  Calculator.prototype.delete = function _delete() {
	    if (this.state.appendMode) {
	      var newState = {};
	      var value = this.state.display.toString();
	      if (value === '0') {
	        newState['unit'] = {};
	      }
	      value = value.substr(0, value.length - 1);
	      newState['display'] = !value ? 0 : value;
	      this.setState(newState);
	    }
	  };
	
	  Calculator.prototype.componentDidMount = function componentDidMount() {
	    this.adjustPosition();
	  };
	
	  Calculator.prototype.render = function render() {
	    var _this3 = this;
	
	    var locale = _numeral2.default.localeData();
	    return _react2.default.createElement(
	      'div',
	      { ref: 'calculator', className: 'react-currency-calculator__calculator', style: { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' } },
	      _react2.default.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-header' },
	        _react2.default.createElement(_Button2.default, { className: 'react-currency-calculator__calculator-button-close', display: '\xD7', onClick: this.props.onClickClose })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-display' },
	        _react2.default.createElement(
	          'div',
	          { className: 'react-currency-calculator__calculator-display-operator' },
	          this.state.operator.display
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'react-currency-calculator__calculator-display-number' },
	          (0, _numeral2.default)(this.state.display).format(this.state.format),
	          this.state.unit.display
	        )
	      ),
	      this.props.buttons.map(function (row, rowKey) {
	        return _react2.default.createElement(
	          'div',
	          { key: rowKey, className: 'react-currency-calculator__calculator-buttons' },
	          row.map(function (btn, btnKey) {
	            return _react2.default.createElement(_Button2.default, { key: rowKey + '-' + btnKey, className: btn.className, style: btn.style, size: btn.size, display: btn.display, onClick: function onClick(display) {
	                return btn.action(_this3, btn);
	              } });
	          })
	        );
	      })
	    );
	  };
	
	  return Calculator;
	}(_react2.default.Component);
	
	exports.default = Calculator;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_React$Component) {
	  _inherits(Button, _React$Component);
	
	  function Button(props) {
	    _classCallCheck(this, Button);
	
	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }
	
	  Button.prototype.onClick = function onClick(e) {
	    e.preventDefault();
	    this.props.onClick(this.props.display);
	    return false;
	  };
	
	  Button.prototype.getSizeClass = function getSizeClass() {
	    if (!this.props.size) {
	      return;
	    }
	
	    var classNames = [];
	    if (this.props.size.width) {
	      classNames.push("react-currency-calculator__calculator-button-" + this.props.size.width + 'w');
	    }
	
	    if (this.props.size.height) {
	      classNames.push("react-currency-calculator__calculator-button-" + this.props.size.height + 'h');
	    }
	
	    return classNames;
	  };
	
	  Button.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'button',
	      {
	        className: (0, _classNames2.default)("react-currency-calculator__calculator-button", this.props.style ? "react-currency-calculator__calculator-button-" + this.props.style : undefined, this.getSizeClass(), this.props.className),
	        onClick: function onClick(e) {
	          return _this2.onClick(e);
	        }
	      },
	      this.props.display
	    );
	  };
	
	  return Button;
	}(_react2.default.Component);
	
	exports.default = Button;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
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


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rect = function () {
	  function Rect(top, left, width, height) {
	    var transformX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	    var transformY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	    _classCallCheck(this, Rect);
	
	    this.top = top;
	    this.left = left;
	    this.width = width;
	    this.height = height;
	    this.transformX = transformX;
	    this.transformY = transformY;
	  }
	
	  Rect.prototype.getCenterRect = function getCenterRect(width, height) {
	    var center = {
	      x: this.left + this.width / 2,
	      y: this.top + this.height / 2
	    };
	
	    return new Rect(center.y - height / 2, center.x - width / 2, width, height);
	  };
	
	  Rect.prototype.clone = function clone() {
	    return new Rect(this.top, this.left, this.width, this.height, this.transformX, this.transformY);
	  };
	
	  Rect.prototype.transform = function transform(x, y) {
	    this.top = this.originTop + y;
	    this.left = this.originLeft + x;
	    this.transformX = x;
	    this.transformY = y;
	    return this;
	  };
	
	  Rect.prototype.contains = function contains(rect) {
	    var result = this.left <= rect.left && this.right >= rect.right && this.top <= rect.top && this.bottom >= rect.bottom;
	    return result;
	  };
	
	  Rect.prototype.dump = function dump() {
	    return {
	      top: this.top,
	      left: this.left,
	      bottom: this.bottom,
	      right: this.right,
	      width: this.width,
	      height: this.height,
	      originTop: this.originTop,
	      originLeft: this.originLeft,
	      originBottom: this.originBottom,
	      originRight: this.originRight,
	      transformX: this.transformX,
	      transformY: this.transformY
	    };
	  };
	
	  Rect.prototype.getRelativeRect = function getRelativeRect(rect, position) {
	    switch (position) {
	      case Rect.RIGHT_BOTTOM:
	        return rect.clone().transform(this.left - rect.originLeft, this.bottom - rect.originTop);
	      case Rect.LEFT_BOTTOM:
	        return rect.clone().transform(this.right - rect.originRight, this.bottom - rect.originTop);
	      case Rect.LEFT_TOP:
	        return rect.clone().transform(this.right - rect.originRight, this.top - rect.originBottom);
	      case Rect.RIGHT_TOP:
	        return rect.clone().transform(this.left - rect.originLeft, this.top - rect.originBottom);
	      case Rect.CENTER:
	        var expectedRect = this.getCenterRect(rect.width, rect.height);
	        return rect.clone().transform(expectedRect.left - rect.originLeft, expectedRect.top - rect.originTop);
	      default:
	        throw 'Illegal positionKey `' + position + '` is specified';
	    }
	  };
	
	  _createClass(Rect, [{
	    key: 'bottom',
	    get: function get() {
	      return this.top + this.height;
	    }
	  }, {
	    key: 'right',
	    get: function get() {
	      return this.left + this.width;
	    }
	  }, {
	    key: 'originTop',
	    get: function get() {
	      return this.top - this.transformY;
	    }
	  }, {
	    key: 'originLeft',
	    get: function get() {
	      return this.left - this.transformX;
	    }
	  }, {
	    key: 'originBottom',
	    get: function get() {
	      return this.originTop + this.height;
	    }
	  }, {
	    key: 'originRight',
	    get: function get() {
	      return this.originLeft + this.width;
	    }
	  }]);
	
	  return Rect;
	}();
	
	exports.default = Rect;
	
	
	Rect.createWithElement = function (elem) {
	  var transformX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var transformY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	  if (!elem) {
	    return new Rect(0, 0, 0, 0);
	  }
	  var boundingRect = elem.getBoundingClientRect();
	
	  var body = document.body;
	  var docEl = document.documentElement;
	
	  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	
	  var clientTop = docEl.clientTop || body.clientTop || 0;
	  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
	
	  return new Rect(boundingRect.top + scrollTop - clientTop, boundingRect.left + scrollLeft - clientLeft, boundingRect.width, boundingRect.height, transformX, transformY);
	};
	
	Rect.createWithWindow = function () {
	  return new Rect(window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft, document.documentElement.clientWidth, document.documentElement.clientHeight);
	};
	
	Object.defineProperty(Rect, 'RIGHT_TOP', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: "RIGHT_TOP"
	});
	
	Object.defineProperty(Rect, 'LEFT_TOP', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: "LEFT_TOP"
	});
	
	Object.defineProperty(Rect, 'RIGHT_BOTTOM', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: "RIGHT_BOTTOM"
	});
	
	Object.defineProperty(Rect, 'LEFT_BOTTOM', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: "LEFT_BOTTOM"
	});
	
	Object.defineProperty(Rect, 'CENTER', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: "CENTER"
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(11);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KEYCODES = {
	  ESCAPE: 27
	};
	
	var Portal = function (_React$Component) {
	  _inherits(Portal, _React$Component);
	
	  function Portal() {
	    _classCallCheck(this, Portal);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Portal).call(this));
	
	    _this.state = { active: false };
	    _this.handleWrapperClick = _this.handleWrapperClick.bind(_this);
	    _this.closePortal = _this.closePortal.bind(_this);
	    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
	    _this.handleKeydown = _this.handleKeydown.bind(_this);
	    _this.portal = null;
	    _this.node = null;
	    return _this;
	  }
	
	  _createClass(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.closeOnEsc) {
	        document.addEventListener('keydown', this.handleKeydown);
	      }
	
	      if (this.props.closeOnOutsideClick) {
	        document.addEventListener('mouseup', this.handleOutsideMouseClick);
	        document.addEventListener('touchstart', this.handleOutsideMouseClick);
	      }
	
	      if (this.props.isOpened) {
	        this.openPortal();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      // portal's 'is open' state is handled through the prop isOpened
	      if (typeof newProps.isOpened !== 'undefined') {
	        if (newProps.isOpened) {
	          if (this.state.active) {
	            this.renderPortal(newProps);
	          } else {
	            this.openPortal(newProps);
	          }
	        }
	        if (!newProps.isOpened && this.state.active) {
	          this.closePortal();
	        }
	      }
	
	      // portal handles its own 'is open' state
	      if (typeof newProps.isOpened === 'undefined' && this.state.active) {
	        this.renderPortal(newProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.closeOnEsc) {
	        document.removeEventListener('keydown', this.handleKeydown);
	      }
	
	      if (this.props.closeOnOutsideClick) {
	        document.removeEventListener('mouseup', this.handleOutsideMouseClick);
	        document.removeEventListener('touchstart', this.handleOutsideMouseClick);
	      }
	
	      this.closePortal(true);
	    }
	  }, {
	    key: 'handleWrapperClick',
	    value: function handleWrapperClick(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      if (this.state.active) {
	        return;
	      }
	      this.openPortal();
	    }
	  }, {
	    key: 'openPortal',
	    value: function openPortal() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	      this.setState({ active: true });
	      this.renderPortal(props);
	      this.props.onOpen(this.node);
	    }
	  }, {
	    key: 'closePortal',
	    value: function closePortal() {
	      var _this2 = this;
	
	      var isUnmounted = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      var resetPortalState = function resetPortalState() {
	        if (_this2.node) {
	          _reactDom2.default.unmountComponentAtNode(_this2.node);
	          document.body.removeChild(_this2.node);
	        }
	        _this2.portal = null;
	        _this2.node = null;
	        if (isUnmounted !== true) {
	          _this2.setState({ active: false });
	        }
	      };
	
	      if (this.state.active) {
	        if (this.props.beforeClose) {
	          this.props.beforeClose(this.node, resetPortalState);
	        } else {
	          resetPortalState();
	        }
	
	        this.props.onClose();
	      }
	    }
	  }, {
	    key: 'handleOutsideMouseClick',
	    value: function handleOutsideMouseClick(e) {
	      if (!this.state.active) {
	        return;
	      }
	
	      var root = (0, _reactDom.findDOMNode)(this.portal);
	      if (root.contains(e.target) || e.button && e.button !== 0) {
	        return;
	      }
	
	      e.stopPropagation();
	      this.closePortal();
	    }
	  }, {
	    key: 'handleKeydown',
	    value: function handleKeydown(e) {
	      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
	        this.closePortal();
	      }
	    }
	  }, {
	    key: 'renderPortal',
	    value: function renderPortal(props) {
	      if (!this.node) {
	        this.node = document.createElement('div');
	        document.body.appendChild(this.node);
	      }
	
	      var children = props.children;
	      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
	      if (typeof props.children.type === 'function') {
	        children = _react2.default.cloneElement(props.children, { closePortal: this.closePortal });
	      }
	
	      this.portal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, children, this.node, this.props.onUpdate);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.openByClickOn) {
	        return _react2.default.cloneElement(this.props.openByClickOn, { onClick: this.handleWrapperClick });
	      }
	      return null;
	    }
	  }]);
	
	  return Portal;
	}(_react2.default.Component);
	
	exports.default = Portal;
	
	
	Portal.propTypes = {
	  children: _react2.default.PropTypes.element.isRequired,
	  openByClickOn: _react2.default.PropTypes.element,
	  closeOnEsc: _react2.default.PropTypes.bool,
	  closeOnOutsideClick: _react2.default.PropTypes.bool,
	  isOpened: _react2.default.PropTypes.bool,
	  onOpen: _react2.default.PropTypes.func,
	  onClose: _react2.default.PropTypes.func,
	  beforeClose: _react2.default.PropTypes.func,
	  onUpdate: _react2.default.PropTypes.func
	};
	
	Portal.defaultProps = {
	  onOpen: function onOpen() {},
	  onClose: function onClose() {},
	  onUpdate: function onUpdate() {}
	};
	module.exports = exports['default'];


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Action = {
	  one: function one(calc) {
	    calc.inputNumber('1');
	  },
	  two: function two(calc) {
	    calc.inputNumber('2');
	  },
	  three: function three(calc) {
	    calc.inputNumber('3');
	  },
	  four: function four(calc) {
	    calc.inputNumber('4');
	  },
	  five: function five(calc) {
	    calc.inputNumber('5');
	  },
	  six: function six(calc) {
	    calc.inputNumber('6');
	  },
	  seven: function seven(calc) {
	    calc.inputNumber('7');
	  },
	  eight: function eight(calc) {
	    calc.inputNumber('8');
	  },
	  nine: function nine(calc) {
	    calc.inputNumber('9');
	  },
	  zero: function zero(calc) {
	    calc.inputNumber('0');
	  },
	  doubleZero: function doubleZero(calc) {
	    calc.inputNumber('00');
	  },
	  decimal: function decimal(calc) {
	    calc.inputDecimal();
	  },
	  percent: function percent(calc, btnProps) {
	    calc.inputPercent(btnProps);
	  },
	  plus: function plus(calc, btnProps) {
	    calc.inputOperator('+', btnProps);
	  },
	  minus: function minus(calc, btnProps) {
	    calc.inputOperator('-', btnProps);
	  },
	  multiplication: function multiplication(calc, btnProps) {
	    calc.inputOperator('*', btnProps);
	  },
	  division: function division(calc, btnProps) {
	    calc.inputOperator('/', btnProps);
	  },
	  enter: function enter(calc) {
	    calc.execute();
	  },
	  allClear: function allClear(calc) {
	    calc.allClear();
	  },
	  clear: function clear(calc) {
	    calc.clear();
	  },
	  backspace: function backspace(calc) {
	    calc.delete();
	  }
	};
	
	exports.default = Action;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOTU3OWE0YjQwMWI4NTYyNjgzOSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DdXJyZW5jeUNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vLy4vfi9udW1lcmFsL251bWVyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9udW1lcmFsL2xvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzcy1uYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXBvcnRhbC9idWlsZC9wb3J0YWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sIm5hbWVzIjpbIkN1cnJlbmN5Q2FsY3VsYXRvciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJhbW91bnQiLCJpbml0aWFsQW1vdW50Iiwid2luZG93Iiwib25rZXlkb3duIiwiZSIsImtleSIsInJlZnMiLCJjYWxjdWxhdG9yIiwiaW5wdXROdW1iZXIiLCJvbkNsaWNrT3BlcmF0b3IiLCJvbkNsaWNrUGVyY2VudCIsIm9uQ2xpY2tFbnRlciIsImFsbENsZWFyIiwiZGVsZXRlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIm9uQ2xpY2tBbW91bnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwib25DbG9zZUNhbGN1bGF0b3IiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJmb3JtYXQiLCJjdXJyZW5jeUZvcm1hdCIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImJ1dHRvbnMiLCJDb21wb25lbnQiLCJDYWxjdWxhdG9yIiwiZGlzcGxheSIsImFwcGVuZE1vZGUiLCJvcGVyYXRvciIsInVuaXQiLCJ4IiwieSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImJ1dHRvblJlY3QiLCJjcmVhdGVXaXRoRWxlbWVudCIsImNhbGNSZWN0IiwibmV3Q2FsY1JlY3QiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwicG9zS2V5IiwicmVjdCIsImdldFJlbGF0aXZlUmVjdCIsImNvbnRhaW5zIiwiQ0VOVEVSIiwidHJhbnNmb3JtWCIsInRyYW5zZm9ybVkiLCJudW1iZXIiLCJjYWxjIiwibGVmdCIsInJpZ2h0IiwidmFsdWUiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJwYXJzZUZsb2F0IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwibmV3U3RhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImNvbXBvbmVudERpZE1vdW50IiwibG9jYWxlRGF0YSIsInRyYW5zZm9ybSIsIm9uQ2xpY2tDbG9zZSIsIm1hcCIsInJvdyIsInJvd0tleSIsImJ0biIsImJ0bktleSIsInN0eWxlIiwic2l6ZSIsImFjdGlvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRTaXplQ2xhc3MiLCJjbGFzc05hbWVzIiwid2lkdGgiLCJwdXNoIiwiaGVpZ2h0IiwidG9wIiwiZ2V0Q2VudGVyUmVjdCIsImNlbnRlciIsImNsb25lIiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlc3VsdCIsImJvdHRvbSIsImR1bXAiLCJvcmlnaW5Cb3R0b20iLCJvcmlnaW5SaWdodCIsInBvc2l0aW9uIiwiUklHSFRfQk9UVE9NIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsImV4cGVjdGVkUmVjdCIsImVsZW0iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImRlY2ltYWwiLCJwZXJjZW50IiwicGx1cyIsIm1pbnVzIiwibXVsdGlwbGljYXRpb24iLCJkaXZpc2lvbiIsImVudGVyIiwiYmFja3NwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFxRCxFQUFFOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTJCLGdDQUFnQztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUF5RCxZQUFZO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsMkJBQTJCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUE4QyxRQUFRO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUE4QyxFQUFFOztBQUVoRDs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7O0FBRUQ7QUFDQSxFQUFDOzs7Ozs7O0FDcC9CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QseUJBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSx5QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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USxRQUFmLEVBQXdCO0FBQzVCUixVQUFLTyxhQUFMLENBQW1CLEdBQW5CLEVBQXdCQyxRQUF4QjtBQUNELElBMUNhO0FBMkNkOEUsVUFBTyxlQUFTdEYsSUFBVCxFQUFlUSxRQUFmLEVBQXdCO0FBQzdCUixVQUFLTyxhQUFMLENBQW1CLEdBQW5CLEVBQXdCQyxRQUF4QjtBQUNELElBN0NhO0FBOENkK0UsbUJBQWdCLHdCQUFTdkYsSUFBVCxFQUFlUSxRQUFmLEVBQXdCO0FBQ3RDUixVQUFLTyxhQUFMLENBQW1CLEdBQW5CLEVBQXdCQyxRQUF4QjtBQUNELElBaERhO0FBaURkZ0YsYUFBVSxrQkFBU3hGLElBQVQsRUFBZVEsUUFBZixFQUF3QjtBQUNoQ1IsVUFBS08sYUFBTCxDQUFtQixHQUFuQixFQUF3QkMsUUFBeEI7QUFDRCxJQW5EYTtBQW9EZGlGLFVBQU8sZUFBU3pGLElBQVQsRUFBYztBQUNuQkEsVUFBS0ksT0FBTDtBQUNELElBdERhO0FBdURkOUMsYUFBVSxrQkFBUzBDLElBQVQsRUFBYztBQUN0QkEsVUFBSzFDLFFBQUw7QUFDRCxJQXpEYTtBQTBEZHNELFVBQU8sZUFBU1osSUFBVCxFQUFjO0FBQ25CQSxVQUFLWSxLQUFMO0FBQ0QsSUE1RGE7QUE2RGQ4RSxjQUFXLG1CQUFTMUYsSUFBVCxFQUFjO0FBQ3ZCQSxVQUFLekMsTUFBTDtBQUNEO0FBL0RhLEVBQWhCOzttQkFrRWVsQixNIiwiZmlsZSI6InJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEN1cnJlbmN5Q2FsY3VsYXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEN1cnJlbmN5Q2FsY3VsYXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOTU3OWE0YjQwMWI4NTYyNjgzOSIsImltcG9ydCBDdXJyZW5jeUNhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL0N1cnJlbmN5Q2FsY3VsYXRvcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDdXJyZW5jeUNhbGN1bGF0b3IsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmN5Q2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudFxuICAgIH1cblxuICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICBjYXNlICc3JzpcbiAgICAgICAgICBjYXNlICc4JzpcbiAgICAgICAgICBjYXNlICc5JzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLmlucHV0TnVtYmVyKGUua2V5KVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5vbkNsaWNrT3BlcmF0b3IoZS5rZXkpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLm9uQ2xpY2tPcGVyYXRvcignw7cnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5vbkNsaWNrT3BlcmF0b3IoJ8OXJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3Iub25DbGlja1BlcmNlbnQoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3Iub25DbGlja0VudGVyKClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0NsZWFyJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLmFsbENsZWFyKClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5kZWxldGUoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VDYWxjdWxhdG9yKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnByb3BzLmN1cnJlbmN5Rm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrIGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VDYWxjdWxhdG9yKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsQW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ3VycmVuY3lDYWxjdWxhdG9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISBAcHJlc2VydmVcbiAqIG51bWVyYWwuanNcbiAqIHZlcnNpb24gOiAyLjAuNlxuICogYXV0aG9yIDogQWRhbSBEcmFwZXJcbiAqIGxpY2Vuc2UgOiBNSVRcbiAqIGh0dHA6Ly9hZGFtd2RyYXBlci5naXRodWIuY29tL051bWVyYWwtanMvXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsb2JhbC5udW1lcmFsID0gZmFjdG9yeSgpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgVmFyaWFibGVzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIG51bWVyYWwsXG4gICAgICAgIF8sXG4gICAgICAgIFZFUlNJT04gPSAnMi4wLjYnLFxuICAgICAgICBmb3JtYXRzID0ge30sXG4gICAgICAgIGxvY2FsZXMgPSB7fSxcbiAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlOiAnZW4nLFxuICAgICAgICAgICAgemVyb0Zvcm1hdDogbnVsbCxcbiAgICAgICAgICAgIG51bGxGb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICBkZWZhdWx0Rm9ybWF0OiAnMCwwJyxcbiAgICAgICAgICAgIHNjYWxlUGVyY2VudEJ5MTAwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBkZWZhdWx0cy5jdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgemVyb0Zvcm1hdDogZGVmYXVsdHMuemVyb0Zvcm1hdCxcbiAgICAgICAgICAgIG51bGxGb3JtYXQ6IGRlZmF1bHRzLm51bGxGb3JtYXQsXG4gICAgICAgICAgICBkZWZhdWx0Rm9ybWF0OiBkZWZhdWx0cy5kZWZhdWx0Rm9ybWF0LFxuICAgICAgICAgICAgc2NhbGVQZXJjZW50QnkxMDA6IGRlZmF1bHRzLnNjYWxlUGVyY2VudEJ5MTAwXG4gICAgICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgQ29uc3RydWN0b3JzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLy8gTnVtZXJhbCBwcm90b3R5cGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gTnVtZXJhbChpbnB1dCwgbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgbnVtZXJhbCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVnZXhwO1xuXG4gICAgICAgIGlmIChudW1lcmFsLmlzTnVtZXJhbChpbnB1dCkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaW5wdXQudmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gMCB8fCB0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IG51bGwgfHwgXy5pc05hTihpbnB1dCkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy56ZXJvRm9ybWF0ICYmIGlucHV0ID09PSBvcHRpb25zLnplcm9Gb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubnVsbEZvcm1hdCAmJiBpbnB1dCA9PT0gb3B0aW9ucy5udWxsRm9ybWF0IHx8ICFpbnB1dC5yZXBsYWNlKC9bXjAtOV0rL2csICcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa2luZCBpbiBmb3JtYXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4cCA9IHR5cGVvZiBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQgPT09ICdmdW5jdGlvbicgPyBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQoKSA6IGZvcm1hdHNba2luZF0ucmVnZXhwcy51bmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnZXhwICYmIGlucHV0Lm1hdGNoKHJlZ2V4cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRzW2tpbmRdLnVuZm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVuZm9ybWF0RnVuY3Rpb24gPSB1bmZvcm1hdEZ1bmN0aW9uIHx8IG51bWVyYWwuXy5zdHJpbmdUb051bWJlcjtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdW5mb3JtYXRGdW5jdGlvbihpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihpbnB1dCl8fCBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBOdW1lcmFsKGlucHV0LCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIHZlcnNpb24gbnVtYmVyXG4gICAgbnVtZXJhbC52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAgIC8vIGNvbXBhcmUgbnVtZXJhbCBvYmplY3RcbiAgICBudW1lcmFsLmlzTnVtZXJhbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTnVtZXJhbDtcbiAgICB9O1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uc1xuICAgIG51bWVyYWwuXyA9IF8gPSB7XG4gICAgICAgIC8vIGZvcm1hdHMgbnVtYmVycyBzZXBhcmF0b3JzLCBkZWNpbWFscyBwbGFjZXMsIHNpZ25zLCBhYmJyZXZpYXRpb25zXG4gICAgICAgIG51bWJlclRvRm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbG9jYWxlc1tudW1lcmFsLm9wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgbmVnUCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9wdERlYyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxlYWRpbmdDb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgYWJiciA9ICcnLFxuICAgICAgICAgICAgICAgIHRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMCxcbiAgICAgICAgICAgICAgICBiaWxsaW9uID0gMTAwMDAwMDAwMCxcbiAgICAgICAgICAgICAgICBtaWxsaW9uID0gMTAwMDAwMCxcbiAgICAgICAgICAgICAgICB0aG91c2FuZCA9IDEwMDAsXG4gICAgICAgICAgICAgICAgZGVjaW1hbCA9ICcnLFxuICAgICAgICAgICAgICAgIG5lZyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFiYnJGb3JjZSwgLy8gZm9yY2UgYWJicmV2aWF0aW9uXG4gICAgICAgICAgICAgICAgYWJzLFxuICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgaW50LFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbixcbiAgICAgICAgICAgICAgICBzaWduZWQsXG4gICAgICAgICAgICAgICAgdGhvdXNhbmRzLFxuICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIG5ldmVyIGZvcm1hdCBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgfHwgMDtcblxuICAgICAgICAgICAgYWJzID0gTWF0aC5hYnModmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgd2Ugc2hvdWxkIHVzZSBwYXJlbnRoZXNlcyBmb3IgbmVnYXRpdmUgbnVtYmVyIG9yIGlmIHdlIHNob3VsZCBwcmVmaXggd2l0aCBhIHNpZ25cbiAgICAgICAgICAgIC8vIGlmIGJvdGggYXJlIHByZXNlbnQgd2UgZGVmYXVsdCB0byBwYXJlbnRoZXNlc1xuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcoJykpIHtcbiAgICAgICAgICAgICAgICBuZWdQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvW1xcKHxcXCldL2csICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJysnKSB8fCBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnLScpKSB7XG4gICAgICAgICAgICAgICAgc2lnbmVkID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJysnKSA/IGZvcm1hdC5pbmRleE9mKCcrJykgOiB2YWx1ZSA8IDAgPyBmb3JtYXQuaW5kZXhPZignLScpIDogLTE7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1tcXCt8XFwtXS9nLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiBhYmJyZXZpYXRpb24gaXMgd2FudGVkXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ2EnKSkge1xuICAgICAgICAgICAgICAgIGFiYnJGb3JjZSA9IGZvcm1hdC5tYXRjaCgvYShrfG18Ynx0KT8vKTtcblxuICAgICAgICAgICAgICAgIGFiYnJGb3JjZSA9IGFiYnJGb3JjZSA/IGFiYnJGb3JjZVsxXSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSBhYmJyZXZpYXRpb25cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBhJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJiciA9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShuZXcgUmVnRXhwKGFiYnIgKyAnYVtrbWJ0XT8nKSwgJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFicyA+PSB0cmlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMudHJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyB0cmlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IHRyaWxsaW9uICYmIGFicyA+PSBiaWxsaW9uICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYmlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLmJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBiaWxsaW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzIDwgYmlsbGlvbiAmJiBhYnMgPj0gbWlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gbWlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IG1pbGxpb24gJiYgYWJzID49IHRob3VzYW5kICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAnaycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvdXNhbmRcbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50aG91c2FuZDtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIHRob3VzYW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG9wdGlvbmFsIGRlY2ltYWxzXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ1suXScpKSB7XG4gICAgICAgICAgICAgICAgb3B0RGVjID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgnWy5dJywgJy4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYnJlYWsgbnVtYmVyIGFuZCBmb3JtYXRcbiAgICAgICAgICAgIGludCA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgICAgIHByZWNpc2lvbiA9IGZvcm1hdC5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgdGhvdXNhbmRzID0gZm9ybWF0LmluZGV4T2YoJywnKTtcbiAgICAgICAgICAgIGxlYWRpbmdDb3VudCA9IChmb3JtYXQuc3BsaXQoJy4nKVswXS5zcGxpdCgnLCcpWzBdLm1hdGNoKC8wL2cpIHx8IFtdKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKHByZWNpc2lvbiwgJ1snKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24ucmVwbGFjZSgnXScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uLnNwbGl0KCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgKHByZWNpc2lvblswXS5sZW5ndGggKyBwcmVjaXNpb25bMV0ubGVuZ3RoKSwgcm91bmRpbmdGdW5jdGlvbiwgcHJlY2lzaW9uWzFdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9IG51bWVyYWwuXy50b0ZpeGVkKHZhbHVlLCBwcmVjaXNpb24ubGVuZ3RoLCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnQgPSBkZWNpbWFsLnNwbGl0KCcuJylbMF07XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGRlY2ltYWwsICcuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9IGxvY2FsZS5kZWxpbWl0ZXJzLmRlY2ltYWwgKyBkZWNpbWFsLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvcHREZWMgJiYgTnVtYmVyKGRlY2ltYWwuc2xpY2UoMSkpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGludCA9IG51bWVyYWwuXy50b0ZpeGVkKHZhbHVlLCAwLCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgYWJicmV2aWF0aW9uIGFnYWluIGFmdGVyIHJvdW5kaW5nXG4gICAgICAgICAgICBpZiAoYWJiciAmJiAhYWJickZvcmNlICYmIE51bWJlcihpbnQpID49IDEwMDAgJiYgYWJiciAhPT0gbG9jYWxlLmFiYnJldmlhdGlvbnMudHJpbGxpb24pIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBTdHJpbmcoTnVtYmVyKGludCkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWJicikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGxvY2FsZS5hYmJyZXZpYXRpb25zLnRob3VzYW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWJiciA9IGxvY2FsZS5hYmJyZXZpYXRpb25zLm1pbGxpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWJiciA9IGxvY2FsZS5hYmJyZXZpYXRpb25zLmJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWJiciA9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCBudW1iZXJcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoaW50LCAnLScpKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gaW50LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIG5lZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnQubGVuZ3RoIDwgbGVhZGluZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlYWRpbmdDb3VudCAtIGludC5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ID0gJzAnICsgaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRob3VzYW5kcyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gaW50LnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEnICsgbG9jYWxlLmRlbGltaXRlcnMudGhvdXNhbmRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCcuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpbnQgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ID0gaW50ICsgZGVjaW1hbCArIChhYmJyID8gYWJiciA6ICcnKTtcblxuICAgICAgICAgICAgaWYgKG5lZ1ApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAobmVnUCAmJiBuZWcgPyAnKCcgOiAnJykgKyBvdXRwdXQgKyAobmVnUCAmJiBuZWcgPyAnKScgOiAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzaWduZWQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBzaWduZWQgPT09IDAgPyAobmVnID8gJy0nIDogJysnKSArIG91dHB1dCA6IG91dHB1dCArIChuZWcgPyAnLScgOiAnKycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmVnKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICctJyArIG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHVuZm9ybWF0cyBudW1iZXJzIHNlcGFyYXRvcnMsIGRlY2ltYWxzIHBsYWNlcywgc2lnbnMsIGFiYnJldmlhdGlvbnNcbiAgICAgICAgc3RyaW5nVG9OdW1iZXI6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IGxvY2FsZXNbb3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBzdHJpbmdPcmlnaW5hbCA9IHN0cmluZyxcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbWlsbGlvbjogNixcbiAgICAgICAgICAgICAgICAgICAgYmlsbGlvbjogOSxcbiAgICAgICAgICAgICAgICAgICAgdHJpbGxpb246IDEyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb24sXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICByZWdleHA7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnplcm9Gb3JtYXQgJiYgc3RyaW5nID09PSBvcHRpb25zLnplcm9Gb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubnVsbEZvcm1hdCAmJiBzdHJpbmcgPT09IG9wdGlvbnMubnVsbEZvcm1hdCB8fCAhc3RyaW5nLnJlcGxhY2UoL1teMC05XSsvZywgJycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZS5kZWxpbWl0ZXJzLmRlY2ltYWwgIT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKGxvY2FsZS5kZWxpbWl0ZXJzLmRlY2ltYWwsICcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChhYmJyZXZpYXRpb24gaW4gYWJicmV2aWF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZWdleHAgPSBuZXcgUmVnRXhwKCdbXmEtekEtWl0nICsgbG9jYWxlLmFiYnJldmlhdGlvbnNbYWJicmV2aWF0aW9uXSArICcoPzpcXFxcKXwoXFxcXCcgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sICsgJyk/KD86XFxcXCkpPyk/JCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdPcmlnaW5hbC5tYXRjaChyZWdleHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAqPSBNYXRoLnBvdygxMCwgYWJicmV2aWF0aW9uc1thYmJyZXZpYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG5lZ2F0aXZlIG51bWJlclxuICAgICAgICAgICAgICAgIHZhbHVlICo9IChzdHJpbmcuc3BsaXQoJy0nKS5sZW5ndGggKyBNYXRoLm1pbihzdHJpbmcuc3BsaXQoJygnKS5sZW5ndGggLSAxLCBzdHJpbmcuc3BsaXQoJyknKS5sZW5ndGggLSAxKSkgJSAyID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbiBudW1iZXJzXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1teMC05XFwuXSsvZywgJycpO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgKj0gTnVtYmVyKHN0cmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNOYU46IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzdHJpbmcsIHNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5pbmRleE9mKHNlYXJjaCkgIT09IC0xO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uKHN0cmluZywgc3ViU3RyaW5nLCBzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBzdGFydCkgKyBzdWJTdHJpbmcgKyBzdHJpbmcuc2xpY2Uoc3RhcnQpO1xuICAgICAgICB9LFxuICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjayAvKiwgaW5pdGlhbFZhbHVlKi8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLnJlZHVjZSBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0ID0gT2JqZWN0KGFycmF5KSxcbiAgICAgICAgICAgICAgICBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgICAgICBrID0gMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGsgPCBsZW4gJiYgIShrIGluIHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoayA+PSBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdFtrKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChrIGluIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgdFtrXSwgaywgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIG11bHRpcGxpZXIgbmVjZXNzYXJ5IHRvIG1ha2UgeCA+PSAxLFxuICAgICAgICAgKiBlZmZlY3RpdmVseSBlbGltaW5hdGluZyBtaXNjYWxjdWxhdGlvbnMgY2F1c2VkIGJ5XG4gICAgICAgICAqIGZpbml0ZSBwcmVjaXNpb24uXG4gICAgICAgICAqL1xuICAgICAgICBtdWx0aXBsaWVyOiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0geC50b1N0cmluZygpLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyID8gMSA6IE1hdGgucG93KDEwLCBwYXJ0c1sxXS5sZW5ndGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCByZXR1cm5zIHRoZSBtYXhpbXVtXG4gICAgICAgICAqIG11bHRpcGxpZXIgdGhhdCBtdXN0IGJlIHVzZWQgdG8gbm9ybWFsaXplIGFuIG9wZXJhdGlvbiBpbnZvbHZpbmdcbiAgICAgICAgICogYWxsIG9mIHRoZW0uXG4gICAgICAgICAqL1xuICAgICAgICBjb3JyZWN0aW9uRmFjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihhY2N1bSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBtbiA9IF8ubXVsdGlwbGllcihuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gPiBtbiA/IGFjY3VtIDogbW47XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEltcGxlbWVudGF0aW9uIG9mIHRvRml4ZWQoKSB0aGF0IHRyZWF0cyBmbG9hdHMgbW9yZSBsaWtlIGRlY2ltYWxzXG4gICAgICAgICAqXG4gICAgICAgICAqIEZpeGVzIGJpbmFyeSByb3VuZGluZyBpc3N1ZXMgKGVnLiAoMC42MTUpLnRvRml4ZWQoMikgPT09ICcwLjYxJykgdGhhdCBwcmVzZW50XG4gICAgICAgICAqIHByb2JsZW1zIGZvciBhY2NvdW50aW5nLSBhbmQgZmluYW5jZS1yZWxhdGVkIHNvZnR3YXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgdG9GaXhlZDogZnVuY3Rpb24odmFsdWUsIG1heERlY2ltYWxzLCByb3VuZGluZ0Z1bmN0aW9uLCBvcHRpb25hbHMpIHtcbiAgICAgICAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIG1pbkRlY2ltYWxzID0gbWF4RGVjaW1hbHMgLSAob3B0aW9uYWxzIHx8IDApLFxuICAgICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxzUmVnRXhwLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgLy8gVXNlIHRoZSBzbWFsbGVzdCBwcmVjaXNpb24gdmFsdWUgcG9zc2libGUgdG8gYXZvaWQgZXJyb3JzIGZyb20gZmxvYXRpbmcgcG9pbnQgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIGlmIChzcGxpdFZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uID0gTWF0aC5taW4oTWF0aC5tYXgoc3BsaXRWYWx1ZVsxXS5sZW5ndGgsIG1pbkRlY2ltYWxzKSwgbWF4RGVjaW1hbHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbiA9IG1pbkRlY2ltYWxzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3dlciA9IE1hdGgucG93KDEwLCBib3VuZGVkUHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgLy8gTXVsdGlwbHkgdXAgYnkgcHJlY2lzaW9uLCByb3VuZCBhY2N1cmF0ZWx5LCB0aGVuIGRpdmlkZSBhbmQgdXNlIG5hdGl2ZSB0b0ZpeGVkKCk6XG4gICAgICAgICAgICBvdXRwdXQgPSAocm91bmRpbmdGdW5jdGlvbih2YWx1ZSArICdlKycgKyBib3VuZGVkUHJlY2lzaW9uKSAvIHBvd2VyKS50b0ZpeGVkKGJvdW5kZWRQcmVjaXNpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uYWxzID4gbWF4RGVjaW1hbHMgLSBib3VuZGVkUHJlY2lzaW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWxzUmVnRXhwID0gbmV3IFJlZ0V4cCgnXFxcXC4/MHsxLCcgKyAob3B0aW9uYWxzIC0gKG1heERlY2ltYWxzIC0gYm91bmRlZFByZWNpc2lvbikpICsgJ30kJyk7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2Uob3B0aW9uYWxzUmVnRXhwLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYXZhbGlhYmxlIG9wdGlvbnNcbiAgICBudW1lcmFsLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gYXZhbGlhYmxlIGZvcm1hdHNcbiAgICBudW1lcmFsLmZvcm1hdHMgPSBmb3JtYXRzO1xuXG4gICAgLy8gYXZhbGlhYmxlIGZvcm1hdHNcbiAgICBudW1lcmFsLmxvY2FsZXMgPSBsb2NhbGVzO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBjdXJyZW50IGxvY2FsZS4gIElmXG4gICAgLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbiAgICAvLyBsb2NhbGUga2V5LlxuICAgIG51bWVyYWwubG9jYWxlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY3VycmVudExvY2FsZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY3VycmVudExvY2FsZTtcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGxvYWRlZCBsb2NhbGUgZGF0YS4gIElmXG4gICAgLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudFxuICAgIC8vIGdsb2JhbCBsb2NhbGUgb2JqZWN0LlxuICAgIG51bWVyYWwubG9jYWxlRGF0YSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZXNbb3B0aW9ucy5jdXJyZW50TG9jYWxlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghbG9jYWxlc1trZXldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbG9jYWxlIDogJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9jYWxlc1trZXldO1xuICAgIH07XG5cbiAgICBudW1lcmFsLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBvcHRpb25zW3Byb3BlcnR5XSA9IGRlZmF1bHRzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBudW1lcmFsLnplcm9Gb3JtYXQgPSBmdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy56ZXJvRm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogbnVsbDtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5udWxsRm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLm51bGxGb3JtYXQgPSB0eXBlb2YoZm9ybWF0KSA9PT0gJ3N0cmluZycgPyBmb3JtYXQgOiBudWxsO1xuICAgIH07XG5cbiAgICBudW1lcmFsLmRlZmF1bHRGb3JtYXQgPSBmdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0Rm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogJzAuMCc7XG4gICAgfTtcblxuICAgIG51bWVyYWwucmVnaXN0ZXIgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBmb3JtYXQpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodGhpc1t0eXBlICsgJ3MnXVtuYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihuYW1lICsgJyAnICsgdHlwZSArICcgYWxyZWFkeSByZWdpc3RlcmVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1t0eXBlICsgJ3MnXVtuYW1lXSA9IGZvcm1hdDtcblxuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH07XG5cblxuICAgIG51bWVyYWwudmFsaWRhdGUgPSBmdW5jdGlvbih2YWwsIGN1bHR1cmUpIHtcbiAgICAgICAgdmFyIF9kZWNpbWFsU2VwLFxuICAgICAgICAgICAgX3Rob3VzYW5kU2VwLFxuICAgICAgICAgICAgX2N1cnJTeW1ib2wsXG4gICAgICAgICAgICBfdmFsQXJyYXksXG4gICAgICAgICAgICBfYWJick9iaixcbiAgICAgICAgICAgIF90aG91c2FuZFJlZ0V4LFxuICAgICAgICAgICAgbG9jYWxlRGF0YSxcbiAgICAgICAgICAgIHRlbXA7XG5cbiAgICAgICAgLy9jb2VyY2UgdmFsIHRvIHN0cmluZ1xuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbCArPSAnJztcblxuICAgICAgICAgICAgaWYgKGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTnVtZXJhbC5qczogVmFsdWUgaXMgbm90IHN0cmluZy4gSXQgaGFzIGJlZW4gY28tZXJjZWQgdG86ICcsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3RyaW0gd2hpdGVzcGFjZXMgZnJvbSBlaXRoZXIgc2lkZXNcbiAgICAgICAgdmFsID0gdmFsLnRyaW0oKTtcblxuICAgICAgICAvL2lmIHZhbCBpcyBqdXN0IGRpZ2l0cyByZXR1cm4gdHJ1ZVxuICAgICAgICBpZiAoISF2YWwubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdmFsIGlzIGVtcHR5IHJldHVybiBmYWxzZVxuICAgICAgICBpZiAodmFsID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGhlIGRlY2ltYWwgYW5kIHRob3VzYW5kcyBzZXBhcmF0b3IgZnJvbSBudW1lcmFsLmxvY2FsZURhdGFcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlIGN1bHR1cmUgaXMgdW5kZXJzdG9vZCBieSBudW1lcmFsLiBpZiBub3QsIGRlZmF1bHQgaXQgdG8gY3VycmVudCBsb2NhbGVcbiAgICAgICAgICAgIGxvY2FsZURhdGEgPSBudW1lcmFsLmxvY2FsZURhdGEoY3VsdHVyZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvY2FsZURhdGEgPSBudW1lcmFsLmxvY2FsZURhdGEobnVtZXJhbC5sb2NhbGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldHVwIHRoZSBkZWxpbWl0ZXJzIGFuZCBjdXJyZW5jeSBzeW1ib2wgYmFzZWQgb24gY3VsdHVyZS9sb2NhbGVcbiAgICAgICAgX2N1cnJTeW1ib2wgPSBsb2NhbGVEYXRhLmN1cnJlbmN5LnN5bWJvbDtcbiAgICAgICAgX2FiYnJPYmogPSBsb2NhbGVEYXRhLmFiYnJldmlhdGlvbnM7XG4gICAgICAgIF9kZWNpbWFsU2VwID0gbG9jYWxlRGF0YS5kZWxpbWl0ZXJzLmRlY2ltYWw7XG4gICAgICAgIGlmIChsb2NhbGVEYXRhLmRlbGltaXRlcnMudGhvdXNhbmRzID09PSAnLicpIHtcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCA9ICdcXFxcLic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAgPSBsb2NhbGVEYXRhLmRlbGltaXRlcnMudGhvdXNhbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWRhdGluZyBjdXJyZW5jeSBzeW1ib2xcbiAgICAgICAgdGVtcCA9IHZhbC5tYXRjaCgvXlteXFxkXSsvKTtcbiAgICAgICAgaWYgKHRlbXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zdWJzdHIoMSk7XG4gICAgICAgICAgICBpZiAodGVtcFswXSAhPT0gX2N1cnJTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3ZhbGlkYXRpbmcgYWJicmV2aWF0aW9uIHN5bWJvbFxuICAgICAgICB0ZW1wID0gdmFsLm1hdGNoKC9bXlxcZF0rJC8pO1xuICAgICAgICBpZiAodGVtcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGlmICh0ZW1wWzBdICE9PSBfYWJick9iai50aG91c2FuZCAmJiB0ZW1wWzBdICE9PSBfYWJick9iai5taWxsaW9uICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLmJpbGxpb24gJiYgdGVtcFswXSAhPT0gX2FiYnJPYmoudHJpbGxpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhvdXNhbmRSZWdFeCA9IG5ldyBSZWdFeHAoX3Rob3VzYW5kU2VwICsgJ3syfScpO1xuXG4gICAgICAgIGlmICghdmFsLm1hdGNoKC9bXlxcZC4sXS9nKSkge1xuICAgICAgICAgICAgX3ZhbEFycmF5ID0gdmFsLnNwbGl0KF9kZWNpbWFsU2VwKTtcbiAgICAgICAgICAgIGlmIChfdmFsQXJyYXkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF92YWxBcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoICEhIF92YWxBcnJheVswXS5tYXRjaCgvXlxcZCsuKlxcZCQvKSAmJiAhX3ZhbEFycmF5WzBdLm1hdGNoKF90aG91c2FuZFJlZ0V4KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWxBcnJheVswXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoICEhIF92YWxBcnJheVswXS5tYXRjaCgvXlxcZCskLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkgJiYgISEgX3ZhbEFycmF5WzFdLm1hdGNoKC9eXFxkKyQvKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrLipcXGQkLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkgJiYgISEgX3ZhbEFycmF5WzFdLm1hdGNoKC9eXFxkKyQvKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBOdW1lcmFsIFByb3RvdHlwZVxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIG51bWVyYWwuZm4gPSBOdW1lcmFsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWVyYWwodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24oaW5wdXRTdHJpbmcsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX3ZhbHVlLFxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGlucHV0U3RyaW5nIHx8IG9wdGlvbnMuZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICAgICBmb3JtYXRGdW5jdGlvbjtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGhhdmUgYSByb3VuZGluZ0Z1bmN0aW9uXG4gICAgICAgICAgICByb3VuZGluZ0Z1bmN0aW9uID0gcm91bmRpbmdGdW5jdGlvbiB8fCBNYXRoLnJvdW5kO1xuXG4gICAgICAgICAgICAvLyBmb3JtYXQgYmFzZWQgb24gdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCAmJiBvcHRpb25zLnplcm9Gb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvcHRpb25zLnplcm9Gb3JtYXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsICYmIG9wdGlvbnMubnVsbEZvcm1hdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG9wdGlvbnMubnVsbEZvcm1hdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChraW5kIGluIGZvcm1hdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdC5tYXRjaChmb3JtYXRzW2tpbmRdLnJlZ2V4cHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRzW2tpbmRdLmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtYXRGdW5jdGlvbiA9IGZvcm1hdEZ1bmN0aW9uIHx8IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdDtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IGZvcm1hdEZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IuY2FsbChudWxsLCB0aGlzLl92YWx1ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gKyBNYXRoLnJvdW5kKGNvcnJGYWN0b3IgKiBjdXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdGhpcy5fdmFsdWUsIHZhbHVlXSwgY2JhY2ssIDApIC8gY29yckZhY3RvcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnRyYWN0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IuY2FsbChudWxsLCB0aGlzLl92YWx1ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gLSBNYXRoLnJvdW5kKGNvcnJGYWN0b3IgKiBjdXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdmFsdWVdLCBjYmFjaywgTWF0aC5yb3VuZCh0aGlzLl92YWx1ZSAqIGNvcnJGYWN0b3IpKSAvIGNvcnJGYWN0b3I7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBtdWx0aXBseTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhY2N1bSAqIGNvcnJGYWN0b3IpICogTWF0aC5yb3VuZChjdXJyICogY29yckZhY3RvcikgLyBNYXRoLnJvdW5kKGNvcnJGYWN0b3IgKiBjb3JyRmFjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdGhpcy5fdmFsdWUsIHZhbHVlXSwgY2JhY2ssIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZGl2aWRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IoYWNjdW0sIGN1cnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFjY3VtICogY29yckZhY3RvcikgLyBNYXRoLnJvdW5kKGN1cnIgKiBjb3JyRmFjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdGhpcy5fdmFsdWUsIHZhbHVlXSwgY2JhY2spO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZGlmZmVyZW5jZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhudW1lcmFsKHRoaXMuX3ZhbHVlKS5zdWJ0cmFjdCh2YWx1ZSkudmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBEZWZhdWx0IExvY2FsZSAmJiBGb3JtYXRcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4nLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAofn4obnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnJCdcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnYnBzJywge1xuICAgICAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogLyhCUFMpLyxcbiAgICAgICAgICAgICAgICB1bmZvcm1hdDogLyhCUFMpL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBzcGFjZSA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgQlBTJykgPyAnICcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAwO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSBCUFNcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP0JQUy8sICcnKTtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMob3V0cHV0LCAnKScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5zcGxpdCgnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnNwbGljZSgtMSwgMCwgc3BhY2UgKyAnQlBTJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIHNwYWNlICsgJ0JQUyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICsobnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZykgKiAwLjAwMDEpLnRvRml4ZWQoMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVjaW1hbCA9IHtcbiAgICAgICAgICAgIGJhc2U6IDEwMDAsXG4gICAgICAgICAgICBzdWZmaXhlczogWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ11cbiAgICAgICAgfSxcbiAgICAgICAgYmluYXJ5ID0ge1xuICAgICAgICAgICAgYmFzZTogMTAyNCxcbiAgICAgICAgICAgIHN1ZmZpeGVzOiBbJ0InLCAnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXG4gICAgICAgIH07XG5cbiAgICB2YXIgYWxsU3VmZml4ZXMgPSAgZGVjaW1hbC5zdWZmaXhlcy5jb25jYXQoYmluYXJ5LnN1ZmZpeGVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY2ltYWwuc3VmZml4ZXMuaW5kZXhPZihpdGVtKSA8IDA7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIHVuZm9ybWF0UmVnZXggPSBhbGxTdWZmaXhlcy5qb2luKCd8Jyk7XG4gICAgICAgIC8vIEFsbG93IHN1cHBvcnQgZm9yIEJQUyAoaHR0cDovL3d3dy5pbnZlc3RvcGVkaWEuY29tL3Rlcm1zL2IvYmFzaXNwb2ludC5hc3ApXG4gICAgICAgIHVuZm9ybWF0UmVnZXggPSAnKCcgKyB1bmZvcm1hdFJlZ2V4LnJlcGxhY2UoJ0InLCAnQig/IVBTKScpICsgJyknO1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2J5dGVzJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oWzBcXHNdaT9iKS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogbmV3IFJlZ0V4cCh1bmZvcm1hdFJlZ2V4KVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQsXG4gICAgICAgICAgICAgICAgYnl0ZXMgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnaWInKSA/IGJpbmFyeSA6IGRlY2ltYWwsXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBiJykgfHwgbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBpYicpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgICAgIG1heDtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZVxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9pP2IvLCAnJyk7XG5cbiAgICAgICAgICAgIGZvciAocG93ZXIgPSAwOyBwb3dlciA8PSBieXRlcy5zdWZmaXhlcy5sZW5ndGg7IHBvd2VyKyspIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLnBvdyhieXRlcy5iYXNlLCBwb3dlcik7XG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5wb3coYnl0ZXMuYmFzZSwgcG93ZXIgKyAxKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VmZml4ICs9IGJ5dGVzLnN1ZmZpeGVzW3Bvd2VyXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIG1pbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICsgc3VmZml4O1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXIoc3RyaW5nKSxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBieXRlc011bHRpcGxpZXI7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAocG93ZXIgPSBkZWNpbWFsLnN1ZmZpeGVzLmxlbmd0aCAtIDE7IHBvd2VyID49IDA7IHBvd2VyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsIGRlY2ltYWwuc3VmZml4ZXNbcG93ZXJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyID0gTWF0aC5wb3coZGVjaW1hbC5iYXNlLCBwb3dlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsIGJpbmFyeS5zdWZmaXhlc1twb3dlcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlc011bHRpcGxpZXIgPSBNYXRoLnBvdyhiaW5hcnkuYmFzZSwgcG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlICo9IChieXRlc011bHRpcGxpZXIgfHwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdjdXJyZW5jeScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKFxcJCkvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IG51bWVyYWwubG9jYWxlc1tudW1lcmFsLm9wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgc3ltYm9scyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiBmb3JtYXQubWF0Y2goL14oW1xcK3xcXC18XFwofFxcc3xcXCRdKikvKVswXSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IGZvcm1hdC5tYXRjaCgvKFtcXCt8XFwtfFxcKXxcXHN8XFwkXSopJC8pWzBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIHN0cmlwIGZvcm1hdCBvZiBzcGFjZXMgYW5kICRcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/XFwkXFxzPy8sICcnKTtcblxuICAgICAgICAgICAgLy8gZm9ybWF0IHRoZSBudW1iZXJcbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBiZWZvcmUgYW5kIGFmdGVyIGJhc2VkIG9uIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gMCkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYmVmb3JlID0gc3ltYm9scy5iZWZvcmUucmVwbGFjZSgvW1xcLVxcKF0vLCAnJyk7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5hZnRlciA9IHN5bWJvbHMuYWZ0ZXIucmVwbGFjZSgvW1xcLVxcKV0vLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCAmJiAoIW51bWVyYWwuXy5pbmNsdWRlcyhzeW1ib2xzLmJlZm9yZSwgJy0nKSAmJiAhbnVtZXJhbC5fLmluY2x1ZGVzKHN5bWJvbHMuYmVmb3JlLCAnKCcpKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYmVmb3JlID0gJy0nICsgc3ltYm9scy5iZWZvcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGJlZm9yZSBzeW1ib2xcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzeW1ib2xzLmJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbHMuYmVmb3JlW2ldO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgJyAnLCBpICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggYWZ0ZXIgc3ltYm9sXG4gICAgICAgICAgICBmb3IgKGkgPSBzeW1ib2xzLmFmdGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9scy5hZnRlcltpXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gaSA9PT0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxID8gb3V0cHV0ICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCA6IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLCAtKHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gKDEgKyBpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gaSA9PT0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxID8gb3V0cHV0ICsgJyAnIDogbnVtZXJhbC5fLmluc2VydChvdXRwdXQsICcgJywgLShzeW1ib2xzLmFmdGVyLmxlbmd0aCAtICgxICsgaSkgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2V4cG9uZW50aWFsJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oZVxcK3xlLSkvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IC8oZVxcK3xlLSkvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIG91dHB1dCxcbiAgICAgICAgICAgICAgICBleHBvbmVudGlhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIW51bWVyYWwuXy5pc05hTih2YWx1ZSkgPyB2YWx1ZS50b0V4cG9uZW50aWFsKCkgOiAnMGUrMCcsXG4gICAgICAgICAgICAgICAgcGFydHMgPSBleHBvbmVudGlhbC5zcGxpdCgnZScpO1xuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZVtcXCt8XFwtXXsxfTAvLCAnJyk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdChOdW1iZXIocGFydHNbMF0pLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICsgJ2UnICsgcGFydHNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsICdlKycpID8gc3RyaW5nLnNwbGl0KCdlKycpIDogc3RyaW5nLnNwbGl0KCdlLScpLFxuICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHBhcnRzWzBdKSxcbiAgICAgICAgICAgICAgICBwb3dlciA9IE51bWJlcihwYXJ0c1sxXSk7XG5cbiAgICAgICAgICAgIHBvd2VyID0gbnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgJ2UtJykgPyBwb3dlciAqPSAtMSA6IHBvd2VyO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IG51bWVyYWwuXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKSxcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gKGFjY3VtICogY29yckZhY3RvcikgKiAoY3VyciAqIGNvcnJGYWN0b3IpIC8gKGNvcnJGYWN0b3IgKiBjb3JyRmFjdG9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVtZXJhbC5fLnJlZHVjZShbdmFsdWUsIE1hdGgucG93KDEwLCBwb3dlcildLCBjYmFjaywgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnb3JkaW5hbCcsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKG8pL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBvJykgPyAnICcgOiAnJztcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZVxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9vLywgJycpO1xuXG4gICAgICAgICAgICBvcmRpbmFsICs9IGxvY2FsZS5vcmRpbmFsKHZhbHVlKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICsgb3JkaW5hbDtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdwZXJjZW50YWdlJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oJSkvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IC8oJSkvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIHNwYWNlID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyAlJykgPyAnICcgOiAnJyxcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIGlmIChudW1lcmFsLm9wdGlvbnMuc2NhbGVQZXJjZW50QnkxMDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlICVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/XFwlLywgJycpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMob3V0cHV0LCAnKScpKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnNwbGl0KCcnKTtcblxuICAgICAgICAgICAgICAgIG91dHB1dC5zcGxpY2UoLTEsIDAsIHNwYWNlICsgJyUnKTtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgc3BhY2UgKyAnJSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXIgPSBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXIoc3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChudW1lcmFsLm9wdGlvbnMuc2NhbGVQZXJjZW50QnkxMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICogMC4wMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAndGltZScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKDopLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKDopL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCAvIDYwKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigodmFsdWUgLSAoaG91cnMgKiA2MCAqIDYwKSkgLyA2MCksXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGgucm91bmQodmFsdWUgLSAoaG91cnMgKiA2MCAqIDYwKSAtIChtaW51dGVzICogNjApKTtcblxuICAgICAgICAgICAgcmV0dXJuIGhvdXJzICsgJzonICsgKG1pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzKSArICc6JyArIChzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciB0aW1lQXJyYXkgPSBzdHJpbmcuc3BsaXQoJzonKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gMDtcblxuICAgICAgICAgICAgLy8gdHVybiBob3VycyBhbmQgbWludXRlcyBpbnRvIHNlY29uZHMgYW5kIGFkZCB0aGVtIGFsbCB1cFxuICAgICAgICAgICAgaWYgKHRpbWVBcnJheS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAvLyBob3Vyc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgKE51bWJlcih0aW1lQXJyYXlbMF0pICogNjAgKiA2MCk7XG4gICAgICAgICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgKE51bWJlcih0aW1lQXJyYXlbMV0pICogNjApO1xuICAgICAgICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIE51bWJlcih0aW1lQXJyYXlbMl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aW1lQXJyYXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgKE51bWJlcih0aW1lQXJyYXlbMF0pICogNjApO1xuICAgICAgICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIE51bWJlcih0aW1lQXJyYXlbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzZWNvbmRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxucmV0dXJuIG51bWVyYWw7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbnVtZXJhbC9udW1lcmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISBAcHJlc2VydmVcbiAqIG51bWVyYWwuanNcbiAqIGxvY2FsZXMgOiAyLjAuNlxuICogbGljZW5zZSA6IE1JVFxuICogaHR0cDovL2FkYW13ZHJhcGVyLmdpdGh1Yi5jb20vTnVtZXJhbC1qcy9cbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnbnVtZXJhbCddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnLi9udW1lcmFsJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoZ2xvYmFsLm51bWVyYWwpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKG51bWVyYWwpIHtcbiAgICBcbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2JnJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7IC8vIEkgZm91bmQgdGhlc2UgaGVyZSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzI4L3ZlcmlmeS9udW1iZXJzL2JnLmh0bWxcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YXQuNC7JyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0YLRgNC70L0nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIC8vIGdvb2dsZSB0cmFuc2xhdGUgc3VnZ2VzdHM6XG4gICAgICAgICAgICAvLyAxc3Q9MS3QstC4OyAybmQ9Mi3RgNC4OyA3dGg9Ny3QvNC4O1xuICAgICAgICAgICAgLy8gOHRoPTgt0LzQuCBhbmQgbWFueSBvdGhlcnMgZW5kIHdpdGggLdGC0LhcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIDNyZD0zLdGC0LhcbiAgICAgICAgICAgIC8vIEhvd2V2ZXIgc2luY2UgSSd2ZSBzZWVuIHN1Z2dlc3Rpb25zIHRoYXQgaW5cbiAgICAgICAgICAgIC8vIEJ1bGdhcmlhbiB0aGUgb3JkaW5hbCBjYW4gYmUgdGFrZW4gaW5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBmb3JtcyAobWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKVxuICAgICAgICAgICAgLy8gSSd2ZSBvcHRlZCB0byB3aW1wIG91dCBvbiBjb21taXRpbmcgdGhhdCB0byBjb2RlXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfQu9CyJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnY2hzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+WNgycsXG4gICAgICAgICAgICBtaWxsaW9uOiAn55m+5LiHJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfljYHkur8nLFxuICAgICAgICAgICAgdHJpbGxpb246ICflhYYnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfCpSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdjcycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0aXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWwuJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ0vEjSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdkYS1kaycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaW8nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21pYScsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ2InXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdES0snXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGUtY2gnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdDSEYnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4tYXUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuLWdiJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fiAobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnwqMnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4temEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdSJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VzLWVzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21tJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAoYiA9PT0gMSB8fCBiID09PSAzKSA/ICdlcicgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICdkbycgOlxuICAgICAgICAgICAgICAgICAgICAoYiA9PT0gNyB8fCBiID09PSAwKSA/ICdtbycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDgpID8gJ3ZvJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDkpID8gJ25vJyA6ICd0byc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXMnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbW0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuIChiID09PSAxIHx8IGIgPT09IDMpID8gJ2VyJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ2RvJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDcgfHwgYiA9PT0gMCkgPyAnbW8nIDpcblx0XHQoYiA9PT0gOCkgPyAndm8nIDpcblx0XHQoYiA9PT0gOSkgPyAnbm8nIDogJ3RvJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnIHR1aCcsXG4gICAgICAgICAgICBtaWxsaW9uOiAnIG1sbicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnIG1sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyB0cmwnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZmknLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnRycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnItY2EnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnRycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnItY2gnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJ1xcJycsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgPT09IDEgPyAnZXInIDogJ2UnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnQ0hGJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2ZyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/ICdlcicgOiAnZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaHUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnRScsICAvLyBlemVyXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsICAgLy8gbWlsbGnDs1xuICAgICAgICAgICAgYmlsbGlvbjogJ01yZCcsIC8vIG1pbGxpw6FyZFxuICAgICAgICAgICAgdHJpbGxpb246ICdUJyAgIC8vIHRyaWxsacOzXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICcgRnQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaXQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnbWlsYScsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlsJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnamEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn5Y2DJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfnmb7kuIcnLFxuICAgICAgICAgICAgYmlsbGlvbjogJ+WNgeWEhCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ+WFhidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ8KlJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2x2Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyB0xatrc3QuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICcgbWlsai4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJyBtbGpyZC4nLFxuICAgICAgICAgICAgdHJpbGxpb246ICcgdHJpbGouJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ25sLWJlJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWwgIDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kIDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbiAgOiAnIG1sbicsXG4gICAgICAgICAgICBiaWxsaW9uICA6ICcgbWxkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uIDogJyBibG4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gbnVtYmVyICUgMTAwO1xuXG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAhPT0gMCAmJiByZW1haW5kZXIgPD0gMSB8fCByZW1haW5kZXIgPT09IDggfHwgcmVtYWluZGVyID49IDIwKSA/ICdzdGUnIDogJ2RlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCAnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbmwtbmwnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbCAgOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQgOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uICA6ICdtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbiAgOiAnbXJkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uIDogJ2JsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSBudW1iZXIgJSAxMDA7XG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAhPT0gMCAmJiByZW1haW5kZXIgPD0gMSB8fCByZW1haW5kZXIgPT09IDggfHwgcmVtYWluZGVyID49IDIwKSA/ICdzdGUnIDogJ2RlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCAnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbm8nLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdrcidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwbCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0eXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ2JsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1BMTidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwdC1icicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdtaWwnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbGjDtWVzJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdSJCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwdC1wdCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnwronO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3J1LXVhJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ9GC0YvRgS4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ9C80LvQvScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIG5vdCBpZGVhbCwgYnV0IHNpbmNlIGluIFJ1c3NpYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1xcdTIwQjQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncnUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YLRi9GBLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAn0LzQu9C9LicsXG4gICAgICAgICAgICBiaWxsaW9uOiAn0LzQu9GA0LQuJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0YLRgNC70L0uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBSdXNzaWFuIGl0IGNhbiB0YWtlbiBvblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGZvcm1zIChtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFsbCB3ZSBjYW4gZG9cbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfRgNGD0LEuJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3NrJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ3Rpcy4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbC4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3NsJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbycsXG4gICAgICAgICAgICBiaWxsaW9uOiAnbXJkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndHJpbGlqb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3RoJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+C4nuC4seC4mScsXG4gICAgICAgICAgICBtaWxsaW9uOiAn4Lil4LmJ4Liy4LiZJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfguJ7guLHguJnguKXguYnguLLguJknLFxuICAgICAgICAgICAgdHJpbGxpb246ICfguKXguYnguLLguJnguKXguYnguLLguJknXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfguL8nXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3VmZml4ZXMgPSB7XG4gICAgICAgICAgICAxOiAnXFwnaW5jaScsXG4gICAgICAgICAgICA1OiAnXFwnaW5jaScsXG4gICAgICAgICAgICA4OiAnXFwnaW5jaScsXG4gICAgICAgICAgICA3MDogJ1xcJ2luY2knLFxuICAgICAgICAgICAgODA6ICdcXCdpbmNpJyxcblxuICAgICAgICAgICAgMjogJ1xcJ25jaScsXG4gICAgICAgICAgICA3OiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDIwOiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDUwOiAnXFwnbmNpJyxcblxuICAgICAgICAgICAgMzogJ1xcJ8O8bmPDvCcsXG4gICAgICAgICAgICA0OiAnXFwnw7xuY8O8JyxcbiAgICAgICAgICAgIDEwMDogJ1xcJ8O8bmPDvCcsXG5cbiAgICAgICAgICAgIDY6ICdcXCduY8SxJyxcblxuICAgICAgICAgICAgOTogJ1xcJ3VuY3UnLFxuICAgICAgICAgICAgMTA6ICdcXCd1bmN1JyxcbiAgICAgICAgICAgIDMwOiAnXFwndW5jdScsXG5cbiAgICAgICAgICAgIDYwOiAnXFwnxLFuY8SxJyxcbiAgICAgICAgICAgIDkwOiAnXFwnxLFuY8SxJ1xuICAgICAgICB9O1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3RyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2JpbicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlseW9uJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdtaWx5YXInLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0cmlseW9uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7ICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgICAgICAgICAgICByZXR1cm4gJ1xcJ8SxbmPEsSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgYiA9IG51bWJlciAlIDEwMCAtIGEsXG4gICAgICAgICAgICAgICAgYyA9IG51bWJlciA+PSAxMDAgPyAxMDAgOiBudWxsO1xuXG4gICAgICAgICAgcmV0dXJuIHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCQSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICd1ay11YScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfRgtC40YEuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0LHQu9C9J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBVa3JhaW5pYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCNCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3ZpJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyBuZ2jDrG4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJyB0cmnhu4d1JyxcbiAgICAgICAgICAgIGJpbGxpb246ICcgdOG7tycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyBuZ2jDrG4gdOG7tydcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCqydcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbnVtZXJhbC9sb2NhbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgY29uc3QgcmVjdCA9IGJ1dHRvblJlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIGlmKHdpbmRvd1JlY3QuY29udGFpbnMocmVjdCkpe1xuICAgICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbmV3Q2FsY1JlY3Qpe1xuICAgICAgICBuZXdDYWxjUmVjdCA9IHdpbmRvd1JlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBSZWN0LkNFTlRFUilcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHg6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVgsXG4gICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbnB1dE51bWJlcihudW1iZXIpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5ICsgbnVtYmVyLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2FsYyhsZWZ0LCBvcGVyYXRvciwgcmlnaHQpe1xuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgKyByaWdodDtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgLSByaWdodDtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0ludmFsaWQgb3BlcmF0b3IgJyArIG9wZXJhdG9yICsgJyBzcGVjaWZpZWQuJztcbiAgICB9XG4gIH1cblxuICBleGVjdXRlKGNhbGxiYWNrID0gKCkgPT4ge30pe1xuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5O1xuICAgIGxldCBhbW91bnQgPSB0aGlzLnN0YXRlLmFtb3VudDtcblxuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgZGlzcGxheSA9IHRoaXMuY2FsYyhwYXJzZUZsb2F0KGFtb3VudCwgMTApLCB0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlLCBwYXJzZUZsb2F0KGRpc3BsYXksIDEwKSk7XG4gICAgfVxuXG4gICAgYW1vdW50ID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCBjYWxsYmFjaylcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0TnVtYmVyKCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIGFtb3VudDogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgICBpZih2YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhdmFsdWUgPyAwIDogdmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvclwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy5zdGF0ZS54fXB4LCAke3RoaXMuc3RhdGUueX1weClgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1oZWFkZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCIgZGlzcGxheT1cIsOXXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrQ2xvc2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItZGlzcGxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3IuZGlzcGxheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItZGlzcGxheS1udW1iZXJcIj5cbiAgICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuZGlzcGxheSkuZm9ybWF0KHRoaXMuc3RhdGUuZm9ybWF0KX17dGhpcy5zdGF0ZS51bml0LmRpc3BsYXl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zLm1hcCgocm93LCByb3dLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0tleX0gY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fSBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9IHN0eWxlPXtidG4uc3R5bGV9IHNpemU9e2J0bi5zaXplfSBkaXNwbGF5PXtidG4uZGlzcGxheX0gb25DbGljaz17ZGlzcGxheSA9PiBidG4uYWN0aW9uKHRoaXMsIGJ0bil9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuZGlzcGxheSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZUNsYXNzKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2l6ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS53aWR0aCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS53aWR0aCArICd3JylcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNpemUuaGVpZ2h0KXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLmhlaWdodCArICdoJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMuZ2V0U2l6ZUNsYXNzKCksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzcy1uYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5DRU5URVI6XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUmVjdCA9IHRoaXMuZ2V0Q2VudGVyUmVjdChyZWN0LndpZHRoLCByZWN0LmhlaWdodClcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LnRvcCAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbGxlZ2FsIHBvc2l0aW9uS2V5IGAnICsgcG9zaXRpb24gKyAnYCBpcyBzcGVjaWZpZWQnO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJDRU5URVJcIlxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEtFWUNPREVTID0ge1xuICBFU0NBUEU6IDI3XG59O1xuXG52YXIgUG9ydGFsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcnRhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcnRhbCkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgYWN0aXZlOiBmYWxzZSB9O1xuICAgIF90aGlzLmhhbmRsZVdyYXBwZXJDbGljayA9IF90aGlzLmhhbmRsZVdyYXBwZXJDbGljay5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5jbG9zZVBvcnRhbCA9IF90aGlzLmNsb3NlUG9ydGFsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrID0gX3RoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2suYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlS2V5ZG93biA9IF90aGlzLmhhbmRsZUtleWRvd24uYmluZChfdGhpcyk7XG4gICAgX3RoaXMucG9ydGFsID0gbnVsbDtcbiAgICBfdGhpcy5ub2RlID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9ydGFsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uRXNjKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW5lZCkge1xuICAgICAgICB0aGlzLm9wZW5Qb3J0YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgLy8gcG9ydGFsJ3MgJ2lzIG9wZW4nIHN0YXRlIGlzIGhhbmRsZWQgdGhyb3VnaCB0aGUgcHJvcCBpc09wZW5lZFxuICAgICAgaWYgKHR5cGVvZiBuZXdQcm9wcy5pc09wZW5lZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5ld1Byb3BzLmlzT3BlbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlblBvcnRhbChuZXdQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbmV3UHJvcHMuaXNPcGVuZWQgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9ydGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gcG9ydGFsIGhhbmRsZXMgaXRzIG93biAnaXMgb3Blbicgc3RhdGVcbiAgICAgIGlmICh0eXBlb2YgbmV3UHJvcHMuaXNPcGVuZWQgPT09ICd1bmRlZmluZWQnICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbkVzYykge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZVBvcnRhbCh0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVXcmFwcGVyQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVXcmFwcGVyQ2xpY2soZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5Qb3J0YWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvcGVuUG9ydGFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlblBvcnRhbCgpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICB0aGlzLnJlbmRlclBvcnRhbChwcm9wcyk7XG4gICAgICB0aGlzLnByb3BzLm9uT3Blbih0aGlzLm5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlUG9ydGFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VQb3J0YWwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGlzVW5tb3VudGVkID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHZhciByZXNldFBvcnRhbFN0YXRlID0gZnVuY3Rpb24gcmVzZXRQb3J0YWxTdGF0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5ub2RlKSB7XG4gICAgICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUoX3RoaXMyLm5vZGUpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoX3RoaXMyLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzMi5wb3J0YWwgPSBudWxsO1xuICAgICAgICBfdGhpczIubm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChpc1VubW91bnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5iZWZvcmVDbG9zZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMuYmVmb3JlQ2xvc2UodGhpcy5ub2RlLCByZXNldFBvcnRhbFN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNldFBvcnRhbFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVPdXRzaWRlTW91c2VDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKGUpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcm9vdCA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMucG9ydGFsKTtcbiAgICAgIGlmIChyb290LmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLmJ1dHRvbiAmJiBlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNsb3NlUG9ydGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlS2V5ZG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERVMuRVNDQVBFICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3J0YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJQb3J0YWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQb3J0YWwocHJvcHMpIHtcbiAgICAgIGlmICghdGhpcy5ub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamltZmIvZDk5ZTA2NzhlOWRhNzE1Y2NmNjQ1NDk2MWVmMDRkMWJcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuY2hpbGRyZW4udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQocHJvcHMuY2hpbGRyZW4sIHsgY2xvc2VQb3J0YWw6IHRoaXMuY2xvc2VQb3J0YWwgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG9ydGFsID0gX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIGNoaWxkcmVuLCB0aGlzLm5vZGUsIHRoaXMucHJvcHMub25VcGRhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wZW5CeUNsaWNrT24pIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5vcGVuQnlDbGlja09uLCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlV3JhcHBlckNsaWNrIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcnRhbDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvcnRhbDtcblxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIG9wZW5CeUNsaWNrT246IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZWxlbWVudCxcbiAgY2xvc2VPbkVzYzogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGlzT3BlbmVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIG9uT3BlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuICBvbkNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIGJlZm9yZUNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVXBkYXRlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmNcbn07XG5cblBvcnRhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uT3BlbjogZnVuY3Rpb24gb25PcGVuKCkge30sXG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7fSxcbiAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge31cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1wb3J0YWwvYnVpbGQvcG9ydGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzEnKVxuICB9LFxuICB0d286IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzQnKVxuICB9LFxuICBmaXZlOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzcnKVxuICB9LFxuICBlaWdodDogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCcwJylcbiAgfSxcbiAgZG91YmxlWmVybzogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKycsIGJ0blByb3BzKVxuICB9LFxuICBtaW51czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLycsIGJ0blByb3BzKVxuICB9LFxuICBlbnRlcjogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5leGVjdXRlKClcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5jbGVhcigpXG4gIH0sXG4gIGJhY2tzcGFjZTogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9