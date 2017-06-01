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
	      value: props.initialValue
	    };
	
	    window.addEventListener('keydown', function (e) {
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
	    });
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
	        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this2.onClosePortal();
	          } },
	        _react2.default.createElement(_Calculator2.default, {
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
	          zIndex: this.props.zIndex
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
	    action: _propTypes2.default.func.isRequired,
	    keyDown: _propTypes2.default.func,
	    closeOnAction: _propTypes2.default.bool
	  }))),
	  className: _propTypes2.default.string,
	  closeButton: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  locale: _propTypes2.default.string,
	  onChange: _propTypes2.default.func.isRequired,
	  closeOnEnterAction: _propTypes2.default.bool,
	  zIndex: _propTypes2.default.number
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
	      display: props.initialValue,
	      amount: props.initialValue,
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
	
	  Calculator.prototype.render = function render() {
	    var _this3 = this;
	
	    var locale = _numeral2.default.localeData();
	    var style = { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' };
	    if (this.props.zIndex !== undefined) {
	      style['zIndex'] = this.props.zIndex;
	    }
	    return _react2.default.createElement(
	      'div',
	      { ref: 'calculator', className: 'react-calcpicker__calculator', style: style },
	      _react2.default.createElement(
	        'div',
	        { className: 'react-calcpicker__calculator-header' },
	        _react2.default.createElement(_Button2.default, { className: 'react-calcpicker__calculator-button-close', display: this.props.closeButton, onClick: function onClick() {
	            return _this3.close();
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
	                return btn.action(_this3, btn, e);
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
	      calc.fix();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzYzk4ZDAzZTZkMGNhZjNiNjcwMSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwibmFtZXMiOlsiQ2FsY1BpY2tlciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJvbkNsaWNrQW1vdW50Iiwic2V0U3RhdGUiLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkVudGVyQWN0aW9uIiwiekluZGV4IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9uZU9mIiwiUklHSFRfQk9UVE9NIiwiTEVGVF9CT1RUT00iLCJSSUdIVF9UT1AiLCJMRUZUX1RPUCIsIldJTkRPV19DRU5URVIiLCJzaGFwZSIsInN0eWxlIiwiZGlzcGxheSIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInJlcXVpcmUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImNsb3NlT25BY3Rpb24iLCJib29sIiwiZGVmYXVsdFByb3BzIiwiYWxsQ2xlYXIiLCJrZXkiLCJiYWNrc3BhY2UiLCJwZXJjZW50IiwiZGl2aXNpb24iLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsIm11bHRpcGxpY2F0aW9uIiwiZm91ciIsImZpdmUiLCJzaXgiLCJtaW51cyIsIm9uZSIsInR3byIsInRocmVlIiwicGx1cyIsInplcm8iLCJkb3VibGVaZXJvIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiZGVjaW1hbCIsImVudGVyIiwiQ2FsY3VsYXRvciIsImFtb3VudCIsImFwcGVuZE1vZGUiLCJvcGVyYXRvciIsInVuaXQiLCJ4IiwieSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImJ1dHRvblJlY3QiLCJjcmVhdGVXaXRoRWxlbWVudCIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwicHVzaCIsImNvbnRhaW5zIiwic29ydCIsImEiLCJiIiwiZ2V0T3ZlcmxhcHBpbmdSZWN0IiwiYXJlYSIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiaW5wdXRUb0Rpc3BsYXkiLCJjYWxjIiwibGVmdCIsInJpZ2h0IiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiY2FsY3VsYXRlZCIsInBhcnNlRmxvYXQiLCJpbnB1dE9wZXJhdG9yIiwiYnRuUHJvcHMiLCJpbnB1dERlY2ltYWwiLCJpbmRleE9mIiwiaW5wdXRQZXJjZW50IiwiY2xlYXIiLCJkZWxldGUiLCJuZXdTdGF0ZSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY29tcG9uZW50RGlkTW91bnQiLCJmaXgiLCJvbkNhbGN1bGF0ZWQiLCJjbG9zZSIsIm9uQ2xpY2tDbG9zZSIsImxvY2FsZURhdGEiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJyb3dLZXkiLCJidG5LZXkiLCJjb21wb25lbnQiLCJlbGVtIiwic2l6ZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRTaXplQ2xhc3MiLCJjbGFzc05hbWVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJnZXRDZW50ZXJSZWN0IiwiY2VudGVyIiwiY2xvbmUiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVzdWx0IiwiYm90dG9tIiwiZHVtcCIsIm9yaWdpbkJvdHRvbSIsIm9yaWdpblJpZ2h0IiwicG9zaXRpb24iLCJleHBlY3RlZFJlY3QiLCJNYXRoIiwibWF4IiwibWluIiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImRvY3VtZW50IiwiZG9jRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXZlbnQiLCJlbGVtZW50IiwiZm9jdXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7U0FFUUEsVTtTQUFZQyxJO1NBQU1DLE07Ozs7Ozs7Ozs7OztBQ0oxQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCRixVOzs7QUFFbkIsdUJBQVlHLEtBQVosRUFBbUI7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LE9BQXhCLENBQWdDQyxLQUFoQztBQUNBekUsVUFBS3ZELFFBQUw7QUFDRCxJQWpGYTtBQWtGZG1FLFVBQU8sZUFBU1osSUFBVCxFQUFlUSxRQUFmLEVBQXlCK0QsS0FBekIsRUFBK0I7QUFDcEMvRCxjQUFTbUIsU0FBVCxDQUFtQnpILElBQW5CLENBQXdCc0ssT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0F6RSxVQUFLWSxLQUFMO0FBQ0QsSUFyRmE7QUFzRmRqRSxjQUFXLG1CQUFTcUQsSUFBVCxFQUFlUSxRQUFmLEVBQXlCK0QsS0FBekIsRUFBK0I7QUFDeEMvRCxjQUFTbUIsU0FBVCxDQUFtQnpILElBQW5CLENBQXdCc0ssT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0F6RSxVQUFLYSxNQUFMO0FBQ0Q7QUF6RmEsRUFBaEI7O21CQTRGZTVILE0iLCJmaWxlIjoicmVhY3QtY2FsY3BpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm51bWVyYWxcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJjbGFzcy1uYW1lc1wiLCBcInJlYWN0LXBvcnRhbFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIm51bWVyYWxcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlBvcnRhbFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYzk4ZDAzZTZkMGNhZjNiNjcwMSIsImltcG9ydCBDYWxjUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9DYWxjUGlja2VyJztcbmltcG9ydCBSZWN0IGZyb20gJy4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2NsYXNzZXMvQWN0aW9uJ1xuXG5leHBvcnQge0NhbGNQaWNrZXIsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25zLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgaWYoYnRuLmtleURvd24gJiYgYnRuLmtleURvd24oZSkpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBidG4uYWN0aW9uKHRoaXMucmVmcy5jYWxjdWxhdG9yLCBidG4sIGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLnZhbHVlICE9IHZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0pXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJcIj5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrQW1vdW50KGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLnZhbHVlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2sgaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfT5cbiAgICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgICAgcmVmPSdjYWxjdWxhdG9yJ1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgICBvbkNhbGN1bGF0ZWQ9e3ZhbHVlID0+IHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgY2xvc2VCdXR0b249e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICBjbG9zZU9uRW50ZXJBY3Rpb249e3RoaXMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9ufVxuICAgICAgICAgICAgekluZGV4PXt0aGlzLnByb3BzLnpJbmRleH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsb3NlT25BY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgfSlcbiAgICApXG4gICksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIkFDXCIsIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCLihpBcIiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiBcIiVcIiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDt1wiLCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI3XCIsIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjhcIiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOVwiLCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsOXXCIsIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjRcIiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI1XCIsIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNlwiLCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiLVwiLCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIxXCIsIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIyXCIsIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIzXCIsIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIitcIiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwXCIsIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMDBcIiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIi5cIiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogXCI9XCIsIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGFkanVzdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgY29uc3Qgd2luZG93UmVjdCA9IFJlY3QuY3JlYXRlV2l0aFdpbmRvdygpXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5yZWZzLmNhbGN1bGF0b3IsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcblxuICAgICAgY29uc3QgcmVjdHMgPSBbXVxuICAgICAgbGV0IG5ld0NhbGNSZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NLZXkgPSB0aGlzLnByb3BzLnBvc2l0aW9uc1tpXVxuICAgICAgICBsZXQgcmVjdDtcbiAgICAgICAgaWYocG9zS2V5ID09IFJlY3QuV0lORE9XX0NFTlRFUil7XG4gICAgICAgICAgcmVjdCA9IHdpbmRvd1JlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVjdCA9IGJ1dHRvblJlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIH1cblxuICAgICAgICByZWN0cy5wdXNoKHJlY3QpXG4gICAgICAgIGlmKHdpbmRvd1JlY3QuY29udGFpbnMocmVjdCkpe1xuICAgICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbmV3Q2FsY1JlY3Qpe1xuICAgICAgICByZWN0cy5zb3J0KChhLCBiKSA9PiB3aW5kb3dSZWN0LmdldE92ZXJsYXBwaW5nUmVjdChiKS5hcmVhIC0gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYSkuYXJlYSlcbiAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0c1swXVxuICAgICAgfVxuXG4gICAgICBpZihuZXdDYWxjUmVjdCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHg6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVgsXG4gICAgICAgICAgeTogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRUb0Rpc3BsYXkobnVtYmVyKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5hbW91bnQ7XG4gICAgbGV0IGNhbGN1bGF0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLmNhbGMocGFyc2VGbG9hdChhbW91bnQsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgYW1vdW50ID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIGFtb3VudDogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgICBpZih2YWx1ZSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhdmFsdWUgPyAwIDogdmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCkgdGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQodGhpcy5zdGF0ZS5hbW91bnQpXG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0Nsb3NlKClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxvY2FsZSA9IG51bWVyYWwubG9jYWxlRGF0YSgpO1xuICAgIGNvbnN0IHN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH1cbiAgICBpZih0aGlzLnByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0eWxlWyd6SW5kZXgnXSA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvclwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCIgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZSgpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19IGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fSBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9IHN0eWxlPXtidG4uc3R5bGV9IHNpemU9e2J0bi5zaXplfSBkaXNwbGF5PXtidG4uZGlzcGxheX0gb25DbGljaz17ZSA9PiBidG4uYWN0aW9uKHRoaXMsIGJ0biwgZSl9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFNpemVDbGFzcygpe1xuICAgIGlmKCF0aGlzLnByb3BzLnNpemUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICBpZih0aGlzLnByb3BzLnNpemUud2lkdGgpe1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnNpemUud2lkdGggKyAndycpXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5zaXplLmhlaWdodCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgKyAnaCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBhcmVhKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5XSU5ET1dfQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cblxuICBnZXRPdmVybGFwcGluZ1JlY3QocmVjdCl7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIHJlY3QudG9wKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0aGlzLmxlZnQsIHJlY3QubGVmdClcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKHRoaXMucmlnaHQsIHJlY3QucmlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRoaXMuYm90dG9tLCByZWN0LmJvdHRvbSk7XG5cbiAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICBpZiAod2lkdGggPiAwICYmIGhlaWdodCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdXSU5ET1dfQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJXSU5ET1dfQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUG9ydGFsXCIsXCJjb21tb25qczJcIjpcInJlYWN0LXBvcnRhbFwiLFwiY29tbW9uanNcIjpcInJlYWN0LXBvcnRhbFwiLFwiYW1kXCI6XCJyZWFjdC1wb3J0YWxcIn1cbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGNhbGMuZml4KClcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9