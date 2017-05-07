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
	
	var _Docs = __webpack_require__(1);
	
	var _Docs2 = _interopRequireDefault(_Docs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	  ReactDOM.render(React.createElement(_Docs2.default, null), document.getElementById('wrapper'));
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Default = __webpack_require__(3);
	
	var _Default2 = _interopRequireDefault(_Default);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Docs = function (_React$Component) {
	  _inherits(Docs, _React$Component);
	
	  function Docs(props) {
	    _classCallCheck(this, Docs);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.sections = [{
	      title: "Default",
	      component: _Default2.default
	    }];
	
	    _this.state = {
	      x: 0,
	      y: 0
	    };
	
	    document.onmousemove = function (e) {
	      _this.setState({
	        x: e.clientX + (window.pageXOffset || document.documentElement.scrollLeft),
	        y: e.clientY + (window.pageYOffset || document.documentElement.scrollTop)
	      });
	    };
	    return _this;
	  }
	
	  Docs.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'React CurrencyCalculator'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { position: 'fixed', top: 0, left: 0 } },
	        'x: ',
	        this.state.x,
	        ' y: ',
	        this.state.y
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-3' },
	          _react2.default.createElement(
	            'ul',
	            null,
	            this.sections.map(function (section) {
	              return _react2.default.createElement(
	                'li',
	                { key: section.title },
	                section.title
	              );
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-9' },
	          this.sections.map(function (section) {
	            var Component = section.component;
	            return _react2.default.createElement(
	              'section',
	              { key: section.title },
	              _react2.default.createElement(Component, null)
	            );
	          })
	        )
	      )
	    );
	  };
	
	  return Docs;
	}(_react2.default.Component);
	
	exports.default = Docs;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCurrencyCalculator = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultSection = function (_React$Component) {
	  _inherits(DefaultSection, _React$Component);
	
	  function DefaultSection(props) {
	    _classCallCheck(this, DefaultSection);
	
	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }
	
	  DefaultSection.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(_reactCurrencyCalculator.CurrencyCalculator, {
	        initialAmount: 0,
	        currencyFormat: '$0,0[.]00',
	        positions: [_reactCurrencyCalculator.Rect.RIGHT_BOTTOM, _reactCurrencyCalculator.Rect.RIGHT_TOP, _reactCurrencyCalculator.Rect.LEFT_BOTTOM, _reactCurrencyCalculator.Rect.LEFT_TOP],
	        buttons: [[{ style: "dark", display: _react2.default.createElement(
	            'span',
	            null,
	            'AC'
	          ), action: _reactCurrencyCalculator.Action.allClear }, { style: "dark", display: _react2.default.createElement(
	            'span',
	            null,
	            '\u2190'
	          ), action: _reactCurrencyCalculator.Action.backspace }, { style: "light", display: _react2.default.createElement(
	            'span',
	            null,
	            '%'
	          ), action: _reactCurrencyCalculator.Action.percent }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '\xF7'
	          ), action: _reactCurrencyCalculator.Action.division }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '7'
	          ), action: _reactCurrencyCalculator.Action.seven }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '8'
	          ), action: _reactCurrencyCalculator.Action.eight }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '9'
	          ), action: _reactCurrencyCalculator.Action.nine }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '\xD7'
	          ), action: _reactCurrencyCalculator.Action.multiplication }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '4'
	          ), action: _reactCurrencyCalculator.Action.four }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '5'
	          ), action: _reactCurrencyCalculator.Action.five }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '6'
	          ), action: _reactCurrencyCalculator.Action.six }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '-'
	          ), action: _reactCurrencyCalculator.Action.minus }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '1'
	          ), action: _reactCurrencyCalculator.Action.one }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '2'
	          ), action: _reactCurrencyCalculator.Action.two }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '3'
	          ), action: _reactCurrencyCalculator.Action.three }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '+'
	          ), action: _reactCurrencyCalculator.Action.plus }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '0'
	          ), action: _reactCurrencyCalculator.Action.zero }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '00'
	          ), action: _reactCurrencyCalculator.Action.doubleZero }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '.'
	          ), action: _reactCurrencyCalculator.Action.decimal }, { style: "warning", display: _react2.default.createElement(
	            'span',
	            null,
	            '='
	          ), action: _reactCurrencyCalculator.Action.enter }]]
	      })
	    );
	  };
	
	  return DefaultSection;
	}(_react2.default.Component);
	
	exports.default = DefaultSection;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(2), __webpack_require__(6));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["CurrencyCalculator"] = factory(require("react"), require("react-dom"));else root["CurrencyCalculator"] = factory(root["React"], root["ReactDOM"]);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
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
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.CurrencyCalculator = _CurrencyCalculator2.default;
				exports.Rect = _Rect2.default;
				exports.Action = _Action2.default;
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
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
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
	
						return _react2.default.createElement('div', { className: 'react-currency-calculator' }, _react2.default.createElement('button', { ref: 'button', className: this.props.className, onClick: function onClick(e) {
								return _this2.onClickAmount(e);
							} }, (0, _numeral2.default)(this.state.amount).format(this.props.currencyFormat)), _react2.default.createElement(_reactPortal2.default, { closeOnEsc: true, closeOnOutsideClick: true, isOpened: this.state.openCalculator, onClose: function onClose() {
								return _this2.onCloseCalculator();
							} }, _react2.default.createElement(_Calculator2.default, {
							ref: 'calculator',
							initialAmount: this.state.amount,
							onClickClose: function onClickClose() {
								return _this2.setState({ openCalculator: false });
							},
							button: this.refs.button,
							positions: this.props.positions,
							buttons: this.props.buttons
						})));
					};
	
					return CurrencyCalculator;
				}(_react2.default.Component);
	
				exports.default = CurrencyCalculator;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {
	
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /*! @preserve
	                                                                      * numeral.js
	                                                                      * version : 2.0.6
	                                                                      * author : Adam Draper
	                                                                      * license : MIT
	                                                                      * http://adamwdraper.github.com/Numeral-js/
	                                                                      */
	
				(function (global, factory) {
					if (true) {
						!(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
						module.exports = factory();
					} else {
						global.numeral = factory();
					}
				})(this, function () {
					/************************************
	        Variables
	    ************************************/
	
					var _numeral3,
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
	
					_numeral3 = function numeral(input) {
						var value, kind, unformatFunction, regexp;
	
						if (_numeral3.isNumeral(input)) {
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
	
								unformatFunction = unformatFunction || _numeral3._.stringToNumber;
	
								value = unformatFunction(input);
							}
						} else {
							value = Number(input) || null;
						}
	
						return new Numeral(input, value);
					};
	
					// version number
					_numeral3.version = VERSION;
	
					// compare numeral object
					_numeral3.isNumeral = function (obj) {
						return obj instanceof Numeral;
					};
	
					// helper functions
					_numeral3._ = _ = {
						// formats numbers separators, decimals places, signs, abbreviations
						numberToFormat: function numberToFormat(value, format, roundingFunction) {
							var locale = locales[_numeral3.options.currentLocale],
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
							    abbrForce,
							    // force abbreviation
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
							if (_numeral3._.includes(format, '(')) {
								negP = true;
								format = format.replace(/[\(|\)]/g, '');
							} else if (_numeral3._.includes(format, '+') || _numeral3._.includes(format, '-')) {
								signed = _numeral3._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
								format = format.replace(/[\+|\-]/g, '');
							}
	
							// see if abbreviation is wanted
							if (_numeral3._.includes(format, 'a')) {
								abbrForce = format.match(/a(k|m|b|t)?/);
	
								abbrForce = abbrForce ? abbrForce[1] : false;
	
								// check for space before abbreviation
								if (_numeral3._.includes(format, ' a')) {
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
							if (_numeral3._.includes(format, '[.]')) {
								optDec = true;
								format = format.replace('[.]', '.');
							}
	
							// break number and format
							int = value.toString().split('.')[0];
							precision = format.split('.')[1];
							thousands = format.indexOf(',');
							leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;
	
							if (precision) {
								if (_numeral3._.includes(precision, '[')) {
									precision = precision.replace(']', '');
									precision = precision.split('[');
									decimal = _numeral3._.toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
								} else {
									decimal = _numeral3._.toFixed(value, precision.length, roundingFunction);
								}
	
								int = decimal.split('.')[0];
	
								if (_numeral3._.includes(decimal, '.')) {
									decimal = locale.delimiters.decimal + decimal.split('.')[1];
								} else {
									decimal = '';
								}
	
								if (optDec && Number(decimal.slice(1)) === 0) {
									decimal = '';
								}
							} else {
								int = _numeral3._.toFixed(value, 0, roundingFunction);
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
							if (_numeral3._.includes(int, '-')) {
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
						stringToNumber: function stringToNumber(string) {
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
						isNaN: function (_isNaN) {
							function isNaN(_x) {
								return _isNaN.apply(this, arguments);
							}
	
							isNaN.toString = function () {
								return _isNaN.toString();
							};
	
							return isNaN;
						}(function (value) {
							return typeof value === 'number' && isNaN(value);
						}),
						includes: function includes(string, search) {
							return string.indexOf(search) !== -1;
						},
						insert: function insert(string, subString, start) {
							return string.slice(0, start) + subString + string.slice(start);
						},
						reduce: function reduce(array, callback /*, initialValue*/) {
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
						multiplier: function multiplier(x) {
							var parts = x.toString().split('.');
	
							return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
						},
						/**
	      * Given a variable number of arguments, returns the maximum
	      * multiplier that must be used to normalize an operation involving
	      * all of them.
	      */
						correctionFactor: function correctionFactor() {
							var args = Array.prototype.slice.call(arguments);
	
							return args.reduce(function (accum, next) {
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
						toFixed: function toFixed(value, maxDecimals, roundingFunction, optionals) {
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
					_numeral3.options = options;
	
					// avaliable formats
					_numeral3.formats = formats;
	
					// avaliable formats
					_numeral3.locales = locales;
	
					// This function sets the current locale.  If
					// no arguments are passed in, it will simply return the current global
					// locale key.
					_numeral3.locale = function (key) {
						if (key) {
							options.currentLocale = key.toLowerCase();
						}
	
						return options.currentLocale;
					};
	
					// This function provides access to the loaded locale data.  If
					// no arguments are passed in, it will simply return the current
					// global locale object.
					_numeral3.localeData = function (key) {
						if (!key) {
							return locales[options.currentLocale];
						}
	
						key = key.toLowerCase();
	
						if (!locales[key]) {
							throw new Error('Unknown locale : ' + key);
						}
	
						return locales[key];
					};
	
					_numeral3.reset = function () {
						for (var property in defaults) {
							options[property] = defaults[property];
						}
					};
	
					_numeral3.zeroFormat = function (format) {
						options.zeroFormat = typeof format === 'string' ? format : null;
					};
	
					_numeral3.nullFormat = function (format) {
						options.nullFormat = typeof format === 'string' ? format : null;
					};
	
					_numeral3.defaultFormat = function (format) {
						options.defaultFormat = typeof format === 'string' ? format : '0.0';
					};
	
					_numeral3.register = function (type, name, format) {
						name = name.toLowerCase();
	
						if (this[type + 's'][name]) {
							throw new TypeError(name + ' ' + type + ' already registered.');
						}
	
						this[type + 's'][name] = format;
	
						return format;
					};
	
					_numeral3.validate = function (val, culture) {
						var _decimalSep, _thousandSep, _currSymbol, _valArray, _abbrObj, _thousandRegEx, localeData, temp;
	
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
							localeData = _numeral3.localeData(culture);
						} catch (e) {
							localeData = _numeral3.localeData(_numeral3.locale());
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
									return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx);
								} else {
									if (_valArray[0].length === 1) {
										return !!_valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
									} else {
										return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
									}
								}
							}
						}
	
						return false;
					};
	
					/************************************
	        Numeral Prototype
	    ************************************/
	
					_numeral3.fn = Numeral.prototype = {
						clone: function clone() {
							return _numeral3(this);
						},
						format: function format(inputString, roundingFunction) {
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
	
								formatFunction = formatFunction || _numeral3._.numberToFormat;
	
								output = formatFunction(value, format, roundingFunction);
							}
	
							return output;
						},
						value: function value() {
							return this._value;
						},
						input: function input() {
							return this._input;
						},
						set: function set(value) {
							this._value = Number(value);
	
							return this;
						},
						add: function add(value) {
							var corrFactor = _.correctionFactor.call(null, this._value, value);
	
							function cback(accum, curr, currI, O) {
								return accum + Math.round(corrFactor * curr);
							}
	
							this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
	
							return this;
						},
						subtract: function subtract(value) {
							var corrFactor = _.correctionFactor.call(null, this._value, value);
	
							function cback(accum, curr, currI, O) {
								return accum - Math.round(corrFactor * curr);
							}
	
							this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
	
							return this;
						},
						multiply: function multiply(value) {
							function cback(accum, curr, currI, O) {
								var corrFactor = _.correctionFactor(accum, curr);
								return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
							}
	
							this._value = _.reduce([this._value, value], cback, 1);
	
							return this;
						},
						divide: function divide(value) {
							function cback(accum, curr, currI, O) {
								var corrFactor = _.correctionFactor(accum, curr);
								return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
							}
	
							this._value = _.reduce([this._value, value], cback);
	
							return this;
						},
						difference: function difference(value) {
							return Math.abs(_numeral3(this._value).subtract(value).value());
						}
					};
	
					/************************************
	        Default Locale && Format
	    ************************************/
	
					_numeral3.register('locale', 'en', {
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
						ordinal: function ordinal(number) {
							var b = number % 10;
							return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
						},
						currency: {
							symbol: '$'
						}
					});
	
					(function () {
						_numeral3.register('format', 'bps', {
							regexps: {
								format: /(BPS)/,
								unformat: /(BPS)/
							},
							format: function format(value, _format, roundingFunction) {
								var space = _numeral3._.includes(_format, ' BPS') ? ' ' : '',
								    output;
	
								value = value * 10000;
	
								// check for space before BPS
								_format = _format.replace(/\s?BPS/, '');
	
								output = _numeral3._.numberToFormat(value, _format, roundingFunction);
	
								if (_numeral3._.includes(output, ')')) {
									output = output.split('');
	
									output.splice(-1, 0, space + 'BPS');
	
									output = output.join('');
								} else {
									output = output + space + 'BPS';
								}
	
								return output;
							},
							unformat: function unformat(string) {
								return +(_numeral3._.stringToNumber(string) * 0.0001).toFixed(15);
							}
						});
					})();
	
					(function () {
						var decimal = {
							base: 1000,
							suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
						},
						    binary = {
							base: 1024,
							suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
						};
	
						var allSuffixes = decimal.suffixes.concat(binary.suffixes.filter(function (item) {
							return decimal.suffixes.indexOf(item) < 0;
						}));
						var unformatRegex = allSuffixes.join('|');
						// Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
						unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';
	
						_numeral3.register('format', 'bytes', {
							regexps: {
								format: /([0\s]i?b)/,
								unformat: new RegExp(unformatRegex)
							},
							format: function format(value, _format2, roundingFunction) {
								var output,
								    bytes = _numeral3._.includes(_format2, 'ib') ? binary : decimal,
								    suffix = _numeral3._.includes(_format2, ' b') || _numeral3._.includes(_format2, ' ib') ? ' ' : '',
								    power,
								    min,
								    max;
	
								// check for space before
								_format2 = _format2.replace(/\s?i?b/, '');
	
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
	
								output = _numeral3._.numberToFormat(value, _format2, roundingFunction);
	
								return output + suffix;
							},
							unformat: function unformat(string) {
								var value = _numeral3._.stringToNumber(string),
								    power,
								    bytesMultiplier;
	
								if (value) {
									for (power = decimal.suffixes.length - 1; power >= 0; power--) {
										if (_numeral3._.includes(string, decimal.suffixes[power])) {
											bytesMultiplier = Math.pow(decimal.base, power);
	
											break;
										}
	
										if (_numeral3._.includes(string, binary.suffixes[power])) {
											bytesMultiplier = Math.pow(binary.base, power);
	
											break;
										}
									}
	
									value *= bytesMultiplier || 1;
								}
	
								return value;
							}
						});
					})();
	
					(function () {
						_numeral3.register('format', 'currency', {
							regexps: {
								format: /(\$)/
							},
							format: function format(value, _format3, roundingFunction) {
								var locale = _numeral3.locales[_numeral3.options.currentLocale],
								    symbols = {
									before: _format3.match(/^([\+|\-|\(|\s|\$]*)/)[0],
									after: _format3.match(/([\+|\-|\)|\s|\$]*)$/)[0]
								},
								    output,
								    symbol,
								    i;
	
								// strip format of spaces and $
								_format3 = _format3.replace(/\s?\$\s?/, '');
	
								// format the number
								output = _numeral3._.numberToFormat(value, _format3, roundingFunction);
	
								// update the before and after based on value
								if (value >= 0) {
									symbols.before = symbols.before.replace(/[\-\(]/, '');
									symbols.after = symbols.after.replace(/[\-\)]/, '');
								} else if (value < 0 && !_numeral3._.includes(symbols.before, '-') && !_numeral3._.includes(symbols.before, '(')) {
									symbols.before = '-' + symbols.before;
								}
	
								// loop through each before symbol
								for (i = 0; i < symbols.before.length; i++) {
									symbol = symbols.before[i];
	
									switch (symbol) {
										case '$':
											output = _numeral3._.insert(output, locale.currency.symbol, i);
											break;
										case ' ':
											output = _numeral3._.insert(output, ' ', i + locale.currency.symbol.length - 1);
											break;
									}
								}
	
								// loop through each after symbol
								for (i = symbols.after.length - 1; i >= 0; i--) {
									symbol = symbols.after[i];
	
									switch (symbol) {
										case '$':
											output = i === symbols.after.length - 1 ? output + locale.currency.symbol : _numeral3._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
											break;
										case ' ':
											output = i === symbols.after.length - 1 ? output + ' ' : _numeral3._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
											break;
									}
								}
	
								return output;
							}
						});
					})();
	
					(function () {
						_numeral3.register('format', 'exponential', {
							regexps: {
								format: /(e\+|e-)/,
								unformat: /(e\+|e-)/
							},
							format: function format(value, _format4, roundingFunction) {
								var output,
								    exponential = typeof value === 'number' && !_numeral3._.isNaN(value) ? value.toExponential() : '0e+0',
								    parts = exponential.split('e');
	
								_format4 = _format4.replace(/e[\+|\-]{1}0/, '');
	
								output = _numeral3._.numberToFormat(Number(parts[0]), _format4, roundingFunction);
	
								return output + 'e' + parts[1];
							},
							unformat: function unformat(string) {
								var parts = _numeral3._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
								    value = Number(parts[0]),
								    power = Number(parts[1]);
	
								power = _numeral3._.includes(string, 'e-') ? power *= -1 : power;
	
								function cback(accum, curr, currI, O) {
									var corrFactor = _numeral3._.correctionFactor(accum, curr),
									    num = accum * corrFactor * (curr * corrFactor) / (corrFactor * corrFactor);
									return num;
								}
	
								return _numeral3._.reduce([value, Math.pow(10, power)], cback, 1);
							}
						});
					})();
	
					(function () {
						_numeral3.register('format', 'ordinal', {
							regexps: {
								format: /(o)/
							},
							format: function format(value, _format5, roundingFunction) {
								var locale = _numeral3.locales[_numeral3.options.currentLocale],
								    output,
								    ordinal = _numeral3._.includes(_format5, ' o') ? ' ' : '';
	
								// check for space before
								_format5 = _format5.replace(/\s?o/, '');
	
								ordinal += locale.ordinal(value);
	
								output = _numeral3._.numberToFormat(value, _format5, roundingFunction);
	
								return output + ordinal;
							}
						});
					})();
	
					(function () {
						_numeral3.register('format', 'percentage', {
							regexps: {
								format: /(%)/,
								unformat: /(%)/
							},
							format: function format(value, _format6, roundingFunction) {
								var space = _numeral3._.includes(_format6, ' %') ? ' ' : '',
								    output;
	
								if (_numeral3.options.scalePercentBy100) {
									value = value * 100;
								}
	
								// check for space before %
								_format6 = _format6.replace(/\s?\%/, '');
	
								output = _numeral3._.numberToFormat(value, _format6, roundingFunction);
	
								if (_numeral3._.includes(output, ')')) {
									output = output.split('');
	
									output.splice(-1, 0, space + '%');
	
									output = output.join('');
								} else {
									output = output + space + '%';
								}
	
								return output;
							},
							unformat: function unformat(string) {
								var number = _numeral3._.stringToNumber(string);
								if (_numeral3.options.scalePercentBy100) {
									return number * 0.01;
								}
								return number;
							}
						});
					})();
	
					(function () {
						_numeral3.register('format', 'time', {
							regexps: {
								format: /(:)/,
								unformat: /(:)/
							},
							format: function format(value, _format7, roundingFunction) {
								var hours = Math.floor(value / 60 / 60),
								    minutes = Math.floor((value - hours * 60 * 60) / 60),
								    seconds = Math.round(value - hours * 60 * 60 - minutes * 60);
	
								return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
							},
							unformat: function unformat(string) {
								var timeArray = string.split(':'),
								    seconds = 0;
	
								// turn hours and minutes into seconds and add them all up
								if (timeArray.length === 3) {
									// hours
									seconds = seconds + Number(timeArray[0]) * 60 * 60;
									// minutes
									seconds = seconds + Number(timeArray[1]) * 60;
									// seconds
									seconds = seconds + Number(timeArray[2]);
								} else if (timeArray.length === 2) {
									// minutes
									seconds = seconds + Number(timeArray[0]) * 60;
									// seconds
									seconds = seconds + Number(timeArray[1]);
								}
								return Number(seconds);
							}
						});
					})();
	
					return _numeral3;
				});
	
				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {
	
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*! @preserve
	                                                                                                    * numeral.js
	                                                                                                    * locales : 2.0.6
	                                                                                                    * license : MIT
	                                                                                                    * http://adamwdraper.github.com/Numeral-js/
	                                                                                                    */
	
				(function (global, factory) {
					if (true) {
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
						factory(require('./numeral'));
					} else {
						factory(global.numeral);
					}
				})(this, function (numeral) {
	
					(function () {
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
							ordinal: function ordinal(number) {
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
	
					(function () {
	
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '¥'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal() {
								return '.';
							},
							currency: {
								symbol: 'Kč'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: 'DKK'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: 'CHF'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								var b = number % 10;
								return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
							},
							currency: {
								symbol: '$'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								var b = number % 10;
								return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
							},
							currency: {
								symbol: '£'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								var b = number % 10;
								return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
							},
							currency: {
								symbol: 'R'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								var b = number % 10;
								return b === 1 || b === 3 ? 'er' : b === 2 ? 'do' : b === 7 || b === 0 ? 'mo' : b === 8 ? 'vo' : b === 9 ? 'no' : 'to';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								var b = number % 10;
								return b === 1 || b === 3 ? 'er' : b === 2 ? 'do' : b === 7 || b === 0 ? 'mo' : b === 8 ? 'vo' : b === 9 ? 'no' : 'to';
							},
							currency: {
								symbol: '$'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return number === 1 ? 'er' : 'e';
							},
							currency: {
								symbol: '$'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return number === 1 ? 'er' : 'e';
							},
							currency: {
								symbol: 'CHF'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return number === 1 ? 'er' : 'e';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
						numeral.register('locale', 'hu', {
							delimiters: {
								thousands: ' ',
								decimal: ','
							},
							abbreviations: {
								thousand: 'E', // ezer
								million: 'M', // millió
								billion: 'Mrd', // milliárd
								trillion: 'T' // trillió
							},
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: ' Ft'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return 'º';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '¥'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
						numeral.register('locale', 'nl-be', {
							delimiters: {
								thousands: ' ',
								decimal: ','
							},
							abbreviations: {
								thousand: 'k',
								million: ' mln',
								billion: ' mld',
								trillion: ' bln'
							},
							ordinal: function ordinal(number) {
								var remainder = number % 100;
	
								return number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20 ? 'ste' : 'de';
							},
							currency: {
								symbol: '€ '
							}
						});
					})();
	
					(function () {
						numeral.register('locale', 'nl-nl', {
							delimiters: {
								thousands: '.',
								decimal: ','
							},
							abbreviations: {
								thousand: 'k',
								million: 'mln',
								billion: 'mrd',
								trillion: 'bln'
							},
							ordinal: function ordinal(number) {
								var remainder = number % 100;
								return number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20 ? 'ste' : 'de';
							},
							currency: {
								symbol: '€ '
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: 'kr'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: 'PLN'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return 'º';
							},
							currency: {
								symbol: 'R$'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								return 'º';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal() {
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
	
					(function () {
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
							ordinal: function ordinal() {
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
	
					(function () {
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
							ordinal: function ordinal() {
								return '.';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal() {
								return '.';
							},
							currency: {
								symbol: '€'
							}
						});
					})();
	
					(function () {
	
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
							ordinal: function ordinal(number) {
								return '.';
							},
							currency: {
								symbol: '฿'
							}
						});
					})();
	
					(function () {
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
							ordinal: function ordinal(number) {
								if (number === 0) {
									// special case for zero
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
	
					(function () {
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
							ordinal: function ordinal() {
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
	
					(function () {
	
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
							ordinal: function ordinal() {
								return '.';
							},
							currency: {
								symbol: '₫'
							}
						});
					})();
				});
	
				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {
	
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
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
						return _react2.default.createElement('div', { ref: 'calculator', className: 'react-currency-calculator__calculator', style: { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' } }, _react2.default.createElement('div', { className: 'react-currency-calculator__calculator-header' }, _react2.default.createElement(_Button2.default, { className: 'react-currency-calculator__calculator-button-close', display: '\xD7', onClick: this.props.onClickClose })), _react2.default.createElement('div', { className: 'react-currency-calculator__calculator-display' }, _react2.default.createElement('div', { className: 'react-currency-calculator__calculator-display-operator' }, this.state.operator.display), _react2.default.createElement('div', { className: 'react-currency-calculator__calculator-display-number' }, (0, _numeral2.default)(this.state.display).format(this.state.format), this.state.unit.display)), this.props.buttons.map(function (row, rowKey) {
							return _react2.default.createElement('div', { key: rowKey, className: 'react-currency-calculator__calculator-buttons' }, row.map(function (btn, btnKey) {
								return _react2.default.createElement(_Button2.default, { key: rowKey + '-' + btnKey, className: btn.className, style: btn.style, size: btn.size, display: btn.display, onClick: function onClick(display) {
										return btn.action(_this3, btn);
									} });
							}));
						}));
					};
	
					return Calculator;
				}(_react2.default.Component);
	
				exports.default = Calculator;
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classNames = __webpack_require__(7);
	
				var _classNames2 = _interopRequireDefault(_classNames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
	
						return _react2.default.createElement('button', {
							className: (0, _classNames2.default)("react-currency-calculator__calculator-button", this.props.style ? "react-currency-calculator__calculator-button-" + this.props.style : undefined, this.getSizeClass(), this.props.className),
							onClick: function onClick(e) {
								return _this2.onClick(e);
							}
						}, this.props.display);
					};
	
					return Button;
				}(_react2.default.Component);
	
				exports.default = Button;
	
				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {
	
				module.exports = __webpack_require__(8);
	
				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {
	
				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                    Copyright (c) 2016 Jed Watson.
	                                                                    Licensed under the MIT License (MIT), see
	                                                                    http://jedwatson.github.io/classnames
	                                                                    */
				/* global define */
	
				(function () {
					'use strict';
	
					var hasOwn = {}.hasOwnProperty;
	
					function classNames() {
						var classes = [];
	
						for (var i = 0; i < arguments.length; i++) {
							var arg = arguments[i];
							if (!arg) continue;
	
							var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
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
				})();
	
				/***/
			},
			/* 9 */
			/***/function (module, exports) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
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
	
				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _reactDom = __webpack_require__(11);
	
				var _reactDom2 = _interopRequireDefault(_reactDom);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
	
				/***/
			},
			/* 11 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_11__;
	
				/***/
			},
			/* 12 */
			/***/function (module, exports) {
	
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
	
				/***/
			}])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGJkNTA3MzM2NTZmYzNiYjgxMTgiLCJ3ZWJwYWNrOi8vLy4vZG9jcy1zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2RvY3Mtc3JjL2NvbXBvbmVudHMvRG9jcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL2RvY3Mtc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIGVhOTMzMTMwNjEzOGNmNGQ1NmI4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9qcy9yZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0N1cnJlbmN5Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L251bWVyYWwvbnVtZXJhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L251bWVyYWwvbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2NsYXNzLW5hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vcmVhY3QtcG9ydGFsL2J1aWxkL3BvcnRhbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifSIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkRvY3MiLCJwcm9wcyIsInNlY3Rpb25zIiwidGl0bGUiLCJjb21wb25lbnQiLCJzdGF0ZSIsIngiLCJ5Iiwib25tb3VzZW1vdmUiLCJlIiwic2V0U3RhdGUiLCJjbGllbnRYIiwicGFnZVhPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0IiwiY2xpZW50WSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWFwIiwic2VjdGlvbiIsIkNvbXBvbmVudCIsIkRlZmF1bHRTZWN0aW9uIiwiUklHSFRfQk9UVE9NIiwiUklHSFRfVE9QIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsInN0eWxlIiwiZGlzcGxheSIsImFjdGlvbiIsImFsbENsZWFyIiwiYmFja3NwYWNlIiwicGVyY2VudCIsImRpdmlzaW9uIiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJtdWx0aXBsaWNhdGlvbiIsImZvdXIiLCJmaXZlIiwic2l4IiwibWludXMiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInBsdXMiLCJ6ZXJvIiwi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LFlBQ047QUFDRDtXQUFNLGNBQVMsTUFDYjtXQUFLLFlBQ047QUFDRDtXQUFNLGNBQVMsTUFDYjtXQUFLLFlBQ047QUFDRDtpQkFBWSxvQkFBUyxNQUNuQjtXQUFLLFlBQ047QUFDRDtjQUFTLGlCQUFTLE1BQ2hCO1dBQ0Q7QUFDRDtjQUFTLGlCQUFTLE1BQU0sVUFDdEI7V0FBSyxhQUNOO0FBQ0Q7V0FBTSxjQUFTLE1BQU0sVUFDbkI7V0FBSyxjQUFjLEtBQ3BCO0FBQ0Q7WUFBTyxlQUFTLE1BQU0sVUFDcEI7V0FBSyxjQUFjLEtBQ3BCO0FBQ0Q7cUJBQWdCLHdCQUFTLE1BQU0sVUFDN0I7V0FBSyxjQUFjLEtBQ3BCO0FBQ0Q7ZUFBVSxrQkFBUyxNQUFNLFVBQ3ZCO1dBQUssY0FBYyxLQUNwQjtBQUNEO1lBQU8sZUFBUyxNQUNkO1dBQ0Q7QUFDRDtlQUFVLGtCQUFTLE1BQ2pCO1dBQ0Q7QUFDRDtZQUFPLGVBQVMsTUFDZDtXQUNEO0FBQ0Q7Z0JBQVcsbUJBQVMsTUFDbEI7V0FDRDtBQS9EYTtBQUNkOztzQkFpRWE7Ozs7Ozs7Ozs7Ozs7QUNsRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQSwyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhiZDUwNzMzNjU2ZmMzYmI4MTE4IiwiaW1wb3J0IERvY3MgZnJvbSAnLi9jb21wb25lbnRzL0RvY3MnO1xuXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8RG9jcyAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpXG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzLXNyYy9hcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGVmYXVsdFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9ucy9EZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2NzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBbe1xuICAgICAgICB0aXRsZTogXCJEZWZhdWx0XCIsXG4gICAgICAgIGNvbXBvbmVudDogRGVmYXVsdFNlY3Rpb25cbiAgICB9XVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4OiBlLmNsaWVudFggKyAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSxcbiAgICAgICAgeTogZS5jbGllbnRZICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5SZWFjdCBDdXJyZW5jeUNhbGN1bGF0b3I8L2gxPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgbGVmdDogMH19Png6IHt0aGlzLnN0YXRlLnh9IHk6IHt0aGlzLnN0YXRlLnl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc2VjdGlvbnMubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17c2VjdGlvbi50aXRsZX0+e3NlY3Rpb24udGl0bGV9PC9saT5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICB7dGhpcy5zZWN0aW9ucy5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHNlY3Rpb24uY29tcG9uZW50O1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17c2VjdGlvbi50aXRsZX0+XG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzLXNyYy9jb21wb25lbnRzL0RvY3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0N1cnJlbmN5Q2FsY3VsYXRvciwgUmVjdCwgQWN0aW9ufSBmcm9tICcuLi8uLi8uLi9kaXN0L3JlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3InO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEN1cnJlbmN5Q2FsY3VsYXRvclxuICAgICAgICAgIGluaXRpYWxBbW91bnQ9ezB9XG4gICAgICAgICAgY3VycmVuY3lGb3JtYXQ9eyckMCwwWy5dMDAnfVxuICAgICAgICAgIHBvc2l0aW9ucz17W1JlY3QuUklHSFRfQk9UVE9NLCBSZWN0LlJJR0hUX1RPUCwgUmVjdC5MRUZUX0JPVFRPTSwgUmVjdC5MRUZUX1RPUF19XG4gICAgICAgICAgYnV0dG9ucz17W1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiA8c3Bhbj5BQzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogPHNwYW4+4oaQPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImxpZ2h0XCIsIGRpc3BsYXk6IDxzcGFuPiU8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5wZXJjZW50fSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogPHNwYW4+w7c8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbn0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj43PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uc2V2ZW59LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj44PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZWlnaHR9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj45PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ubmluZX0sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IDxzcGFuPsOXPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ubXVsdGlwbGljYXRpb259LFxuICAgICAgICAgICAgXSxbXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjQ8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5mb3VyfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+NTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmZpdmV9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj42PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uc2l4fSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogPHNwYW4+LTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLm1pbnVzfSxcbiAgICAgICAgICAgIF0sW1xuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4xPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ub25lfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Mjwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnR3b30sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjM8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi50aHJlZX0sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IDxzcGFuPis8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5wbHVzfSxcbiAgICAgICAgICAgIF0sW1xuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4wPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uemVyb30sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjAwPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVyb30sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPi48L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5kZWNpbWFsfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogPHNwYW4+PTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmVudGVyfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy1zcmMvY29tcG9uZW50cy9zZWN0aW9ucy9EZWZhdWx0LmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ3VycmVuY3lDYWxjdWxhdG9yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkN1cnJlbmN5Q2FsY3VsYXRvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYTkzMzEzMDYxMzhjZjRkNTZiOFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi93ZWJwYWNrL2Jvb3RzdHJhcCBlYTkzMzEzMDYxMzhjZjRkNTZiOCIsImltcG9ydCBDdXJyZW5jeUNhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL0N1cnJlbmN5Q2FsY3VsYXRvcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDdXJyZW5jeUNhbGN1bGF0b3IsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2pzL3JlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JlYWN0LXBvcnRhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY3lDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50XG4gICAgfVxuXG4gICAgd2luZG93Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgIGNhc2UgJzgnOlxuICAgICAgICAgIGNhc2UgJzknOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3IuaW5wdXROdW1iZXIoZS5rZXkpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLm9uQ2xpY2tPcGVyYXRvcihlLmtleSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3Iub25DbGlja09wZXJhdG9yKCfDtycpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLm9uQ2xpY2tPcGVyYXRvcignw5cnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5vbkNsaWNrUGVyY2VudCgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5vbkNsaWNrRW50ZXIoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQ2xlYXInOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3IuYWxsQ2xlYXIoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLmRlbGV0ZSgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tBbW91bnQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZUNhbGN1bGF0b3IoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JcIj5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrQW1vdW50KGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmFtb3VudCkuZm9ybWF0KHRoaXMucHJvcHMuY3VycmVuY3lGb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2sgaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZUNhbGN1bGF0b3IoKX0+XG4gICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgIHJlZj0nY2FsY3VsYXRvcidcbiAgICAgICAgICAgIGluaXRpYWxBbW91bnQ9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DdXJyZW5jeUNhbGN1bGF0b3IuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9DdXJyZW5jeUNhbGN1bGF0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCIvKiEgQHByZXNlcnZlXG4gKiBudW1lcmFsLmpzXG4gKiB2ZXJzaW9uIDogMi4wLjZcbiAqIGF1dGhvciA6IEFkYW0gRHJhcGVyXG4gKiBsaWNlbnNlIDogTUlUXG4gKiBodHRwOi8vYWRhbXdkcmFwZXIuZ2l0aHViLmNvbS9OdW1lcmFsLWpzL1xuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnbG9iYWwubnVtZXJhbCA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIFZhcmlhYmxlc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHZhciBudW1lcmFsLFxuICAgICAgICBfLFxuICAgICAgICBWRVJTSU9OID0gJzIuMC42JyxcbiAgICAgICAgZm9ybWF0cyA9IHt9LFxuICAgICAgICBsb2NhbGVzID0ge30sXG4gICAgICAgIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY3VycmVudExvY2FsZTogJ2VuJyxcbiAgICAgICAgICAgIHplcm9Gb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICBudWxsRm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdDogJzAsMCcsXG4gICAgICAgICAgICBzY2FsZVBlcmNlbnRCeTEwMDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgY3VycmVudExvY2FsZTogZGVmYXVsdHMuY3VycmVudExvY2FsZSxcbiAgICAgICAgICAgIHplcm9Gb3JtYXQ6IGRlZmF1bHRzLnplcm9Gb3JtYXQsXG4gICAgICAgICAgICBudWxsRm9ybWF0OiBkZWZhdWx0cy5udWxsRm9ybWF0LFxuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdDogZGVmYXVsdHMuZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgICAgIHNjYWxlUGVyY2VudEJ5MTAwOiBkZWZhdWx0cy5zY2FsZVBlcmNlbnRCeTEwMFxuICAgICAgICB9O1xuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIENvbnN0cnVjdG9yc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8vIE51bWVyYWwgcHJvdG90eXBlIG9iamVjdFxuICAgIGZ1bmN0aW9uIE51bWVyYWwoaW5wdXQsIG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVtYmVyO1xuICAgIH1cblxuICAgIG51bWVyYWwgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbixcbiAgICAgICAgICAgIHJlZ2V4cDtcblxuICAgICAgICBpZiAobnVtZXJhbC5pc051bWVyYWwoaW5wdXQpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IDAgfHwgdHlwZW9mIGlucHV0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSBudWxsIHx8IF8uaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuemVyb0Zvcm1hdCAmJiBpbnB1dCA9PT0gb3B0aW9ucy56ZXJvRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxGb3JtYXQgJiYgaW5wdXQgPT09IG9wdGlvbnMubnVsbEZvcm1hdCB8fCAhaW5wdXQucmVwbGFjZSgvW14wLTldKy9nLCAnJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtpbmQgaW4gZm9ybWF0cykge1xuICAgICAgICAgICAgICAgICAgICByZWdleHAgPSB0eXBlb2YgZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0ID09PSAnZnVuY3Rpb24nID8gZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0KCkgOiBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2V4cCAmJiBpbnB1dC5tYXRjaChyZWdleHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0c1traW5kXS51bmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uID0gdW5mb3JtYXRGdW5jdGlvbiB8fCBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXI7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZm9ybWF0RnVuY3Rpb24oaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIoaW5wdXQpfHwgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTnVtZXJhbChpbnB1dCwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvLyB2ZXJzaW9uIG51bWJlclxuICAgIG51bWVyYWwudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgICAvLyBjb21wYXJlIG51bWVyYWwgb2JqZWN0XG4gICAgbnVtZXJhbC5pc051bWVyYWwgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE51bWVyYWw7XG4gICAgfTtcblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbnNcbiAgICBudW1lcmFsLl8gPSBfID0ge1xuICAgICAgICAvLyBmb3JtYXRzIG51bWJlcnMgc2VwYXJhdG9ycywgZGVjaW1hbHMgcGxhY2VzLCBzaWducywgYWJicmV2aWF0aW9uc1xuICAgICAgICBudW1iZXJUb0Zvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IGxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIG5lZ1AgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcHREZWMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBsZWFkaW5nQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgIGFiYnIgPSAnJyxcbiAgICAgICAgICAgICAgICB0cmlsbGlvbiA9IDEwMDAwMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgYmlsbGlvbiA9IDEwMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgbWlsbGlvbiA9IDEwMDAwMDAsXG4gICAgICAgICAgICAgICAgdGhvdXNhbmQgPSAxMDAwLFxuICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJyxcbiAgICAgICAgICAgICAgICBuZWcgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UsIC8vIGZvcmNlIGFiYnJldmlhdGlvblxuICAgICAgICAgICAgICAgIGFicyxcbiAgICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIGludCxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgc2lnbmVkLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kcyxcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBuZXZlciBmb3JtYXQgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IDA7XG5cbiAgICAgICAgICAgIGFicyA9IE1hdGguYWJzKHZhbHVlKTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIHdlIHNob3VsZCB1c2UgcGFyZW50aGVzZXMgZm9yIG5lZ2F0aXZlIG51bWJlciBvciBpZiB3ZSBzaG91bGQgcHJlZml4IHdpdGggYSBzaWduXG4gICAgICAgICAgICAvLyBpZiBib3RoIGFyZSBwcmVzZW50IHdlIGRlZmF1bHQgdG8gcGFyZW50aGVzZXNcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKCcpKSB7XG4gICAgICAgICAgICAgICAgbmVnUCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1tcXCh8XFwpXS9nLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcrJykgfHwgbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJy0nKSkge1xuICAgICAgICAgICAgICAgIHNpZ25lZCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcrJykgPyBmb3JtYXQuaW5kZXhPZignKycpIDogdmFsdWUgPCAwID8gZm9ybWF0LmluZGV4T2YoJy0nKSA6IC0xO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9bXFwrfFxcLV0vZywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZWUgaWYgYWJicmV2aWF0aW9uIGlzIHdhbnRlZFxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdhJykpIHtcbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UgPSBmb3JtYXQubWF0Y2goL2Eoa3xtfGJ8dCk/Lyk7XG5cbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UgPSBhYmJyRm9yY2UgPyBhYmJyRm9yY2VbMV0gOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgYWJicmV2aWF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgYScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFiYnIgPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobmV3IFJlZ0V4cChhYmJyICsgJ2Fba21idF0/JyksICcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhYnMgPj0gdHJpbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICd0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cmlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gdHJpbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCB0cmlsbGlvbiAmJiBhYnMgPj0gYmlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJpbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gYmlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IGJpbGxpb24gJiYgYWJzID49IG1pbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdtJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBtaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIG1pbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCBtaWxsaW9uICYmIGFicyA+PSB0aG91c2FuZCAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ2snKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3VzYW5kXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMudGhvdXNhbmQ7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyB0aG91c2FuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvcHRpb25hbCBkZWNpbWFsc1xuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdbLl0nKSkge1xuICAgICAgICAgICAgICAgIG9wdERlYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ1suXScsICcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJyZWFrIG51bWJlciBhbmQgZm9ybWF0XG4gICAgICAgICAgICBpbnQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICBwcmVjaXNpb24gPSBmb3JtYXQuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIHRob3VzYW5kcyA9IGZvcm1hdC5pbmRleE9mKCcsJyk7XG4gICAgICAgICAgICBsZWFkaW5nQ291bnQgPSAoZm9ybWF0LnNwbGl0KCcuJylbMF0uc3BsaXQoJywnKVswXS5tYXRjaCgvMC9nKSB8fCBbXSkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhwcmVjaXNpb24sICdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uLnJlcGxhY2UoJ10nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbi5zcGxpdCgnWycpO1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIChwcmVjaXNpb25bMF0ubGVuZ3RoICsgcHJlY2lzaW9uWzFdLmxlbmd0aCksIHJvdW5kaW5nRnVuY3Rpb24sIHByZWNpc2lvblsxXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uLmxlbmd0aCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW50ID0gZGVjaW1hbC5zcGxpdCgnLicpWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhkZWNpbWFsLCAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsICsgZGVjaW1hbC5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0RGVjICYmIE51bWJlcihkZWNpbWFsLnNsaWNlKDEpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgMCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGFiYnJldmlhdGlvbiBhZ2FpbiBhZnRlciByb3VuZGluZ1xuICAgICAgICAgICAgaWYgKGFiYnIgJiYgIWFiYnJGb3JjZSAmJiBOdW1iZXIoaW50KSA+PSAxMDAwICYmIGFiYnIgIT09IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gU3RyaW5nKE51bWJlcihpbnQpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFiYnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy50aG91c2FuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBmb3JtYXQgbnVtYmVyXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGludCwgJy0nKSkge1xuICAgICAgICAgICAgICAgIGludCA9IGludC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBuZWcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW50Lmxlbmd0aCA8IGxlYWRpbmdDb3VudCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZWFkaW5nQ291bnQgLSBpbnQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGludCA9ICcwJyArIGludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aG91c2FuZHMgPiAtMSkge1xuICAgICAgICAgICAgICAgIGludCA9IGludC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxJyArIGxvY2FsZS5kZWxpbWl0ZXJzLnRob3VzYW5kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IGludCArIGRlY2ltYWwgKyAoYWJiciA/IGFiYnIgOiAnJyk7XG5cbiAgICAgICAgICAgIGlmIChuZWdQKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKG5lZ1AgJiYgbmVnID8gJygnIDogJycpICsgb3V0cHV0ICsgKG5lZ1AgJiYgbmVnID8gJyknIDogJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmVkID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gc2lnbmVkID09PSAwID8gKG5lZyA/ICctJyA6ICcrJykgKyBvdXRwdXQgOiBvdXRwdXQgKyAobmVnID8gJy0nIDogJysnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5lZykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnLScgKyBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICAvLyB1bmZvcm1hdHMgbnVtYmVycyBzZXBhcmF0b3JzLCBkZWNpbWFscyBwbGFjZXMsIHNpZ25zLCBhYmJyZXZpYXRpb25zXG4gICAgICAgIHN0cmluZ1RvTnVtYmVyOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW29wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgc3RyaW5nT3JpZ2luYWwgPSBzdHJpbmcsXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIG1pbGxpb246IDYsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpb246IDksXG4gICAgICAgICAgICAgICAgICAgIHRyaWxsaW9uOiAxMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgcmVnZXhwO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy56ZXJvRm9ybWF0ICYmIHN0cmluZyA9PT0gb3B0aW9ucy56ZXJvRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxGb3JtYXQgJiYgc3RyaW5nID09PSBvcHRpb25zLm51bGxGb3JtYXQgfHwgIXN0cmluZy5yZXBsYWNlKC9bXjAtOV0rL2csICcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZShsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsLCAnLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoYWJicmV2aWF0aW9uIGluIGFiYnJldmlhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgnW15hLXpBLVpdJyArIGxvY2FsZS5hYmJyZXZpYXRpb25zW2FiYnJldmlhdGlvbl0gKyAnKD86XFxcXCl8KFxcXFwnICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCArICcpPyg/OlxcXFwpKT8pPyQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nT3JpZ2luYWwubWF0Y2gocmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKj0gTWF0aC5wb3coMTAsIGFiYnJldmlhdGlvbnNbYWJicmV2aWF0aW9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSAoc3RyaW5nLnNwbGl0KCctJykubGVuZ3RoICsgTWF0aC5taW4oc3RyaW5nLnNwbGl0KCcoJykubGVuZ3RoIC0gMSwgc3RyaW5nLnNwbGl0KCcpJykubGVuZ3RoIC0gMSkpICUgMiA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24gbnVtYmVyc1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXjAtOVxcLl0rL2csICcnKTtcblxuICAgICAgICAgICAgICAgIHZhbHVlICo9IE51bWJlcihzdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTmFOOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogZnVuY3Rpb24oc3RyaW5nLCBzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuaW5kZXhPZihzZWFyY2gpICE9PSAtMTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbihzdHJpbmcsIHN1YlN0cmluZywgc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgc3RhcnQpICsgc3ViU3RyaW5nICsgc3RyaW5nLnNsaWNlKHN0YXJ0KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2sgLyosIGluaXRpYWxWYWx1ZSovKSB7XG4gICAgICAgICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdChhcnJheSksXG4gICAgICAgICAgICAgICAgbGVuID0gdC5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICAgICAgayA9IDAsXG4gICAgICAgICAgICAgICAgdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuICYmICEoayBpbiB0KSkge1xuICAgICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGsgPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRbaysrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoayBpbiB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIHRba10sIGssIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBtdWx0aXBsaWVyIG5lY2Vzc2FyeSB0byBtYWtlIHggPj0gMSxcbiAgICAgICAgICogZWZmZWN0aXZlbHkgZWxpbWluYXRpbmcgbWlzY2FsY3VsYXRpb25zIGNhdXNlZCBieVxuICAgICAgICAgKiBmaW5pdGUgcHJlY2lzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgbXVsdGlwbGllcjogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHgudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMiA/IDEgOiBNYXRoLnBvdygxMCwgcGFydHNbMV0ubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdpdmVuIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmV0dXJucyB0aGUgbWF4aW11bVxuICAgICAgICAgKiBtdWx0aXBsaWVyIHRoYXQgbXVzdCBiZSB1c2VkIHRvIG5vcm1hbGl6ZSBhbiBvcGVyYXRpb24gaW52b2x2aW5nXG4gICAgICAgICAqIGFsbCBvZiB0aGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgY29ycmVjdGlvbkZhY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oYWNjdW0sIG5leHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW4gPSBfLm11bHRpcGxpZXIobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtID4gbW4gPyBhY2N1bSA6IG1uO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0b0ZpeGVkKCkgdGhhdCB0cmVhdHMgZmxvYXRzIG1vcmUgbGlrZSBkZWNpbWFsc1xuICAgICAgICAgKlxuICAgICAgICAgKiBGaXhlcyBiaW5hcnkgcm91bmRpbmcgaXNzdWVzIChlZy4gKDAuNjE1KS50b0ZpeGVkKDIpID09PSAnMC42MScpIHRoYXQgcHJlc2VudFxuICAgICAgICAgKiBwcm9ibGVtcyBmb3IgYWNjb3VudGluZy0gYW5kIGZpbmFuY2UtcmVsYXRlZCBzb2Z0d2FyZS5cbiAgICAgICAgICovXG4gICAgICAgIHRvRml4ZWQ6IGZ1bmN0aW9uKHZhbHVlLCBtYXhEZWNpbWFscywgcm91bmRpbmdGdW5jdGlvbiwgb3B0aW9uYWxzKSB7XG4gICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICBtaW5EZWNpbWFscyA9IG1heERlY2ltYWxzIC0gKG9wdGlvbmFscyB8fCAwKSxcbiAgICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsc1JlZ0V4cCxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIC8vIFVzZSB0aGUgc21hbGxlc3QgcHJlY2lzaW9uIHZhbHVlIHBvc3NpYmxlIHRvIGF2b2lkIGVycm9ycyBmcm9tIGZsb2F0aW5nIHBvaW50IHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbiA9IE1hdGgubWluKE1hdGgubWF4KHNwbGl0VmFsdWVbMV0ubGVuZ3RoLCBtaW5EZWNpbWFscyksIG1heERlY2ltYWxzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24gPSBtaW5EZWNpbWFscztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG93ZXIgPSBNYXRoLnBvdygxMCwgYm91bmRlZFByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIC8vIE11bHRpcGx5IHVwIGJ5IHByZWNpc2lvbiwgcm91bmQgYWNjdXJhdGVseSwgdGhlbiBkaXZpZGUgYW5kIHVzZSBuYXRpdmUgdG9GaXhlZCgpOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHJvdW5kaW5nRnVuY3Rpb24odmFsdWUgKyAnZSsnICsgYm91bmRlZFByZWNpc2lvbikgLyBwb3dlcikudG9GaXhlZChib3VuZGVkUHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbmFscyA+IG1heERlY2ltYWxzIC0gYm91bmRlZFByZWNpc2lvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ1xcXFwuPzB7MSwnICsgKG9wdGlvbmFscyAtIChtYXhEZWNpbWFscyAtIGJvdW5kZWRQcmVjaXNpb24pKSArICd9JCcpO1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKG9wdGlvbmFsc1JlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGF2YWxpYWJsZSBvcHRpb25zXG4gICAgbnVtZXJhbC5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIGF2YWxpYWJsZSBmb3JtYXRzXG4gICAgbnVtZXJhbC5mb3JtYXRzID0gZm9ybWF0cztcblxuICAgIC8vIGF2YWxpYWJsZSBmb3JtYXRzXG4gICAgbnVtZXJhbC5sb2NhbGVzID0gbG9jYWxlcztcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgY3VycmVudCBsb2NhbGUuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4gICAgLy8gbG9jYWxlIGtleS5cbiAgICBudW1lcmFsLmxvY2FsZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBvcHRpb25zLmN1cnJlbnRMb2NhbGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zLmN1cnJlbnRMb2NhbGU7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBsb2FkZWQgbG9jYWxlIGRhdGEuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnRcbiAgICAvLyBnbG9iYWwgbG9jYWxlIG9iamVjdC5cbiAgICBudW1lcmFsLmxvY2FsZURhdGEgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGVzW29wdGlvbnMuY3VycmVudExvY2FsZV07XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIWxvY2FsZXNba2V5XSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxvY2FsZSA6ICcgKyBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNba2V5XTtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgb3B0aW9uc1twcm9wZXJ0eV0gPSBkZWZhdWx0c1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbnVtZXJhbC56ZXJvRm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMuemVyb0Zvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6IG51bGw7XG4gICAgfTtcblxuICAgIG51bWVyYWwubnVsbEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5udWxsRm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogbnVsbDtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5kZWZhdWx0Rm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdEZvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6ICcwLjAnO1xuICAgIH07XG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgZm9ybWF0KSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXNbdHlwZSArICdzJ11bbmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobmFtZSArICcgJyArIHR5cGUgKyAnIGFscmVhZHkgcmVnaXN0ZXJlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdHlwZSArICdzJ11bbmFtZV0gPSBmb3JtYXQ7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9O1xuXG5cbiAgICBudW1lcmFsLnZhbGlkYXRlID0gZnVuY3Rpb24odmFsLCBjdWx0dXJlKSB7XG4gICAgICAgIHZhciBfZGVjaW1hbFNlcCxcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCxcbiAgICAgICAgICAgIF9jdXJyU3ltYm9sLFxuICAgICAgICAgICAgX3ZhbEFycmF5LFxuICAgICAgICAgICAgX2FiYnJPYmosXG4gICAgICAgICAgICBfdGhvdXNhbmRSZWdFeCxcbiAgICAgICAgICAgIGxvY2FsZURhdGEsXG4gICAgICAgICAgICB0ZW1wO1xuXG4gICAgICAgIC8vY29lcmNlIHZhbCB0byBzdHJpbmdcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWwgKz0gJyc7XG5cbiAgICAgICAgICAgIGlmIChjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ051bWVyYWwuanM6IFZhbHVlIGlzIG5vdCBzdHJpbmcuIEl0IGhhcyBiZWVuIGNvLWVyY2VkIHRvOiAnLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy90cmltIHdoaXRlc3BhY2VzIGZyb20gZWl0aGVyIHNpZGVzXG4gICAgICAgIHZhbCA9IHZhbC50cmltKCk7XG5cbiAgICAgICAgLy9pZiB2YWwgaXMganVzdCBkaWdpdHMgcmV0dXJuIHRydWVcbiAgICAgICAgaWYgKCEhdmFsLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHZhbCBpcyBlbXB0eSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRoZSBkZWNpbWFsIGFuZCB0aG91c2FuZHMgc2VwYXJhdG9yIGZyb20gbnVtZXJhbC5sb2NhbGVEYXRhXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZSBjdWx0dXJlIGlzIHVuZGVyc3Rvb2QgYnkgbnVtZXJhbC4gaWYgbm90LCBkZWZhdWx0IGl0IHRvIGN1cnJlbnQgbG9jYWxlXG4gICAgICAgICAgICBsb2NhbGVEYXRhID0gbnVtZXJhbC5sb2NhbGVEYXRhKGN1bHR1cmUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2NhbGVEYXRhID0gbnVtZXJhbC5sb2NhbGVEYXRhKG51bWVyYWwubG9jYWxlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXR1cCB0aGUgZGVsaW1pdGVycyBhbmQgY3VycmVuY3kgc3ltYm9sIGJhc2VkIG9uIGN1bHR1cmUvbG9jYWxlXG4gICAgICAgIF9jdXJyU3ltYm9sID0gbG9jYWxlRGF0YS5jdXJyZW5jeS5zeW1ib2w7XG4gICAgICAgIF9hYmJyT2JqID0gbG9jYWxlRGF0YS5hYmJyZXZpYXRpb25zO1xuICAgICAgICBfZGVjaW1hbFNlcCA9IGxvY2FsZURhdGEuZGVsaW1pdGVycy5kZWNpbWFsO1xuICAgICAgICBpZiAobG9jYWxlRGF0YS5kZWxpbWl0ZXJzLnRob3VzYW5kcyA9PT0gJy4nKSB7XG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAgPSAnXFxcXC4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Rob3VzYW5kU2VwID0gbG9jYWxlRGF0YS5kZWxpbWl0ZXJzLnRob3VzYW5kcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkYXRpbmcgY3VycmVuY3kgc3ltYm9sXG4gICAgICAgIHRlbXAgPSB2YWwubWF0Y2goL15bXlxcZF0rLyk7XG4gICAgICAgIGlmICh0ZW1wICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyKDEpO1xuICAgICAgICAgICAgaWYgKHRlbXBbMF0gIT09IF9jdXJyU3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy92YWxpZGF0aW5nIGFiYnJldmlhdGlvbiBzeW1ib2xcbiAgICAgICAgdGVtcCA9IHZhbC5tYXRjaCgvW15cXGRdKyQvKTtcbiAgICAgICAgaWYgKHRlbXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICBpZiAodGVtcFswXSAhPT0gX2FiYnJPYmoudGhvdXNhbmQgJiYgdGVtcFswXSAhPT0gX2FiYnJPYmoubWlsbGlvbiAmJiB0ZW1wWzBdICE9PSBfYWJick9iai5iaWxsaW9uICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLnRyaWxsaW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3Rob3VzYW5kUmVnRXggPSBuZXcgUmVnRXhwKF90aG91c2FuZFNlcCArICd7Mn0nKTtcblxuICAgICAgICBpZiAoIXZhbC5tYXRjaCgvW15cXGQuLF0vZykpIHtcbiAgICAgICAgICAgIF92YWxBcnJheSA9IHZhbC5zcGxpdChfZGVjaW1hbFNlcCk7XG4gICAgICAgICAgICBpZiAoX3ZhbEFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfdmFsQXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrLipcXGQkLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsQXJyYXlbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpICYmICEhIF92YWxBcnJheVsxXS5tYXRjaCgvXlxcZCskLykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKy4qXFxkJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpICYmICEhIF92YWxBcnJheVsxXS5tYXRjaCgvXlxcZCskLykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTnVtZXJhbCBQcm90b3R5cGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBudW1lcmFsLmZuID0gTnVtZXJhbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1lcmFsKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKGlucHV0U3RyaW5nLCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl92YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBpbnB1dFN0cmluZyB8fCBvcHRpb25zLmRlZmF1bHRGb3JtYXQsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb247XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgcm91bmRpbmdGdW5jdGlvblxuICAgICAgICAgICAgcm91bmRpbmdGdW5jdGlvbiA9IHJvdW5kaW5nRnVuY3Rpb24gfHwgTWF0aC5yb3VuZDtcblxuICAgICAgICAgICAgLy8gZm9ybWF0IGJhc2VkIG9uIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDAgJiYgb3B0aW9ucy56ZXJvRm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3B0aW9ucy56ZXJvRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCAmJiBvcHRpb25zLm51bGxGb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvcHRpb25zLm51bGxGb3JtYXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa2luZCBpbiBmb3JtYXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQubWF0Y2goZm9ybWF0c1traW5kXS5yZWdleHBzLmZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0c1traW5kXS5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRGdW5jdGlvbiB8fCBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBmb3JtYXRGdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yLmNhbGwobnVsbCwgdGhpcy5fdmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtICsgTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY3Vycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrLCAwKSAvIGNvcnJGYWN0b3I7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBzdWJ0cmFjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yLmNhbGwobnVsbCwgdGhpcy5fdmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtIC0gTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY3Vycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3ZhbHVlXSwgY2JhY2ssIE1hdGgucm91bmQodGhpcy5fdmFsdWUgKiBjb3JyRmFjdG9yKSkgLyBjb3JyRmFjdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgbXVsdGlwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3Vycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYWNjdW0gKiBjb3JyRmFjdG9yKSAqIE1hdGgucm91bmQoY3VyciAqIGNvcnJGYWN0b3IpIC8gTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrLCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpdmlkZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhY2N1bSAqIGNvcnJGYWN0b3IpIC8gTWF0aC5yb3VuZChjdXJyICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMobnVtZXJhbCh0aGlzLl92YWx1ZSkuc3VidHJhY3QodmFsdWUpLnZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgRGVmYXVsdCBMb2NhbGUgJiYgRm9ybWF0XG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbihudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+KG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2JwcycsIHtcbiAgICAgICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IC8oQlBTKS8sXG4gICAgICAgICAgICAgICAgdW5mb3JtYXQ6IC8oQlBTKS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BhY2UgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIEJQUycpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwMDtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgQlBTXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9CUFMvLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKG91dHB1dCwgJyknKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5zcGxpY2UoLTEsIDAsIHNwYWNlICsgJ0JQUycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBzcGFjZSArICdCUFMnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiArKG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpICogMC4wMDAxKS50b0ZpeGVkKDE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlY2ltYWwgPSB7XG4gICAgICAgICAgICBiYXNlOiAxMDAwLFxuICAgICAgICAgICAgc3VmZml4ZXM6IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddXG4gICAgICAgIH0sXG4gICAgICAgIGJpbmFyeSA9IHtcbiAgICAgICAgICAgIGJhc2U6IDEwMjQsXG4gICAgICAgICAgICBzdWZmaXhlczogWydCJywgJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXVxuICAgICAgICB9O1xuXG4gICAgdmFyIGFsbFN1ZmZpeGVzID0gIGRlY2ltYWwuc3VmZml4ZXMuY29uY2F0KGJpbmFyeS5zdWZmaXhlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNpbWFsLnN1ZmZpeGVzLmluZGV4T2YoaXRlbSkgPCAwO1xuICAgICAgICB9KSk7XG4gICAgICAgIHZhciB1bmZvcm1hdFJlZ2V4ID0gYWxsU3VmZml4ZXMuam9pbignfCcpO1xuICAgICAgICAvLyBBbGxvdyBzdXBwb3J0IGZvciBCUFMgKGh0dHA6Ly93d3cuaW52ZXN0b3BlZGlhLmNvbS90ZXJtcy9iL2Jhc2lzcG9pbnQuYXNwKVxuICAgICAgICB1bmZvcm1hdFJlZ2V4ID0gJygnICsgdW5mb3JtYXRSZWdleC5yZXBsYWNlKCdCJywgJ0IoPyFQUyknKSArICcpJztcblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdieXRlcycsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKFswXFxzXWk/YikvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IG5ldyBSZWdFeHAodW5mb3JtYXRSZWdleClcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGJ5dGVzID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ2liJykgPyBiaW5hcnkgOiBkZWNpbWFsLFxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgYicpIHx8IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgaWInKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/aT9iLywgJycpO1xuXG4gICAgICAgICAgICBmb3IgKHBvd2VyID0gMDsgcG93ZXIgPD0gYnl0ZXMuc3VmZml4ZXMubGVuZ3RoOyBwb3dlcisrKSB7XG4gICAgICAgICAgICAgICAgbWluID0gTWF0aC5wb3coYnl0ZXMuYmFzZSwgcG93ZXIpO1xuICAgICAgICAgICAgICAgIG1heCA9IE1hdGgucG93KGJ5dGVzLmJhc2UsIHBvd2VyICsgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IDAgfHwgdmFsdWUgPj0gbWluICYmIHZhbHVlIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeCArPSBieXRlcy5zdWZmaXhlc1twb3dlcl07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBtaW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIHN1ZmZpeDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZyksXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHBvd2VyID0gZGVjaW1hbC5zdWZmaXhlcy5sZW5ndGggLSAxOyBwb3dlciA+PSAwOyBwb3dlci0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCBkZWNpbWFsLnN1ZmZpeGVzW3Bvd2VyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllciA9IE1hdGgucG93KGRlY2ltYWwuYmFzZSwgcG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCBiaW5hcnkuc3VmZml4ZXNbcG93ZXJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyID0gTWF0aC5wb3coYmluYXJ5LmJhc2UsIHBvd2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSAoYnl0ZXNNdWx0aXBsaWVyIHx8IDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnY3VycmVuY3knLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhcXCQpL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIHN5bWJvbHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogZm9ybWF0Lm1hdGNoKC9eKFtcXCt8XFwtfFxcKHxcXHN8XFwkXSopLylbMF0sXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiBmb3JtYXQubWF0Y2goLyhbXFwrfFxcLXxcXCl8XFxzfFxcJF0qKSQvKVswXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBzdHJpcCBmb3JtYXQgb2Ygc3BhY2VzIGFuZCAkXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP1xcJFxccz8vLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCB0aGUgbnVtYmVyXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYmVmb3JlIGFuZCBhZnRlciBiYXNlZCBvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmJlZm9yZSA9IHN5bWJvbHMuYmVmb3JlLnJlcGxhY2UoL1tcXC1cXChdLywgJycpO1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYWZ0ZXIgPSBzeW1ib2xzLmFmdGVyLnJlcGxhY2UoL1tcXC1cXCldLywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDAgJiYgKCFudW1lcmFsLl8uaW5jbHVkZXMoc3ltYm9scy5iZWZvcmUsICctJykgJiYgIW51bWVyYWwuXy5pbmNsdWRlcyhzeW1ib2xzLmJlZm9yZSwgJygnKSkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmJlZm9yZSA9ICctJyArIHN5bWJvbHMuYmVmb3JlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBiZWZvcmUgc3ltYm9sXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ltYm9scy5iZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xzLmJlZm9yZVtpXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLmluc2VydChvdXRwdXQsIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLmluc2VydChvdXRwdXQsICcgJywgaSArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGFmdGVyIHN5bWJvbFxuICAgICAgICAgICAgZm9yIChpID0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbHMuYWZ0ZXJbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICckJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGkgPT09IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMSA/IG91dHB1dCArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wgOiBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCwgLShzeW1ib2xzLmFmdGVyLmxlbmd0aCAtICgxICsgaSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGkgPT09IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMSA/IG91dHB1dCArICcgJyA6IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCAnICcsIC0oc3ltYm9scy5hZnRlci5sZW5ndGggLSAoMSArIGkpICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbC5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdleHBvbmVudGlhbCcsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKGVcXCt8ZS0pLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKGVcXCt8ZS0pL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQsXG4gICAgICAgICAgICAgICAgZXhwb25lbnRpYWwgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFudW1lcmFsLl8uaXNOYU4odmFsdWUpID8gdmFsdWUudG9FeHBvbmVudGlhbCgpIDogJzBlKzAnLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gZXhwb25lbnRpYWwuc3BsaXQoJ2UnKTtcblxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2VbXFwrfFxcLV17MX0wLywgJycpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQoTnVtYmVyKHBhcnRzWzBdKSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArICdlJyArIHBhcnRzWzFdO1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCAnZSsnKSA/IHN0cmluZy5zcGxpdCgnZSsnKSA6IHN0cmluZy5zcGxpdCgnZS0nKSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihwYXJ0c1swXSksXG4gICAgICAgICAgICAgICAgcG93ZXIgPSBOdW1iZXIocGFydHNbMV0pO1xuXG4gICAgICAgICAgICBwb3dlciA9IG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsICdlLScpID8gcG93ZXIgKj0gLTEgOiBwb3dlcjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBudW1lcmFsLl8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3VyciksXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IChhY2N1bSAqIGNvcnJGYWN0b3IpICogKGN1cnIgKiBjb3JyRmFjdG9yKSAvIChjb3JyRmFjdG9yICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bWVyYWwuXy5yZWR1Y2UoW3ZhbHVlLCBNYXRoLnBvdygxMCwgcG93ZXIpXSwgY2JhY2ssIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ29yZGluYWwnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhvKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgbycpID8gJyAnIDogJyc7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/by8sICcnKTtcblxuICAgICAgICAgICAgb3JkaW5hbCArPSBsb2NhbGUub3JkaW5hbCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIG9yZGluYWw7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAncGVyY2VudGFnZScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKCUpLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKCUpL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBzcGFjZSA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgJScpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5vcHRpb25zLnNjYWxlUGVyY2VudEJ5MTAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSAlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP1xcJS8sICcnKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKG91dHB1dCwgJyknKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5zcGxpdCgnJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQuc3BsaWNlKC0xLCAwLCBzcGFjZSArICclJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIHNwYWNlICsgJyUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZyk7XG4gICAgICAgICAgICBpZiAobnVtZXJhbC5vcHRpb25zLnNjYWxlUGVyY2VudEJ5MTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciAqIDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ3RpbWUnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyg6KS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyg6KS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjAgLyA2MCksXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gKGhvdXJzICogNjAgKiA2MCkpIC8gNjApLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLnJvdW5kKHZhbHVlIC0gKGhvdXJzICogNjAgKiA2MCkgLSAobWludXRlcyAqIDYwKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBob3VycyArICc6JyArIChtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcykgKyAnOicgKyAoc2Vjb25kcyA8IDEwID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgdGltZUFycmF5ID0gc3RyaW5nLnNwbGl0KCc6JyksXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IDA7XG5cbiAgICAgICAgICAgIC8vIHR1cm4gaG91cnMgYW5kIG1pbnV0ZXMgaW50byBzZWNvbmRzIGFuZCBhZGQgdGhlbSBhbGwgdXBcbiAgICAgICAgICAgIGlmICh0aW1lQXJyYXkubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gaG91cnNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzBdKSAqIDYwICogNjApO1xuICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzFdKSAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyBOdW1iZXIodGltZUFycmF5WzJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGltZUFycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzBdKSAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyBOdW1iZXIodGltZUFycmF5WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cbnJldHVybiBudW1lcmFsO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L251bWVyYWwvbnVtZXJhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L251bWVyYWwvbnVtZXJhbC5qcyIsIi8qISBAcHJlc2VydmVcbiAqIG51bWVyYWwuanNcbiAqIGxvY2FsZXMgOiAyLjAuNlxuICogbGljZW5zZSA6IE1JVFxuICogaHR0cDovL2FkYW13ZHJhcGVyLmdpdGh1Yi5jb20vTnVtZXJhbC1qcy9cbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnbnVtZXJhbCddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnLi9udW1lcmFsJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoZ2xvYmFsLm51bWVyYWwpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKG51bWVyYWwpIHtcbiAgICBcbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2JnJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7IC8vIEkgZm91bmQgdGhlc2UgaGVyZSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzI4L3ZlcmlmeS9udW1iZXJzL2JnLmh0bWxcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YXQuNC7JyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0YLRgNC70L0nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIC8vIGdvb2dsZSB0cmFuc2xhdGUgc3VnZ2VzdHM6XG4gICAgICAgICAgICAvLyAxc3Q9MS3QstC4OyAybmQ9Mi3RgNC4OyA3dGg9Ny3QvNC4O1xuICAgICAgICAgICAgLy8gOHRoPTgt0LzQuCBhbmQgbWFueSBvdGhlcnMgZW5kIHdpdGggLdGC0LhcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIDNyZD0zLdGC0LhcbiAgICAgICAgICAgIC8vIEhvd2V2ZXIgc2luY2UgSSd2ZSBzZWVuIHN1Z2dlc3Rpb25zIHRoYXQgaW5cbiAgICAgICAgICAgIC8vIEJ1bGdhcmlhbiB0aGUgb3JkaW5hbCBjYW4gYmUgdGFrZW4gaW5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBmb3JtcyAobWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKVxuICAgICAgICAgICAgLy8gSSd2ZSBvcHRlZCB0byB3aW1wIG91dCBvbiBjb21taXRpbmcgdGhhdCB0byBjb2RlXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfQu9CyJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnY2hzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+WNgycsXG4gICAgICAgICAgICBtaWxsaW9uOiAn55m+5LiHJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfljYHkur8nLFxuICAgICAgICAgICAgdHJpbGxpb246ICflhYYnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfCpSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdjcycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0aXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWwuJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ0vEjSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdkYS1kaycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaW8nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21pYScsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ2InXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdES0snXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGUtY2gnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdDSEYnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4tYXUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuLWdiJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fiAobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnwqMnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4temEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdSJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VzLWVzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21tJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAoYiA9PT0gMSB8fCBiID09PSAzKSA/ICdlcicgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICdkbycgOlxuICAgICAgICAgICAgICAgICAgICAoYiA9PT0gNyB8fCBiID09PSAwKSA/ICdtbycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDgpID8gJ3ZvJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDkpID8gJ25vJyA6ICd0byc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXMnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbW0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuIChiID09PSAxIHx8IGIgPT09IDMpID8gJ2VyJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ2RvJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDcgfHwgYiA9PT0gMCkgPyAnbW8nIDpcblx0XHQoYiA9PT0gOCkgPyAndm8nIDpcblx0XHQoYiA9PT0gOSkgPyAnbm8nIDogJ3RvJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnIHR1aCcsXG4gICAgICAgICAgICBtaWxsaW9uOiAnIG1sbicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnIG1sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyB0cmwnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZmknLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnRycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnItY2EnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnRycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnItY2gnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJ1xcJycsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgPT09IDEgPyAnZXInIDogJ2UnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnQ0hGJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2ZyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/ICdlcicgOiAnZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaHUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnRScsICAvLyBlemVyXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsICAgLy8gbWlsbGnDs1xuICAgICAgICAgICAgYmlsbGlvbjogJ01yZCcsIC8vIG1pbGxpw6FyZFxuICAgICAgICAgICAgdHJpbGxpb246ICdUJyAgIC8vIHRyaWxsacOzXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICcgRnQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaXQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnbWlsYScsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlsJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnamEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn5Y2DJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfnmb7kuIcnLFxuICAgICAgICAgICAgYmlsbGlvbjogJ+WNgeWEhCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ+WFhidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ8KlJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2x2Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyB0xatrc3QuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICcgbWlsai4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJyBtbGpyZC4nLFxuICAgICAgICAgICAgdHJpbGxpb246ICcgdHJpbGouJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ25sLWJlJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWwgIDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kIDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbiAgOiAnIG1sbicsXG4gICAgICAgICAgICBiaWxsaW9uICA6ICcgbWxkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uIDogJyBibG4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gbnVtYmVyICUgMTAwO1xuXG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAhPT0gMCAmJiByZW1haW5kZXIgPD0gMSB8fCByZW1haW5kZXIgPT09IDggfHwgcmVtYWluZGVyID49IDIwKSA/ICdzdGUnIDogJ2RlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCAnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbmwtbmwnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbCAgOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQgOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uICA6ICdtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbiAgOiAnbXJkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uIDogJ2JsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSBudW1iZXIgJSAxMDA7XG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAhPT0gMCAmJiByZW1haW5kZXIgPD0gMSB8fCByZW1haW5kZXIgPT09IDggfHwgcmVtYWluZGVyID49IDIwKSA/ICdzdGUnIDogJ2RlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCAnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbm8nLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdrcidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwbCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0eXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ2JsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1BMTidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwdC1icicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdtaWwnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbGjDtWVzJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdSJCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwdC1wdCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnwronO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3J1LXVhJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ9GC0YvRgS4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ9C80LvQvScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIG5vdCBpZGVhbCwgYnV0IHNpbmNlIGluIFJ1c3NpYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1xcdTIwQjQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncnUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YLRi9GBLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAn0LzQu9C9LicsXG4gICAgICAgICAgICBiaWxsaW9uOiAn0LzQu9GA0LQuJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0YLRgNC70L0uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBSdXNzaWFuIGl0IGNhbiB0YWtlbiBvblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGZvcm1zIChtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFsbCB3ZSBjYW4gZG9cbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfRgNGD0LEuJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3NrJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ3Rpcy4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbC4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3NsJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbycsXG4gICAgICAgICAgICBiaWxsaW9uOiAnbXJkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndHJpbGlqb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3RoJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+C4nuC4seC4mScsXG4gICAgICAgICAgICBtaWxsaW9uOiAn4Lil4LmJ4Liy4LiZJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfguJ7guLHguJnguKXguYnguLLguJknLFxuICAgICAgICAgICAgdHJpbGxpb246ICfguKXguYnguLLguJnguKXguYnguLLguJknXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfguL8nXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3VmZml4ZXMgPSB7XG4gICAgICAgICAgICAxOiAnXFwnaW5jaScsXG4gICAgICAgICAgICA1OiAnXFwnaW5jaScsXG4gICAgICAgICAgICA4OiAnXFwnaW5jaScsXG4gICAgICAgICAgICA3MDogJ1xcJ2luY2knLFxuICAgICAgICAgICAgODA6ICdcXCdpbmNpJyxcblxuICAgICAgICAgICAgMjogJ1xcJ25jaScsXG4gICAgICAgICAgICA3OiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDIwOiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDUwOiAnXFwnbmNpJyxcblxuICAgICAgICAgICAgMzogJ1xcJ8O8bmPDvCcsXG4gICAgICAgICAgICA0OiAnXFwnw7xuY8O8JyxcbiAgICAgICAgICAgIDEwMDogJ1xcJ8O8bmPDvCcsXG5cbiAgICAgICAgICAgIDY6ICdcXCduY8SxJyxcblxuICAgICAgICAgICAgOTogJ1xcJ3VuY3UnLFxuICAgICAgICAgICAgMTA6ICdcXCd1bmN1JyxcbiAgICAgICAgICAgIDMwOiAnXFwndW5jdScsXG5cbiAgICAgICAgICAgIDYwOiAnXFwnxLFuY8SxJyxcbiAgICAgICAgICAgIDkwOiAnXFwnxLFuY8SxJ1xuICAgICAgICB9O1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3RyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2JpbicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlseW9uJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdtaWx5YXInLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0cmlseW9uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7ICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgICAgICAgICAgICByZXR1cm4gJ1xcJ8SxbmPEsSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgYiA9IG51bWJlciAlIDEwMCAtIGEsXG4gICAgICAgICAgICAgICAgYyA9IG51bWJlciA+PSAxMDAgPyAxMDAgOiBudWxsO1xuXG4gICAgICAgICAgcmV0dXJuIHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCQSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICd1ay11YScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfRgtC40YEuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0LHQu9C9J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBVa3JhaW5pYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCNCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3ZpJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyBuZ2jDrG4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJyB0cmnhu4d1JyxcbiAgICAgICAgICAgIGJpbGxpb246ICcgdOG7tycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyBuZ2jDrG4gdOG7tydcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCqydcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbnVtZXJhbC9sb2NhbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbnVtZXJhbC9sb2NhbGVzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHByb3BzLmluaXRpYWxBbW91bnQsXG4gICAgICBhbW91bnQ6IHByb3BzLmluaXRpYWxBbW91bnQsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGFkanVzdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgY29uc3Qgd2luZG93UmVjdCA9IFJlY3QuY3JlYXRlV2l0aFdpbmRvdygpXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5yZWZzLmNhbGN1bGF0b3IsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcblxuICAgICAgbGV0IG5ld0NhbGNSZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NLZXkgPSB0aGlzLnByb3BzLnBvc2l0aW9uc1tpXVxuICAgICAgICBjb25zdCByZWN0ID0gYnV0dG9uUmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgaWYod2luZG93UmVjdC5jb250YWlucyhyZWN0KSl7XG4gICAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFuZXdDYWxjUmVjdCl7XG4gICAgICAgIG5ld0NhbGNSZWN0ID0gd2luZG93UmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIFJlY3QuQ0VOVEVSKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgeDogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWCxcbiAgICAgICAgeTogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0TnVtYmVyKG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50O1xuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQoYW1vdW50LCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICB9XG5cbiAgICBhbW91bnQgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgIH0sIGNhbGxiYWNrKVxuICB9XG5cbiAgaW5wdXRPcGVyYXRvcihvcGVyYXRvciwgYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RGVjaW1hbCgpe1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheS5pbmRleE9mKCcuJykgPT09IC0xKXtcbiAgICAgIHRoaXMuaW5wdXROdW1iZXIoJy4nKVxuICAgIH1cbiAgfVxuXG4gIGlucHV0UGVyY2VudChidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1bml0OiB7XG4gICAgICAgIHZhbHVlOiclJyxcbiAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheVxuICAgICAgfX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSAvIDEwMH0pXG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgIHVuaXQ6IHt9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhbGxDbGVhcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgYW1vdW50OiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKHZhbHVlID09PSAnMCcpe1xuICAgICAgICBuZXdTdGF0ZVsndW5pdCddID0ge31cbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgbmV3U3RhdGVbJ2Rpc3BsYXknXSA9ICF2YWx1ZSA/IDAgOiB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxvY2FsZSA9IG51bWVyYWwubG9jYWxlRGF0YSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cImNhbGN1bGF0b3JcIiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yXCIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b24tY2xvc2VcIiBkaXNwbGF5PVwiw5dcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1kaXNwbGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24ga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9IGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX0gc3R5bGU9e2J0bi5zdHlsZX0gc2l6ZT17YnRuLnNpemV9IGRpc3BsYXk9e2J0bi5kaXNwbGF5fSBvbkNsaWNrPXtkaXNwbGF5ID0+IGJ0bi5hY3Rpb24odGhpcywgYnRuKX0gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuZGlzcGxheSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZUNsYXNzKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2l6ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS53aWR0aCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jdXJyZW5jeS1jYWxjdWxhdG9yX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS53aWR0aCArICd3JylcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNpemUuaGVpZ2h0KXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLmhlaWdodCArICdoJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWN1cnJlbmN5LWNhbGN1bGF0b3JfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY3VycmVuY3ktY2FsY3VsYXRvcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMuZ2V0U2l6ZUNsYXNzKCksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzcy1uYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2NsYXNzLW5hbWVzL2luZGV4LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cbn1cblxuUmVjdC5jcmVhdGVXaXRoRWxlbWVudCA9IChlbGVtLCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApID0+IHtcbiAgaWYoIWVsZW0pe1xuICAgIHJldHVybiBuZXcgUmVjdCgwLDAsMCwwKVxuICB9XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIGJvdW5kaW5nUmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgYm91bmRpbmdSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICB0cmFuc2Zvcm1YLFxuICAgIHRyYW5zZm9ybVlcbiAgKVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhXaW5kb3cgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVjdChcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gIClcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgS0VZQ09ERVMgPSB7XG4gIEVTQ0FQRTogMjdcbn07XG5cbnZhciBQb3J0YWwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3J0YWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUG9ydGFsKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnN0YXRlID0geyBhY3RpdmU6IGZhbHNlIH07XG4gICAgX3RoaXMuaGFuZGxlV3JhcHBlckNsaWNrID0gX3RoaXMuaGFuZGxlV3JhcHBlckNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmNsb3NlUG9ydGFsID0gX3RoaXMuY2xvc2VQb3J0YWwuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2sgPSBfdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljay5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVLZXlkb3duID0gX3RoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5wb3J0YWwgPSBudWxsO1xuICAgIF90aGlzLm5vZGUgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3J0YWwsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2MpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbmVkKSB7XG4gICAgICAgIHRoaXMub3BlblBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAvLyBwb3J0YWwncyAnaXMgb3Blbicgc3RhdGUgaXMgaGFuZGxlZCB0aHJvdWdoIHRoZSBwcm9wIGlzT3BlbmVkXG4gICAgICBpZiAodHlwZW9mIG5ld1Byb3BzLmlzT3BlbmVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobmV3UHJvcHMuaXNPcGVuZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuUG9ydGFsKG5ld1Byb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFuZXdQcm9wcy5pc09wZW5lZCAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3J0YWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBwb3J0YWwgaGFuZGxlcyBpdHMgb3duICdpcyBvcGVuJyBzdGF0ZVxuICAgICAgaWYgKHR5cGVvZiBuZXdQcm9wcy5pc09wZW5lZCA9PT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJQb3J0YWwobmV3UHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uRXNjKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2spO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlUG9ydGFsKHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVdyYXBwZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVdyYXBwZXJDbGljayhlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlblBvcnRhbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29wZW5Qb3J0YWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuUG9ydGFsKCkge1xuICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcyA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucmVuZGVyUG9ydGFsKHByb3BzKTtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuKHRoaXMubm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2VQb3J0YWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZVBvcnRhbCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaXNVbm1vdW50ZWQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIHJlc2V0UG9ydGFsU3RhdGUgPSBmdW5jdGlvbiByZXNldFBvcnRhbFN0YXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMyLm5vZGUpIHtcbiAgICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQudW5tb3VudENvbXBvbmVudEF0Tm9kZShfdGhpczIubm9kZSk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChfdGhpczIubm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMyLnBvcnRhbCA9IG51bGw7XG4gICAgICAgIF90aGlzMi5ub2RlID0gbnVsbDtcbiAgICAgICAgaWYgKGlzVW5tb3VudGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5iZWZvcmVDbG9zZSh0aGlzLm5vZGUsIHJlc2V0UG9ydGFsU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc2V0UG9ydGFsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU91dHNpZGVNb3VzZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2soZSkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByb290ID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcy5wb3J0YWwpO1xuICAgICAgaWYgKHJvb3QuY29udGFpbnMoZS50YXJnZXQpIHx8IGUuYnV0dG9uICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2xvc2VQb3J0YWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVLZXlkb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFUy5FU0NBUEUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclBvcnRhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBvcnRhbChwcm9wcykge1xuICAgICAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qaW1mYi9kOTllMDY3OGU5ZGE3MTVjY2Y2NDU0OTYxZWYwNGQxYlxuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5jaGlsZHJlbi50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChwcm9wcy5jaGlsZHJlbiwgeyBjbG9zZVBvcnRhbDogdGhpcy5jbG9zZVBvcnRhbCB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3J0YWwgPSBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgY2hpbGRyZW4sIHRoaXMubm9kZSwgdGhpcy5wcm9wcy5vblVwZGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub3BlbkJ5Q2xpY2tPbikge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLm9wZW5CeUNsaWNrT24sIHsgb25DbGljazogdGhpcy5oYW5kbGVXcmFwcGVyQ2xpY2sgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9ydGFsO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9ydGFsO1xuXG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgb3BlbkJ5Q2xpY2tPbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5lbGVtZW50LFxuICBjbG9zZU9uRXNjOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgaXNPcGVuZWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgb25PcGVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xvc2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgYmVmb3JlQ2xvc2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgb25VcGRhdGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuUG9ydGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25PcGVuOiBmdW5jdGlvbiBvbk9wZW4oKSB7fSxcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXBvcnRhbC9idWlsZC9wb3J0YWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vcmVhY3QtcG9ydGFsL2J1aWxkL3BvcnRhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9IiwiY29uc3QgQWN0aW9uID0gIHtcbiAgb25lOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzMnKVxuICB9LFxuICBmb3VyOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignNicpXG4gIH0sXG4gIHNldmVuOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc5JylcbiAgfSxcbiAgemVybzogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dERlY2ltYWwoKVxuICB9LFxuICBwZXJjZW50OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcyl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy0nLCBidG5Qcm9wcylcbiAgfSxcbiAgbXVsdGlwbGljYXRpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuZXhlY3V0ZSgpXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmFsbENsZWFyKClcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==