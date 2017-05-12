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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	        _this.props.buttons.forEach(function (row) {
	          return row.forEach(function (btn) {
	            if (btn.keyDown && btn.keyDown(e)) {
	              e.preventDefault();
	              btn.action(_this.refs.calculator, btn, e);
	            }
	          });
	        });
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
	
	  CalcPicker.prototype.onClosePortal = function onClosePortal() {
	    //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
	    if (this.state.openCalculator == true) {
	      this.setState({ openCalculator: false });
	    }
	  };
	
	  CalcPicker.prototype.changeValue = function changeValue(value) {
	    if (this.state.amount != value) {
	      this.setState({ amount: value });
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
	        (0, _numeral2.default)(this.state.amount).format(this.props.format)
	      ),
	      _react2.default.createElement(
	        _reactPortal2.default,
	        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this2.onClosePortal();
	          } },
	        _react2.default.createElement(_Calculator2.default, {
	          ref: 'calculator',
	          initialAmount: this.state.amount,
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
	          closeOnEnterAction: this.props.closeOnEnterAction
	        })
	      )
	    );
	  };
	
	  return CalcPicker;
	}(_react2.default.Component);
	
	exports.default = CalcPicker;
	
	
	CalcPicker.propTypes = {
	  initialAmount: _propTypes2.default.number,
	  format: _propTypes2.default.string,
	  positions: _propTypes2.default.arrayOf(_propTypes2.default.oneOf([_Rect2.default.RIGHT_BOTTOM, _Rect2.default.LEFT_BOTTOM, _Rect2.default.RIGHT_TOP, _Rect2.default.LEFT_TOP])),
	  buttons: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.shape({
	    style: _propTypes2.default.oneOf(['default', 'primary', 'light', 'dark', 'warning']),
	    display: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).require,
	    action: _propTypes2.default.func.isRequired,
	    keyDown: _propTypes2.default.func,
	    closeOnAction: _propTypes2.default.bool
	  }))),
	  className: _propTypes2.default.string,
	  closeButton: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  locale: _propTypes2.default.string,
	  onChange: _propTypes2.default.func.isRequired,
	  closeOnEnterAction: _propTypes2.default.bool
	};
	
	CalcPicker.defaultProps = {
	  initialAmount: 0,
	  format: "0,0[.]00",
	  positions: [_Rect2.default.RIGHT_BOTTOM],
	  closeButton: '×',
	  buttons: [[{ style: "dark", display: _react2.default.createElement(
	      'span',
	      null,
	      'AC'
	    ), action: _Action2.default.allClear, keyDown: function keyDown(e) {
	      return e.key == 'Clear';
	    } }, { style: "dark", display: _react2.default.createElement(
	      'span',
	      null,
	      '\u2190'
	    ), action: _Action2.default.backspace, keyDown: function keyDown(e) {
	      return e.key == 'Backspace';
	    } }, { style: "light", display: _react2.default.createElement(
	      'span',
	      null,
	      '%'
	    ), action: _Action2.default.percent, keyDown: function keyDown(e) {
	      return e.key == '%';
	    } }, { style: "primary", display: _react2.default.createElement(
	      'span',
	      null,
	      '\xF7'
	    ), action: _Action2.default.division, keyDown: function keyDown(e) {
	      return e.key == '/';
	    } }], [{ style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '7'
	    ), action: _Action2.default.seven, keyDown: function keyDown(e) {
	      return e.key == '7';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '8'
	    ), action: _Action2.default.eight, keyDown: function keyDown(e) {
	      return e.key == '8';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '9'
	    ), action: _Action2.default.nine, keyDown: function keyDown(e) {
	      return e.key == '9';
	    } }, { style: "primary", display: _react2.default.createElement(
	      'span',
	      null,
	      '\xD7'
	    ), action: _Action2.default.multiplication, keyDown: function keyDown(e) {
	      return e.key == '*';
	    } }], [{ style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '4'
	    ), action: _Action2.default.four, keyDown: function keyDown(e) {
	      return e.key == '4';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '5'
	    ), action: _Action2.default.five, keyDown: function keyDown(e) {
	      return e.key == '5';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '6'
	    ), action: _Action2.default.six, keyDown: function keyDown(e) {
	      return e.key == '6';
	    } }, { style: "primary", display: _react2.default.createElement(
	      'span',
	      null,
	      '-'
	    ), action: _Action2.default.minus, keyDown: function keyDown(e) {
	      return e.key == '-';
	    } }], [{ style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '1'
	    ), action: _Action2.default.one, keyDown: function keyDown(e) {
	      return e.key == '1';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '2'
	    ), action: _Action2.default.two, keyDown: function keyDown(e) {
	      return e.key == '2';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '3'
	    ), action: _Action2.default.three, keyDown: function keyDown(e) {
	      return e.key == '3';
	    } }, { style: "primary", display: _react2.default.createElement(
	      'span',
	      null,
	      '+'
	    ), action: _Action2.default.plus, keyDown: function keyDown(e) {
	      return e.key == '+';
	    } }], [{ style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '0'
	    ), action: _Action2.default.zero, keyDown: function keyDown(e) {
	      return e.key == '0';
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '00'
	    ), action: _Action2.default.doubleZero, keyDown: function keyDown(e) {
	      return e.keyCode == 48 && e.shiftKey;
	    } }, { style: "default", display: _react2.default.createElement(
	      'span',
	      null,
	      '.'
	    ), action: _Action2.default.decimal, keyDown: function keyDown(e) {
	      return e.key == '.';
	    } }, { style: "warning", display: _react2.default.createElement(
	      'span',
	      null,
	      '='
	    ), action: _Action2.default.enter, keyDown: function keyDown(e) {
	      return e.key == '=' || e.key == 'Enter';
	    } }]],
	  closeOnEnterAction: true
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
	      format: '0,0[.]0[000000000000]',
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
	    var _this2 = this;
	
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
	      if (calculated) _this2.fix();
	    });
	  };
	
	  Calculator.prototype.inputOperator = function inputOperator(operator, btnProps) {
	    var _this3 = this;
	
	    if (this.state.appendMode) {
	      this.execute(function () {
	        _this3.setState({
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
	
	  Calculator.prototype.render = function render() {
	    var _this4 = this;
	
	    var locale = _numeral2.default.localeData();
	    return _react2.default.createElement(
	      'div',
	      { ref: 'calculator', className: 'react-calcpicker__calculator', style: { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' } },
	      _react2.default.createElement(
	        'div',
	        { className: 'react-calcpicker__calculator-header' },
	        _react2.default.createElement(_Button2.default, { className: 'react-calcpicker__calculator-button-close', display: this.props.closeButton, onClick: function onClick() {
	            return _this4.close();
	          } })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'react-calcpicker__calculator-display' },
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
	            return _react2.default.createElement(_Button2.default, { ref: function ref(elem) {
	                return btn.component = elem;
	              }, key: rowKey + '-' + btnKey, className: btn.className, style: btn.style, size: btn.size, display: btn.display, onClick: function onClick(e) {
	                return btn.action(_this4, btn, e);
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
	    this.props.onClick(e);
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
	
	    return _react2.default.createElement(
	      'button',
	      {
	        ref: 'element',
	        className: (0, _classNames2.default)("react-calcpicker__calculator-button", this.props.style ? "react-calcpicker__calculator-button-" + this.props.style : undefined, this.getSizeClass(), this.props.className),
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
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Action = {
	  one: function one(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('1');
	  },
	  two: function two(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('2');
	  },
	  three: function three(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('3');
	  },
	  four: function four(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('4');
	  },
	  five: function five(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('5');
	  },
	  six: function six(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('6');
	  },
	  seven: function seven(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('7');
	  },
	  eight: function eight(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('8');
	  },
	  nine: function nine(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('9');
	  },
	  zero: function zero(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('0');
	  },
	  doubleZero: function doubleZero(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputToDisplay('00');
	  },
	  decimal: function decimal(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputDecimal();
	  },
	  percent: function percent(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputPercent(btnProps);
	  },
	  plus: function plus(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputOperator('+', btnProps);
	  },
	  minus: function minus(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputOperator('-', btnProps);
	  },
	  multiplication: function multiplication(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputOperator('*', btnProps);
	  },
	  division: function division(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputOperator('/', btnProps);
	  },
	  enter: function enter(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.execute(function () {
	      if (calc.props.closeOnEnterAction) {
	        calc.close();
	      }
	    });
	  },
	  allClear: function allClear(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.allClear();
	  },
	  clear: function clear(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.clear();
	  },
	  backspace: function backspace(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.delete();
	  }
	};
	
	exports.default = Action;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5Nzk2MjNhZjJlOTY2M2EyODIwOSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwibmFtZXMiOlsiQ2FsY1BpY2tlciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJhbW91bnQiLCJpbml0aWFsQW1vdW50Iiwid2luZG93Iiwib25rZXlkb3duIiwiZSIsImJ1dHRvbnMiLCJmb3JFYWNoIiwicm93IiwiYnRuIiwia2V5RG93biIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwicmVmcyIsImNhbGN1bGF0b3IiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwib25DbGlja0Ftb3VudCIsInNldFN0YXRlIiwib25DbG9zZVBvcnRhbCIsImNoYW5nZVZhbHVlIiwidmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkVudGVyQWN0aW9uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9uZU9mIiwiUklHSFRfQk9UVE9NIiwiTEVGVF9CT1RUT00iLCJSSUdIVF9UT1AiLCJMRUZUX1RPUCIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiY2xvc2VPbkFjdGlvbiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJhbGxDbGVhciIsImtleSIsImJhY2tzcGFjZSIsInBlcmNlbnQiLCJkaXZpc2lvbiIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbGljYXRpb24iLCJmb3VyIiwiZml2ZSIsInNpeCIsIm1pbnVzIiwib25lIiwidHdvIiwidGhyZWUiLCJwbHVzIiwiemVybyIsImRvdWJsZVplcm8iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJkZWNpbWFsIiwiZW50ZXIiLCJDYWxjdWxhdG9yIiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsIngiLCJ5Iiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndpbmRvd1JlY3QiLCJjcmVhdGVXaXRoV2luZG93IiwiYnV0dG9uUmVjdCIsImNyZWF0ZVdpdGhFbGVtZW50IiwiY2FsY1JlY3QiLCJuZXdDYWxjUmVjdCIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwiY29udGFpbnMiLCJDRU5URVIiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImlucHV0VG9EaXNwbGF5IiwiY2FsYyIsImxlZnQiLCJyaWdodCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiZml4IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiZGVsZXRlIiwibmV3U3RhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImNvbXBvbmVudERpZE1vdW50Iiwib25DYWxjdWxhdGVkIiwiY2xvc2UiLCJvbkNsaWNrQ2xvc2UiLCJsb2NhbGVEYXRhIiwidHJhbnNmb3JtIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50IiwiZWxlbSIsInNpemUiLCJCdXR0b24iLCJvbkNsaWNrIiwiZ2V0U2l6ZUNsYXNzIiwiY2xhc3NOYW1lcyIsIndpZHRoIiwicHVzaCIsImhlaWdodCIsInRvcCIsImdldENlbnRlclJlY3QiLCJjZW50ZXIiLCJjbG9uZSIsIm9yaWdpblRvcCIsIm9yaWdpbkxlZnQiLCJyZXN1bHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsImV4cGVjdGVkUmVjdCIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImV2ZW50IiwiZWxlbWVudCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1NBRVFBLFU7U0FBWUMsSTtTQUFNQyxNOzs7Ozs7Ozs7Ozs7QUNKMUI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkYsVTs7O0FBRW5CLHVCQUFZRyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0RBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUVqQix1QkFBUUMsTUFBUixDQUFlRCxNQUFNQyxNQUFyQjtBQUNBLFdBQUtDLEtBQUwsR0FB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bUJqSCxJQUFuQixDQUF3QjRKLE9BQXhCLENBQWdDQyxLQUFoQztBQUNBdkUsVUFBS2hELFFBQUw7QUFDRCxJQWhGYTtBQWlGZDZELFVBQU8sZUFBU2IsSUFBVCxFQUFlUyxRQUFmLEVBQXlCNEQsS0FBekIsRUFBK0I7QUFDcEM1RCxjQUFTa0IsU0FBVCxDQUFtQmpILElBQW5CLENBQXdCNEosT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0F2RSxVQUFLYSxLQUFMO0FBQ0QsSUFwRmE7QUFxRmQzRCxjQUFXLG1CQUFTOEMsSUFBVCxFQUFlUyxRQUFmLEVBQXlCNEQsS0FBekIsRUFBK0I7QUFDeEM1RCxjQUFTa0IsU0FBVCxDQUFtQmpILElBQW5CLENBQXdCNEosT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0F2RSxVQUFLYyxNQUFMO0FBQ0Q7QUF4RmEsRUFBaEI7O21CQTJGZXJILE0iLCJmaWxlIjoicmVhY3QtY2FsY3BpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm51bWVyYWxcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJjbGFzcy1uYW1lc1wiLCBcInJlYWN0LXBvcnRhbFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIm51bWVyYWxcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlBvcnRhbFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5Nzk2MjNhZjJlOTY2M2EyODIwOSIsImltcG9ydCBDYWxjUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9DYWxjUGlja2VyJztcbmltcG9ydCBSZWN0IGZyb20gJy4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2NsYXNzZXMvQWN0aW9uJ1xuXG5leHBvcnQge0NhbGNQaWNrZXIsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudFxuICAgIH1cblxuICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYnRuLmFjdGlvbih0aGlzLnJlZnMuY2FsY3VsYXRvciwgYnRuLCBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLmFtb3VudCAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHthbW91bnQ6IHZhbHVlfSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlclwiPlxuICAgICAgICA8YnV0dG9uIHJlZj1cImJ1dHRvblwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uQ2xpY2tBbW91bnQoZSl9PlxuICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuYW1vdW50KS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2sgaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfT5cbiAgICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgICAgcmVmPSdjYWxjdWxhdG9yJ1xuICAgICAgICAgICAgaW5pdGlhbEFtb3VudD17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICBvbkNsaWNrQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pfVxuICAgICAgICAgICAgYnV0dG9uPXt0aGlzLnJlZnMuYnV0dG9ufVxuICAgICAgICAgICAgcG9zaXRpb25zPXt0aGlzLnByb3BzLnBvc2l0aW9uc31cbiAgICAgICAgICAgIGJ1dHRvbnM9e3RoaXMucHJvcHMuYnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2FsY3VsYXRlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgIGNsb3NlT25FbnRlckFjdGlvbj17dGhpcy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhbGNQaWNrZXIucHJvcFR5cGVzID0ge1xuICBpbml0aWFsQW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvc2l0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gIF0pKSxcbiAgYnV0dG9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2xpZ2h0JywgJ2RhcmsnLCAnd2FybmluZyddKSxcbiAgICAgICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBdKS5yZXF1aXJlLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBjbG9zZU9uQWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IFByb3BUeXBlcy5ib29sLFxufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbEFtb3VudDogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1JlY3QuUklHSFRfQk9UVE9NXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiA8c3Bhbj5BQzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogPHNwYW4+4oaQPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiA8c3Bhbj4lPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogPHNwYW4+w7c8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Nzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj44PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjk8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiA8c3Bhbj7Dlzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj40PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+NTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjY8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IDxzcGFuPi08L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+MTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Mjwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Mzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiA8c3Bhbj4rPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+MDwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjAwPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4uPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogPHNwYW4+PTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbEFtb3VudCxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuICB9XG5cbiAgYWRqdXN0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLnJlZnMuY2FsY3VsYXRvcil7XG4gICAgICBjb25zdCB3aW5kb3dSZWN0ID0gUmVjdC5jcmVhdGVXaXRoV2luZG93KClcbiAgICAgIGNvbnN0IGJ1dHRvblJlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucHJvcHMuYnV0dG9uKTtcbiAgICAgIGNvbnN0IGNhbGNSZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnJlZnMuY2FsY3VsYXRvciwgdGhpcy5zdGF0ZS54LCB0aGlzLnN0YXRlLnkpO1xuXG4gICAgICBsZXQgbmV3Q2FsY1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc0tleSA9IHRoaXMucHJvcHMucG9zaXRpb25zW2ldXG4gICAgICAgIGNvbnN0IHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgbmV3Q2FsY1JlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgUmVjdC5DRU5URVIpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICB5OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1ZLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRUb0Rpc3BsYXkobnVtYmVyKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5hbW91bnQ7XG4gICAgbGV0IGNhbGN1bGF0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLmNhbGMocGFyc2VGbG9hdChhbW91bnQsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgYW1vdW50ID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICBpZihjYWxjdWxhdGVkKSB0aGlzLmZpeCgpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIGFtb3VudDogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgICBpZih2YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhdmFsdWUgPyAwIDogdmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCkgdGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQodGhpcy5zdGF0ZS5hbW91bnQpXG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0Nsb3NlKClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxvY2FsZSA9IG51bWVyYWwubG9jYWxlRGF0YSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cImNhbGN1bGF0b3JcIiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yXCIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tY2xvc2VcIiBkaXNwbGF5PXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlKCl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3IuZGlzcGxheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1udW1iZXJcIj5cbiAgICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuZGlzcGxheSkuZm9ybWF0KHRoaXMuc3RhdGUuZm9ybWF0KX17dGhpcy5zdGF0ZS51bml0LmRpc3BsYXl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zLm1hcCgocm93LCByb3dLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0tleX0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIHJlZj17ZWxlbSA9PiBidG4uY29tcG9uZW50ID0gZWxlbX0ga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9IGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX0gc3R5bGU9e2J0bi5zdHlsZX0gc2l6ZT17YnRuLnNpemV9IGRpc3BsYXk9e2J0bi5kaXNwbGF5fSBvbkNsaWNrPXtlID0+IGJ0bi5hY3Rpb24odGhpcywgYnRuLCBlKX0gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZUNsYXNzKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2l6ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS53aWR0aCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS53aWR0aCArICd3JylcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNpemUuaGVpZ2h0KXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLmhlaWdodCArICdoJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImVsZW1lbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvblwiLFxuICAgICAgICAgIHRoaXMucHJvcHMuc3R5bGUgPyBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zdHlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5fVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFxue1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkge1xuICAgIHRoaXMudG9wID0gdG9wXG4gICAgdGhpcy5sZWZ0ID0gbGVmdFxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdHJhbnNmb3JtWFxuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRyYW5zZm9ybVlcbiAgfVxuXG4gIGdldCBib3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCByaWdodCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG9yaWdpblRvcCgpe1xuICAgIHJldHVybiB0aGlzLnRvcCAtIHRoaXMudHJhbnNmb3JtWTtcbiAgfVxuXG4gIGdldCBvcmlnaW5MZWZ0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCAtIHRoaXMudHJhbnNmb3JtWDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Cb3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5Ub3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBvcmlnaW5SaWdodCgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0Q2VudGVyUmVjdCh3aWR0aCwgaGVpZ2h0KXtcbiAgICBjb25zdCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLmxlZnQgKyAodGhpcy53aWR0aCAvIDIpLFxuICAgICAgeTogdGhpcy50b3AgKyAodGhpcy5oZWlnaHQgLyAyKSxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICBjZW50ZXIueSAtIChoZWlnaHQgLyAyKSxcbiAgICAgIGNlbnRlci54IC0gKHdpZHRoIC8gMiksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgdGhpcy50b3AsXG4gICAgICB0aGlzLmxlZnQsXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0aGlzLnRyYW5zZm9ybVlcbiAgICApXG4gIH1cblxuICB0cmFuc2Zvcm0oeCwgeSl7XG4gICAgdGhpcy50b3AgPSB0aGlzLm9yaWdpblRvcCArIHk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5vcmlnaW5MZWZ0ICsgeDtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB4O1xuICAgIHRoaXMudHJhbnNmb3JtWSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250YWlucyhyZWN0KXtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxlZnQgPD0gcmVjdC5sZWZ0XG4gICAgICAmJlxuICAgICAgdGhpcy5yaWdodCA+PSByZWN0LnJpZ2h0XG4gICAgICAmJlxuICAgICAgdGhpcy50b3AgPD0gcmVjdC50b3BcbiAgICAgICYmXG4gICAgICB0aGlzLmJvdHRvbSA+PSByZWN0LmJvdHRvbTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBkdW1wKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBvcmlnaW5Ub3A6IHRoaXMub3JpZ2luVG9wLFxuICAgICAgb3JpZ2luTGVmdDogdGhpcy5vcmlnaW5MZWZ0LFxuICAgICAgb3JpZ2luQm90dG9tOiB0aGlzLm9yaWdpbkJvdHRvbSxcbiAgICAgIG9yaWdpblJpZ2h0OiB0aGlzLm9yaWdpblJpZ2h0LFxuICAgICAgdHJhbnNmb3JtWDogdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdHJhbnNmb3JtWTogdGhpcy50cmFuc2Zvcm1ZLFxuICAgIH1cbiAgfVxuXG4gIGdldFJlbGF0aXZlUmVjdChyZWN0LCBwb3NpdGlvbil7XG4gICAgc3dpdGNoKHBvc2l0aW9uKXtcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LlJJR0hUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkNFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdDRU5URVInLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkNFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==