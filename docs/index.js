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
	        'React CalcPicker'
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
	
	var _reactCalcpicker = __webpack_require__(4);
	
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
	      _react2.default.createElement(_reactCalcpicker.CalcPicker, {
	        initialAmount: 0,
	        currencyFormat: '$0,0[.]00',
	        positions: [_reactCalcpicker.Rect.RIGHT_BOTTOM, _reactCalcpicker.Rect.RIGHT_TOP, _reactCalcpicker.Rect.LEFT_BOTTOM, _reactCalcpicker.Rect.LEFT_TOP],
	        buttons: [[{ style: "dark", display: _react2.default.createElement(
	            'span',
	            null,
	            'AC'
	          ), action: _reactCalcpicker.Action.allClear }, { style: "dark", display: _react2.default.createElement(
	            'span',
	            null,
	            '\u2190'
	          ), action: _reactCalcpicker.Action.backspace }, { style: "light", display: _react2.default.createElement(
	            'span',
	            null,
	            '%'
	          ), action: _reactCalcpicker.Action.percent }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '\xF7'
	          ), action: _reactCalcpicker.Action.division }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '7'
	          ), action: _reactCalcpicker.Action.seven }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '8'
	          ), action: _reactCalcpicker.Action.eight }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '9'
	          ), action: _reactCalcpicker.Action.nine }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '\xD7'
	          ), action: _reactCalcpicker.Action.multiplication }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '4'
	          ), action: _reactCalcpicker.Action.four }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '5'
	          ), action: _reactCalcpicker.Action.five }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '6'
	          ), action: _reactCalcpicker.Action.six }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '-'
	          ), action: _reactCalcpicker.Action.minus }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '1'
	          ), action: _reactCalcpicker.Action.one }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '2'
	          ), action: _reactCalcpicker.Action.two }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '3'
	          ), action: _reactCalcpicker.Action.three }, { style: "primary", display: _react2.default.createElement(
	            'span',
	            null,
	            '+'
	          ), action: _reactCalcpicker.Action.plus }], [{ style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '0'
	          ), action: _reactCalcpicker.Action.zero }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '00'
	          ), action: _reactCalcpicker.Action.doubleZero }, { style: "default", display: _react2.default.createElement(
	            'span',
	            null,
	            '.'
	          ), action: _reactCalcpicker.Action.decimal }, { style: "warning", display: _react2.default.createElement(
	            'span',
	            null,
	            '='
	          ), action: _reactCalcpicker.Action.enter }]]
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
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(2), __webpack_require__(6));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["ReactCalcPicker"] = factory(require("react"), require("react-dom"));else root["ReactCalcPicker"] = factory(root["React"], root["ReactDOM"]);
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
				exports.Action = exports.Rect = exports.CalcPicker = undefined;
	
				var _CalcPicker = __webpack_require__(1);
	
				var _CalcPicker2 = _interopRequireDefault(_CalcPicker);
	
				var _Rect = __webpack_require__(9);
	
				var _Rect2 = _interopRequireDefault(_Rect);
	
				var _Action = __webpack_require__(21);
	
				var _Action2 = _interopRequireDefault(_Action);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				exports.CalcPicker = _CalcPicker2.default;
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
	
				var CalcPicker = function (_React$Component) {
					_inherits(CalcPicker, _React$Component);
	
					function CalcPicker(props) {
						_classCallCheck(this, CalcPicker);
	
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
	
					CalcPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
						if (this.props.locale != nextProps.locale) {
							_numeral2.default.locale(nextProps.locale);
						}
					};
	
					CalcPicker.prototype.onClickAmount = function onClickAmount(e) {
						e.preventDefault();
						this.setState({ openCalculator: true });
						return false;
					};
	
					CalcPicker.prototype.onCloseCalculator = function onCloseCalculator() {
						//Set the openCalculator to false when clicking the overlay or closing with the ESC key.
						if (this.state.openCalculator == true) {
							this.setState({ openCalculator: false });
						}
					};
	
					CalcPicker.prototype.render = function render() {
						var _this2 = this;
	
						return _react2.default.createElement('div', { className: 'react-calcpicker' }, _react2.default.createElement('button', { ref: 'button', className: this.props.className, onClick: function onClick(e) {
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
	
					return CalcPicker;
				}(_react2.default.Component);
	
				exports.default = CalcPicker;
	
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
						return _react2.default.createElement('div', { ref: 'calculator', className: 'react-calcpicker__calculator', style: { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' } }, _react2.default.createElement('div', { className: 'react-calcpicker__calculator-header' }, _react2.default.createElement(_Button2.default, { className: 'react-calcpicker__calculator-button-close', display: '\xD7', onClick: this.props.onClickClose })), _react2.default.createElement('div', { className: 'react-calcpicker__calculator-display' }, _react2.default.createElement('div', { className: 'react-calcpicker__calculator-display-operator' }, this.state.operator.display), _react2.default.createElement('div', { className: 'react-calcpicker__calculator-display-number' }, (0, _numeral2.default)(this.state.display).format(this.state.format), this.state.unit.display)), this.props.buttons.map(function (row, rowKey) {
							return _react2.default.createElement('div', { key: rowKey, className: 'react-calcpicker__calculator-buttons' }, row.map(function (btn, btnKey) {
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
							classNames.push("react-calcpicker__calculator-button-" + this.props.size.width + 'w');
						}
	
						if (this.props.size.height) {
							classNames.push("react-calcpicker__calculator-button-" + this.props.size.height + 'h');
						}
	
						return classNames;
					};
	
					Button.prototype.render = function render() {
						var _this2 = this;
	
						return _react2.default.createElement('button', {
							className: (0, _classNames2.default)("react-calcpicker__calculator-button", this.props.style ? "react-calcpicker__calculator-button-" + this.props.style : undefined, this.getSizeClass(), this.props.className),
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
	
				var _propTypes = __webpack_require__(12);
	
				var _propTypes2 = _interopRequireDefault(_propTypes);
	
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
	
						var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));
	
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
							var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
							this.setState({ active: true });
							this.renderPortal(props);
							this.props.onOpen(this.node);
						}
					}, {
						key: 'closePortal',
						value: function closePortal() {
							var _this2 = this;
	
							var isUnmounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
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
					children: _propTypes2.default.element.isRequired,
					openByClickOn: _propTypes2.default.element,
					closeOnEsc: _propTypes2.default.bool,
					closeOnOutsideClick: _propTypes2.default.bool,
					isOpened: _propTypes2.default.bool,
					onOpen: _propTypes2.default.func,
					onClose: _propTypes2.default.func,
					beforeClose: _propTypes2.default.func,
					onUpdate: _propTypes2.default.func
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
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */
	
					if (process.env.NODE_ENV !== 'production') {
						var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;
	
						var isValidElement = function isValidElement(object) {
							return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
						};
	
						// By explicitly using `prop-types` you are opting into new development behavior.
						// http://fb.me/prop-types-in-prod
						var throwOnDirectAccess = true;
						module.exports = __webpack_require__(14)(isValidElement, throwOnDirectAccess);
					} else {
						// By explicitly using `prop-types` you are opting into new production behavior.
						// http://fb.me/prop-types-in-prod
						module.exports = __webpack_require__(20)();
					}
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(13));
	
				/***/
			},
			/* 13 */
			/***/function (module, exports) {
	
				// shim for using process in browser
				var process = module.exports = {};
	
				// cached from whatever global is present so that test runners that stub it
				// don't break things.  But we need to wrap it in a try catch in case it is
				// wrapped in strict mode code which doesn't define any globals.  It's inside a
				// function because try/catches deoptimize in certain engines.
	
				var cachedSetTimeout;
				var cachedClearTimeout;
	
				function defaultSetTimout() {
					throw new Error('setTimeout has not been defined');
				}
				function defaultClearTimeout() {
					throw new Error('clearTimeout has not been defined');
				}
				(function () {
					try {
						if (typeof setTimeout === 'function') {
							cachedSetTimeout = setTimeout;
						} else {
							cachedSetTimeout = defaultSetTimout;
						}
					} catch (e) {
						cachedSetTimeout = defaultSetTimout;
					}
					try {
						if (typeof clearTimeout === 'function') {
							cachedClearTimeout = clearTimeout;
						} else {
							cachedClearTimeout = defaultClearTimeout;
						}
					} catch (e) {
						cachedClearTimeout = defaultClearTimeout;
					}
				})();
				function runTimeout(fun) {
					if (cachedSetTimeout === setTimeout) {
						//normal enviroments in sane situations
						return setTimeout(fun, 0);
					}
					// if setTimeout wasn't available but was latter defined
					if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
						cachedSetTimeout = setTimeout;
						return setTimeout(fun, 0);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedSetTimeout(fun, 0);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
							return cachedSetTimeout.call(this, fun, 0);
						}
					}
				}
				function runClearTimeout(marker) {
					if (cachedClearTimeout === clearTimeout) {
						//normal enviroments in sane situations
						return clearTimeout(marker);
					}
					// if clearTimeout wasn't available but was latter defined
					if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
						cachedClearTimeout = clearTimeout;
						return clearTimeout(marker);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedClearTimeout(marker);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
							return cachedClearTimeout.call(null, marker);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
							// Some versions of I.E. have different rules for clearTimeout vs setTimeout
							return cachedClearTimeout.call(this, marker);
						}
					}
				}
				var queue = [];
				var draining = false;
				var currentQueue;
				var queueIndex = -1;
	
				function cleanUpNextTick() {
					if (!draining || !currentQueue) {
						return;
					}
					draining = false;
					if (currentQueue.length) {
						queue = currentQueue.concat(queue);
					} else {
						queueIndex = -1;
					}
					if (queue.length) {
						drainQueue();
					}
				}
	
				function drainQueue() {
					if (draining) {
						return;
					}
					var timeout = runTimeout(cleanUpNextTick);
					draining = true;
	
					var len = queue.length;
					while (len) {
						currentQueue = queue;
						queue = [];
						while (++queueIndex < len) {
							if (currentQueue) {
								currentQueue[queueIndex].run();
							}
						}
						queueIndex = -1;
						len = queue.length;
					}
					currentQueue = null;
					draining = false;
					runClearTimeout(timeout);
				}
	
				process.nextTick = function (fun) {
					var args = new Array(arguments.length - 1);
					if (arguments.length > 1) {
						for (var i = 1; i < arguments.length; i++) {
							args[i - 1] = arguments[i];
						}
					}
					queue.push(new Item(fun, args));
					if (queue.length === 1 && !draining) {
						runTimeout(drainQueue);
					}
				};
	
				// v8 likes predictible objects
				function Item(fun, array) {
					this.fun = fun;
					this.array = array;
				}
				Item.prototype.run = function () {
					this.fun.apply(null, this.array);
				};
				process.title = 'browser';
				process.browser = true;
				process.env = {};
				process.argv = [];
				process.version = ''; // empty string to avoid regexp issues
				process.versions = {};
	
				function noop() {}
	
				process.on = noop;
				process.addListener = noop;
				process.once = noop;
				process.off = noop;
				process.removeListener = noop;
				process.removeAllListeners = noop;
				process.emit = noop;
				process.prependListener = noop;
				process.prependOnceListener = noop;
	
				process.listeners = function (name) {
					return [];
				};
	
				process.binding = function (name) {
					throw new Error('process.binding is not supported');
				};
	
				process.cwd = function () {
					return '/';
				};
				process.chdir = function (dir) {
					throw new Error('process.chdir is not supported');
				};
				process.umask = function () {
					return 0;
				};
	
				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */
	
					'use strict';
	
					var emptyFunction = __webpack_require__(15);
					var invariant = __webpack_require__(16);
					var warning = __webpack_require__(17);
	
					var ReactPropTypesSecret = __webpack_require__(18);
					var checkPropTypes = __webpack_require__(19);
	
					module.exports = function (isValidElement, throwOnDirectAccess) {
						/* global Symbol */
						var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
						var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
						/**
	      * Returns the iterator method function contained on the iterable object.
	      *
	      * Be sure to invoke the function with the iterable as context:
	      *
	      *     var iteratorFn = getIteratorFn(myIterable);
	      *     if (iteratorFn) {
	      *       var iterator = iteratorFn.call(myIterable);
	      *       ...
	      *     }
	      *
	      * @param {?object} maybeIterable
	      * @return {?function}
	      */
						function getIteratorFn(maybeIterable) {
							var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
							if (typeof iteratorFn === 'function') {
								return iteratorFn;
							}
						}
	
						/**
	      * Collection of methods that allow declaration and validation of props that are
	      * supplied to React components. Example usage:
	      *
	      *   var Props = require('ReactPropTypes');
	      *   var MyArticle = React.createClass({
	      *     propTypes: {
	      *       // An optional string prop named "description".
	      *       description: Props.string,
	      *
	      *       // A required enum prop named "category".
	      *       category: Props.oneOf(['News','Photos']).isRequired,
	      *
	      *       // A prop named "dialog" that requires an instance of Dialog.
	      *       dialog: Props.instanceOf(Dialog).isRequired
	      *     },
	      *     render: function() { ... }
	      *   });
	      *
	      * A more formal specification of how these methods are used:
	      *
	      *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	      *   decl := ReactPropTypes.{type}(.isRequired)?
	      *
	      * Each and every declaration produces a function with the same signature. This
	      * allows the creation of custom validation functions. For example:
	      *
	      *  var MyLink = React.createClass({
	      *    propTypes: {
	      *      // An optional string or URI prop named "href".
	      *      href: function(props, propName, componentName) {
	      *        var propValue = props[propName];
	      *        if (propValue != null && typeof propValue !== 'string' &&
	      *            !(propValue instanceof URI)) {
	      *          return new Error(
	      *            'Expected a string or an URI for ' + propName + ' in ' +
	      *            componentName
	      *          );
	      *        }
	      *      }
	      *    },
	      *    render: function() {...}
	      *  });
	      *
	      * @internal
	      */
	
						var ANONYMOUS = '<<anonymous>>';
	
						// Important!
						// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
						var ReactPropTypes = {
							array: createPrimitiveTypeChecker('array'),
							bool: createPrimitiveTypeChecker('boolean'),
							func: createPrimitiveTypeChecker('function'),
							number: createPrimitiveTypeChecker('number'),
							object: createPrimitiveTypeChecker('object'),
							string: createPrimitiveTypeChecker('string'),
							symbol: createPrimitiveTypeChecker('symbol'),
	
							any: createAnyTypeChecker(),
							arrayOf: createArrayOfTypeChecker,
							element: createElementTypeChecker(),
							instanceOf: createInstanceTypeChecker,
							node: createNodeChecker(),
							objectOf: createObjectOfTypeChecker,
							oneOf: createEnumTypeChecker,
							oneOfType: createUnionTypeChecker,
							shape: createShapeTypeChecker
						};
	
						/**
	      * inlined Object.is polyfill to avoid requiring consumers ship their own
	      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	      */
						/*eslint-disable no-self-compare*/
						function is(x, y) {
							// SameValue algorithm
							if (x === y) {
								// Steps 1-5, 7-10
								// Steps 6.b-6.e: +0 != -0
								return x !== 0 || 1 / x === 1 / y;
							} else {
								// Step 6.a: NaN == NaN
								return x !== x && y !== y;
							}
						}
						/*eslint-enable no-self-compare*/
	
						/**
	      * We use an Error-like object for backward compatibility as people may call
	      * PropTypes directly and inspect their output. However, we don't use real
	      * Errors anymore. We don't inspect their stack anyway, and creating them
	      * is prohibitively expensive if they are created too often, such as what
	      * happens in oneOfType() for any type before the one that matched.
	      */
						function PropTypeError(message) {
							this.message = message;
							this.stack = '';
						}
						// Make `instanceof Error` still work for returned errors.
						PropTypeError.prototype = Error.prototype;
	
						function createChainableTypeChecker(validate) {
							if (process.env.NODE_ENV !== 'production') {
								var manualPropTypeCallCache = {};
								var manualPropTypeWarningCount = 0;
							}
							function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
								componentName = componentName || ANONYMOUS;
								propFullName = propFullName || propName;
	
								if (secret !== ReactPropTypesSecret) {
									if (throwOnDirectAccess) {
										// New behavior only for users of `prop-types` package
										invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
									} else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
										// Old behavior for people using React.PropTypes
										var cacheKey = componentName + ':' + propName;
										if (!manualPropTypeCallCache[cacheKey] &&
										// Avoid spamming the console because they are often not actionable except for lib authors
										manualPropTypeWarningCount < 3) {
											warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
											manualPropTypeCallCache[cacheKey] = true;
											manualPropTypeWarningCount++;
										}
									}
								}
								if (props[propName] == null) {
									if (isRequired) {
										if (props[propName] === null) {
											return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
										}
										return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
									}
									return null;
								} else {
									return validate(props, propName, componentName, location, propFullName);
								}
							}
	
							var chainedCheckType = checkType.bind(null, false);
							chainedCheckType.isRequired = checkType.bind(null, true);
	
							return chainedCheckType;
						}
	
						function createPrimitiveTypeChecker(expectedType) {
							function validate(props, propName, componentName, location, propFullName, secret) {
								var propValue = props[propName];
								var propType = getPropType(propValue);
								if (propType !== expectedType) {
									// `propValue` being instance of, say, date/regexp, pass the 'object'
									// check, but we can offer a more precise error message here rather than
									// 'of type `object`'.
									var preciseType = getPreciseType(propValue);
	
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function createAnyTypeChecker() {
							return createChainableTypeChecker(emptyFunction.thatReturnsNull);
						}
	
						function createArrayOfTypeChecker(typeChecker) {
							function validate(props, propName, componentName, location, propFullName) {
								if (typeof typeChecker !== 'function') {
									return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
								}
								var propValue = props[propName];
								if (!Array.isArray(propValue)) {
									var propType = getPropType(propValue);
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
								}
								for (var i = 0; i < propValue.length; i++) {
									var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
									if (error instanceof Error) {
										return error;
									}
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function createElementTypeChecker() {
							function validate(props, propName, componentName, location, propFullName) {
								var propValue = props[propName];
								if (!isValidElement(propValue)) {
									var propType = getPropType(propValue);
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function createInstanceTypeChecker(expectedClass) {
							function validate(props, propName, componentName, location, propFullName) {
								if (!(props[propName] instanceof expectedClass)) {
									var expectedClassName = expectedClass.name || ANONYMOUS;
									var actualClassName = getClassName(props[propName]);
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function createEnumTypeChecker(expectedValues) {
							if (!Array.isArray(expectedValues)) {
								process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
								return emptyFunction.thatReturnsNull;
							}
	
							function validate(props, propName, componentName, location, propFullName) {
								var propValue = props[propName];
								for (var i = 0; i < expectedValues.length; i++) {
									if (is(propValue, expectedValues[i])) {
										return null;
									}
								}
	
								var valuesString = JSON.stringify(expectedValues);
								return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
							}
							return createChainableTypeChecker(validate);
						}
	
						function createObjectOfTypeChecker(typeChecker) {
							function validate(props, propName, componentName, location, propFullName) {
								if (typeof typeChecker !== 'function') {
									return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
								}
								var propValue = props[propName];
								var propType = getPropType(propValue);
								if (propType !== 'object') {
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
								}
								for (var key in propValue) {
									if (propValue.hasOwnProperty(key)) {
										var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
										if (error instanceof Error) {
											return error;
										}
									}
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function createUnionTypeChecker(arrayOfTypeCheckers) {
							if (!Array.isArray(arrayOfTypeCheckers)) {
								process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
								return emptyFunction.thatReturnsNull;
							}
	
							function validate(props, propName, componentName, location, propFullName) {
								for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
									var checker = arrayOfTypeCheckers[i];
									if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
										return null;
									}
								}
	
								return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
							}
							return createChainableTypeChecker(validate);
						}
	
						function createNodeChecker() {
							function validate(props, propName, componentName, location, propFullName) {
								if (!isNode(props[propName])) {
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function createShapeTypeChecker(shapeTypes) {
							function validate(props, propName, componentName, location, propFullName) {
								var propValue = props[propName];
								var propType = getPropType(propValue);
								if (propType !== 'object') {
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
								}
								for (var key in shapeTypes) {
									var checker = shapeTypes[key];
									if (!checker) {
										continue;
									}
									var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
									if (error) {
										return error;
									}
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}
	
						function isNode(propValue) {
							switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
								case 'number':
								case 'string':
								case 'undefined':
									return true;
								case 'boolean':
									return !propValue;
								case 'object':
									if (Array.isArray(propValue)) {
										return propValue.every(isNode);
									}
									if (propValue === null || isValidElement(propValue)) {
										return true;
									}
	
									var iteratorFn = getIteratorFn(propValue);
									if (iteratorFn) {
										var iterator = iteratorFn.call(propValue);
										var step;
										if (iteratorFn !== propValue.entries) {
											while (!(step = iterator.next()).done) {
												if (!isNode(step.value)) {
													return false;
												}
											}
										} else {
											// Iterator will provide entry [k,v] tuples rather than values.
											while (!(step = iterator.next()).done) {
												var entry = step.value;
												if (entry) {
													if (!isNode(entry[1])) {
														return false;
													}
												}
											}
										}
									} else {
										return false;
									}
	
									return true;
								default:
									return false;
							}
						}
	
						function isSymbol(propType, propValue) {
							// Native Symbol.
							if (propType === 'symbol') {
								return true;
							}
	
							// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
							if (propValue['@@toStringTag'] === 'Symbol') {
								return true;
							}
	
							// Fallback for non-spec compliant Symbols which are polyfilled.
							if (typeof Symbol === 'function' && propValue instanceof Symbol) {
								return true;
							}
	
							return false;
						}
	
						// Equivalent of `typeof` but with special handling for array and regexp.
						function getPropType(propValue) {
							var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
							if (Array.isArray(propValue)) {
								return 'array';
							}
							if (propValue instanceof RegExp) {
								// Old webkits (at least until Android 4.0) return 'function' rather than
								// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
								// passes PropTypes.object.
								return 'object';
							}
							if (isSymbol(propType, propValue)) {
								return 'symbol';
							}
							return propType;
						}
	
						// This handles more types than `getPropType`. Only used for error messages.
						// See `createPrimitiveTypeChecker`.
						function getPreciseType(propValue) {
							var propType = getPropType(propValue);
							if (propType === 'object') {
								if (propValue instanceof Date) {
									return 'date';
								} else if (propValue instanceof RegExp) {
									return 'regexp';
								}
							}
							return propType;
						}
	
						// Returns class name of the object, if any.
						function getClassName(propValue) {
							if (!propValue.constructor || !propValue.constructor.name) {
								return ANONYMOUS;
							}
							return propValue.constructor.name;
						}
	
						ReactPropTypes.checkPropTypes = checkPropTypes;
						ReactPropTypes.PropTypes = ReactPropTypes;
	
						return ReactPropTypes;
					};
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(13));
	
				/***/
			},
			/* 15 */
			/***/function (module, exports) {
	
				"use strict";
	
				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */
	
				function makeEmptyFunction(arg) {
					return function () {
						return arg;
					};
				}
	
				/**
	    * This function accepts and discards inputs; it has no side effects. This is
	    * primarily useful idiomatically for overridable function endpoints which
	    * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	    */
				var emptyFunction = function emptyFunction() {};
	
				emptyFunction.thatReturns = makeEmptyFunction;
				emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
				emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
				emptyFunction.thatReturnsNull = makeEmptyFunction(null);
				emptyFunction.thatReturnsThis = function () {
					return this;
				};
				emptyFunction.thatReturnsArgument = function (arg) {
					return arg;
				};
	
				module.exports = emptyFunction;
	
				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */
	
					'use strict';
	
					/**
	     * Use invariant() to assert state which your program assumes to be true.
	     *
	     * Provide sprintf-style format (only %s is supported) and arguments
	     * to provide information about what broke and what you were
	     * expecting.
	     *
	     * The invariant message will be stripped in production, but the invariant
	     * will remain to ensure logic does not differ in production.
	     */
	
					var validateFormat = function validateFormat(format) {};
	
					if (process.env.NODE_ENV !== 'production') {
						validateFormat = function validateFormat(format) {
							if (format === undefined) {
								throw new Error('invariant requires an error message argument');
							}
						};
					}
	
					function invariant(condition, format, a, b, c, d, e, f) {
						validateFormat(format);
	
						if (!condition) {
							var error;
							if (format === undefined) {
								error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
							} else {
								var args = [a, b, c, d, e, f];
								var argIndex = 0;
								error = new Error(format.replace(/%s/g, function () {
									return args[argIndex++];
								}));
								error.name = 'Invariant Violation';
							}
	
							error.framesToPop = 1; // we don't care about invariant's own frame
							throw error;
						}
					}
	
					module.exports = invariant;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(13));
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2014-2015, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */
	
					'use strict';
	
					var emptyFunction = __webpack_require__(15);
	
					/**
	     * Similar to invariant but only logs a warning if the condition is not met.
	     * This can be used to log issues in development environments in critical
	     * paths. Removing the logging code for production environments will keep the
	     * same logic and follow the same code paths.
	     */
	
					var warning = emptyFunction;
	
					if (process.env.NODE_ENV !== 'production') {
						(function () {
							var printWarning = function printWarning(format) {
								for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									args[_key - 1] = arguments[_key];
								}
	
								var argIndex = 0;
								var message = 'Warning: ' + format.replace(/%s/g, function () {
									return args[argIndex++];
								});
								if (typeof console !== 'undefined') {
									console.error(message);
								}
								try {
									// --- Welcome to debugging React ---
									// This error was thrown as a convenience so that you can use this stack
									// to find the callsite that caused this warning to fire.
									throw new Error(message);
								} catch (x) {}
							};
	
							warning = function warning(condition, format) {
								if (format === undefined) {
									throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
								}
	
								if (format.indexOf('Failed Composite propType: ') === 0) {
									return; // Ignore CompositeComponent proptype check.
								}
	
								if (!condition) {
									for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
										args[_key2 - 2] = arguments[_key2];
									}
	
									printWarning.apply(undefined, [format].concat(args));
								}
							};
						})();
					}
	
					module.exports = warning;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(13));
	
				/***/
			},
			/* 18 */
			/***/function (module, exports) {
	
				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */
	
				'use strict';
	
				var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
				module.exports = ReactPropTypesSecret;
	
				/***/
			},
			/* 19 */
			/***/function (module, exports, __webpack_require__) {
	
				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */
	
					'use strict';
	
					if (process.env.NODE_ENV !== 'production') {
						var invariant = __webpack_require__(16);
						var warning = __webpack_require__(17);
						var ReactPropTypesSecret = __webpack_require__(18);
						var loggedTypeFailures = {};
					}
	
					/**
	     * Assert that the values match with the type specs.
	     * Error messages are memorized and will only be shown once.
	     *
	     * @param {object} typeSpecs Map of name to a ReactPropType
	     * @param {object} values Runtime values that need to be type-checked
	     * @param {string} location e.g. "prop", "context", "child context"
	     * @param {string} componentName Name of the component for error messages.
	     * @param {?Function} getStack Returns the component stack.
	     * @private
	     */
					function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
						if (process.env.NODE_ENV !== 'production') {
							for (var typeSpecName in typeSpecs) {
								if (typeSpecs.hasOwnProperty(typeSpecName)) {
									var error;
									// Prop type validation may throw. In case they do, we don't want to
									// fail the render phase where it didn't fail before. So we log it.
									// After these have been cleaned up, we'll let them throw.
									try {
										// This is intentionally an invariant that gets caught. It's the same
										// behavior as without this statement except with a better message.
										invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
										error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
									} catch (ex) {
										error = ex;
									}
									warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
									if (error instanceof Error && !(error.message in loggedTypeFailures)) {
										// Only monitor this failure once because there tends to be a lot of the
										// same error.
										loggedTypeFailures[error.message] = true;
	
										var stack = getStack ? getStack() : '';
	
										warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
									}
								}
							}
						}
					}
	
					module.exports = checkPropTypes;
	
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(13));
	
				/***/
			},
			/* 20 */
			/***/function (module, exports, __webpack_require__) {
	
				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */
	
				'use strict';
	
				var emptyFunction = __webpack_require__(15);
				var invariant = __webpack_require__(16);
	
				module.exports = function () {
					// Important!
					// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
					function shim() {
						invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
					};
					shim.isRequired = shim;
					function getShim() {
						return shim;
					};
					var ReactPropTypes = {
						array: shim,
						bool: shim,
						func: shim,
						number: shim,
						object: shim,
						string: shim,
						symbol: shim,
	
						any: shim,
						arrayOf: getShim,
						element: shim,
						instanceOf: getShim,
						node: shim,
						objectOf: getShim,
						oneOf: getShim,
						oneOfType: getShim,
						shape: getShim
					};
	
					ReactPropTypes.checkPropTypes = emptyFunction;
					ReactPropTypes.PropTypes = ReactPropTypes;
	
					return ReactPropTypes;
				};
	
				/***/
			},
			/* 21 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRlNzk5YjhlNWIzZmE3OGVmYzkiLCJ3ZWJwYWNrOi8vLy4vZG9jcy1zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL2RvY3Mtc3JjL2NvbXBvbmVudHMvRG9jcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL2RvY3Mtc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDNlZWRjN2YxMTcxYmRkZTkxNzlkIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9udW1lcmFsL251bWVyYWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9udW1lcmFsL2xvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9jbGFzcy1uYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L3JlYWN0LXBvcnRhbC9idWlsZC9wb3J0YWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJEb2NzIiwicHJvcHMiLCJzZWN0aW9ucyIsInRpdGxlIiwiY29tcG9uZW50Iiwic3RhdGUiLCJ4IiwieSIsIm9ubW91c2Vtb3ZlIiwiZSIsInNldFN0YXRlIiwiY2xpZW50WCIsInBhZ2VYT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsImNsaWVudFkiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1hcCIsInNlY3Rpb24iLCJDb21wb25lbnQiLCJEZWZhdWx0U2VjdGlvbiIsIlJJR0hUX0JPVFRPTSIsIlJJR0hUX1RPUCIsIkxFRlRfQk9UVE9NIiwiTEVGVF9UT1AiLCJzdHlsZSIsImRpc3BsYXkiLCJhY3Rpb24iLCJhbGxDbGVhciIsImJhY2tzcGFjZSIsInBlcmNlbnQiLCJkaXZpc2lvbiIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbGljYXRpb24iLCJmb3VyIiwiZml2ZSIsInNpeCIsIm1pbnVzIiwib25lIiwidHdvIiwidGhyZWUiLCJwbHVzIiwiemVybyIsImRvdWJsZVplcm8iLCJkZWNpbWFsIiwiZW50ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUdBQSxRQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDcEJDLFlBQVNDLE1BQVQsQ0FDRSx5Q0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBRkY7QUFJRCxFQUxELEM7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkMsSTs7O0FBRW5CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0RBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztB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O0FBQ0Q7WUFBTyxlQUFTLE1BQ2Q7V0FDRDtBQUNEO2VBQVUsa0JBQVMsTUFDakI7V0FDRDtBQUNEO1lBQU8sZUFBUyxNQUNkO1dBQ0Q7QUFDRDtnQkFBVyxtQkFBUyxNQUNsQjtXQUNEO0FBL0RhO0FBQ2Q7O3NCQWlFYTs7Ozs7Ozs7Ozs7OztBQ2xFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBLDJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRlNzk5YjhlNWIzZmE3OGVmYzkiLCJpbXBvcnQgRG9jcyBmcm9tICcuL2NvbXBvbmVudHMvRG9jcyc7XG5cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxEb2NzIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJylcbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RvY3Mtc3JjL2FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEZWZhdWx0U2VjdGlvbiBmcm9tICcuL3NlY3Rpb25zL0RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZWN0aW9ucyA9IFt7XG4gICAgICAgIHRpdGxlOiBcIkRlZmF1bHRcIixcbiAgICAgICAgY29tcG9uZW50OiBEZWZhdWx0U2VjdGlvblxuICAgIH1dXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHg6IGUuY2xpZW50WCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpLFxuICAgICAgICB5OiBlLmNsaWVudFkgKyAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICB9KVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlJlYWN0IENhbGNQaWNrZXI8L2gxPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgbGVmdDogMH19Png6IHt0aGlzLnN0YXRlLnh9IHk6IHt0aGlzLnN0YXRlLnl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc2VjdGlvbnMubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17c2VjdGlvbi50aXRsZX0+e3NlY3Rpb24udGl0bGV9PC9saT5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICB7dGhpcy5zZWN0aW9ucy5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHNlY3Rpb24uY29tcG9uZW50O1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17c2VjdGlvbi50aXRsZX0+XG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzLXNyYy9jb21wb25lbnRzL0RvY3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0NhbGNQaWNrZXIsIFJlY3QsIEFjdGlvbn0gZnJvbSAnLi4vLi4vLi4vZGlzdC9yZWFjdC1jYWxjcGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxDYWxjUGlja2VyXG4gICAgICAgICAgaW5pdGlhbEFtb3VudD17MH1cbiAgICAgICAgICBjdXJyZW5jeUZvcm1hdD17JyQwLDBbLl0wMCd9XG4gICAgICAgICAgcG9zaXRpb25zPXtbUmVjdC5SSUdIVF9CT1RUT00sIFJlY3QuUklHSFRfVE9QLCBSZWN0LkxFRlRfQk9UVE9NLCBSZWN0LkxFRlRfVE9QXX1cbiAgICAgICAgICBidXR0b25zPXtbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IDxzcGFuPkFDPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uYWxsQ2xlYXJ9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiA8c3Bhbj7ihpA8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5iYWNrc3BhY2V9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogPHNwYW4+JTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnBlcmNlbnR9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiA8c3Bhbj7Dtzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmRpdmlzaW9ufSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjc8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5zZXZlbn0sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjg8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5laWdodH0sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjk8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5uaW5lfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogPHNwYW4+w5c8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbn0sXG4gICAgICAgICAgICBdLFtcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+NDwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmZvdXJ9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj41PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZml2ZX0sXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjY8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5zaXh9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiA8c3Bhbj4tPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ubWludXN9LFxuICAgICAgICAgICAgXSxbXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjE8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5vbmV9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4yPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24udHdvfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Mzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnRocmVlfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogPHNwYW4+Kzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnBsdXN9LFxuICAgICAgICAgICAgXSxbXG4gICAgICAgICAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjA8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi56ZXJvfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+MDA8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5kb3VibGVaZXJvfSxcbiAgICAgICAgICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Ljwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmRlY2ltYWx9LFxuICAgICAgICAgICAgICB7c3R5bGU6IFwid2FybmluZ1wiLCBkaXNwbGF5OiA8c3Bhbj49PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZW50ZXJ9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzLXNyYy9jb21wb25lbnRzL3NlY3Rpb25zL0RlZmF1bHQuanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNlZWRjN2YxMTcxYmRkZTkxNzlkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDNlZWRjN2YxMTcxYmRkZTkxNzlkIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50XG4gICAgfVxuXG4gICAgd2luZG93Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgIGNhc2UgJzAnOlxuICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgIGNhc2UgJzgnOlxuICAgICAgICAgIGNhc2UgJzknOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3IuaW5wdXROdW1iZXIoZS5rZXkpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLm9uQ2xpY2tPcGVyYXRvcihlLmtleSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3Iub25DbGlja09wZXJhdG9yKCfDtycpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLm9uQ2xpY2tPcGVyYXRvcignw5cnKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5vbkNsaWNrUGVyY2VudCgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICB0aGlzLnJlZnMuY2FsY3VsYXRvci5vbkNsaWNrRW50ZXIoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQ2xlYXInOlxuICAgICAgICAgICAgdGhpcy5yZWZzLmNhbGN1bGF0b3IuYWxsQ2xlYXIoKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICAgIHRoaXMucmVmcy5jYWxjdWxhdG9yLmRlbGV0ZSgpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tBbW91bnQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZUNhbGN1bGF0b3IoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJcIj5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrQW1vdW50KGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmFtb3VudCkuZm9ybWF0KHRoaXMucHJvcHMuY3VycmVuY3lGb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2sgaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZUNhbGN1bGF0b3IoKX0+XG4gICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgIHJlZj0nY2FsY3VsYXRvcidcbiAgICAgICAgICAgIGluaXRpYWxBbW91bnQ9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIi8qISBAcHJlc2VydmVcbiAqIG51bWVyYWwuanNcbiAqIHZlcnNpb24gOiAyLjAuNlxuICogYXV0aG9yIDogQWRhbSBEcmFwZXJcbiAqIGxpY2Vuc2UgOiBNSVRcbiAqIGh0dHA6Ly9hZGFtd2RyYXBlci5naXRodWIuY29tL051bWVyYWwtanMvXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsb2JhbC5udW1lcmFsID0gZmFjdG9yeSgpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgVmFyaWFibGVzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIG51bWVyYWwsXG4gICAgICAgIF8sXG4gICAgICAgIFZFUlNJT04gPSAnMi4wLjYnLFxuICAgICAgICBmb3JtYXRzID0ge30sXG4gICAgICAgIGxvY2FsZXMgPSB7fSxcbiAgICAgICAgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlOiAnZW4nLFxuICAgICAgICAgICAgemVyb0Zvcm1hdDogbnVsbCxcbiAgICAgICAgICAgIG51bGxGb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICBkZWZhdWx0Rm9ybWF0OiAnMCwwJyxcbiAgICAgICAgICAgIHNjYWxlUGVyY2VudEJ5MTAwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBkZWZhdWx0cy5jdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgemVyb0Zvcm1hdDogZGVmYXVsdHMuemVyb0Zvcm1hdCxcbiAgICAgICAgICAgIG51bGxGb3JtYXQ6IGRlZmF1bHRzLm51bGxGb3JtYXQsXG4gICAgICAgICAgICBkZWZhdWx0Rm9ybWF0OiBkZWZhdWx0cy5kZWZhdWx0Rm9ybWF0LFxuICAgICAgICAgICAgc2NhbGVQZXJjZW50QnkxMDA6IGRlZmF1bHRzLnNjYWxlUGVyY2VudEJ5MTAwXG4gICAgICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgQ29uc3RydWN0b3JzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLy8gTnVtZXJhbCBwcm90b3R5cGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gTnVtZXJhbChpbnB1dCwgbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgbnVtZXJhbCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVnZXhwO1xuXG4gICAgICAgIGlmIChudW1lcmFsLmlzTnVtZXJhbChpbnB1dCkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaW5wdXQudmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gMCB8fCB0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IG51bGwgfHwgXy5pc05hTihpbnB1dCkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy56ZXJvRm9ybWF0ICYmIGlucHV0ID09PSBvcHRpb25zLnplcm9Gb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubnVsbEZvcm1hdCAmJiBpbnB1dCA9PT0gb3B0aW9ucy5udWxsRm9ybWF0IHx8ICFpbnB1dC5yZXBsYWNlKC9bXjAtOV0rL2csICcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa2luZCBpbiBmb3JtYXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4cCA9IHR5cGVvZiBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQgPT09ICdmdW5jdGlvbicgPyBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQoKSA6IGZvcm1hdHNba2luZF0ucmVnZXhwcy51bmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnZXhwICYmIGlucHV0Lm1hdGNoKHJlZ2V4cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRzW2tpbmRdLnVuZm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVuZm9ybWF0RnVuY3Rpb24gPSB1bmZvcm1hdEZ1bmN0aW9uIHx8IG51bWVyYWwuXy5zdHJpbmdUb051bWJlcjtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdW5mb3JtYXRGdW5jdGlvbihpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihpbnB1dCl8fCBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBOdW1lcmFsKGlucHV0LCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIHZlcnNpb24gbnVtYmVyXG4gICAgbnVtZXJhbC52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAgIC8vIGNvbXBhcmUgbnVtZXJhbCBvYmplY3RcbiAgICBudW1lcmFsLmlzTnVtZXJhbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTnVtZXJhbDtcbiAgICB9O1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uc1xuICAgIG51bWVyYWwuXyA9IF8gPSB7XG4gICAgICAgIC8vIGZvcm1hdHMgbnVtYmVycyBzZXBhcmF0b3JzLCBkZWNpbWFscyBwbGFjZXMsIHNpZ25zLCBhYmJyZXZpYXRpb25zXG4gICAgICAgIG51bWJlclRvRm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbG9jYWxlc1tudW1lcmFsLm9wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgbmVnUCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9wdERlYyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxlYWRpbmdDb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgYWJiciA9ICcnLFxuICAgICAgICAgICAgICAgIHRyaWxsaW9uID0gMTAwMDAwMDAwMDAwMCxcbiAgICAgICAgICAgICAgICBiaWxsaW9uID0gMTAwMDAwMDAwMCxcbiAgICAgICAgICAgICAgICBtaWxsaW9uID0gMTAwMDAwMCxcbiAgICAgICAgICAgICAgICB0aG91c2FuZCA9IDEwMDAsXG4gICAgICAgICAgICAgICAgZGVjaW1hbCA9ICcnLFxuICAgICAgICAgICAgICAgIG5lZyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFiYnJGb3JjZSwgLy8gZm9yY2UgYWJicmV2aWF0aW9uXG4gICAgICAgICAgICAgICAgYWJzLFxuICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgaW50LFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbixcbiAgICAgICAgICAgICAgICBzaWduZWQsXG4gICAgICAgICAgICAgICAgdGhvdXNhbmRzLFxuICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIG5ldmVyIGZvcm1hdCBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgfHwgMDtcblxuICAgICAgICAgICAgYWJzID0gTWF0aC5hYnModmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBzZWUgaWYgd2Ugc2hvdWxkIHVzZSBwYXJlbnRoZXNlcyBmb3IgbmVnYXRpdmUgbnVtYmVyIG9yIGlmIHdlIHNob3VsZCBwcmVmaXggd2l0aCBhIHNpZ25cbiAgICAgICAgICAgIC8vIGlmIGJvdGggYXJlIHByZXNlbnQgd2UgZGVmYXVsdCB0byBwYXJlbnRoZXNlc1xuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcoJykpIHtcbiAgICAgICAgICAgICAgICBuZWdQID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvW1xcKHxcXCldL2csICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJysnKSB8fCBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnLScpKSB7XG4gICAgICAgICAgICAgICAgc2lnbmVkID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJysnKSA/IGZvcm1hdC5pbmRleE9mKCcrJykgOiB2YWx1ZSA8IDAgPyBmb3JtYXQuaW5kZXhPZignLScpIDogLTE7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1tcXCt8XFwtXS9nLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiBhYmJyZXZpYXRpb24gaXMgd2FudGVkXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ2EnKSkge1xuICAgICAgICAgICAgICAgIGFiYnJGb3JjZSA9IGZvcm1hdC5tYXRjaCgvYShrfG18Ynx0KT8vKTtcblxuICAgICAgICAgICAgICAgIGFiYnJGb3JjZSA9IGFiYnJGb3JjZSA/IGFiYnJGb3JjZVsxXSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSBhYmJyZXZpYXRpb25cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBhJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJiciA9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShuZXcgUmVnRXhwKGFiYnIgKyAnYVtrbWJ0XT8nKSwgJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFicyA+PSB0cmlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMudHJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyB0cmlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IHRyaWxsaW9uICYmIGFicyA+PSBiaWxsaW9uICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAnYicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYmlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLmJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBiaWxsaW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzIDwgYmlsbGlvbiAmJiBhYnMgPj0gbWlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gbWlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IG1pbGxpb24gJiYgYWJzID49IHRob3VzYW5kICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAnaycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvdXNhbmRcbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50aG91c2FuZDtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIHRob3VzYW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG9wdGlvbmFsIGRlY2ltYWxzXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ1suXScpKSB7XG4gICAgICAgICAgICAgICAgb3B0RGVjID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgnWy5dJywgJy4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYnJlYWsgbnVtYmVyIGFuZCBmb3JtYXRcbiAgICAgICAgICAgIGludCA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgICAgIHByZWNpc2lvbiA9IGZvcm1hdC5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgdGhvdXNhbmRzID0gZm9ybWF0LmluZGV4T2YoJywnKTtcbiAgICAgICAgICAgIGxlYWRpbmdDb3VudCA9IChmb3JtYXQuc3BsaXQoJy4nKVswXS5zcGxpdCgnLCcpWzBdLm1hdGNoKC8wL2cpIHx8IFtdKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKHByZWNpc2lvbiwgJ1snKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24ucmVwbGFjZSgnXScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uLnNwbGl0KCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgKHByZWNpc2lvblswXS5sZW5ndGggKyBwcmVjaXNpb25bMV0ubGVuZ3RoKSwgcm91bmRpbmdGdW5jdGlvbiwgcHJlY2lzaW9uWzFdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9IG51bWVyYWwuXy50b0ZpeGVkKHZhbHVlLCBwcmVjaXNpb24ubGVuZ3RoLCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnQgPSBkZWNpbWFsLnNwbGl0KCcuJylbMF07XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGRlY2ltYWwsICcuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9IGxvY2FsZS5kZWxpbWl0ZXJzLmRlY2ltYWwgKyBkZWNpbWFsLnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvcHREZWMgJiYgTnVtYmVyKGRlY2ltYWwuc2xpY2UoMSkpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGludCA9IG51bWVyYWwuXy50b0ZpeGVkKHZhbHVlLCAwLCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgYWJicmV2aWF0aW9uIGFnYWluIGFmdGVyIHJvdW5kaW5nXG4gICAgICAgICAgICBpZiAoYWJiciAmJiAhYWJickZvcmNlICYmIE51bWJlcihpbnQpID49IDEwMDAgJiYgYWJiciAhPT0gbG9jYWxlLmFiYnJldmlhdGlvbnMudHJpbGxpb24pIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBTdHJpbmcoTnVtYmVyKGludCkgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWJicikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGxvY2FsZS5hYmJyZXZpYXRpb25zLnRob3VzYW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWJiciA9IGxvY2FsZS5hYmJyZXZpYXRpb25zLm1pbGxpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWJiciA9IGxvY2FsZS5hYmJyZXZpYXRpb25zLmJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWJiciA9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCBudW1iZXJcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoaW50LCAnLScpKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gaW50LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIG5lZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnQubGVuZ3RoIDwgbGVhZGluZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlYWRpbmdDb3VudCAtIGludC5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ID0gJzAnICsgaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRob3VzYW5kcyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gaW50LnRvU3RyaW5nKCkucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEnICsgbG9jYWxlLmRlbGltaXRlcnMudGhvdXNhbmRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCcuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpbnQgPSAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ID0gaW50ICsgZGVjaW1hbCArIChhYmJyID8gYWJiciA6ICcnKTtcblxuICAgICAgICAgICAgaWYgKG5lZ1ApIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAobmVnUCAmJiBuZWcgPyAnKCcgOiAnJykgKyBvdXRwdXQgKyAobmVnUCAmJiBuZWcgPyAnKScgOiAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzaWduZWQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBzaWduZWQgPT09IDAgPyAobmVnID8gJy0nIDogJysnKSArIG91dHB1dCA6IG91dHB1dCArIChuZWcgPyAnLScgOiAnKycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmVnKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9ICctJyArIG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHVuZm9ybWF0cyBudW1iZXJzIHNlcGFyYXRvcnMsIGRlY2ltYWxzIHBsYWNlcywgc2lnbnMsIGFiYnJldmlhdGlvbnNcbiAgICAgICAgc3RyaW5nVG9OdW1iZXI6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IGxvY2FsZXNbb3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBzdHJpbmdPcmlnaW5hbCA9IHN0cmluZyxcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICB0aG91c2FuZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbWlsbGlvbjogNixcbiAgICAgICAgICAgICAgICAgICAgYmlsbGlvbjogOSxcbiAgICAgICAgICAgICAgICAgICAgdHJpbGxpb246IDEyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhYmJyZXZpYXRpb24sXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICByZWdleHA7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnplcm9Gb3JtYXQgJiYgc3RyaW5nID09PSBvcHRpb25zLnplcm9Gb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubnVsbEZvcm1hdCAmJiBzdHJpbmcgPT09IG9wdGlvbnMubnVsbEZvcm1hdCB8fCAhc3RyaW5nLnJlcGxhY2UoL1teMC05XSsvZywgJycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZS5kZWxpbWl0ZXJzLmRlY2ltYWwgIT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKGxvY2FsZS5kZWxpbWl0ZXJzLmRlY2ltYWwsICcuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChhYmJyZXZpYXRpb24gaW4gYWJicmV2aWF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZWdleHAgPSBuZXcgUmVnRXhwKCdbXmEtekEtWl0nICsgbG9jYWxlLmFiYnJldmlhdGlvbnNbYWJicmV2aWF0aW9uXSArICcoPzpcXFxcKXwoXFxcXCcgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sICsgJyk/KD86XFxcXCkpPyk/JCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdPcmlnaW5hbC5tYXRjaChyZWdleHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAqPSBNYXRoLnBvdygxMCwgYWJicmV2aWF0aW9uc1thYmJyZXZpYXRpb25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIG5lZ2F0aXZlIG51bWJlclxuICAgICAgICAgICAgICAgIHZhbHVlICo9IChzdHJpbmcuc3BsaXQoJy0nKS5sZW5ndGggKyBNYXRoLm1pbihzdHJpbmcuc3BsaXQoJygnKS5sZW5ndGggLSAxLCBzdHJpbmcuc3BsaXQoJyknKS5sZW5ndGggLSAxKSkgJSAyID8gMSA6IC0xO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbiBudW1iZXJzXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1teMC05XFwuXSsvZywgJycpO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgKj0gTnVtYmVyKHN0cmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNOYU46IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzdHJpbmcsIHNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5pbmRleE9mKHNlYXJjaCkgIT09IC0xO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uKHN0cmluZywgc3ViU3RyaW5nLCBzdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBzdGFydCkgKyBzdWJTdHJpbmcgKyBzdHJpbmcuc2xpY2Uoc3RhcnQpO1xuICAgICAgICB9LFxuICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjayAvKiwgaW5pdGlhbFZhbHVlKi8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLnJlZHVjZSBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0ID0gT2JqZWN0KGFycmF5KSxcbiAgICAgICAgICAgICAgICBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgICAgICBrID0gMCxcbiAgICAgICAgICAgICAgICB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGsgPCBsZW4gJiYgIShrIGluIHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoayA+PSBsZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdFtrKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChrIGluIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgdFtrXSwgaywgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIG11bHRpcGxpZXIgbmVjZXNzYXJ5IHRvIG1ha2UgeCA+PSAxLFxuICAgICAgICAgKiBlZmZlY3RpdmVseSBlbGltaW5hdGluZyBtaXNjYWxjdWxhdGlvbnMgY2F1c2VkIGJ5XG4gICAgICAgICAqIGZpbml0ZSBwcmVjaXNpb24uXG4gICAgICAgICAqL1xuICAgICAgICBtdWx0aXBsaWVyOiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0geC50b1N0cmluZygpLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyID8gMSA6IE1hdGgucG93KDEwLCBwYXJ0c1sxXS5sZW5ndGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCByZXR1cm5zIHRoZSBtYXhpbXVtXG4gICAgICAgICAqIG11bHRpcGxpZXIgdGhhdCBtdXN0IGJlIHVzZWQgdG8gbm9ybWFsaXplIGFuIG9wZXJhdGlvbiBpbnZvbHZpbmdcbiAgICAgICAgICogYWxsIG9mIHRoZW0uXG4gICAgICAgICAqL1xuICAgICAgICBjb3JyZWN0aW9uRmFjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihhY2N1bSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBtbiA9IF8ubXVsdGlwbGllcihuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gPiBtbiA/IGFjY3VtIDogbW47XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEltcGxlbWVudGF0aW9uIG9mIHRvRml4ZWQoKSB0aGF0IHRyZWF0cyBmbG9hdHMgbW9yZSBsaWtlIGRlY2ltYWxzXG4gICAgICAgICAqXG4gICAgICAgICAqIEZpeGVzIGJpbmFyeSByb3VuZGluZyBpc3N1ZXMgKGVnLiAoMC42MTUpLnRvRml4ZWQoMikgPT09ICcwLjYxJykgdGhhdCBwcmVzZW50XG4gICAgICAgICAqIHByb2JsZW1zIGZvciBhY2NvdW50aW5nLSBhbmQgZmluYW5jZS1yZWxhdGVkIHNvZnR3YXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgdG9GaXhlZDogZnVuY3Rpb24odmFsdWUsIG1heERlY2ltYWxzLCByb3VuZGluZ0Z1bmN0aW9uLCBvcHRpb25hbHMpIHtcbiAgICAgICAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIG1pbkRlY2ltYWxzID0gbWF4RGVjaW1hbHMgLSAob3B0aW9uYWxzIHx8IDApLFxuICAgICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxzUmVnRXhwLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgLy8gVXNlIHRoZSBzbWFsbGVzdCBwcmVjaXNpb24gdmFsdWUgcG9zc2libGUgdG8gYXZvaWQgZXJyb3JzIGZyb20gZmxvYXRpbmcgcG9pbnQgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIGlmIChzcGxpdFZhbHVlLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uID0gTWF0aC5taW4oTWF0aC5tYXgoc3BsaXRWYWx1ZVsxXS5sZW5ndGgsIG1pbkRlY2ltYWxzKSwgbWF4RGVjaW1hbHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbiA9IG1pbkRlY2ltYWxzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3dlciA9IE1hdGgucG93KDEwLCBib3VuZGVkUHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgLy8gTXVsdGlwbHkgdXAgYnkgcHJlY2lzaW9uLCByb3VuZCBhY2N1cmF0ZWx5LCB0aGVuIGRpdmlkZSBhbmQgdXNlIG5hdGl2ZSB0b0ZpeGVkKCk6XG4gICAgICAgICAgICBvdXRwdXQgPSAocm91bmRpbmdGdW5jdGlvbih2YWx1ZSArICdlKycgKyBib3VuZGVkUHJlY2lzaW9uKSAvIHBvd2VyKS50b0ZpeGVkKGJvdW5kZWRQcmVjaXNpb24pO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uYWxzID4gbWF4RGVjaW1hbHMgLSBib3VuZGVkUHJlY2lzaW9uKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWxzUmVnRXhwID0gbmV3IFJlZ0V4cCgnXFxcXC4/MHsxLCcgKyAob3B0aW9uYWxzIC0gKG1heERlY2ltYWxzIC0gYm91bmRlZFByZWNpc2lvbikpICsgJ30kJyk7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2Uob3B0aW9uYWxzUmVnRXhwLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYXZhbGlhYmxlIG9wdGlvbnNcbiAgICBudW1lcmFsLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gYXZhbGlhYmxlIGZvcm1hdHNcbiAgICBudW1lcmFsLmZvcm1hdHMgPSBmb3JtYXRzO1xuXG4gICAgLy8gYXZhbGlhYmxlIGZvcm1hdHNcbiAgICBudW1lcmFsLmxvY2FsZXMgPSBsb2NhbGVzO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBjdXJyZW50IGxvY2FsZS4gIElmXG4gICAgLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbiAgICAvLyBsb2NhbGUga2V5LlxuICAgIG51bWVyYWwubG9jYWxlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY3VycmVudExvY2FsZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY3VycmVudExvY2FsZTtcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGxvYWRlZCBsb2NhbGUgZGF0YS4gIElmXG4gICAgLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudFxuICAgIC8vIGdsb2JhbCBsb2NhbGUgb2JqZWN0LlxuICAgIG51bWVyYWwubG9jYWxlRGF0YSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZXNbb3B0aW9ucy5jdXJyZW50TG9jYWxlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghbG9jYWxlc1trZXldKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbG9jYWxlIDogJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9jYWxlc1trZXldO1xuICAgIH07XG5cbiAgICBudW1lcmFsLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBvcHRpb25zW3Byb3BlcnR5XSA9IGRlZmF1bHRzW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBudW1lcmFsLnplcm9Gb3JtYXQgPSBmdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy56ZXJvRm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogbnVsbDtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5udWxsRm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLm51bGxGb3JtYXQgPSB0eXBlb2YoZm9ybWF0KSA9PT0gJ3N0cmluZycgPyBmb3JtYXQgOiBudWxsO1xuICAgIH07XG5cbiAgICBudW1lcmFsLmRlZmF1bHRGb3JtYXQgPSBmdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5kZWZhdWx0Rm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogJzAuMCc7XG4gICAgfTtcblxuICAgIG51bWVyYWwucmVnaXN0ZXIgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBmb3JtYXQpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodGhpc1t0eXBlICsgJ3MnXVtuYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihuYW1lICsgJyAnICsgdHlwZSArICcgYWxyZWFkeSByZWdpc3RlcmVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1t0eXBlICsgJ3MnXVtuYW1lXSA9IGZvcm1hdDtcblxuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH07XG5cblxuICAgIG51bWVyYWwudmFsaWRhdGUgPSBmdW5jdGlvbih2YWwsIGN1bHR1cmUpIHtcbiAgICAgICAgdmFyIF9kZWNpbWFsU2VwLFxuICAgICAgICAgICAgX3Rob3VzYW5kU2VwLFxuICAgICAgICAgICAgX2N1cnJTeW1ib2wsXG4gICAgICAgICAgICBfdmFsQXJyYXksXG4gICAgICAgICAgICBfYWJick9iaixcbiAgICAgICAgICAgIF90aG91c2FuZFJlZ0V4LFxuICAgICAgICAgICAgbG9jYWxlRGF0YSxcbiAgICAgICAgICAgIHRlbXA7XG5cbiAgICAgICAgLy9jb2VyY2UgdmFsIHRvIHN0cmluZ1xuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbCArPSAnJztcblxuICAgICAgICAgICAgaWYgKGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTnVtZXJhbC5qczogVmFsdWUgaXMgbm90IHN0cmluZy4gSXQgaGFzIGJlZW4gY28tZXJjZWQgdG86ICcsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3RyaW0gd2hpdGVzcGFjZXMgZnJvbSBlaXRoZXIgc2lkZXNcbiAgICAgICAgdmFsID0gdmFsLnRyaW0oKTtcblxuICAgICAgICAvL2lmIHZhbCBpcyBqdXN0IGRpZ2l0cyByZXR1cm4gdHJ1ZVxuICAgICAgICBpZiAoISF2YWwubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdmFsIGlzIGVtcHR5IHJldHVybiBmYWxzZVxuICAgICAgICBpZiAodmFsID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGhlIGRlY2ltYWwgYW5kIHRob3VzYW5kcyBzZXBhcmF0b3IgZnJvbSBudW1lcmFsLmxvY2FsZURhdGFcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdGhlIGN1bHR1cmUgaXMgdW5kZXJzdG9vZCBieSBudW1lcmFsLiBpZiBub3QsIGRlZmF1bHQgaXQgdG8gY3VycmVudCBsb2NhbGVcbiAgICAgICAgICAgIGxvY2FsZURhdGEgPSBudW1lcmFsLmxvY2FsZURhdGEoY3VsdHVyZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvY2FsZURhdGEgPSBudW1lcmFsLmxvY2FsZURhdGEobnVtZXJhbC5sb2NhbGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldHVwIHRoZSBkZWxpbWl0ZXJzIGFuZCBjdXJyZW5jeSBzeW1ib2wgYmFzZWQgb24gY3VsdHVyZS9sb2NhbGVcbiAgICAgICAgX2N1cnJTeW1ib2wgPSBsb2NhbGVEYXRhLmN1cnJlbmN5LnN5bWJvbDtcbiAgICAgICAgX2FiYnJPYmogPSBsb2NhbGVEYXRhLmFiYnJldmlhdGlvbnM7XG4gICAgICAgIF9kZWNpbWFsU2VwID0gbG9jYWxlRGF0YS5kZWxpbWl0ZXJzLmRlY2ltYWw7XG4gICAgICAgIGlmIChsb2NhbGVEYXRhLmRlbGltaXRlcnMudGhvdXNhbmRzID09PSAnLicpIHtcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCA9ICdcXFxcLic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAgPSBsb2NhbGVEYXRhLmRlbGltaXRlcnMudGhvdXNhbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWRhdGluZyBjdXJyZW5jeSBzeW1ib2xcbiAgICAgICAgdGVtcCA9IHZhbC5tYXRjaCgvXlteXFxkXSsvKTtcbiAgICAgICAgaWYgKHRlbXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zdWJzdHIoMSk7XG4gICAgICAgICAgICBpZiAodGVtcFswXSAhPT0gX2N1cnJTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3ZhbGlkYXRpbmcgYWJicmV2aWF0aW9uIHN5bWJvbFxuICAgICAgICB0ZW1wID0gdmFsLm1hdGNoKC9bXlxcZF0rJC8pO1xuICAgICAgICBpZiAodGVtcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGlmICh0ZW1wWzBdICE9PSBfYWJick9iai50aG91c2FuZCAmJiB0ZW1wWzBdICE9PSBfYWJick9iai5taWxsaW9uICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLmJpbGxpb24gJiYgdGVtcFswXSAhPT0gX2FiYnJPYmoudHJpbGxpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhvdXNhbmRSZWdFeCA9IG5ldyBSZWdFeHAoX3Rob3VzYW5kU2VwICsgJ3syfScpO1xuXG4gICAgICAgIGlmICghdmFsLm1hdGNoKC9bXlxcZC4sXS9nKSkge1xuICAgICAgICAgICAgX3ZhbEFycmF5ID0gdmFsLnNwbGl0KF9kZWNpbWFsU2VwKTtcbiAgICAgICAgICAgIGlmIChfdmFsQXJyYXkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF92YWxBcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoICEhIF92YWxBcnJheVswXS5tYXRjaCgvXlxcZCsuKlxcZCQvKSAmJiAhX3ZhbEFycmF5WzBdLm1hdGNoKF90aG91c2FuZFJlZ0V4KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWxBcnJheVswXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoICEhIF92YWxBcnJheVswXS5tYXRjaCgvXlxcZCskLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkgJiYgISEgX3ZhbEFycmF5WzFdLm1hdGNoKC9eXFxkKyQvKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrLipcXGQkLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkgJiYgISEgX3ZhbEFycmF5WzFdLm1hdGNoKC9eXFxkKyQvKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBOdW1lcmFsIFByb3RvdHlwZVxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIG51bWVyYWwuZm4gPSBOdW1lcmFsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWVyYWwodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24oaW5wdXRTdHJpbmcsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX3ZhbHVlLFxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGlucHV0U3RyaW5nIHx8IG9wdGlvbnMuZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICAgICBmb3JtYXRGdW5jdGlvbjtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGhhdmUgYSByb3VuZGluZ0Z1bmN0aW9uXG4gICAgICAgICAgICByb3VuZGluZ0Z1bmN0aW9uID0gcm91bmRpbmdGdW5jdGlvbiB8fCBNYXRoLnJvdW5kO1xuXG4gICAgICAgICAgICAvLyBmb3JtYXQgYmFzZWQgb24gdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCAmJiBvcHRpb25zLnplcm9Gb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvcHRpb25zLnplcm9Gb3JtYXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsICYmIG9wdGlvbnMubnVsbEZvcm1hdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG9wdGlvbnMubnVsbEZvcm1hdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChraW5kIGluIGZvcm1hdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdC5tYXRjaChmb3JtYXRzW2tpbmRdLnJlZ2V4cHMuZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRzW2tpbmRdLmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3JtYXRGdW5jdGlvbiA9IGZvcm1hdEZ1bmN0aW9uIHx8IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdDtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IGZvcm1hdEZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IuY2FsbChudWxsLCB0aGlzLl92YWx1ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gKyBNYXRoLnJvdW5kKGNvcnJGYWN0b3IgKiBjdXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdGhpcy5fdmFsdWUsIHZhbHVlXSwgY2JhY2ssIDApIC8gY29yckZhY3RvcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnRyYWN0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IuY2FsbChudWxsLCB0aGlzLl92YWx1ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gLSBNYXRoLnJvdW5kKGNvcnJGYWN0b3IgKiBjdXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdmFsdWVdLCBjYmFjaywgTWF0aC5yb3VuZCh0aGlzLl92YWx1ZSAqIGNvcnJGYWN0b3IpKSAvIGNvcnJGYWN0b3I7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBtdWx0aXBseTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhY2N1bSAqIGNvcnJGYWN0b3IpICogTWF0aC5yb3VuZChjdXJyICogY29yckZhY3RvcikgLyBNYXRoLnJvdW5kKGNvcnJGYWN0b3IgKiBjb3JyRmFjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdGhpcy5fdmFsdWUsIHZhbHVlXSwgY2JhY2ssIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZGl2aWRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IoYWNjdW0sIGN1cnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFjY3VtICogY29yckZhY3RvcikgLyBNYXRoLnJvdW5kKGN1cnIgKiBjb3JyRmFjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfLnJlZHVjZShbdGhpcy5fdmFsdWUsIHZhbHVlXSwgY2JhY2spO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZGlmZmVyZW5jZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhudW1lcmFsKHRoaXMuX3ZhbHVlKS5zdWJ0cmFjdCh2YWx1ZSkudmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBEZWZhdWx0IExvY2FsZSAmJiBGb3JtYXRcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4nLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAofn4obnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnJCdcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2JwcycsIHtcbiAgICAgICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IC8oQlBTKS8sXG4gICAgICAgICAgICAgICAgdW5mb3JtYXQ6IC8oQlBTKS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BhY2UgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIEJQUycpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwMDtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgQlBTXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9CUFMvLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKG91dHB1dCwgJyknKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5zcGxpY2UoLTEsIDAsIHNwYWNlICsgJ0JQUycpO1xuXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBzcGFjZSArICdCUFMnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiArKG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpICogMC4wMDAxKS50b0ZpeGVkKDE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRlY2ltYWwgPSB7XG4gICAgICAgICAgICBiYXNlOiAxMDAwLFxuICAgICAgICAgICAgc3VmZml4ZXM6IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddXG4gICAgICAgIH0sXG4gICAgICAgIGJpbmFyeSA9IHtcbiAgICAgICAgICAgIGJhc2U6IDEwMjQsXG4gICAgICAgICAgICBzdWZmaXhlczogWydCJywgJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXVxuICAgICAgICB9O1xuXG4gICAgdmFyIGFsbFN1ZmZpeGVzID0gIGRlY2ltYWwuc3VmZml4ZXMuY29uY2F0KGJpbmFyeS5zdWZmaXhlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNpbWFsLnN1ZmZpeGVzLmluZGV4T2YoaXRlbSkgPCAwO1xuICAgICAgICB9KSk7XG4gICAgICAgIHZhciB1bmZvcm1hdFJlZ2V4ID0gYWxsU3VmZml4ZXMuam9pbignfCcpO1xuICAgICAgICAvLyBBbGxvdyBzdXBwb3J0IGZvciBCUFMgKGh0dHA6Ly93d3cuaW52ZXN0b3BlZGlhLmNvbS90ZXJtcy9iL2Jhc2lzcG9pbnQuYXNwKVxuICAgICAgICB1bmZvcm1hdFJlZ2V4ID0gJygnICsgdW5mb3JtYXRSZWdleC5yZXBsYWNlKCdCJywgJ0IoPyFQUyknKSArICcpJztcblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdieXRlcycsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKFswXFxzXWk/YikvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IG5ldyBSZWdFeHAodW5mb3JtYXRSZWdleClcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGJ5dGVzID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJ2liJykgPyBiaW5hcnkgOiBkZWNpbWFsLFxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgYicpIHx8IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgaWInKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/aT9iLywgJycpO1xuXG4gICAgICAgICAgICBmb3IgKHBvd2VyID0gMDsgcG93ZXIgPD0gYnl0ZXMuc3VmZml4ZXMubGVuZ3RoOyBwb3dlcisrKSB7XG4gICAgICAgICAgICAgICAgbWluID0gTWF0aC5wb3coYnl0ZXMuYmFzZSwgcG93ZXIpO1xuICAgICAgICAgICAgICAgIG1heCA9IE1hdGgucG93KGJ5dGVzLmJhc2UsIHBvd2VyICsgMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IDAgfHwgdmFsdWUgPj0gbWluICYmIHZhbHVlIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1ZmZpeCArPSBieXRlcy5zdWZmaXhlc1twb3dlcl07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBtaW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIHN1ZmZpeDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZyksXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHBvd2VyID0gZGVjaW1hbC5zdWZmaXhlcy5sZW5ndGggLSAxOyBwb3dlciA+PSAwOyBwb3dlci0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCBkZWNpbWFsLnN1ZmZpeGVzW3Bvd2VyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllciA9IE1hdGgucG93KGRlY2ltYWwuYmFzZSwgcG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCBiaW5hcnkuc3VmZml4ZXNbcG93ZXJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyID0gTWF0aC5wb3coYmluYXJ5LmJhc2UsIHBvd2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSAoYnl0ZXNNdWx0aXBsaWVyIHx8IDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnY3VycmVuY3knLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhcXCQpL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIHN5bWJvbHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogZm9ybWF0Lm1hdGNoKC9eKFtcXCt8XFwtfFxcKHxcXHN8XFwkXSopLylbMF0sXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiBmb3JtYXQubWF0Y2goLyhbXFwrfFxcLXxcXCl8XFxzfFxcJF0qKSQvKVswXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBzdHJpcCBmb3JtYXQgb2Ygc3BhY2VzIGFuZCAkXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP1xcJFxccz8vLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCB0aGUgbnVtYmVyXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYmVmb3JlIGFuZCBhZnRlciBiYXNlZCBvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlID49IDApIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmJlZm9yZSA9IHN5bWJvbHMuYmVmb3JlLnJlcGxhY2UoL1tcXC1cXChdLywgJycpO1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYWZ0ZXIgPSBzeW1ib2xzLmFmdGVyLnJlcGxhY2UoL1tcXC1cXCldLywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDAgJiYgKCFudW1lcmFsLl8uaW5jbHVkZXMoc3ltYm9scy5iZWZvcmUsICctJykgJiYgIW51bWVyYWwuXy5pbmNsdWRlcyhzeW1ib2xzLmJlZm9yZSwgJygnKSkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmJlZm9yZSA9ICctJyArIHN5bWJvbHMuYmVmb3JlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBiZWZvcmUgc3ltYm9sXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ltYm9scy5iZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xzLmJlZm9yZVtpXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLmluc2VydChvdXRwdXQsIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLmluc2VydChvdXRwdXQsICcgJywgaSArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGFmdGVyIHN5bWJvbFxuICAgICAgICAgICAgZm9yIChpID0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbHMuYWZ0ZXJbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICckJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGkgPT09IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMSA/IG91dHB1dCArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wgOiBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCwgLShzeW1ib2xzLmFmdGVyLmxlbmd0aCAtICgxICsgaSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGkgPT09IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMSA/IG91dHB1dCArICcgJyA6IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCAnICcsIC0oc3ltYm9scy5hZnRlci5sZW5ndGggLSAoMSArIGkpICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbC5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdleHBvbmVudGlhbCcsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKGVcXCt8ZS0pLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKGVcXCt8ZS0pL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQsXG4gICAgICAgICAgICAgICAgZXhwb25lbnRpYWwgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFudW1lcmFsLl8uaXNOYU4odmFsdWUpID8gdmFsdWUudG9FeHBvbmVudGlhbCgpIDogJzBlKzAnLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gZXhwb25lbnRpYWwuc3BsaXQoJ2UnKTtcblxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL2VbXFwrfFxcLV17MX0wLywgJycpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQoTnVtYmVyKHBhcnRzWzBdKSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArICdlJyArIHBhcnRzWzFdO1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCAnZSsnKSA/IHN0cmluZy5zcGxpdCgnZSsnKSA6IHN0cmluZy5zcGxpdCgnZS0nKSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihwYXJ0c1swXSksXG4gICAgICAgICAgICAgICAgcG93ZXIgPSBOdW1iZXIocGFydHNbMV0pO1xuXG4gICAgICAgICAgICBwb3dlciA9IG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsICdlLScpID8gcG93ZXIgKj0gLTEgOiBwb3dlcjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBudW1lcmFsLl8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3VyciksXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IChhY2N1bSAqIGNvcnJGYWN0b3IpICogKGN1cnIgKiBjb3JyRmFjdG9yKSAvIChjb3JyRmFjdG9yICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bWVyYWwuXy5yZWR1Y2UoW3ZhbHVlLCBNYXRoLnBvdygxMCwgcG93ZXIpXSwgY2JhY2ssIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ29yZGluYWwnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhvKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgbycpID8gJyAnIDogJyc7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/by8sICcnKTtcblxuICAgICAgICAgICAgb3JkaW5hbCArPSBsb2NhbGUub3JkaW5hbCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArIG9yZGluYWw7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAncGVyY2VudGFnZScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKCUpLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKCUpL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBzcGFjZSA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgJScpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5vcHRpb25zLnNjYWxlUGVyY2VudEJ5MTAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSAlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP1xcJS8sICcnKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKG91dHB1dCwgJyknKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5zcGxpdCgnJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQuc3BsaWNlKC0xLCAwLCBzcGFjZSArICclJyk7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIHNwYWNlICsgJyUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZyk7XG4gICAgICAgICAgICBpZiAobnVtZXJhbC5vcHRpb25zLnNjYWxlUGVyY2VudEJ5MTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciAqIDAuMDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ3RpbWUnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyg6KS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyg6KS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjAgLyA2MCksXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gKGhvdXJzICogNjAgKiA2MCkpIC8gNjApLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLnJvdW5kKHZhbHVlIC0gKGhvdXJzICogNjAgKiA2MCkgLSAobWludXRlcyAqIDYwKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBob3VycyArICc6JyArIChtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcykgKyAnOicgKyAoc2Vjb25kcyA8IDEwID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHMpO1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgdGltZUFycmF5ID0gc3RyaW5nLnNwbGl0KCc6JyksXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IDA7XG5cbiAgICAgICAgICAgIC8vIHR1cm4gaG91cnMgYW5kIG1pbnV0ZXMgaW50byBzZWNvbmRzIGFuZCBhZGQgdGhlbSBhbGwgdXBcbiAgICAgICAgICAgIGlmICh0aW1lQXJyYXkubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gaG91cnNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzBdKSAqIDYwICogNjApO1xuICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzFdKSAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyBOdW1iZXIodGltZUFycmF5WzJdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGltZUFycmF5Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIC8vIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIChOdW1iZXIodGltZUFycmF5WzBdKSAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyBOdW1iZXIodGltZUFycmF5WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cbnJldHVybiBudW1lcmFsO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L251bWVyYWwvbnVtZXJhbC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L251bWVyYWwvbnVtZXJhbC5qcyIsIi8qISBAcHJlc2VydmVcbiAqIG51bWVyYWwuanNcbiAqIGxvY2FsZXMgOiAyLjAuNlxuICogbGljZW5zZSA6IE1JVFxuICogaHR0cDovL2FkYW13ZHJhcGVyLmdpdGh1Yi5jb20vTnVtZXJhbC1qcy9cbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnbnVtZXJhbCddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnLi9udW1lcmFsJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoZ2xvYmFsLm51bWVyYWwpO1xuICAgIH1cbn0odGhpcywgZnVuY3Rpb24gKG51bWVyYWwpIHtcbiAgICBcbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2JnJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7IC8vIEkgZm91bmQgdGhlc2UgaGVyZSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzI4L3ZlcmlmeS9udW1iZXJzL2JnLmh0bWxcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YXQuNC7JyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0YLRgNC70L0nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIC8vIGdvb2dsZSB0cmFuc2xhdGUgc3VnZ2VzdHM6XG4gICAgICAgICAgICAvLyAxc3Q9MS3QstC4OyAybmQ9Mi3RgNC4OyA3dGg9Ny3QvNC4O1xuICAgICAgICAgICAgLy8gOHRoPTgt0LzQuCBhbmQgbWFueSBvdGhlcnMgZW5kIHdpdGggLdGC0LhcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIDNyZD0zLdGC0LhcbiAgICAgICAgICAgIC8vIEhvd2V2ZXIgc2luY2UgSSd2ZSBzZWVuIHN1Z2dlc3Rpb25zIHRoYXQgaW5cbiAgICAgICAgICAgIC8vIEJ1bGdhcmlhbiB0aGUgb3JkaW5hbCBjYW4gYmUgdGFrZW4gaW5cbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBmb3JtcyAobWFzY3VsaW5lLCBmZW1pbmluZSwgbmV1dGVyKVxuICAgICAgICAgICAgLy8gSSd2ZSBvcHRlZCB0byB3aW1wIG91dCBvbiBjb21taXRpbmcgdGhhdCB0byBjb2RlXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfQu9CyJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnY2hzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+WNgycsXG4gICAgICAgICAgICBtaWxsaW9uOiAn55m+5LiHJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfljYHkur8nLFxuICAgICAgICAgICAgdHJpbGxpb246ICflhYYnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfCpSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdjcycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0aXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaWwuJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ0vEjSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdkYS1kaycsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtaW8nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21pYScsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ2InXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdES0snXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGUtY2gnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdDSEYnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZGUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4tYXUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuLWdiJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fiAobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnwqMnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZW4temEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+IChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdSJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VzLWVzJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21tJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMDtcbiAgICAgICAgICAgIHJldHVybiAoYiA9PT0gMSB8fCBiID09PSAzKSA/ICdlcicgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICdkbycgOlxuICAgICAgICAgICAgICAgICAgICAoYiA9PT0gNyB8fCBiID09PSAwKSA/ICdtbycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDgpID8gJ3ZvJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGIgPT09IDkpID8gJ25vJyA6ICd0byc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXMnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbW0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuIChiID09PSAxIHx8IGIgPT09IDMpID8gJ2VyJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ2RvJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDcgfHwgYiA9PT0gMCkgPyAnbW8nIDpcblx0XHQoYiA9PT0gOCkgPyAndm8nIDpcblx0XHQoYiA9PT0gOSkgPyAnbm8nIDogJ3RvJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZXQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnIHR1aCcsXG4gICAgICAgICAgICBtaWxsaW9uOiAnIG1sbicsXG4gICAgICAgICAgICBiaWxsaW9uOiAnIG1sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyB0cmwnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZmknLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnRycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnItY2EnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnRycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ1QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnZnItY2gnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJ1xcJycsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgPT09IDEgPyAnZXInIDogJ2UnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnQ0hGJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2ZyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciA9PT0gMSA/ICdlcicgOiAnZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaHUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnRScsICAvLyBlemVyXG4gICAgICAgICAgICBtaWxsaW9uOiAnTScsICAgLy8gbWlsbGnDs1xuICAgICAgICAgICAgYmlsbGlvbjogJ01yZCcsIC8vIG1pbGxpw6FyZFxuICAgICAgICAgICAgdHJpbGxpb246ICdUJyAgIC8vIHRyaWxsacOzXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICcgRnQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnaXQnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnbWlsYScsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlsJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnamEnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJywnLFxuICAgICAgICAgICAgZGVjaW1hbDogJy4nXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn5Y2DJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfnmb7kuIcnLFxuICAgICAgICAgICAgYmlsbGlvbjogJ+WNgeWEhCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ+WFhidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ8KlJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2x2Jywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyB0xatrc3QuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICcgbWlsai4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJyBtbGpyZC4nLFxuICAgICAgICAgICAgdHJpbGxpb246ICcgdHJpbGouJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ25sLWJlJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWwgIDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kIDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbiAgOiAnIG1sbicsXG4gICAgICAgICAgICBiaWxsaW9uICA6ICcgbWxkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uIDogJyBibG4nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gbnVtYmVyICUgMTAwO1xuXG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAhPT0gMCAmJiByZW1haW5kZXIgPD0gMSB8fCByZW1haW5kZXIgPT09IDggfHwgcmVtYWluZGVyID49IDIwKSA/ICdzdGUnIDogJ2RlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCAnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbmwtbmwnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJy4nLFxuICAgICAgICAgICAgZGVjaW1hbCAgOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQgOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uICA6ICdtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbiAgOiAnbXJkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uIDogJ2JsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSBudW1iZXIgJSAxMDA7XG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAhPT0gMCAmJiByZW1haW5kZXIgPD0gMSB8fCByZW1haW5kZXIgPT09IDggfHwgcmVtYWluZGVyID49IDIwKSA/ICdzdGUnIDogJ2RlJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCrCAnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAnbm8nLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAnaycsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdrcidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwbCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICd0eXMuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtbG4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ21sZCcsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ2JsbidcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1BMTidcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwdC1icicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLicsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdtaWwnLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbGjDtWVzJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuICfCuic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICdSJCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdwdC1wdCcsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnwronO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3J1LXVhJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ9GC0YvRgS4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ9C80LvQvScsXG4gICAgICAgICAgICBiaWxsaW9uOiAnYicsXG4gICAgICAgICAgICB0cmlsbGlvbjogJ3QnXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIG5vdCBpZGVhbCwgYnV0IHNpbmNlIGluIFJ1c3NpYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ1xcdTIwQjQnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdsb2NhbGUnLCAncnUnLCB7XG4gICAgICAgIGRlbGltaXRlcnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kczogJyAnLFxuICAgICAgICAgICAgZGVjaW1hbDogJywnXG4gICAgICAgIH0sXG4gICAgICAgIGFiYnJldmlhdGlvbnM6IHtcbiAgICAgICAgICAgIHRob3VzYW5kOiAn0YLRi9GBLicsXG4gICAgICAgICAgICBtaWxsaW9uOiAn0LzQu9C9LicsXG4gICAgICAgICAgICBiaWxsaW9uOiAn0LzQu9GA0LQuJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0YLRgNC70L0uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBSdXNzaWFuIGl0IGNhbiB0YWtlbiBvblxuICAgICAgICAgICAgLy8gZGlmZmVyZW50IGZvcm1zIChtYXNjdWxpbmUsIGZlbWluaW5lLCBuZXV0ZXIpXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGFsbCB3ZSBjYW4gZG9cbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfRgNGD0LEuJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3NrJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcgJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ3Rpcy4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbC4nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJy4nO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAn4oKsJ1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3NsJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ21pbycsXG4gICAgICAgICAgICBiaWxsaW9uOiAnbXJkJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndHJpbGlqb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfigqwnXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3RoJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ+C4nuC4seC4mScsXG4gICAgICAgICAgICBtaWxsaW9uOiAn4Lil4LmJ4Liy4LiZJyxcbiAgICAgICAgICAgIGJpbGxpb246ICfguJ7guLHguJnguKXguYnguLLguJknLFxuICAgICAgICAgICAgdHJpbGxpb246ICfguKXguYnguLLguJnguKXguYnguLLguJknXG4gICAgICAgIH0sXG4gICAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnLic7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICfguL8nXG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3VmZml4ZXMgPSB7XG4gICAgICAgICAgICAxOiAnXFwnaW5jaScsXG4gICAgICAgICAgICA1OiAnXFwnaW5jaScsXG4gICAgICAgICAgICA4OiAnXFwnaW5jaScsXG4gICAgICAgICAgICA3MDogJ1xcJ2luY2knLFxuICAgICAgICAgICAgODA6ICdcXCdpbmNpJyxcblxuICAgICAgICAgICAgMjogJ1xcJ25jaScsXG4gICAgICAgICAgICA3OiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDIwOiAnXFwnbmNpJyxcbiAgICAgICAgICAgIDUwOiAnXFwnbmNpJyxcblxuICAgICAgICAgICAgMzogJ1xcJ8O8bmPDvCcsXG4gICAgICAgICAgICA0OiAnXFwnw7xuY8O8JyxcbiAgICAgICAgICAgIDEwMDogJ1xcJ8O8bmPDvCcsXG5cbiAgICAgICAgICAgIDY6ICdcXCduY8SxJyxcblxuICAgICAgICAgICAgOTogJ1xcJ3VuY3UnLFxuICAgICAgICAgICAgMTA6ICdcXCd1bmN1JyxcbiAgICAgICAgICAgIDMwOiAnXFwndW5jdScsXG5cbiAgICAgICAgICAgIDYwOiAnXFwnxLFuY8SxJyxcbiAgICAgICAgICAgIDkwOiAnXFwnxLFuY8SxJ1xuICAgICAgICB9O1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3RyJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2JpbicsXG4gICAgICAgICAgICBtaWxsaW9uOiAnbWlseW9uJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdtaWx5YXInLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0cmlseW9uJ1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAobnVtYmVyID09PSAwKSB7ICAvLyBzcGVjaWFsIGNhc2UgZm9yIHplcm9cbiAgICAgICAgICAgICAgICByZXR1cm4gJ1xcJ8SxbmPEsSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICAgICAgYiA9IG51bWJlciAlIDEwMCAtIGEsXG4gICAgICAgICAgICAgICAgYyA9IG51bWJlciA+PSAxMDAgPyAxMDAgOiBudWxsO1xuXG4gICAgICAgICAgcmV0dXJuIHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCQSdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICd1ay11YScsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnICcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLCdcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICfRgtC40YEuJyxcbiAgICAgICAgICAgIG1pbGxpb246ICfQvNC70L0nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ9C80LvRgNC0JyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAn0LHQu9C9J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBub3QgaWRlYWwsIGJ1dCBzaW5jZSBpbiBVa3JhaW5pYW4gaXQgY2FuIHRha2VuIG9uXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgZm9ybXMgKG1hc2N1bGluZSwgZmVtaW5pbmUsIG5ldXRlcilcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYWxsIHdlIGNhbiBkb1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgc3ltYm9sOiAnXFx1MjBCNCdcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ3ZpJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcuJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcsJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJyBuZ2jDrG4nLFxuICAgICAgICAgICAgbWlsbGlvbjogJyB0cmnhu4d1JyxcbiAgICAgICAgICAgIGJpbGxpb246ICcgdOG7tycsXG4gICAgICAgICAgICB0cmlsbGlvbjogJyBuZ2jDrG4gdOG7tydcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICcuJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJ+KCqydcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbnVtZXJhbC9sb2NhbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vbnVtZXJhbC9sb2NhbGVzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHByb3BzLmluaXRpYWxBbW91bnQsXG4gICAgICBhbW91bnQ6IHByb3BzLmluaXRpYWxBbW91bnQsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGFkanVzdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgY29uc3Qgd2luZG93UmVjdCA9IFJlY3QuY3JlYXRlV2l0aFdpbmRvdygpXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5yZWZzLmNhbGN1bGF0b3IsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcblxuICAgICAgbGV0IG5ld0NhbGNSZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NLZXkgPSB0aGlzLnByb3BzLnBvc2l0aW9uc1tpXVxuICAgICAgICBjb25zdCByZWN0ID0gYnV0dG9uUmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgaWYod2luZG93UmVjdC5jb250YWlucyhyZWN0KSl7XG4gICAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFuZXdDYWxjUmVjdCl7XG4gICAgICAgIG5ld0NhbGNSZWN0ID0gd2luZG93UmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIFJlY3QuQ0VOVEVSKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgeDogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWCxcbiAgICAgICAgeTogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0TnVtYmVyKG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50O1xuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQoYW1vdW50LCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICB9XG5cbiAgICBhbW91bnQgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgIH0sIGNhbGxiYWNrKVxuICB9XG5cbiAgaW5wdXRPcGVyYXRvcihvcGVyYXRvciwgYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RGVjaW1hbCgpe1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheS5pbmRleE9mKCcuJykgPT09IC0xKXtcbiAgICAgIHRoaXMuaW5wdXROdW1iZXIoJy4nKVxuICAgIH1cbiAgfVxuXG4gIGlucHV0UGVyY2VudChidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1bml0OiB7XG4gICAgICAgIHZhbHVlOiclJyxcbiAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheVxuICAgICAgfX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSAvIDEwMH0pXG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgIHVuaXQ6IHt9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhbGxDbGVhcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgYW1vdW50OiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKHZhbHVlID09PSAnMCcpe1xuICAgICAgICBuZXdTdGF0ZVsndW5pdCddID0ge31cbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgbmV3U3RhdGVbJ2Rpc3BsYXknXSA9ICF2YWx1ZSA/IDAgOiB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxvY2FsZSA9IG51bWVyYWwubG9jYWxlRGF0YSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cImNhbGN1bGF0b3JcIiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yXCIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tY2xvc2VcIiBkaXNwbGF5PVwiw5dcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24ga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9IGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX0gc3R5bGU9e2J0bi5zdHlsZX0gc2l6ZT17YnRuLnNpemV9IGRpc3BsYXk9e2J0bi5kaXNwbGF5fSBvbkNsaWNrPXtkaXNwbGF5ID0+IGJ0bi5hY3Rpb24odGhpcywgYnRuKX0gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuZGlzcGxheSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZUNsYXNzKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2l6ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS53aWR0aCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS53aWR0aCArICd3JylcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNpemUuaGVpZ2h0KXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLmhlaWdodCArICdoJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMuZ2V0U2l6ZUNsYXNzKCksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzcy1uYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2NsYXNzLW5hbWVzL2luZGV4LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cbn1cblxuUmVjdC5jcmVhdGVXaXRoRWxlbWVudCA9IChlbGVtLCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApID0+IHtcbiAgaWYoIWVsZW0pe1xuICAgIHJldHVybiBuZXcgUmVjdCgwLDAsMCwwKVxuICB9XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIGJvdW5kaW5nUmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgYm91bmRpbmdSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICB0cmFuc2Zvcm1YLFxuICAgIHRyYW5zZm9ybVlcbiAgKVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhXaW5kb3cgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVjdChcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gIClcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEtFWUNPREVTID0ge1xuICBFU0NBUEU6IDI3XG59O1xuXG52YXIgUG9ydGFsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcnRhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcnRhbCkpLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7IGFjdGl2ZTogZmFsc2UgfTtcbiAgICBfdGhpcy5oYW5kbGVXcmFwcGVyQ2xpY2sgPSBfdGhpcy5oYW5kbGVXcmFwcGVyQ2xpY2suYmluZChfdGhpcyk7XG4gICAgX3RoaXMuY2xvc2VQb3J0YWwgPSBfdGhpcy5jbG9zZVBvcnRhbC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayA9IF90aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhbmRsZUtleWRvd24gPSBfdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnBvcnRhbCA9IG51bGw7XG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcnRhbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbkVzYykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZU91dHNpZGVNb3VzZUNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgIC8vIHBvcnRhbCdzICdpcyBvcGVuJyBzdGF0ZSBpcyBoYW5kbGVkIHRocm91Z2ggdGhlIHByb3AgaXNPcGVuZWRcbiAgICAgIGlmICh0eXBlb2YgbmV3UHJvcHMuaXNPcGVuZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChuZXdQcm9wcy5pc09wZW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQb3J0YWwobmV3UHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Qb3J0YWwobmV3UHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5ld1Byb3BzLmlzT3BlbmVkICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcnRhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcnRhbCBoYW5kbGVzIGl0cyBvd24gJ2lzIG9wZW4nIHN0YXRlXG4gICAgICBpZiAodHlwZW9mIG5ld1Byb3BzLmlzT3BlbmVkID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2MpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVPdXRzaWRlTW91c2VDbGljayk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VQb3J0YWwodHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlV3JhcHBlckNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlV3JhcHBlckNsaWNrKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuUG9ydGFsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3BlblBvcnRhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5Qb3J0YWwoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHM7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IHRydWUgfSk7XG4gICAgICB0aGlzLnJlbmRlclBvcnRhbChwcm9wcyk7XG4gICAgICB0aGlzLnByb3BzLm9uT3Blbih0aGlzLm5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlUG9ydGFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2VQb3J0YWwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGlzVW5tb3VudGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgdmFyIHJlc2V0UG9ydGFsU3RhdGUgPSBmdW5jdGlvbiByZXNldFBvcnRhbFN0YXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMyLm5vZGUpIHtcbiAgICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQudW5tb3VudENvbXBvbmVudEF0Tm9kZShfdGhpczIubm9kZSk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChfdGhpczIubm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMyLnBvcnRhbCA9IG51bGw7XG4gICAgICAgIF90aGlzMi5ub2RlID0gbnVsbDtcbiAgICAgICAgaWYgKGlzVW5tb3VudGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5iZWZvcmVDbG9zZSh0aGlzLm5vZGUsIHJlc2V0UG9ydGFsU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc2V0UG9ydGFsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU91dHNpZGVNb3VzZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlT3V0c2lkZU1vdXNlQ2xpY2soZSkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByb290ID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcy5wb3J0YWwpO1xuICAgICAgaWYgKHJvb3QuY29udGFpbnMoZS50YXJnZXQpIHx8IGUuYnV0dG9uICYmIGUuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2xvc2VQb3J0YWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVLZXlkb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5ZG93bihlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBLRVlDT0RFUy5FU0NBUEUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlclBvcnRhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBvcnRhbChwcm9wcykge1xuICAgICAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qaW1mYi9kOTllMDY3OGU5ZGE3MTVjY2Y2NDU0OTYxZWYwNGQxYlxuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5jaGlsZHJlbi50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChwcm9wcy5jaGlsZHJlbiwgeyBjbG9zZVBvcnRhbDogdGhpcy5jbG9zZVBvcnRhbCB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3J0YWwgPSBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgY2hpbGRyZW4sIHRoaXMubm9kZSwgdGhpcy5wcm9wcy5vblVwZGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub3BlbkJ5Q2xpY2tPbikge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLm9wZW5CeUNsaWNrT24sIHsgb25DbGljazogdGhpcy5oYW5kbGVXcmFwcGVyQ2xpY2sgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9ydGFsO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9ydGFsO1xuXG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgb3BlbkJ5Q2xpY2tPbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICBjbG9zZU9uRXNjOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaXNPcGVuZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb25PcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgYmVmb3JlQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25VcGRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuUG9ydGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25PcGVuOiBmdW5jdGlvbiBvbk9wZW4oKSB7fSxcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXBvcnRhbC9idWlsZC9wb3J0YWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL34vcmVhY3QtcG9ydGFsL2J1aWxkL3BvcnRhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L3Byb3AtdHlwZXMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXJcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLFxuICAgICAgICAgICAgICBwcm9wRnVsbE5hbWUsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCAoeCkge31cbiAgICB9O1xuXG4gICAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9mYmpzL2xpYi93YXJuaW5nLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgZnVuY3Rpb24gc2hpbSgpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiY29uc3QgQWN0aW9uID0gIHtcbiAgb25lOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzMnKVxuICB9LFxuICBmb3VyOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignNicpXG4gIH0sXG4gIHNldmVuOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc5JylcbiAgfSxcbiAgemVybzogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dE51bWJlcignMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuaW5wdXROdW1iZXIoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYyl7XG4gICAgY2FsYy5pbnB1dERlY2ltYWwoKVxuICB9LFxuICBwZXJjZW50OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcyl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy0nLCBidG5Qcm9wcylcbiAgfSxcbiAgbXVsdGlwbGljYXRpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzKXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuZXhlY3V0ZSgpXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjKXtcbiAgICBjYWxjLmFsbENsZWFyKClcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==