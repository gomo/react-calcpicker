(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "numeral/locales", "class-names", "react-portal", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"), require("prop-types"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["locales"], root["classNames"], root["Portal"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
	
	var _Action = __webpack_require__(12);
	
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
	
	var _reactPortal = __webpack_require__(10);
	
	var _reactPortal2 = _interopRequireDefault(_reactPortal);
	
	var _propTypes = __webpack_require__(11);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Rect = __webpack_require__(8);
	
	var _Rect2 = _interopRequireDefault(_Rect);
	
	var _Action = __webpack_require__(12);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Global = __webpack_require__(9);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	var _classNames = __webpack_require__(7);
	
	var _classNames2 = _interopRequireDefault(_classNames);
	
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
	
	  CalcPicker.prototype.onClickPicker = function onClickPicker(e) {
	    var _this2 = this;
	
	    e.preventDefault();
	    if (this.props.shouldOpen() === false) {
	      return false;
	    }
	
	    if (this.props.exclusionGroup) {
	      var alreadyOpend = false;
	      this.props.exclusionGroup.forEach(function (picker) {
	        if (picker === _this2) alreadyOpend = true;
	        if (picker.state.openCalculator) {
	          picker.setState({ openCalculator: false });
	        }
	      });
	
	      if (!alreadyOpend) {
	        this.props.exclusionGroup.push(this);
	      }
	    }
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
	    var _this3 = this;
	
	    return _react2.default.createElement(
	      'div',
	      { className: (0, _classNames2.default)('react-calcpicker', this.props.wrapperClass) },
	      _react2.default.createElement(
	        'button',
	        { ref: 'button', className: (0, _classNames2.default)(this.props.className, this.props.buttonClass), onClick: function onClick(e) {
	            return _this3.onClickPicker(e);
	          } },
	        (0, _numeral2.default)(this.state.value).format(this.props.format)
	      ),
	      _react2.default.createElement(
	        _reactPortal2.default,
	        { closeOnEsc: true, closeOnOutsideClick: this.props.closeOnOutsideClick, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this3.onClosePortal();
	          } },
	        _react2.default.createElement(_Calculator2.default, {
	          title: this.props.title,
	          ref: 'calculator',
	          initialValue: this.state.value,
	          onClickClose: function onClickClose() {
	            return _this3.setState({ openCalculator: false });
	          },
	          button: this.refs.button,
	          positions: this.props.positions,
	          buttons: this.props.buttons,
	          onCalculated: function onCalculated(value) {
	            return _this3.changeValue(value);
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
	  wrapperClass: _propTypes2.default.string,
	  buttonClass: _propTypes2.default.string,
	  closeButton: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  locale: _propTypes2.default.string,
	  onChange: _propTypes2.default.func.isRequired,
	  closeOnEnterAction: _propTypes2.default.bool,
	  zIndex: _propTypes2.default.number,
	  title: _propTypes2.default.string,
	  closeOnOutsideClick: _propTypes2.default.bool,
	  exclusionGroup: _propTypes2.default.array,
	  shouldOpen: _propTypes2.default.func
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
	  closeOnOutsideClick: true,
	  exclusionGroup: undefined,
	  shouldOpen: function shouldOpen() {
	    return true;
	  }
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
	
	var _Global = __webpack_require__(9);
	
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
	      value: props.initialValue,
	      appendMode: true,
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
	    var strDisplay = this.state.display.toString();
	    if (strDisplay !== '0' && this.state.appendMode) {
	      this.setState({
	        display: strDisplay + number
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
	    var value = this.state.value;
	    var calculated = false;
	    if (this.state.operator.value) {
	      display = this.calc(parseFloat(value, 10), this.state.operator.value, parseFloat(display, 10));
	      calculated = true;
	    }
	
	    value = display;
	
	    this.setState({
	      operator: {},
	      unit: {},
	      display: display,
	      value: value,
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
	      value: '0',
	      operator: {},
	      appendMode: false,
	      unit: {}
	    });
	  };
	
	  Calculator.prototype.delete = function _delete() {
	    if (this.state.appendMode) {
	      var newState = {};
	      var newDisplay = this.state.display.toString();
	      if (newDisplay === '0') {
	        newState['unit'] = {};
	      }
	      newDisplay = newDisplay.substr(0, newDisplay.length - 1);
	      newState['display'] = !newDisplay ? 0 : newDisplay;
	      this.setState(newState);
	    }
	  };
	
	  Calculator.prototype.componentDidMount = function componentDidMount() {
	    this.adjustPosition();
	  };
	
	  Calculator.prototype.fix = function fix() {
	    if (this.props.onCalculated) this.props.onCalculated(this.state.value);
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Global = __webpack_require__(9);
	
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NGFlMTE4OWY5OGJhOWIwYjAzZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sIm5hbWVzIjpbIkNhbGNQaWNrZXIiLCJSZWN0IiwiQWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwicHJvcHMiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrUGlja2VyIiwic2hvdWxkT3BlbiIsImV4Y2x1c2lvbkdyb3VwIiwiYWxyZWFkeU9wZW5kIiwicGlja2VyIiwic2V0U3RhdGUiLCJwdXNoIiwib25DbG9zZVBvcnRhbCIsImNoYW5nZVZhbHVlIiwib25DaGFuZ2UiLCJyZW5kZXIiLCJ3cmFwcGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJidXR0b25DbGFzcyIsImZvcm1hdCIsImNsb3NlT25PdXRzaWRlQ2xpY2siLCJ0aXRsZSIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkVudGVyQWN0aW9uIiwiekluZGV4IiwiYnV0dG9uV2lkdGgiLCJidXR0b25IZWlnaHQiLCJidXR0b25NYXJnaW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJhcnJheU9mIiwib25lT2YiLCJSSUdIVF9CT1RUT00iLCJMRUZUX0JPVFRPTSIsIlJJR0hUX1RPUCIsIkxFRlRfVE9QIiwiV0lORE9XX0NFTlRFUiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiYWxsQ2xlYXIiLCJrZXkiLCJiYWNrc3BhY2UiLCJwZXJjZW50IiwiZGl2aXNpb24iLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsIm11bHRpcGxpY2F0aW9uIiwiZm91ciIsImZpdmUiLCJzaXgiLCJtaW51cyIsIm9uZSIsInR3byIsInRocmVlIiwicGx1cyIsInplcm8iLCJkb3VibGVaZXJvIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiZGVjaW1hbCIsImVudGVyIiwiQ2FsY3VsYXRvciIsImFwcGVuZE1vZGUiLCJvcGVyYXRvciIsInVuaXQiLCJ4IiwieSIsImNsb3NlQnV0dG9uU2l6ZSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImJ1dHRvblJlY3QiLCJjcmVhdGVXaXRoRWxlbWVudCIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwiY29udGFpbnMiLCJzb3J0IiwiYSIsImIiLCJnZXRPdmVybGFwcGluZ1JlY3QiLCJhcmVhIiwidHJhbnNmb3JtWCIsInRyYW5zZm9ybVkiLCJpbnB1dFRvRGlzcGxheSIsInN0ckRpc3BsYXkiLCJ0b1N0cmluZyIsImNhbGMiLCJsZWZ0IiwicmlnaHQiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJjYWxjdWxhdGVkIiwicGFyc2VGbG9hdCIsImlucHV0T3BlcmF0b3IiLCJidG5Qcm9wcyIsImlucHV0RGVjaW1hbCIsImluZGV4T2YiLCJpbnB1dFBlcmNlbnQiLCJjbGVhciIsImRlbGV0ZSIsIm5ld1N0YXRlIiwibmV3RGlzcGxheSIsInN1YnN0ciIsImNvbXBvbmVudERpZE1vdW50IiwiZml4Iiwib25DYWxjdWxhdGVkIiwiY2xvc2UiLCJvbkNsaWNrQ2xvc2UiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJsb2NhbGVEYXRhIiwidHJhbnNmb3JtIiwibWFyZ2luIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50IiwiZWxlbSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRCdXR0b25TdHlsZSIsInBvc2l0aW9uIiwidG90YWxNYXJnaW4iLCJ0b3AiLCJwcmV2QnV0dG9uIiwibWFyZ2luTGVmdCIsImdldENlbnRlclJlY3QiLCJjZW50ZXIiLCJjbG9uZSIsIm9yaWdpblRvcCIsIm9yaWdpbkxlZnQiLCJyZXN1bHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJleHBlY3RlZFJlY3QiLCJNYXRoIiwibWF4IiwibWluIiwiYm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keSIsImRvY3VtZW50IiwiZG9jRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiR2xvYmFsIiwiX2N1cnJlbnRDYWxjbGF0b3IiLCJnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNB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U2lDLElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDcEN2QixVQUFLRyxPQUFMLENBQWEsWUFBTTtBQUNqQkgsWUFBS2tCLEdBQUw7QUFDQSxXQUFHbEIsS0FBS2hJLEtBQUwsQ0FBVzJDLGtCQUFkLEVBQWlDO0FBQy9CcUYsY0FBS29CLEtBQUw7QUFDRDtBQUNGLE1BTEQ7QUFNRCxJQTNEYTtBQTREZDNFLGFBQVUsa0JBQVN1RCxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ3ZDdkIsVUFBS3ZELFFBQUw7QUFDRCxJQTlEYTtBQStEZG1FLFVBQU8sZUFBU1osSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUNwQ3ZCLFVBQUtZLEtBQUw7QUFDRCxJQWpFYTtBQWtFZGpFLGNBQVcsbUJBQVNxRCxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ3hDdkIsVUFBS2EsTUFBTDtBQUNEO0FBcEVhLEVBQWhCOzttQkF1RWVsSixNIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJyZWFjdC1wb3J0YWxcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wibG9jYWxlc1wiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY0YWUxMTg5Zjk4YmE5YjBiMDNlIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JlYWN0LXBvcnRhbCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4uL2NsYXNzZXMvQWN0aW9uJ1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yKXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvci5wcm9wcy5idXR0b25zLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBpZihidG4ua2V5RG93biAmJiBidG4ua2V5RG93bihlKSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBidG4uYWN0aW9uKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLCBidG4sIGUpXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGNQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbnVtZXJhbC5sb2NhbGUocHJvcHMubG9jYWxlKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuQ2FsY3VsYXRvcjogZmFsc2UsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgIT09IHByZXZTdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09PSB0cnVlKXtcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzLnJlZnMuY2FsY3VsYXRvclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgIT09IG5leHRTdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICBpZihuZXh0U3RhdGUub3BlbkNhbGN1bGF0b3IgIT09IHRydWUgJiYgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPT09IHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrUGlja2VyKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0aGlzLnByb3BzLnNob3VsZE9wZW4oKSA9PT0gZmFsc2Upe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cCl7XG4gICAgICBsZXQgYWxyZWFkeU9wZW5kID0gZmFsc2VcbiAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAuZm9yRWFjaChwaWNrZXIgPT4ge1xuICAgICAgICBpZihwaWNrZXIgPT09IHRoaXMpIGFscmVhZHlPcGVuZCA9IHRydWVcbiAgICAgICAgaWYocGlja2VyLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgICBwaWNrZXIuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmKCFhbHJlYWR5T3BlbmQpe1xuICAgICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLnB1c2godGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IHRydWV9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlUG9ydGFsKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3JlYWN0LWNhbGNwaWNrZXInLCB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyl9PlxuICAgICAgICA8YnV0dG9uIHJlZj1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5idXR0b25DbGFzcyl9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uQ2xpY2tQaWNrZXIoZSl9PlxuICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUudmFsdWUpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8UG9ydGFsIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljaz17dGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrfSBpc09wZW5lZD17dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcn0gb25DbG9zZT17KCkgPT4gdGhpcy5vbkNsb3NlUG9ydGFsKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgIHJlZj0nY2FsY3VsYXRvcidcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgY2xvc2VPbkVudGVyQWN0aW9uPXt0aGlzLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbn1cbiAgICAgICAgICAgIHpJbmRleD17dGhpcy5wcm9wcy56SW5kZXh9XG4gICAgICAgICAgICBidXR0b25XaWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgIGJ1dHRvbkhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICBidXR0b25NYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxjUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvc2l0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdKSksXG4gIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdsaWdodCcsICdkYXJrJywgJ3dhcm5pbmcnXSksXG4gICAgICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgXSkucmVxdWlyZSxcbiAgICAgICAgc3BhbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBidXR0b25XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25NYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpb25Hcm91cDogUHJvcFR5cGVzLmFycmF5LFxuICBzaG91bGRPcGVuOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIkFDXCIsIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCLihpBcIiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiBcIiVcIiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDt1wiLCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI3XCIsIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjhcIiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOVwiLCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsOXXCIsIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjRcIiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI1XCIsIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNlwiLCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiLVwiLCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIxXCIsIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIyXCIsIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIzXCIsIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIitcIiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwXCIsIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMDBcIiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIi5cIiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogXCI9XCIsIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZSxcbiAgYnV0dG9uV2lkdGg6IDQ4LFxuICBidXR0b25IZWlnaHQ6IDMyLFxuICBidXR0b25NYXJnaW46IDMsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGV4Y2x1c2lvbkdyb3VwOiB1bmRlZmluZWQsXG4gIHNob3VsZE9wZW46ICgpID0+IHRydWVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJsb2NhbGVzXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiY29tbW9uanNcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiYW1kXCI6XCJudW1lcmFsL2xvY2FsZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgY29uc3Qgc3RyRGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgaWYoc3RyRGlzcGxheSAhPT0gJzAnICYmIHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogc3RyRGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQodmFsdWUsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIHZhbHVlOiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IG5ld0Rpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYobmV3RGlzcGxheSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICBuZXdEaXNwbGF5ID0gbmV3RGlzcGxheS5zdWJzdHIoMCwgbmV3RGlzcGxheS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhbmV3RGlzcGxheSA/IDAgOiBuZXdEaXNwbGF5O1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUudmFsdWUpXG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0Nsb3NlKClcbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXM7XG4gICAgYnRuUHJvcHMuYWN0aW9uKHRoaXMsIGJ0blByb3BzLCBldmVudClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxvY2FsZSA9IG51bWVyYWwubG9jYWxlRGF0YSgpO1xuICAgIGNvbnN0IHN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH1cbiAgICBpZih0aGlzLnByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0eWxlWyd6SW5kZXgnXSA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvclwiIHN0eWxlPXtzdHlsZX0gb25DbGljaz17ZSA9PiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci10aXRsZVwiIHN0eWxlPXt7d2lkdGg6ICgodGhpcy5wcm9wcy5idXR0b25XaWR0aCAqIDQpICsgKHRoaXMucHJvcHMuYnV0dG9uTWFyZ2luICogNikpIC0gdGhpcy5jbG9zZUJ1dHRvblNpemV9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCJcbiAgICAgICAgICAgICAgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZSgpfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIiBzdHlsZT17e21hcmdpbjogdGhpcy5wcm9wcy5idXR0b25NYXJnaW59fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19XG4gICAgICAgICAgICAgICAgICAgIHByZXZCdXR0b249e2J0bktleSA+IDAgPyByb3dbYnRuS2V5IC0gMV0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvd0tleSArICctJyArIGJ0bktleX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidG4uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnRuLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBzcGFuPXtidG4uc3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17YnRuLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrQnV0dG9uKGJ0biwgZSl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJ1dHRvblN0eWxlKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5tYXJnaW4pe1xuICAgICAgc3R5bGUubWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW47XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5zcGFuKXtcbiAgICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4uaGVpZ2h0ID49IDIpe1xuICAgICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnNwYW4uaGVpZ2h0IC0gMSkgKiAyKVxuICAgICAgICBzdHlsZS5oZWlnaHQgPSAoc3R5bGUuaGVpZ2h0ICogdGhpcy5wcm9wcy5zcGFuLmhlaWdodCkgKyB0b3RhbE1hcmdpblxuICAgICAgICBzdHlsZS50b3AgPSAtKCh0aGlzLnByb3BzLmhlaWdodCAqICh0aGlzLnByb3BzLnNwYW4uaGVpZ2h0IC0gMSkpICsgdG90YWxNYXJnaW4pXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMucHJvcHMuc3Bhbi53aWR0aCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLndpZHRoIC0gMSkgKiAyKVxuICAgICAgICBzdHlsZS53aWR0aCA9IChzdHlsZS53aWR0aCAqIHRoaXMucHJvcHMuc3Bhbi53aWR0aCkgKyB0b3RhbE1hcmdpblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMucHJldkJ1dHRvbiAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3BhbiAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCA+PSAyKXtcbiAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoICogMikgKyAxKVxuICAgICAgc3R5bGUubWFyZ2luTGVmdCA9ICh0aGlzLnByb3BzLndpZHRoICogdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImVsZW1lbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvblwiLFxuICAgICAgICAgIHRoaXMucHJvcHMuc3R5bGUgPyBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zdHlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17dGhpcy5nZXRCdXR0b25TdHlsZSgpfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBhcmVhKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5XSU5ET1dfQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cblxuICBnZXRPdmVybGFwcGluZ1JlY3QocmVjdCl7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIHJlY3QudG9wKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0aGlzLmxlZnQsIHJlY3QubGVmdClcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKHRoaXMucmlnaHQsIHJlY3QucmlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRoaXMuYm90dG9tLCByZWN0LmJvdHRvbSk7XG5cbiAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICBpZiAod2lkdGggPiAwICYmIGhlaWdodCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdXSU5ET1dfQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJXSU5ET1dfQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsImNsYXNzIEdsb2JhbFxue1xuICBnZXQgY3VycmVudENhbGNsYXRvcigpe1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsY2xhdG9yXG4gIH1cblxuICBzZXQgY3VycmVudENhbGNsYXRvcih2YWx1ZSl7XG4gICAgdGhpcy5fY3VycmVudENhbGNsYXRvciA9IHZhbHVlXG4gIH1cbn1cblxuY29uc3QgZyA9IG5ldyBHbG9iYWwoKVxuZXhwb3J0IGRlZmF1bHQgZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEdsb2JhbCBmcm9tICcuL0dsb2JhbCdcblxuY29uc3QgQWN0aW9uID0gIHtcbiAgb25lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzEnKVxuICB9LFxuICB0d286IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMicpXG4gIH0sXG4gIHRocmVlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzMnKVxuICB9LFxuICBmb3VyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzQnKVxuICB9LFxuICBmaXZlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzUnKVxuICB9LFxuICBzaXg6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNicpXG4gIH0sXG4gIHNldmVuOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzcnKVxuICB9LFxuICBlaWdodDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc4JylcbiAgfSxcbiAgbmluZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc5JylcbiAgfSxcbiAgemVybzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcwJylcbiAgfSxcbiAgZG91YmxlWmVybzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcwMCcpXG4gIH0sXG4gIGRlY2ltYWw6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dERlY2ltYWwoKVxuICB9LFxuICBwZXJjZW50OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRQZXJjZW50KGJ0blByb3BzKVxuICB9LFxuICBwbHVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKycsIGJ0blByb3BzKVxuICB9LFxuICBtaW51czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy0nLCBidG5Qcm9wcylcbiAgfSxcbiAgbXVsdGlwbGljYXRpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcqJywgYnRuUHJvcHMpXG4gIH0sXG4gIGRpdmlzaW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLycsIGJ0blByb3BzKVxuICB9LFxuICBlbnRlcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgY2FsYy5maXgoKVxuICAgICAgaWYoY2FsYy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb24pe1xuICAgICAgICBjYWxjLmNsb3NlKClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBhbGxDbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmFsbENsZWFyKClcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5jbGVhcigpXG4gIH0sXG4gIGJhY2tzcGFjZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmRlbGV0ZSgpXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0FjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=