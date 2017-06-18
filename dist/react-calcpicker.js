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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYzBjOTI1ZmIwYjcyZTI0YTdkNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sIm5hbWVzIjpbIkNhbGNQaWNrZXIiLCJSZWN0IiwiQWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwicHJvcHMiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrUGlja2VyIiwiZXhjbHVzaW9uR3JvdXAiLCJhbHJlYWR5T3BlbmQiLCJwaWNrZXIiLCJzZXRTdGF0ZSIsInB1c2giLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsIndyYXBwZXJDbGFzcyIsImNsYXNzTmFtZSIsImJ1dHRvbkNsYXNzIiwiZm9ybWF0IiwiY2xvc2VPbk91dHNpZGVDbGljayIsInRpdGxlIiwiYnV0dG9uIiwicG9zaXRpb25zIiwiY2xvc2VCdXR0b24iLCJjbG9zZU9uRW50ZXJBY3Rpb24iLCJ6SW5kZXgiLCJidXR0b25XaWR0aCIsImJ1dHRvbkhlaWdodCIsImJ1dHRvbk1hcmdpbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiUklHSFRfVE9QIiwiTEVGVF9UT1AiLCJXSU5ET1dfQ0VOVEVSIiwic2hhcGUiLCJzdHlsZSIsImRpc3BsYXkiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJyZXF1aXJlIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJhbGxDbGVhciIsImtleSIsImJhY2tzcGFjZSIsInBlcmNlbnQiLCJkaXZpc2lvbiIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwibXVsdGlwbGljYXRpb24iLCJmb3VyIiwiZml2ZSIsInNpeCIsIm1pbnVzIiwib25lIiwidHdvIiwidGhyZWUiLCJwbHVzIiwiemVybyIsImRvdWJsZVplcm8iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJkZWNpbWFsIiwiZW50ZXIiLCJDYWxjdWxhdG9yIiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsIngiLCJ5IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndpbmRvd1JlY3QiLCJjcmVhdGVXaXRoV2luZG93IiwiYnV0dG9uUmVjdCIsImNyZWF0ZVdpdGhFbGVtZW50IiwiY2FsY1JlY3QiLCJyZWN0cyIsIm5ld0NhbGNSZWN0IiwiaSIsImxlbmd0aCIsInBvc0tleSIsInJlY3QiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImlucHV0VG9EaXNwbGF5IiwiY2FsYyIsImxlZnQiLCJyaWdodCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiZGVsZXRlIiwibmV3U3RhdGUiLCJuZXdEaXNwbGF5IiwidG9TdHJpbmciLCJzdWJzdHIiLCJjb21wb25lbnREaWRNb3VudCIsImZpeCIsIm9uQ2FsY3VsYXRlZCIsImNsb3NlIiwib25DbGlja0Nsb3NlIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwibG9jYWxlRGF0YSIsInRyYW5zZm9ybSIsIm1hcmdpbiIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsImVsZW0iLCJCdXR0b24iLCJvbkNsaWNrIiwiZ2V0QnV0dG9uU3R5bGUiLCJwb3NpdGlvbiIsInRvdGFsTWFyZ2luIiwidG9wIiwicHJldkJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJnZXRDZW50ZXJSZWN0IiwiY2VudGVyIiwiY2xvbmUiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVzdWx0IiwiYm90dG9tIiwiZHVtcCIsIm9yaWdpbkJvdHRvbSIsIm9yaWdpblJpZ2h0IiwiZXhwZWN0ZWRSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZVEsUUFBZixFQUF5QmdCLEtBQXpCLEVBQStCO0FBQ3ZDeEIsVUFBS3JELFFBQUw7QUFDRCxJQTlEYTtBQStEZGlFLFVBQU8sZUFBU1osSUFBVCxFQUFlUSxRQUFmLEVBQXlCZ0IsS0FBekIsRUFBK0I7QUFDcEN4QixVQUFLWSxLQUFMO0FBQ0QsSUFqRWE7QUFrRWQvRCxjQUFXLG1CQUFTbUQsSUFBVCxFQUFlUSxRQUFmLEVBQXlCZ0IsS0FBekIsRUFBK0I7QUFDeEN4QixVQUFLYSxNQUFMO0FBQ0Q7QUFwRWEsRUFBaEI7O21CQXVFZS9JLE0iLCJmaWxlIjoicmVhY3QtY2FsY3BpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm51bWVyYWxcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJjbGFzcy1uYW1lc1wiLCBcInJlYWN0LXBvcnRhbFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIm51bWVyYWxcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlBvcnRhbFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmMwYzkyNWZiMGI3MmUyNGE3ZDciLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3Ipe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLnByb3BzLmJ1dHRvbnMuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goYnRuID0+IHtcbiAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJ0bi5hY3Rpb24oR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IsIGJ0biwgZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gcHJldlN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT09IHRydWUpe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXMucmVmcy5jYWxjdWxhdG9yXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gbmV4dFN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKG5leHRTdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gdHJ1ZSAmJiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9PT0gdGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tQaWNrZXIoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXApe1xuICAgICAgbGV0IGFscmVhZHlPcGVuZCA9IGZhbHNlXG4gICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLmZvckVhY2gocGlja2VyID0+IHtcbiAgICAgICAgaWYocGlja2VyID09PSB0aGlzKSBhbHJlYWR5T3BlbmQgPSB0cnVlXG4gICAgICAgIGlmKHBpY2tlci5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgICAgcGlja2VyLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZighYWxyZWFkeU9wZW5kKXtcbiAgICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5wdXNoKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZVBvcnRhbCgpe1xuICAgIC8vU2V0IHRoZSBvcGVuQ2FsY3VsYXRvciB0byBmYWxzZSB3aGVuIGNsaWNraW5nIHRoZSBvdmVybGF5IG9yIGNsb3Npbmcgd2l0aCB0aGUgRVNDIGtleS5cbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09IHRydWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpe1xuICAgIGlmKHRoaXMuc3RhdGUudmFsdWUgIT0gdmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyZWFjdC1jYWxjcGlja2VyJywgdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3MpfT5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuYnV0dG9uQ2xhc3MpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrUGlja2VyKGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLnZhbHVlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGlja30gaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfT5cbiAgICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pfVxuICAgICAgICAgICAgYnV0dG9uPXt0aGlzLnJlZnMuYnV0dG9ufVxuICAgICAgICAgICAgcG9zaXRpb25zPXt0aGlzLnByb3BzLnBvc2l0aW9uc31cbiAgICAgICAgICAgIGJ1dHRvbnM9e3RoaXMucHJvcHMuYnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2FsY3VsYXRlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgIGNsb3NlT25FbnRlckFjdGlvbj17dGhpcy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb259XG4gICAgICAgICAgICB6SW5kZXg9e3RoaXMucHJvcHMuekluZGV4fVxuICAgICAgICAgICAgYnV0dG9uV2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICBidXR0b25IZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgYnV0dG9uTWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIHNwYW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICAgIH0pLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleURvd246IFByb3BUeXBlcy5mdW5jXG4gICAgICB9KVxuICAgIClcbiAgKSxcbiAgYnV0dG9uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uTWFyZ2luOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaW9uR3JvdXA6IFByb3BUeXBlcy5hcnJheSxcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWUsXG4gIGJ1dHRvbldpZHRoOiA0OCxcbiAgYnV0dG9uSGVpZ2h0OiAzMixcbiAgYnV0dG9uTWFyZ2luOiAzLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICBleGNsdXNpb25Hcm91cDogdW5kZWZpbmVkLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBsZXQgY2FsY3VsYXRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgZGlzcGxheSA9IHRoaXMuY2FsYyhwYXJzZUZsb2F0KHZhbHVlLCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhbHVlID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICB2YWx1ZTogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCBuZXdEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKG5ld0Rpc3BsYXkgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgbmV3RGlzcGxheSA9IG5ld0Rpc3BsYXkuc3Vic3RyKDAsIG5ld0Rpc3BsYXkubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIW5ld0Rpc3BsYXkgPyAwIDogbmV3RGlzcGxheTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMucHJvcHMub25DYWxjdWxhdGVkKSB0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCh0aGlzLnN0YXRlLnZhbHVlKVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGJ0blByb3BzLCBldmVudCl7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzO1xuICAgIGJ0blByb3BzLmFjdGlvbih0aGlzLCBidG5Qcm9wcywgZXZlbnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItdGl0bGVcIiBzdHlsZT17e3dpZHRoOiAoKHRoaXMucHJvcHMuYnV0dG9uV2lkdGggKiA0KSArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDYpKSAtIHRoaXMuY2xvc2VCdXR0b25TaXplfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCIgc3R5bGU9e3ttYXJnaW46IHRoaXMucHJvcHMuYnV0dG9uTWFyZ2lufX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfVxuICAgICAgICAgICAgICAgICAgICBwcmV2QnV0dG9uPXtidG5LZXkgPiAwID8gcm93W2J0bktleSAtIDFdIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0bi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbj17YnRuLnNwYW59XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2J0bi5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0J1dHRvbihidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJjbGFzcyBHbG9iYWxcbntcbiAgZ2V0IGN1cnJlbnRDYWxjbGF0b3IoKXtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGNsYXRvclxuICB9XG5cbiAgc2V0IGN1cnJlbnRDYWxjbGF0b3IodmFsdWUpe1xuICAgIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3IgPSB2YWx1ZVxuICB9XG59XG5cbmNvbnN0IGcgPSBuZXcgR2xvYmFsKClcbmV4cG9ydCBkZWZhdWx0IGc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9HbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnXG5cbmNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGNhbGMuZml4KClcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9