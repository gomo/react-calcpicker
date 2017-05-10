(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "numeral/locales", "class-names", "react-portal", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"), require("prop-types"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["locales"], root["classNames"], root["Portal"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
	
	var _Action = __webpack_require__(10);
	
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
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Rect = __webpack_require__(8);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Action = __webpack_require__(10);
	
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
	          closeButton: this.props.closeButton
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
	    action: _propTypes2.default.func.require,
	    keyDown: _propTypes2.default.func
	  }))),
	  className: _propTypes2.default.string,
	  closeButton: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  locale: _propTypes2.default.string
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
	    } }]]
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
	
	  Calculator.prototype.render = function render() {
	    var _this4 = this;
	
	    var locale = _numeral2.default.localeData();
	    return _react2.default.createElement(
	      'div',
	      { ref: 'calculator', className: 'react-calcpicker__calculator', style: { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' } },
	      _react2.default.createElement(
	        'div',
	        { className: 'react-calcpicker__calculator-header' },
	        _react2.default.createElement(_Button2.default, { className: 'react-calcpicker__calculator-button-close', display: this.props.closeButton, onClick: this.props.onClickClose })
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
	    calc.execute();
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmMzg0MWRkMDcxODk5OGJkZGNmYyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iXSwibmFtZXMiOlsiQ2FsY1BpY2tlciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJhbW91bnQiLCJpbml0aWFsQW1vdW50Iiwid2luZG93Iiwib25rZXlkb3duIiwiZSIsImJ1dHRvbnMiLCJmb3JFYWNoIiwicm93IiwiYnRuIiwia2V5RG93biIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwicmVmcyIsImNhbGN1bGF0b3IiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwib25DbGlja0Ftb3VudCIsInNldFN0YXRlIiwib25DbG9zZVBvcnRhbCIsImNoYW5nZVZhbHVlIiwidmFsdWUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJmb3JtYXQiLCJidXR0b24iLCJwb3NpdGlvbnMiLCJjbG9zZUJ1dHRvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiUklHSFRfVE9QIiwiTEVGVF9UT1AiLCJzaGFwZSIsInN0eWxlIiwiZGlzcGxheSIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInJlcXVpcmUiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiYWxsQ2xlYXIiLCJrZXkiLCJiYWNrc3BhY2UiLCJwZXJjZW50IiwiZGl2aXNpb24iLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsIm11bHRpcGxpY2F0aW9uIiwiZm91ciIsImZpdmUiLCJzaXgiLCJtaW51cyIsIm9uZSIsInR3byIsInRocmVlIiwicGx1cyIsInplcm8iLCJkb3VibGVaZXJvIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiZGVjaW1hbCIsImVudGVyIiwiQ2FsY3VsYXRvciIsImFwcGVuZE1vZGUiLCJvcGVyYXRvciIsInVuaXQiLCJ4IiwieSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImJ1dHRvblJlY3QiLCJjcmVhdGVXaXRoRWxlbWVudCIsImNhbGNSZWN0IiwibmV3Q2FsY1JlY3QiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwicG9zS2V5IiwicmVjdCIsImdldFJlbGF0aXZlUmVjdCIsImNvbnRhaW5zIiwiQ0VOVEVSIiwidHJhbnNmb3JtWCIsInRyYW5zZm9ybVkiLCJpbnB1dFRvRGlzcGxheSIsImNhbGMiLCJsZWZ0IiwicmlnaHQiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJjYWxjdWxhdGVkIiwicGFyc2VGbG9hdCIsImZpeCIsImlucHV0T3BlcmF0b3IiLCJidG5Qcm9wcyIsImlucHV0RGVjaW1hbCIsImluZGV4T2YiLCJpbnB1dFBlcmNlbnQiLCJjbGVhciIsImRlbGV0ZSIsIm5ld1N0YXRlIiwidG9TdHJpbmciLCJzdWJzdHIiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ2FsY3VsYXRlZCIsImxvY2FsZURhdGEiLCJ0cmFuc2Zvcm0iLCJvbkNsaWNrQ2xvc2UiLCJtYXAiLCJyb3dLZXkiLCJidG5LZXkiLCJjb21wb25lbnQiLCJlbGVtIiwic2l6ZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRTaXplQ2xhc3MiLCJjbGFzc05hbWVzIiwid2lkdGgiLCJwdXNoIiwiaGVpZ2h0IiwidG9wIiwiZ2V0Q2VudGVyUmVjdCIsImNlbnRlciIsImNsb25lIiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlc3VsdCIsImJvdHRvbSIsImR1bXAiLCJvcmlnaW5Cb3R0b20iLCJvcmlnaW5SaWdodCIsInBvc2l0aW9uIiwiZXhwZWN0ZWRSZWN0IiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImRvY3VtZW50IiwiZG9jRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXZlbnQiLCJlbGVtZW50IiwiZm9jdXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7U0FFUUEsVTtTQUFZQyxJO1NBQU1DLE07Ozs7Ozs7Ozs7OztBQ0oxQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCRixVOzs7QUFFbkIsdUJBQVlHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLHVCQUFRQyxNQUFSLENBQWVELE1BQU1DLE1BQXJCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFnQixLQURMO0FBRVhDLGVBQVFKLE1BQU1LO0FBRkgsTUFBYjs7QUFLQUMsWUFBT0MsU0FBUCxHQUFtQixVQUFD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IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm51bWVyYWxcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJjbGFzcy1uYW1lc1wiLCBcInJlYWN0LXBvcnRhbFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIm51bWVyYWxcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlBvcnRhbFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMzg0MWRkMDcxODk5OGJkZGNmYyIsImltcG9ydCBDYWxjUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9DYWxjUGlja2VyJztcbmltcG9ydCBSZWN0IGZyb20gJy4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2NsYXNzZXMvQWN0aW9uJ1xuXG5leHBvcnQge0NhbGNQaWNrZXIsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudFxuICAgIH1cblxuICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYnRuLmFjdGlvbih0aGlzLnJlZnMuY2FsY3VsYXRvciwgYnRuLCBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLmFtb3VudCAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHthbW91bnQ6IHZhbHVlfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8UG9ydGFsIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljayBpc09wZW5lZD17dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcn0gb25DbG9zZT17KCkgPT4gdGhpcy5vbkNsb3NlUG9ydGFsKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsQW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxjUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbEFtb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICBdKSksXG4gIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdsaWdodCcsICdkYXJrJywgJ3dhcm5pbmcnXSksXG4gICAgICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgXSkucmVxdWlyZSxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5yZXF1aXJlLFxuICAgICAgICBrZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkNhbGNQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBpbml0aWFsQW1vdW50OiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbUmVjdC5SSUdIVF9CT1RUT01dLFxuICBjbG9zZUJ1dHRvbjogJ8OXJyxcbiAgYnV0dG9uczogW1xuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IDxzcGFuPkFDPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uYWxsQ2xlYXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0NsZWFyJ30sXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiA8c3Bhbj7ihpA8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5iYWNrc3BhY2UsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0JhY2tzcGFjZSd9LFxuICAgICAge3N0eWxlOiBcImxpZ2h0XCIsIGRpc3BsYXk6IDxzcGFuPiU8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5wZXJjZW50LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICclJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiA8c3Bhbj7Dtzwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLmRpdmlzaW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcvJ30sXG4gICAgXSxcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj43PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uc2V2ZW4sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzcnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjg8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5laWdodCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+OTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLm5pbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzknfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IDxzcGFuPsOXPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ubXVsdGlwbGljYXRpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyonfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPjQ8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5mb3VyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc0J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj41PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZml2ZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+Njwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLnNpeCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNid9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogPHNwYW4+LTwvc3Bhbj4sIGFjdGlvbjogQWN0aW9uLm1pbnVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICctJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4xPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24ub25lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcxJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4yPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24udHdvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcyJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4zPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24udGhyZWUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzMnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IDxzcGFuPis8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5wbHVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcrJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiA8c3Bhbj4wPC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uemVybywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogPHNwYW4+MDA8L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5kb3VibGVaZXJvLCBrZXlEb3duOiBlID0+IGUua2V5Q29kZSA9PSA0OCAmJiBlLnNoaWZ0S2V5fSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IDxzcGFuPi48L3NwYW4+LCBhY3Rpb246IEFjdGlvbi5kZWNpbWFsLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcuJ30sXG4gICAgICB7c3R5bGU6IFwid2FybmluZ1wiLCBkaXNwbGF5OiA8c3Bhbj49PC9zcGFuPiwgYWN0aW9uOiBBY3Rpb24uZW50ZXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJz0nIHx8IGUua2V5ID09ICdFbnRlcid9LFxuICAgIF1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbEFtb3VudCxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuICB9XG5cbiAgYWRqdXN0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLnJlZnMuY2FsY3VsYXRvcil7XG4gICAgICBjb25zdCB3aW5kb3dSZWN0ID0gUmVjdC5jcmVhdGVXaXRoV2luZG93KClcbiAgICAgIGNvbnN0IGJ1dHRvblJlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucHJvcHMuYnV0dG9uKTtcbiAgICAgIGNvbnN0IGNhbGNSZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnJlZnMuY2FsY3VsYXRvciwgdGhpcy5zdGF0ZS54LCB0aGlzLnN0YXRlLnkpO1xuXG4gICAgICBsZXQgbmV3Q2FsY1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc0tleSA9IHRoaXMucHJvcHMucG9zaXRpb25zW2ldXG4gICAgICAgIGNvbnN0IHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgbmV3Q2FsY1JlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgUmVjdC5DRU5URVIpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICB5OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1ZLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRUb0Rpc3BsYXkobnVtYmVyKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5hbW91bnQ7XG4gICAgbGV0IGNhbGN1bGF0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLmNhbGMocGFyc2VGbG9hdChhbW91bnQsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgYW1vdW50ID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICBpZihjYWxjdWxhdGVkKSB0aGlzLmZpeCgpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIGFtb3VudDogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgICBpZih2YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhdmFsdWUgPyAwIDogdmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCkgdGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQodGhpcy5zdGF0ZS5hbW91bnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvclwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy5zdGF0ZS54fXB4LCAke3RoaXMuc3RhdGUueX1weClgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCIgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrQ2xvc2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3IuZGlzcGxheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1udW1iZXJcIj5cbiAgICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuZGlzcGxheSkuZm9ybWF0KHRoaXMuc3RhdGUuZm9ybWF0KX17dGhpcy5zdGF0ZS51bml0LmRpc3BsYXl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zLm1hcCgocm93LCByb3dLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0tleX0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIHJlZj17ZWxlbSA9PiBidG4uY29tcG9uZW50ID0gZWxlbX0ga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9IGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX0gc3R5bGU9e2J0bi5zdHlsZX0gc2l6ZT17YnRuLnNpemV9IGRpc3BsYXk9e2J0bi5kaXNwbGF5fSBvbkNsaWNrPXtlID0+IGJ0bi5hY3Rpb24odGhpcywgYnRuLCBlKX0gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZUNsYXNzKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2l6ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS53aWR0aCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS53aWR0aCArICd3JylcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNpemUuaGVpZ2h0KXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLmhlaWdodCArICdoJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImVsZW1lbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvblwiLFxuICAgICAgICAgIHRoaXMucHJvcHMuc3R5bGUgPyBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zdHlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5fVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFxue1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkge1xuICAgIHRoaXMudG9wID0gdG9wXG4gICAgdGhpcy5sZWZ0ID0gbGVmdFxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdHJhbnNmb3JtWFxuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRyYW5zZm9ybVlcbiAgfVxuXG4gIGdldCBib3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCByaWdodCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG9yaWdpblRvcCgpe1xuICAgIHJldHVybiB0aGlzLnRvcCAtIHRoaXMudHJhbnNmb3JtWTtcbiAgfVxuXG4gIGdldCBvcmlnaW5MZWZ0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCAtIHRoaXMudHJhbnNmb3JtWDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Cb3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5Ub3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBvcmlnaW5SaWdodCgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0Q2VudGVyUmVjdCh3aWR0aCwgaGVpZ2h0KXtcbiAgICBjb25zdCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLmxlZnQgKyAodGhpcy53aWR0aCAvIDIpLFxuICAgICAgeTogdGhpcy50b3AgKyAodGhpcy5oZWlnaHQgLyAyKSxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICBjZW50ZXIueSAtIChoZWlnaHQgLyAyKSxcbiAgICAgIGNlbnRlci54IC0gKHdpZHRoIC8gMiksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgdGhpcy50b3AsXG4gICAgICB0aGlzLmxlZnQsXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0aGlzLnRyYW5zZm9ybVlcbiAgICApXG4gIH1cblxuICB0cmFuc2Zvcm0oeCwgeSl7XG4gICAgdGhpcy50b3AgPSB0aGlzLm9yaWdpblRvcCArIHk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5vcmlnaW5MZWZ0ICsgeDtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB4O1xuICAgIHRoaXMudHJhbnNmb3JtWSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250YWlucyhyZWN0KXtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxlZnQgPD0gcmVjdC5sZWZ0XG4gICAgICAmJlxuICAgICAgdGhpcy5yaWdodCA+PSByZWN0LnJpZ2h0XG4gICAgICAmJlxuICAgICAgdGhpcy50b3AgPD0gcmVjdC50b3BcbiAgICAgICYmXG4gICAgICB0aGlzLmJvdHRvbSA+PSByZWN0LmJvdHRvbTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBkdW1wKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBvcmlnaW5Ub3A6IHRoaXMub3JpZ2luVG9wLFxuICAgICAgb3JpZ2luTGVmdDogdGhpcy5vcmlnaW5MZWZ0LFxuICAgICAgb3JpZ2luQm90dG9tOiB0aGlzLm9yaWdpbkJvdHRvbSxcbiAgICAgIG9yaWdpblJpZ2h0OiB0aGlzLm9yaWdpblJpZ2h0LFxuICAgICAgdHJhbnNmb3JtWDogdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdHJhbnNmb3JtWTogdGhpcy50cmFuc2Zvcm1ZLFxuICAgIH1cbiAgfVxuXG4gIGdldFJlbGF0aXZlUmVjdChyZWN0LCBwb3NpdGlvbil7XG4gICAgc3dpdGNoKHBvc2l0aW9uKXtcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LlJJR0hUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkNFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdDRU5URVInLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkNFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5leGVjdXRlKClcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==