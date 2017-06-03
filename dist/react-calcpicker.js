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
	  zIndex: _propTypes2.default.number,
	  title: _propTypes2.default.string
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
	        _react2.default.createElement(
	          'div',
	          { className: 'react-calcpicker__calculator-header-title' },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'react-calcpicker__calculator-header-button' },
	          _react2.default.createElement(_Button2.default, { className: 'react-calcpicker__calculator-button-close', display: this.props.closeButton, onClick: function onClick() {
	              return _this3.close();
	            } })
	        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MWRlOTcwZTQ1NTU3MGI1MGQ2MSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwibmFtZXMiOlsiQ2FsY1BpY2tlciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJvbkNsaWNrQW1vdW50Iiwic2V0U3RhdGUiLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsInRpdGxlIiwiYnV0dG9uIiwicG9zaXRpb25zIiwiY2xvc2VCdXR0b24iLCJjbG9zZU9uRW50ZXJBY3Rpb24iLCJ6SW5kZXgiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJhcnJheU9mIiwib25lT2YiLCJSSUdIVF9CT1RUT00iLCJMRUZUX0JPVFRPTSIsIlJJR0hUX1RPUCIsIkxFRlRfVE9QIiwiV0lORE9XX0NFTlRFUiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiY2xvc2VPbkFjdGlvbiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJhbGxDbGVhciIsImtleSIsImJhY2tzcGFjZSIsInBlcmNlbnQiLCJkaXZpc2lvbiIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbGljYXRpb24iLCJmb3VyIiwiZml2ZSIsInNpeCIsIm1pbnVzIiwib25lIiwidHdvIiwidGhyZWUiLCJwbHVzIiwiemVybyIsImRvdWJsZVplcm8iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJkZWNpbWFsIiwiZW50ZXIiLCJDYWxjdWxhdG9yIiwiYW1vdW50IiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsIngiLCJ5Iiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndpbmRvd1JlY3QiLCJjcmVhdGVXaXRoV2luZG93IiwiYnV0dG9uUmVjdCIsImNyZWF0ZVdpdGhFbGVtZW50IiwiY2FsY1JlY3QiLCJyZWN0cyIsIm5ld0NhbGNSZWN0IiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsInBvc0tleSIsInJlY3QiLCJnZXRSZWxhdGl2ZVJlY3QiLCJwdXNoIiwiY29udGFpbnMiLCJzb3J0IiwiYSIsImIiLCJnZXRPdmVybGFwcGluZ1JlY3QiLCJhcmVhIiwidHJhbnNmb3JtWCIsInRyYW5zZm9ybVkiLCJpbnB1dFRvRGlzcGxheSIsImNhbGMiLCJsZWZ0IiwicmlnaHQiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJjYWxjdWxhdGVkIiwicGFyc2VGbG9hdCIsImlucHV0T3BlcmF0b3IiLCJidG5Qcm9wcyIsImlucHV0RGVjaW1hbCIsImluZGV4T2YiLCJpbnB1dFBlcmNlbnQiLCJjbGVhciIsImRlbGV0ZSIsIm5ld1N0YXRlIiwidG9TdHJpbmciLCJzdWJzdHIiLCJjb21wb25lbnREaWRNb3VudCIsImZpeCIsIm9uQ2FsY3VsYXRlZCIsImNsb3NlIiwib25DbGlja0Nsb3NlIiwibG9jYWxlRGF0YSIsInRyYW5zZm9ybSIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsImVsZW0iLCJzaXplIiwiQnV0dG9uIiwib25DbGljayIsImdldFNpemVDbGFzcyIsImNsYXNzTmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImdldENlbnRlclJlY3QiLCJjZW50ZXIiLCJjbG9uZSIsIm9yaWdpblRvcCIsIm9yaWdpbkxlZnQiLCJyZXN1bHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsImV4cGVjdGVkUmVjdCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJldmVudCIsImVsZW1lbnQiLCJmb2N1cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztTQUVRQSxVO1NBQVlDLEk7U0FBTUMsTTs7Ozs7Ozs7Ozs7O0FDSjFCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJGLFU7OztBQUVuQix1QkFBWUcsS0FB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Sy9HLEtBQUwsQ0FBV2dDLGtCQUFkLEVBQWlDO0FBQy9CK0UsY0FBS29CLEtBQUw7QUFDRDtBQUNGLE1BTEQ7QUFNRCxJQTdFYTtBQThFZDNFLGFBQVUsa0JBQVN1RCxJQUFULEVBQWVRLFFBQWYsRUFBeUIrRCxLQUF6QixFQUErQjtBQUN2Qy9ELGNBQVNtQixTQUFULENBQW1CMUgsSUFBbkIsQ0FBd0J1SyxPQUF4QixDQUFnQ0MsS0FBaEM7QUFDQXpFLFVBQUt2RCxRQUFMO0FBQ0QsSUFqRmE7QUFrRmRtRSxVQUFPLGVBQVNaLElBQVQsRUFBZVEsUUFBZixFQUF5QitELEtBQXpCLEVBQStCO0FBQ3BDL0QsY0FBU21CLFNBQVQsQ0FBbUIxSCxJQUFuQixDQUF3QnVLLE9BQXhCLENBQWdDQyxLQUFoQztBQUNBekUsVUFBS1ksS0FBTDtBQUNELElBckZhO0FBc0ZkakUsY0FBVyxtQkFBU3FELElBQVQsRUFBZVEsUUFBZixFQUF5QitELEtBQXpCLEVBQStCO0FBQ3hDL0QsY0FBU21CLFNBQVQsQ0FBbUIxSCxJQUFuQixDQUF3QnVLLE9BQXhCLENBQWdDQyxLQUFoQztBQUNBekUsVUFBS2EsTUFBTDtBQUNEO0FBekZhLEVBQWhCOzttQkE0RmU3SCxNIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJyZWFjdC1wb3J0YWxcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wibG9jYWxlc1wiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTFkZTk3MGU0NTU1NzBiNTBkNjEiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGNQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbnVtZXJhbC5sb2NhbGUocHJvcHMubG9jYWxlKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuQ2FsY3VsYXRvcjogZmFsc2UsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYnRuLmFjdGlvbih0aGlzLnJlZnMuY2FsY3VsYXRvciwgYnRuLCBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBuZXh0UHJvcHMubG9jYWxlKXtcbiAgICAgIG51bWVyYWwubG9jYWxlKG5leHRQcm9wcy5sb2NhbGUpXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0Ftb3VudChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IHRydWV9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlUG9ydGFsKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS52YWx1ZSkuZm9ybWF0KHRoaXMucHJvcHMuZm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrIGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VQb3J0YWwoKX0+XG4gICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgcmVmPSdjYWxjdWxhdG9yJ1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgICBvbkNhbGN1bGF0ZWQ9e3ZhbHVlID0+IHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgY2xvc2VCdXR0b249e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICBjbG9zZU9uRW50ZXJBY3Rpb249e3RoaXMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9ufVxuICAgICAgICAgICAgekluZGV4PXt0aGlzLnByb3BzLnpJbmRleH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGNsb3NlT25BY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICAgICAgfSlcbiAgICApXG4gICksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJsb2NhbGVzXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiY29tbW9uanNcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiYW1kXCI6XCJudW1lcmFsL2xvY2FsZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50O1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQoYW1vdW50LCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFtb3VudCA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICBhbW91bnQ6ICcwJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgdW5pdDoge30sXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSgpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYodmFsdWUgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIXZhbHVlID8gMCA6IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUuYW1vdW50KVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci1idXR0b25cIj5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tY2xvc2VcIiBkaXNwbGF5PXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlKCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3IuZGlzcGxheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1udW1iZXJcIj5cbiAgICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuZGlzcGxheSkuZm9ybWF0KHRoaXMuc3RhdGUuZm9ybWF0KX17dGhpcy5zdGF0ZS51bml0LmRpc3BsYXl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zLm1hcCgocm93LCByb3dLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0tleX0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIHJlZj17ZWxlbSA9PiBidG4uY29tcG9uZW50ID0gZWxlbX0ga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9IGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX0gc3R5bGU9e2J0bi5zdHlsZX0gc2l6ZT17YnRuLnNpemV9IGRpc3BsYXk9e2J0bi5kaXNwbGF5fSBvbkNsaWNrPXtlID0+IGJ0bi5hY3Rpb24odGhpcywgYnRuLCBlKX0gLz5cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U2l6ZUNsYXNzKCl7XG4gICAgaWYoIXRoaXMucHJvcHMuc2l6ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmKHRoaXMucHJvcHMuc2l6ZS53aWR0aCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS53aWR0aCArICd3JylcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNpemUuaGVpZ2h0KXtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zaXplLmhlaWdodCArICdoJylcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImVsZW1lbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvblwiLFxuICAgICAgICAgIHRoaXMucHJvcHMuc3R5bGUgPyBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zdHlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aGlzLmdldFNpemVDbGFzcygpLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5fVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFxue1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkge1xuICAgIHRoaXMudG9wID0gdG9wXG4gICAgdGhpcy5sZWZ0ID0gbGVmdFxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdHJhbnNmb3JtWFxuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRyYW5zZm9ybVlcbiAgfVxuXG4gIGdldCBib3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCByaWdodCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG9yaWdpblRvcCgpe1xuICAgIHJldHVybiB0aGlzLnRvcCAtIHRoaXMudHJhbnNmb3JtWTtcbiAgfVxuXG4gIGdldCBvcmlnaW5MZWZ0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCAtIHRoaXMudHJhbnNmb3JtWDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Cb3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5Ub3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBvcmlnaW5SaWdodCgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IGFyZWEoKXtcbiAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0Q2VudGVyUmVjdCh3aWR0aCwgaGVpZ2h0KXtcbiAgICBjb25zdCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLmxlZnQgKyAodGhpcy53aWR0aCAvIDIpLFxuICAgICAgeTogdGhpcy50b3AgKyAodGhpcy5oZWlnaHQgLyAyKSxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICBjZW50ZXIueSAtIChoZWlnaHQgLyAyKSxcbiAgICAgIGNlbnRlci54IC0gKHdpZHRoIC8gMiksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgdGhpcy50b3AsXG4gICAgICB0aGlzLmxlZnQsXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0aGlzLnRyYW5zZm9ybVlcbiAgICApXG4gIH1cblxuICB0cmFuc2Zvcm0oeCwgeSl7XG4gICAgdGhpcy50b3AgPSB0aGlzLm9yaWdpblRvcCArIHk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5vcmlnaW5MZWZ0ICsgeDtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB4O1xuICAgIHRoaXMudHJhbnNmb3JtWSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250YWlucyhyZWN0KXtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxlZnQgPD0gcmVjdC5sZWZ0XG4gICAgICAmJlxuICAgICAgdGhpcy5yaWdodCA+PSByZWN0LnJpZ2h0XG4gICAgICAmJlxuICAgICAgdGhpcy50b3AgPD0gcmVjdC50b3BcbiAgICAgICYmXG4gICAgICB0aGlzLmJvdHRvbSA+PSByZWN0LmJvdHRvbTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBkdW1wKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBvcmlnaW5Ub3A6IHRoaXMub3JpZ2luVG9wLFxuICAgICAgb3JpZ2luTGVmdDogdGhpcy5vcmlnaW5MZWZ0LFxuICAgICAgb3JpZ2luQm90dG9tOiB0aGlzLm9yaWdpbkJvdHRvbSxcbiAgICAgIG9yaWdpblJpZ2h0OiB0aGlzLm9yaWdpblJpZ2h0LFxuICAgICAgdHJhbnNmb3JtWDogdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdHJhbnNmb3JtWTogdGhpcy50cmFuc2Zvcm1ZLFxuICAgIH1cbiAgfVxuXG4gIGdldFJlbGF0aXZlUmVjdChyZWN0LCBwb3NpdGlvbil7XG4gICAgc3dpdGNoKHBvc2l0aW9uKXtcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LlJJR0hUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LldJTkRPV19DRU5URVI6XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUmVjdCA9IHRoaXMuZ2V0Q2VudGVyUmVjdChyZWN0LndpZHRoLCByZWN0LmhlaWdodClcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LnRvcCAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbGxlZ2FsIHBvc2l0aW9uS2V5IGAnICsgcG9zaXRpb24gKyAnYCBpcyBzcGVjaWZpZWQnO1xuICAgIH1cbiAgfVxuXG4gIGdldE92ZXJsYXBwaW5nUmVjdChyZWN0KXtcbiAgICBjb25zdCB0b3AgPSBNYXRoLm1heCh0aGlzLnRvcCwgcmVjdC50b3ApXG4gICAgY29uc3QgbGVmdCA9IE1hdGgubWF4KHRoaXMubGVmdCwgcmVjdC5sZWZ0KVxuICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4odGhpcy5yaWdodCwgcmVjdC5yaWdodCk7XG4gICAgY29uc3QgYm90dG9tID0gTWF0aC5taW4odGhpcy5ib3R0b20sIHJlY3QuYm90dG9tKTtcblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIGlmICh3aWR0aCA+IDAgJiYgaGVpZ2h0ID4gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuUmVjdC5jcmVhdGVXaXRoRWxlbWVudCA9IChlbGVtLCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApID0+IHtcbiAgaWYoIWVsZW0pe1xuICAgIHJldHVybiBuZXcgUmVjdCgwLDAsMCwwKVxuICB9XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIGJvdW5kaW5nUmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgYm91bmRpbmdSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICB0cmFuc2Zvcm1YLFxuICAgIHRyYW5zZm9ybVlcbiAgKVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhXaW5kb3cgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVjdChcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gIClcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1dJTkRPV19DRU5URVInLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIldJTkRPV19DRU5URVJcIlxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgQWN0aW9uID0gIHtcbiAgb25lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzEnKVxuICB9LFxuICB0d286IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMicpXG4gIH0sXG4gIHRocmVlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzMnKVxuICB9LFxuICBmb3VyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzQnKVxuICB9LFxuICBmaXZlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzUnKVxuICB9LFxuICBzaXg6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNicpXG4gIH0sXG4gIHNldmVuOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzcnKVxuICB9LFxuICBlaWdodDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc4JylcbiAgfSxcbiAgbmluZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc5JylcbiAgfSxcbiAgemVybzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcwJylcbiAgfSxcbiAgZG91YmxlWmVybzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcwMCcpXG4gIH0sXG4gIGRlY2ltYWw6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dERlY2ltYWwoKVxuICB9LFxuICBwZXJjZW50OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRQZXJjZW50KGJ0blByb3BzKVxuICB9LFxuICBwbHVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKycsIGJ0blByb3BzKVxuICB9LFxuICBtaW51czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy0nLCBidG5Qcm9wcylcbiAgfSxcbiAgbXVsdGlwbGljYXRpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcqJywgYnRuUHJvcHMpXG4gIH0sXG4gIGRpdmlzaW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLycsIGJ0blByb3BzKVxuICB9LFxuICBlbnRlcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgY2FsYy5maXgoKVxuICAgICAgaWYoY2FsYy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb24pe1xuICAgICAgICBjYWxjLmNsb3NlKClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBhbGxDbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmFsbENsZWFyKClcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5jbGVhcigpXG4gIH0sXG4gIGJhY2tzcGFjZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmRlbGV0ZSgpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0FjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=