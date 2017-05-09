(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "numeral/locales", "class-names", "react-portal"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("numeral/locales"), require("class-names"), require("react-portal"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["locales"], root["classNames"], root["Portal"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
	
	  CalcPicker.prototype.onCloseCalculator = function onCloseCalculator() {
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
	        (0, _numeral2.default)(this.state.amount).format(this.props.currencyFormat)
	      ),
	      _react2.default.createElement(
	        _reactPortal2.default,
	        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: this.state.openCalculator, onClose: function onClose() {
	            return _this2.onCloseCalculator();
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
	          onFixed: function onFixed(value) {
	            return _this2.changeValue(value);
	          }
	        })
	      )
	    );
	  };
	
	  return CalcPicker;
	}(_react2.default.Component);
	
	exports.default = CalcPicker;

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
	    if (this.props.onFixed) this.props.onFixed(this.state.amount);
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
	        _react2.default.createElement(_Button2.default, { className: 'react-calcpicker__calculator-button-close', display: '\xD7', onClick: this.props.onClickClose })
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZDhiMGExZGEwNmNiNmRjM2EwZiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0FjdGlvbi5qcyJdLCJuYW1lcyI6WyJDYWxjUGlja2VyIiwiUmVjdCIsIkFjdGlvbiIsInByb3BzIiwibG9jYWxlIiwic3RhdGUiLCJvcGVuQ2FsY3VsYXRvciIsImFtb3VudCIsImluaXRpYWxBbW91bnQiLCJ3aW5kb3ciLCJvbmtleWRvd24iLCJlIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJvbkNsaWNrQW1vdW50Iiwic2V0U3RhdGUiLCJvbkNsb3NlQ2FsY3VsYXRvciIsImNoYW5nZVZhbHVlIiwidmFsdWUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJmb3JtYXQiLCJjdXJyZW5jeUZvcm1hdCIsImJ1dHRvbiIsInBvc2l0aW9ucyIsIkNvbXBvbmVudCIsIkNhbGN1bGF0b3IiLCJkaXNwbGF5IiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsIngiLCJ5Iiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndpbmRvd1JlY3QiLCJjcmVhdGVXaXRoV2luZG93IiwiYnV0dG9uUmVjdCIsImNyZWF0ZVdpdGhFbGVtZW50IiwiY2FsY1JlY3QiLCJuZXdDYWxjUmVjdCIsInVuZGVmaW5lZCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJyZWN0IiwiZ2V0UmVsYXRpdmVSZWN0IiwiY29udGFpbnMiLCJDRU5URVIiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImlucHV0VG9EaXNwbGF5IiwibnVtYmVyIiwiY2FsYyIsImxlZnQiLCJyaWdodCIsImV4ZWN1dGUiLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiZml4IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiYWxsQ2xlYXIiLCJkZWxldGUiLCJuZXdTdGF0ZSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkZpeGVkIiwibG9jYWxlRGF0YSIsInRyYW5zZm9ybSIsIm9uQ2xpY2tDbG9zZSIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsImVsZW0iLCJzdHlsZSIsInNpemUiLCJCdXR0b24iLCJvbkNsaWNrIiwiZ2V0U2l6ZUNsYXNzIiwiY2xhc3NOYW1lcyIsIndpZHRoIiwicHVzaCIsImhlaWdodCIsInRvcCIsImdldENlbnRlclJlY3QiLCJjZW50ZXIiLCJjbG9uZSIsIm9yaWdpblRvcCIsIm9yaWdpbkxlZnQiLCJyZXN1bHQiLCJib3R0b20iLCJkdW1wIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiTEVGVF9UT1AiLCJSSUdIVF9UT1AiLCJleHBlY3RlZFJlY3QiLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJvbmUiLCJldmVudCIsImVsZW1lbnQiLCJmb2N1cyIsInR3byIsInRocmVlIiwiZm91ciIsImZpdmUiLCJzaXgiLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsInplcm8iLCJkb3VibGVaZXJvIiwiZGVjaW1hbCIsInBlcmNlbnQiLCJwbHVzIiwibWludXMiLCJtdWx0aXBsaWNhdGlvbiIsImRpdmlzaW9uIiwiZW50ZXIiLCJiYWNrc3BhY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7U0FFUUEsVTtTQUFZQyxJO1NBQU1DLE07Ozs7Ozs7Ozs7OztBQ0oxQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCRixVOzs7QUFFbkIsdUJBQVlHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLHVCQUFRQyxNQUFSLENBQWVELE1BQU1DLE1BQXJCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFnQixLQURMO0FBRVhDLGVBQVFKLE1BQU1LO0FBRkgsTUFBYjs7QUFLQUMsWUFBT0MsU0FBUCxHQUFtQixVQUFDQyxDQUFELEVBQU87QUFDeEIsV0FBRyxNQUFLTixLQUFMLENBQVdDLGNBQWQsRUFBNkI7QUFDM0IsZUFBS0gsS0FBTCxDQUFXUyxPQUFYLENBQW1CQyxPQUFuQixDQUEyQjtBQUFBLGtCQUFPQyxJQUFJRCxPQUFKLENBQVksZUFBTztBQUNuRCxpQkFBR0UsSUFBSUMsT0FBSixJQUFlRCxJQUFJQyxPQUFKLENBQVlMLENBQVosQ0FBbEIsRUFBaUM7QUFDL0JBLGlCQUFFTSxjQUFGO0FBQ0FGLG1CQUFJRyxNQUFKLENBQVcsTUFBS0MsSUFBTCxDQUFVQyxVQUFyQixFQUFpQ0wsR0FBakMsRUFB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O0FBQ0QsSUFoRmE7QUFpRmRrRixjQUFXLG1CQUFTL0YsSUFBVCxFQUFlUyxRQUFmLEVBQXlCa0UsS0FBekIsRUFBK0I7QUFDeENsRSxjQUFTa0IsU0FBVCxDQUFtQnRFLElBQW5CLENBQXdCdUgsT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0E3RSxVQUFLZSxNQUFMO0FBQ0Q7QUFwRmEsRUFBaEI7O21CQXVGZTNFLE0iLCJmaWxlIjoicmVhY3QtY2FsY3BpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcIm51bWVyYWwvbG9jYWxlc1wiLCBcImNsYXNzLW5hbWVzXCIsIFwicmVhY3QtcG9ydGFsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIm51bWVyYWxcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlBvcnRhbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmQ4YjBhMWRhMDZjYjZkYzNhMGYiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50XG4gICAgfVxuXG4gICAgd2luZG93Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgdGhpcy5wcm9wcy5idXR0b25zLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgaWYoYnRuLmtleURvd24gJiYgYnRuLmtleURvd24oZSkpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBidG4uYWN0aW9uKHRoaXMucmVmcy5jYWxjdWxhdG9yLCBidG4sIGUpXG4gICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tBbW91bnQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZUNhbGN1bGF0b3IoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLmFtb3VudCAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHthbW91bnQ6IHZhbHVlfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnByb3BzLmN1cnJlbmN5Rm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrIGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VDYWxjdWxhdG9yKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsQW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgb25GaXhlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgYW1vdW50OiBwcm9wcy5pbml0aWFsQW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgY29uc3QgcmVjdCA9IGJ1dHRvblJlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIGlmKHdpbmRvd1JlY3QuY29udGFpbnMocmVjdCkpe1xuICAgICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbmV3Q2FsY1JlY3Qpe1xuICAgICAgICBuZXdDYWxjUmVjdCA9IHdpbmRvd1JlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBSZWN0LkNFTlRFUilcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHg6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVgsXG4gICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbnB1dFRvRGlzcGxheShudW1iZXIpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5ICsgbnVtYmVyLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2FsYyhsZWZ0LCBvcGVyYXRvciwgcmlnaHQpe1xuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgKyByaWdodDtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgLSByaWdodDtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0ludmFsaWQgb3BlcmF0b3IgJyArIG9wZXJhdG9yICsgJyBzcGVjaWZpZWQuJztcbiAgICB9XG4gIH1cblxuICBleGVjdXRlKGNhbGxiYWNrID0gKCkgPT4ge30pe1xuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5O1xuICAgIGxldCBhbW91bnQgPSB0aGlzLnN0YXRlLmFtb3VudDtcbiAgICBsZXQgY2FsY3VsYXRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgZGlzcGxheSA9IHRoaXMuY2FsYyhwYXJzZUZsb2F0KGFtb3VudCwgMTApLCB0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlLCBwYXJzZUZsb2F0KGRpc3BsYXksIDEwKSk7XG4gICAgICBjYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbW91bnQgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIGlmKGNhbGN1bGF0ZWQpIHRoaXMuZml4KClcbiAgICB9KVxuICB9XG5cbiAgaW5wdXRPcGVyYXRvcihvcGVyYXRvciwgYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RGVjaW1hbCgpe1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheS5pbmRleE9mKCcuJykgPT09IC0xKXtcbiAgICAgIHRoaXMuaW5wdXRUb0Rpc3BsYXkoJy4nKVxuICAgIH1cbiAgfVxuXG4gIGlucHV0UGVyY2VudChidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1bml0OiB7XG4gICAgICAgIHZhbHVlOiclJyxcbiAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheVxuICAgICAgfX0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSAvIDEwMH0pXG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgIHVuaXQ6IHt9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhbGxDbGVhcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgYW1vdW50OiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKHZhbHVlID09PSAnMCcpe1xuICAgICAgICBuZXdTdGF0ZVsndW5pdCddID0ge31cbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgbmV3U3RhdGVbJ2Rpc3BsYXknXSA9ICF2YWx1ZSA/IDAgOiB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMucHJvcHMub25GaXhlZCkgdGhpcy5wcm9wcy5vbkZpeGVkKHRoaXMuc3RhdGUuYW1vdW50KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVEYXRhKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiIGRpc3BsYXk9XCLDl1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja0Nsb3NlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19IGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fSBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9IHN0eWxlPXtidG4uc3R5bGV9IHNpemU9e2J0bi5zaXplfSBkaXNwbGF5PXtidG4uZGlzcGxheX0gb25DbGljaz17ZSA9PiBidG4uYWN0aW9uKHRoaXMsIGJ0biwgZSl9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFNpemVDbGFzcygpe1xuICAgIGlmKCF0aGlzLnByb3BzLnNpemUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICBpZih0aGlzLnByb3BzLnNpemUud2lkdGgpe1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnNpemUud2lkdGggKyAndycpXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5zaXplLmhlaWdodCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgKyAnaCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5DRU5URVI6XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUmVjdCA9IHRoaXMuZ2V0Q2VudGVyUmVjdChyZWN0LndpZHRoLCByZWN0LmhlaWdodClcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LnRvcCAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbGxlZ2FsIHBvc2l0aW9uS2V5IGAnICsgcG9zaXRpb24gKyAnYCBpcyBzcGVjaWZpZWQnO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJDRU5URVJcIlxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZXhlY3V0ZSgpXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==