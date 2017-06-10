(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "numeral/locales", "class-names", "react-portal", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"), require("prop-types"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["locales"], root["classNames"], root["Portal"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
	exports.Action = exports.Rect = exports.CalcPicker = undefined;
	
	var _CalcPicker = __webpack_require__(1);
	
	var _CalcPicker2 = _interopRequireDefault(_CalcPicker);
	
	var _Rect = __webpack_require__(8);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Action = __webpack_require__(11);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CalcPicker = _CalcPicker2.default;
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
	
	var _reactPortal = __webpack_require__(9);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	var _propTypes = __webpack_require__(10);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Rect = __webpack_require__(8);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Action = __webpack_require__(11);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Global = __webpack_require__(12);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	window.addEventListener('keydown', function (e) {
	  if (_Global2.default.currentCalclator) {
	    _Global2.default.currentCalclator.props.buttons.forEach(function (row) {
	      return row.forEach(function (btn) {
	        if (btn.keyDown && btn.keyDown(e)) {
	          e.preventDefault();
	          btn.action(_Global2.default.currentCalclator, btn, e);
	        }
	      });
	    });
	  }
	});
	
	var CalcPicker = function (_React$Component) {
	  _inherits(CalcPicker, _React$Component);
	
	  function CalcPicker(props) {
	    _classCallCheck(this, CalcPicker);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _numeral2.default.locale(props.locale);
	    _this.state = {
	      openCalculator: false,
	      value: props.initialValue
	    };
	    return _this;
	  }
	
	  CalcPicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.locale != nextProps.locale) {
	      _numeral2.default.locale(nextProps.locale);
	    }
	  };
	
	  CalcPicker.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    if (this.state.openCalculator !== prevState.openCalculator) {
	      if (this.state.openCalculator === true) {
	        _Global2.default.currentCalclator = this.refs.calculator;
	      }
	    }
	  };
	
	  CalcPicker.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
	    if (this.state.openCalculator !== nextState.openCalculator) {
	      if (nextState.openCalculator !== true && _Global2.default.currentCalclator === this.refs.calculator) {
	        _Global2.default.currentCalclator = undefined;
	      }
	    }
	  };
	
	  CalcPicker.prototype.onClickAmount = function onClickAmount(e) {
	    e.preventDefault();
	    this.setState({ openCalculator: true });
	    return false;
	  };
	
	  CalcPicker.prototype.onClosePortal = function onClosePortal() {
	    //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
	    if (this.state.openCalculator == true) {
	      this.setState({ openCalculator: false });
	    }
	  };
	
	  CalcPicker.prototype.changeValue = function changeValue(value) {
	    if (this.state.value != value) {
	      this.setState({ value: value });
	      this.props.onChange(value);
	    }
	  };
	
	  CalcPicker.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'react-calcpicker' },
	      _react2.default.createElement(
	        'button',
	        { ref: 'button', className: this.props.className, onClick: function onClick(e) {
	            return _this2.onClickAmount(e);
	          } },
	        (0, _numeral2.default)(this.state.value).format(this.props.format)
	      ),
	      _react2.default.createElement(
	        _reactPortal2.default,
	        { closeOnEsc: true, closeOnOutsideClick: this.props.closeOnOutsideClick, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this2.onClosePortal();
	          } },
	        _react2.default.createElement(_Calculator2.default, {
	          title: this.props.title,
	          ref: 'calculator',
	          initialValue: this.state.value,
	          onClickClose: function onClickClose() {
	            return _this2.setState({ openCalculator: false });
	          },
	          button: this.refs.button,
	          positions: this.props.positions,
	          buttons: this.props.buttons,
	          onCalculated: function onCalculated(value) {
	            return _this2.changeValue(value);
	          },
	          closeButton: this.props.closeButton,
	          closeOnEnterAction: this.props.closeOnEnterAction,
	          zIndex: this.props.zIndex,
	          buttonWidth: this.props.buttonWidth,
	          buttonHeight: this.props.buttonHeight,
	          buttonMargin: this.props.buttonMargin
	        })
	      )
	    );
	  };
	
	  return CalcPicker;
	}(_react2.default.Component);
	
	exports.default = CalcPicker;
	
	
	CalcPicker.propTypes = {
	  initialValue: _propTypes2.default.number,
	  format: _propTypes2.default.string,
	  positions: _propTypes2.default.arrayOf(_propTypes2.default.oneOf([_Rect2.default.RIGHT_BOTTOM, _Rect2.default.LEFT_BOTTOM, _Rect2.default.RIGHT_TOP, _Rect2.default.LEFT_TOP, _Rect2.default.WINDOW_CENTER])),
	  buttons: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.shape({
	    style: _propTypes2.default.oneOf(['default', 'primary', 'light', 'dark', 'warning']),
	    display: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).require,
	    span: _propTypes2.default.shape({
	      width: _propTypes2.default.number,
	      height: _propTypes2.default.number
	    }),
	    action: _propTypes2.default.func.isRequired,
	    keyDown: _propTypes2.default.func
	  }))),
	  buttonWidth: _propTypes2.default.number,
	  buttonHeight: _propTypes2.default.number,
	  buttonMargin: _propTypes2.default.number,
	  className: _propTypes2.default.string,
	  closeButton: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  locale: _propTypes2.default.string,
	  onChange: _propTypes2.default.func.isRequired,
	  closeOnEnterAction: _propTypes2.default.bool,
	  zIndex: _propTypes2.default.number,
	  title: _propTypes2.default.string,
	  closeOnOutsideClick: _propTypes2.default.bool
	};
	
	CalcPicker.defaultProps = {
	  initialValue: 0,
	  format: "0,0[.]00",
	  positions: [_Rect2.default.RIGHT_BOTTOM, _Rect2.default.LEFT_BOTTOM, _Rect2.default.RIGHT_TOP, _Rect2.default.LEFT_TOP, _Rect2.default.WINDOW_CENTER],
	  closeButton: '×',
	  buttons: [[{ style: "dark", display: "AC", action: _Action2.default.allClear, keyDown: function keyDown(e) {
	      return e.key == 'Clear';
	    } }, { style: "dark", display: "←", action: _Action2.default.backspace, keyDown: function keyDown(e) {
	      return e.key == 'Backspace';
	    } }, { style: "light", display: "%", action: _Action2.default.percent, keyDown: function keyDown(e) {
	      return e.key == '%';
	    } }, { style: "primary", display: "÷", action: _Action2.default.division, keyDown: function keyDown(e) {
	      return e.key == '/';
	    } }], [{ style: "default", display: "7", action: _Action2.default.seven, keyDown: function keyDown(e) {
	      return e.key == '7';
	    } }, { style: "default", display: "8", action: _Action2.default.eight, keyDown: function keyDown(e) {
	      return e.key == '8';
	    } }, { style: "default", display: "9", action: _Action2.default.nine, keyDown: function keyDown(e) {
	      return e.key == '9';
	    } }, { style: "primary", display: "×", action: _Action2.default.multiplication, keyDown: function keyDown(e) {
	      return e.key == '*';
	    } }], [{ style: "default", display: "4", action: _Action2.default.four, keyDown: function keyDown(e) {
	      return e.key == '4';
	    } }, { style: "default", display: "5", action: _Action2.default.five, keyDown: function keyDown(e) {
	      return e.key == '5';
	    } }, { style: "default", display: "6", action: _Action2.default.six, keyDown: function keyDown(e) {
	      return e.key == '6';
	    } }, { style: "primary", display: "-", action: _Action2.default.minus, keyDown: function keyDown(e) {
	      return e.key == '-';
	    } }], [{ style: "default", display: "1", action: _Action2.default.one, keyDown: function keyDown(e) {
	      return e.key == '1';
	    } }, { style: "default", display: "2", action: _Action2.default.two, keyDown: function keyDown(e) {
	      return e.key == '2';
	    } }, { style: "default", display: "3", action: _Action2.default.three, keyDown: function keyDown(e) {
	      return e.key == '3';
	    } }, { style: "primary", display: "+", action: _Action2.default.plus, keyDown: function keyDown(e) {
	      return e.key == '+';
	    } }], [{ style: "default", display: "0", action: _Action2.default.zero, keyDown: function keyDown(e) {
	      return e.key == '0';
	    } }, { style: "default", display: "00", action: _Action2.default.doubleZero, keyDown: function keyDown(e) {
	      return e.keyCode == 48 && e.shiftKey;
	    } }, { style: "default", display: ".", action: _Action2.default.decimal, keyDown: function keyDown(e) {
	      return e.key == '.';
	    } }, { style: "warning", display: "=", action: _Action2.default.enter, keyDown: function keyDown(e) {
	      return e.key == '=' || e.key == 'Enter';
	    } }]],
	  closeOnEnterAction: true,
	  buttonWidth: 48,
	  buttonHeight: 32,
	  buttonMargin: 3,
	  closeOnOutsideClick: true
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

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
	
	var _Rect = __webpack_require__(8);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Global = __webpack_require__(12);
	
	var _Global2 = _interopRequireDefault(_Global);
	
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
	      display: props.initialValue,
	      amount: props.initialValue,
	      appendMode: false,
	      format: '0,0[.]0[000000000000]',
	      operator: {},
	      unit: {},
	      x: 0,
	      y: 0
	    };
	
	    _this.closeButtonSize = 30;
	
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
	
	      var rects = [];
	      var newCalcRect = undefined;
	      for (var i = 0; i < this.props.positions.length; i++) {
	        var posKey = this.props.positions[i];
	        var rect = void 0;
	        if (posKey == _Rect2.default.WINDOW_CENTER) {
	          rect = windowRect.getRelativeRect(calcRect, posKey);
	        } else {
	          rect = buttonRect.getRelativeRect(calcRect, posKey);
	        }
	
	        rects.push(rect);
	        if (windowRect.contains(rect)) {
	          newCalcRect = rect;
	          break;
	        }
	      }
	
	      if (!newCalcRect) {
	        rects.sort(function (a, b) {
	          return windowRect.getOverlappingRect(b).area - windowRect.getOverlappingRect(a).area;
	        });
	        newCalcRect = rects[0];
	      }
	
	      if (newCalcRect) {
	        this.setState({
	          x: newCalcRect.transformX,
	          y: newCalcRect.transformY
	        });
	      }
	    }
	  };
	
	  Calculator.prototype.inputToDisplay = function inputToDisplay(number) {
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
	    var calculated = false;
	    if (this.state.operator.value) {
	      display = this.calc(parseFloat(amount, 10), this.state.operator.value, parseFloat(display, 10));
	      calculated = true;
	    }
	
	    amount = display;
	
	    this.setState({
	      operator: {},
	      unit: {},
	      display: display,
	      amount: amount,
	      appendMode: false
	    }, function () {
	      callback();
	    });
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
	      this.inputToDisplay('.');
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
	
	  Calculator.prototype.fix = function fix() {
	    if (this.props.onCalculated) this.props.onCalculated(this.state.amount);
	  };
	
	  Calculator.prototype.close = function close() {
	    this.props.onClickClose();
	  };
	
	  Calculator.prototype.onClickButton = function onClickButton(btnProps, event) {
	    _Global2.default.currentCalclator = this;
	    btnProps.action(this, btnProps, event);
	  };
	
	  Calculator.prototype.render = function render() {
	    var _this3 = this;
	
	    var locale = _numeral2.default.localeData();
	    var style = { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' };
	    if (this.props.zIndex !== undefined) {
	      style['zIndex'] = this.props.zIndex;
	    }
	    return _react2.default.createElement(
	      'div',
	      { ref: 'calculator', className: 'react-calcpicker__calculator', style: style, onClick: function onClick(e) {
	          return _Global2.default.currentCalclator = _this3;
	        } },
	      _react2.default.createElement(
	        'div',
	        { className: 'react-calcpicker__calculator-header' },
	        _react2.default.createElement(
	          'div',
	          { className: 'react-calcpicker__calculator-header-title', style: { width: this.props.buttonWidth * 4 + this.props.buttonMargin * 6 - this.closeButtonSize } },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'react-calcpicker__calculator-header-button' },
	          _react2.default.createElement(_Button2.default, {
	            className: 'react-calcpicker__calculator-button-close',
	            display: this.props.closeButton,
	            onClick: function onClick() {
	              return _this3.close();
	            },
	            width: this.closeButtonSize,
	            height: this.closeButtonSize,
	            margin: this.props.buttonMargin
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'react-calcpicker__calculator-display', style: { margin: this.props.buttonMargin } },
	        _react2.default.createElement(
	          'div',
	          { className: 'react-calcpicker__calculator-display-operator' },
	          this.state.operator.display
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'react-calcpicker__calculator-display-number' },
	          (0, _numeral2.default)(this.state.display).format(this.state.format),
	          this.state.unit.display
	        )
	      ),
	      this.props.buttons.map(function (row, rowKey) {
	        return _react2.default.createElement(
	          'div',
	          { key: rowKey, className: 'react-calcpicker__calculator-buttons' },
	          row.map(function (btn, btnKey) {
	            return _react2.default.createElement(_Button2.default, {
	              ref: function ref(elem) {
	                return btn.component = elem;
	              },
	              prevButton: btnKey > 0 ? row[btnKey - 1] : null,
	              key: rowKey + '-' + btnKey,
	              className: btn.className,
	              style: btn.style,
	              span: btn.span,
	              display: btn.display,
	              onClick: function onClick(e) {
	                return _this3.onClickButton(btn, e);
	              },
	              width: _this3.props.buttonWidth,
	              height: _this3.props.buttonHeight,
	              margin: _this3.props.buttonMargin
	            });
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
	    this.props.onClick(e);
	    return false;
	  };
	
	  Button.prototype.getButtonStyle = function getButtonStyle() {
	    var style = {
	      width: this.props.width,
	      height: this.props.height
	    };
	
	    if (this.props.margin) {
	      style.margin = this.props.margin;
	    }
	
	    if (this.props.span) {
	      style.position = "absolute";
	      if (this.props.span.height >= 2) {
	        var totalMargin = this.props.margin * ((this.props.span.height - 1) * 2);
	        style.height = style.height * this.props.span.height + totalMargin;
	        style.top = -(this.props.height * (this.props.span.height - 1) + totalMargin);
	      }
	
	      if (this.props.span.width >= 2) {
	        var _totalMargin = this.props.margin * ((this.props.span.width - 1) * 2);
	        style.width = style.width * this.props.span.width + _totalMargin;
	      }
	    }
	
	    if (this.props.prevButton && this.props.prevButton.span && this.props.prevButton.span.width && this.props.prevButton.span.width >= 2) {
	      var _totalMargin2 = this.props.margin * (this.props.prevButton.span.width * 2 + 1);
	      style.marginLeft = this.props.width * this.props.prevButton.span.width + _totalMargin2;
	    }
	
	    return style;
	  };
	
	  Button.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'button',
	      {
	        ref: 'element',
	        className: (0, _classNames2.default)("react-calcpicker__calculator-button", this.props.style ? "react-calcpicker__calculator-button-" + this.props.style : undefined, this.props.className),
	        style: this.getButtonStyle(),
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
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
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
	      case Rect.WINDOW_CENTER:
	        var expectedRect = this.getCenterRect(rect.width, rect.height);
	        return rect.clone().transform(expectedRect.left - rect.originLeft, expectedRect.top - rect.originTop);
	      default:
	        throw 'Illegal positionKey `' + position + '` is specified';
	    }
	  };
	
	  Rect.prototype.getOverlappingRect = function getOverlappingRect(rect) {
	    var top = Math.max(this.top, rect.top);
	    var left = Math.max(this.left, rect.left);
	    var right = Math.min(this.right, rect.right);
	    var bottom = Math.min(this.bottom, rect.bottom);
	
	    var width = right - left;
	    var height = bottom - top;
	    if (width > 0 && height > 0) {
	      return new Rect(top, left, width, height);
	    } else {
	      return null;
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
	  }, {
	    key: 'area',
	    get: function get() {
	      return this.width * this.height;
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
	
	Object.defineProperty(Rect, 'WINDOW_CENTER', {
	  enumerable: false,
	  configurable: false,
	  writable: false,
	  value: "WINDOW_CENTER"
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Global = __webpack_require__(12);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Action = {
	  one: function one(calc, btnProps, event) {
	    calc.inputToDisplay('1');
	  },
	  two: function two(calc, btnProps, event) {
	    calc.inputToDisplay('2');
	  },
	  three: function three(calc, btnProps, event) {
	    calc.inputToDisplay('3');
	  },
	  four: function four(calc, btnProps, event) {
	    calc.inputToDisplay('4');
	  },
	  five: function five(calc, btnProps, event) {
	    calc.inputToDisplay('5');
	  },
	  six: function six(calc, btnProps, event) {
	    calc.inputToDisplay('6');
	  },
	  seven: function seven(calc, btnProps, event) {
	    calc.inputToDisplay('7');
	  },
	  eight: function eight(calc, btnProps, event) {
	    calc.inputToDisplay('8');
	  },
	  nine: function nine(calc, btnProps, event) {
	    calc.inputToDisplay('9');
	  },
	  zero: function zero(calc, btnProps, event) {
	    calc.inputToDisplay('0');
	  },
	  doubleZero: function doubleZero(calc, btnProps, event) {
	    calc.inputToDisplay('00');
	  },
	  decimal: function decimal(calc, btnProps, event) {
	    calc.inputDecimal();
	  },
	  percent: function percent(calc, btnProps, event) {
	    calc.inputPercent(btnProps);
	  },
	  plus: function plus(calc, btnProps, event) {
	    calc.inputOperator('+', btnProps);
	  },
	  minus: function minus(calc, btnProps, event) {
	    calc.inputOperator('-', btnProps);
	  },
	  multiplication: function multiplication(calc, btnProps, event) {
	    calc.inputOperator('*', btnProps);
	  },
	  division: function division(calc, btnProps, event) {
	    calc.inputOperator('/', btnProps);
	  },
	  enter: function enter(calc, btnProps, event) {
	    calc.execute(function () {
	      calc.fix();
	      if (calc.props.closeOnEnterAction) {
	        calc.close();
	      }
	    });
	  },
	  allClear: function allClear(calc, btnProps, event) {
	    calc.allClear();
	  },
	  clear: function clear(calc, btnProps, event) {
	    calc.clear();
	  },
	  backspace: function backspace(calc, btnProps, event) {
	    calc.delete();
	  }
	};
	
	exports.default = Action;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Global = function () {
	  function Global() {
	    _classCallCheck(this, Global);
	  }
	
	  _createClass(Global, [{
	    key: "currentCalclator",
	    get: function get() {
	      return this._currentCalclator;
	    },
	    set: function set(value) {
	      this._currentCalclator = value;
	    }
	  }]);
	
	  return Global;
	}();
	
	var g = new Global();
	exports.default = g;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhM2RkODViNzA4ODhkYmE1MGViYiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIl0sIm5hbWVzIjpbIkNhbGNQaWNrZXIiLCJSZWN0IiwiQWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwicHJvcHMiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrQW1vdW50Iiwic2V0U3RhdGUiLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsImNsb3NlT25PdXRzaWRlQ2xpY2siLCJ0aXRsZSIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkVudGVyQWN0aW9uIiwiekluZGV4IiwiYnV0dG9uV2lkdGgiLCJidXR0b25IZWlnaHQiLCJidXR0b25NYXJnaW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJhcnJheU9mIiwib25lT2YiLCJSSUdIVF9CT1RUT00iLCJMRUZUX0JPVFRPTSIsIlJJR0hUX1RPUCIsIkxFRlRfVE9QIiwiV0lORE9XX0NFTlRFUiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImFsbENsZWFyIiwia2V5IiwiYmFja3NwYWNlIiwicGVyY2VudCIsImRpdmlzaW9uIiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJtdWx0aXBsaWNhdGlvbiIsImZvdXIiLCJmaXZlIiwic2l4IiwibWludXMiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInBsdXMiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImtleUNvZGUiLCJzaGlmdEtleSIsImRlY2ltYWwiLCJlbnRlciIsIkNhbGN1bGF0b3IiLCJhbW91bnQiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwieCIsInkiLCJjbG9zZUJ1dHRvblNpemUiLCJvbnJlc2l6ZSIsImFkanVzdFBvc2l0aW9uIiwid2luZG93UmVjdCIsImNyZWF0ZVdpdGhXaW5kb3ciLCJidXR0b25SZWN0IiwiY3JlYXRlV2l0aEVsZW1lbnQiLCJjYWxjUmVjdCIsInJlY3RzIiwibmV3Q2FsY1JlY3QiLCJpIiwibGVuZ3RoIiwicG9zS2V5IiwicmVjdCIsImdldFJlbGF0aXZlUmVjdCIsInB1c2giLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImlucHV0VG9EaXNwbGF5IiwiY2FsYyIsImxlZnQiLCJyaWdodCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiZGVsZXRlIiwibmV3U3RhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImNvbXBvbmVudERpZE1vdW50IiwiZml4Iiwib25DYWxjdWxhdGVkIiwiY2xvc2UiLCJvbkNsaWNrQ2xvc2UiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJsb2NhbGVEYXRhIiwidHJhbnNmb3JtIiwibWFyZ2luIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50IiwiZWxlbSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRCdXR0b25TdHlsZSIsInBvc2l0aW9uIiwidG90YWxNYXJnaW4iLCJ0b3AiLCJwcmV2QnV0dG9uIiwibWFyZ2luTGVmdCIsImdldENlbnRlclJlY3QiLCJjZW50ZXIiLCJjbG9uZSIsIm9yaWdpblRvcCIsIm9yaWdpbkxlZnQiLCJyZXN1bHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJleHBlY3RlZFJlY3QiLCJNYXRoIiwibWF4IiwibWluIiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImRvY3VtZW50IiwiZG9jRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiR2xvYmFsIiwiX2N1cnJlbnRDYWxjbGF0b3IiLCJnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVC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QUNEO0FBQ0YsTUFMRDtBQU1ELElBM0RhO0FBNERkM0UsYUFBVSxrQkFBU3VELElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDdkN2QixVQUFLdkQsUUFBTDtBQUNELElBOURhO0FBK0RkbUUsVUFBTyxlQUFTWixJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ3BDdkIsVUFBS1ksS0FBTDtBQUNELElBakVhO0FBa0VkakUsY0FBVyxtQkFBU3FELElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDeEN2QixVQUFLYSxNQUFMO0FBQ0Q7QUFwRWEsRUFBaEI7O21CQXVFZTFJLE07Ozs7Ozs7Ozs7Ozs7Ozs7S0N6RVRzTSxNOzs7Ozs7O3lCQUVrQjtBQUNwQixjQUFPLEtBQUtDLGlCQUFaO0FBQ0QsTTt1QkFFb0J2TCxLLEVBQU07QUFDekIsWUFBS3VMLGlCQUFMLEdBQXlCdkwsS0FBekI7QUFDRDs7Ozs7O0FBR0gsS0FBTXdMLElBQUksSUFBSUYsTUFBSixFQUFWO21CQUNlRSxDIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJyZWFjdC1wb3J0YWxcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wibG9jYWxlc1wiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTNkZDg1YjcwODg4ZGJhNTBlYmIiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yKXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvci5wcm9wcy5idXR0b25zLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBpZihidG4ua2V5RG93biAmJiBidG4ua2V5RG93bihlKSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBidG4uYWN0aW9uKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLCBidG4sIGUpXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGNQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbnVtZXJhbC5sb2NhbGUocHJvcHMubG9jYWxlKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuQ2FsY3VsYXRvcjogZmFsc2UsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgIT09IHByZXZTdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09PSB0cnVlKXtcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzLnJlZnMuY2FsY3VsYXRvclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgIT09IG5leHRTdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICBpZihuZXh0U3RhdGUub3BlbkNhbGN1bGF0b3IgIT09IHRydWUgJiYgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPT09IHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLnZhbHVlICE9IHZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0pXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJcIj5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrQW1vdW50KGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLnZhbHVlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGlja30gaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfT5cbiAgICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pfVxuICAgICAgICAgICAgYnV0dG9uPXt0aGlzLnJlZnMuYnV0dG9ufVxuICAgICAgICAgICAgcG9zaXRpb25zPXt0aGlzLnByb3BzLnBvc2l0aW9uc31cbiAgICAgICAgICAgIGJ1dHRvbnM9e3RoaXMucHJvcHMuYnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2FsY3VsYXRlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgIGNsb3NlT25FbnRlckFjdGlvbj17dGhpcy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb259XG4gICAgICAgICAgICB6SW5kZXg9e3RoaXMucHJvcHMuekluZGV4fVxuICAgICAgICAgICAgYnV0dG9uV2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICBidXR0b25IZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgYnV0dG9uTWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIHNwYW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICAgIH0pLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleURvd246IFByb3BUeXBlcy5mdW5jXG4gICAgICB9KVxuICAgIClcbiAgKSxcbiAgYnV0dG9uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uTWFyZ2luOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWUsXG4gIGJ1dHRvbldpZHRoOiA0OCxcbiAgYnV0dG9uSGVpZ2h0OiAzMixcbiAgYnV0dG9uTWFyZ2luOiAzLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50O1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQoYW1vdW50LCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFtb3VudCA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICBhbW91bnQ6ICcwJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgdW5pdDoge30sXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSgpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYodmFsdWUgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIXZhbHVlID8gMCA6IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUuYW1vdW50KVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGJ0blByb3BzLCBldmVudCl7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzO1xuICAgIGJ0blByb3BzLmFjdGlvbih0aGlzLCBidG5Qcm9wcywgZXZlbnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItdGl0bGVcIiBzdHlsZT17e3dpZHRoOiAoKHRoaXMucHJvcHMuYnV0dG9uV2lkdGggKiA0KSArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDYpKSAtIHRoaXMuY2xvc2VCdXR0b25TaXplfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCIgc3R5bGU9e3ttYXJnaW46IHRoaXMucHJvcHMuYnV0dG9uTWFyZ2lufX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfVxuICAgICAgICAgICAgICAgICAgICBwcmV2QnV0dG9uPXtidG5LZXkgPiAwID8gcm93W2J0bktleSAtIDFdIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0bi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbj17YnRuLnNwYW59XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2J0bi5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0J1dHRvbihidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJ1xuXG5jb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwiY2xhc3MgR2xvYmFsXG57XG4gIGdldCBjdXJyZW50Q2FsY2xhdG9yKCl7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3JcbiAgfVxuXG4gIHNldCBjdXJyZW50Q2FsY2xhdG9yKHZhbHVlKXtcbiAgICB0aGlzLl9jdXJyZW50Q2FsY2xhdG9yID0gdmFsdWVcbiAgfVxufVxuXG5jb25zdCBnID0gbmV3IEdsb2JhbCgpXG5leHBvcnQgZGVmYXVsdCBnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==