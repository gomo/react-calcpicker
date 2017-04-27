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
	    initialAmount: 0,
	    currencyFormat: '$0,0[.]00',
	    className: 'btn btn-default',
	    positions: [_index.Rect.RIGHT_BOTTOM, _index.Rect.RIGHT_TOP, _index.Rect.LEFT_BOTTOM, _index.Rect.LEFT_TOP]
	  }), document.getElementById('wrapper'));
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rect = exports.App = undefined;
	
	var _App = __webpack_require__(2);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Rect = __webpack_require__(10);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.App = _App2.default;
	exports.Rect = _Rect2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _numeral = __webpack_require__(4);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	__webpack_require__(5);
	
	var _Calculator = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Calculator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	var _reactPortal = __webpack_require__(11);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _numeral2.default.locale(props.locale);
	    _this.state = {
	      openCalculator: false,
	      amount: props.initialAmount
	    };
	
	    document.onmousemove = function (e) {
	      _this.setState({
	        x: e.clientX + (window.pageXOffset || document.documentElement.scrollLeft),
	        y: e.clientY + (window.pageYOffset || document.documentElement.scrollTop)
	      });
	    };
	    return _this;
	  }
	
	  App.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.locale != nextProps.locale) {
	      _numeral2.default.locale(nextProps.locale);
	    }
	  };
	
	  App.prototype.toggleCalculator = function toggleCalculator() {
	    this.setState({ openCalculator: !this.state.openCalculator });
	  };
	
	  App.prototype.onClickAmount = function onClickAmount(e) {
	    e.preventDefault();
	    this.toggleCalculator();
	    return false;
	  };
	
	  App.prototype.onCloseCalculator = function onCloseCalculator() {
	    //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
	    if (this.state.openCalculator == true) {
	      this.setState({ openCalculator: false });
	    }
	  };
	
	  App.prototype.render = function render() {
	    var _this2 = this;
	
	    return React.createElement(
	      'div',
	      { className: 'react-currency-calculator' },
	      React.createElement(
	        'div',
	        { style: { position: 'fixed', top: 0, left: 0 } },
	        'x: ',
	        this.state.x,
	        ' y: ',
	        this.state.y
	      ),
	      React.createElement(
	        'button',
	        { ref: 'button', className: this.props.className, onClick: function onClick(e) {
	            return _this2.onClickAmount(e);
	          } },
	        (0, _numeral2.default)(this.state.amount).format(this.props.currencyFormat)
	      ),
	      React.createElement(
	        _reactPortal2.default,
	        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this2.onCloseCalculator();
	          } },
	        React.createElement(_Calculator2.default, {
	          initialAmount: this.state.amount,
	          onClickClose: function onClickClose() {
	            return _this2.toggleCalculator();
	          },
	          button: this.refs.button,
	          positions: this.props.positions
	        })
	      )
	    );
	  };
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
	 * numeral.js
	 * locales : 2.0.6
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
	
	(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
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
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM3Y2ZlYWIyNTA0OGNiMGU2MWUiLCJ3ZWJwYWNrOi8vLy4vZG9jcy1zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL34vbnVtZXJhbC9udW1lcmFsLmpzIiwid2VicGFjazovLy8uL34vbnVtZXJhbC9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1wb3J0YWwvYnVpbGQvcG9ydGFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwidGVtcGxhdGUiLCJSZWFjdERPTSIsInJlbmRlciIsIlJJR0hUX0JPVFRPTSIsIlJJR0hUX1RPUCIsIkxFRlRfQk9UVE9NIiwiTEVGVF9UT1AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwiUmVjdCIsInByb3BzIiwibG9jYWxlIiwic3RhdGUiLCJvcGVuQ2FsY3VsYXRvciIsImFtb3VudCIsImluaXRpYWxBbW91bnQiLCJvbm1vdXNlbW92ZSIsImUiLCJzZXRTdGF0ZSIsIngiLCJjbGllbnRYIiwicGFnZVhPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0IiwieSIsImNsaWVudFkiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ0b2dnbGVDYWxjdWxhdG9yIiwib25DbGlja0Ftb3VudCIsInByZXZlbnREZWZhdWx0Iiwib25DbG9zZUNhbGN1bGF0b3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJjbGFzc05hbWUiLCJmb3JtYXQiLCJjdXJyZW5jeUZvcm1hdCIsInJlZnMiLCJidXR0b24iLCJwb3NpdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiZ2V0Q2VudGVyUmVjdCIsImNlbnRlciIsImNsb25lIiwidHJhbnNmb3JtIiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsImNvbnRhaW5zIiwicmVjdCIsInJlc3VsdCIsInJpZ2h0IiwiYm90dG9tIiwiZHVtcCIsIm9yaWdpbkJvdHRvbSIsIm9yaWdpblJpZ2h0IiwiZ2V0UmVsYXRpdmVSZWN0IiwiQ0VOVEVSIiwiZXhwZWN0ZWRSZWN0IiwiY3JlYXRlV2l0aEVsZW1lbnQiLCJlbGVtIiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImRvY0VsIiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNyZWF0ZVdpdGhXaW5kb3ciLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBR0FBLFFBQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixPQUFJQyxXQUFXQyxTQUFTQyxNQUFULENBQ2I7QUFDRSxhQUFPLElBRFQ7QUFFRSxvQkFBZSxDQUZqQjtBQUdFLHFCQUFnQixXQUhsQjtBQUlFLGdCQUFVLGlCQUpaO0FBS0UsZ0JBQVcsQ0FBQyxZQUFLQyxZQUFOLEVBQW9CLFlBQUtDLFNBQXpCLEVBQW9DLFlBQUtDLFdBQXpDLEVBQXNELFlBQUtDLFFBQTNE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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFEQUFvRCx5REFBeUQ7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBcUQsRUFBRTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7OztBQUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBeUQsWUFBWTtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLDJCQUEyQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBOEMsRUFBRTs7QUFFaEQ7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOztBQUVEO0FBQ0EsRUFBQzs7Ozs7OztBQ3AvQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQThCO0FBQzlCLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7Ozs7Ozs7QUN6TkEsMkIiLCJmaWxlIjoiLi4vZG9jcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRjN2NmZWFiMjUwNDhjYjBlNjFlIiwiaW1wb3J0IHtBcHAsIFJlY3R9IGZyb20gJy4uL2luZGV4JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICB2YXIgdGVtcGxhdGUgPSBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcFxuICAgICAgbG9jYWxlPSdqYSdcbiAgICAgIGluaXRpYWxBbW91bnQ9ezB9XG4gICAgICBjdXJyZW5jeUZvcm1hdD17JyQwLDBbLl0wMCd9XG4gICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxuICAgICAgcG9zaXRpb25zPXtbUmVjdC5SSUdIVF9CT1RUT00sIFJlY3QuUklHSFRfVE9QLCBSZWN0LkxFRlRfQk9UVE9NLCBSZWN0LkxFRlRfVE9QXX1cbiAgICAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpXG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzLXNyYy9hcHAuanMiLCJpbXBvcnQgQXBwIGZyb20gJy4vc3JjL2pzL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBSZWN0IGZyb20gJy4vc3JjL2pzL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IHtBcHAsIFJlY3R9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbnVtZXJhbC5sb2NhbGUocHJvcHMubG9jYWxlKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuQ2FsY3VsYXRvcjogZmFsc2UsXG4gICAgICBhbW91bnQ6IHByb3BzLmluaXRpYWxBbW91bnRcbiAgICB9XG5cbiAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgeDogZS5jbGllbnRYICsgKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCksXG4gICAgICAgIHk6IGUuY2xpZW50WSArICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBuZXh0UHJvcHMubG9jYWxlKXtcbiAgICAgIG51bWVyYWwubG9jYWxlKG5leHRQcm9wcy5sb2NhbGUpXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ2FsY3VsYXRvcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiAhdGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcn0pO1xuICB9XG5cbiAgb25DbGlja0Ftb3VudChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy50b2dnbGVDYWxjdWxhdG9yKClcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlQ2FsY3VsYXRvcigpe1xuICAgIC8vU2V0IHRoZSBvcGVuQ2FsY3VsYXRvciB0byBmYWxzZSB3aGVuIGNsaWNraW5nIHRoZSBvdmVybGF5IG9yIGNsb3Npbmcgd2l0aCB0aGUgRVNDIGtleS5cbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09IHRydWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvclwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgbGVmdDogMH19Png6IHt0aGlzLnN0YXRlLnh9IHk6IHt0aGlzLnN0YXRlLnl9PC9kaXY+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnByb3BzLmN1cnJlbmN5Rm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrIGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VDYWxjdWxhdG9yKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICBpbml0aWFsQW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy50b2dnbGVDYWxjdWxhdG9yKCl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQXBwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohIEBwcmVzZXJ2ZVxuICogbnVtZXJhbC5qc1xuICogdmVyc2lvbiA6IDIuMC42XG4gKiBhdXRob3IgOiBBZGFtIERyYXBlclxuICogbGljZW5zZSA6IE1JVFxuICogaHR0cDovL2FkYW13ZHJhcGVyLmdpdGh1Yi5jb20vTnVtZXJhbC1qcy9cbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsLm51bWVyYWwgPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBWYXJpYWJsZXNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICB2YXIgbnVtZXJhbCxcbiAgICAgICAgXyxcbiAgICAgICAgVkVSU0lPTiA9ICcyLjAuNicsXG4gICAgICAgIGZvcm1hdHMgPSB7fSxcbiAgICAgICAgbG9jYWxlcyA9IHt9LFxuICAgICAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6ICdlbicsXG4gICAgICAgICAgICB6ZXJvRm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgbnVsbEZvcm1hdDogbnVsbCxcbiAgICAgICAgICAgIGRlZmF1bHRGb3JtYXQ6ICcwLDAnLFxuICAgICAgICAgICAgc2NhbGVQZXJjZW50QnkxMDA6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IGRlZmF1bHRzLmN1cnJlbnRMb2NhbGUsXG4gICAgICAgICAgICB6ZXJvRm9ybWF0OiBkZWZhdWx0cy56ZXJvRm9ybWF0LFxuICAgICAgICAgICAgbnVsbEZvcm1hdDogZGVmYXVsdHMubnVsbEZvcm1hdCxcbiAgICAgICAgICAgIGRlZmF1bHRGb3JtYXQ6IGRlZmF1bHRzLmRlZmF1bHRGb3JtYXQsXG4gICAgICAgICAgICBzY2FsZVBlcmNlbnRCeTEwMDogZGVmYXVsdHMuc2NhbGVQZXJjZW50QnkxMDBcbiAgICAgICAgfTtcblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBDb25zdHJ1Y3RvcnNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvLyBOdW1lcmFsIHByb3RvdHlwZSBvYmplY3RcbiAgICBmdW5jdGlvbiBOdW1lcmFsKGlucHV0LCBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bWJlcjtcbiAgICB9XG5cbiAgICBudW1lcmFsID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHVuZm9ybWF0RnVuY3Rpb24sXG4gICAgICAgICAgICByZWdleHA7XG5cbiAgICAgICAgaWYgKG51bWVyYWwuaXNOdW1lcmFsKGlucHV0KSkge1xuICAgICAgICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAwIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gbnVsbCB8fCBfLmlzTmFOKGlucHV0KSkge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnplcm9Gb3JtYXQgJiYgaW5wdXQgPT09IG9wdGlvbnMuemVyb0Zvcm1hdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5udWxsRm9ybWF0ICYmIGlucHV0ID09PSBvcHRpb25zLm51bGxGb3JtYXQgfHwgIWlucHV0LnJlcGxhY2UoL1teMC05XSsvZywgJycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChraW5kIGluIGZvcm1hdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhwID0gdHlwZW9mIGZvcm1hdHNba2luZF0ucmVnZXhwcy51bmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/IGZvcm1hdHNba2luZF0ucmVnZXhwcy51bmZvcm1hdCgpIDogZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdleHAgJiYgaW5wdXQubWF0Y2gocmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbiA9IGZvcm1hdHNba2luZF0udW5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbiA9IHVuZm9ybWF0RnVuY3Rpb24gfHwgbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB1bmZvcm1hdEZ1bmN0aW9uKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKGlucHV0KXx8IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IE51bWVyYWwoaW5wdXQsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLy8gdmVyc2lvbiBudW1iZXJcbiAgICBudW1lcmFsLnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gICAgLy8gY29tcGFyZSBudW1lcmFsIG9iamVjdFxuICAgIG51bWVyYWwuaXNOdW1lcmFsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBOdW1lcmFsO1xuICAgIH07XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25zXG4gICAgbnVtZXJhbC5fID0gXyA9IHtcbiAgICAgICAgLy8gZm9ybWF0cyBudW1iZXJzIHNlcGFyYXRvcnMsIGRlY2ltYWxzIHBsYWNlcywgc2lnbnMsIGFiYnJldmlhdGlvbnNcbiAgICAgICAgbnVtYmVyVG9Gb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBuZWdQID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgb3B0RGVjID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbGVhZGluZ0NvdW50ID0gMCxcbiAgICAgICAgICAgICAgICBhYmJyID0gJycsXG4gICAgICAgICAgICAgICAgdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwLFxuICAgICAgICAgICAgICAgIGJpbGxpb24gPSAxMDAwMDAwMDAwLFxuICAgICAgICAgICAgICAgIG1pbGxpb24gPSAxMDAwMDAwLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kID0gMTAwMCxcbiAgICAgICAgICAgICAgICBkZWNpbWFsID0gJycsXG4gICAgICAgICAgICAgICAgbmVnID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgYWJickZvcmNlLCAvLyBmb3JjZSBhYmJyZXZpYXRpb25cbiAgICAgICAgICAgICAgICBhYnMsXG4gICAgICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgICAgIG1heCxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBpbnQsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgIHNpZ25lZCxcbiAgICAgICAgICAgICAgICB0aG91c2FuZHMsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgbmV2ZXIgZm9ybWF0IGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCAwO1xuXG4gICAgICAgICAgICBhYnMgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiB3ZSBzaG91bGQgdXNlIHBhcmVudGhlc2VzIGZvciBuZWdhdGl2ZSBudW1iZXIgb3IgaWYgd2Ugc2hvdWxkIHByZWZpeCB3aXRoIGEgc2lnblxuICAgICAgICAgICAgLy8gaWYgYm90aCBhcmUgcHJlc2VudCB3ZSBkZWZhdWx0IHRvIHBhcmVudGhlc2VzXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJygnKSkge1xuICAgICAgICAgICAgICAgIG5lZ1AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9bXFwofFxcKV0vZywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKycpIHx8IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICctJykpIHtcbiAgICAgICAgICAgICAgICBzaWduZWQgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKycpID8gZm9ybWF0LmluZGV4T2YoJysnKSA6IHZhbHVlIDwgMCA/IGZvcm1hdC5pbmRleE9mKCctJykgOiAtMTtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvW1xcK3xcXC1dL2csICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2VlIGlmIGFiYnJldmlhdGlvbiBpcyB3YW50ZWRcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnYScpKSB7XG4gICAgICAgICAgICAgICAgYWJickZvcmNlID0gZm9ybWF0Lm1hdGNoKC9hKGt8bXxifHQpPy8pO1xuXG4gICAgICAgICAgICAgICAgYWJickZvcmNlID0gYWJickZvcmNlID8gYWJickZvcmNlWzFdIDogZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlIGFiYnJldmlhdGlvblxuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIGEnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYmJyID0gJyAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKG5ldyBSZWdFeHAoYWJiciArICdhW2ttYnRdPycpLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWJzID49IHRyaWxsaW9uICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAndCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIHRyaWxsaW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzIDwgdHJpbGxpb24gJiYgYWJzID49IGJpbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdiJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBiaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIGJpbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCBiaWxsaW9uICYmIGFicyA+PSBtaWxsaW9uICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAnbScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLm1pbGxpb247XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBtaWxsaW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzIDwgbWlsbGlvbiAmJiBhYnMgPj0gdGhvdXNhbmQgJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdrJykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aG91c2FuZFxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRob3VzYW5kO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gdGhvdXNhbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igb3B0aW9uYWwgZGVjaW1hbHNcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnWy5dJykpIHtcbiAgICAgICAgICAgICAgICBvcHREZWMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdbLl0nLCAnLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBicmVhayBudW1iZXIgYW5kIGZvcm1hdFxuICAgICAgICAgICAgaW50ID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgcHJlY2lzaW9uID0gZm9ybWF0LnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICB0aG91c2FuZHMgPSBmb3JtYXQuaW5kZXhPZignLCcpO1xuICAgICAgICAgICAgbGVhZGluZ0NvdW50ID0gKGZvcm1hdC5zcGxpdCgnLicpWzBdLnNwbGl0KCcsJylbMF0ubWF0Y2goLzAvZykgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKHByZWNpc2lvbikge1xuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMocHJlY2lzaW9uLCAnWycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbi5yZXBsYWNlKCddJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24uc3BsaXQoJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9IG51bWVyYWwuXy50b0ZpeGVkKHZhbHVlLCAocHJlY2lzaW9uWzBdLmxlbmd0aCArIHByZWNpc2lvblsxXS5sZW5ndGgpLCByb3VuZGluZ0Z1bmN0aW9uLCBwcmVjaXNpb25bMV0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIHByZWNpc2lvbi5sZW5ndGgsIHJvdW5kaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGludCA9IGRlY2ltYWwuc3BsaXQoJy4nKVswXTtcblxuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZGVjaW1hbCwgJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbCArIGRlY2ltYWwuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9wdERlYyAmJiBOdW1iZXIoZGVjaW1hbC5zbGljZSgxKSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW50ID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIDAsIHJvdW5kaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBhYmJyZXZpYXRpb24gYWdhaW4gYWZ0ZXIgcm91bmRpbmdcbiAgICAgICAgICAgIGlmIChhYmJyICYmICFhYmJyRm9yY2UgJiYgTnVtYmVyKGludCkgPj0gMTAwMCAmJiBhYmJyICE9PSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbikge1xuICAgICAgICAgICAgICAgIGludCA9IFN0cmluZyhOdW1iZXIoaW50KSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhYmJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMudGhvdXNhbmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhYmJyID0gbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGxvY2FsZS5hYmJyZXZpYXRpb25zLm1pbGxpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBhYmJyID0gbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGxvY2FsZS5hYmJyZXZpYXRpb25zLmJpbGxpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBhYmJyID0gbG9jYWxlLmFiYnJldmlhdGlvbnMudHJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gZm9ybWF0IG51bWJlclxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhpbnQsICctJykpIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBpbnQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgbmVnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGludC5sZW5ndGggPCBsZWFkaW5nQ291bnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGVhZGluZ0NvdW50IC0gaW50Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpbnQgPSAnMCcgKyBpbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhvdXNhbmRzID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBpbnQudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMScgKyBsb2NhbGUuZGVsaW1pdGVycy50aG91c2FuZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGludCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSBpbnQgKyBkZWNpbWFsICsgKGFiYnIgPyBhYmJyIDogJycpO1xuXG4gICAgICAgICAgICBpZiAobmVnUCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IChuZWdQICYmIG5lZyA/ICcoJyA6ICcnKSArIG91dHB1dCArIChuZWdQICYmIG5lZyA/ICcpJyA6ICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZ25lZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHNpZ25lZCA9PT0gMCA/IChuZWcgPyAnLScgOiAnKycpICsgb3V0cHV0IDogb3V0cHV0ICsgKG5lZyA/ICctJyA6ICcrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZWcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gJy0nICsgb3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gdW5mb3JtYXRzIG51bWJlcnMgc2VwYXJhdG9ycywgZGVjaW1hbHMgcGxhY2VzLCBzaWducywgYWJicmV2aWF0aW9uc1xuICAgICAgICBzdHJpbmdUb051bWJlcjogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbG9jYWxlc1tvcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIHN0cmluZ09yaWdpbmFsID0gc3RyaW5nLFxuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kOiAzLFxuICAgICAgICAgICAgICAgICAgICBtaWxsaW9uOiA2LFxuICAgICAgICAgICAgICAgICAgICBiaWxsaW9uOiA5LFxuICAgICAgICAgICAgICAgICAgICB0cmlsbGlvbjogMTJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbixcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIHJlZ2V4cDtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuemVyb0Zvcm1hdCAmJiBzdHJpbmcgPT09IG9wdGlvbnMuemVyb0Zvcm1hdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5udWxsRm9ybWF0ICYmIHN0cmluZyA9PT0gb3B0aW9ucy5udWxsRm9ybWF0IHx8ICFzdHJpbmcucmVwbGFjZSgvW14wLTldKy9nLCAnJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbCAhPT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UobG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbCwgJy4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGFiYnJldmlhdGlvbiBpbiBhYmJyZXZpYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ1teYS16QS1aXScgKyBsb2NhbGUuYWJicmV2aWF0aW9uc1thYmJyZXZpYXRpb25dICsgJyg/OlxcXFwpfChcXFxcJyArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wgKyAnKT8oPzpcXFxcKSk/KT8kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmluZ09yaWdpbmFsLm1hdGNoKHJlZ2V4cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICo9IE1hdGgucG93KDEwLCBhYmJyZXZpYXRpb25zW2FiYnJldmlhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgbmVnYXRpdmUgbnVtYmVyXG4gICAgICAgICAgICAgICAgdmFsdWUgKj0gKHN0cmluZy5zcGxpdCgnLScpLmxlbmd0aCArIE1hdGgubWluKHN0cmluZy5zcGxpdCgnKCcpLmxlbmd0aCAtIDEsIHN0cmluZy5zcGxpdCgnKScpLmxlbmd0aCAtIDEpKSAlIDIgPyAxIDogLTE7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uIG51bWJlcnNcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW14wLTlcXC5dKy9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSBOdW1iZXIoc3RyaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpc05hTjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IGZ1bmN0aW9uKHN0cmluZywgc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLmluZGV4T2Yoc2VhcmNoKSAhPT0gLTE7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydDogZnVuY3Rpb24oc3RyaW5nLCBzdWJTdHJpbmcsIHN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIHN0YXJ0KSArIHN1YlN0cmluZyArIHN0cmluZy5zbGljZShzdGFydCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZHVjZTogZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrIC8qLCBpbml0aWFsVmFsdWUqLykge1xuICAgICAgICAgICAgaWYgKHRoaXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUucmVkdWNlIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHQgPSBPYmplY3QoYXJyYXkpLFxuICAgICAgICAgICAgICAgIGxlbiA9IHQubGVuZ3RoID4+PiAwLFxuICAgICAgICAgICAgICAgIGsgPSAwLFxuICAgICAgICAgICAgICAgIHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoayA8IGxlbiAmJiAhKGsgaW4gdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrID49IGxlbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0W2srK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGsgaW4gdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCB0W2tdLCBrLCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgbXVsdGlwbGllciBuZWNlc3NhcnkgdG8gbWFrZSB4ID49IDEsXG4gICAgICAgICAqIGVmZmVjdGl2ZWx5IGVsaW1pbmF0aW5nIG1pc2NhbGN1bGF0aW9ucyBjYXVzZWQgYnlcbiAgICAgICAgICogZmluaXRlIHByZWNpc2lvbi5cbiAgICAgICAgICovXG4gICAgICAgIG11bHRpcGxpZXI6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDIgPyAxIDogTWF0aC5wb3coMTAsIHBhcnRzWzFdLmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIHJldHVybnMgdGhlIG1heGltdW1cbiAgICAgICAgICogbXVsdGlwbGllciB0aGF0IG11c3QgYmUgdXNlZCB0byBub3JtYWxpemUgYW4gb3BlcmF0aW9uIGludm9sdmluZ1xuICAgICAgICAgKiBhbGwgb2YgdGhlbS5cbiAgICAgICAgICovXG4gICAgICAgIGNvcnJlY3Rpb25GYWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKGFjY3VtLCBuZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1uID0gXy5tdWx0aXBsaWVyKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bSA+IG1uID8gYWNjdW0gOiBtbjtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogSW1wbGVtZW50YXRpb24gb2YgdG9GaXhlZCgpIHRoYXQgdHJlYXRzIGZsb2F0cyBtb3JlIGxpa2UgZGVjaW1hbHNcbiAgICAgICAgICpcbiAgICAgICAgICogRml4ZXMgYmluYXJ5IHJvdW5kaW5nIGlzc3VlcyAoZWcuICgwLjYxNSkudG9GaXhlZCgyKSA9PT0gJzAuNjEnKSB0aGF0IHByZXNlbnRcbiAgICAgICAgICogcHJvYmxlbXMgZm9yIGFjY291bnRpbmctIGFuZCBmaW5hbmNlLXJlbGF0ZWQgc29mdHdhcmUuXG4gICAgICAgICAqL1xuICAgICAgICB0b0ZpeGVkOiBmdW5jdGlvbih2YWx1ZSwgbWF4RGVjaW1hbHMsIHJvdW5kaW5nRnVuY3Rpb24sIG9wdGlvbmFscykge1xuICAgICAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgbWluRGVjaW1hbHMgPSBtYXhEZWNpbWFscyAtIChvcHRpb25hbHMgfHwgMCksXG4gICAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbixcbiAgICAgICAgICAgICAgICBvcHRpb25hbHNSZWdFeHAsXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHNtYWxsZXN0IHByZWNpc2lvbiB2YWx1ZSBwb3NzaWJsZSB0byBhdm9pZCBlcnJvcnMgZnJvbSBmbG9hdGluZyBwb2ludCByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24gPSBNYXRoLm1pbihNYXRoLm1heChzcGxpdFZhbHVlWzFdLmxlbmd0aCwgbWluRGVjaW1hbHMpLCBtYXhEZWNpbWFscyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uID0gbWluRGVjaW1hbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvd2VyID0gTWF0aC5wb3coMTAsIGJvdW5kZWRQcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAvLyBNdWx0aXBseSB1cCBieSBwcmVjaXNpb24sIHJvdW5kIGFjY3VyYXRlbHksIHRoZW4gZGl2aWRlIGFuZCB1c2UgbmF0aXZlIHRvRml4ZWQoKTpcbiAgICAgICAgICAgIG91dHB1dCA9IChyb3VuZGluZ0Z1bmN0aW9uKHZhbHVlICsgJ2UrJyArIGJvdW5kZWRQcmVjaXNpb24pIC8gcG93ZXIpLnRvRml4ZWQoYm91bmRlZFByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25hbHMgPiBtYXhEZWNpbWFscyAtIGJvdW5kZWRQcmVjaXNpb24pIHtcbiAgICAgICAgICAgICAgICBvcHRpb25hbHNSZWdFeHAgPSBuZXcgUmVnRXhwKCdcXFxcLj8wezEsJyArIChvcHRpb25hbHMgLSAobWF4RGVjaW1hbHMgLSBib3VuZGVkUHJlY2lzaW9uKSkgKyAnfSQnKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShvcHRpb25hbHNSZWdFeHAsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBhdmFsaWFibGUgb3B0aW9uc1xuICAgIG51bWVyYWwub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAvLyBhdmFsaWFibGUgZm9ybWF0c1xuICAgIG51bWVyYWwuZm9ybWF0cyA9IGZvcm1hdHM7XG5cbiAgICAvLyBhdmFsaWFibGUgZm9ybWF0c1xuICAgIG51bWVyYWwubG9jYWxlcyA9IGxvY2FsZXM7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGN1cnJlbnQgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgbnVtZXJhbC5sb2NhbGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgb3B0aW9ucy5jdXJyZW50TG9jYWxlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5jdXJyZW50TG9jYWxlO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgbG9hZGVkIGxvY2FsZSBkYXRhLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50XG4gICAgLy8gZ2xvYmFsIGxvY2FsZSBvYmplY3QuXG4gICAgbnVtZXJhbC5sb2NhbGVEYXRhID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlc1tvcHRpb25zLmN1cnJlbnRMb2NhbGVdO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCFsb2NhbGVzW2tleV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsb2NhbGUgOiAnICsga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2NhbGVzW2tleV07XG4gICAgfTtcblxuICAgIG51bWVyYWwucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbcHJvcGVydHldID0gZGVmYXVsdHNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG51bWVyYWwuemVyb0Zvcm1hdCA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLnplcm9Gb3JtYXQgPSB0eXBlb2YoZm9ybWF0KSA9PT0gJ3N0cmluZycgPyBmb3JtYXQgOiBudWxsO1xuICAgIH07XG5cbiAgICBudW1lcmFsLm51bGxGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMubnVsbEZvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6IG51bGw7XG4gICAgfTtcblxuICAgIG51bWVyYWwuZGVmYXVsdEZvcm1hdCA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLmRlZmF1bHRGb3JtYXQgPSB0eXBlb2YoZm9ybWF0KSA9PT0gJ3N0cmluZycgPyBmb3JtYXQgOiAnMC4wJztcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlciA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIGZvcm1hdCkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzW3R5cGUgKyAncyddW25hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG5hbWUgKyAnICcgKyB0eXBlICsgJyBhbHJlYWR5IHJlZ2lzdGVyZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW3R5cGUgKyAncyddW25hbWVdID0gZm9ybWF0O1xuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfTtcblxuXG4gICAgbnVtZXJhbC52YWxpZGF0ZSA9IGZ1bmN0aW9uKHZhbCwgY3VsdHVyZSkge1xuICAgICAgICB2YXIgX2RlY2ltYWxTZXAsXG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAsXG4gICAgICAgICAgICBfY3VyclN5bWJvbCxcbiAgICAgICAgICAgIF92YWxBcnJheSxcbiAgICAgICAgICAgIF9hYmJyT2JqLFxuICAgICAgICAgICAgX3Rob3VzYW5kUmVnRXgsXG4gICAgICAgICAgICBsb2NhbGVEYXRhLFxuICAgICAgICAgICAgdGVtcDtcblxuICAgICAgICAvL2NvZXJjZSB2YWwgdG8gc3RyaW5nXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsICs9ICcnO1xuXG4gICAgICAgICAgICBpZiAoY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOdW1lcmFsLmpzOiBWYWx1ZSBpcyBub3Qgc3RyaW5nLiBJdCBoYXMgYmVlbiBjby1lcmNlZCB0bzogJywgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vdHJpbSB3aGl0ZXNwYWNlcyBmcm9tIGVpdGhlciBzaWRlc1xuICAgICAgICB2YWwgPSB2YWwudHJpbSgpO1xuXG4gICAgICAgIC8vaWYgdmFsIGlzIGp1c3QgZGlnaXRzIHJldHVybiB0cnVlXG4gICAgICAgIGlmICghIXZhbC5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB2YWwgaXMgZW1wdHkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICh2YWwgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2dldCB0aGUgZGVjaW1hbCBhbmQgdGhvdXNhbmRzIHNlcGFyYXRvciBmcm9tIG51bWVyYWwubG9jYWxlRGF0YVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGUgY3VsdHVyZSBpcyB1bmRlcnN0b29kIGJ5IG51bWVyYWwuIGlmIG5vdCwgZGVmYXVsdCBpdCB0byBjdXJyZW50IGxvY2FsZVxuICAgICAgICAgICAgbG9jYWxlRGF0YSA9IG51bWVyYWwubG9jYWxlRGF0YShjdWx0dXJlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9jYWxlRGF0YSA9IG51bWVyYWwubG9jYWxlRGF0YShudW1lcmFsLmxvY2FsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2V0dXAgdGhlIGRlbGltaXRlcnMgYW5kIGN1cnJlbmN5IHN5bWJvbCBiYXNlZCBvbiBjdWx0dXJlL2xvY2FsZVxuICAgICAgICBfY3VyclN5bWJvbCA9IGxvY2FsZURhdGEuY3VycmVuY3kuc3ltYm9sO1xuICAgICAgICBfYWJick9iaiA9IGxvY2FsZURhdGEuYWJicmV2aWF0aW9ucztcbiAgICAgICAgX2RlY2ltYWxTZXAgPSBsb2NhbGVEYXRhLmRlbGltaXRlcnMuZGVjaW1hbDtcbiAgICAgICAgaWYgKGxvY2FsZURhdGEuZGVsaW1pdGVycy50aG91c2FuZHMgPT09ICcuJykge1xuICAgICAgICAgICAgX3Rob3VzYW5kU2VwID0gJ1xcXFwuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCA9IGxvY2FsZURhdGEuZGVsaW1pdGVycy50aG91c2FuZHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZGF0aW5nIGN1cnJlbmN5IHN5bWJvbFxuICAgICAgICB0ZW1wID0gdmFsLm1hdGNoKC9eW15cXGRdKy8pO1xuICAgICAgICBpZiAodGVtcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGlmICh0ZW1wWzBdICE9PSBfY3VyclN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmFsaWRhdGluZyBhYmJyZXZpYXRpb24gc3ltYm9sXG4gICAgICAgIHRlbXAgPSB2YWwubWF0Y2goL1teXFxkXSskLyk7XG4gICAgICAgIGlmICh0ZW1wICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgaWYgKHRlbXBbMF0gIT09IF9hYmJyT2JqLnRob3VzYW5kICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLm1pbGxpb24gJiYgdGVtcFswXSAhPT0gX2FiYnJPYmouYmlsbGlvbiAmJiB0ZW1wWzBdICE9PSBfYWJick9iai50cmlsbGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aG91c2FuZFJlZ0V4ID0gbmV3IFJlZ0V4cChfdGhvdXNhbmRTZXAgKyAnezJ9Jyk7XG5cbiAgICAgICAgaWYgKCF2YWwubWF0Y2goL1teXFxkLixdL2cpKSB7XG4gICAgICAgICAgICBfdmFsQXJyYXkgPSB2YWwuc3BsaXQoX2RlY2ltYWxTZXApO1xuICAgICAgICAgICAgaWYgKF92YWxBcnJheS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoX3ZhbEFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKy4qXFxkJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbEFycmF5WzBdLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKyQvKSAmJiAhX3ZhbEFycmF5WzBdLm1hdGNoKF90aG91c2FuZFJlZ0V4KSAmJiAhISBfdmFsQXJyYXlbMV0ubWF0Y2goL15cXGQrJC8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoICEhIF92YWxBcnJheVswXS5tYXRjaCgvXlxcZCsuKlxcZCQvKSAmJiAhX3ZhbEFycmF5WzBdLm1hdGNoKF90aG91c2FuZFJlZ0V4KSAmJiAhISBfdmFsQXJyYXlbMV0ubWF0Y2goL15cXGQrJC8pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIE51bWVyYWwgUHJvdG90eXBlXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgbnVtZXJhbC5mbiA9IE51bWVyYWwucHJvdG90eXBlID0ge1xuICAgICAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtZXJhbCh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbihpbnB1dFN0cmluZywgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsdWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gaW5wdXRTdHJpbmcgfHwgb3B0aW9ucy5kZWZhdWx0Rm9ybWF0LFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgaGF2ZSBhIHJvdW5kaW5nRnVuY3Rpb25cbiAgICAgICAgICAgIHJvdW5kaW5nRnVuY3Rpb24gPSByb3VuZGluZ0Z1bmN0aW9uIHx8IE1hdGgucm91bmQ7XG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCBiYXNlZCBvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwICYmIG9wdGlvbnMuemVyb0Zvcm1hdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG9wdGlvbnMuemVyb0Zvcm1hdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwgJiYgb3B0aW9ucy5udWxsRm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3B0aW9ucy5udWxsRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtpbmQgaW4gZm9ybWF0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0Lm1hdGNoKGZvcm1hdHNba2luZF0ucmVnZXhwcy5mb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRGdW5jdGlvbiA9IGZvcm1hdHNba2luZF0uZm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0RnVuY3Rpb24gfHwgbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gZm9ybWF0RnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3Rvci5jYWxsKG51bGwsIHRoaXMuX3ZhbHVlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bSArIE1hdGgucm91bmQoY29yckZhY3RvciAqIGN1cnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt0aGlzLl92YWx1ZSwgdmFsdWVdLCBjYmFjaywgMCkgLyBjb3JyRmFjdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgc3VidHJhY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3Rvci5jYWxsKG51bGwsIHRoaXMuX3ZhbHVlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bSAtIE1hdGgucm91bmQoY29yckZhY3RvciAqIGN1cnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt2YWx1ZV0sIGNiYWNrLCBNYXRoLnJvdW5kKHRoaXMuX3ZhbHVlICogY29yckZhY3RvcikpIC8gY29yckZhY3RvcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIG11bHRpcGx5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IoYWNjdW0sIGN1cnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFjY3VtICogY29yckZhY3RvcikgKiBNYXRoLnJvdW5kKGN1cnIgKiBjb3JyRmFjdG9yKSAvIE1hdGgucm91bmQoY29yckZhY3RvciAqIGNvcnJGYWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt0aGlzLl92YWx1ZSwgdmFsdWVdLCBjYmFjaywgMSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBkaXZpZGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3Vycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYWNjdW0gKiBjb3JyRmFjdG9yKSAvIE1hdGgucm91bmQoY3VyciAqIGNvcnJGYWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt0aGlzLl92YWx1ZSwgdmFsdWVdLCBjYmFjayk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKG51bWVyYWwodGhpcy5fdmFsdWUpLnN1YnRyYWN0KHZhbHVlKS52YWx1ZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIERlZmF1bHQgTG9jYWxlICYmIEZvcm1hdFxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlbicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fihudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdicHMnLCB7XG4gICAgICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAvKEJQUykvLFxuICAgICAgICAgICAgICAgIHVuZm9ybWF0OiAvKEJQUykvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBCUFMnKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMDA7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlIEJQU1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/QlBTLywgJycpO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhvdXRwdXQsICcpJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnNwbGl0KCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3BsaWNlKC0xLCAwLCBzcGFjZSArICdCUFMnKTtcblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgc3BhY2UgKyAnQlBTJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKyhudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXIoc3RyaW5nKSAqIDAuMDAwMSkudG9GaXhlZCgxNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWNpbWFsID0ge1xuICAgICAgICAgICAgYmFzZTogMTAwMCxcbiAgICAgICAgICAgIHN1ZmZpeGVzOiBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXVxuICAgICAgICB9LFxuICAgICAgICBiaW5hcnkgPSB7XG4gICAgICAgICAgICBiYXNlOiAxMDI0LFxuICAgICAgICAgICAgc3VmZml4ZXM6IFsnQicsICdLaUInLCAnTWlCJywgJ0dpQicsICdUaUInLCAnUGlCJywgJ0VpQicsICdaaUInLCAnWWlCJ11cbiAgICAgICAgfTtcblxuICAgIHZhciBhbGxTdWZmaXhlcyA9ICBkZWNpbWFsLnN1ZmZpeGVzLmNvbmNhdChiaW5hcnkuc3VmZml4ZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbC5zdWZmaXhlcy5pbmRleE9mKGl0ZW0pIDwgMDtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgdW5mb3JtYXRSZWdleCA9IGFsbFN1ZmZpeGVzLmpvaW4oJ3wnKTtcbiAgICAgICAgLy8gQWxsb3cgc3VwcG9ydCBmb3IgQlBTIChodHRwOi8vd3d3LmludmVzdG9wZWRpYS5jb20vdGVybXMvYi9iYXNpc3BvaW50LmFzcClcbiAgICAgICAgdW5mb3JtYXRSZWdleCA9ICcoJyArIHVuZm9ybWF0UmVnZXgucmVwbGFjZSgnQicsICdCKD8hUFMpJykgKyAnKSc7XG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnYnl0ZXMnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhbMFxcc11pP2IpLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiBuZXcgUmVnRXhwKHVuZm9ybWF0UmVnZXgpXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIG91dHB1dCxcbiAgICAgICAgICAgICAgICBieXRlcyA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdpYicpID8gYmluYXJ5IDogZGVjaW1hbCxcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIGInKSB8fCBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIGliJykgPyAnICcgOiAnJyxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP2k/Yi8sICcnKTtcblxuICAgICAgICAgICAgZm9yIChwb3dlciA9IDA7IHBvd2VyIDw9IGJ5dGVzLnN1ZmZpeGVzLmxlbmd0aDsgcG93ZXIrKykge1xuICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgucG93KGJ5dGVzLmJhc2UsIHBvd2VyKTtcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLnBvdyhieXRlcy5iYXNlLCBwb3dlciArIDEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAwIHx8IHZhbHVlID49IG1pbiAmJiB2YWx1ZSA8IG1heCkge1xuICAgICAgICAgICAgICAgICAgICBzdWZmaXggKz0gYnl0ZXMuc3VmZml4ZXNbcG93ZXJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gbWluO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyBzdWZmaXg7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllcjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChwb3dlciA9IGRlY2ltYWwuc3VmZml4ZXMubGVuZ3RoIC0gMTsgcG93ZXIgPj0gMDsgcG93ZXItLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgZGVjaW1hbC5zdWZmaXhlc1twb3dlcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlc011bHRpcGxpZXIgPSBNYXRoLnBvdyhkZWNpbWFsLmJhc2UsIHBvd2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgYmluYXJ5LnN1ZmZpeGVzW3Bvd2VyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllciA9IE1hdGgucG93KGJpbmFyeS5iYXNlLCBwb3dlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgKj0gKGJ5dGVzTXVsdGlwbGllciB8fCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2N1cnJlbmN5Jywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oXFwkKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBzeW1ib2xzID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IGZvcm1hdC5tYXRjaCgvXihbXFwrfFxcLXxcXCh8XFxzfFxcJF0qKS8pWzBdLFxuICAgICAgICAgICAgICAgICAgICBhZnRlcjogZm9ybWF0Lm1hdGNoKC8oW1xcK3xcXC18XFwpfFxcc3xcXCRdKikkLylbMF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gc3RyaXAgZm9ybWF0IG9mIHNwYWNlcyBhbmQgJFxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9cXCRcXHM/LywgJycpO1xuXG4gICAgICAgICAgICAvLyBmb3JtYXQgdGhlIG51bWJlclxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGJlZm9yZSBhbmQgYWZ0ZXIgYmFzZWQgb24gdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5iZWZvcmUgPSBzeW1ib2xzLmJlZm9yZS5yZXBsYWNlKC9bXFwtXFwoXS8sICcnKTtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmFmdGVyID0gc3ltYm9scy5hZnRlci5yZXBsYWNlKC9bXFwtXFwpXS8sICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAwICYmICghbnVtZXJhbC5fLmluY2x1ZGVzKHN5bWJvbHMuYmVmb3JlLCAnLScpICYmICFudW1lcmFsLl8uaW5jbHVkZXMoc3ltYm9scy5iZWZvcmUsICcoJykpKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5iZWZvcmUgPSAnLScgKyBzeW1ib2xzLmJlZm9yZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggYmVmb3JlIHN5bWJvbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN5bWJvbHMuYmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9scy5iZWZvcmVbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICckJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCAnICcsIGkgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBhZnRlciBzeW1ib2xcbiAgICAgICAgICAgIGZvciAoaSA9IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xzLmFmdGVyW2ldO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBpID09PSBzeW1ib2xzLmFmdGVyLmxlbmd0aCAtIDEgPyBvdXRwdXQgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sIDogbnVtZXJhbC5fLmluc2VydChvdXRwdXQsIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wsIC0oc3ltYm9scy5hZnRlci5sZW5ndGggLSAoMSArIGkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBpID09PSBzeW1ib2xzLmFmdGVyLmxlbmd0aCAtIDEgPyBvdXRwdXQgKyAnICcgOiBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgJyAnLCAtKHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gKDEgKyBpKSArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wubGVuZ3RoIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnZXhwb25lbnRpYWwnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhlXFwrfGUtKS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyhlXFwrfGUtKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGV4cG9uZW50aWFsID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhbnVtZXJhbC5fLmlzTmFOKHZhbHVlKSA/IHZhbHVlLnRvRXhwb25lbnRpYWwoKSA6ICcwZSswJyxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGV4cG9uZW50aWFsLnNwbGl0KCdlJyk7XG5cbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9lW1xcK3xcXC1dezF9MC8sICcnKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KE51bWJlcihwYXJ0c1swXSksIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyAnZScgKyBwYXJ0c1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gbnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgJ2UrJykgPyBzdHJpbmcuc3BsaXQoJ2UrJykgOiBzdHJpbmcuc3BsaXQoJ2UtJyksXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIocGFydHNbMF0pLFxuICAgICAgICAgICAgICAgIHBvd2VyID0gTnVtYmVyKHBhcnRzWzFdKTtcblxuICAgICAgICAgICAgcG93ZXIgPSBudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCAnZS0nKSA/IHBvd2VyICo9IC0xIDogcG93ZXI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gbnVtZXJhbC5fLmNvcnJlY3Rpb25GYWN0b3IoYWNjdW0sIGN1cnIpLFxuICAgICAgICAgICAgICAgICAgICBudW0gPSAoYWNjdW0gKiBjb3JyRmFjdG9yKSAqIChjdXJyICogY29yckZhY3RvcikgLyAoY29yckZhY3RvciAqIGNvcnJGYWN0b3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudW1lcmFsLl8ucmVkdWNlKFt2YWx1ZSwgTWF0aC5wb3coMTAsIHBvd2VyKV0sIGNiYWNrLCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdvcmRpbmFsJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8obykvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IG51bWVyYWwubG9jYWxlc1tudW1lcmFsLm9wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIG8nKSA/ICcgJyA6ICcnO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP28vLCAnJyk7XG5cbiAgICAgICAgICAgIG9yZGluYWwgKz0gbG9jYWxlLm9yZGluYWwodmFsdWUpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyBvcmRpbmFsO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ3BlcmNlbnRhZ2UnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyglKS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyglKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc3BhY2UgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnICUnKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgaWYgKG51bWVyYWwub3B0aW9ucy5zY2FsZVBlcmNlbnRCeTEwMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgJVxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9cXCUvLCAnJyk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhvdXRwdXQsICcpJykpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJycpO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LnNwbGljZSgtMSwgMCwgc3BhY2UgKyAnJScpO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmpvaW4oJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBzcGFjZSArICclJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIG51bWJlciA9IG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpO1xuICAgICAgICAgICAgaWYgKG51bWVyYWwub3B0aW9ucy5zY2FsZVBlcmNlbnRCeTEwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKiAwLjAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICd0aW1lJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oOikvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IC8oOikvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcih2YWx1ZSAvIDYwIC8gNjApLFxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIChob3VycyAqIDYwICogNjApKSAvIDYwKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5yb3VuZCh2YWx1ZSAtIChob3VycyAqIDYwICogNjApIC0gKG1pbnV0ZXMgKiA2MCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gaG91cnMgKyAnOicgKyAobWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXMpICsgJzonICsgKHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMgOiBzZWNvbmRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHRpbWVBcnJheSA9IHN0cmluZy5zcGxpdCgnOicpLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSAwO1xuXG4gICAgICAgICAgICAvLyB0dXJuIGhvdXJzIGFuZCBtaW51dGVzIGludG8gc2Vjb25kcyBhbmQgYWRkIHRoZW0gYWxsIHVwXG4gICAgICAgICAgICBpZiAodGltZUFycmF5Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyAoTnVtYmVyKHRpbWVBcnJheVswXSkgKiA2MCAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyAoTnVtYmVyKHRpbWVBcnJheVsxXSkgKiA2MCk7XG4gICAgICAgICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgTnVtYmVyKHRpbWVBcnJheVsyXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVBcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyAoTnVtYmVyKHRpbWVBcnJheVswXSkgKiA2MCk7XG4gICAgICAgICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgTnVtYmVyKHRpbWVBcnJheVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHNlY29uZHMpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5yZXR1cm4gbnVtZXJhbDtcbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9udW1lcmFsL251bWVyYWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohIEBwcmVzZXJ2ZVxuICogbnVtZXJhbC5qc1xuICogbG9jYWxlcyA6IDIuMC42XG4gKiBsaWNlbnNlIDogTUlUXG4gKiBodHRwOi8vYWRhbXdkcmFwZXIuZ2l0aHViLmNvbS9OdW1lcmFsLWpzL1xuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydudW1lcmFsJ10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCcuL251bWVyYWwnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShnbG9iYWwubnVtZXJhbCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAobnVtZXJhbCkge1xuICAgIFxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnYmcnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHsgLy8gSSBmb3VuZCB0aGVzZSBoZXJlIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMjgvdmVyaWZ5L251bWJlcnMvYmcuaHRtbFxuICAgICAgICAgICAgdGhvdXNhbmQ6ICfRhdC40LsnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ9C80LvQvScsXG4gICAgICAgICAgICBiaWxsaW9uOiAn0LzQu9GA0LQnLFxuICAgICAgICAgICAgdHJpbGxpb246ICfRgtGA0LvQvSdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgLy8gZ29vZ2xlIHRyYW5zbGF0ZSBzdWdnZXN0czpcbiAgICAgICAgICAgIC8vIDFzdD0xLdCy0Lg7IDJuZD0yLdGA0Lg7IDd0aD03LdC80Lg7XG4gICAgICAgICAgICAvLyA4dGg9OC3QvNC4IGFuZCBtYW55IG90aGVycyBlbmQgd2l0aCAt0YLQuFxuICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgM3JkPTMt0YLQuFxuICAgICAgICAgICAgLy8gSG93ZXZlciBzaW5jZSBJJ3ZlIHNlZW4gc3VnZ2VzdGlvbnMgdGhhdCBpblxuICAgICAgICAgICAgLy8gQnVsZ2FyaWFuIHRoZSBvcmRpbmFsIGNhbiBiZSB0YWtlbiBpblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGZvcm1zIChtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpXG4gICAgICAgICAgICAvLyBJJ3ZlIG9wdGVkIHRvIHdpbXAgb3V0IG9uIGNvbW1pdGluZyB0aGF0IHRvIGNvZGVcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ9C70LInXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdjaHMnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn5Y2DJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfnmb7kuIcnLFxuICAgICAgICAgICAgYmlsbGlvbjogJ+WNgeS6vycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ+WFhidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ8KlJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2NzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ3Rpcy4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbC4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnS8SNJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2RhLWRrJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbycsXG4gICAgICAgICAgICBiaWxsaW9uOiAnbWlhJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnYidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ0RLSydcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdkZS1jaCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ0NIRidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdkZScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlbi1hdScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAofn4gKG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4tZ2InLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfCoydcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlbi16YScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAofn4gKG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1InXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXMtZXMnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbW0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuIChiID09PSAxIHx8IGIgPT09IDMpID8gJ2VyJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ2RvJyA6XG4gICAgICAgICAgICAgICAgICAgIChiID09PSA3IHx8IGIgPT09IDApID8gJ21vJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAoYiA9PT0gOCkgPyAndm8nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYiA9PT0gOSkgPyAnbm8nIDogJ3RvJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlcycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKGIgPT09IDEgfHwgYiA9PT0gMykgPyAnZXInIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnZG8nIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gNyB8fCBiID09PSAwKSA/ICdtbycgOlxuXHRcdChiID09PSA4KSA/ICd2bycgOlxuXHRcdChiID09PSA5KSA/ICdubycgOiAndG8nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnJCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdldCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICcgdHVoJyxcbiAgICAgICAgICAgIG1pbGxpb246ICcgbWxuJyxcbiAgICAgICAgICAgIGJpbGxpb246ICcgbWxkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnIHRybCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdmaScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdNJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdHJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnVCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdmci1jYScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdNJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdHJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnVCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgPT09IDEgPyAnZXInIDogJ2UnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnJCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdmci1jaCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnXFwnJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/ICdlcicgOiAnZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdDSEYnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnInLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdodScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdFJywgIC8vIGV6ZXJcbiAgICAgICAgICAgIG1pbGxpb246ICdNJywgICAvLyBtaWxsacOzXG4gICAgICAgICAgICBiaWxsaW9uOiAnTXJkJywgLy8gbWlsbGnDoXJkXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnICAgLy8gdHJpbGxpw7NcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyBGdCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdpdCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdtaWxhJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWwnLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ8K6JztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdqYScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfljYMnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ+eZvuS4hycsXG4gICAgICAgICAgICBiaWxsaW9uOiAn5Y2B5YSEJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn5YWGJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnwqUnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbHYnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnIHTFq2tzdC4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJyBtaWxqLicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnIG1sanJkLicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyB0cmlsai4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbmwtYmUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbCAgOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQgOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uICA6ICcgbWxuJyxcbiAgICAgICAgICAgIGJpbGxpb24gIDogJyBtbGQnLFxuICAgICAgICAgICAgdHJpbGxpb24gOiAnIGJsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSBudW1iZXIgJSAxMDA7XG5cbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyICE9PSAwICYmIHJlbWFpbmRlciA8PSAxIHx8IHJlbWFpbmRlciA9PT0gOCB8fCByZW1haW5kZXIgPj0gMjApID8gJ3N0ZScgOiAnZGUnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsICdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdubC1ubCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsICA6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZCA6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb24gIDogJ21sbicsXG4gICAgICAgICAgICBiaWxsaW9uICA6ICdtcmQnLFxuICAgICAgICAgICAgdHJpbGxpb24gOiAnYmxuJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IG51bWJlciAlIDEwMDtcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyICE9PSAwICYmIHJlbWFpbmRlciA8PSAxIHx8IHJlbWFpbmRlciA9PT0gOCB8fCByZW1haW5kZXIgPj0gMjApID8gJ3N0ZScgOiAnZGUnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsICdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdubycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ2tyJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3BsJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ3R5cy4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21sbicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnbWxkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnYmxuJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnUExOJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3B0LWJyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ21pbCcsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlsaMO1ZXMnLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ8K6JztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1IkJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3B0LXB0Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncnUtdWEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YLRi9GBLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAn0LzQu9C9JyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gbm90IGlkZWFsLCBidXQgc2luY2UgaW4gUnVzc2lhbiBpdCBjYW4gdGFrZW4gb25cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBmb3JtcyAobWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbGwgd2UgY2FuIGRvXG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCNCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdydScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfRgtGL0YEuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0uJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfQvNC70YDQtC4nLFxuICAgICAgICAgICAgdHJpbGxpb246ICfRgtGA0LvQvS4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIG5vdCBpZGVhbCwgYnV0IHNpbmNlIGluIFJ1c3NpYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ9GA0YPQsS4nXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnc2snLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAndGlzLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlsLicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnc2wnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlvJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdtcmQnLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0cmlsaWpvbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAndGgnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn4Lie4Lix4LiZJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfguKXguYnguLLguJknLFxuICAgICAgICAgICAgYmlsbGlvbjogJ+C4nuC4seC4meC4peC5ieC4suC4mScsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ+C4peC5ieC4suC4meC4peC5ieC4suC4mSdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+C4vydcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdWZmaXhlcyA9IHtcbiAgICAgICAgICAgIDE6ICdcXCdpbmNpJyxcbiAgICAgICAgICAgIDU6ICdcXCdpbmNpJyxcbiAgICAgICAgICAgIDg6ICdcXCdpbmNpJyxcbiAgICAgICAgICAgIDcwOiAnXFwnaW5jaScsXG4gICAgICAgICAgICA4MDogJ1xcJ2luY2knLFxuXG4gICAgICAgICAgICAyOiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDc6ICdcXCduY2knLFxuICAgICAgICAgICAgMjA6ICdcXCduY2knLFxuICAgICAgICAgICAgNTA6ICdcXCduY2knLFxuXG4gICAgICAgICAgICAzOiAnXFwnw7xuY8O8JyxcbiAgICAgICAgICAgIDQ6ICdcXCfDvG5jw7wnLFxuICAgICAgICAgICAgMTAwOiAnXFwnw7xuY8O8JyxcblxuICAgICAgICAgICAgNjogJ1xcJ25jxLEnLFxuXG4gICAgICAgICAgICA5OiAnXFwndW5jdScsXG4gICAgICAgICAgICAxMDogJ1xcJ3VuY3UnLFxuICAgICAgICAgICAgMzA6ICdcXCd1bmN1JyxcblxuICAgICAgICAgICAgNjA6ICdcXCfEsW5jxLEnLFxuICAgICAgICAgICAgOTA6ICdcXCfEsW5jxLEnXG4gICAgICAgIH07XG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAndHInLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnYmluJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWx5b24nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21pbHlhcicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3RyaWx5b24nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDApIHsgIC8vIHNwZWNpYWwgY2FzZSBmb3IgemVyb1xuICAgICAgICAgICAgICAgIHJldHVybiAnXFwnxLFuY8SxJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGEgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBiID0gbnVtYmVyICUgMTAwIC0gYSxcbiAgICAgICAgICAgICAgICBjID0gbnVtYmVyID49IDEwMCA/IDEwMCA6IG51bGw7XG5cbiAgICAgICAgICByZXR1cm4gc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0gfHwgc3VmZml4ZXNbY107XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdcXHUyMEJBJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3VrLXVhJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ9GC0LjRgS4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ9C80LvQvScsXG4gICAgICAgICAgICBiaWxsaW9uOiAn0LzQu9GA0LQnLFxuICAgICAgICAgICAgdHJpbGxpb246ICfQsdC70L0nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIG5vdCBpZGVhbCwgYnV0IHNpbmNlIGluIFVrcmFpbmlhbiBpdCBjYW4gdGFrZW4gb25cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBmb3JtcyAobWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbGwgd2UgY2FuIGRvXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdcXHUyMEI0J1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAndmknLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnIG5naMOsbicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnIHRyaeG7h3UnLFxuICAgICAgICAgICAgYmlsbGlvbjogJyB04bu3JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnIG5naMOsbiB04bu3J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKrJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9udW1lcmFsL2xvY2FsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFxue1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkge1xuICAgIHRoaXMudG9wID0gdG9wXG4gICAgdGhpcy5sZWZ0ID0gbGVmdFxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdHJhbnNmb3JtWFxuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRyYW5zZm9ybVlcbiAgfVxuXG4gIGdldCBib3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCByaWdodCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG9yaWdpblRvcCgpe1xuICAgIHJldHVybiB0aGlzLnRvcCAtIHRoaXMudHJhbnNmb3JtWTtcbiAgfVxuXG4gIGdldCBvcmlnaW5MZWZ0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCAtIHRoaXMudHJhbnNmb3JtWDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Cb3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5Ub3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBvcmlnaW5SaWdodCgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0Q2VudGVyUmVjdCh3aWR0aCwgaGVpZ2h0KXtcbiAgICBjb25zdCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLmxlZnQgKyAodGhpcy53aWR0aCAvIDIpLFxuICAgICAgeTogdGhpcy50b3AgKyAodGhpcy5oZWlnaHQgLyAyKSxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICBjZW50ZXIueSAtIChoZWlnaHQgLyAyKSxcbiAgICAgIGNlbnRlci54IC0gKHdpZHRoIC8gMiksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgdGhpcy50b3AsXG4gICAgICB0aGlzLmxlZnQsXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0aGlzLnRyYW5zZm9ybVlcbiAgICApXG4gIH1cblxuICB0cmFuc2Zvcm0oeCwgeSl7XG4gICAgdGhpcy50b3AgPSB0aGlzLm9yaWdpblRvcCArIHk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5vcmlnaW5MZWZ0ICsgeDtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB4O1xuICAgIHRoaXMudHJhbnNmb3JtWSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250YWlucyhyZWN0KXtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxlZnQgPD0gcmVjdC5sZWZ0XG4gICAgICAmJlxuICAgICAgdGhpcy5yaWdodCA+PSByZWN0LnJpZ2h0XG4gICAgICAmJlxuICAgICAgdGhpcy50b3AgPD0gcmVjdC50b3BcbiAgICAgICYmXG4gICAgICB0aGlzLmJvdHRvbSA+PSByZWN0LmJvdHRvbTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBkdW1wKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBvcmlnaW5Ub3A6IHRoaXMub3JpZ2luVG9wLFxuICAgICAgb3JpZ2luTGVmdDogdGhpcy5vcmlnaW5MZWZ0LFxuICAgICAgb3JpZ2luQm90dG9tOiB0aGlzLm9yaWdpbkJvdHRvbSxcbiAgICAgIG9yaWdpblJpZ2h0OiB0aGlzLm9yaWdpblJpZ2h0LFxuICAgICAgdHJhbnNmb3JtWDogdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdHJhbnNmb3JtWTogdGhpcy50cmFuc2Zvcm1ZLFxuICAgIH1cbiAgfVxuXG4gIGdldFJlbGF0aXZlUmVjdChyZWN0LCBwb3NpdGlvbil7XG4gICAgc3dpdGNoKHBvc2l0aW9uKXtcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LlJJR0hUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkNFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIGJvdW5kaW5nUmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgYm91bmRpbmdSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICB0cmFuc2Zvcm1YLFxuICAgIHRyYW5zZm9ybVlcbiAgKVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhXaW5kb3cgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVjdChcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gIClcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBLRVlDT0RFUyA9IHtcbiAgRVNDQVBFOiAyN1xufTtcblxudmFyIFBvcnRhbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb3J0YWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcnRhbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9ydGFsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihQb3J0YWwpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7IGFjdGl2ZTogZmFsc2UgfTtcbiAgICBfdGhpcy5oYW5kbGVXcmFwcGVyQ2xpY2sgPSBfdGhpcy5oYW5kbGVXcmFwcGVyQ2xpY2suYmluZChfdGhpcyk7XG4gICAgX3RoaXMuY2xvc2VQb3J0YWwgPSBfdGhpcy5jbG9zZVBvcnRhbC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayA9IF90aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUtleWRvd24gPSBfdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnBvcnRhbCA9IG51bGw7XG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcnRhbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbkVzYykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgIC8vIHBvcnRhbCdzICdpcyBvcGVuJyBzdGF0ZSBpcyBoYW5kbGVkIHRocm91Z2ggdGhlIHByb3AgaXNPcGVuZWRcbiAgICAgIGlmICh0eXBlb2YgbmV3UHJvcHMuaXNPcGVuZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChuZXdQcm9wcy5pc09wZW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQb3J0YWwobmV3UHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Qb3J0YWwobmV3UHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5ld1Byb3BzLmlzT3BlbmVkICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcnRhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcnRhbCBoYW5kbGVzIGl0cyBvd24gJ2lzIG9wZW4nIHN0YXRlXG4gICAgICBpZiAodHlwZW9mIG5ld1Byb3BzLmlzT3BlbmVkID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2MpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VQb3J0YWwodHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlV3JhcHBlckNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlV3JhcHBlckNsaWNrKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuUG9ydGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3BlblBvcnRhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5Qb3J0YWwoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgdGhpcy5yZW5kZXJQb3J0YWwocHJvcHMpO1xuICAgICAgdGhpcy5wcm9wcy5vbk9wZW4odGhpcy5ub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZVBvcnRhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlUG9ydGFsKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBpc1VubW91bnRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgcmVzZXRQb3J0YWxTdGF0ZSA9IGZ1bmN0aW9uIHJlc2V0UG9ydGFsU3RhdGUoKSB7XG4gICAgICAgIGlmIChfdGhpczIubm9kZSkge1xuICAgICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzMi5ub2RlKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKF90aGlzMi5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczIucG9ydGFsID0gbnVsbDtcbiAgICAgICAgX3RoaXMyLm5vZGUgPSBudWxsO1xuICAgICAgICBpZiAoaXNVbm1vdW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmJlZm9yZUNsb3NlKHRoaXMubm9kZSwgcmVzZXRQb3J0YWxTdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzZXRQb3J0YWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVPdXRzaWRlTW91c2VDbGljayhlKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvb3QgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzLnBvcnRhbCk7XG4gICAgICBpZiAocm9vdC5jb250YWlucyhlLnRhcmdldCkgfHwgZS5idXR0b24gJiYgZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5jbG9zZVBvcnRhbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZUtleWRvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVLZXlkb3duKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREVTLkVTQ0FQRSAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNsb3NlUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyUG9ydGFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUG9ydGFsKHByb3BzKSB7XG4gICAgICBpZiAoIXRoaXMubm9kZSkge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2ppbWZiL2Q5OWUwNjc4ZTlkYTcxNWNjZjY0NTQ5NjFlZjA0ZDFiXG4gICAgICBpZiAodHlwZW9mIHByb3BzLmNoaWxkcmVuLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHByb3BzLmNoaWxkcmVuLCB7IGNsb3NlUG9ydGFsOiB0aGlzLmNsb3NlUG9ydGFsIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBvcnRhbCA9IF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzLCBjaGlsZHJlbiwgdGhpcy5ub2RlLCB0aGlzLnByb3BzLm9uVXBkYXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuQnlDbGlja09uKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMub3BlbkJ5Q2xpY2tPbiwgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZVdyYXBwZXJDbGljayB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3J0YWw7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb3J0YWw7XG5cblxuUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBvcGVuQnlDbGlja09uOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGNsb3NlT25Fc2M6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2xvc2VPbk91dHNpZGVDbGljazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpc09wZW5lZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBvbk9wZW46IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuICBiZWZvcmVDbG9zZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuICBvblVwZGF0ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5Qb3J0YWwuZGVmYXVsdFByb3BzID0ge1xuICBvbk9wZW46IGZ1bmN0aW9uIG9uT3BlbigpIHt9LFxuICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG4gIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSgpIHt9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcG9ydGFsL2J1aWxkL3BvcnRhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=