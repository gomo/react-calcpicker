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
	    initialAmount: 12300.493495,
	    currencyFormat: '$0,0[.]00',
	    className: 'btn btn-default',
	    positions: ['right-bottom', 'left-bottom', 'right-top', 'left-top']
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
	
	var _numeral = __webpack_require__(4);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	__webpack_require__(5);
	
	var _Calculator = __webpack_require__(6);
	
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _numeral = __webpack_require__(4);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
	var _Button = __webpack_require__(7);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Rect = __webpack_require__(10);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
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
	      amount: props.initialAmount,
	      format: '0,0[.]0[000000000]',
	      operator: ' ',
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
	      var windowRect = new _Rect2.default(window.pageYOffset || document.documentElement.scrollTop, window.pageXOffset || document.documentElement.scrollLeft, document.documentElement.clientWidth, document.documentElement.clientHeight);
	
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
	        newCalcRect = windowRect.getRelativeRect(calcRect, 'center');
	      }
	
	      this.setState({
	        x: newCalcRect.transformX,
	        y: newCalcRect.transformY
	      });
	    }
	  };
	
	  Calculator.prototype.componentDidMount = function componentDidMount() {
	    this.adjustPosition();
	  };
	
	  Calculator.prototype.render = function render() {
	    var _this2 = this;
	
	    var locale = _numeral2.default.localeData();
	    return React.createElement(
	      'div',
	      { ref: 'calculator', className: 'react-currency-calculator__calculator', style: { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' } },
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-header' },
	        React.createElement(_Button2.default, { classType: 'close', display: '\xD7', onClick: this.props.onClickClose })
	      ),
	      React.createElement(
	        'div',
	        { className: 'react-currency-calculator__calculator-display' },
	        React.createElement(
	          'div',
	          { className: 'react-currency-calculator__calculator-display-operator' },
	          this.state.operator
	        ),
	        React.createElement(
	          'div',
	          { className: 'react-currency-calculator__calculator-display-number' },
	          (0, _numeral2.default)(this.state.amount).format(this.state.format)
	        )
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
	        React.createElement(_Button2.default, { classType: 'number', display: locale.delimiters.decimal, onClick: function onClick() {
	            return _this2.onClickDecimal();
	          } }),
	        React.createElement(_Button2.default, { classType: 'enter', display: '=', onClick: function onClick() {
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
	
	var _numeral = __webpack_require__(4);
	
	var _numeral2 = _interopRequireDefault(_numeral);
	
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


/***/ }),
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
	      case 'right-bottom':
	        return rect.clone().transform(this.left - rect.originLeft, this.bottom - rect.originTop);
	      case 'left-bottom':
	        return rect.clone().transform(this.right - rect.originRight, this.bottom - rect.originTop);
	      case 'left-top':
	        return rect.clone().transform(this.right - rect.originRight, this.top - rect.originBottom);
	      case 'right-top':
	        return rect.clone().transform(this.left - rect.originLeft, this.top - rect.originBottom);
	      case 'center':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGIyYzIwOGIzZWFiN2I1MGY3NzEiLCJ3ZWJwYWNrOi8vLy4vZG9jcy1zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL34vbnVtZXJhbC9udW1lcmFsLmpzIiwid2VicGFjazovLy8uL34vbnVtZXJhbC9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL34vY2xhc3MtbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1wb3J0YWwvYnVpbGQvcG9ydGFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwidGVtcGxhdGUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBcHAiLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJhbW91bnQiLCJpbml0aWFsQW1vdW50Iiwib25tb3VzZW1vdmUiLCJlIiwic2V0U3RhdGUiLCJ4IiwiY2xpZW50WCIsInBhZ2VYT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsInkiLCJjbGllbnRZIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidG9nZ2xlQ2FsY3VsYXRvciIsIm9uQ2xpY2tBbW91bnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2xvc2VDYWxjdWxhdG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiY2xhc3NOYW1lIiwiZm9ybWF0IiwiY3VycmVuY3lGb3JtYXQiLCJyZWZzIiwiYnV0dG9uIiwicG9zaXRpb25zIiwiQ2FsY3VsYXRvciIsIm9wZXJhdG9yIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsImNhbGN1bGF0b3IiLCJ3aW5kb3dSZWN0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJidXR0b25SZWN0IiwiY3JlYXRlV2l0aEVsZW1lbnQiLCJjYWxjUmVjdCIsIm5ld0NhbGNSZWN0IiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsInBvc0tleSIsInJlY3QiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2NhbGVEYXRhIiwidHJhbnNmb3JtIiwib25DbGlja0Nsb3NlIiwiYWxsQ2xlYXIiLCJjbGVhciIsIm9uQ2xpY2tQZXJjZW50Iiwib25DbGlja0RpdiIsIm9uQ2xpY2tOdW1iZXIiLCJkaXNwbGF5Iiwib25DbGlja011bHRpIiwib25DbGlja1N1YiIsIm9uQ2xpY2tBZGQiLCJvbkNsaWNrWmVybyIsIm9uQ2xpY2tEb3VibGVaZXJvIiwiZGVsaW1pdGVycyIsImRlY2ltYWwiLCJvbkNsaWNrRGVjaW1hbCIsIm9uQ2xpY2tFbnRlciIsIm9uQ2xpY2siLCJjbGFzc1R5cGUiLCJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDZW50ZXJSZWN0IiwiY2VudGVyIiwiY2xvbmUiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVzdWx0IiwicmlnaHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJleHBlY3RlZFJlY3QiLCJlbGVtIiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0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RUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscURBQW9ELHlEQUF5RDtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFxRCxFQUFFOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTJCLGdDQUFnQztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUF5RCxZQUFZO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsMkJBQTJCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUE4QyxRQUFRO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUE4QyxFQUFFOztBQUVoRDs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7O0FBRUQ7QUFDQSxFQUFDOzs7Ozs7O0FDcC9CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QseUJBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSx5QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxFQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRUFBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEVBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNM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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLGdCQUFnQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRSxnQ0FBZ0M7QUFDakc7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3RUFBdUUsbUNBQW1DO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQThCO0FBQzlCLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7Ozs7Ozs7QUN6TkEsMkIiLCJmaWxlIjoiLi4vZG9jcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRiMmMyMDhiM2VhYjdiNTBmNzcxIiwiaW1wb3J0IHtBcHB9IGZyb20gJy4uL2luZGV4JztcblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICB2YXIgdGVtcGxhdGUgPSBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEFwcFxuICAgICAgbG9jYWxlPSdqYSdcbiAgICAgIGluaXRpYWxBbW91bnQ9ezEyMzAwLjQ5MzQ5NX1cbiAgICAgIGN1cnJlbmN5Rm9ybWF0PXsnJDAsMFsuXTAwJ31cbiAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXG4gICAgICBwb3NpdGlvbnM9e1sncmlnaHQtYm90dG9tJywgJ2xlZnQtYm90dG9tJywgJ3JpZ2h0LXRvcCcsICdsZWZ0LXRvcCddfVxuICAgIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJylcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RvY3Mtc3JjL2FwcC5qcyIsImltcG9ydCBBcHAgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9BcHAnO1xuXG5leHBvcnQge0FwcH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudFxuICAgIH1cblxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4OiBlLmNsaWVudFggKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSxcbiAgICAgICAgeTogZS5jbGllbnRZICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDYWxjdWxhdG9yKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6ICF0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSk7XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnRvZ2dsZUNhbGN1bGF0b3IoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VDYWxjdWxhdG9yKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCBsZWZ0OiAwfX0+eDoge3RoaXMuc3RhdGUueH0geToge3RoaXMuc3RhdGUueX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrQW1vdW50KGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmFtb3VudCkuZm9ybWF0KHRoaXMucHJvcHMuY3VycmVuY3lGb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2sgaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZUNhbGN1bGF0b3IoKX0+XG4gICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgIGluaXRpYWxBbW91bnQ9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnRvZ2dsZUNhbGN1bGF0b3IoKX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9BcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgQHByZXNlcnZlXG4gKiBudW1lcmFsLmpzXG4gKiB2ZXJzaW9uIDogMi4wLjZcbiAqIGF1dGhvciA6IEFkYW0gRHJhcGVyXG4gKiBsaWNlbnNlIDogTUlUXG4gKiBodHRwOi8vYWRhbXdkcmFwZXIuZ2l0aHViLmNvbS9OdW1lcmFsLWpzL1xuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnbG9iYWwubnVtZXJhbCA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIFZhcmlhYmxlc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHZhciBudW1lcmFsLFxuICAgICAgICBfLFxuICAgICAgICBWRVJTSU9OID0gJzIuMC42JyxcbiAgICAgICAgZm9ybWF0cyA9IHt9LFxuICAgICAgICBsb2NhbGVzID0ge30sXG4gICAgICAgIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY3VycmVudExvY2FsZTogJ2VuJyxcbiAgICAgICAgICAgIHplcm9Gb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICBudWxsRm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdDogJzAsMCcsXG4gICAgICAgICAgICBzY2FsZVBlcmNlbnRCeTEwMDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgY3VycmVudExvY2FsZTogZGVmYXVsdHMuY3VycmVudExvY2FsZSxcbiAgICAgICAgICAgIHplcm9Gb3JtYXQ6IGRlZmF1bHRzLnplcm9Gb3JtYXQsXG4gICAgICAgICAgICBudWxsRm9ybWF0OiBkZWZhdWx0cy5udWxsRm9ybWF0LFxuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdDogZGVmYXVsdHMuZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgICAgIHNjYWxlUGVyY2VudEJ5MTAwOiBkZWZhdWx0cy5zY2FsZVBlcmNlbnRCeTEwMFxuICAgICAgICB9O1xuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIENvbnN0cnVjdG9yc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8vIE51bWVyYWwgcHJvdG90eXBlIG9iamVjdFxuICAgIGZ1bmN0aW9uIE51bWVyYWwoaW5wdXQsIG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVtYmVyO1xuICAgIH1cblxuICAgIG51bWVyYWwgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbixcbiAgICAgICAgICAgIHJlZ2V4cDtcblxuICAgICAgICBpZiAobnVtZXJhbC5pc051bWVyYWwoaW5wdXQpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IDAgfHwgdHlwZW9mIGlucHV0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSBudWxsIHx8IF8uaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuemVyb0Zvcm1hdCAmJiBpbnB1dCA9PT0gb3B0aW9ucy56ZXJvRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxGb3JtYXQgJiYgaW5wdXQgPT09IG9wdGlvbnMubnVsbEZvcm1hdCB8fCAhaW5wdXQucmVwbGFjZSgvW14wLTldKy9nLCAnJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtpbmQgaW4gZm9ybWF0cykge1xuICAgICAgICAgICAgICAgICAgICByZWdleHAgPSB0eXBlb2YgZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0ID09PSAnZnVuY3Rpb24nID8gZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0KCkgOiBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2V4cCAmJiBpbnB1dC5tYXRjaChyZWdleHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0c1traW5kXS51bmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uID0gdW5mb3JtYXRGdW5jdGlvbiB8fCBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXI7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZm9ybWF0RnVuY3Rpb24oaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIoaW5wdXQpfHwgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTnVtZXJhbChpbnB1dCwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvLyB2ZXJzaW9uIG51bWJlclxuICAgIG51bWVyYWwudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgICAvLyBjb21wYXJlIG51bWVyYWwgb2JqZWN0XG4gICAgbnVtZXJhbC5pc051bWVyYWwgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE51bWVyYWw7XG4gICAgfTtcblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbnNcbiAgICBudW1lcmFsLl8gPSBfID0ge1xuICAgICAgICAvLyBmb3JtYXRzIG51bWJlcnMgc2VwYXJhdG9ycywgZGVjaW1hbHMgcGxhY2VzLCBzaWducywgYWJicmV2aWF0aW9uc1xuICAgICAgICBudW1iZXJUb0Zvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IGxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIG5lZ1AgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcHREZWMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBsZWFkaW5nQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgIGFiYnIgPSAnJyxcbiAgICAgICAgICAgICAgICB0cmlsbGlvbiA9IDEwMDAwMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgYmlsbGlvbiA9IDEwMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgbWlsbGlvbiA9IDEwMDAwMDAsXG4gICAgICAgICAgICAgICAgdGhvdXNhbmQgPSAxMDAwLFxuICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJyxcbiAgICAgICAgICAgICAgICBuZWcgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UsIC8vIGZvcmNlIGFiYnJldmlhdGlvblxuICAgICAgICAgICAgICAgIGFicyxcbiAgICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIGludCxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgc2lnbmVkLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kcyxcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBuZXZlciBmb3JtYXQgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IDA7XG5cbiAgICAgICAgICAgIGFicyA9IE1hdGguYWJzKHZhbHVlKTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIHdlIHNob3VsZCB1c2UgcGFyZW50aGVzZXMgZm9yIG5lZ2F0aXZlIG51bWJlciBvciBpZiB3ZSBzaG91bGQgcHJlZml4IHdpdGggYSBzaWduXG4gICAgICAgICAgICAvLyBpZiBib3RoIGFyZSBwcmVzZW50IHdlIGRlZmF1bHQgdG8gcGFyZW50aGVzZXNcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKCcpKSB7XG4gICAgICAgICAgICAgICAgbmVnUCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1tcXCh8XFwpXS9nLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcrJykgfHwgbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJy0nKSkge1xuICAgICAgICAgICAgICAgIHNpZ25lZCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcrJykgPyBmb3JtYXQuaW5kZXhPZignKycpIDogdmFsdWUgPCAwID8gZm9ybWF0LmluZGV4T2YoJy0nKSA6IC0xO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9bXFwrfFxcLV0vZywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZWUgaWYgYWJicmV2aWF0aW9uIGlzIHdhbnRlZFxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdhJykpIHtcbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UgPSBmb3JtYXQubWF0Y2goL2Eoa3xtfGJ8dCk/Lyk7XG5cbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UgPSBhYmJyRm9yY2UgPyBhYmJyRm9yY2VbMV0gOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgYWJicmV2aWF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgYScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFiYnIgPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobmV3IFJlZ0V4cChhYmJyICsgJ2Fba21idF0/JyksICcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhYnMgPj0gdHJpbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICd0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cmlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gdHJpbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCB0cmlsbGlvbiAmJiBhYnMgPj0gYmlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJpbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gYmlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IGJpbGxpb24gJiYgYWJzID49IG1pbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdtJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBtaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIG1pbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCBtaWxsaW9uICYmIGFicyA+PSB0aG91c2FuZCAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ2snKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3VzYW5kXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMudGhvdXNhbmQ7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyB0aG91c2FuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvcHRpb25hbCBkZWNpbWFsc1xuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdbLl0nKSkge1xuICAgICAgICAgICAgICAgIG9wdERlYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ1suXScsICcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJyZWFrIG51bWJlciBhbmQgZm9ybWF0XG4gICAgICAgICAgICBpbnQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICBwcmVjaXNpb24gPSBmb3JtYXQuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIHRob3VzYW5kcyA9IGZvcm1hdC5pbmRleE9mKCcsJyk7XG4gICAgICAgICAgICBsZWFkaW5nQ291bnQgPSAoZm9ybWF0LnNwbGl0KCcuJylbMF0uc3BsaXQoJywnKVswXS5tYXRjaCgvMC9nKSB8fCBbXSkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhwcmVjaXNpb24sICdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uLnJlcGxhY2UoJ10nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbi5zcGxpdCgnWycpO1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIChwcmVjaXNpb25bMF0ubGVuZ3RoICsgcHJlY2lzaW9uWzFdLmxlbmd0aCksIHJvdW5kaW5nRnVuY3Rpb24sIHByZWNpc2lvblsxXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uLmxlbmd0aCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW50ID0gZGVjaW1hbC5zcGxpdCgnLicpWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhkZWNpbWFsLCAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsICsgZGVjaW1hbC5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0RGVjICYmIE51bWJlcihkZWNpbWFsLnNsaWNlKDEpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgMCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGFiYnJldmlhdGlvbiBhZ2FpbiBhZnRlciByb3VuZGluZ1xuICAgICAgICAgICAgaWYgKGFiYnIgJiYgIWFiYnJGb3JjZSAmJiBOdW1iZXIoaW50KSA+PSAxMDAwICYmIGFiYnIgIT09IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gU3RyaW5nKE51bWJlcihpbnQpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFiYnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy50aG91c2FuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBmb3JtYXQgbnVtYmVyXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGludCwgJy0nKSkge1xuICAgICAgICAgICAgICAgIGludCA9IGludC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBuZWcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW50Lmxlbmd0aCA8IGxlYWRpbmdDb3VudCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZWFkaW5nQ291bnQgLSBpbnQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGludCA9ICcwJyArIGludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aG91c2FuZHMgPiAtMSkge1xuICAgICAgICAgICAgICAgIGludCA9IGludC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxJyArIGxvY2FsZS5kZWxpbWl0ZXJzLnRob3VzYW5kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IGludCArIGRlY2ltYWwgKyAoYWJiciA/IGFiYnIgOiAnJyk7XG5cbiAgICAgICAgICAgIGlmIChuZWdQKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKG5lZ1AgJiYgbmVnID8gJygnIDogJycpICsgb3V0cHV0ICsgKG5lZ1AgJiYgbmVnID8gJyknIDogJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmVkID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gc2lnbmVkID09PSAwID8gKG5lZyA/ICctJyA6ICcrJykgKyBvdXRwdXQgOiBvdXRwdXQgKyAobmVnID8gJy0nIDogJysnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5lZykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnLScgKyBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICAvLyB1bmZvcm1hdHMgbnVtYmVycyBzZXBhcmF0b3JzLCBkZWNpbWFscyBwbGFjZXMsIHNpZ25zLCBhYmJyZXZpYXRpb25zXG4gICAgICAgIHN0cmluZ1RvTnVtYmVyOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW29wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgc3RyaW5nT3JpZ2luYWwgPSBzdHJpbmcsXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIG1pbGxpb246IDYsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpb246IDksXG4gICAgICAgICAgICAgICAgICAgIHRyaWxsaW9uOiAxMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgcmVnZXhwO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy56ZXJvRm9ybWF0ICYmIHN0cmluZyA9PT0gb3B0aW9ucy56ZXJvRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxGb3JtYXQgJiYgc3RyaW5nID09PSBvcHRpb25zLm51bGxGb3JtYXQgfHwgIXN0cmluZy5yZXBsYWNlKC9bXjAtOV0rL2csICcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZShsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsLCAnLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoYWJicmV2aWF0aW9uIGluIGFiYnJldmlhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgnW15hLXpBLVpdJyArIGxvY2FsZS5hYmJyZXZpYXRpb25zW2FiYnJldmlhdGlvbl0gKyAnKD86XFxcXCl8KFxcXFwnICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCArICcpPyg/OlxcXFwpKT8pPyQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nT3JpZ2luYWwubWF0Y2gocmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKj0gTWF0aC5wb3coMTAsIGFiYnJldmlhdGlvbnNbYWJicmV2aWF0aW9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSAoc3RyaW5nLnNwbGl0KCctJykubGVuZ3RoICsgTWF0aC5taW4oc3RyaW5nLnNwbGl0KCcoJykubGVuZ3RoIC0gMSwgc3RyaW5nLnNwbGl0KCcpJykubGVuZ3RoIC0gMSkpICUgMiA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24gbnVtYmVyc1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXjAtOVxcLl0rL2csICcnKTtcblxuICAgICAgICAgICAgICAgIHZhbHVlICo9IE51bWJlcihzdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTmFOOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogZnVuY3Rpb24oc3RyaW5nLCBzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuaW5kZXhPZihzZWFyY2gpICE9PSAtMTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbihzdHJpbmcsIHN1YlN0cmluZywgc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgc3RhcnQpICsgc3ViU3RyaW5nICsgc3RyaW5nLnNsaWNlKHN0YXJ0KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2sgLyosIGluaXRpYWxWYWx1ZSovKSB7XG4gICAgICAgICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdChhcnJheSksXG4gICAgICAgICAgICAgICAgbGVuID0gdC5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICAgICAgayA9IDAsXG4gICAgICAgICAgICAgICAgdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuICYmICEoayBpbiB0KSkge1xuICAgICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGsgPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRbaysrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoayBpbiB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIHRba10sIGssIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBtdWx0aXBsaWVyIG5lY2Vzc2FyeSB0byBtYWtlIHggPj0gMSxcbiAgICAgICAgICogZWZmZWN0aXZlbHkgZWxpbWluYXRpbmcgbWlzY2FsY3VsYXRpb25zIGNhdXNlZCBieVxuICAgICAgICAgKiBmaW5pdGUgcHJlY2lzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgbXVsdGlwbGllcjogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHgudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMiA/IDEgOiBNYXRoLnBvdygxMCwgcGFydHNbMV0ubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdpdmVuIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmV0dXJucyB0aGUgbWF4aW11bVxuICAgICAgICAgKiBtdWx0aXBsaWVyIHRoYXQgbXVzdCBiZSB1c2VkIHRvIG5vcm1hbGl6ZSBhbiBvcGVyYXRpb24gaW52b2x2aW5nXG4gICAgICAgICAqIGFsbCBvZiB0aGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgY29ycmVjdGlvbkZhY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oYWNjdW0sIG5leHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW4gPSBfLm11bHRpcGxpZXIobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtID4gbW4gPyBhY2N1bSA6IG1uO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0b0ZpeGVkKCkgdGhhdCB0cmVhdHMgZmxvYXRzIG1vcmUgbGlrZSBkZWNpbWFsc1xuICAgICAgICAgKlxuICAgICAgICAgKiBGaXhlcyBiaW5hcnkgcm91bmRpbmcgaXNzdWVzIChlZy4gKDAuNjE1KS50b0ZpeGVkKDIpID09PSAnMC42MScpIHRoYXQgcHJlc2VudFxuICAgICAgICAgKiBwcm9ibGVtcyBmb3IgYWNjb3VudGluZy0gYW5kIGZpbmFuY2UtcmVsYXRlZCBzb2Z0d2FyZS5cbiAgICAgICAgICovXG4gICAgICAgIHRvRml4ZWQ6IGZ1bmN0aW9uKHZhbHVlLCBtYXhEZWNpbWFscywgcm91bmRpbmdGdW5jdGlvbiwgb3B0aW9uYWxzKSB7XG4gICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICBtaW5EZWNpbWFscyA9IG1heERlY2ltYWxzIC0gKG9wdGlvbmFscyB8fCAwKSxcbiAgICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsc1JlZ0V4cCxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIC8vIFVzZSB0aGUgc21hbGxlc3QgcHJlY2lzaW9uIHZhbHVlIHBvc3NpYmxlIHRvIGF2b2lkIGVycm9ycyBmcm9tIGZsb2F0aW5nIHBvaW50IHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbiA9IE1hdGgubWluKE1hdGgubWF4KHNwbGl0VmFsdWVbMV0ubGVuZ3RoLCBtaW5EZWNpbWFscyksIG1heERlY2ltYWxzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24gPSBtaW5EZWNpbWFscztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG93ZXIgPSBNYXRoLnBvdygxMCwgYm91bmRlZFByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIC8vIE11bHRpcGx5IHVwIGJ5IHByZWNpc2lvbiwgcm91bmQgYWNjdXJhdGVseSwgdGhlbiBkaXZpZGUgYW5kIHVzZSBuYXRpdmUgdG9GaXhlZCgpOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHJvdW5kaW5nRnVuY3Rpb24odmFsdWUgKyAnZSsnICsgYm91bmRlZFByZWNpc2lvbikgLyBwb3dlcikudG9GaXhlZChib3VuZGVkUHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbmFscyA+IG1heERlY2ltYWxzIC0gYm91bmRlZFByZWNpc2lvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ1xcXFwuPzB7MSwnICsgKG9wdGlvbmFscyAtIChtYXhEZWNpbWFscyAtIGJvdW5kZWRQcmVjaXNpb24pKSArICd9JCcpO1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKG9wdGlvbmFsc1JlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGF2YWxpYWJsZSBvcHRpb25zXG4gICAgbnVtZXJhbC5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIGF2YWxpYWJsZSBmb3JtYXRzXG4gICAgbnVtZXJhbC5mb3JtYXRzID0gZm9ybWF0cztcblxuICAgIC8vIGF2YWxpYWJsZSBmb3JtYXRzXG4gICAgbnVtZXJhbC5sb2NhbGVzID0gbG9jYWxlcztcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgY3VycmVudCBsb2NhbGUuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4gICAgLy8gbG9jYWxlIGtleS5cbiAgICBudW1lcmFsLmxvY2FsZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBvcHRpb25zLmN1cnJlbnRMb2NhbGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zLmN1cnJlbnRMb2NhbGU7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBsb2FkZWQgbG9jYWxlIGRhdGEuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnRcbiAgICAvLyBnbG9iYWwgbG9jYWxlIG9iamVjdC5cbiAgICBudW1lcmFsLmxvY2FsZURhdGEgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGVzW29wdGlvbnMuY3VycmVudExvY2FsZV07XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIWxvY2FsZXNba2V5XSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxvY2FsZSA6ICcgKyBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNba2V5XTtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgb3B0aW9uc1twcm9wZXJ0eV0gPSBkZWZhdWx0c1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbnVtZXJhbC56ZXJvRm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMuemVyb0Zvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6IG51bGw7XG4gICAgfTtcblxuICAgIG51bWVyYWwubnVsbEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5udWxsRm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogbnVsbDtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5kZWZhdWx0Rm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdEZvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6ICcwLjAnO1xuICAgIH07XG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgZm9ybWF0KSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXNbdHlwZSArICdzJ11bbmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobmFtZSArICcgJyArIHR5cGUgKyAnIGFscmVhZHkgcmVnaXN0ZXJlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdHlwZSArICdzJ11bbmFtZV0gPSBmb3JtYXQ7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9O1xuXG5cbiAgICBudW1lcmFsLnZhbGlkYXRlID0gZnVuY3Rpb24odmFsLCBjdWx0dXJlKSB7XG4gICAgICAgIHZhciBfZGVjaW1hbFNlcCxcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCxcbiAgICAgICAgICAgIF9jdXJyU3ltYm9sLFxuICAgICAgICAgICAgX3ZhbEFycmF5LFxuICAgICAgICAgICAgX2FiYnJPYmosXG4gICAgICAgICAgICBfdGhvdXNhbmRSZWdFeCxcbiAgICAgICAgICAgIGxvY2FsZURhdGEsXG4gICAgICAgICAgICB0ZW1wO1xuXG4gICAgICAgIC8vY29lcmNlIHZhbCB0byBzdHJpbmdcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWwgKz0gJyc7XG5cbiAgICAgICAgICAgIGlmIChjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ051bWVyYWwuanM6IFZhbHVlIGlzIG5vdCBzdHJpbmcuIEl0IGhhcyBiZWVuIGNvLWVyY2VkIHRvOiAnLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy90cmltIHdoaXRlc3BhY2VzIGZyb20gZWl0aGVyIHNpZGVzXG4gICAgICAgIHZhbCA9IHZhbC50cmltKCk7XG5cbiAgICAgICAgLy9pZiB2YWwgaXMganVzdCBkaWdpdHMgcmV0dXJuIHRydWVcbiAgICAgICAgaWYgKCEhdmFsLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHZhbCBpcyBlbXB0eSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRoZSBkZWNpbWFsIGFuZCB0aG91c2FuZHMgc2VwYXJhdG9yIGZyb20gbnVtZXJhbC5sb2NhbGVEYXRhXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZSBjdWx0dXJlIGlzIHVuZGVyc3Rvb2QgYnkgbnVtZXJhbC4gaWYgbm90LCBkZWZhdWx0IGl0IHRvIGN1cnJlbnQgbG9jYWxlXG4gICAgICAgICAgICBsb2NhbGVEYXRhID0gbnVtZXJhbC5sb2NhbGVEYXRhKGN1bHR1cmUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2NhbGVEYXRhID0gbnVtZXJhbC5sb2NhbGVEYXRhKG51bWVyYWwubG9jYWxlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXR1cCB0aGUgZGVsaW1pdGVycyBhbmQgY3VycmVuY3kgc3ltYm9sIGJhc2VkIG9uIGN1bHR1cmUvbG9jYWxlXG4gICAgICAgIF9jdXJyU3ltYm9sID0gbG9jYWxlRGF0YS5jdXJyZW5jeS5zeW1ib2w7XG4gICAgICAgIF9hYmJyT2JqID0gbG9jYWxlRGF0YS5hYmJyZXZpYXRpb25zO1xuICAgICAgICBfZGVjaW1hbFNlcCA9IGxvY2FsZURhdGEuZGVsaW1pdGVycy5kZWNpbWFsO1xuICAgICAgICBpZiAobG9jYWxlRGF0YS5kZWxpbWl0ZXJzLnRob3VzYW5kcyA9PT0gJy4nKSB7XG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAgPSAnXFxcXC4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Rob3VzYW5kU2VwID0gbG9jYWxlRGF0YS5kZWxpbWl0ZXJzLnRob3VzYW5kcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkYXRpbmcgY3VycmVuY3kgc3ltYm9sXG4gICAgICAgIHRlbXAgPSB2YWwubWF0Y2goL15bXlxcZF0rLyk7XG4gICAgICAgIGlmICh0ZW1wICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyKDEpO1xuICAgICAgICAgICAgaWYgKHRlbXBbMF0gIT09IF9jdXJyU3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy92YWxpZGF0aW5nIGFiYnJldmlhdGlvbiBzeW1ib2xcbiAgICAgICAgdGVtcCA9IHZhbC5tYXRjaCgvW15cXGRdKyQvKTtcbiAgICAgICAgaWYgKHRlbXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICBpZiAodGVtcFswXSAhPT0gX2FiYnJPYmoudGhvdXNhbmQgJiYgdGVtcFswXSAhPT0gX2FiYnJPYmoubWlsbGlvbiAmJiB0ZW1wWzBdICE9PSBfYWJick9iai5iaWxsaW9uICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLnRyaWxsaW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3Rob3VzYW5kUmVnRXggPSBuZXcgUmVnRXhwKF90aG91c2FuZFNlcCArICd7Mn0nKTtcblxuICAgICAgICBpZiAoIXZhbC5tYXRjaCgvW15cXGQuLF0vZykpIHtcbiAgICAgICAgICAgIF92YWxBcnJheSA9IHZhbC5zcGxpdChfZGVjaW1hbFNlcCk7XG4gICAgICAgICAgICBpZiAoX3ZhbEFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfdmFsQXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrLipcXGQkLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsQXJyYXlbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpICYmICEhIF92YWxBcnJheVsxXS5tYXRjaCgvXlxcZCskLykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKy4qXFxkJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpICYmICEhIF92YWxBcnJheVsxXS5tYXRjaCgvXlxcZCskLykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTnVtZXJhbCBQcm90b3R5cGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBudW1lcmFsLmZuID0gTnVtZXJhbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1lcmFsKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKGlucHV0U3RyaW5nLCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl92YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBpbnB1dFN0cmluZyB8fCBvcHRpb25zLmRlZmF1bHRGb3JtYXQsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb247XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgcm91bmRpbmdGdW5jdGlvblxuICAgICAgICAgICAgcm91bmRpbmdGdW5jdGlvbiA9IHJvdW5kaW5nRnVuY3Rpb24gfHwgTWF0aC5yb3VuZDtcblxuICAgICAgICAgICAgLy8gZm9ybWF0IGJhc2VkIG9uIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDAgJiYgb3B0aW9ucy56ZXJvRm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3B0aW9ucy56ZXJvRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCAmJiBvcHRpb25zLm51bGxGb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvcHRpb25zLm51bGxGb3JtYXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa2luZCBpbiBmb3JtYXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQubWF0Y2goZm9ybWF0c1traW5kXS5yZWdleHBzLmZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0c1traW5kXS5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRGdW5jdGlvbiB8fCBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBmb3JtYXRGdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yLmNhbGwobnVsbCwgdGhpcy5fdmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtICsgTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY3Vycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrLCAwKSAvIGNvcnJGYWN0b3I7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBzdWJ0cmFjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yLmNhbGwobnVsbCwgdGhpcy5fdmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtIC0gTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY3Vycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3ZhbHVlXSwgY2JhY2ssIE1hdGgucm91bmQodGhpcy5fdmFsdWUgKiBjb3JyRmFjdG9yKSkgLyBjb3JyRmFjdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgbXVsdGlwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3Vycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYWNjdW0gKiBjb3JyRmFjdG9yKSAqIE1hdGgucm91bmQoY3VyciAqIGNvcnJGYWN0b3IpIC8gTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrLCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpdmlkZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhY2N1bSAqIGNvcnJGYWN0b3IpIC8gTWF0aC5yb3VuZChjdXJyICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMobnVtZXJhbCh0aGlzLl92YWx1ZSkuc3VidHJhY3QodmFsdWUpLnZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgRGVmYXVsdCBMb2NhbGUgJiYgRm9ybWF0XG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbihudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+KG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2JwcycsIHtcbiAgICAgICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IC8oQlBTKS8sXG4gICAgICAgICAgICAgICAgdW5mb3JtYXQ6IC8oQlBTKS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BhY2UgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIEJQUycpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwMDtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgQlBTXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9CUFMvLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKG91dHB1dCwgJyknKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5zcGxpY2UoLTEsIDAsIHNwYWNlICsgJ0JQUycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBzcGFjZSArICdCUFMnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiArKG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpICogMC4wMDAxKS50b0ZpeGVkKDE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlY2ltYWwgPSB7XG4gICAgICAgICAgICBiYXNlOiAxMDAwLFxuICAgICAgICAgICAgc3VmZml4ZXM6IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddXG4gICAgICAgIH0sXG4gICAgICAgIGJpbmFyeSA9IHtcbiAgICAgICAgICAgIGJhc2U6IDEwMjQsXG4gICAgICAgICAgICBzdWZmaXhlczogWydCJywgJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXVxuICAgICAgICB9O1xuXG4gICAgdmFyIGFsbFN1ZmZpeGVzID0gIGRlY2ltYWwuc3VmZml4ZXMuY29uY2F0KGJpbmFyeS5zdWZmaXhlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNpbWFsLnN1ZmZpeGVzLmluZGV4T2YoaXRlbSkgPCAwO1xuICAgICAgICB9KSk7XG4gICAgICAgIHZhciB1bmZvcm1hdFJlZ2V4ID0gYWxsU3VmZml4ZXMuam9pbignfCcpO1xuICAgICAgICAvLyBBbGxvdyBzdXBwb3J0IGZvciBCUFMgKGh0dHA6Ly93d3cuaW52ZXN0b3BlZGlhLmNvbS90ZXJtcy9iL2Jhc2lzcG9pbnQuYXNwKVxuICAgICAgICB1bmZvcm1hdFJlZ2V4ID0gJygnICsgdW5mb3JtYXRSZWdleC5yZXBsYWNlKCdCJywgJ0IoPyFQUyknKSArICcpJztcblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdieXRlcycsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKFswXFxzXWk/YikvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IG5ldyBSZWdFeHAodW5mb3JtYXRSZWdleClcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGJ5dGVzID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ2liJykgPyBiaW5hcnkgOiBkZWNpbWFsLFxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgYicpIHx8IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgaWInKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/aT9iLywgJycpO1xuXG4gICAgICAgICAgICBmb3IgKHBvd2VyID0gMDsgcG93ZXIgPD0gYnl0ZXMuc3VmZml4ZXMubGVuZ3RoOyBwb3dlcisrKSB7XG4gICAgICAgICAgICAgICAgbWluID0gTWF0aC5wb3coYnl0ZXMuYmFzZSwgcG93ZXIpO1xuICAgICAgICAgICAgICAgIG1heCA9IE1hdGgucG93KGJ5dGVzLmJhc2UsIHBvd2VyICsgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IDAgfHwgdmFsdWUgPj0gbWluICYmIHZhbHVlIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeCArPSBieXRlcy5zdWZmaXhlc1twb3dlcl07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBtaW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIHN1ZmZpeDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZyksXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHBvd2VyID0gZGVjaW1hbC5zdWZmaXhlcy5sZW5ndGggLSAxOyBwb3dlciA+PSAwOyBwb3dlci0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCBkZWNpbWFsLnN1ZmZpeGVzW3Bvd2VyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllciA9IE1hdGgucG93KGRlY2ltYWwuYmFzZSwgcG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCBiaW5hcnkuc3VmZml4ZXNbcG93ZXJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyID0gTWF0aC5wb3coYmluYXJ5LmJhc2UsIHBvd2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSAoYnl0ZXNNdWx0aXBsaWVyIHx8IDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnY3VycmVuY3knLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhcXCQpL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIHN5bWJvbHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogZm9ybWF0Lm1hdGNoKC9eKFtcXCt8XFwtfFxcKHxcXHN8XFwkXSopLylbMF0sXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiBmb3JtYXQubWF0Y2goLyhbXFwrfFxcLXxcXCl8XFxzfFxcJF0qKSQvKVswXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBzdHJpcCBmb3JtYXQgb2Ygc3BhY2VzIGFuZCAkXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP1xcJFxccz8vLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCB0aGUgbnVtYmVyXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYmVmb3JlIGFuZCBhZnRlciBiYXNlZCBvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmJlZm9yZSA9IHN5bWJvbHMuYmVmb3JlLnJlcGxhY2UoL1tcXC1cXChdLywgJycpO1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYWZ0ZXIgPSBzeW1ib2xzLmFmdGVyLnJlcGxhY2UoL1tcXC1cXCldLywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDAgJiYgKCFudW1lcmFsLl8uaW5jbHVkZXMoc3ltYm9scy5iZWZvcmUsICctJykgJiYgIW51bWVyYWwuXy5pbmNsdWRlcyhzeW1ib2xzLmJlZm9yZSwgJygnKSkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmJlZm9yZSA9ICctJyArIHN5bWJvbHMuYmVmb3JlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBiZWZvcmUgc3ltYm9sXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ltYm9scy5iZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xzLmJlZm9yZVtpXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLmluc2VydChvdXRwdXQsIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLmluc2VydChvdXRwdXQsICcgJywgaSArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGFmdGVyIHN5bWJvbFxuICAgICAgICAgICAgZm9yIChpID0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbHMuYWZ0ZXJbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICckJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGkgPT09IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMSA/IG91dHB1dCArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wgOiBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCwgLShzeW1ib2xzLmFmdGVyLmxlbmd0aCAtICgxICsgaSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGkgPT09IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMSA/IG91dHB1dCArICcgJyA6IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCAnICcsIC0oc3ltYm9scy5hZnRlci5sZW5ndGggLSAoMSArIGkpICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbC5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdleHBvbmVudGlhbCcsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKGVcXCt8ZS0pLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKGVcXCt8ZS0pL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQsXG4gICAgICAgICAgICAgICAgZXhwb25lbnRpYWwgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFudW1lcmFsLl8uaXNOYU4odmFsdWUpID8gdmFsdWUudG9FeHBvbmVudGlhbCgpIDogJzBlKzAnLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gZXhwb25lbnRpYWwuc3BsaXQoJ2UnKTtcblxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2VbXFwrfFxcLV17MX0wLywgJycpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQoTnVtYmVyKHBhcnRzWzBdKSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArICdlJyArIHBhcnRzWzFdO1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCAnZSsnKSA/IHN0cmluZy5zcGxpdCgnZSsnKSA6IHN0cmluZy5zcGxpdCgnZS0nKSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihwYXJ0c1swXSksXG4gICAgICAgICAgICAgICAgcG93ZXIgPSBOdW1iZXIocGFydHNbMV0pO1xuXG4gICAgICAgICAgICBwb3dlciA9IG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsICdlLScpID8gcG93ZXIgKj0gLTEgOiBwb3dlcjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBudW1lcmFsLl8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3VyciksXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IChhY2N1bSAqIGNvcnJGYWN0b3IpICogKGN1cnIgKiBjb3JyRmFjdG9yKSAvIChjb3JyRmFjdG9yICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bWVyYWwuXy5yZWR1Y2UoW3ZhbHVlLCBNYXRoLnBvdygxMCwgcG93ZXIpXSwgY2JhY2ssIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ29yZGluYWwnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhvKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgbycpID8gJyAnIDogJyc7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/by8sICcnKTtcblxuICAgICAgICAgICAgb3JkaW5hbCArPSBsb2NhbGUub3JkaW5hbCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIG9yZGluYWw7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAncGVyY2VudGFnZScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKCUpLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKCUpL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBzcGFjZSA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgJScpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5vcHRpb25zLnNjYWxlUGVyY2VudEJ5MTAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSAlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP1xcJS8sICcnKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKG91dHB1dCwgJyknKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5zcGxpdCgnJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQuc3BsaWNlKC0xLCAwLCBzcGFjZSArICclJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIHNwYWNlICsgJyUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZyk7XG4gICAgICAgICAgICBpZiAobnVtZXJhbC5vcHRpb25zLnNjYWxlUGVyY2VudEJ5MTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciAqIDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ3RpbWUnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyg6KS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyg6KS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjAgLyA2MCksXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gKGhvdXJzICogNjAgKiA2MCkpIC8gNjApLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLnJvdW5kKHZhbHVlIC0gKGhvdXJzICogNjAgKiA2MCkgLSAobWludXRlcyAqIDYwKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBob3VycyArICc6JyArIChtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcykgKyAnOicgKyAoc2Vjb25kcyA8IDEwID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgdGltZUFycmF5ID0gc3RyaW5nLnNwbGl0KCc6JyksXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IDA7XG5cbiAgICAgICAgICAgIC8vIHR1cm4gaG91cnMgYW5kIG1pbnV0ZXMgaW50byBzZWNvbmRzIGFuZCBhZGQgdGhlbSBhbGwgdXBcbiAgICAgICAgICAgIGlmICh0aW1lQXJyYXkubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gaG91cnNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzBdKSAqIDYwICogNjApO1xuICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzFdKSAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyBOdW1iZXIodGltZUFycmF5WzJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGltZUFycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzBdKSAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyBOdW1iZXIodGltZUFycmF5WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cbnJldHVybiBudW1lcmFsO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L251bWVyYWwvbnVtZXJhbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiEgQHByZXNlcnZlXG4gKiBudW1lcmFsLmpzXG4gKiBsb2NhbGVzIDogMi4wLjZcbiAqIGxpY2Vuc2UgOiBNSVRcbiAqIGh0dHA6Ly9hZGFtd2RyYXBlci5naXRodWIuY29tL051bWVyYWwtanMvXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ251bWVyYWwnXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJy4vbnVtZXJhbCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGdsb2JhbC5udW1lcmFsKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uIChudW1lcmFsKSB7XG4gICAgXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdiZycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczogeyAvLyBJIGZvdW5kIHRoZXNlIGhlcmUgaHR0cDovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8yOC92ZXJpZnkvbnVtYmVycy9iZy5odG1sXG4gICAgICAgICAgICB0aG91c2FuZDogJ9GF0LjQuycsXG4gICAgICAgICAgICBtaWxsaW9uOiAn0LzQu9C9JyxcbiAgICAgICAgICAgIGJpbGxpb246ICfQvNC70YDQtCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ9GC0YDQu9C9J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICAvLyBnb29nbGUgdHJhbnNsYXRlIHN1Z2dlc3RzOlxuICAgICAgICAgICAgLy8gMXN0PTEt0LLQuDsgMm5kPTIt0YDQuDsgN3RoPTct0LzQuDtcbiAgICAgICAgICAgIC8vIDh0aD04LdC80LggYW5kIG1hbnkgb3RoZXJzIGVuZCB3aXRoIC3RgtC4XG4gICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAzcmQ9My3RgtC4XG4gICAgICAgICAgICAvLyBIb3dldmVyIHNpbmNlIEkndmUgc2VlbiBzdWdnZXN0aW9ucyB0aGF0IGluXG4gICAgICAgICAgICAvLyBCdWxnYXJpYW4gdGhlIG9yZGluYWwgY2FuIGJlIHRha2VuIGluXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIEkndmUgb3B0ZWQgdG8gd2ltcCBvdXQgb24gY29tbWl0aW5nIHRoYXQgdG8gY29kZVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn0LvQsidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2NocycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfljYMnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ+eZvuS4hycsXG4gICAgICAgICAgICBiaWxsaW9uOiAn5Y2B5Lq/JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn5YWGJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnwqUnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnY3MnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAndGlzLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlsLicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdLxI0nXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGEtZGsnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlvJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdtaWEnLFxuICAgICAgICAgICAgdHJpbGxpb246ICdiJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnREtLJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2RlLWNoJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnQ0hGJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2RlJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuLWF1Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fiAobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnJCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlbi1nYicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAofn4gKG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ8KjJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuLXphJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fiAobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnUidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlcy1lcycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKGIgPT09IDEgfHwgYiA9PT0gMykgPyAnZXInIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnZG8nIDpcbiAgICAgICAgICAgICAgICAgICAgKGIgPT09IDcgfHwgYiA9PT0gMCkgPyAnbW8nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChiID09PSA4KSA/ICd2bycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChiID09PSA5KSA/ICdubycgOiAndG8nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21tJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAoYiA9PT0gMSB8fCBiID09PSAzKSA/ICdlcicgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICdkbycgOlxuICAgICAgICAgICAgICAgIChiID09PSA3IHx8IGIgPT09IDApID8gJ21vJyA6XG5cdFx0KGIgPT09IDgpID8gJ3ZvJyA6XG5cdFx0KGIgPT09IDkpID8gJ25vJyA6ICd0byc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2V0Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyB0dWgnLFxuICAgICAgICAgICAgbWlsbGlvbjogJyBtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJyBtbGQnLFxuICAgICAgICAgICAgdHJpbGxpb246ICcgdHJsJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2ZpJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ00nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ0cnLFxuICAgICAgICAgICAgdHJpbGxpb246ICdUJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2ZyLWNhJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ00nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ0cnLFxuICAgICAgICAgICAgdHJpbGxpb246ICdUJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/ICdlcicgOiAnZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2ZyLWNoJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICdcXCcnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ0NIRidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdmcicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgPT09IDEgPyAnZXInIDogJ2UnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2h1Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ0UnLCAgLy8gZXplclxuICAgICAgICAgICAgbWlsbGlvbjogJ00nLCAgIC8vIG1pbGxpw7NcbiAgICAgICAgICAgIGJpbGxpb246ICdNcmQnLCAvLyBtaWxsacOhcmRcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnVCcgICAvLyB0cmlsbGnDs1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnIEZ0J1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2l0Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ21pbGEnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbCcsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnwronO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2phJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+WNgycsXG4gICAgICAgICAgICBtaWxsaW9uOiAn55m+5LiHJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfljYHlhIQnLFxuICAgICAgICAgICAgdHJpbGxpb246ICflhYYnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfCpSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdsdicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICcgdMWra3N0LicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnIG1pbGouJyxcbiAgICAgICAgICAgIGJpbGxpb246ICcgbWxqcmQuJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAnIHRyaWxqLidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdubC1iZScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsICA6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZCA6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb24gIDogJyBtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbiAgOiAnIG1sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbiA6ICcgYmxuJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IG51bWJlciAlIDEwMDtcblxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgIT09IDAgJiYgcmVtYWluZGVyIDw9IDEgfHwgcmVtYWluZGVyID09PSA4IHx8IHJlbWFpbmRlciA+PSAyMCkgPyAnc3RlJyA6ICdkZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwgJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ25sLW5sJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWwgIDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kIDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbiAgOiAnbWxuJyxcbiAgICAgICAgICAgIGJpbGxpb24gIDogJ21yZCcsXG4gICAgICAgICAgICB0cmlsbGlvbiA6ICdibG4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gbnVtYmVyICUgMTAwO1xuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgIT09IDAgJiYgcmVtYWluZGVyIDw9IDEgfHwgcmVtYWluZGVyID09PSA4IHx8IHJlbWFpbmRlciA+PSAyMCkgPyAnc3RlJyA6ICdkZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwgJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ25vJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAna3InXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncGwnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAndHlzLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWxuJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdtbGQnLFxuICAgICAgICAgICAgdHJpbGxpb246ICdibG4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdQTE4nXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncHQtYnInLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnbWlsJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWxow7VlcycsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnwronO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnUiQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncHQtcHQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ8K6JztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdydS11YScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfRgtGL0YEuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBSdXNzaWFuIGl0IGNhbiB0YWtlbiBvblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGZvcm1zIChtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFsbCB3ZSBjYW4gZG9cbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdcXHUyMEI0J1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3J1Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ9GC0YvRgS4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ9C80LvQvS4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0LicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ9GC0YDQu9C9LidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gbm90IGlkZWFsLCBidXQgc2luY2UgaW4gUnVzc2lhbiBpdCBjYW4gdGFrZW4gb25cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBmb3JtcyAobWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbGwgd2UgY2FuIGRvXG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn0YDRg9CxLidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdzaycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0aXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWwuJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdzbCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaW8nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21yZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3RyaWxpam9uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICBcblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICd0aCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfguJ7guLHguJknLFxuICAgICAgICAgICAgbWlsbGlvbjogJ+C4peC5ieC4suC4mScsXG4gICAgICAgICAgICBiaWxsaW9uOiAn4Lie4Lix4LiZ4Lil4LmJ4Liy4LiZJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn4Lil4LmJ4Liy4LiZ4Lil4LmJ4Liy4LiZJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4Li/J1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN1ZmZpeGVzID0ge1xuICAgICAgICAgICAgMTogJ1xcJ2luY2knLFxuICAgICAgICAgICAgNTogJ1xcJ2luY2knLFxuICAgICAgICAgICAgODogJ1xcJ2luY2knLFxuICAgICAgICAgICAgNzA6ICdcXCdpbmNpJyxcbiAgICAgICAgICAgIDgwOiAnXFwnaW5jaScsXG5cbiAgICAgICAgICAgIDI6ICdcXCduY2knLFxuICAgICAgICAgICAgNzogJ1xcJ25jaScsXG4gICAgICAgICAgICAyMDogJ1xcJ25jaScsXG4gICAgICAgICAgICA1MDogJ1xcJ25jaScsXG5cbiAgICAgICAgICAgIDM6ICdcXCfDvG5jw7wnLFxuICAgICAgICAgICAgNDogJ1xcJ8O8bmPDvCcsXG4gICAgICAgICAgICAxMDA6ICdcXCfDvG5jw7wnLFxuXG4gICAgICAgICAgICA2OiAnXFwnbmPEsScsXG5cbiAgICAgICAgICAgIDk6ICdcXCd1bmN1JyxcbiAgICAgICAgICAgIDEwOiAnXFwndW5jdScsXG4gICAgICAgICAgICAzMDogJ1xcJ3VuY3UnLFxuXG4gICAgICAgICAgICA2MDogJ1xcJ8SxbmPEsScsXG4gICAgICAgICAgICA5MDogJ1xcJ8SxbmPEsSdcbiAgICAgICAgfTtcblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICd0cicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdiaW4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbHlvbicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnbWlseWFyJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndHJpbHlvbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXG4gICAgICAgICAgICAgICAgcmV0dXJuICdcXCfEsW5jxLEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYSA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgICAgIGIgPSBudW1iZXIgJSAxMDAgLSBhLFxuICAgICAgICAgICAgICAgIGMgPSBudW1iZXIgPj0gMTAwID8gMTAwIDogbnVsbDtcblxuICAgICAgICAgIHJldHVybiBzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXTtcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1xcdTIwQkEnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAndWstdWEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YLQuNGBLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAn0LzQu9C9JyxcbiAgICAgICAgICAgIGJpbGxpb246ICfQvNC70YDQtCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ9Cx0LvQvSdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gbm90IGlkZWFsLCBidXQgc2luY2UgaW4gVWtyYWluaWFuIGl0IGNhbiB0YWtlbiBvblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGZvcm1zIChtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFsbCB3ZSBjYW4gZG9cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1xcdTIwQjQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICd2aScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICcgbmdow6xuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICcgdHJp4buHdScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnIHThu7cnLFxuICAgICAgICAgICAgdHJpbGxpb246ICcgbmdow6xuIHThu7cnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqsnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L251bWVyYWwvbG9jYWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIENvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiAnICcsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBuZXcgUmVjdChcbiAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgKVxuXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5yZWZzLmNhbGN1bGF0b3IsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcblxuICAgICAgbGV0IG5ld0NhbGNSZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NLZXkgPSB0aGlzLnByb3BzLnBvc2l0aW9uc1tpXVxuICAgICAgICBjb25zdCByZWN0ID0gYnV0dG9uUmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgaWYod2luZG93UmVjdC5jb250YWlucyhyZWN0KSl7XG4gICAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFuZXdDYWxjUmVjdCl7XG4gICAgICAgIG5ld0NhbGNSZWN0ID0gd2luZG93UmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsICdjZW50ZXInKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgeDogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWCxcbiAgICAgICAgeTogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvclwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy5zdGF0ZS54fXB4LCAke3RoaXMuc3RhdGUueX1weClgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1oZWFkZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImNsb3NlXCIgZGlzcGxheT1cIsOXXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrQ2xvc2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItZGlzcGxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3J9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+e251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwiY2xlYXJcIiBkaXNwbGF5PVwiQUNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmFsbENsZWFyKCl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJjbGVhclwiIGRpc3BsYXk9XCJDXCIgb25DbGljaz17KCkgPT4gdGhpcy5jbGVhcigpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwiZnVuY1wiIGRpc3BsYXk9XCIlXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrUGVyY2VudCgpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwiZnVuY1wiIGRpc3BsYXk9XCLDt1wiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja0RpdigpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCI3XCIgb25DbGljaz17ZGlzcGxheSA9PiB0aGlzLm9uQ2xpY2tOdW1iZXIoZGlzcGxheSl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiOFwiIG9uQ2xpY2s9e2Rpc3BsYXkgPT4gdGhpcy5vbkNsaWNrTnVtYmVyKGRpc3BsYXkpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjlcIiBvbkNsaWNrPXtkaXNwbGF5ID0+IHRoaXMub25DbGlja051bWJlcihkaXNwbGF5KX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImZ1bmNcIiBkaXNwbGF5PVwiw5dcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2tNdWx0aSgpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCI0XCIgb25DbGljaz17ZGlzcGxheSA9PiB0aGlzLm9uQ2xpY2tOdW1iZXIoZGlzcGxheSl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiNVwiIG9uQ2xpY2s9e2Rpc3BsYXkgPT4gdGhpcy5vbkNsaWNrTnVtYmVyKGRpc3BsYXkpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjZcIiBvbkNsaWNrPXtkaXNwbGF5ID0+IHRoaXMub25DbGlja051bWJlcihkaXNwbGF5KX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImZ1bmNcIiBkaXNwbGF5PVwiLVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja1N1YigpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCIxXCIgb25DbGljaz17ZGlzcGxheSA9PiB0aGlzLm9uQ2xpY2tOdW1iZXIoZGlzcGxheSl9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc1R5cGU9XCJudW1iZXJcIiBkaXNwbGF5PVwiMlwiIG9uQ2xpY2s9e2Rpc3BsYXkgPT4gdGhpcy5vbkNsaWNrTnVtYmVyKGRpc3BsYXkpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjNcIiBvbkNsaWNrPXtkaXNwbGF5ID0+IHRoaXMub25DbGlja051bWJlcihkaXNwbGF5KX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cImZ1bmNcIiBkaXNwbGF5PVwiK1wiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja0FkZCgpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzVHlwZT1cIm51bWJlclwiIGRpc3BsYXk9XCIwXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrWmVybygpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT1cIjAwXCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrRG91YmxlWmVybygpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwibnVtYmVyXCIgZGlzcGxheT17bG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbH0gb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrRGVjaW1hbCgpfSAvPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NUeXBlPVwiZW50ZXJcIiBkaXNwbGF5PVwiPVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGlja0VudGVyKCl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBDb21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5kaXNwbGF5KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbiByZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuY2xhc3NUeXBlKX0gb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9Pnt0aGlzLnByb3BzLmRpc3BsYXl9PC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3MtbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSAncmlnaHQtYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSAnbGVmdC1ib3R0b20nOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgJ2xlZnQtdG9wJzpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlICdyaWdodC10b3AnOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cbn1cblxuUmVjdC5jcmVhdGVXaXRoRWxlbWVudCA9IChlbGVtLCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApID0+IHtcbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEtFWUNPREVTID0ge1xuICBFU0NBUEU6IDI3XG59O1xuXG52YXIgUG9ydGFsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcnRhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcnRhbCkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHsgYWN0aXZlOiBmYWxzZSB9O1xuICAgIF90aGlzLmhhbmRsZVdyYXBwZXJDbGljayA9IF90aGlzLmhhbmRsZVdyYXBwZXJDbGljay5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5jbG9zZVBvcnRhbCA9IF90aGlzLmNsb3NlUG9ydGFsLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrID0gX3RoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2suYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlS2V5ZG93biA9IF90aGlzLmhhbmRsZUtleWRvd24uYmluZChfdGhpcyk7XG4gICAgX3RoaXMucG9ydGFsID0gbnVsbDtcbiAgICBfdGhpcy5ub2RlID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9ydGFsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uRXNjKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW5lZCkge1xuICAgICAgICB0aGlzLm9wZW5Qb3J0YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgLy8gcG9ydGFsJ3MgJ2lzIG9wZW4nIHN0YXRlIGlzIGhhbmRsZWQgdGhyb3VnaCB0aGUgcHJvcCBpc09wZW5lZFxuICAgICAgaWYgKHR5cGVvZiBuZXdQcm9wcy5pc09wZW5lZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5ld1Byb3BzLmlzT3BlbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlblBvcnRhbChuZXdQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbmV3UHJvcHMuaXNPcGVuZWQgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9ydGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gcG9ydGFsIGhhbmRsZXMgaXRzIG93biAnaXMgb3Blbicgc3RhdGVcbiAgICAgIGlmICh0eXBlb2YgbmV3UHJvcHMuaXNPcGVuZWQgPT09ICd1bmRlZmluZWQnICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbkVzYykge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZVBvcnRhbCh0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVXcmFwcGVyQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVXcmFwcGVyQ2xpY2soZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5Qb3J0YWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvcGVuUG9ydGFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlblBvcnRhbCgpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICB0aGlzLnJlbmRlclBvcnRhbChwcm9wcyk7XG4gICAgICB0aGlzLnByb3BzLm9uT3Blbih0aGlzLm5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlUG9ydGFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VQb3J0YWwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGlzVW5tb3VudGVkID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHZhciByZXNldFBvcnRhbFN0YXRlID0gZnVuY3Rpb24gcmVzZXRQb3J0YWxTdGF0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMi5ub2RlKSB7XG4gICAgICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUoX3RoaXMyLm5vZGUpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoX3RoaXMyLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzMi5wb3J0YWwgPSBudWxsO1xuICAgICAgICBfdGhpczIubm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChpc1VubW91bnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5iZWZvcmVDbG9zZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMuYmVmb3JlQ2xvc2UodGhpcy5ub2RlLCByZXNldFBvcnRhbFN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNldFBvcnRhbFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVPdXRzaWRlTW91c2VDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKGUpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcm9vdCA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMucG9ydGFsKTtcbiAgICAgIGlmIChyb290LmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLmJ1dHRvbiAmJiBlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNsb3NlUG9ydGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlS2V5ZG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERVMuRVNDQVBFICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3J0YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJQb3J0YWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQb3J0YWwocHJvcHMpIHtcbiAgICAgIGlmICghdGhpcy5ub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamltZmIvZDk5ZTA2NzhlOWRhNzE1Y2NmNjQ1NDk2MWVmMDRkMWJcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuY2hpbGRyZW4udHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQocHJvcHMuY2hpbGRyZW4sIHsgY2xvc2VQb3J0YWw6IHRoaXMuY2xvc2VQb3J0YWwgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG9ydGFsID0gX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIGNoaWxkcmVuLCB0aGlzLm5vZGUsIHRoaXMucHJvcHMub25VcGRhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9wZW5CeUNsaWNrT24pIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5vcGVuQnlDbGlja09uLCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlV3JhcHBlckNsaWNrIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcnRhbDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvcnRhbDtcblxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIG9wZW5CeUNsaWNrT246IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZWxlbWVudCxcbiAgY2xvc2VPbkVzYzogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGlzT3BlbmVkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIG9uT3BlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5mdW5jLFxuICBvbkNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIGJlZm9yZUNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVXBkYXRlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmNcbn07XG5cblBvcnRhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uT3BlbjogZnVuY3Rpb24gb25PcGVuKCkge30sXG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7fSxcbiAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge31cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1wb3J0YWwvYnVpbGQvcG9ydGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==