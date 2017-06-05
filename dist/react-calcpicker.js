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
	  closeOnEnterAction: true,
	  buttonWidth: 48,
	  buttonHeight: 32,
	  buttonMargin: 3
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
	                return btn.action(_this3, btn, e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1MzVkYzE0Yjg0MjU4NTFhNDRmYiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwibmFtZXMiOlsiQ2FsY1BpY2tlciIsIlJlY3QiLCJBY3Rpb24iLCJwcm9wcyIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJvbkNsaWNrQW1vdW50Iiwic2V0U3RhdGUiLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsInRpdGxlIiwiYnV0dG9uIiwicG9zaXRpb25zIiwiY2xvc2VCdXR0b24iLCJjbG9zZU9uRW50ZXJBY3Rpb24iLCJ6SW5kZXgiLCJidXR0b25XaWR0aCIsImJ1dHRvbkhlaWdodCIsImJ1dHRvbk1hcmdpbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiUklHSFRfVE9QIiwiTEVGVF9UT1AiLCJXSU5ET1dfQ0VOVEVSIiwic2hhcGUiLCJzdHlsZSIsImRpc3BsYXkiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJyZXF1aXJlIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiYWxsQ2xlYXIiLCJrZXkiLCJiYWNrc3BhY2UiLCJwZXJjZW50IiwiZGl2aXNpb24iLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsIm11bHRpcGxpY2F0aW9uIiwiZm91ciIsImZpdmUiLCJzaXgiLCJtaW51cyIsIm9uZSIsInR3byIsInRocmVlIiwicGx1cyIsInplcm8iLCJkb3VibGVaZXJvIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiZGVjaW1hbCIsImVudGVyIiwiQ2FsY3VsYXRvciIsImFtb3VudCIsImFwcGVuZE1vZGUiLCJvcGVyYXRvciIsInVuaXQiLCJ4IiwieSIsImNsb3NlQnV0dG9uU2l6ZSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImJ1dHRvblJlY3QiLCJjcmVhdGVXaXRoRWxlbWVudCIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwicHVzaCIsImNvbnRhaW5zIiwic29ydCIsImEiLCJiIiwiZ2V0T3ZlcmxhcHBpbmdSZWN0IiwiYXJlYSIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiaW5wdXRUb0Rpc3BsYXkiLCJjYWxjIiwibGVmdCIsInJpZ2h0IiwiZXhlY3V0ZSIsImNhbGxiYWNrIiwiY2FsY3VsYXRlZCIsInBhcnNlRmxvYXQiLCJpbnB1dE9wZXJhdG9yIiwiYnRuUHJvcHMiLCJpbnB1dERlY2ltYWwiLCJpbmRleE9mIiwiaW5wdXRQZXJjZW50IiwiY2xlYXIiLCJkZWxldGUiLCJuZXdTdGF0ZSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY29tcG9uZW50RGlkTW91bnQiLCJmaXgiLCJvbkNhbGN1bGF0ZWQiLCJjbG9zZSIsIm9uQ2xpY2tDbG9zZSIsImxvY2FsZURhdGEiLCJ0cmFuc2Zvcm0iLCJtYXJnaW4iLCJtYXAiLCJyb3dLZXkiLCJidG5LZXkiLCJjb21wb25lbnQiLCJlbGVtIiwiQnV0dG9uIiwib25DbGljayIsImdldEJ1dHRvblN0eWxlIiwicG9zaXRpb24iLCJ0b3RhbE1hcmdpbiIsInRvcCIsInByZXZCdXR0b24iLCJtYXJnaW5MZWZ0IiwiZ2V0Q2VudGVyUmVjdCIsImNlbnRlciIsImNsb25lIiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlc3VsdCIsImJvdHRvbSIsImR1bXAiLCJvcmlnaW5Cb3R0b20iLCJvcmlnaW5SaWdodCIsImV4cGVjdGVkUmVjdCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJldmVudCIsImVsZW1lbnQiLCJmb2N1cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztTQUVRQSxVO1NBQVlDLEk7U0FBTUMsTTs7Ozs7Ozs7Ozs7O0FDSjFCOzs7O0FBQ0E7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USxRQUFmLEVBQXlCK0QsS0FBekIsRUFBK0I7QUFDcEMvRCxjQUFTb0IsU0FBVCxDQUFtQmpJLElBQW5CLENBQXdCNkssT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0F6RSxVQUFLRyxPQUFMLENBQWEsWUFBTTtBQUNqQkgsWUFBS2tCLEdBQUw7QUFDQSxXQUFHbEIsS0FBS3JILEtBQUwsQ0FBV2dDLGtCQUFkLEVBQWlDO0FBQy9CcUYsY0FBS29CLEtBQUw7QUFDRDtBQUNGLE1BTEQ7QUFNRCxJQTdFYTtBQThFZDVFLGFBQVUsa0JBQVN3RCxJQUFULEVBQWVRLFFBQWYsRUFBeUIrRCxLQUF6QixFQUErQjtBQUN2Qy9ELGNBQVNvQixTQUFULENBQW1CakksSUFBbkIsQ0FBd0I2SyxPQUF4QixDQUFnQ0MsS0FBaEM7QUFDQXpFLFVBQUt4RCxRQUFMO0FBQ0QsSUFqRmE7QUFrRmRvRSxVQUFPLGVBQVNaLElBQVQsRUFBZVEsUUFBZixFQUF5QitELEtBQXpCLEVBQStCO0FBQ3BDL0QsY0FBU29CLFNBQVQsQ0FBbUJqSSxJQUFuQixDQUF3QjZLLE9BQXhCLENBQWdDQyxLQUFoQztBQUNBekUsVUFBS1ksS0FBTDtBQUNELElBckZhO0FBc0ZkbEUsY0FBVyxtQkFBU3NELElBQVQsRUFBZVEsUUFBZixFQUF5QitELEtBQXpCLEVBQStCO0FBQ3hDL0QsY0FBU29CLFNBQVQsQ0FBbUJqSSxJQUFuQixDQUF3QjZLLE9BQXhCLENBQWdDQyxLQUFoQztBQUNBekUsVUFBS2EsTUFBTDtBQUNEO0FBekZhLEVBQWhCOzttQkE0RmVuSSxNIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJyZWFjdC1wb3J0YWxcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wibG9jYWxlc1wiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTM1ZGMxNGI4NDI1ODUxYTQ0ZmIiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGNQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbnVtZXJhbC5sb2NhbGUocHJvcHMubG9jYWxlKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuQ2FsY3VsYXRvcjogZmFsc2UsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYnRuLmFjdGlvbih0aGlzLnJlZnMuY2FsY3VsYXRvciwgYnRuLCBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBuZXh0UHJvcHMubG9jYWxlKXtcbiAgICAgIG51bWVyYWwubG9jYWxlKG5leHRQcm9wcy5sb2NhbGUpXG4gICAgfVxuICB9XG5cbiAgb25DbGlja0Ftb3VudChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IHRydWV9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlUG9ydGFsKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS52YWx1ZSkuZm9ybWF0KHRoaXMucHJvcHMuZm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrIGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VQb3J0YWwoKX0+XG4gICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgcmVmPSdjYWxjdWxhdG9yJ1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgICBvbkNhbGN1bGF0ZWQ9e3ZhbHVlID0+IHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgY2xvc2VCdXR0b249e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICBjbG9zZU9uRW50ZXJBY3Rpb249e3RoaXMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9ufVxuICAgICAgICAgICAgekluZGV4PXt0aGlzLnByb3BzLnpJbmRleH1cbiAgICAgICAgICAgIGJ1dHRvbldpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgYnV0dG9uSGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgIGJ1dHRvbk1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhbGNQaWNrZXIucHJvcFR5cGVzID0ge1xuICBpbml0aWFsVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9zaXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0pKSxcbiAgYnV0dG9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2xpZ2h0JywgJ2RhcmsnLCAnd2FybmluZyddKSxcbiAgICAgICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBdKS5yZXF1aXJlLFxuICAgICAgICBzcGFuOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlclxuICAgICAgICB9KSxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBrZXlEb3duOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfSlcbiAgICApXG4gICksXG4gIGJ1dHRvbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbk1hcmdpbjogUHJvcFR5cGVzLm51bWJlcixcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICBdKSxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xvc2VPbkVudGVyQWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWUsXG4gIGJ1dHRvbldpZHRoOiA0OCxcbiAgYnV0dG9uSGVpZ2h0OiAzMixcbiAgYnV0dG9uTWFyZ2luOiAzLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50O1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQoYW1vdW50LCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFtb3VudCA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICBhbW91bnQ6ICcwJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgdW5pdDoge30sXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSgpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYodmFsdWUgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIXZhbHVlID8gMCA6IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUuYW1vdW50KVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci10aXRsZVwiIHN0eWxlPXt7d2lkdGg6ICgodGhpcy5wcm9wcy5idXR0b25XaWR0aCAqIDQpICsgKHRoaXMucHJvcHMuYnV0dG9uTWFyZ2luICogNikpIC0gdGhpcy5jbG9zZUJ1dHRvblNpemV9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCJcbiAgICAgICAgICAgICAgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZSgpfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIiBzdHlsZT17e21hcmdpbjogdGhpcy5wcm9wcy5idXR0b25NYXJnaW59fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19XG4gICAgICAgICAgICAgICAgICAgIHByZXZCdXR0b249e2J0bktleSA+IDAgPyByb3dbYnRuS2V5IC0gMV0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvd0tleSArICctJyArIGJ0bktleX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidG4uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnRuLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBzcGFuPXtidG4uc3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17YnRuLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gYnRuLmFjdGlvbih0aGlzLCBidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==