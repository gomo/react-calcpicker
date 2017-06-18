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
	  exclusionGroup: _propTypes2.default.array
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
	  exclusionGroup: undefined
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODk2NWVhMGNjZjFjZWQ3ZGI3NyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sIm5hbWVzIjpbIkNhbGNQaWNrZXIiLCJSZWN0IiwiQWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwicHJvcHMiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrUGlja2VyIiwiZXhjbHVzaW9uR3JvdXAiLCJhbHJlYWR5T3BlbmQiLCJwaWNrZXIiLCJzZXRTdGF0ZSIsInB1c2giLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsIndyYXBwZXJDbGFzcyIsImNsYXNzTmFtZSIsImJ1dHRvbkNsYXNzIiwiZm9ybWF0IiwiY2xvc2VPbk91dHNpZGVDbGljayIsInRpdGxlIiwiYnV0dG9uIiwicG9zaXRpb25zIiwiY2xvc2VCdXR0b24iLCJjbG9zZU9uRW50ZXJBY3Rpb24iLCJ6SW5kZXgiLCJidXR0b25XaWR0aCIsImJ1dHRvbkhlaWdodCIsImJ1dHRvbk1hcmdpbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiUklHSFRfVE9QIiwiTEVGVF9UT1AiLCJXSU5ET1dfQ0VOVEVSIiwic2hhcGUiLCJzdHlsZSIsImRpc3BsYXkiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJyZXF1aXJlIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJhbGxDbGVhciIsImtleSIsImJhY2tzcGFjZSIsInBlcmNlbnQiLCJkaXZpc2lvbiIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbGljYXRpb24iLCJmb3VyIiwiZml2ZSIsInNpeCIsIm1pbnVzIiwib25lIiwidHdvIiwidGhyZWUiLCJwbHVzIiwiemVybyIsImRvdWJsZVplcm8iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJkZWNpbWFsIiwiZW50ZXIiLCJDYWxjdWxhdG9yIiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsIngiLCJ5IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndpbmRvd1JlY3QiLCJjcmVhdGVXaXRoV2luZG93IiwiYnV0dG9uUmVjdCIsImNyZWF0ZVdpdGhFbGVtZW50IiwiY2FsY1JlY3QiLCJyZWN0cyIsIm5ld0NhbGNSZWN0IiwiaSIsImxlbmd0aCIsInBvc0tleSIsInJlY3QiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImlucHV0VG9EaXNwbGF5Iiwic3RyRGlzcGxheSIsInRvU3RyaW5nIiwiY2FsYyIsImxlZnQiLCJyaWdodCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiZGVsZXRlIiwibmV3U3RhdGUiLCJuZXdEaXNwbGF5Iiwic3Vic3RyIiwiY29tcG9uZW50RGlkTW91bnQiLCJmaXgiLCJvbkNhbGN1bGF0ZWQiLCJjbG9zZSIsIm9uQ2xpY2tDbG9zZSIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsImxvY2FsZURhdGEiLCJ0cmFuc2Zvcm0iLCJtYXJnaW4iLCJtYXAiLCJyb3dLZXkiLCJidG5LZXkiLCJjb21wb25lbnQiLCJlbGVtIiwiQnV0dG9uIiwib25DbGljayIsImdldEJ1dHRvblN0eWxlIiwicG9zaXRpb24iLCJ0b3RhbE1hcmdpbiIsInRvcCIsInByZXZCdXR0b24iLCJtYXJnaW5MZWZ0IiwiZ2V0Q2VudGVyUmVjdCIsImNlbnRlciIsImNsb25lIiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlc3VsdCIsImJvdHRvbSIsImR1bXAiLCJvcmlnaW5Cb3R0b20iLCJvcmlnaW5SaWdodCIsImV4cGVjdGVkUmVjdCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJHbG9iYWwiLCJfY3VycmVudENhbGNsYXRvciIsImciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7U0FFUUEsVTtTQUFZQyxJO1NBQU1DLE07Ozs7Ozs7Ozs7OztBQ0oxQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBQyxRQUFPQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFDQyxDQUFELEVBQU87QUFDeEMsT0FBRyxpQkFBT0MsZ0JBQVYsRUFBMkI7QUFDekIsc0JBQU9BLGdCQUFQLENBQXdCQyxLQUF4QixDQUE4QkMsT0FBOUIsQ0FBc0NDLE9BQXRDLENBQThDO0FBQUEsY0FBT0MsSUFBSUQsT0FBSixDQUFZLGVBQU87QUFDdEUsYUFBR0UsSUFBSUMsT0FBSixJQUFlRCxJQUFJQyxPQUFKLENBQVlQLENBQVosQ0FBbEIsRUFBaUM7QUFDL0JBLGFBQUVRLGNBQUY7QUFDQUYsZUFBSUcsTUFBSixDQUFXLGlCQUFPUixnQkFBbEIsRUFBb0NLLEdBQXBDLEVBQXlDTixDQUF6QztBQUNEO0FBQ0YsUUFMb0QsQ0FBUDtBQUFBLE1BQTlDO0FBTUQ7QUFDRixFQVREOztLQVdxQkwsVTs7O0FBRW5CLHVCQUFZTyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0RBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUVqQix1QkFBUVEsTUFBUixDQUFlUixNQUFNUSxNQUFyQjtBQUNBLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBZ0IsS0FETDtBQUVYQyxjQUFPWCxNQUFNWTtBQUZGLE1BQWI7QUFIaUI7QUFPbEI7O3dCQUVEQyx5QixzQ0FBMEJDLFMsRUFBVTtBQUNsQyxTQUFHLEtBQUtkLEtBQUwsQ0FBV1EsTUFBWCxJQUFxQk0sVUFBVU4sTUFBbEMsRUFBeUM7QUFDdkMseUJBQVFBLE1BQVIsQ0FBZU0sVUFBVU4sTUFBekI7QUFDRDtBQUNGLEk7O3dCQUVETyxrQiwrQkFBbUJDLFMsRUFBV0MsUyxFQUFVO0FBQ3RDLFNBQUcsS0FBS1IsS0FBTCxDQUFXQyxjQUFYLEtBQThCTyxVQUFVUCxjQUEzQyxFQUEwRDtBQUN4RCxXQUFHLEtBQUtELEtBQUwsQ0FBV0MsY0FBWCxLQUE4QixJQUFqQyxFQUFzQztBQUNwQywwQkFBT1gsZ0JBQVAsR0FBMEIsS0FBS21CLElBQUwsQ0FBVUMsVUFBcEM7QUFDRDtBQUNGO0FBQ0YsSTs7d0JBRURDLG1CLGdDQUFvQk4sUyxFQUFXTyxTLEVBQVU7QUFDdkMsU0FBRyxLQUFLWixLQUFMLENBQVdDLGNBQVgsS0FBOEJXLFVBQVVYLGNBQTNDLEVBQTBEO0FBQ3hELFdBQUdXLFVBQVVYLGNBQVYsS0FBNkIsSUFBN0IsSUFBcUMsaUJBQU9YLGdCQUFQLEtBQTRCLEtBQUttQixJQUFMLENBQVVDLFVBQTlFLEVBQXlGO0FBQ3ZGLDBCQUFPcEIsZ0JBQVAsR0FBMEJ1QixTQUExQjtBQUNEO0FBQ0Y7QUFDRixJOzt3QkFFREMsYSwwQkFBY3pCLEMsRUFBRTtBQUFBOztBQUNkQSxPQUFFUSxjQUFGO0FBQ0EsU0FBRyxLQUFLTixLQUFMLENBQVd3QixjQUFkLEVBQTZCO0FBQzNCLFdBQUlDLGVBQWUsS0FBbkI7QUFDQSxZQUFLekIsS0FBTCxDQUFXd0IsY0FBWCxDQUEwQnRCLE9BQTFCLENBQWtDLGtCQUFVO0FBQzFDLGFBQUd3QixpQkFBSCxFQUFvQkQsZUFBZSxJQUFmO0FBQ3BCLGFBQUdDLE9BQU9qQixLQUFQLENBQWFDLGNBQWhCLEVBQStCO0FBQzdCZ0Isa0JBQU9DLFFBQVAsQ0FBZ0IsRUFBQ2pCLGdCQUFnQixLQUFqQixFQUFoQjtBQUNEO0FBQ0YsUUFMRDs7QUFPQSxXQUFHLENBQUNlLFlBQUosRUFBaUI7QUFDZixjQUFLekIsS0FBTCxDQUFXd0IsY0FBWCxDQUEwQkksSUFBMUIsQ0FBK0IsSUFBL0I7QUFDRDtBQUNGO0FBQ0QsVUFBS0QsUUFBTCxDQUFjLEVBQUNqQixnQkFBZ0IsSUFBakIsRUFBZDtBQUNBLFlBQU8sS0FBUDtBQUNELEk7O3dCQUVEbUIsYSw0QkFBZTtBQUNiO0FBQ0EsU0FBRyxLQUFLcEIsS0FBTCxDQUFXQyxjQUFYLElBQTZCLElBQWhDLEVBQXFDO0FBQ25DLFlBQUtpQixRQUFMLENBQWMsRUFBQ2pCLGdCQUFnQixLQUFqQixFQUFkO0FBQ0Q7QUFDRixJOzt3QkFFRG9CLFcsd0JBQVluQixLLEVBQU07QUFDaEIsU0FBRyxLQUFLRixLQUFMLENBQVdFLEtBQVgsSUFBb0JBLEtBQXZCLEVBQTZCO0FBQzNCLFlBQUtnQixRQUFMLENBQWMsRUFBQ2hCLE9BQU9BLEtBQVIsRUFBZDtBQUNBLFlBQUtYLEtBQUwsQ0FBVytCLFFBQVgsQ0FBb0JwQixLQUFwQjtBQUNEO0FBQ0YsSTs7d0JBRURxQixNLHFCQUFRO0FBQUE7O0FBQ04sWUFDRTtBQUFBO0FBQUEsU0FBSyxXQUFXLDBCQUFXLGtCQUFYLEVBQStCLEtBQUtoQyxLQUFMLENBQVdpQyxZQUExQyxDQUFoQjtBQUNFO0FBQUE7QUFBQSxXQUFRLEtBQUksUUFBWixFQUFxQixXQUFXLDBCQUFXLEtBQUtqQyxLQUFMLENBQVdrQyxTQUF0QixFQUFpQyxLQUFLbEMsS0FBTCxDQUFXbUMsV0FBNUMsQ0FBaEMsRUFBMEYsU0FBUyxpQkFBQ3JDLENBQUQ7QUFBQSxvQkFBTyxPQUFLeUIsYUFBTCxDQUFtQnpCLENBQW5CLENBQVA7QUFBQSxZQUFuRztBQUNHLGdDQUFRLEtBQUtXLEtBQUwsQ0FBV0UsS0FBbkIsRUFBMEJ5QixNQUExQixDQUFpQyxLQUFLcEMsS0FBTCxDQUFXb0MsTUFBNUM7QUFESCxRQURGO0FBSUU7QUFBQTtBQUFBLFdBQVEsZ0JBQVIsRUFBbUIscUJBQXFCLEtBQUtwQyxLQUFMLENBQVdxQyxtQkFBbkQsRUFBd0UsVUFBVSxLQUFLNUIsS0FBTCxDQUFXQyxjQUE3RixFQUE2RyxTQUFTO0FBQUEsb0JBQU0sT0FBS21CLGFBQUwsRUFBTjtBQUFBLFlBQXRIO0FBQ0U7QUFDRSxrQkFBTyxLQUFLN0IsS0FBTCxDQUFXc0MsS0FEcEI7QUFFRSxnQkFBSSxZQUZOO0FBR0UseUJBQWMsS0FBSzdCLEtBQUwsQ0FBV0UsS0FIM0I7QUFJRSx5QkFBYztBQUFBLG9CQUFNLE9BQUtnQixRQUFMLENBQWMsRUFBQ2pCLGdCQUFnQixLQUFqQixFQUFkLENBQU47QUFBQSxZQUpoQjtBQUtFLG1CQUFRLEtBQUtRLElBQUwsQ0FBVXFCLE1BTHBCO0FBTUUsc0JBQVcsS0FBS3ZDLEtBQUwsQ0FBV3dDLFNBTnhCO0FBT0Usb0JBQVMsS0FBS3hDLEtBQUwsQ0FBV0MsT0FQdEI7QUFRRSx5QkFBYztBQUFBLG9CQUFTLE9BQUs2QixXQUFMLENBQWlCbkIsS0FBakIsQ0FBVDtBQUFBLFlBUmhCO0FBU0Usd0JBQWEsS0FBS1gsS0FBTCxDQUFXeUMsV0FUMUI7QUFVRSwrQkFBb0IsS0FBS3pDLEtBQUwsQ0FBVzBDLGtCQVZqQztBQVdFLG1CQUFRLEtBQUsxQyxLQUFMLENBQVcyQyxNQVhyQjtBQVlFLHdCQUFhLEtBQUszQyxLQUFMLENBQVc0QyxXQVoxQjtBQWFFLHlCQUFjLEtBQUs1QyxLQUFMLENBQVc2QyxZQWIzQjtBQWNFLHlCQUFjLEtBQUs3QyxLQUFMLENBQVc4QztBQWQzQjtBQURGO0FBSkYsTUFERjtBQXlCRCxJOzs7R0E1RnFDLGdCQUFNQyxTOzttQkFBekJ0RCxVOzs7QUErRnJCQSxZQUFXdUQsU0FBWCxHQUF1QjtBQUNyQnBDLGlCQUFjLG9CQUFVcUMsTUFESDtBQUVyQmIsV0FBUSxvQkFBVWMsTUFGRztBQUdyQlYsY0FBVyxvQkFBVVcsT0FBVixDQUFrQixvQkFBVUMsS0FBVixDQUFnQixDQUMzQyxlQUFLQyxZQURzQyxFQUUzQyxlQUFLQyxXQUZzQyxFQUczQyxlQUFLQyxTQUhzQyxFQUkzQyxlQUFLQyxRQUpzQyxFQUszQyxlQUFLQyxhQUxzQyxDQUFoQixDQUFsQixDQUhVO0FBVXJCeEQsWUFBUyxvQkFBVWtELE9BQVYsQ0FDUCxvQkFBVUEsT0FBVixDQUNFLG9CQUFVTyxLQUFWLENBQWdCO0FBQ2RDLFlBQU8sb0JBQVVQLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixPQUF2QixFQUFnQyxNQUFoQyxFQUF3QyxTQUF4QyxDQUFoQixDQURPO0FBRWRRLGNBQVMsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVDLE1BRGlCLEVBRTNCLG9CQUFVWixNQUZpQixDQUFwQixFQUdOYSxPQUxXO0FBTWRDLFdBQU0sb0JBQVVOLEtBQVYsQ0FBZ0I7QUFDcEJPLGNBQU8sb0JBQVVoQixNQURHO0FBRXBCaUIsZUFBUSxvQkFBVWpCO0FBRkUsTUFBaEIsQ0FOUTtBQVVkMUMsYUFBUSxvQkFBVTRELElBQVYsQ0FBZUMsVUFWVDtBQVdkL0QsY0FBUyxvQkFBVThEO0FBWEwsSUFBaEIsQ0FERixDQURPLENBVlk7QUEyQnJCdkIsZ0JBQWEsb0JBQVVLLE1BM0JGO0FBNEJyQkosaUJBQWMsb0JBQVVJLE1BNUJIO0FBNkJyQkgsaUJBQWMsb0JBQVVHLE1BN0JIO0FBOEJyQmYsY0FBVyxvQkFBVWdCLE1BOUJBO0FBK0JyQmpCLGlCQUFjLG9CQUFVaUIsTUEvQkg7QUFnQ3JCZixnQkFBYSxvQkFBVWUsTUFoQ0Y7QUFpQ3JCVCxnQkFBYSxvQkFBVW9CLFNBQVYsQ0FBb0IsQ0FDL0Isb0JBQVVDLE1BRHFCLEVBRS9CLG9CQUFVWixNQUZxQixDQUFwQixDQWpDUTtBQXFDckIxQyxXQUFRLG9CQUFVMEMsTUFyQ0c7QUFzQ3JCbkIsYUFBVSxvQkFBVW9DLElBQVYsQ0FBZUMsVUF0Q0o7QUF1Q3JCMUIsdUJBQW9CLG9CQUFVMkIsSUF2Q1Q7QUF3Q3JCMUIsV0FBUSxvQkFBVU0sTUF4Q0c7QUF5Q3JCWCxVQUFPLG9CQUFVWSxNQXpDSTtBQTBDckJiLHdCQUFxQixvQkFBVWdDLElBMUNWO0FBMkNyQjdDLG1CQUFnQixvQkFBVThDO0FBM0NMLEVBQXZCOztBQThDQTdFLFlBQVc4RSxZQUFYLEdBQTBCO0FBQ3hCM0QsaUJBQWMsQ0FEVTtBQUV4QndCLFdBQVEsVUFGZ0I7QUFHeEJJLGNBQVcsQ0FDVCxlQUFLYSxZQURJLEVBRVQsZUFBS0MsV0FGSSxFQUdULGVBQUtDLFNBSEksRUFJVCxlQUFLQyxRQUpJLEVBS1QsZUFBS0MsYUFMSSxDQUhhO0FBVXhCaEIsZ0JBQWEsR0FWVztBQVd4QnhDLFlBQVMsQ0FDUCxDQUNFLEVBQUMwRCxPQUFPLE1BQVIsRUFBZ0JDLFNBQVMsSUFBekIsRUFBK0JyRCxRQUFRLGlCQUFPaUUsUUFBOUMsRUFBd0RuRSxTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxPQUFkO0FBQUEsTUFBakUsRUFERixFQUVFLEVBQUNkLE9BQU8sTUFBUixFQUFnQkMsU0FBUyxHQUF6QixFQUE4QnJELFFBQVEsaUJBQU9tRSxTQUE3QyxFQUF3RHJFLFNBQVM7QUFBQSxjQUFLUCxFQUFFMkUsR0FBRixJQUFTLFdBQWQ7QUFBQSxNQUFqRSxFQUZGLEVBR0UsRUFBQ2QsT0FBTyxPQUFSLEVBQWlCQyxTQUFTLEdBQTFCLEVBQStCckQsUUFBUSxpQkFBT29FLE9BQTlDLEVBQXVEdEUsU0FBUztBQUFBLGNBQUtQLEVBQUUyRSxHQUFGLElBQVMsR0FBZDtBQUFBLE1BQWhFLEVBSEYsRUFJRSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPcUUsUUFBaEQsRUFBMER2RSxTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBbkUsRUFKRixDQURPLEVBT1AsQ0FDRSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPc0UsS0FBaEQsRUFBdUR4RSxTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBaEUsRUFERixFQUVFLEVBQUNkLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQ3JELFFBQVEsaUJBQU91RSxLQUFoRCxFQUF1RHpFLFNBQVM7QUFBQSxjQUFLUCxFQUFFMkUsR0FBRixJQUFTLEdBQWQ7QUFBQSxNQUFoRSxFQUZGLEVBR0UsRUFBQ2QsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDckQsUUFBUSxpQkFBT3dFLElBQWhELEVBQXNEMUUsU0FBUztBQUFBLGNBQUtQLEVBQUUyRSxHQUFGLElBQVMsR0FBZDtBQUFBLE1BQS9ELEVBSEYsRUFJRSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPeUUsY0FBaEQsRUFBZ0UzRSxTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBekUsRUFKRixDQVBPLEVBWUwsQ0FDQSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPMEUsSUFBaEQsRUFBc0Q1RSxTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBL0QsRUFEQSxFQUVBLEVBQUNkLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQ3JELFFBQVEsaUJBQU8yRSxJQUFoRCxFQUFzRDdFLFNBQVM7QUFBQSxjQUFLUCxFQUFFMkUsR0FBRixJQUFTLEdBQWQ7QUFBQSxNQUEvRCxFQUZBLEVBR0EsRUFBQ2QsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDckQsUUFBUSxpQkFBTzRFLEdBQWhELEVBQXFEOUUsU0FBUztBQUFBLGNBQUtQLEVBQUUyRSxHQUFGLElBQVMsR0FBZDtBQUFBLE1BQTlELEVBSEEsRUFJQSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPNkUsS0FBaEQsRUFBdUQvRSxTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBaEUsRUFKQSxDQVpLLEVBaUJMLENBQ0EsRUFBQ2QsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDckQsUUFBUSxpQkFBTzhFLEdBQWhELEVBQXFEaEYsU0FBUztBQUFBLGNBQUtQLEVBQUUyRSxHQUFGLElBQVMsR0FBZDtBQUFBLE1BQTlELEVBREEsRUFFQSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPK0UsR0FBaEQsRUFBcURqRixTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBOUQsRUFGQSxFQUdBLEVBQUNkLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQ3JELFFBQVEsaUJBQU9nRixLQUFoRCxFQUF1RGxGLFNBQVM7QUFBQSxjQUFLUCxFQUFFMkUsR0FBRixJQUFTLEdBQWQ7QUFBQSxNQUFoRSxFQUhBLEVBSUEsRUFBQ2QsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDckQsUUFBUSxpQkFBT2lGLElBQWhELEVBQXNEbkYsU0FBUztBQUFBLGNBQUtQLEVBQUUyRSxHQUFGLElBQVMsR0FBZDtBQUFBLE1BQS9ELEVBSkEsQ0FqQkssRUFzQkwsQ0FDQSxFQUFDZCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUNyRCxRQUFRLGlCQUFPa0YsSUFBaEQsRUFBc0RwRixTQUFTO0FBQUEsY0FBS1AsRUFBRTJFLEdBQUYsSUFBUyxHQUFkO0FBQUEsTUFBL0QsRUFEQSxFQUVBLEVBQUNkLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxJQUE1QixFQUFrQ3JELFFBQVEsaUJBQU9tRixVQUFqRCxFQUE2RHJGLFNBQVM7QUFBQSxjQUFLUCxFQUFFNkYsT0FBRixJQUFhLEVBQWIsSUFBbUI3RixFQUFFOEYsUUFBMUI7QUFBQSxNQUF0RSxFQUZBLEVBR0EsRUFBQ2pDLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQ3JELFFBQVEsaUJBQU9zRixPQUFoRCxFQUF5RHhGLFNBQVM7QUFBQSxjQUFLUCxFQUFFMkUsR0FBRixJQUFTLEdBQWQ7QUFBQSxNQUFsRSxFQUhBLEVBSUEsRUFBQ2QsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDckQsUUFBUSxpQkFBT3VGLEtBQWhELEVBQXVEekYsU0FBUztBQUFBLGNBQUtQLEVBQUUyRSxHQUFGLElBQVMsR0FBVCxJQUFnQjNFLEVBQUUyRSxHQUFGLElBQVMsT0FBOUI7QUFBQSxNQUFoRSxFQUpBLENBdEJLLENBWGU7QUF3Q3hCL0IsdUJBQW9CLElBeENJO0FBeUN4QkUsZ0JBQWEsRUF6Q1c7QUEwQ3hCQyxpQkFBYyxFQTFDVTtBQTJDeEJDLGlCQUFjLENBM0NVO0FBNEN4QlQsd0JBQXFCLElBNUNHO0FBNkN4QmIsbUJBQWdCRjtBQTdDUSxFQUExQixDOzs7Ozs7QUNuS0EsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCeUUsVTs7O0FBRW5CLHVCQUFZL0YsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFFakIsV0FBS1MsS0FBTCxHQUFhO0FBQ1htRCxnQkFBUzVELE1BQU1ZLFlBREo7QUFFWEQsY0FBT1gsTUFBTVksWUFGRjtBQUdYb0YsbUJBQVksS0FIRDtBQUlYNUQsZUFBUSx1QkFKRztBQUtYNkQsaUJBQVUsRUFMQztBQU1YQyxhQUFNLEVBTks7QUFPWEMsVUFBRyxDQVBRO0FBUVhDLFVBQUc7QUFSUSxNQUFiOztBQVdBLFdBQUtDLGVBQUwsR0FBdUIsRUFBdkI7O0FBRUF6RyxZQUFPMEcsUUFBUCxHQUFrQjtBQUFBLGNBQU0sTUFBS0MsY0FBTCxFQUFOO0FBQUEsTUFBbEI7QUFmaUI7QUFnQmxCOzt3QkFFREEsYyw2QkFBZ0I7QUFDZCxTQUFHLEtBQUtyRixJQUFMLENBQVVDLFVBQWIsRUFBd0I7QUFDdEIsV0FBTXFGLGFBQWEsZUFBS0MsZ0JBQUwsRUFBbkI7QUFDQSxXQUFNQyxhQUFhLGVBQUtDLGlCQUFMLENBQXVCLEtBQUszRyxLQUFMLENBQVd1QyxNQUFsQyxDQUFuQjtBQUNBLFdBQU1xRSxXQUFXLGVBQUtELGlCQUFMLENBQXVCLEtBQUt6RixJQUFMLENBQVVDLFVBQWpDLEVBQTZDLEtBQUtWLEtBQUwsQ0FBVzBGLENBQXhELEVBQTJELEtBQUsxRixLQUFMLENBQVcyRixDQUF0RSxDQUFqQjs7QUFFQSxXQUFNUyxRQUFRLEVBQWQ7QUFDQSxXQUFJQyxjQUFjeEYsU0FBbEI7QUFDQSxZQUFLLElBQUl5RixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSy9HLEtBQUwsQ0FBV3dDLFNBQVgsQ0FBcUJ3RSxNQUF6QyxFQUFpREQsR0FBakQsRUFBc0Q7QUFDcEQsYUFBTUUsU0FBUyxLQUFLakgsS0FBTCxDQUFXd0MsU0FBWCxDQUFxQnVFLENBQXJCLENBQWY7QUFDQSxhQUFJRyxhQUFKO0FBQ0EsYUFBR0QsVUFBVSxlQUFLeEQsYUFBbEIsRUFBZ0M7QUFDOUJ5RCxrQkFBT1YsV0FBV1csZUFBWCxDQUEyQlAsUUFBM0IsRUFBcUNLLE1BQXJDLENBQVA7QUFDRCxVQUZELE1BRU87QUFDTEMsa0JBQU9SLFdBQVdTLGVBQVgsQ0FBMkJQLFFBQTNCLEVBQXFDSyxNQUFyQyxDQUFQO0FBQ0Q7O0FBRURKLGVBQU1qRixJQUFOLENBQVdzRixJQUFYO0FBQ0EsYUFBR1YsV0FBV1ksUUFBWCxDQUFvQkYsSUFBcEIsQ0FBSCxFQUE2QjtBQUMzQkoseUJBQWNJLElBQWQ7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBRyxDQUFDSixXQUFKLEVBQWdCO0FBQ2RELGVBQU1RLElBQU4sQ0FBVyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxrQkFBVWYsV0FBV2dCLGtCQUFYLENBQThCRCxDQUE5QixFQUFpQ0UsSUFBakMsR0FBd0NqQixXQUFXZ0Isa0JBQVgsQ0FBOEJGLENBQTlCLEVBQWlDRyxJQUFuRjtBQUFBLFVBQVg7QUFDQVgsdUJBQWNELE1BQU0sQ0FBTixDQUFkO0FBQ0Q7O0FBRUQsV0FBR0MsV0FBSCxFQUFlO0FBQ2IsY0FBS25GLFFBQUwsQ0FBYztBQUNad0UsY0FBR1csWUFBWVksVUFESDtBQUVadEIsY0FBR1UsWUFBWWE7QUFGSCxVQUFkO0FBSUQ7QUFDRjtBQUNGLEk7O3dCQUVEQyxjLDJCQUFlM0UsTSxFQUFPO0FBQ3BCLFNBQU00RSxhQUFhLEtBQUtwSCxLQUFMLENBQVdtRCxPQUFYLENBQW1Ca0UsUUFBbkIsRUFBbkI7QUFDQSxTQUFHRCxlQUFlLEdBQWYsSUFBc0IsS0FBS3BILEtBQUwsQ0FBV3VGLFVBQXBDLEVBQStDO0FBQzdDLFlBQUtyRSxRQUFMLENBQWM7QUFDWmlDLGtCQUFTaUUsYUFBYTVFO0FBRFYsUUFBZDtBQUdELE1BSkQsTUFJTztBQUNMLFlBQUt0QixRQUFMLENBQWM7QUFDWnFFLHFCQUFZLElBREE7QUFFWnBDLGtCQUFTWDtBQUZHLFFBQWQ7QUFJRDtBQUNGLEk7O3dCQUVEOEUsSSxpQkFBS0MsSSxFQUFNL0IsUSxFQUFVZ0MsSyxFQUFNO0FBQ3pCLGFBQVFoQyxRQUFSO0FBQ0UsWUFBSyxHQUFMO0FBQ0UsYUFBRyxLQUFLeEYsS0FBTCxDQUFXeUYsSUFBWCxDQUFnQnZGLEtBQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzlCc0gsbUJBQVFELFFBQVFDLFFBQVEsR0FBaEIsQ0FBUjtBQUNEOztBQUVELGdCQUFRRCxPQUFPQyxLQUFmO0FBQ0YsWUFBSyxHQUFMO0FBQ0UsYUFBRyxLQUFLeEgsS0FBTCxDQUFXeUYsSUFBWCxDQUFnQnZGLEtBQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzlCc0gsbUJBQVFELFFBQVFDLFFBQVEsR0FBaEIsQ0FBUjtBQUNEOztBQUVELGdCQUFRRCxPQUFPQyxLQUFmO0FBQ0YsWUFBSyxHQUFMO0FBQ0UsYUFBRyxLQUFLeEgsS0FBTCxDQUFXeUYsSUFBWCxDQUFnQnZGLEtBQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzlCc0gsbUJBQVFBLFFBQVEsR0FBaEI7QUFDRDs7QUFFRCxnQkFBT0QsT0FBT0MsS0FBZDtBQUNGLFlBQUssR0FBTDtBQUNFLGFBQUcsS0FBS3hILEtBQUwsQ0FBV3lGLElBQVgsQ0FBZ0J2RixLQUFoQixJQUF5QixHQUE1QixFQUFnQztBQUM5QnNILG1CQUFRQSxRQUFRLEdBQWhCO0FBQ0Q7O0FBRUQsZ0JBQU9ELE9BQU9DLEtBQWQ7QUFDRjtBQUNFLGVBQU0sc0JBQXNCaEMsUUFBdEIsR0FBaUMsYUFBdkM7QUExQko7QUE0QkQsSTs7d0JBRURpQyxPLHNCQUE0QjtBQUFBLFNBQXBCQyxRQUFvQix1RUFBVCxZQUFNLENBQUUsQ0FBQzs7QUFDMUIsU0FBSXZFLFVBQVUsS0FBS25ELEtBQUwsQ0FBV21ELE9BQXpCO0FBQ0EsU0FBSWpELFFBQVEsS0FBS0YsS0FBTCxDQUFXRSxLQUF2QjtBQUNBLFNBQUl5SCxhQUFhLEtBQWpCO0FBQ0EsU0FBRyxLQUFLM0gsS0FBTCxDQUFXd0YsUUFBWCxDQUFvQnRGLEtBQXZCLEVBQTZCO0FBQzNCaUQsaUJBQVUsS0FBS21FLElBQUwsQ0FBVU0sV0FBVzFILEtBQVgsRUFBa0IsRUFBbEIsQ0FBVixFQUFpQyxLQUFLRixLQUFMLENBQVd3RixRQUFYLENBQW9CdEYsS0FBckQsRUFBNEQwSCxXQUFXekUsT0FBWCxFQUFvQixFQUFwQixDQUE1RCxDQUFWO0FBQ0F3RSxvQkFBYSxJQUFiO0FBQ0Q7O0FBRUR6SCxhQUFRaUQsT0FBUjs7QUFFQSxVQUFLakMsUUFBTCxDQUFjO0FBQ1pzRSxpQkFBVSxFQURFO0FBRVpDLGFBQU0sRUFGTTtBQUdadEMsZ0JBQVNBLE9BSEc7QUFJWmpELGNBQU9BLEtBSks7QUFLWnFGLG1CQUFZO0FBTEEsTUFBZCxFQU1HLFlBQU07QUFDUG1DO0FBQ0QsTUFSRDtBQVNELEk7O3dCQUVERyxhLDBCQUFjckMsUSxFQUFVc0MsUSxFQUFTO0FBQUE7O0FBQy9CLFNBQUcsS0FBSzlILEtBQUwsQ0FBV3VGLFVBQWQsRUFBeUI7QUFDdkIsWUFBS2tDLE9BQUwsQ0FBYSxZQUFNO0FBQ2pCLGdCQUFLdkcsUUFBTCxDQUFjO0FBQ1pxRSx1QkFBWSxLQURBO0FBRVpDLHFCQUFVO0FBQ1J0RixvQkFBT3NGLFFBREM7QUFFUnJDLHNCQUFTMkUsU0FBUzNFO0FBRlY7QUFGRSxVQUFkO0FBT0QsUUFSRDtBQVNELE1BVkQsTUFVTztBQUNMLFlBQUtqQyxRQUFMLENBQWM7QUFDWnNFLG1CQUFVO0FBQ1J0RixrQkFBT3NGLFFBREM7QUFFUnJDLG9CQUFTMkUsU0FBUzNFO0FBRlY7QUFERSxRQUFkO0FBTUQ7QUFDRixJOzt3QkFFRDRFLFksMkJBQWM7QUFDWixTQUFHLEtBQUsvSCxLQUFMLENBQVdtRCxPQUFYLENBQW1CNkUsT0FBbkIsQ0FBMkIsR0FBM0IsTUFBb0MsQ0FBQyxDQUF4QyxFQUEwQztBQUN4QyxZQUFLYixjQUFMLENBQW9CLEdBQXBCO0FBQ0Q7QUFDRixJOzt3QkFFRGMsWSx5QkFBYUgsUSxFQUFTO0FBQ3BCLFNBQUcsS0FBSzlILEtBQUwsQ0FBV3dGLFFBQVgsQ0FBb0J0RixLQUF2QixFQUE2QjtBQUMzQixZQUFLZ0IsUUFBTCxDQUFjLEVBQUN1RSxNQUFNO0FBQ25CdkYsa0JBQU0sR0FEYTtBQUVuQmlELG9CQUFTMkUsU0FBUzNFO0FBRkMsVUFBUCxFQUFkO0FBSUQsTUFMRCxNQUtPO0FBQ0wsWUFBS2pDLFFBQUwsQ0FBYyxFQUFDaUMsU0FBUyxLQUFLbkQsS0FBTCxDQUFXbUQsT0FBWCxHQUFxQixHQUEvQixFQUFkO0FBQ0Q7QUFDRixJOzt3QkFFRCtFLEssb0JBQU87QUFDTCxTQUFHLEtBQUtsSSxLQUFMLENBQVd1RixVQUFkLEVBQXlCO0FBQ3ZCLFlBQUtyRSxRQUFMLENBQWM7QUFDWmlDLGtCQUFTLEdBREc7QUFFWm9DLHFCQUFZLEtBRkE7QUFHWkUsZUFBTTtBQUhNLFFBQWQ7QUFLRDtBQUNGLEk7O3dCQUVEMUIsUSx1QkFBVTtBQUNSLFVBQUs3QyxRQUFMLENBQWM7QUFDWmlDLGdCQUFTLEdBREc7QUFFWmpELGNBQU8sR0FGSztBQUdac0YsaUJBQVUsRUFIRTtBQUlaRCxtQkFBWSxLQUpBO0FBS1pFLGFBQU07QUFMTSxNQUFkO0FBT0QsSTs7d0JBRUQwQyxNLHNCQUFRO0FBQ04sU0FBRyxLQUFLbkksS0FBTCxDQUFXdUYsVUFBZCxFQUF5QjtBQUN2QixXQUFNNkMsV0FBVyxFQUFqQjtBQUNBLFdBQUlDLGFBQWEsS0FBS3JJLEtBQUwsQ0FBV21ELE9BQVgsQ0FBbUJrRSxRQUFuQixFQUFqQjtBQUNBLFdBQUdnQixlQUFlLEdBQWxCLEVBQXNCO0FBQ3BCRCxrQkFBUyxNQUFULElBQW1CLEVBQW5CO0FBQ0Q7QUFDREMsb0JBQWFBLFdBQVdDLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJELFdBQVc5QixNQUFYLEdBQW9CLENBQXpDLENBQWI7QUFDQTZCLGdCQUFTLFNBQVQsSUFBc0IsQ0FBQ0MsVUFBRCxHQUFjLENBQWQsR0FBa0JBLFVBQXhDO0FBQ0EsWUFBS25ILFFBQUwsQ0FBY2tILFFBQWQ7QUFDRDtBQUNGLEk7O3dCQUVERyxpQixnQ0FBbUI7QUFDakIsVUFBS3pDLGNBQUw7QUFDRCxJOzt3QkFFRDBDLEcsa0JBQUs7QUFDSCxTQUFHLEtBQUtqSixLQUFMLENBQVdrSixZQUFkLEVBQTRCLEtBQUtsSixLQUFMLENBQVdrSixZQUFYLENBQXdCLEtBQUt6SSxLQUFMLENBQVdFLEtBQW5DO0FBQzdCLEk7O3dCQUVEd0ksSyxvQkFBTztBQUNMLFVBQUtuSixLQUFMLENBQVdvSixZQUFYO0FBQ0QsSTs7d0JBRURDLGEsMEJBQWNkLFEsRUFBVWUsSyxFQUFNO0FBQzVCLHNCQUFPdkosZ0JBQVAsR0FBMEIsSUFBMUI7QUFDQXdJLGNBQVNoSSxNQUFULENBQWdCLElBQWhCLEVBQXNCZ0ksUUFBdEIsRUFBZ0NlLEtBQWhDO0FBQ0QsSTs7d0JBRUR0SCxNLHFCQUFRO0FBQUE7O0FBQ04sU0FBTXhCLFNBQVMsa0JBQVErSSxVQUFSLEVBQWY7QUFDQSxTQUFNNUYsUUFBUSxFQUFDNkYsMEJBQXdCLEtBQUsvSSxLQUFMLENBQVcwRixDQUFuQyxZQUEyQyxLQUFLMUYsS0FBTCxDQUFXMkYsQ0FBdEQsUUFBRCxFQUFkO0FBQ0EsU0FBRyxLQUFLcEcsS0FBTCxDQUFXMkMsTUFBWCxLQUFzQnJCLFNBQXpCLEVBQW1DO0FBQ2pDcUMsYUFBTSxRQUFOLElBQWtCLEtBQUszRCxLQUFMLENBQVcyQyxNQUE3QjtBQUNEO0FBQ0QsWUFDRTtBQUFBO0FBQUEsU0FBSyxLQUFJLFlBQVQsRUFBc0IsV0FBVSw4QkFBaEMsRUFBK0QsT0FBT2dCLEtBQXRFLEVBQTZFLFNBQVM7QUFBQSxrQkFBSyxpQkFBTzVELGdCQUFQLFNBQUw7QUFBQSxVQUF0RjtBQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUscUNBQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLDJDQUFmLEVBQTJELE9BQU8sRUFBQ2tFLE9BQVMsS0FBS2pFLEtBQUwsQ0FBVzRDLFdBQVgsR0FBeUIsQ0FBMUIsR0FBZ0MsS0FBSzVDLEtBQUwsQ0FBVzhDLFlBQVgsR0FBMEIsQ0FBM0QsR0FBaUUsS0FBS3VELGVBQTlFLEVBQWxFO0FBQ0csZ0JBQUtyRyxLQUFMLENBQVdzQztBQURkLFVBREY7QUFJRTtBQUFBO0FBQUEsYUFBSyxXQUFVLDRDQUFmO0FBQ0U7QUFDRSx3QkFBVSwyQ0FEWjtBQUVFLHNCQUFTLEtBQUt0QyxLQUFMLENBQVd5QyxXQUZ0QjtBQUdFLHNCQUFTO0FBQUEsc0JBQU0sT0FBSzBHLEtBQUwsRUFBTjtBQUFBLGNBSFg7QUFJRSxvQkFBTyxLQUFLOUMsZUFKZDtBQUtFLHFCQUFRLEtBQUtBLGVBTGY7QUFNRSxxQkFBUSxLQUFLckcsS0FBTCxDQUFXOEM7QUFOckI7QUFERjtBQUpGLFFBREY7QUFnQkU7QUFBQTtBQUFBLFdBQUssV0FBVSxzQ0FBZixFQUFzRCxPQUFPLEVBQUMyRyxRQUFRLEtBQUt6SixLQUFMLENBQVc4QyxZQUFwQixFQUE3RDtBQUNFO0FBQUE7QUFBQSxhQUFLLFdBQVUsK0NBQWY7QUFBZ0UsZ0JBQUtyQyxLQUFMLENBQVd3RixRQUFYLENBQW9CckM7QUFBcEYsVUFERjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsNkNBQWY7QUFDRyxrQ0FBUSxLQUFLbkQsS0FBTCxDQUFXbUQsT0FBbkIsRUFBNEJ4QixNQUE1QixDQUFtQyxLQUFLM0IsS0FBTCxDQUFXMkIsTUFBOUMsQ0FESDtBQUMwRCxnQkFBSzNCLEtBQUwsQ0FBV3lGLElBQVgsQ0FBZ0J0QztBQUQxRTtBQUZGLFFBaEJGO0FBc0JHLFlBQUs1RCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ5SixHQUFuQixDQUF1QixVQUFDdkosR0FBRCxFQUFNd0osTUFBTixFQUFpQjtBQUN2QyxnQkFDRTtBQUFBO0FBQUEsYUFBSyxLQUFLQSxNQUFWLEVBQWtCLFdBQVUsc0NBQTVCO0FBQ0d4SixlQUFJdUosR0FBSixDQUFRLFVBQUN0SixHQUFELEVBQU13SixNQUFOLEVBQWlCO0FBQ3hCLG9CQUNFO0FBQ0Usb0JBQUs7QUFBQSx3QkFBUXhKLElBQUl5SixTQUFKLEdBQWdCQyxJQUF4QjtBQUFBLGdCQURQO0FBRUUsMkJBQVlGLFNBQVMsQ0FBVCxHQUFhekosSUFBSXlKLFNBQVMsQ0FBYixDQUFiLEdBQStCLElBRjdDO0FBR0Usb0JBQUtELFNBQVMsR0FBVCxHQUFlQyxNQUh0QjtBQUlFLDBCQUFXeEosSUFBSThCLFNBSmpCO0FBS0Usc0JBQU85QixJQUFJdUQsS0FMYjtBQU1FLHFCQUFNdkQsSUFBSTRELElBTlo7QUFPRSx3QkFBUzVELElBQUl3RCxPQVBmO0FBUUUsd0JBQVM7QUFBQSx3QkFBSyxPQUFLeUYsYUFBTCxDQUFtQmpKLEdBQW5CLEVBQXdCTixDQUF4QixDQUFMO0FBQUEsZ0JBUlg7QUFTRSxzQkFBTyxPQUFLRSxLQUFMLENBQVc0QyxXQVRwQjtBQVVFLHVCQUFRLE9BQUs1QyxLQUFMLENBQVc2QyxZQVZyQjtBQVdFLHVCQUFRLE9BQUs3QyxLQUFMLENBQVc4QztBQVhyQixlQURGO0FBZUQsWUFoQkE7QUFESCxVQURGO0FBcUJELFFBdEJBO0FBdEJILE1BREY7QUFnREQsSTs7O0dBM1FxQyxnQkFBTUMsUzs7bUJBQXpCZ0QsVTs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQmdFLE07OztBQUVuQixtQkFBWS9KLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2Q0FDakIsNEJBQU1BLEtBQU4sQ0FEaUI7QUFFbEI7O29CQUVEZ0ssTyxvQkFBUWxLLEMsRUFBRTtBQUNSQSxPQUFFUSxjQUFGO0FBQ0EsVUFBS04sS0FBTCxDQUFXZ0ssT0FBWCxDQUFtQmxLLENBQW5CO0FBQ0EsWUFBTyxLQUFQO0FBQ0QsSTs7b0JBRURtSyxjLDZCQUFnQjtBQUNkLFNBQU10RyxRQUFRO0FBQ1pNLGNBQU8sS0FBS2pFLEtBQUwsQ0FBV2lFLEtBRE47QUFFWkMsZUFBUSxLQUFLbEUsS0FBTCxDQUFXa0U7QUFGUCxNQUFkOztBQUtBLFNBQUcsS0FBS2xFLEtBQUwsQ0FBV3lKLE1BQWQsRUFBcUI7QUFDbkI5RixhQUFNOEYsTUFBTixHQUFlLEtBQUt6SixLQUFMLENBQVd5SixNQUExQjtBQUNEOztBQUVELFNBQUcsS0FBS3pKLEtBQUwsQ0FBV2dFLElBQWQsRUFBbUI7QUFDakJMLGFBQU11RyxRQUFOLEdBQWlCLFVBQWpCO0FBQ0EsV0FBRyxLQUFLbEssS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQkUsTUFBaEIsSUFBMEIsQ0FBN0IsRUFBK0I7QUFDN0IsYUFBTWlHLGNBQWMsS0FBS25LLEtBQUwsQ0FBV3lKLE1BQVgsSUFBcUIsQ0FBQyxLQUFLekosS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQkUsTUFBaEIsR0FBeUIsQ0FBMUIsSUFBK0IsQ0FBcEQsQ0FBcEI7QUFDQVAsZUFBTU8sTUFBTixHQUFnQlAsTUFBTU8sTUFBTixHQUFlLEtBQUtsRSxLQUFMLENBQVdnRSxJQUFYLENBQWdCRSxNQUFoQyxHQUEwQ2lHLFdBQXpEO0FBQ0F4RyxlQUFNeUcsR0FBTixHQUFZLEVBQUcsS0FBS3BLLEtBQUwsQ0FBV2tFLE1BQVgsSUFBcUIsS0FBS2xFLEtBQUwsQ0FBV2dFLElBQVgsQ0FBZ0JFLE1BQWhCLEdBQXlCLENBQTlDLENBQUQsR0FBcURpRyxXQUF2RCxDQUFaO0FBQ0Q7O0FBRUQsV0FBRyxLQUFLbkssS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQkMsS0FBaEIsSUFBeUIsQ0FBNUIsRUFBOEI7QUFDNUIsYUFBTWtHLGVBQWMsS0FBS25LLEtBQUwsQ0FBV3lKLE1BQVgsSUFBcUIsQ0FBQyxLQUFLekosS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQkMsS0FBaEIsR0FBd0IsQ0FBekIsSUFBOEIsQ0FBbkQsQ0FBcEI7QUFDQU4sZUFBTU0sS0FBTixHQUFlTixNQUFNTSxLQUFOLEdBQWMsS0FBS2pFLEtBQUwsQ0FBV2dFLElBQVgsQ0FBZ0JDLEtBQS9CLEdBQXdDa0csWUFBdEQ7QUFDRDtBQUNGOztBQUVELFNBQUcsS0FBS25LLEtBQUwsQ0FBV3FLLFVBQVgsSUFBeUIsS0FBS3JLLEtBQUwsQ0FBV3FLLFVBQVgsQ0FBc0JyRyxJQUEvQyxJQUF1RCxLQUFLaEUsS0FBTCxDQUFXcUssVUFBWCxDQUFzQnJHLElBQXRCLENBQTJCQyxLQUFsRixJQUEyRixLQUFLakUsS0FBTCxDQUFXcUssVUFBWCxDQUFzQnJHLElBQXRCLENBQTJCQyxLQUEzQixJQUFvQyxDQUFsSSxFQUFvSTtBQUNsSSxXQUFNa0csZ0JBQWMsS0FBS25LLEtBQUwsQ0FBV3lKLE1BQVgsSUFBc0IsS0FBS3pKLEtBQUwsQ0FBV3FLLFVBQVgsQ0FBc0JyRyxJQUF0QixDQUEyQkMsS0FBM0IsR0FBbUMsQ0FBcEMsR0FBeUMsQ0FBOUQsQ0FBcEI7QUFDQU4sYUFBTTJHLFVBQU4sR0FBb0IsS0FBS3RLLEtBQUwsQ0FBV2lFLEtBQVgsR0FBbUIsS0FBS2pFLEtBQUwsQ0FBV3FLLFVBQVgsQ0FBc0JyRyxJQUF0QixDQUEyQkMsS0FBL0MsR0FBd0RrRyxhQUEzRTtBQUNEOztBQUVELFlBQU94RyxLQUFQO0FBQ0QsSTs7b0JBRUQzQixNLHFCQUFRO0FBQUE7O0FBQ04sWUFDRTtBQUFBO0FBQUE7QUFDRSxjQUFJLFNBRE47QUFFRSxvQkFBVywwQkFDVCxxQ0FEUyxFQUVULEtBQUtoQyxLQUFMLENBQVcyRCxLQUFYLEdBQW1CLHlDQUF5QyxLQUFLM0QsS0FBTCxDQUFXMkQsS0FBdkUsR0FBK0VyQyxTQUZ0RSxFQUdULEtBQUt0QixLQUFMLENBQVdrQyxTQUhGLENBRmI7QUFPRSxnQkFBTyxLQUFLK0gsY0FBTCxFQVBUO0FBUUUsa0JBQVM7QUFBQSxrQkFBSyxPQUFLRCxPQUFMLENBQWFsSyxDQUFiLENBQUw7QUFBQTtBQVJYO0FBVUcsWUFBS0UsS0FBTCxDQUFXNEQ7QUFWZCxNQURGO0FBY0QsSTs7O0dBM0RpQyxnQkFBTWIsUzs7bUJBQXJCZ0gsTTs7Ozs7O0FDSHJCLGdEOzs7Ozs7Ozs7Ozs7Ozs7O0tDQXFCckssSTtBQUVuQixpQkFBWTBLLEdBQVosRUFBaUJwQyxJQUFqQixFQUF1Qi9ELEtBQXZCLEVBQThCQyxNQUE5QixFQUFzRTtBQUFBLFNBQWhDd0QsVUFBZ0MsdUVBQW5CLENBQW1CO0FBQUEsU0FBaEJDLFVBQWdCLHVFQUFILENBQUc7O0FBQUE7O0FBQ3BFLFVBQUt5QyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLcEMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBSy9ELEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUt3RCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7O2tCQThCRDRDLGEsMEJBQWN0RyxLLEVBQU9DLE0sRUFBTztBQUMxQixTQUFNc0csU0FBUztBQUNickUsVUFBRyxLQUFLNkIsSUFBTCxHQUFhLEtBQUsvRCxLQUFMLEdBQWEsQ0FEaEI7QUFFYm1DLFVBQUcsS0FBS2dFLEdBQUwsR0FBWSxLQUFLbEcsTUFBTCxHQUFjO0FBRmhCLE1BQWY7O0FBS0EsWUFBTyxJQUFJeEUsSUFBSixDQUNMOEssT0FBT3BFLENBQVAsR0FBWWxDLFNBQVMsQ0FEaEIsRUFFTHNHLE9BQU9yRSxDQUFQLEdBQVlsQyxRQUFRLENBRmYsRUFHTEEsS0FISyxFQUlMQyxNQUpLLENBQVA7QUFNRCxJOztrQkFFRHVHLEssb0JBQU87QUFDTCxZQUFPLElBQUkvSyxJQUFKLENBQ0wsS0FBSzBLLEdBREEsRUFFTCxLQUFLcEMsSUFGQSxFQUdMLEtBQUsvRCxLQUhBLEVBSUwsS0FBS0MsTUFKQSxFQUtMLEtBQUt3RCxVQUxBLEVBTUwsS0FBS0MsVUFOQSxDQUFQO0FBUUQsSTs7a0JBRUQ2QixTLHNCQUFVckQsQyxFQUFHQyxDLEVBQUU7QUFDYixVQUFLZ0UsR0FBTCxHQUFXLEtBQUtNLFNBQUwsR0FBaUJ0RSxDQUE1QjtBQUNBLFVBQUs0QixJQUFMLEdBQVksS0FBSzJDLFVBQUwsR0FBa0J4RSxDQUE5QjtBQUNBLFVBQUt1QixVQUFMLEdBQWtCdkIsQ0FBbEI7QUFDQSxVQUFLd0IsVUFBTCxHQUFrQnZCLENBQWxCO0FBQ0EsWUFBTyxJQUFQO0FBQ0QsSTs7a0JBRURnQixRLHFCQUFTRixJLEVBQUs7QUFDWixTQUFNMEQsU0FBUyxLQUFLNUMsSUFBTCxJQUFhZCxLQUFLYyxJQUFsQixJQUViLEtBQUtDLEtBQUwsSUFBY2YsS0FBS2UsS0FGTixJQUliLEtBQUttQyxHQUFMLElBQVlsRCxLQUFLa0QsR0FKSixJQU1iLEtBQUtTLE1BQUwsSUFBZTNELEtBQUsyRCxNQU50QjtBQU9BLFlBQU9ELE1BQVA7QUFDRCxJOztrQkFFREUsSSxtQkFBTTtBQUNKLFlBQU87QUFDTFYsWUFBSyxLQUFLQSxHQURMO0FBRUxwQyxhQUFNLEtBQUtBLElBRk47QUFHTDZDLGVBQVEsS0FBS0EsTUFIUjtBQUlMNUMsY0FBTyxLQUFLQSxLQUpQO0FBS0xoRSxjQUFPLEtBQUtBLEtBTFA7QUFNTEMsZUFBUSxLQUFLQSxNQU5SO0FBT0x3RyxrQkFBVyxLQUFLQSxTQVBYO0FBUUxDLG1CQUFZLEtBQUtBLFVBUlo7QUFTTEkscUJBQWMsS0FBS0EsWUFUZDtBQVVMQyxvQkFBYSxLQUFLQSxXQVZiO0FBV0x0RCxtQkFBWSxLQUFLQSxVQVhaO0FBWUxDLG1CQUFZLEtBQUtBO0FBWlosTUFBUDtBQWNELEk7O2tCQUVEUixlLDRCQUFnQkQsSSxFQUFNZ0QsUSxFQUFTO0FBQzdCLGFBQU9BLFFBQVA7QUFDRSxZQUFLeEssS0FBSzJELFlBQVY7QUFDRSxnQkFBTzZELEtBQUt1RCxLQUFMLEdBQWFqQixTQUFiLENBQ0wsS0FBS3hCLElBQUwsR0FBWWQsS0FBS3lELFVBRFosRUFFTCxLQUFLRSxNQUFMLEdBQWMzRCxLQUFLd0QsU0FGZCxDQUFQO0FBSUYsWUFBS2hMLEtBQUs0RCxXQUFWO0FBQ0UsZ0JBQU80RCxLQUFLdUQsS0FBTCxHQUFhakIsU0FBYixDQUNMLEtBQUt2QixLQUFMLEdBQWFmLEtBQUs4RCxXQURiLEVBRUwsS0FBS0gsTUFBTCxHQUFjM0QsS0FBS3dELFNBRmQsQ0FBUDtBQUlGLFlBQUtoTCxLQUFLOEQsUUFBVjtBQUNFLGdCQUFPMEQsS0FBS3VELEtBQUwsR0FBYWpCLFNBQWIsQ0FDTCxLQUFLdkIsS0FBTCxHQUFhZixLQUFLOEQsV0FEYixFQUVMLEtBQUtaLEdBQUwsR0FBV2xELEtBQUs2RCxZQUZYLENBQVA7QUFJRixZQUFLckwsS0FBSzZELFNBQVY7QUFDRSxnQkFBTzJELEtBQUt1RCxLQUFMLEdBQWFqQixTQUFiLENBQ0wsS0FBS3hCLElBQUwsR0FBWWQsS0FBS3lELFVBRFosRUFFTCxLQUFLUCxHQUFMLEdBQVdsRCxLQUFLNkQsWUFGWCxDQUFQO0FBSUYsWUFBS3JMLEtBQUsrRCxhQUFWO0FBQ0UsYUFBTXdILGVBQWUsS0FBS1YsYUFBTCxDQUFtQnJELEtBQUtqRCxLQUF4QixFQUErQmlELEtBQUtoRCxNQUFwQyxDQUFyQjtBQUNBLGdCQUFPZ0QsS0FBS3VELEtBQUwsR0FBYWpCLFNBQWIsQ0FDTHlCLGFBQWFqRCxJQUFiLEdBQW9CZCxLQUFLeUQsVUFEcEIsRUFFTE0sYUFBYWIsR0FBYixHQUFtQmxELEtBQUt3RCxTQUZuQixDQUFQO0FBSUY7QUFDRSxlQUFNLDBCQUEwQlIsUUFBMUIsR0FBcUMsZ0JBQTNDO0FBNUJKO0FBOEJELEk7O2tCQUVEMUMsa0IsK0JBQW1CTixJLEVBQUs7QUFDdEIsU0FBTWtELE1BQU1jLEtBQUtDLEdBQUwsQ0FBUyxLQUFLZixHQUFkLEVBQW1CbEQsS0FBS2tELEdBQXhCLENBQVo7QUFDQSxTQUFNcEMsT0FBT2tELEtBQUtDLEdBQUwsQ0FBUyxLQUFLbkQsSUFBZCxFQUFvQmQsS0FBS2MsSUFBekIsQ0FBYjtBQUNBLFNBQU1DLFFBQVFpRCxLQUFLRSxHQUFMLENBQVMsS0FBS25ELEtBQWQsRUFBcUJmLEtBQUtlLEtBQTFCLENBQWQ7QUFDQSxTQUFNNEMsU0FBU0ssS0FBS0UsR0FBTCxDQUFTLEtBQUtQLE1BQWQsRUFBc0IzRCxLQUFLMkQsTUFBM0IsQ0FBZjs7QUFFQSxTQUFJNUcsUUFBUWdFLFFBQVFELElBQXBCO0FBQ0EsU0FBSTlELFNBQVMyRyxTQUFTVCxHQUF0QjtBQUNBLFNBQUluRyxRQUFRLENBQVIsSUFBYUMsU0FBUyxDQUExQixFQUE2QjtBQUN6QixjQUFPLElBQUl4RSxJQUFKLENBQVMwSyxHQUFULEVBQWNwQyxJQUFkLEVBQW9CL0QsS0FBcEIsRUFBMkJDLE1BQTNCLENBQVA7QUFDSCxNQUZELE1BRU87QUFDSCxjQUFPLElBQVA7QUFDSDtBQUNGLEk7Ozs7eUJBdklXO0FBQ1YsY0FBTyxLQUFLa0csR0FBTCxHQUFXLEtBQUtsRyxNQUF2QjtBQUNEOzs7eUJBRVU7QUFDVCxjQUFPLEtBQUs4RCxJQUFMLEdBQVksS0FBSy9ELEtBQXhCO0FBQ0Q7Ozt5QkFFYztBQUNiLGNBQU8sS0FBS21HLEdBQUwsR0FBVyxLQUFLekMsVUFBdkI7QUFDRDs7O3lCQUVlO0FBQ2QsY0FBTyxLQUFLSyxJQUFMLEdBQVksS0FBS04sVUFBeEI7QUFDRDs7O3lCQUVpQjtBQUNoQixjQUFPLEtBQUtnRCxTQUFMLEdBQWlCLEtBQUt4RyxNQUE3QjtBQUNEOzs7eUJBRWdCO0FBQ2YsY0FBTyxLQUFLeUcsVUFBTCxHQUFrQixLQUFLMUcsS0FBOUI7QUFDRDs7O3lCQUVTO0FBQ1IsY0FBTyxLQUFLQSxLQUFMLEdBQWEsS0FBS0MsTUFBekI7QUFDRDs7Ozs7O21CQXJDa0J4RSxJOzs7QUFxSnJCQSxNQUFLaUgsaUJBQUwsR0FBeUIsVUFBQ21ELElBQUQsRUFBMEM7QUFBQSxPQUFuQ3BDLFVBQW1DLHVFQUF0QixDQUFzQjtBQUFBLE9BQW5CQyxVQUFtQix1RUFBTixDQUFNOztBQUNqRSxPQUFHLENBQUNtQyxJQUFKLEVBQVM7QUFDUCxZQUFPLElBQUlwSyxJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUFQO0FBQ0Q7QUFDRCxPQUFNMkwsZUFBZXZCLEtBQUt3QixxQkFBTCxFQUFyQjs7QUFHQSxPQUFNQyxPQUFPQyxTQUFTRCxJQUF0QjtBQUNBLE9BQU1FLFFBQVFELFNBQVNFLGVBQXZCOztBQUVBLE9BQU1DLFlBQVkvTCxPQUFPZ00sV0FBUCxJQUFzQkgsTUFBTUUsU0FBNUIsSUFBeUNKLEtBQUtJLFNBQWhFO0FBQ0EsT0FBTUUsYUFBYWpNLE9BQU9rTSxXQUFQLElBQXNCTCxNQUFNSSxVQUE1QixJQUEwQ04sS0FBS00sVUFBbEU7O0FBRUEsT0FBTUUsWUFBWU4sTUFBTU0sU0FBTixJQUFtQlIsS0FBS1EsU0FBeEIsSUFBcUMsQ0FBdkQ7QUFDQSxPQUFNQyxhQUFhUCxNQUFNTyxVQUFOLElBQW9CVCxLQUFLUyxVQUF6QixJQUF1QyxDQUExRDs7QUFFQSxVQUFPLElBQUl0TSxJQUFKLENBQ0wyTCxhQUFhakIsR0FBYixHQUFtQnVCLFNBQW5CLEdBQStCSSxTQUQxQixFQUVMVixhQUFhckQsSUFBYixHQUFvQjZELFVBQXBCLEdBQWlDRyxVQUY1QixFQUdMWCxhQUFhcEgsS0FIUixFQUlMb0gsYUFBYW5ILE1BSlIsRUFLTHdELFVBTEssRUFNTEMsVUFOSyxDQUFQO0FBUUQsRUF4QkQ7O0FBMEJBakksTUFBSytHLGdCQUFMLEdBQXdCLFlBQU07QUFDNUIsVUFBTyxJQUFJL0csSUFBSixDQUNMRSxPQUFPZ00sV0FBUCxJQUFzQkosU0FBU0UsZUFBVCxDQUF5QkMsU0FEMUMsRUFFTC9MLE9BQU9rTSxXQUFQLElBQXNCTixTQUFTRSxlQUFULENBQXlCRyxVQUYxQyxFQUdMTCxTQUFTRSxlQUFULENBQXlCTyxXQUhwQixFQUlMVCxTQUFTRSxlQUFULENBQXlCUSxZQUpwQixDQUFQO0FBTUQsRUFQRDs7QUFTQUMsUUFBT0MsY0FBUCxDQUFzQjFNLElBQXRCLEVBQTRCLFdBQTVCLEVBQXlDO0FBQ3ZDMk0sZUFBWSxLQUQyQjtBQUV2Q0MsaUJBQWMsS0FGeUI7QUFHdkNDLGFBQVUsS0FINkI7QUFJdkM1TCxVQUFPO0FBSmdDLEVBQXpDOztBQU9Bd0wsUUFBT0MsY0FBUCxDQUFzQjFNLElBQXRCLEVBQTRCLFVBQTVCLEVBQXdDO0FBQ3RDMk0sZUFBWSxLQUQwQjtBQUV0Q0MsaUJBQWMsS0FGd0I7QUFHdENDLGFBQVUsS0FINEI7QUFJdEM1TCxVQUFPO0FBSitCLEVBQXhDOztBQU9Bd0wsUUFBT0MsY0FBUCxDQUFzQjFNLElBQXRCLEVBQTRCLGNBQTVCLEVBQTRDO0FBQzFDMk0sZUFBWSxLQUQ4QjtBQUUxQ0MsaUJBQWMsS0FGNEI7QUFHMUNDLGFBQVUsS0FIZ0M7QUFJMUM1TCxVQUFPO0FBSm1DLEVBQTVDOztBQU9Bd0wsUUFBT0MsY0FBUCxDQUFzQjFNLElBQXRCLEVBQTRCLGFBQTVCLEVBQTJDO0FBQ3pDMk0sZUFBWSxLQUQ2QjtBQUV6Q0MsaUJBQWMsS0FGMkI7QUFHekNDLGFBQVUsS0FIK0I7QUFJekM1TCxVQUFPO0FBSmtDLEVBQTNDOztBQU9Bd0wsUUFBT0MsY0FBUCxDQUFzQjFNLElBQXRCLEVBQTRCLGVBQTVCLEVBQTZDO0FBQzNDMk0sZUFBWSxLQUQrQjtBQUUzQ0MsaUJBQWMsS0FGNkI7QUFHM0NDLGFBQVUsS0FIaUM7QUFJM0M1TCxVQUFPO0FBSm9DLEVBQTdDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7S0NwTk02TCxNOzs7Ozs7O3lCQUVrQjtBQUNwQixjQUFPLEtBQUtDLGlCQUFaO0FBQ0QsTTt1QkFFb0I5TCxLLEVBQU07QUFDekIsWUFBSzhMLGlCQUFMLEdBQXlCOUwsS0FBekI7QUFDRDs7Ozs7O0FBR0gsS0FBTStMLElBQUksSUFBSUYsTUFBSixFQUFWO21CQUNlRSxDOzs7Ozs7QUNaZixpRDs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxLQUFNL00sU0FBVTtBQUNkMEYsUUFBSyxhQUFTMEMsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUNsQ3ZCLFVBQUtILGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxJQUhhO0FBSWR0QyxRQUFLLGFBQVN5QyxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ2xDdkIsVUFBS0gsY0FBTCxDQUFvQixHQUFwQjtBQUNELElBTmE7QUFPZHJDLFVBQU8sZUFBU3dDLElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDcEN2QixVQUFLSCxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsSUFUYTtBQVVkM0MsU0FBTSxjQUFTOEMsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUNuQ3ZCLFVBQUtILGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxJQVphO0FBYWQxQyxTQUFNLGNBQVM2QyxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ25DdkIsVUFBS0gsY0FBTCxDQUFvQixHQUFwQjtBQUNELElBZmE7QUFnQmR6QyxRQUFLLGFBQVM0QyxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ2xDdkIsVUFBS0gsY0FBTCxDQUFvQixHQUFwQjtBQUNELElBbEJhO0FBbUJkL0MsVUFBTyxlQUFTa0QsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUNwQ3ZCLFVBQUtILGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxJQXJCYTtBQXNCZDlDLFVBQU8sZUFBU2lELElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDcEN2QixVQUFLSCxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsSUF4QmE7QUF5QmQ3QyxTQUFNLGNBQVNnRCxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ25DdkIsVUFBS0gsY0FBTCxDQUFvQixHQUFwQjtBQUNELElBM0JhO0FBNEJkbkMsU0FBTSxjQUFTc0MsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUNuQ3ZCLFVBQUtILGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxJQTlCYTtBQStCZGxDLGVBQVksb0JBQVNxQyxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ3pDdkIsVUFBS0gsY0FBTCxDQUFvQixJQUFwQjtBQUNELElBakNhO0FBa0NkL0IsWUFBUyxpQkFBU2tDLElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDdEN2QixVQUFLUyxZQUFMO0FBQ0QsSUFwQ2E7QUFxQ2Q3RCxZQUFTLGlCQUFTb0QsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUN0Q3ZCLFVBQUtXLFlBQUwsQ0FBa0JILFFBQWxCO0FBQ0QsSUF2Q2E7QUF3Q2QvQyxTQUFNLGNBQVN1QyxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ25DdkIsVUFBS08sYUFBTCxDQUFtQixHQUFuQixFQUF3QkMsUUFBeEI7QUFDRCxJQTFDYTtBQTJDZG5ELFVBQU8sZUFBUzJDLElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDcEN2QixVQUFLTyxhQUFMLENBQW1CLEdBQW5CLEVBQXdCQyxRQUF4QjtBQUNELElBN0NhO0FBOENkdkQsbUJBQWdCLHdCQUFTK0MsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUM3Q3ZCLFVBQUtPLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0JDLFFBQXhCO0FBQ0QsSUFoRGE7QUFpRGQzRCxhQUFVLGtCQUFTbUQsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUN2Q3ZCLFVBQUtPLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0JDLFFBQXhCO0FBQ0QsSUFuRGE7QUFvRGR6QyxVQUFPLGVBQVNpQyxJQUFULEVBQWVRLFFBQWYsRUFBeUJlLEtBQXpCLEVBQStCO0FBQ3BDdkIsVUFBS0csT0FBTCxDQUFhLFlBQU07QUFDakJILFlBQUtrQixHQUFMO0FBQ0EsV0FBR2xCLEtBQUsvSCxLQUFMLENBQVcwQyxrQkFBZCxFQUFpQztBQUMvQnFGLGNBQUtvQixLQUFMO0FBQ0Q7QUFDRixNQUxEO0FBTUQsSUEzRGE7QUE0RGQzRSxhQUFVLGtCQUFTdUQsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUN2Q3ZCLFVBQUt2RCxRQUFMO0FBQ0QsSUE5RGE7QUErRGRtRSxVQUFPLGVBQVNaLElBQVQsRUFBZVEsUUFBZixFQUF5QmUsS0FBekIsRUFBK0I7QUFDcEN2QixVQUFLWSxLQUFMO0FBQ0QsSUFqRWE7QUFrRWRqRSxjQUFXLG1CQUFTcUQsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZSxLQUF6QixFQUErQjtBQUN4Q3ZCLFVBQUthLE1BQUw7QUFDRDtBQXBFYSxFQUFoQjs7bUJBdUVlakosTSIsImZpbGUiOiJyZWFjdC1jYWxjcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcIm51bWVyYWwvbG9jYWxlc1wiLCBcImNsYXNzLW5hbWVzXCIsIFwicmVhY3QtcG9ydGFsXCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wibnVtZXJhbFwiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJjbGFzc05hbWVzXCJdLCByb290W1wiUG9ydGFsXCJdLCByb290W1wiUHJvcFR5cGVzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ODk2NWVhMGNjZjFjZWQ3ZGI3NyIsImltcG9ydCBDYWxjUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9DYWxjUGlja2VyJztcbmltcG9ydCBSZWN0IGZyb20gJy4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2NsYXNzZXMvQWN0aW9uJ1xuXG5leHBvcnQge0NhbGNQaWNrZXIsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZihHbG9iYWwuY3VycmVudENhbGNsYXRvcil7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgaWYoYnRuLmtleURvd24gJiYgYnRuLmtleURvd24oZSkpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnRuLmFjdGlvbihHbG9iYWwuY3VycmVudENhbGNsYXRvciwgYnRuLCBlKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBuZXh0UHJvcHMubG9jYWxlKXtcbiAgICAgIG51bWVyYWwubG9jYWxlKG5leHRQcm9wcy5sb2NhbGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSBwcmV2U3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PT0gdHJ1ZSl7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpcy5yZWZzLmNhbGN1bGF0b3JcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSBuZXh0U3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgaWYobmV4dFN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSB0cnVlICYmIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID09PSB0aGlzLnJlZnMuY2FsY3VsYXRvcil7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1BpY2tlcihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYodGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cCl7XG4gICAgICBsZXQgYWxyZWFkeU9wZW5kID0gZmFsc2VcbiAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAuZm9yRWFjaChwaWNrZXIgPT4ge1xuICAgICAgICBpZihwaWNrZXIgPT09IHRoaXMpIGFscmVhZHlPcGVuZCA9IHRydWVcbiAgICAgICAgaWYocGlja2VyLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgICBwaWNrZXIuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmKCFhbHJlYWR5T3BlbmQpe1xuICAgICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLnB1c2godGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IHRydWV9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlUG9ydGFsKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3JlYWN0LWNhbGNwaWNrZXInLCB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyl9PlxuICAgICAgICA8YnV0dG9uIHJlZj1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5idXR0b25DbGFzcyl9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uQ2xpY2tQaWNrZXIoZSl9PlxuICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUudmFsdWUpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8UG9ydGFsIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljaz17dGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrfSBpc09wZW5lZD17dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcn0gb25DbG9zZT17KCkgPT4gdGhpcy5vbkNsb3NlUG9ydGFsKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgIHJlZj0nY2FsY3VsYXRvcidcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgY2xvc2VPbkVudGVyQWN0aW9uPXt0aGlzLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbn1cbiAgICAgICAgICAgIHpJbmRleD17dGhpcy5wcm9wcy56SW5kZXh9XG4gICAgICAgICAgICBidXR0b25XaWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgIGJ1dHRvbkhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICBidXR0b25NYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxjUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvc2l0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdKSksXG4gIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdsaWdodCcsICdkYXJrJywgJ3dhcm5pbmcnXSksXG4gICAgICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgXSkucmVxdWlyZSxcbiAgICAgICAgc3BhbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBidXR0b25XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25NYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpb25Hcm91cDogUHJvcFR5cGVzLmFycmF5LFxufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIkFDXCIsIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCLihpBcIiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiBcIiVcIiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDt1wiLCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI3XCIsIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjhcIiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOVwiLCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsOXXCIsIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjRcIiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI1XCIsIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNlwiLCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiLVwiLCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIxXCIsIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIyXCIsIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIzXCIsIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIitcIiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwXCIsIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMDBcIiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIi5cIiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogXCI9XCIsIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZSxcbiAgYnV0dG9uV2lkdGg6IDQ4LFxuICBidXR0b25IZWlnaHQ6IDMyLFxuICBidXR0b25NYXJnaW46IDMsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGV4Y2x1c2lvbkdyb3VwOiB1bmRlZmluZWQsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUJ1dHRvblNpemUgPSAzMDtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGFkanVzdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgY29uc3Qgd2luZG93UmVjdCA9IFJlY3QuY3JlYXRlV2l0aFdpbmRvdygpXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5yZWZzLmNhbGN1bGF0b3IsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcblxuICAgICAgY29uc3QgcmVjdHMgPSBbXVxuICAgICAgbGV0IG5ld0NhbGNSZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NLZXkgPSB0aGlzLnByb3BzLnBvc2l0aW9uc1tpXVxuICAgICAgICBsZXQgcmVjdDtcbiAgICAgICAgaWYocG9zS2V5ID09IFJlY3QuV0lORE9XX0NFTlRFUil7XG4gICAgICAgICAgcmVjdCA9IHdpbmRvd1JlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVjdCA9IGJ1dHRvblJlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIH1cblxuICAgICAgICByZWN0cy5wdXNoKHJlY3QpXG4gICAgICAgIGlmKHdpbmRvd1JlY3QuY29udGFpbnMocmVjdCkpe1xuICAgICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbmV3Q2FsY1JlY3Qpe1xuICAgICAgICByZWN0cy5zb3J0KChhLCBiKSA9PiB3aW5kb3dSZWN0LmdldE92ZXJsYXBwaW5nUmVjdChiKS5hcmVhIC0gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYSkuYXJlYSlcbiAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0c1swXVxuICAgICAgfVxuXG4gICAgICBpZihuZXdDYWxjUmVjdCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHg6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVgsXG4gICAgICAgICAgeTogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRUb0Rpc3BsYXkobnVtYmVyKXtcbiAgICBjb25zdCBzdHJEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICBpZihzdHJEaXNwbGF5ICE9PSAnMCcgJiYgdGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiBzdHJEaXNwbGF5ICsgbnVtYmVyLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2FsYyhsZWZ0LCBvcGVyYXRvciwgcmlnaHQpe1xuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgKyByaWdodDtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgLSByaWdodDtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0ludmFsaWQgb3BlcmF0b3IgJyArIG9wZXJhdG9yICsgJyBzcGVjaWZpZWQuJztcbiAgICB9XG4gIH1cblxuICBleGVjdXRlKGNhbGxiYWNrID0gKCkgPT4ge30pe1xuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5O1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgbGV0IGNhbGN1bGF0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLmNhbGMocGFyc2VGbG9hdCh2YWx1ZSwgMTApLCB0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlLCBwYXJzZUZsb2F0KGRpc3BsYXksIDEwKSk7XG4gICAgICBjYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgaW5wdXRPcGVyYXRvcihvcGVyYXRvciwgYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RGVjaW1hbCgpe1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheS5pbmRleE9mKCcuJykgPT09IC0xKXtcbiAgICAgIHRoaXMuaW5wdXRUb0Rpc3BsYXkoJy4nKVxuICAgIH1cbiAgfVxuXG4gIGlucHV0UGVyY2VudChidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1bml0OiB7XG4gICAgICAgIHZhbHVlOiclJyxcbiAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheVxuICAgICAgfX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSAvIDEwMH0pXG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgIHVuaXQ6IHt9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhbGxDbGVhcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgdmFsdWU6ICcwJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgdW5pdDoge30sXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSgpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICBsZXQgbmV3RGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgICBpZihuZXdEaXNwbGF5ID09PSAnMCcpe1xuICAgICAgICBuZXdTdGF0ZVsndW5pdCddID0ge31cbiAgICAgIH1cbiAgICAgIG5ld0Rpc3BsYXkgPSBuZXdEaXNwbGF5LnN1YnN0cigwLCBuZXdEaXNwbGF5Lmxlbmd0aCAtIDEpO1xuICAgICAgbmV3U3RhdGVbJ2Rpc3BsYXknXSA9ICFuZXdEaXNwbGF5ID8gMCA6IG5ld0Rpc3BsYXk7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCkgdGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQodGhpcy5zdGF0ZS52YWx1ZSlcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrQ2xvc2UoKVxuICB9XG5cbiAgb25DbGlja0J1dHRvbihidG5Qcm9wcywgZXZlbnQpe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpcztcbiAgICBidG5Qcm9wcy5hY3Rpb24odGhpcywgYnRuUHJvcHMsIGV2ZW50KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVEYXRhKCk7XG4gICAgY29uc3Qgc3R5bGUgPSB7dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy5zdGF0ZS54fXB4LCAke3RoaXMuc3RhdGUueX1weClgfVxuICAgIGlmKHRoaXMucHJvcHMuekluZGV4ICE9PSB1bmRlZmluZWQpe1xuICAgICAgc3R5bGVbJ3pJbmRleCddID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cImNhbGN1bGF0b3JcIiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yXCIgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLXRpdGxlXCIgc3R5bGU9e3t3aWR0aDogKCh0aGlzLnByb3BzLmJ1dHRvbldpZHRoICogNCkgKyAodGhpcy5wcm9wcy5idXR0b25NYXJnaW4gKiA2KSkgLSB0aGlzLmNsb3NlQnV0dG9uU2l6ZX19PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci1idXR0b25cIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tY2xvc2VcIlxuICAgICAgICAgICAgICBkaXNwbGF5PXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlKCl9XG4gICAgICAgICAgICAgIHdpZHRoPXt0aGlzLmNsb3NlQnV0dG9uU2l6ZX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLmNsb3NlQnV0dG9uU2l6ZX1cbiAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheVwiIHN0eWxlPXt7bWFyZ2luOiB0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3IuZGlzcGxheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1udW1iZXJcIj5cbiAgICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuZGlzcGxheSkuZm9ybWF0KHRoaXMuc3RhdGUuZm9ybWF0KX17dGhpcy5zdGF0ZS51bml0LmRpc3BsYXl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zLm1hcCgocm93LCByb3dLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0tleX0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxlbSA9PiBidG4uY29tcG9uZW50ID0gZWxlbX1cbiAgICAgICAgICAgICAgICAgICAgcHJldkJ1dHRvbj17YnRuS2V5ID4gMCA/IHJvd1tidG5LZXkgLSAxXSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidG4uc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHNwYW49e2J0bi5zcGFufVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtidG4uZGlzcGxheX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2tCdXR0b24oYnRuLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QnV0dG9uU3R5bGUoKXtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLm1hcmdpbil7XG4gICAgICBzdHlsZS5tYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbjtcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNwYW4pe1xuICAgICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcbiAgICAgIGlmKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgLSAxKSAqIDIpXG4gICAgICAgIHN0eWxlLmhlaWdodCA9IChzdHlsZS5oZWlnaHQgKiB0aGlzLnByb3BzLnNwYW4uaGVpZ2h0KSArIHRvdGFsTWFyZ2luXG4gICAgICAgIHN0eWxlLnRvcCA9IC0oKHRoaXMucHJvcHMuaGVpZ2h0ICogKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgLSAxKSkgKyB0b3RhbE1hcmdpbilcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLndpZHRoID49IDIpe1xuICAgICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnNwYW4ud2lkdGggLSAxKSAqIDIpXG4gICAgICAgIHN0eWxlLndpZHRoID0gKHN0eWxlLndpZHRoICogdGhpcy5wcm9wcy5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5wcmV2QnV0dG9uICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoID49IDIpe1xuICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggKiAyKSArIDEpXG4gICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMucHJvcHMud2lkdGggKiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCkgKyB0b3RhbE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPVwiZWxlbWVudFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt0aGlzLmdldEJ1dHRvblN0eWxlKCl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5fVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFxue1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQsIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkge1xuICAgIHRoaXMudG9wID0gdG9wXG4gICAgdGhpcy5sZWZ0ID0gbGVmdFxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdHJhbnNmb3JtWFxuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRyYW5zZm9ybVlcbiAgfVxuXG4gIGdldCBib3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCByaWdodCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IG9yaWdpblRvcCgpe1xuICAgIHJldHVybiB0aGlzLnRvcCAtIHRoaXMudHJhbnNmb3JtWTtcbiAgfVxuXG4gIGdldCBvcmlnaW5MZWZ0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCAtIHRoaXMudHJhbnNmb3JtWDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Cb3R0b20oKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5Ub3AgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBvcmlnaW5SaWdodCgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpbkxlZnQgKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0IGFyZWEoKXtcbiAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0Q2VudGVyUmVjdCh3aWR0aCwgaGVpZ2h0KXtcbiAgICBjb25zdCBjZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLmxlZnQgKyAodGhpcy53aWR0aCAvIDIpLFxuICAgICAgeTogdGhpcy50b3AgKyAodGhpcy5oZWlnaHQgLyAyKSxcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICBjZW50ZXIueSAtIChoZWlnaHQgLyAyKSxcbiAgICAgIGNlbnRlci54IC0gKHdpZHRoIC8gMiksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIClcbiAgfVxuXG4gIGNsb25lKCl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgdGhpcy50b3AsXG4gICAgICB0aGlzLmxlZnQsXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0aGlzLnRyYW5zZm9ybVlcbiAgICApXG4gIH1cblxuICB0cmFuc2Zvcm0oeCwgeSl7XG4gICAgdGhpcy50b3AgPSB0aGlzLm9yaWdpblRvcCArIHk7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5vcmlnaW5MZWZ0ICsgeDtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB4O1xuICAgIHRoaXMudHJhbnNmb3JtWSA9IHk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250YWlucyhyZWN0KXtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxlZnQgPD0gcmVjdC5sZWZ0XG4gICAgICAmJlxuICAgICAgdGhpcy5yaWdodCA+PSByZWN0LnJpZ2h0XG4gICAgICAmJlxuICAgICAgdGhpcy50b3AgPD0gcmVjdC50b3BcbiAgICAgICYmXG4gICAgICB0aGlzLmJvdHRvbSA+PSByZWN0LmJvdHRvbTtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBkdW1wKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBvcmlnaW5Ub3A6IHRoaXMub3JpZ2luVG9wLFxuICAgICAgb3JpZ2luTGVmdDogdGhpcy5vcmlnaW5MZWZ0LFxuICAgICAgb3JpZ2luQm90dG9tOiB0aGlzLm9yaWdpbkJvdHRvbSxcbiAgICAgIG9yaWdpblJpZ2h0OiB0aGlzLm9yaWdpblJpZ2h0LFxuICAgICAgdHJhbnNmb3JtWDogdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdHJhbnNmb3JtWTogdGhpcy50cmFuc2Zvcm1ZLFxuICAgIH1cbiAgfVxuXG4gIGdldFJlbGF0aXZlUmVjdChyZWN0LCBwb3NpdGlvbil7XG4gICAgc3dpdGNoKHBvc2l0aW9uKXtcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LlJJR0hUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMudG9wIC0gcmVjdC5vcmlnaW5Cb3R0b21cbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LldJTkRPV19DRU5URVI6XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUmVjdCA9IHRoaXMuZ2V0Q2VudGVyUmVjdChyZWN0LndpZHRoLCByZWN0LmhlaWdodClcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LnRvcCAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbGxlZ2FsIHBvc2l0aW9uS2V5IGAnICsgcG9zaXRpb24gKyAnYCBpcyBzcGVjaWZpZWQnO1xuICAgIH1cbiAgfVxuXG4gIGdldE92ZXJsYXBwaW5nUmVjdChyZWN0KXtcbiAgICBjb25zdCB0b3AgPSBNYXRoLm1heCh0aGlzLnRvcCwgcmVjdC50b3ApXG4gICAgY29uc3QgbGVmdCA9IE1hdGgubWF4KHRoaXMubGVmdCwgcmVjdC5sZWZ0KVxuICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4odGhpcy5yaWdodCwgcmVjdC5yaWdodCk7XG4gICAgY29uc3QgYm90dG9tID0gTWF0aC5taW4odGhpcy5ib3R0b20sIHJlY3QuYm90dG9tKTtcblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgIGlmICh3aWR0aCA+IDAgJiYgaGVpZ2h0ID4gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3QodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuUmVjdC5jcmVhdGVXaXRoRWxlbWVudCA9IChlbGVtLCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApID0+IHtcbiAgaWYoIWVsZW0pe1xuICAgIHJldHVybiBuZXcgUmVjdCgwLDAsMCwwKVxuICB9XG4gIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2NFbC5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdDtcblxuICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIGJvdW5kaW5nUmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgYm91bmRpbmdSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICBib3VuZGluZ1JlY3Qud2lkdGgsXG4gICAgYm91bmRpbmdSZWN0LmhlaWdodCxcbiAgICB0cmFuc2Zvcm1YLFxuICAgIHRyYW5zZm9ybVlcbiAgKVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhXaW5kb3cgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUmVjdChcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gIClcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1dJTkRPV19DRU5URVInLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIldJTkRPV19DRU5URVJcIlxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwiY2xhc3MgR2xvYmFsXG57XG4gIGdldCBjdXJyZW50Q2FsY2xhdG9yKCl7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3JcbiAgfVxuXG4gIHNldCBjdXJyZW50Q2FsY2xhdG9yKHZhbHVlKXtcbiAgICB0aGlzLl9jdXJyZW50Q2FsY2xhdG9yID0gdmFsdWVcbiAgfVxufVxuXG5jb25zdCBnID0gbmV3IEdsb2JhbCgpXG5leHBvcnQgZGVmYXVsdCBnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUG9ydGFsXCIsXCJjb21tb25qczJcIjpcInJlYWN0LXBvcnRhbFwiLFwiY29tbW9uanNcIjpcInJlYWN0LXBvcnRhbFwiLFwiYW1kXCI6XCJyZWFjdC1wb3J0YWxcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJ1xuXG5jb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==