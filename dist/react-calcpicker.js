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
	          buttons: this.props.buttons
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
	      format: '0,0[.]0[000000000]',
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
	
	  Calculator.prototype.inputNumber = function inputNumber(number) {
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
	
	    if (this.state.operator.value) {
	      display = this.calc(parseFloat(amount, 10), this.state.operator.value, parseFloat(display, 10));
	    }
	
	    amount = display;
	
	    this.setState({
	      operator: {},
	      unit: {},
	      display: display,
	      amount: amount,
	      appendMode: false
	    }, callback);
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
	      this.inputNumber('.');
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
	
	  Calculator.prototype.render = function render() {
	    var _this3 = this;
	
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
	    calc.inputNumber('1');
	  },
	  two: function two(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('2');
	  },
	  three: function three(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('3');
	  },
	  four: function four(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('4');
	  },
	  five: function five(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('5');
	  },
	  six: function six(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('6');
	  },
	  seven: function seven(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('7');
	  },
	  eight: function eight(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('8');
	  },
	  nine: function nine(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('9');
	  },
	  zero: function zero(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('0');
	  },
	  doubleZero: function doubleZero(calc, btnProps, event) {
	    btnProps.component.refs.element.focus();
	    calc.inputNumber('00');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzOTBiOTQyMDAzOWE4ZjE2NjcwNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJudW1lcmFsXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsXCIsXCJhbWRcIjpcIm51bWVyYWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0FjdGlvbi5qcyJdLCJuYW1lcyI6WyJDYWxjUGlja2VyIiwiUmVjdCIsIkFjdGlvbiIsInByb3BzIiwibG9jYWxlIiwic3RhdGUiLCJvcGVuQ2FsY3VsYXRvciIsImFtb3VudCIsImluaXRpYWxBbW91bnQiLCJ3aW5kb3ciLCJvbmtleWRvd24iLCJlIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJyZWZzIiwiY2FsY3VsYXRvciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJvbkNsaWNrQW1vdW50Iiwic2V0U3RhdGUiLCJvbkNsb3NlQ2FsY3VsYXRvciIsInJlbmRlciIsImNsYXNzTmFtZSIsImZvcm1hdCIsImN1cnJlbmN5Rm9ybWF0IiwiYnV0dG9uIiwicG9zaXRpb25zIiwiQ29tcG9uZW50IiwiQ2FsY3VsYXRvciIsImRpc3BsYXkiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwieCIsInkiLCJvbnJlc2l6ZSIsImFkanVzdFBvc2l0aW9uIiwid2luZG93UmVjdCIsImNyZWF0ZVdpdGhXaW5kb3ciLCJidXR0b25SZWN0IiwiY3JlYXRlV2l0aEVsZW1lbnQiLCJjYWxjUmVjdCIsIm5ld0NhbGNSZWN0IiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsInBvc0tleSIsInJlY3QiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsIkNFTlRFUiIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiaW5wdXROdW1iZXIiLCJudW1iZXIiLCJjYWxjIiwibGVmdCIsInJpZ2h0IiwidmFsdWUiLCJleGVjdXRlIiwiY2FsbGJhY2siLCJwYXJzZUZsb2F0IiwiaW5wdXRPcGVyYXRvciIsImJ0blByb3BzIiwiaW5wdXREZWNpbWFsIiwiaW5kZXhPZiIsImlucHV0UGVyY2VudCIsImNsZWFyIiwiYWxsQ2xlYXIiLCJkZWxldGUiLCJuZXdTdGF0ZSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2NhbGVEYXRhIiwidHJhbnNmb3JtIiwib25DbGlja0Nsb3NlIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50IiwiZWxlbSIsInN0eWxlIiwic2l6ZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRTaXplQ2xhc3MiLCJjbGFzc05hbWVzIiwid2lkdGgiLCJwdXNoIiwiaGVpZ2h0IiwidG9wIiwiZ2V0Q2VudGVyUmVjdCIsImNlbnRlciIsImNsb25lIiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlc3VsdCIsImJvdHRvbSIsImR1bXAiLCJvcmlnaW5Cb3R0b20iLCJvcmlnaW5SaWdodCIsInBvc2l0aW9uIiwiUklHSFRfQk9UVE9NIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsImV4cGVjdGVkUmVjdCIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIm9uZSIsImV2ZW50IiwiZWxlbWVudCIsImZvY3VzIiwidHdvIiwidGhyZWUiLCJmb3VyIiwiZml2ZSIsInNpeCIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwiemVybyIsImRvdWJsZVplcm8iLCJkZWNpbWFsIiwicGVyY2VudCIsInBsdXMiLCJtaW51cyIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24i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QXdCQyxRQUF4QjtBQUNELElBcEVhO0FBcUVkb0YsVUFBTyxlQUFTNUYsSUFBVCxFQUFlUSxRQUFmLEVBQXlCaUUsS0FBekIsRUFBK0I7QUFDcENqRSxjQUFTaUIsU0FBVCxDQUFtQmxFLElBQW5CLENBQXdCbUgsT0FBeEIsQ0FBZ0NDLEtBQWhDO0FBQ0EzRSxVQUFLSSxPQUFMO0FBQ0QsSUF4RWE7QUF5RWRTLGFBQVUsa0JBQVNiLElBQVQsRUFBZVEsUUFBZixFQUF5QmlFLEtBQXpCLEVBQStCO0FBQ3ZDakUsY0FBU2lCLFNBQVQsQ0FBbUJsRSxJQUFuQixDQUF3Qm1ILE9BQXhCLENBQWdDQyxLQUFoQztBQUNBM0UsVUFBS2EsUUFBTDtBQUNELElBNUVhO0FBNkVkRCxVQUFPLGVBQVNaLElBQVQsRUFBZVEsUUFBZixFQUF5QmlFLEtBQXpCLEVBQStCO0FBQ3BDakUsY0FBU2lCLFNBQVQsQ0FBbUJsRSxJQUFuQixDQUF3Qm1ILE9BQXhCLENBQWdDQyxLQUFoQztBQUNBM0UsVUFBS1ksS0FBTDtBQUNELElBaEZhO0FBaUZkaUYsY0FBVyxtQkFBUzdGLElBQVQsRUFBZVEsUUFBZixFQUF5QmlFLEtBQXpCLEVBQStCO0FBQ3hDakUsY0FBU2lCLFNBQVQsQ0FBbUJsRSxJQUFuQixDQUF3Qm1ILE9BQXhCLENBQWdDQyxLQUFoQztBQUNBM0UsVUFBS2MsTUFBTDtBQUNEO0FBcEZhLEVBQWhCOzttQkF1RmV4RSxNIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm51bWVyYWxcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJjbGFzcy1uYW1lc1wiLCBcInJlYWN0LXBvcnRhbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wibG9jYWxlc1wiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM5MGI5NDIwMDM5YThmMTY2NzA3IiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JlYWN0LXBvcnRhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudFxuICAgIH1cblxuICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgIHRoaXMucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYnRuLmFjdGlvbih0aGlzLnJlZnMuY2FsY3VsYXRvciwgYnRuLCBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQW1vdW50KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VDYWxjdWxhdG9yKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyXCI+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja0Ftb3VudChlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5hbW91bnQpLmZvcm1hdCh0aGlzLnByb3BzLmN1cnJlbmN5Rm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrIGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VDYWxjdWxhdG9yKCl9PlxuICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsQW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICBidXR0b249e3RoaXMucmVmcy5idXR0b259XG4gICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbEFtb3VudCxcbiAgICAgIGFtb3VudDogcHJvcHMuaW5pdGlhbEFtb3VudCxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuICB9XG5cbiAgYWRqdXN0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLnJlZnMuY2FsY3VsYXRvcil7XG4gICAgICBjb25zdCB3aW5kb3dSZWN0ID0gUmVjdC5jcmVhdGVXaXRoV2luZG93KClcbiAgICAgIGNvbnN0IGJ1dHRvblJlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucHJvcHMuYnV0dG9uKTtcbiAgICAgIGNvbnN0IGNhbGNSZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnJlZnMuY2FsY3VsYXRvciwgdGhpcy5zdGF0ZS54LCB0aGlzLnN0YXRlLnkpO1xuXG4gICAgICBsZXQgbmV3Q2FsY1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc0tleSA9IHRoaXMucHJvcHMucG9zaXRpb25zW2ldXG4gICAgICAgIGNvbnN0IHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgbmV3Q2FsY1JlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgUmVjdC5DRU5URVIpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICB5OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1ZLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXROdW1iZXIobnVtYmVyKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5hbW91bnQ7XG5cbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLmNhbGMocGFyc2VGbG9hdChhbW91bnQsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgIH1cblxuICAgIGFtb3VudCA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgY2FsbGJhY2spXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dE51bWJlcignLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICBhbW91bnQ6ICcwJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgdW5pdDoge30sXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSgpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYodmFsdWUgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIXZhbHVlID8gMCA6IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVEYXRhKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17e3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiIGRpc3BsYXk9XCLDl1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja0Nsb3NlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19IGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fSBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9IHN0eWxlPXtidG4uc3R5bGV9IHNpemU9e2J0bi5zaXplfSBkaXNwbGF5PXtidG4uZGlzcGxheX0gb25DbGljaz17ZSA9PiBidG4uYWN0aW9uKHRoaXMsIGJ0biwgZSl9IC8+XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFNpemVDbGFzcygpe1xuICAgIGlmKCF0aGlzLnByb3BzLnNpemUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICBpZih0aGlzLnByb3BzLnNpemUud2lkdGgpe1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnNpemUud2lkdGggKyAndycpXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5zaXplLmhlaWdodCl7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgKyAnaCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXM7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5nZXRTaXplQ2xhc3MoKSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5DRU5URVI6XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkUmVjdCA9IHRoaXMuZ2V0Q2VudGVyUmVjdChyZWN0LndpZHRoLCByZWN0LmhlaWdodClcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgZXhwZWN0ZWRSZWN0LnRvcCAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbGxlZ2FsIHBvc2l0aW9uS2V5IGAnICsgcG9zaXRpb24gKyAnYCBpcyBzcGVjaWZpZWQnO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJDRU5URVJcIlxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE51bWJlcignMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0TnVtYmVyKCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE51bWJlcignMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE51bWJlcignNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE51bWJlcignNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0TnVtYmVyKCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE51bWJlcignNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXROdW1iZXIoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXROdW1iZXIoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXROdW1iZXIoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXROdW1iZXIoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgYnRuUHJvcHMuY29tcG9uZW50LnJlZnMuZWxlbWVudC5mb2N1cygpXG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZXhlY3V0ZSgpXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBidG5Qcm9wcy5jb21wb25lbnQucmVmcy5lbGVtZW50LmZvY3VzKClcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGJ0blByb3BzLmNvbXBvbmVudC5yZWZzLmVsZW1lbnQuZm9jdXMoKVxuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==