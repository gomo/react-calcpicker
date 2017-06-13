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
	      { className: 'react-calcpicker' },
	      _react2.default.createElement(
	        'button',
	        { ref: 'button', className: this.props.className, onClick: function onClick(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwYThmNzZjNTJlNDdlYTg4MWU0MCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvR2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sIm5hbWVzIjpbIkNhbGNQaWNrZXIiLCJSZWN0IiwiQWN0aW9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwicHJvcHMiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrUGlja2VyIiwiZXhjbHVzaW9uR3JvdXAiLCJhbHJlYWR5T3BlbmQiLCJwaWNrZXIiLCJzZXRTdGF0ZSIsInB1c2giLCJvbkNsb3NlUG9ydGFsIiwiY2hhbmdlVmFsdWUiLCJvbkNoYW5nZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsImNsb3NlT25PdXRzaWRlQ2xpY2siLCJ0aXRsZSIsImJ1dHRvbiIsInBvc2l0aW9ucyIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkVudGVyQWN0aW9uIiwiekluZGV4IiwiYnV0dG9uV2lkdGgiLCJidXR0b25IZWlnaHQiLCJidXR0b25NYXJnaW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJhcnJheU9mIiwib25lT2YiLCJSSUdIVF9CT1RUT00iLCJMRUZUX0JPVFRPTSIsIlJJR0hUX1RPUCIsIkxFRlRfVE9QIiwiV0lORE9XX0NFTlRFUiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJ3aWR0aCIsImhlaWdodCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiYWxsQ2xlYXIiLCJrZXkiLCJiYWNrc3BhY2UiLCJwZXJjZW50IiwiZGl2aXNpb24iLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsIm11bHRpcGxpY2F0aW9uIiwiZm91ciIsImZpdmUiLCJzaXgiLCJtaW51cyIsIm9uZSIsInR3byIsInRocmVlIiwicGx1cyIsInplcm8iLCJkb3VibGVaZXJvIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiZGVjaW1hbCIsImVudGVyIiwiQ2FsY3VsYXRvciIsImFtb3VudCIsImFwcGVuZE1vZGUiLCJvcGVyYXRvciIsInVuaXQiLCJ4IiwieSIsImNsb3NlQnV0dG9uU2l6ZSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImJ1dHRvblJlY3QiLCJjcmVhdGVXaXRoRWxlbWVudCIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwiY29udGFpbnMiLCJzb3J0IiwiYSIsImIiLCJnZXRPdmVybGFwcGluZ1JlY3QiLCJhcmVhIiwidHJhbnNmb3JtWCIsInRyYW5zZm9ybVkiLCJpbnB1dFRvRGlzcGxheSIsImNhbGMiLCJsZWZ0IiwicmlnaHQiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJjYWxjdWxhdGVkIiwicGFyc2VGbG9hdCIsImlucHV0T3BlcmF0b3IiLCJidG5Qcm9wcyIsImlucHV0RGVjaW1hbCIsImluZGV4T2YiLCJpbnB1dFBlcmNlbnQiLCJjbGVhciIsImRlbGV0ZSIsIm5ld1N0YXRlIiwidG9TdHJpbmciLCJzdWJzdHIiLCJjb21wb25lbnREaWRNb3VudCIsImZpeCIsIm9uQ2FsY3VsYXRlZCIsImNsb3NlIiwib25DbGlja0Nsb3NlIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwibG9jYWxlRGF0YSIsInRyYW5zZm9ybSIsIm1hcmdpbiIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsImVsZW0iLCJCdXR0b24iLCJvbkNsaWNrIiwiZ2V0QnV0dG9uU3R5bGUiLCJwb3NpdGlvbiIsInRvdGFsTWFyZ2luIiwidG9wIiwicHJldkJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJnZXRDZW50ZXJSZWN0IiwiY2VudGVyIiwiY2xvbmUiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVzdWx0IiwiYm90dG9tIiwiZHVtcCIsIm9yaWdpbkJvdHRvbSIsIm9yaWdpblJpZ2h0IiwiZXhwZWN0ZWRSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtB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Q3ZCLFVBQUthLE1BQUw7QUFDRDtBQXBFYSxFQUFoQjs7bUJBdUVlOUksTSIsImZpbGUiOiJyZWFjdC1jYWxjcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1wb3J0YWxcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcIm51bWVyYWwvbG9jYWxlc1wiLCBcImNsYXNzLW5hbWVzXCIsIFwicmVhY3QtcG9ydGFsXCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wibnVtZXJhbFwiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJjbGFzc05hbWVzXCJdLCByb290W1wiUG9ydGFsXCJdLCByb290W1wiUHJvcFR5cGVzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYThmNzZjNTJlNDdlYTg4MWU0MCIsImltcG9ydCBDYWxjUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9DYWxjUGlja2VyJztcbmltcG9ydCBSZWN0IGZyb20gJy4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2NsYXNzZXMvQWN0aW9uJ1xuXG5leHBvcnQge0NhbGNQaWNrZXIsIFJlY3QsIEFjdGlvbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCAnbnVtZXJhbC9sb2NhbGVzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyZWFjdC1wb3J0YWwnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3Ipe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLnByb3BzLmJ1dHRvbnMuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goYnRuID0+IHtcbiAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJ0bi5hY3Rpb24oR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IsIGJ0biwgZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gcHJldlN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT09IHRydWUpe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXMucmVmcy5jYWxjdWxhdG9yXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gbmV4dFN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKG5leHRTdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gdHJ1ZSAmJiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9PT0gdGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tQaWNrZXIoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXApe1xuICAgICAgbGV0IGFscmVhZHlPcGVuZCA9IGZhbHNlXG4gICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLmZvckVhY2gocGlja2VyID0+IHtcbiAgICAgICAgaWYocGlja2VyID09PSB0aGlzKSBhbHJlYWR5T3BlbmQgPSB0cnVlXG4gICAgICAgIGlmKHBpY2tlci5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgICAgcGlja2VyLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZighYWxyZWFkeU9wZW5kKXtcbiAgICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5wdXNoKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZVBvcnRhbCgpe1xuICAgIC8vU2V0IHRoZSBvcGVuQ2FsY3VsYXRvciB0byBmYWxzZSB3aGVuIGNsaWNraW5nIHRoZSBvdmVybGF5IG9yIGNsb3Npbmcgd2l0aCB0aGUgRVNDIGtleS5cbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09IHRydWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpe1xuICAgIGlmKHRoaXMuc3RhdGUudmFsdWUgIT0gdmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlclwiPlxuICAgICAgICA8YnV0dG9uIHJlZj1cImJ1dHRvblwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uQ2xpY2tQaWNrZXIoZSl9PlxuICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUudmFsdWUpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8UG9ydGFsIGNsb3NlT25Fc2MgY2xvc2VPbk91dHNpZGVDbGljaz17dGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrfSBpc09wZW5lZD17dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcn0gb25DbG9zZT17KCkgPT4gdGhpcy5vbkNsb3NlUG9ydGFsKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgIHJlZj0nY2FsY3VsYXRvcidcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgY2xvc2VPbkVudGVyQWN0aW9uPXt0aGlzLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbn1cbiAgICAgICAgICAgIHpJbmRleD17dGhpcy5wcm9wcy56SW5kZXh9XG4gICAgICAgICAgICBidXR0b25XaWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgIGJ1dHRvbkhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICBidXR0b25NYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxjUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvc2l0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdKSksXG4gIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdsaWdodCcsICdkYXJrJywgJ3dhcm5pbmcnXSksXG4gICAgICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgXSkucmVxdWlyZSxcbiAgICAgICAgc3BhbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBidXR0b25XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25NYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpb25Hcm91cDogUHJvcFR5cGVzLmFycmF5LFxufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIkFDXCIsIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCLihpBcIiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiBcIiVcIiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDt1wiLCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI3XCIsIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjhcIiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOVwiLCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsOXXCIsIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjRcIiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI1XCIsIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNlwiLCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiLVwiLCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIxXCIsIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIyXCIsIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIzXCIsIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIitcIiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwXCIsIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMDBcIiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIi5cIiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogXCI9XCIsIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZSxcbiAgYnV0dG9uV2lkdGg6IDQ4LFxuICBidXR0b25IZWlnaHQ6IDMyLFxuICBidXR0b25NYXJnaW46IDMsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGV4Y2x1c2lvbkdyb3VwOiB1bmRlZmluZWQsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IGFtb3VudCA9IHRoaXMuc3RhdGUuYW1vdW50O1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQoYW1vdW50LCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFtb3VudCA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICBhbW91bnQ6ICcwJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgdW5pdDoge30sXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSgpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYodmFsdWUgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIXZhbHVlID8gMCA6IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUuYW1vdW50KVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGJ0blByb3BzLCBldmVudCl7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzO1xuICAgIGJ0blByb3BzLmFjdGlvbih0aGlzLCBidG5Qcm9wcywgZXZlbnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItdGl0bGVcIiBzdHlsZT17e3dpZHRoOiAoKHRoaXMucHJvcHMuYnV0dG9uV2lkdGggKiA0KSArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDYpKSAtIHRoaXMuY2xvc2VCdXR0b25TaXplfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCIgc3R5bGU9e3ttYXJnaW46IHRoaXMucHJvcHMuYnV0dG9uTWFyZ2lufX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfVxuICAgICAgICAgICAgICAgICAgICBwcmV2QnV0dG9uPXtidG5LZXkgPiAwID8gcm93W2J0bktleSAtIDFdIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0bi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbj17YnRuLnNwYW59XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2J0bi5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0J1dHRvbihidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJjbGFzcyBHbG9iYWxcbntcbiAgZ2V0IGN1cnJlbnRDYWxjbGF0b3IoKXtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGNsYXRvclxuICB9XG5cbiAgc2V0IGN1cnJlbnRDYWxjbGF0b3IodmFsdWUpe1xuICAgIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3IgPSB2YWx1ZVxuICB9XG59XG5cbmNvbnN0IGcgPSBuZXcgR2xvYmFsKClcbmV4cG9ydCBkZWZhdWx0IGc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9HbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnXG5cbmNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGNhbGMuZml4KClcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9