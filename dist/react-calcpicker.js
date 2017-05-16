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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxYTAxODI0NmE3Yjc4MDNjZDFiMCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwibmFtZXMiOlsiQ2FsY1BpY2tlciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJhbW91bnQiLCJpbml0aWFsQW1vdW50Iiwid2luZG93Iiwib25rZXlkb3duIiwiZSIsImJ1dHRvbnMiLCJmb3JFYWNoIiwicm93IiwiYnRuIiwia2V5RG93biIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwicmVmcyIsImNhbGN1bGF0b3IiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwib25DbGlja0Ftb3VudCIsInNldFN0YXRlIiwib25DbG9zZVBvcnRhbCIsImNoYW5nZVZhbHVlIiwidmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkVudGVyQWN0aW9uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9uZU9mIiwiUklHSFRfQk9UVE9NIiwiTEVGVF9CT1RUT00iLCJSSUdIVF9UT1AiLCJMRUZUX1RPUCIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiY2xvc2VPbkFjdGlvbiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJhbGxDbGVhciIsImtleSIsImJhY2tzcGFjZSIsInBlcmNlbnQiLCJkaXZpc2lvbiIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbGljYXRpb24iLCJmb3VyIiwiZml2ZSIsInNpeCIsIm1pbnVzIiwib25lIiwidHdvIiwidGhyZWUiLCJwbHVzIiwiemVybyIsImRvdWJsZVplcm8iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJkZWNpbWFsIiwiZW50ZXIiLCJDYWxjdWxhdG9yIiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsIngiLCJ5Iiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndpbmRvd1JlY3QiLCJjcmVhdGVXaXRoV2luZG93IiwiYnV0dG9uUmVjdCIsImNyZWF0ZVdpdGhFbGVtZW50IiwiY2FsY1JlY3QiLCJuZXdDYWxjUmVjdCIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwiY29udGFpbnMiLCJDRU5URVIiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImlucHV0VG9EaXNwbGF5IiwiY2FsYyIsImxlZnQiLCJyaWdodCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiZml4IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiZGVsZXRlIiwibmV3U3RhdGUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImNvbXBvbmVudERpZE1vdW50Iiwib25DYWxjdWxhdGVkIiwiY2xvc2UiLCJvbkNsaWNrQ2xvc2UiLCJsb2NhbGVEYXRhIiwidHJhbnNmb3JtIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50IiwiZWxlbSIsInNpemUiLCJCdXR0b24iLCJvbkNsaWNrIiwiZ2V0U2l6ZUNsYXNzIiwiY2xhc3NOYW1lcyIsIndpZHRoIiwicHVzaCIsImhlaWdodCIsInRvcCIsImdldENlbnRlclJlY3QiLCJjZW50ZXIiLCJjbG9uZSIsIm9yaWdpblRvcCIsIm9yaWdpbkxlZnQiLCJyZXN1bHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsImV4cGVjdGVkUmVjdCIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImV2ZW50IiwiZWxlbWVudCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1NBRVFBLFU7U0FBWUMsSTtTQUFNQyxNOzs7Ozs7Ozs7Ozs7QUNKMUI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkYsVTs7O0FBRW5CLHVCQUFZRyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0RBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUVqQix1QkFBUUMsTUFBUixDQUFlRCxNQUFNQyxNQUFyQjtBQUNBLFdBQUtDLEtBQUwsR0FB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a2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcIm51bWVyYWwvbG9jYWxlc1wiLCBcImNsYXNzLW5hbWVzXCIsIFwicmVhY3QtcG9ydGFsXCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wibnVtZXJhbFwiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJjbGFzc05hbWVzXCJdLCByb290W1wiUG9ydGFsXCJdLCByb290W1wiUHJvcFR5cGVzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFhMDE4MjQ2YTdiNzgwM2NkMWIwIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JlYWN0LXBvcnRhbCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4uL2NsYXNzZXMvQWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50XG4gICAgfVxuXG4gICAgd2luZG93Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25zLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgaWYoYnRuLmtleURvd24gJiYgYnRuLmtleURvd24oZSkpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBidG4uYWN0aW9uKHRoaXMucmVmcy5jYWxjdWxhdG9yLCBidG4sIGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tBbW91bnQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZVBvcnRhbCgpe1xuICAgIC8vU2V0IHRoZSBvcGVuQ2FsY3VsYXRvciB0byBmYWxzZSB3aGVuIGNsaWNraW5nIHRoZSBvdmVybGF5IG9yIGNsb3Npbmcgd2l0aCB0aGUgRVNDIGtleS5cbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09IHRydWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpe1xuICAgIGlmKHRoaXMuc3RhdGUuYW1vdW50ICE9IHZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Ftb3VudDogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8UG9ydGFsIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljayBpc09wZW5lZD17dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcn0gb25DbG9zZT17KCkgPT4gdGhpcy5vbkNsb3NlUG9ydGFsKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsQW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgY2xvc2VPbkVudGVyQWN0aW9uPXt0aGlzLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxBbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9zaXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsb3NlT25BY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgfSlcbiAgICApXG4gICksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG59XG5cbkNhbGNQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBpbml0aWFsQW1vdW50OiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbUmVjdC5SSUdIVF9CT1RUT01dLFxuICBjbG9zZUJ1dHRvbjogJ8OXJyxcbiAgYnV0dG9uczogW1xuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwiQUNcIiwgYWN0aW9uOiBBY3Rpb24uYWxsQ2xlYXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0NsZWFyJ30sXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIuKGkFwiLCBhY3Rpb246IEFjdGlvbi5iYWNrc3BhY2UsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0JhY2tzcGFjZSd9LFxuICAgICAge3N0eWxlOiBcImxpZ2h0XCIsIGRpc3BsYXk6IFwiJVwiLCBhY3Rpb246IEFjdGlvbi5wZXJjZW50LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICclJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsO3XCIsIGFjdGlvbjogQWN0aW9uLmRpdmlzaW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcvJ30sXG4gICAgXSxcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjdcIiwgYWN0aW9uOiBBY3Rpb24uc2V2ZW4sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzcnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOFwiLCBhY3Rpb246IEFjdGlvbi5laWdodCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI5XCIsIGFjdGlvbjogQWN0aW9uLm5pbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzknfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw5dcIiwgYWN0aW9uOiBBY3Rpb24ubXVsdGlwbGljYXRpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyonfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNFwiLCBhY3Rpb246IEFjdGlvbi5mb3VyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc0J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjVcIiwgYWN0aW9uOiBBY3Rpb24uZml2ZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI2XCIsIGFjdGlvbjogQWN0aW9uLnNpeCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNid9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCItXCIsIGFjdGlvbjogQWN0aW9uLm1pbnVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICctJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjFcIiwgYWN0aW9uOiBBY3Rpb24ub25lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcxJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjJcIiwgYWN0aW9uOiBBY3Rpb24udHdvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcyJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjNcIiwgYWN0aW9uOiBBY3Rpb24udGhyZWUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzMnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiK1wiLCBhY3Rpb246IEFjdGlvbi5wbHVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcrJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjBcIiwgYWN0aW9uOiBBY3Rpb24uemVybywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwMFwiLCBhY3Rpb246IEFjdGlvbi5kb3VibGVaZXJvLCBrZXlEb3duOiBlID0+IGUua2V5Q29kZSA9PSA0OCAmJiBlLnNoaWZ0S2V5fSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiLlwiLCBhY3Rpb246IEFjdGlvbi5kZWNpbWFsLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcuJ30sXG4gICAgICB7c3R5bGU6IFwid2FybmluZ1wiLCBkaXNwbGF5OiBcIj1cIiwgYWN0aW9uOiBBY3Rpb24uZW50ZXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJz0nIHx8IGUua2V5ID09ICdFbnRlcid9LFxuICAgIF1cbiAgXSxcbiAgY2xvc2VPbkVudGVyQWN0aW9uOiB0cnVlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgY29uc3QgcmVjdCA9IGJ1dHRvblJlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIGlmKHdpbmRvd1JlY3QuY29udGFpbnMocmVjdCkpe1xuICAgICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbmV3Q2FsY1JlY3Qpe1xuICAgICAgICBuZXdDYWxjUmVjdCA9IHdpbmRvd1JlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBSZWN0LkNFTlRFUilcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHg6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVgsXG4gICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbnB1dFRvRGlzcGxheShudW1iZXIpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5ICsgbnVtYmVyLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2FsYyhsZWZ0LCBvcGVyYXRvciwgcmlnaHQpe1xuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgKyByaWdodDtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgLSByaWdodDtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0ludmFsaWQgb3BlcmF0b3IgJyArIG9wZXJhdG9yICsgJyBzcGVjaWZpZWQuJztcbiAgICB9XG4gIH1cblxuICBleGVjdXRlKGNhbGxiYWNrID0gKCkgPT4ge30pe1xuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5O1xuICAgIGxldCBhbW91bnQgPSB0aGlzLnN0YXRlLmFtb3VudDtcbiAgICBsZXQgY2FsY3VsYXRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgZGlzcGxheSA9IHRoaXMuY2FsYyhwYXJzZUZsb2F0KGFtb3VudCwgMTApLCB0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlLCBwYXJzZUZsb2F0KGRpc3BsYXksIDEwKSk7XG4gICAgICBjYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbW91bnQgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIGlmKGNhbGN1bGF0ZWQpIHRoaXMuZml4KClcbiAgICB9KVxuICB9XG5cbiAgaW5wdXRPcGVyYXRvcihvcGVyYXRvciwgYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RGVjaW1hbCgpe1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheS5pbmRleE9mKCcuJykgPT09IC0xKXtcbiAgICAgIHRoaXMuaW5wdXRUb0Rpc3BsYXkoJy4nKVxuICAgIH1cbiAgfVxuXG4gIGlucHV0UGVyY2VudChidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1bml0OiB7XG4gICAgICAgIHZhbHVlOiclJyxcbiAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheVxuICAgICAgfX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSAvIDEwMH0pXG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgIHVuaXQ6IHt9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhbGxDbGVhcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgYW1vdW50OiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKHZhbHVlID09PSAnMCcpe1xuICAgICAgICBuZXdTdGF0ZVsndW5pdCddID0ge31cbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgbmV3U3RhdGVbJ2Rpc3BsYXknXSA9ICF2YWx1ZSA/IDAgOiB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMucHJvcHMub25DYWxjdWxhdGVkKSB0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCh0aGlzLnN0YXRlLmFtb3VudClcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrQ2xvc2UoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVEYXRhKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259IG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24gcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfSBrZXk9e3Jvd0tleSArICctJyArIGJ0bktleX0gY2xhc3NOYW1lPXtidG4uY2xhc3NOYW1lfSBzdHlsZT17YnRuLnN0eWxlfSBzaXplPXtidG4uc2l6ZX0gZGlzcGxheT17YnRuLmRpc3BsYXl9IG9uQ2xpY2s9e2UgPT4gYnRuLmFjdGlvbih0aGlzLCBidG4sIGUpfSAvPlxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRTaXplQ2xhc3MoKXtcbiAgICBpZighdGhpcy5wcm9wcy5zaXplKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG4gICAgaWYodGhpcy5wcm9wcy5zaXplLndpZHRoKXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLndpZHRoICsgJ3cnKVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQpe1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICsgJ2gnKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPVwiZWxlbWVudFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMuZ2V0U2l6ZUNsYXNzKCksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cbn1cblxuUmVjdC5jcmVhdGVXaXRoRWxlbWVudCA9IChlbGVtLCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApID0+IHtcbiAgaWYoIWVsZW0pe1xuICAgIHJldHVybiBuZXcgUmVjdCgwLDAsMCwwKVxuICB9XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIGJvdW5kaW5nUmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgYm91bmRpbmdSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICB0cmFuc2Zvcm1YLFxuICAgIHRyYW5zZm9ybVlcbiAgKVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhXaW5kb3cgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVjdChcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gIClcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUG9ydGFsXCIsXCJjb21tb25qczJcIjpcInJlYWN0LXBvcnRhbFwiLFwiY29tbW9uanNcIjpcInJlYWN0LXBvcnRhbFwiLFwiYW1kXCI6XCJyZWFjdC1wb3J0YWxcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9