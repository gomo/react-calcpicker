(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("class-names"), require("numeral/locales"), require("prop-types"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "class-names", "numeral/locales", "prop-types", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("class-names"), require("numeral/locales"), require("prop-types"), require("react-dom"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["classNames"], root["locales"], root["PropTypes"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

  _createClass(Rect, [{
    key: 'getCenterRect',
    value: function getCenterRect(width, height) {
      var center = {
        x: this.left + this.width / 2,
        y: this.top + this.height / 2
      };

      return new Rect(center.y - height / 2, center.x - width / 2, width, height);
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new Rect(this.top, this.left, this.width, this.height, this.transformX, this.transformY);
    }
  }, {
    key: 'transform',
    value: function transform(x, y) {
      this.top = this.originTop + y;
      this.left = this.originLeft + x;
      this.transformX = x;
      this.transformY = y;
      return this;
    }
  }, {
    key: 'contains',
    value: function contains(rect) {
      var result = this.left <= rect.left && this.right >= rect.right && this.top <= rect.top && this.bottom >= rect.bottom;
      return result;
    }
  }, {
    key: 'dump',
    value: function dump() {
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
    }
  }, {
    key: 'getRelativeRect',
    value: function getRelativeRect(rect, position) {
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
    }
  }, {
    key: 'getOverlappingRect',
    value: function getOverlappingRect(rect) {
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
    }
  }, {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Global = __webpack_require__(2);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = exports.Rect = exports.CalcPicker = undefined;

var _CalcPicker = __webpack_require__(7);

var _CalcPicker2 = _interopRequireDefault(_CalcPicker);

var _Rect = __webpack_require__(1);

var _Rect2 = _interopRequireDefault(_Rect);

var _Action = __webpack_require__(5);

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CalcPicker = _CalcPicker2.default;
exports.Rect = _Rect2.default;
exports.Action = _Action2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__(3);

var _numeral2 = _interopRequireDefault(_numeral);

__webpack_require__(8);

var _Calculator = __webpack_require__(9);

var _Calculator2 = _interopRequireDefault(_Calculator);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Rect = __webpack_require__(1);

var _Rect2 = _interopRequireDefault(_Rect);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Action = __webpack_require__(5);

var _Action2 = _interopRequireDefault(_Action);

var _Global = __webpack_require__(2);

var _Global2 = _interopRequireDefault(_Global);

var _classNames = __webpack_require__(4);

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

    var _this = _possibleConstructorReturn(this, (CalcPicker.__proto__ || Object.getPrototypeOf(CalcPicker)).call(this, props));

    _numeral2.default.locale(props.locale);
    _this.state = {
      openCalculator: false,
      value: props.initialValue
    };

    _this.calculatorRef = _react2.default.createRef();
    _this.buttonRef = _react2.default.createRef();
    return _this;
  }

  _createClass(CalcPicker, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.initialValue != prevProps.initialValue && this.state.value != this.props.initialValue) {
        this.setState({ 'value': this.props.initialValue });
      }

      if (this.props.locale != prevProps.locale) {
        _numeral2.default.locale(this.props.locale);
      }
    }
  }, {
    key: 'onClickPicker',
    value: function onClickPicker(e) {
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
    }
  }, {
    key: 'onClosePortal',
    value: function onClosePortal() {
      //Set the openCalculator to false when clicking the overlay or closing with the ESC key.
      if (this.state.openCalculator == true) {
        this.setState({ openCalculator: false });
      }
    }
  }, {
    key: 'changeValue',
    value: function changeValue(value) {
      if (this.state.value != value) {
        this.setState({ value: value });
        this.props.onChange(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: (0, _classNames2.default)('react-calcpicker', this.props.wrapperClass) },
        _react2.default.createElement(
          'button',
          { ref: this.buttonRef, className: (0, _classNames2.default)(this.props.className, this.props.buttonClass), onClick: function onClick(e) {
              return _this3.onClickPicker(e);
            } },
          (0, _numeral2.default)(this.state.value).format(this.props.format)
        ),
        this.state.openCalculator && _reactDom2.default.createPortal(_react2.default.createElement(
          _react2.default.Fragment,
          null,
          this.props.closeOnOutsideClick && _react2.default.createElement('div', {
            onClick: function onClick(e) {
              return _this3.onClosePortal();
            },
            style: {
              position: "fixed",
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: this.props.zIndex
            }
          }),
          _react2.default.createElement(_Calculator2.default, {
            title: this.props.title,
            ref: this.calculatorRef,
            initialValue: this.state.value,
            onClickClose: function onClickClose() {
              return _this3.setState({ openCalculator: false });
            },
            positions: this.props.positions,
            buttons: this.props.buttons,
            onCalculated: function onCalculated(value) {
              return _this3.changeValue(value);
            },
            closeButton: this.props.closeButton,
            closeOnEnterAction: this.props.closeOnEnterAction,
            buttonWidth: this.props.buttonWidth,
            buttonHeight: this.props.buttonHeight,
            buttonMargin: this.props.buttonMargin,
            zIndex: this.props.zIndex + 1,
            button: this.buttonRef.current
          })
        ), document.body)
      );
    }
  }]);

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
  },
  zIndex: 1
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__(3);

var _numeral2 = _interopRequireDefault(_numeral);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Rect = __webpack_require__(1);

var _Rect2 = _interopRequireDefault(_Rect);

var _Global = __webpack_require__(2);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

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

    _this.wrapperRef = _react2.default.createRef();
    return _this;
  }

  _createClass(Calculator, [{
    key: 'adjustPosition',
    value: function adjustPosition() {
      if (this.wrapperRef.current) {
        var windowRect = _Rect2.default.createWithWindow();
        var buttonRect = _Rect2.default.createWithElement(this.props.button);
        var calcRect = _Rect2.default.createWithElement(this.wrapperRef.current, this.state.x, this.state.y);
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
    }
  }, {
    key: 'inputToDisplay',
    value: function inputToDisplay(number) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var strDisplay = _this2.state.display.toString();
        if (strDisplay !== '0' && _this2.state.appendMode) {
          _this2.setState({
            display: strDisplay + number
          }, resolve);
        } else {
          _this2.setState({
            appendMode: true,
            display: number
          }, resolve);
        }
      });
    }
  }, {
    key: 'calc',
    value: function calc(left, operator, right) {
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
    }
  }, {
    key: 'execute',
    value: function execute() {
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
    }
  }, {
    key: 'inputOperator',
    value: function inputOperator(operator, btnProps) {
      var _this3 = this;

      return new Promise(function (resolve) {
        if (_this3.state.appendMode) {
          _this3.execute(function () {
            _this3.setState({
              appendMode: false,
              operator: {
                value: operator,
                display: btnProps.display
              }
            }, resolve);
          });
        } else {
          _this3.setState({
            operator: {
              value: operator,
              display: btnProps.display
            }
          }, resolve);
        }
      });
    }
  }, {
    key: 'inputDecimal',
    value: function inputDecimal() {
      if (this.state.display.indexOf('.') === -1) {
        return this.inputToDisplay('.');
      }

      return Promise.resolve();
    }
  }, {
    key: 'inputPercent',
    value: function inputPercent(btnProps) {
      var _this4 = this;

      return new Promise(function (resolve) {
        if (_this4.state.operator.value) {
          _this4.setState({ unit: {
              value: '%',
              display: btnProps.display
            } }, resolve);
        } else {
          _this4.setState({ display: _this4.state.display / 100 }, resolve);
        }
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _this5 = this;

      return new Promise(function (resolve) {
        if (_this5.state.appendMode) {
          _this5.setState({
            display: '0',
            appendMode: false,
            unit: {}
          }, resolve);
        } else {
          resolve();
        }
      });
    }
  }, {
    key: 'allClear',
    value: function allClear() {
      var _this6 = this;

      return new Promise(function (resolve) {
        _this6.setState({
          display: '0',
          value: '0',
          operator: {},
          appendMode: false,
          unit: {}
        }, resolve);
      });
    }
  }, {
    key: 'delete',
    value: function _delete() {
      var _this7 = this;

      return new Promise(function (resolve) {
        if (_this7.state.appendMode) {
          var newState = {};
          var newDisplay = _this7.state.display.toString();
          if (newDisplay === '0') {
            newState['unit'] = {};
          }
          newDisplay = newDisplay.substr(0, newDisplay.length - 1);
          newState['display'] = !newDisplay ? 0 : newDisplay;
          _this7.setState(newState, resolve);
        } else {
          resolve();
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.adjustPosition();
      _Global2.default.currentCalclator = this;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_Global2.default.currentCalclator === this) {
        _Global2.default.currentCalclator = undefined;
      }
    }
  }, {
    key: 'fix',
    value: function fix() {
      if (this.props.onCalculated) this.props.onCalculated(this.state.value);
    }
  }, {
    key: 'close',
    value: function close() {
      this.props.onClickClose();
    }
  }, {
    key: 'onClickButton',
    value: function onClickButton(btnProps, event) {
      _Global2.default.currentCalclator = this;
      btnProps.action(this, btnProps, event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var style = { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' };
      if (this.props.zIndex !== undefined) {
        style['zIndex'] = this.props.zIndex;
      }
      return _react2.default.createElement(
        'div',
        { ref: this.wrapperRef, className: 'react-calcpicker__calculator', style: style, onClick: function onClick(e) {
            return _Global2.default.currentCalclator = _this8;
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
                return _this8.close();
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
                  return _this8.onClickButton(btn, e);
                },
                width: _this8.props.buttonWidth,
                height: _this8.props.buttonHeight,
                margin: _this8.props.buttonMargin
              });
            })
          );
        })
      );
    }
  }]);

  return Calculator;
}(_react2.default.Component);

exports.default = Calculator;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classNames = __webpack_require__(4);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
  }

  _createClass(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      this.props.onClick(e);
      return false;
    }
  }, {
    key: 'getButtonStyle',
    value: function getButtonStyle() {
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
    }
  }, {
    key: 'render',
    value: function render() {
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
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYWUzNzRlMzVlNDU4Y2Q1MGZhZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iXSwibmFtZXMiOlsiUmVjdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiY2VudGVyIiwieCIsInkiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVjdCIsInJlc3VsdCIsInJpZ2h0IiwiYm90dG9tIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsIlJJR0hUX0JPVFRPTSIsImNsb25lIiwidHJhbnNmb3JtIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIldJTkRPV19DRU5URVIiLCJleHBlY3RlZFJlY3QiLCJnZXRDZW50ZXJSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImNyZWF0ZVdpdGhFbGVtZW50IiwiZWxlbSIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyIsIkFjdGlvbiIsIm9uZSIsImNhbGMiLCJidG5Qcm9wcyIsImV2ZW50IiwiaW5wdXRUb0Rpc3BsYXkiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImRlY2ltYWwiLCJpbnB1dERlY2ltYWwiLCJwZXJjZW50IiwiaW5wdXRQZXJjZW50IiwicGx1cyIsImlucHV0T3BlcmF0b3IiLCJtaW51cyIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJlbnRlciIsImV4ZWN1dGUiLCJmaXgiLCJwcm9wcyIsImNsb3NlT25FbnRlckFjdGlvbiIsImNsb3NlIiwiYWxsQ2xlYXIiLCJjbGVhciIsImJhY2tzcGFjZSIsImRlbGV0ZSIsIkNhbGNQaWNrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRDYWxjbGF0b3IiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJpbml0aWFsVmFsdWUiLCJjYWxjdWxhdG9yUmVmIiwiY3JlYXRlUmVmIiwiYnV0dG9uUmVmIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic2V0U3RhdGUiLCJzaG91bGRPcGVuIiwiZXhjbHVzaW9uR3JvdXAiLCJhbHJlYWR5T3BlbmQiLCJwaWNrZXIiLCJwdXNoIiwib25DaGFuZ2UiLCJ3cmFwcGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJidXR0b25DbGFzcyIsIm9uQ2xpY2tQaWNrZXIiLCJmb3JtYXQiLCJjcmVhdGVQb3J0YWwiLCJjbG9zZU9uT3V0c2lkZUNsaWNrIiwib25DbG9zZVBvcnRhbCIsInpJbmRleCIsInRpdGxlIiwicG9zaXRpb25zIiwiY2hhbmdlVmFsdWUiLCJjbG9zZUJ1dHRvbiIsImJ1dHRvbldpZHRoIiwiYnV0dG9uSGVpZ2h0IiwiYnV0dG9uTWFyZ2luIiwiY3VycmVudCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheSIsImRlZmF1bHRQcm9wcyIsImtleSIsImtleUNvZGUiLCJzaGlmdEtleSIsInVuZGVmaW5lZCIsIkNhbGN1bGF0b3IiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndyYXBwZXJSZWYiLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImJ1dHRvbiIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJQcm9taXNlIiwic3RyRGlzcGxheSIsInRvU3RyaW5nIiwicmVzb2x2ZSIsImNhbGxiYWNrIiwiY2FsY3VsYXRlZCIsInBhcnNlRmxvYXQiLCJpbmRleE9mIiwibmV3U3RhdGUiLCJuZXdEaXNwbGF5Iiwic3Vic3RyIiwib25DYWxjdWxhdGVkIiwib25DbGlja0Nsb3NlIiwibWFyZ2luIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50Iiwib25DbGlja0J1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ0b3RhbE1hcmdpbiIsInByZXZCdXR0b24iLCJtYXJnaW5MZWZ0IiwiZ2V0QnV0dG9uU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCQSxJO0FBRW5CLGdCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNFO0FBQUEsUUFBaENDLFVBQWdDLHVFQUFuQixDQUFtQjtBQUFBLFFBQWhCQyxVQUFnQix1RUFBSCxDQUFHOztBQUFBOztBQUNwRSxTQUFLTCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7a0NBOEJhSCxLLEVBQU9DLE0sRUFBTztBQUMxQixVQUFNRyxTQUFTO0FBQ2JDLFdBQUcsS0FBS04sSUFBTCxHQUFhLEtBQUtDLEtBQUwsR0FBYSxDQURoQjtBQUViTSxXQUFHLEtBQUtSLEdBQUwsR0FBWSxLQUFLRyxNQUFMLEdBQWM7QUFGaEIsT0FBZjs7QUFLQSxhQUFPLElBQUlKLElBQUosQ0FDTE8sT0FBT0UsQ0FBUCxHQUFZTCxTQUFTLENBRGhCLEVBRUxHLE9BQU9DLENBQVAsR0FBWUwsUUFBUSxDQUZmLEVBR0xBLEtBSEssRUFJTEMsTUFKSyxDQUFQO0FBTUQ7Ozs0QkFFTTtBQUNMLGFBQU8sSUFBSUosSUFBSixDQUNMLEtBQUtDLEdBREEsRUFFTCxLQUFLQyxJQUZBLEVBR0wsS0FBS0MsS0FIQSxFQUlMLEtBQUtDLE1BSkEsRUFLTCxLQUFLQyxVQUxBLEVBTUwsS0FBS0MsVUFOQSxDQUFQO0FBUUQ7Ozs4QkFFU0UsQyxFQUFHQyxDLEVBQUU7QUFDYixXQUFLUixHQUFMLEdBQVcsS0FBS1MsU0FBTCxHQUFpQkQsQ0FBNUI7QUFDQSxXQUFLUCxJQUFMLEdBQVksS0FBS1MsVUFBTCxHQUFrQkgsQ0FBOUI7QUFDQSxXQUFLSCxVQUFMLEdBQWtCRyxDQUFsQjtBQUNBLFdBQUtGLFVBQUwsR0FBa0JHLENBQWxCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUUcsSSxFQUFLO0FBQ1osVUFBTUMsU0FBUyxLQUFLWCxJQUFMLElBQWFVLEtBQUtWLElBQWxCLElBRWIsS0FBS1ksS0FBTCxJQUFjRixLQUFLRSxLQUZOLElBSWIsS0FBS2IsR0FBTCxJQUFZVyxLQUFLWCxHQUpKLElBTWIsS0FBS2MsTUFBTCxJQUFlSCxLQUFLRyxNQU50QjtBQU9BLGFBQU9GLE1BQVA7QUFDRDs7OzJCQUVLO0FBQ0osYUFBTztBQUNMWixhQUFLLEtBQUtBLEdBREw7QUFFTEMsY0FBTSxLQUFLQSxJQUZOO0FBR0xhLGdCQUFRLEtBQUtBLE1BSFI7QUFJTEQsZUFBTyxLQUFLQSxLQUpQO0FBS0xYLGVBQU8sS0FBS0EsS0FMUDtBQU1MQyxnQkFBUSxLQUFLQSxNQU5SO0FBT0xNLG1CQUFXLEtBQUtBLFNBUFg7QUFRTEMsb0JBQVksS0FBS0EsVUFSWjtBQVNMSyxzQkFBYyxLQUFLQSxZQVRkO0FBVUxDLHFCQUFhLEtBQUtBLFdBVmI7QUFXTFosb0JBQVksS0FBS0EsVUFYWjtBQVlMQyxvQkFBWSxLQUFLQTtBQVpaLE9BQVA7QUFjRDs7O29DQUVlTSxJLEVBQU1NLFEsRUFBUztBQUM3QixjQUFPQSxRQUFQO0FBQ0UsYUFBS2xCLEtBQUttQixZQUFWO0FBQ0UsaUJBQU9QLEtBQUtRLEtBQUwsR0FBYUMsU0FBYixDQUNMLEtBQUtuQixJQUFMLEdBQVlVLEtBQUtELFVBRFosRUFFTCxLQUFLSSxNQUFMLEdBQWNILEtBQUtGLFNBRmQsQ0FBUDtBQUlGLGFBQUtWLEtBQUtzQixXQUFWO0FBQ0UsaUJBQU9WLEtBQUtRLEtBQUwsR0FBYUMsU0FBYixDQUNMLEtBQUtQLEtBQUwsR0FBYUYsS0FBS0ssV0FEYixFQUVMLEtBQUtGLE1BQUwsR0FBY0gsS0FBS0YsU0FGZCxDQUFQO0FBSUYsYUFBS1YsS0FBS3VCLFFBQVY7QUFDRSxpQkFBT1gsS0FBS1EsS0FBTCxHQUFhQyxTQUFiLENBQ0wsS0FBS1AsS0FBTCxHQUFhRixLQUFLSyxXQURiLEVBRUwsS0FBS2hCLEdBQUwsR0FBV1csS0FBS0ksWUFGWCxDQUFQO0FBSUYsYUFBS2hCLEtBQUt3QixTQUFWO0FBQ0UsaUJBQU9aLEtBQUtRLEtBQUwsR0FBYUMsU0FBYixDQUNMLEtBQUtuQixJQUFMLEdBQVlVLEtBQUtELFVBRFosRUFFTCxLQUFLVixHQUFMLEdBQVdXLEtBQUtJLFlBRlgsQ0FBUDtBQUlGLGFBQUtoQixLQUFLeUIsYUFBVjtBQUNFLGNBQU1DLGVBQWUsS0FBS0MsYUFBTCxDQUFtQmYsS0FBS1QsS0FBeEIsRUFBK0JTLEtBQUtSLE1BQXBDLENBQXJCO0FBQ0EsaUJBQU9RLEtBQUtRLEtBQUwsR0FBYUMsU0FBYixDQUNMSyxhQUFheEIsSUFBYixHQUFvQlUsS0FBS0QsVUFEcEIsRUFFTGUsYUFBYXpCLEdBQWIsR0FBbUJXLEtBQUtGLFNBRm5CLENBQVA7QUFJRjtBQUNFLGdCQUFNLDBCQUEwQlEsUUFBMUIsR0FBcUMsZ0JBQTNDO0FBNUJKO0FBOEJEOzs7dUNBRWtCTixJLEVBQUs7QUFDdEIsVUFBTVgsTUFBTTJCLEtBQUtDLEdBQUwsQ0FBUyxLQUFLNUIsR0FBZCxFQUFtQlcsS0FBS1gsR0FBeEIsQ0FBWjtBQUNBLFVBQU1DLE9BQU8wQixLQUFLQyxHQUFMLENBQVMsS0FBSzNCLElBQWQsRUFBb0JVLEtBQUtWLElBQXpCLENBQWI7QUFDQSxVQUFNWSxRQUFRYyxLQUFLRSxHQUFMLENBQVMsS0FBS2hCLEtBQWQsRUFBcUJGLEtBQUtFLEtBQTFCLENBQWQ7QUFDQSxVQUFNQyxTQUFTYSxLQUFLRSxHQUFMLENBQVMsS0FBS2YsTUFBZCxFQUFzQkgsS0FBS0csTUFBM0IsQ0FBZjs7QUFFQSxVQUFJWixRQUFRVyxRQUFRWixJQUFwQjtBQUNBLFVBQUlFLFNBQVNXLFNBQVNkLEdBQXRCO0FBQ0EsVUFBSUUsUUFBUSxDQUFSLElBQWFDLFNBQVMsQ0FBMUIsRUFBNkI7QUFDekIsZUFBTyxJQUFJSixJQUFKLENBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQkMsS0FBcEIsRUFBMkJDLE1BQTNCLENBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLElBQVA7QUFDSDtBQUNGOzs7d0JBdklXO0FBQ1YsYUFBTyxLQUFLSCxHQUFMLEdBQVcsS0FBS0csTUFBdkI7QUFDRDs7O3dCQUVVO0FBQ1QsYUFBTyxLQUFLRixJQUFMLEdBQVksS0FBS0MsS0FBeEI7QUFDRDs7O3dCQUVjO0FBQ2IsYUFBTyxLQUFLRixHQUFMLEdBQVcsS0FBS0ssVUFBdkI7QUFDRDs7O3dCQUVlO0FBQ2QsYUFBTyxLQUFLSixJQUFMLEdBQVksS0FBS0csVUFBeEI7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLEtBQUtLLFNBQUwsR0FBaUIsS0FBS04sTUFBN0I7QUFDRDs7O3dCQUVnQjtBQUNmLGFBQU8sS0FBS08sVUFBTCxHQUFrQixLQUFLUixLQUE5QjtBQUNEOzs7d0JBRVM7QUFDUixhQUFPLEtBQUtBLEtBQUwsR0FBYSxLQUFLQyxNQUF6QjtBQUNEOzs7Ozs7a0JBckNrQkosSTs7O0FBcUpyQkEsS0FBSytCLGlCQUFMLEdBQXlCLFVBQUNDLElBQUQsRUFBMEM7QUFBQSxNQUFuQzNCLFVBQW1DLHVFQUF0QixDQUFzQjtBQUFBLE1BQW5CQyxVQUFtQix1RUFBTixDQUFNOztBQUNqRSxNQUFHLENBQUMwQixJQUFKLEVBQVM7QUFDUCxXQUFPLElBQUloQyxJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUFQO0FBQ0Q7QUFDRCxNQUFNaUMsZUFBZUQsS0FBS0UscUJBQUwsRUFBckI7O0FBR0EsTUFBTUMsT0FBT0MsU0FBU0QsSUFBdEI7QUFDQSxNQUFNRSxRQUFRRCxTQUFTRSxlQUF2Qjs7QUFFQSxNQUFNQyxZQUFZQyxPQUFPQyxXQUFQLElBQXNCSixNQUFNRSxTQUE1QixJQUF5Q0osS0FBS0ksU0FBaEU7QUFDQSxNQUFNRyxhQUFhRixPQUFPRyxXQUFQLElBQXNCTixNQUFNSyxVQUE1QixJQUEwQ1AsS0FBS08sVUFBbEU7O0FBRUEsTUFBTUUsWUFBWVAsTUFBTU8sU0FBTixJQUFtQlQsS0FBS1MsU0FBeEIsSUFBcUMsQ0FBdkQ7QUFDQSxNQUFNQyxhQUFhUixNQUFNUSxVQUFOLElBQW9CVixLQUFLVSxVQUF6QixJQUF1QyxDQUExRDs7QUFFQSxTQUFPLElBQUk3QyxJQUFKLENBQ0xpQyxhQUFhaEMsR0FBYixHQUFtQnNDLFNBQW5CLEdBQStCSyxTQUQxQixFQUVMWCxhQUFhL0IsSUFBYixHQUFvQndDLFVBQXBCLEdBQWlDRyxVQUY1QixFQUdMWixhQUFhOUIsS0FIUixFQUlMOEIsYUFBYTdCLE1BSlIsRUFLTEMsVUFMSyxFQU1MQyxVQU5LLENBQVA7QUFRRCxDQXhCRDs7QUEwQkFOLEtBQUs4QyxnQkFBTCxHQUF3QixZQUFNO0FBQzVCLFNBQU8sSUFBSTlDLElBQUosQ0FDTHdDLE9BQU9DLFdBQVAsSUFBc0JMLFNBQVNFLGVBQVQsQ0FBeUJDLFNBRDFDLEVBRUxDLE9BQU9HLFdBQVAsSUFBc0JQLFNBQVNFLGVBQVQsQ0FBeUJJLFVBRjFDLEVBR0xOLFNBQVNFLGVBQVQsQ0FBeUJTLFdBSHBCLEVBSUxYLFNBQVNFLGVBQVQsQ0FBeUJVLFlBSnBCLENBQVA7QUFNRCxDQVBEOztBQVNBQyxPQUFPQyxjQUFQLENBQXNCbEQsSUFBdEIsRUFBNEIsV0FBNUIsRUFBeUM7QUFDdkNtRCxjQUFZLEtBRDJCO0FBRXZDQyxnQkFBYyxLQUZ5QjtBQUd2Q0MsWUFBVSxLQUg2QjtBQUl2Q0MsU0FBTztBQUpnQyxDQUF6Qzs7QUFPQUwsT0FBT0MsY0FBUCxDQUFzQmxELElBQXRCLEVBQTRCLFVBQTVCLEVBQXdDO0FBQ3RDbUQsY0FBWSxLQUQwQjtBQUV0Q0MsZ0JBQWMsS0FGd0I7QUFHdENDLFlBQVUsS0FINEI7QUFJdENDLFNBQU87QUFKK0IsQ0FBeEM7O0FBT0FMLE9BQU9DLGNBQVAsQ0FBc0JsRCxJQUF0QixFQUE0QixjQUE1QixFQUE0QztBQUMxQ21ELGNBQVksS0FEOEI7QUFFMUNDLGdCQUFjLEtBRjRCO0FBRzFDQyxZQUFVLEtBSGdDO0FBSTFDQyxTQUFPO0FBSm1DLENBQTVDOztBQU9BTCxPQUFPQyxjQUFQLENBQXNCbEQsSUFBdEIsRUFBNEIsYUFBNUIsRUFBMkM7QUFDekNtRCxjQUFZLEtBRDZCO0FBRXpDQyxnQkFBYyxLQUYyQjtBQUd6Q0MsWUFBVSxLQUgrQjtBQUl6Q0MsU0FBTztBQUprQyxDQUEzQzs7QUFPQUwsT0FBT0MsY0FBUCxDQUFzQmxELElBQXRCLEVBQTRCLGVBQTVCLEVBQTZDO0FBQzNDbUQsY0FBWSxLQUQrQjtBQUUzQ0MsZ0JBQWMsS0FGNkI7QUFHM0NDLFlBQVUsS0FIaUM7QUFJM0NDLFNBQU87QUFKb0MsQ0FBN0MsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwTk1DLE07Ozs7Ozs7d0JBRWtCO0FBQ3BCLGFBQU8sS0FBS0MsaUJBQVo7QUFDRCxLO3NCQUVvQkYsSyxFQUFNO0FBQ3pCLFdBQUtFLGlCQUFMLEdBQXlCRixLQUF6QjtBQUNEOzs7Ozs7QUFHSCxJQUFNRyxJQUFJLElBQUlGLE1BQUosRUFBVjtrQkFDZUUsQzs7Ozs7O0FDWmYsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVBLElBQU1DLFNBQVU7QUFDZEMsT0FBSyxhQUFTQyxJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ2xDRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0FIYTtBQUlkQyxPQUFLLGFBQVNKLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDbENGLFNBQUtHLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxHQU5hO0FBT2RFLFNBQU8sZUFBU0wsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNwQ0YsU0FBS0csY0FBTCxDQUFvQixHQUFwQjtBQUNELEdBVGE7QUFVZEcsUUFBTSxjQUFTTixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ25DRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0FaYTtBQWFkSSxRQUFNLGNBQVNQLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDbkNGLFNBQUtHLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxHQWZhO0FBZ0JkSyxPQUFLLGFBQVNSLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDbENGLFNBQUtHLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxHQWxCYTtBQW1CZE0sU0FBTyxlQUFTVCxJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3BDRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0FyQmE7QUFzQmRPLFNBQU8sZUFBU1YsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNwQ0YsU0FBS0csY0FBTCxDQUFvQixHQUFwQjtBQUNELEdBeEJhO0FBeUJkUSxRQUFNLGNBQVNYLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDbkNGLFNBQUtHLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxHQTNCYTtBQTRCZFMsUUFBTSxjQUFTWixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ25DRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0E5QmE7QUErQmRVLGNBQVksb0JBQVNiLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDekNGLFNBQUtHLGNBQUwsQ0FBb0IsSUFBcEI7QUFDRCxHQWpDYTtBQWtDZFcsV0FBUyxpQkFBU2QsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUN0Q0YsU0FBS2UsWUFBTDtBQUNELEdBcENhO0FBcUNkQyxXQUFTLGlCQUFTaEIsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUN0Q0YsU0FBS2lCLFlBQUwsQ0FBa0JoQixRQUFsQjtBQUNELEdBdkNhO0FBd0NkaUIsUUFBTSxjQUFTbEIsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNuQ0YsU0FBS21CLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0JsQixRQUF4QjtBQUNELEdBMUNhO0FBMkNkbUIsU0FBTyxlQUFTcEIsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNwQ0YsU0FBS21CLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0JsQixRQUF4QjtBQUNELEdBN0NhO0FBOENkb0Isa0JBQWdCLHdCQUFTckIsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUM3Q0YsU0FBS21CLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0JsQixRQUF4QjtBQUNELEdBaERhO0FBaURkcUIsWUFBVSxrQkFBU3RCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDdkNGLFNBQUttQixhQUFMLENBQW1CLEdBQW5CLEVBQXdCbEIsUUFBeEI7QUFDRCxHQW5EYTtBQW9EZHNCLFNBQU8sZUFBU3ZCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDcENGLFNBQUt3QixPQUFMLENBQWEsWUFBTTtBQUNqQnhCLFdBQUt5QixHQUFMO0FBQ0EsVUFBR3pCLEtBQUswQixLQUFMLENBQVdDLGtCQUFkLEVBQWlDO0FBQy9CM0IsYUFBSzRCLEtBQUw7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQTNEYTtBQTREZEMsWUFBVSxrQkFBUzdCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDdkNGLFNBQUs2QixRQUFMO0FBQ0QsR0E5RGE7QUErRGRDLFNBQU8sZUFBUzlCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDcENGLFNBQUs4QixLQUFMO0FBQ0QsR0FqRWE7QUFrRWRDLGFBQVcsbUJBQVMvQixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3hDRixTQUFLZ0MsTUFBTDtBQUNEO0FBcEVhLENBQWhCOztrQkF1RWVsQyxNOzs7Ozs7Ozs7Ozs7OztBQ3pFZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUVRbUMsVTtRQUFZN0YsSTtRQUFNMEQsTTs7Ozs7Ozs7Ozs7Ozs7O0FDSjFCOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUFsQixPQUFPc0QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDLE1BQUcsaUJBQU9DLGdCQUFWLEVBQTJCO0FBQ3pCLHFCQUFPQSxnQkFBUCxDQUF3QlYsS0FBeEIsQ0FBOEJXLE9BQTlCLENBQXNDQyxPQUF0QyxDQUE4QztBQUFBLGFBQU9DLElBQUlELE9BQUosQ0FBWSxlQUFPO0FBQ3RFLFlBQUdFLElBQUlDLE9BQUosSUFBZUQsSUFBSUMsT0FBSixDQUFZTixDQUFaLENBQWxCLEVBQWlDO0FBQy9CQSxZQUFFTyxjQUFGO0FBQ0FGLGNBQUlHLE1BQUosQ0FBVyxpQkFBT1AsZ0JBQWxCLEVBQW9DSSxHQUFwQyxFQUF5Q0wsQ0FBekM7QUFDRDtBQUNGLE9BTG9ELENBQVA7QUFBQSxLQUE5QztBQU1EO0FBQ0YsQ0FURDs7SUFXcUJGLFU7OztBQUVuQixzQkFBWVAsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixzQkFBUWtCLE1BQVIsQ0FBZWxCLE1BQU1rQixNQUFyQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxzQkFBZ0IsS0FETDtBQUVYcEQsYUFBT2dDLE1BQU1xQjtBQUZGLEtBQWI7O0FBS0EsVUFBS0MsYUFBTCxHQUFxQixnQkFBTUMsU0FBTixFQUFyQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsZ0JBQU1ELFNBQU4sRUFBakI7QUFUaUI7QUFVbEI7Ozs7dUNBRWtCRSxTLEVBQVdDLFMsRUFBVTtBQUN0QyxVQUFHLEtBQUsxQixLQUFMLENBQVdxQixZQUFYLElBQTJCSSxVQUFVSixZQUFyQyxJQUFxRCxLQUFLRixLQUFMLENBQVduRCxLQUFYLElBQW9CLEtBQUtnQyxLQUFMLENBQVdxQixZQUF2RixFQUFvRztBQUNsRyxhQUFLTSxRQUFMLENBQWMsRUFBQyxTQUFTLEtBQUszQixLQUFMLENBQVdxQixZQUFyQixFQUFkO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLckIsS0FBTCxDQUFXa0IsTUFBWCxJQUFxQk8sVUFBVVAsTUFBbEMsRUFBeUM7QUFDdkMsMEJBQVFBLE1BQVIsQ0FBZSxLQUFLbEIsS0FBTCxDQUFXa0IsTUFBMUI7QUFDRDtBQUNGOzs7a0NBRWFULEMsRUFBRTtBQUFBOztBQUNkQSxRQUFFTyxjQUFGO0FBQ0EsVUFBRyxLQUFLaEIsS0FBTCxDQUFXNEIsVUFBWCxPQUE0QixLQUEvQixFQUFxQztBQUNuQyxlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFHLEtBQUs1QixLQUFMLENBQVc2QixjQUFkLEVBQTZCO0FBQzNCLFlBQUlDLGVBQWUsS0FBbkI7QUFDQSxhQUFLOUIsS0FBTCxDQUFXNkIsY0FBWCxDQUEwQmpCLE9BQTFCLENBQWtDLGtCQUFVO0FBQzFDLGNBQUdtQixpQkFBSCxFQUFvQkQsZUFBZSxJQUFmO0FBQ3BCLGNBQUdDLE9BQU9aLEtBQVAsQ0FBYUMsY0FBaEIsRUFBK0I7QUFDN0JXLG1CQUFPSixRQUFQLENBQWdCLEVBQUNQLGdCQUFnQixLQUFqQixFQUFoQjtBQUNEO0FBQ0YsU0FMRDs7QUFPQSxZQUFHLENBQUNVLFlBQUosRUFBaUI7QUFDZixlQUFLOUIsS0FBTCxDQUFXNkIsY0FBWCxDQUEwQkcsSUFBMUIsQ0FBK0IsSUFBL0I7QUFDRDtBQUNGO0FBQ0QsV0FBS0wsUUFBTCxDQUFjLEVBQUNQLGdCQUFnQixJQUFqQixFQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7OztvQ0FFYztBQUNiO0FBQ0EsVUFBRyxLQUFLRCxLQUFMLENBQVdDLGNBQVgsSUFBNkIsSUFBaEMsRUFBcUM7QUFDbkMsYUFBS08sUUFBTCxDQUFjLEVBQUNQLGdCQUFnQixLQUFqQixFQUFkO0FBQ0Q7QUFDRjs7O2dDQUVXcEQsSyxFQUFNO0FBQ2hCLFVBQUcsS0FBS21ELEtBQUwsQ0FBV25ELEtBQVgsSUFBb0JBLEtBQXZCLEVBQTZCO0FBQzNCLGFBQUsyRCxRQUFMLENBQWMsRUFBQzNELE9BQU9BLEtBQVIsRUFBZDtBQUNBLGFBQUtnQyxLQUFMLENBQVdpQyxRQUFYLENBQW9CakUsS0FBcEI7QUFDRDtBQUNGOzs7NkJBRU87QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsMEJBQVcsa0JBQVgsRUFBK0IsS0FBS2dDLEtBQUwsQ0FBV2tDLFlBQTFDLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQVEsS0FBSyxLQUFLVixTQUFsQixFQUE2QixXQUFXLDBCQUFXLEtBQUt4QixLQUFMLENBQVdtQyxTQUF0QixFQUFpQyxLQUFLbkMsS0FBTCxDQUFXb0MsV0FBNUMsQ0FBeEMsRUFBa0csU0FBUyxpQkFBQzNCLENBQUQ7QUFBQSxxQkFBTyxPQUFLNEIsYUFBTCxDQUFtQjVCLENBQW5CLENBQVA7QUFBQSxhQUEzRztBQUNHLGlDQUFRLEtBQUtVLEtBQUwsQ0FBV25ELEtBQW5CLEVBQTBCc0UsTUFBMUIsQ0FBaUMsS0FBS3RDLEtBQUwsQ0FBV3NDLE1BQTVDO0FBREgsU0FERjtBQUlHLGFBQUtuQixLQUFMLENBQVdDLGNBQVgsSUFBNkIsbUJBQVNtQixZQUFULENBQzVCO0FBQUEsMEJBQU8sUUFBUDtBQUFBO0FBQ0csZUFBS3ZDLEtBQUwsQ0FBV3dDLG1CQUFYLElBQ0M7QUFDRSxxQkFBUztBQUFBLHFCQUFLLE9BQUtDLGFBQUwsRUFBTDtBQUFBLGFBRFg7QUFFRSxtQkFBTztBQUNMN0csd0JBQVUsT0FETDtBQUVMZixxQkFBTyxNQUZGO0FBR0xDLHNCQUFRLE1BSEg7QUFJTEgsbUJBQUssQ0FKQTtBQUtMQyxvQkFBTSxDQUxEO0FBTUxZLHFCQUFPLENBTkY7QUFPTEMsc0JBQVEsQ0FQSDtBQVFMaUgsc0JBQVEsS0FBSzFDLEtBQUwsQ0FBVzBDO0FBUmQ7QUFGVCxZQUZKO0FBZ0JFO0FBQ0UsbUJBQU8sS0FBSzFDLEtBQUwsQ0FBVzJDLEtBRHBCO0FBRUUsaUJBQUssS0FBS3JCLGFBRlo7QUFHRSwwQkFBYyxLQUFLSCxLQUFMLENBQVduRCxLQUgzQjtBQUlFLDBCQUFjO0FBQUEscUJBQU0sT0FBSzJELFFBQUwsQ0FBYyxFQUFDUCxnQkFBZ0IsS0FBakIsRUFBZCxDQUFOO0FBQUEsYUFKaEI7QUFLRSx1QkFBVyxLQUFLcEIsS0FBTCxDQUFXNEMsU0FMeEI7QUFNRSxxQkFBUyxLQUFLNUMsS0FBTCxDQUFXVyxPQU50QjtBQU9FLDBCQUFjO0FBQUEscUJBQVMsT0FBS2tDLFdBQUwsQ0FBaUI3RSxLQUFqQixDQUFUO0FBQUEsYUFQaEI7QUFRRSx5QkFBYSxLQUFLZ0MsS0FBTCxDQUFXOEMsV0FSMUI7QUFTRSxnQ0FBb0IsS0FBSzlDLEtBQUwsQ0FBV0Msa0JBVGpDO0FBVUUseUJBQWEsS0FBS0QsS0FBTCxDQUFXK0MsV0FWMUI7QUFXRSwwQkFBYyxLQUFLL0MsS0FBTCxDQUFXZ0QsWUFYM0I7QUFZRSwwQkFBYyxLQUFLaEQsS0FBTCxDQUFXaUQsWUFaM0I7QUFhRSxvQkFBUSxLQUFLakQsS0FBTCxDQUFXMEMsTUFBWCxHQUFvQixDQWI5QjtBQWNFLG9CQUFRLEtBQUtsQixTQUFMLENBQWUwQjtBQWR6QjtBQWhCRixTQUQ0QixFQWtDNUJwRyxTQUFTRCxJQWxDbUI7QUFKaEMsT0FERjtBQTBDRDs7OztFQXhHcUMsZ0JBQU1zRyxTOztrQkFBekI1QyxVOzs7QUEyR3JCQSxXQUFXNkMsU0FBWCxHQUF1QjtBQUNyQi9CLGdCQUFjLG9CQUFVZ0MsTUFESDtBQUVyQmYsVUFBUSxvQkFBVWdCLE1BRkc7QUFHckJWLGFBQVcsb0JBQVVXLE9BQVYsQ0FBa0Isb0JBQVVDLEtBQVYsQ0FBZ0IsQ0FDM0MsZUFBSzNILFlBRHNDLEVBRTNDLGVBQUtHLFdBRnNDLEVBRzNDLGVBQUtFLFNBSHNDLEVBSTNDLGVBQUtELFFBSnNDLEVBSzNDLGVBQUtFLGFBTHNDLENBQWhCLENBQWxCLENBSFU7QUFVckJ3RSxXQUFTLG9CQUFVNEMsT0FBVixDQUNQLG9CQUFVQSxPQUFWLENBQ0Usb0JBQVVFLEtBQVYsQ0FBZ0I7QUFDZEMsV0FBTyxvQkFBVUYsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLE9BQXZCLEVBQWdDLE1BQWhDLEVBQXdDLFNBQXhDLENBQWhCLENBRE87QUFFZEcsYUFBUyxvQkFBVUMsU0FBVixDQUFvQixDQUMzQixvQkFBVUMsTUFEaUIsRUFFM0Isb0JBQVVQLE1BRmlCLENBQXBCLEVBR05RLE9BTFc7QUFNZEMsVUFBTSxvQkFBVU4sS0FBVixDQUFnQjtBQUNwQjVJLGFBQU8sb0JBQVV3SSxNQURHO0FBRXBCdkksY0FBUSxvQkFBVXVJO0FBRkUsS0FBaEIsQ0FOUTtBQVVkcEMsWUFBUSxvQkFBVStDLElBQVYsQ0FBZUMsVUFWVDtBQVdkbEQsYUFBUyxvQkFBVWlEO0FBWEwsR0FBaEIsQ0FERixDQURPLENBVlk7QUEyQnJCakIsZUFBYSxvQkFBVU0sTUEzQkY7QUE0QnJCTCxnQkFBYyxvQkFBVUssTUE1Qkg7QUE2QnJCSixnQkFBYyxvQkFBVUksTUE3Qkg7QUE4QnJCbEIsYUFBVyxvQkFBVW1CLE1BOUJBO0FBK0JyQnBCLGdCQUFjLG9CQUFVb0IsTUEvQkg7QUFnQ3JCbEIsZUFBYSxvQkFBVWtCLE1BaENGO0FBaUNyQlIsZUFBYSxvQkFBVWMsU0FBVixDQUFvQixDQUMvQixvQkFBVUMsTUFEcUIsRUFFL0Isb0JBQVVQLE1BRnFCLENBQXBCLENBakNRO0FBcUNyQnBDLFVBQVEsb0JBQVVvQyxNQXJDRztBQXNDckJyQixZQUFVLG9CQUFVK0IsSUFBVixDQUFlQyxVQXRDSjtBQXVDckJoRSxzQkFBb0Isb0JBQVVpRSxJQXZDVDtBQXdDckJ4QixVQUFRLG9CQUFVVyxNQXhDRztBQXlDckJWLFNBQU8sb0JBQVVXLE1BekNJO0FBMENyQmQsdUJBQXFCLG9CQUFVMEIsSUExQ1Y7QUEyQ3JCckMsa0JBQWdCLG9CQUFVc0MsS0EzQ0w7QUE0Q3JCdkMsY0FBWSxvQkFBVW9DO0FBNUNELENBQXZCOztBQStDQXpELFdBQVc2RCxZQUFYLEdBQTBCO0FBQ3hCL0MsZ0JBQWMsQ0FEVTtBQUV4QmlCLFVBQVEsVUFGZ0I7QUFHeEJNLGFBQVcsQ0FDVCxlQUFLL0csWUFESSxFQUVULGVBQUtHLFdBRkksRUFHVCxlQUFLRSxTQUhJLEVBSVQsZUFBS0QsUUFKSSxFQUtULGVBQUtFLGFBTEksQ0FIYTtBQVV4QjJHLGVBQWEsR0FWVztBQVd4Qm5DLFdBQVMsQ0FDUCxDQUNFLEVBQUMrQyxPQUFPLE1BQVIsRUFBZ0JDLFNBQVMsSUFBekIsRUFBK0IxQyxRQUFRLGlCQUFPZCxRQUE5QyxFQUF3RFksU0FBUztBQUFBLGFBQUtOLEVBQUU0RCxHQUFGLElBQVMsT0FBZDtBQUFBLEtBQWpFLEVBREYsRUFFRSxFQUFDWCxPQUFPLE1BQVIsRUFBZ0JDLFNBQVMsR0FBekIsRUFBOEIxQyxRQUFRLGlCQUFPWixTQUE3QyxFQUF3RFUsU0FBUztBQUFBLGFBQUtOLEVBQUU0RCxHQUFGLElBQVMsV0FBZDtBQUFBLEtBQWpFLEVBRkYsRUFHRSxFQUFDWCxPQUFPLE9BQVIsRUFBaUJDLFNBQVMsR0FBMUIsRUFBK0IxQyxRQUFRLGlCQUFPM0IsT0FBOUMsRUFBdUR5QixTQUFTO0FBQUEsYUFBS04sRUFBRTRELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBaEUsRUFIRixFQUlFLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU9yQixRQUFoRCxFQUEwRG1CLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUFuRSxFQUpGLENBRE8sRUFPUCxDQUNFLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU9sQyxLQUFoRCxFQUF1RGdDLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUFoRSxFQURGLEVBRUUsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDMUMsUUFBUSxpQkFBT2pDLEtBQWhELEVBQXVEK0IsU0FBUztBQUFBLGFBQUtOLEVBQUU0RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQWhFLEVBRkYsRUFHRSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMxQyxRQUFRLGlCQUFPaEMsSUFBaEQsRUFBc0Q4QixTQUFTO0FBQUEsYUFBS04sRUFBRTRELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBL0QsRUFIRixFQUlFLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU90QixjQUFoRCxFQUFnRW9CLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUF6RSxFQUpGLENBUE8sRUFZTCxDQUNBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU9yQyxJQUFoRCxFQUFzRG1DLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUEvRCxFQURBLEVBRUEsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDMUMsUUFBUSxpQkFBT3BDLElBQWhELEVBQXNEa0MsU0FBUztBQUFBLGFBQUtOLEVBQUU0RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQS9ELEVBRkEsRUFHQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMxQyxRQUFRLGlCQUFPbkMsR0FBaEQsRUFBcURpQyxTQUFTO0FBQUEsYUFBS04sRUFBRTRELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBOUQsRUFIQSxFQUlBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU92QixLQUFoRCxFQUF1RHFCLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUFoRSxFQUpBLENBWkssRUFpQkwsQ0FDQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMxQyxRQUFRLGlCQUFPNUMsR0FBaEQsRUFBcUQwQyxTQUFTO0FBQUEsYUFBS04sRUFBRTRELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBOUQsRUFEQSxFQUVBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU92QyxHQUFoRCxFQUFxRHFDLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUE5RCxFQUZBLEVBR0EsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDMUMsUUFBUSxpQkFBT3RDLEtBQWhELEVBQXVEb0MsU0FBUztBQUFBLGFBQUtOLEVBQUU0RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQWhFLEVBSEEsRUFJQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMxQyxRQUFRLGlCQUFPekIsSUFBaEQsRUFBc0R1QixTQUFTO0FBQUEsYUFBS04sRUFBRTRELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBL0QsRUFKQSxDQWpCSyxFQXNCTCxDQUNBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU8vQixJQUFoRCxFQUFzRDZCLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUEvRCxFQURBLEVBRUEsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLElBQTVCLEVBQWtDMUMsUUFBUSxpQkFBTzlCLFVBQWpELEVBQTZENEIsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxPQUFGLElBQWEsRUFBYixJQUFtQjdELEVBQUU4RCxRQUExQjtBQUFBLEtBQXRFLEVBRkEsRUFHQSxFQUFDYixPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMxQyxRQUFRLGlCQUFPN0IsT0FBaEQsRUFBeUQyQixTQUFTO0FBQUEsYUFBS04sRUFBRTRELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBbEUsRUFIQSxFQUlBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzFDLFFBQVEsaUJBQU9wQixLQUFoRCxFQUF1RGtCLFNBQVM7QUFBQSxhQUFLTixFQUFFNEQsR0FBRixJQUFTLEdBQVQsSUFBZ0I1RCxFQUFFNEQsR0FBRixJQUFTLE9BQTlCO0FBQUEsS0FBaEUsRUFKQSxDQXRCSyxDQVhlO0FBd0N4QnBFLHNCQUFvQixJQXhDSTtBQXlDeEI4QyxlQUFhLEVBekNXO0FBMEN4QkMsZ0JBQWMsRUExQ1U7QUEyQ3hCQyxnQkFBYyxDQTNDVTtBQTRDeEJULHVCQUFxQixJQTVDRztBQTZDeEJYLGtCQUFnQjJDLFNBN0NRO0FBOEN4QjVDLGNBQVk7QUFBQSxXQUFNLElBQU47QUFBQSxHQTlDWTtBQStDeEJjLFVBQVE7QUEvQ2dCLENBQTFCLEM7Ozs7OztBQ2hMQSwrQzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCK0IsVTs7O0FBRW5CLHNCQUFZekUsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLbUIsS0FBTCxHQUFhO0FBQ1h3QyxlQUFTM0QsTUFBTXFCLFlBREo7QUFFWHJELGFBQU9nQyxNQUFNcUIsWUFGRjtBQUdYcUQsa0JBQVksSUFIRDtBQUlYcEMsY0FBUSx1QkFKRztBQUtYcUMsZ0JBQVUsRUFMQztBQU1YQyxZQUFNLEVBTks7QUFPWDFKLFNBQUcsQ0FQUTtBQVFYQyxTQUFHO0FBUlEsS0FBYjs7QUFXQSxVQUFLMEosZUFBTCxHQUF1QixFQUF2Qjs7QUFFQTNILFdBQU80SCxRQUFQLEdBQWtCO0FBQUEsYUFBTSxNQUFLQyxjQUFMLEVBQU47QUFBQSxLQUFsQjs7QUFFQSxVQUFLQyxVQUFMLEdBQWtCLGdCQUFNekQsU0FBTixFQUFsQjtBQWpCaUI7QUFrQmxCOzs7O3FDQUVlO0FBQ2QsVUFBRyxLQUFLeUQsVUFBTCxDQUFnQjlCLE9BQW5CLEVBQTJCO0FBQ3pCLFlBQU0rQixhQUFhLGVBQUt6SCxnQkFBTCxFQUFuQjtBQUNBLFlBQU0wSCxhQUFhLGVBQUt6SSxpQkFBTCxDQUF1QixLQUFLdUQsS0FBTCxDQUFXbUYsTUFBbEMsQ0FBbkI7QUFDQSxZQUFNQyxXQUFXLGVBQUszSSxpQkFBTCxDQUF1QixLQUFLdUksVUFBTCxDQUFnQjlCLE9BQXZDLEVBQWdELEtBQUsvQixLQUFMLENBQVdqRyxDQUEzRCxFQUE4RCxLQUFLaUcsS0FBTCxDQUFXaEcsQ0FBekUsQ0FBakI7QUFDQSxZQUFNa0ssUUFBUSxFQUFkO0FBQ0EsWUFBSUMsY0FBY2QsU0FBbEI7QUFDQSxhQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLdkYsS0FBTCxDQUFXNEMsU0FBWCxDQUFxQjRDLE1BQXpDLEVBQWlERCxHQUFqRCxFQUFzRDtBQUNwRCxjQUFNRSxTQUFTLEtBQUt6RixLQUFMLENBQVc0QyxTQUFYLENBQXFCMkMsQ0FBckIsQ0FBZjtBQUNBLGNBQUlqSyxhQUFKO0FBQ0EsY0FBR21LLFVBQVUsZUFBS3RKLGFBQWxCLEVBQWdDO0FBQzlCYixtQkFBTzJKLFdBQVdTLGVBQVgsQ0FBMkJOLFFBQTNCLEVBQXFDSyxNQUFyQyxDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0xuSyxtQkFBTzRKLFdBQVdRLGVBQVgsQ0FBMkJOLFFBQTNCLEVBQXFDSyxNQUFyQyxDQUFQO0FBQ0Q7O0FBRURKLGdCQUFNckQsSUFBTixDQUFXMUcsSUFBWDtBQUNBLGNBQUcySixXQUFXVSxRQUFYLENBQW9CckssSUFBcEIsQ0FBSCxFQUE2QjtBQUMzQmdLLDBCQUFjaEssSUFBZDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxZQUFHLENBQUNnSyxXQUFKLEVBQWdCO0FBQ2RELGdCQUFNTyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVViLFdBQVdjLGtCQUFYLENBQThCRCxDQUE5QixFQUFpQ0UsSUFBakMsR0FBd0NmLFdBQVdjLGtCQUFYLENBQThCRixDQUE5QixFQUFpQ0csSUFBbkY7QUFBQSxXQUFYO0FBQ0FWLHdCQUFjRCxNQUFNLENBQU4sQ0FBZDtBQUNEOztBQUVELFlBQUdDLFdBQUgsRUFBZTtBQUNiLGVBQUszRCxRQUFMLENBQWM7QUFDWnpHLGVBQUdvSyxZQUFZdkssVUFESDtBQUVaSSxlQUFHbUssWUFBWXRLO0FBRkgsV0FBZDtBQUlEO0FBQ0Y7QUFDRjs7O21DQUVjcUksTSxFQUFPO0FBQUE7O0FBQ3BCLGFBQU8sSUFBSTRDLE9BQUosQ0FBWSxtQkFBVztBQUM1QixZQUFNQyxhQUFhLE9BQUsvRSxLQUFMLENBQVd3QyxPQUFYLENBQW1Cd0MsUUFBbkIsRUFBbkI7QUFDQSxZQUFHRCxlQUFlLEdBQWYsSUFBc0IsT0FBSy9FLEtBQUwsQ0FBV3VELFVBQXBDLEVBQStDO0FBQzdDLGlCQUFLL0MsUUFBTCxDQUFjO0FBQ1pnQyxxQkFBU3VDLGFBQWE3QztBQURWLFdBQWQsRUFFRytDLE9BRkg7QUFHRCxTQUpELE1BSU87QUFDTCxpQkFBS3pFLFFBQUwsQ0FBYztBQUNaK0Msd0JBQVksSUFEQTtBQUVaZixxQkFBU047QUFGRyxXQUFkLEVBR0crQyxPQUhIO0FBSUQ7QUFDRixPQVpNLENBQVA7QUFhRDs7O3lCQUVJeEwsSSxFQUFNK0osUSxFQUFVbkosSyxFQUFNO0FBQ3pCLGNBQVFtSixRQUFSO0FBQ0UsYUFBSyxHQUFMO0FBQ0UsY0FBRyxLQUFLeEQsS0FBTCxDQUFXeUQsSUFBWCxDQUFnQjVHLEtBQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzlCeEMsb0JBQVFaLFFBQVFZLFFBQVEsR0FBaEIsQ0FBUjtBQUNEOztBQUVELGlCQUFRWixPQUFPWSxLQUFmO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsY0FBRyxLQUFLMkYsS0FBTCxDQUFXeUQsSUFBWCxDQUFnQjVHLEtBQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzlCeEMsb0JBQVFaLFFBQVFZLFFBQVEsR0FBaEIsQ0FBUjtBQUNEOztBQUVELGlCQUFRWixPQUFPWSxLQUFmO0FBQ0YsYUFBSyxHQUFMO0FBQ0UsY0FBRyxLQUFLMkYsS0FBTCxDQUFXeUQsSUFBWCxDQUFnQjVHLEtBQWhCLElBQXlCLEdBQTVCLEVBQWdDO0FBQzlCeEMsb0JBQVFBLFFBQVEsR0FBaEI7QUFDRDs7QUFFRCxpQkFBT1osT0FBT1ksS0FBZDtBQUNGLGFBQUssR0FBTDtBQUNFLGNBQUcsS0FBSzJGLEtBQUwsQ0FBV3lELElBQVgsQ0FBZ0I1RyxLQUFoQixJQUF5QixHQUE1QixFQUFnQztBQUM5QnhDLG9CQUFRQSxRQUFRLEdBQWhCO0FBQ0Q7O0FBRUQsaUJBQU9aLE9BQU9ZLEtBQWQ7QUFDRjtBQUNFLGdCQUFNLHNCQUFzQm1KLFFBQXRCLEdBQWlDLGFBQXZDO0FBMUJKO0FBNEJEOzs7OEJBRTJCO0FBQUEsVUFBcEIwQixRQUFvQix1RUFBVCxZQUFNLENBQUUsQ0FBQzs7QUFDMUIsVUFBSTFDLFVBQVUsS0FBS3hDLEtBQUwsQ0FBV3dDLE9BQXpCO0FBQ0EsVUFBSTNGLFFBQVEsS0FBS21ELEtBQUwsQ0FBV25ELEtBQXZCO0FBQ0EsVUFBSXNJLGFBQWEsS0FBakI7QUFDQSxVQUFHLEtBQUtuRixLQUFMLENBQVd3RCxRQUFYLENBQW9CM0csS0FBdkIsRUFBNkI7QUFDM0IyRixrQkFBVSxLQUFLckYsSUFBTCxDQUFVaUksV0FBV3ZJLEtBQVgsRUFBa0IsRUFBbEIsQ0FBVixFQUFpQyxLQUFLbUQsS0FBTCxDQUFXd0QsUUFBWCxDQUFvQjNHLEtBQXJELEVBQTREdUksV0FBVzVDLE9BQVgsRUFBb0IsRUFBcEIsQ0FBNUQsQ0FBVjtBQUNBMkMscUJBQWEsSUFBYjtBQUNEOztBQUVEdEksY0FBUTJGLE9BQVI7O0FBRUEsV0FBS2hDLFFBQUwsQ0FBYztBQUNaZ0Qsa0JBQVUsRUFERTtBQUVaQyxjQUFNLEVBRk07QUFHWmpCLGlCQUFTQSxPQUhHO0FBSVozRixlQUFPQSxLQUpLO0FBS1owRyxvQkFBWTtBQUxBLE9BQWQsRUFNRyxZQUFNO0FBQ1AyQjtBQUNELE9BUkQ7QUFTRDs7O2tDQUVhMUIsUSxFQUFVcEcsUSxFQUFTO0FBQUE7O0FBQy9CLGFBQU8sSUFBSTBILE9BQUosQ0FBWSxtQkFBVztBQUM1QixZQUFHLE9BQUs5RSxLQUFMLENBQVd1RCxVQUFkLEVBQXlCO0FBQ3ZCLGlCQUFLNUUsT0FBTCxDQUFhLFlBQU07QUFDakIsbUJBQUs2QixRQUFMLENBQWM7QUFDWitDLDBCQUFZLEtBREE7QUFFWkMsd0JBQVU7QUFDUjNHLHVCQUFPMkcsUUFEQztBQUVSaEIseUJBQVNwRixTQUFTb0Y7QUFGVjtBQUZFLGFBQWQsRUFNR3lDLE9BTkg7QUFPRCxXQVJEO0FBU0QsU0FWRCxNQVVPO0FBQ0wsaUJBQUt6RSxRQUFMLENBQWM7QUFDWmdELHNCQUFVO0FBQ1IzRyxxQkFBTzJHLFFBREM7QUFFUmhCLHVCQUFTcEYsU0FBU29GO0FBRlY7QUFERSxXQUFkLEVBS0d5QyxPQUxIO0FBTUQ7QUFDRixPQW5CTSxDQUFQO0FBb0JEOzs7bUNBRWE7QUFDWixVQUFHLEtBQUtqRixLQUFMLENBQVd3QyxPQUFYLENBQW1CNkMsT0FBbkIsQ0FBMkIsR0FBM0IsTUFBb0MsQ0FBQyxDQUF4QyxFQUEwQztBQUN4QyxlQUFPLEtBQUsvSCxjQUFMLENBQW9CLEdBQXBCLENBQVA7QUFDRDs7QUFFRCxhQUFPd0gsUUFBUUcsT0FBUixFQUFQO0FBQ0Q7OztpQ0FFWTdILFEsRUFBUztBQUFBOztBQUNwQixhQUFPLElBQUkwSCxPQUFKLENBQVksbUJBQVc7QUFDNUIsWUFBRyxPQUFLOUUsS0FBTCxDQUFXd0QsUUFBWCxDQUFvQjNHLEtBQXZCLEVBQTZCO0FBQzNCLGlCQUFLMkQsUUFBTCxDQUFjLEVBQUNpRCxNQUFNO0FBQ25CNUcscUJBQU0sR0FEYTtBQUVuQjJGLHVCQUFTcEYsU0FBU29GO0FBRkMsYUFBUCxFQUFkLEVBR0l5QyxPQUhKO0FBSUQsU0FMRCxNQUtPO0FBQ0wsaUJBQUt6RSxRQUFMLENBQWMsRUFBQ2dDLFNBQVMsT0FBS3hDLEtBQUwsQ0FBV3dDLE9BQVgsR0FBcUIsR0FBL0IsRUFBZCxFQUFtRHlDLE9BQW5EO0FBQ0Q7QUFDRixPQVRNLENBQVA7QUFVRDs7OzRCQUVNO0FBQUE7O0FBQ0wsYUFBTyxJQUFJSCxPQUFKLENBQVksbUJBQVc7QUFDNUIsWUFBRyxPQUFLOUUsS0FBTCxDQUFXdUQsVUFBZCxFQUF5QjtBQUN2QixpQkFBSy9DLFFBQUwsQ0FBYztBQUNaZ0MscUJBQVMsR0FERztBQUVaZSx3QkFBWSxLQUZBO0FBR1pFLGtCQUFNO0FBSE0sV0FBZCxFQUlHd0IsT0FKSDtBQUtELFNBTkQsTUFNTztBQUNMQTtBQUNEO0FBQ0YsT0FWTSxDQUFQO0FBV0Q7OzsrQkFFUztBQUFBOztBQUNSLGFBQU8sSUFBSUgsT0FBSixDQUFZLG1CQUFXO0FBQzVCLGVBQUt0RSxRQUFMLENBQWM7QUFDWmdDLG1CQUFTLEdBREc7QUFFWjNGLGlCQUFPLEdBRks7QUFHWjJHLG9CQUFVLEVBSEU7QUFJWkQsc0JBQVksS0FKQTtBQUtaRSxnQkFBTTtBQUxNLFNBQWQsRUFNR3dCLE9BTkg7QUFPRCxPQVJNLENBQVA7QUFTRDs7OzhCQUVPO0FBQUE7O0FBQ04sYUFBTyxJQUFJSCxPQUFKLENBQVksbUJBQVc7QUFDNUIsWUFBRyxPQUFLOUUsS0FBTCxDQUFXdUQsVUFBZCxFQUF5QjtBQUN2QixjQUFNK0IsV0FBVyxFQUFqQjtBQUNBLGNBQUlDLGFBQWEsT0FBS3ZGLEtBQUwsQ0FBV3dDLE9BQVgsQ0FBbUJ3QyxRQUFuQixFQUFqQjtBQUNBLGNBQUdPLGVBQWUsR0FBbEIsRUFBc0I7QUFDcEJELHFCQUFTLE1BQVQsSUFBbUIsRUFBbkI7QUFDRDtBQUNEQyx1QkFBYUEsV0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkQsV0FBV2xCLE1BQVgsR0FBb0IsQ0FBekMsQ0FBYjtBQUNBaUIsbUJBQVMsU0FBVCxJQUFzQixDQUFDQyxVQUFELEdBQWMsQ0FBZCxHQUFrQkEsVUFBeEM7QUFDQSxpQkFBSy9FLFFBQUwsQ0FBYzhFLFFBQWQsRUFBd0JMLE9BQXhCO0FBQ0QsU0FURCxNQVNPO0FBQ0xBO0FBQ0Q7QUFDRixPQWJNLENBQVA7QUFjRDs7O3dDQUVrQjtBQUNqQixXQUFLckIsY0FBTDtBQUNBLHVCQUFPckUsZ0JBQVAsR0FBMEIsSUFBMUI7QUFDRDs7OzJDQUVxQjtBQUNwQixVQUFHLGlCQUFPQSxnQkFBUCxLQUE0QixJQUEvQixFQUFxQztBQUNuQyx5QkFBT0EsZ0JBQVAsR0FBMEI4RCxTQUExQjtBQUNEO0FBQ0Y7OzswQkFFSTtBQUNILFVBQUcsS0FBS3hFLEtBQUwsQ0FBVzRHLFlBQWQsRUFBNEIsS0FBSzVHLEtBQUwsQ0FBVzRHLFlBQVgsQ0FBd0IsS0FBS3pGLEtBQUwsQ0FBV25ELEtBQW5DO0FBQzdCOzs7NEJBRU07QUFDTCxXQUFLZ0MsS0FBTCxDQUFXNkcsWUFBWDtBQUNEOzs7a0NBRWF0SSxRLEVBQVVDLEssRUFBTTtBQUM1Qix1QkFBT2tDLGdCQUFQLEdBQTBCLElBQTFCO0FBQ0FuQyxlQUFTMEMsTUFBVCxDQUFnQixJQUFoQixFQUFzQjFDLFFBQXRCLEVBQWdDQyxLQUFoQztBQUNEOzs7NkJBRU87QUFBQTs7QUFDTixVQUFNa0YsUUFBUSxFQUFDM0gsMEJBQXdCLEtBQUtvRixLQUFMLENBQVdqRyxDQUFuQyxZQUEyQyxLQUFLaUcsS0FBTCxDQUFXaEcsQ0FBdEQsUUFBRCxFQUFkO0FBQ0EsVUFBRyxLQUFLNkUsS0FBTCxDQUFXMEMsTUFBWCxLQUFzQjhCLFNBQXpCLEVBQW1DO0FBQ2pDZCxjQUFNLFFBQU4sSUFBa0IsS0FBSzFELEtBQUwsQ0FBVzBDLE1BQTdCO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQSxVQUFLLEtBQUssS0FBS3NDLFVBQWYsRUFBMkIsV0FBVSw4QkFBckMsRUFBb0UsT0FBT3RCLEtBQTNFLEVBQWtGLFNBQVM7QUFBQSxtQkFBSyxpQkFBT2hELGdCQUFQLFNBQUw7QUFBQSxXQUEzRjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUscUNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDJDQUFmLEVBQTJELE9BQU8sRUFBQzdGLE9BQVMsS0FBS21GLEtBQUwsQ0FBVytDLFdBQVgsR0FBeUIsQ0FBMUIsR0FBZ0MsS0FBSy9DLEtBQUwsQ0FBV2lELFlBQVgsR0FBMEIsQ0FBM0QsR0FBaUUsS0FBSzRCLGVBQTlFLEVBQWxFO0FBQ0csaUJBQUs3RSxLQUFMLENBQVcyQztBQURkLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDRDQUFmO0FBQ0U7QUFDRSx5QkFBVSwyQ0FEWjtBQUVFLHVCQUFTLEtBQUszQyxLQUFMLENBQVc4QyxXQUZ0QjtBQUdFLHVCQUFTO0FBQUEsdUJBQU0sT0FBSzVDLEtBQUwsRUFBTjtBQUFBLGVBSFg7QUFJRSxxQkFBTyxLQUFLMkUsZUFKZDtBQUtFLHNCQUFRLEtBQUtBLGVBTGY7QUFNRSxzQkFBUSxLQUFLN0UsS0FBTCxDQUFXaUQ7QUFOckI7QUFERjtBQUpGLFNBREY7QUFnQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxzQ0FBZixFQUFzRCxPQUFPLEVBQUM2RCxRQUFRLEtBQUs5RyxLQUFMLENBQVdpRCxZQUFwQixFQUE3RDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsK0NBQWY7QUFBZ0UsaUJBQUs5QixLQUFMLENBQVd3RCxRQUFYLENBQW9CaEI7QUFBcEYsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNkNBQWY7QUFDRyxtQ0FBUSxLQUFLeEMsS0FBTCxDQUFXd0MsT0FBbkIsRUFBNEJyQixNQUE1QixDQUFtQyxLQUFLbkIsS0FBTCxDQUFXbUIsTUFBOUMsQ0FESDtBQUMwRCxpQkFBS25CLEtBQUwsQ0FBV3lELElBQVgsQ0FBZ0JqQjtBQUQxRTtBQUZGLFNBaEJGO0FBc0JHLGFBQUszRCxLQUFMLENBQVdXLE9BQVgsQ0FBbUJvRyxHQUFuQixDQUF1QixVQUFDbEcsR0FBRCxFQUFNbUcsTUFBTixFQUFpQjtBQUN2QyxpQkFDRTtBQUFBO0FBQUEsY0FBSyxLQUFLQSxNQUFWLEVBQWtCLFdBQVUsc0NBQTVCO0FBQ0duRyxnQkFBSWtHLEdBQUosQ0FBUSxVQUFDakcsR0FBRCxFQUFNbUcsTUFBTixFQUFpQjtBQUN4QixxQkFDRTtBQUNFLHFCQUFLO0FBQUEseUJBQVFuRyxJQUFJb0csU0FBSixHQUFnQnhLLElBQXhCO0FBQUEsaUJBRFA7QUFFRSw0QkFBWXVLLFNBQVMsQ0FBVCxHQUFhcEcsSUFBSW9HLFNBQVMsQ0FBYixDQUFiLEdBQStCLElBRjdDO0FBR0UscUJBQUtELFNBQVMsR0FBVCxHQUFlQyxNQUh0QjtBQUlFLDJCQUFXbkcsSUFBSXFCLFNBSmpCO0FBS0UsdUJBQU9yQixJQUFJNEMsS0FMYjtBQU1FLHNCQUFNNUMsSUFBSWlELElBTlo7QUFPRSx5QkFBU2pELElBQUk2QyxPQVBmO0FBUUUseUJBQVM7QUFBQSx5QkFBSyxPQUFLd0QsYUFBTCxDQUFtQnJHLEdBQW5CLEVBQXdCTCxDQUF4QixDQUFMO0FBQUEsaUJBUlg7QUFTRSx1QkFBTyxPQUFLVCxLQUFMLENBQVcrQyxXQVRwQjtBQVVFLHdCQUFRLE9BQUsvQyxLQUFMLENBQVdnRCxZQVZyQjtBQVdFLHdCQUFRLE9BQUtoRCxLQUFMLENBQVdpRDtBQVhyQixnQkFERjtBQWVELGFBaEJBO0FBREgsV0FERjtBQXFCRCxTQXRCQTtBQXRCSCxPQURGO0FBZ0REOzs7O0VBcFNxQyxnQkFBTUUsUzs7a0JBQXpCc0IsVTs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQjJDLE07OztBQUVuQixrQkFBWXBILEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7Ozs0QkFFT1MsQyxFQUFFO0FBQ1JBLFFBQUVPLGNBQUY7QUFDQSxXQUFLaEIsS0FBTCxDQUFXcUgsT0FBWCxDQUFtQjVHLENBQW5CO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7OztxQ0FFZTtBQUNkLFVBQU1pRCxRQUFRO0FBQ1o3SSxlQUFPLEtBQUttRixLQUFMLENBQVduRixLQUROO0FBRVpDLGdCQUFRLEtBQUtrRixLQUFMLENBQVdsRjtBQUZQLE9BQWQ7O0FBS0EsVUFBRyxLQUFLa0YsS0FBTCxDQUFXOEcsTUFBZCxFQUFxQjtBQUNuQnBELGNBQU1vRCxNQUFOLEdBQWUsS0FBSzlHLEtBQUwsQ0FBVzhHLE1BQTFCO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLOUcsS0FBTCxDQUFXK0QsSUFBZCxFQUFtQjtBQUNqQkwsY0FBTTlILFFBQU4sR0FBaUIsVUFBakI7QUFDQSxZQUFHLEtBQUtvRSxLQUFMLENBQVcrRCxJQUFYLENBQWdCakosTUFBaEIsSUFBMEIsQ0FBN0IsRUFBK0I7QUFDN0IsY0FBTXdNLGNBQWMsS0FBS3RILEtBQUwsQ0FBVzhHLE1BQVgsSUFBcUIsQ0FBQyxLQUFLOUcsS0FBTCxDQUFXK0QsSUFBWCxDQUFnQmpKLE1BQWhCLEdBQXlCLENBQTFCLElBQStCLENBQXBELENBQXBCO0FBQ0E0SSxnQkFBTTVJLE1BQU4sR0FBZ0I0SSxNQUFNNUksTUFBTixHQUFlLEtBQUtrRixLQUFMLENBQVcrRCxJQUFYLENBQWdCakosTUFBaEMsR0FBMEN3TSxXQUF6RDtBQUNBNUQsZ0JBQU0vSSxHQUFOLEdBQVksRUFBRyxLQUFLcUYsS0FBTCxDQUFXbEYsTUFBWCxJQUFxQixLQUFLa0YsS0FBTCxDQUFXK0QsSUFBWCxDQUFnQmpKLE1BQWhCLEdBQXlCLENBQTlDLENBQUQsR0FBcUR3TSxXQUF2RCxDQUFaO0FBQ0Q7O0FBRUQsWUFBRyxLQUFLdEgsS0FBTCxDQUFXK0QsSUFBWCxDQUFnQmxKLEtBQWhCLElBQXlCLENBQTVCLEVBQThCO0FBQzVCLGNBQU15TSxlQUFjLEtBQUt0SCxLQUFMLENBQVc4RyxNQUFYLElBQXFCLENBQUMsS0FBSzlHLEtBQUwsQ0FBVytELElBQVgsQ0FBZ0JsSixLQUFoQixHQUF3QixDQUF6QixJQUE4QixDQUFuRCxDQUFwQjtBQUNBNkksZ0JBQU03SSxLQUFOLEdBQWU2SSxNQUFNN0ksS0FBTixHQUFjLEtBQUttRixLQUFMLENBQVcrRCxJQUFYLENBQWdCbEosS0FBL0IsR0FBd0N5TSxZQUF0RDtBQUNEO0FBQ0Y7O0FBRUQsVUFBRyxLQUFLdEgsS0FBTCxDQUFXdUgsVUFBWCxJQUF5QixLQUFLdkgsS0FBTCxDQUFXdUgsVUFBWCxDQUFzQnhELElBQS9DLElBQXVELEtBQUsvRCxLQUFMLENBQVd1SCxVQUFYLENBQXNCeEQsSUFBdEIsQ0FBMkJsSixLQUFsRixJQUEyRixLQUFLbUYsS0FBTCxDQUFXdUgsVUFBWCxDQUFzQnhELElBQXRCLENBQTJCbEosS0FBM0IsSUFBb0MsQ0FBbEksRUFBb0k7QUFDbEksWUFBTXlNLGdCQUFjLEtBQUt0SCxLQUFMLENBQVc4RyxNQUFYLElBQXNCLEtBQUs5RyxLQUFMLENBQVd1SCxVQUFYLENBQXNCeEQsSUFBdEIsQ0FBMkJsSixLQUEzQixHQUFtQyxDQUFwQyxHQUF5QyxDQUE5RCxDQUFwQjtBQUNBNkksY0FBTThELFVBQU4sR0FBb0IsS0FBS3hILEtBQUwsQ0FBV25GLEtBQVgsR0FBbUIsS0FBS21GLEtBQUwsQ0FBV3VILFVBQVgsQ0FBc0J4RCxJQUF0QixDQUEyQmxKLEtBQS9DLEdBQXdEeU0sYUFBM0U7QUFDRDs7QUFFRCxhQUFPNUQsS0FBUDtBQUNEOzs7NkJBRU87QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQTtBQUNFLGVBQUksU0FETjtBQUVFLHFCQUFXLDBCQUNULHFDQURTLEVBRVQsS0FBSzFELEtBQUwsQ0FBVzBELEtBQVgsR0FBbUIseUNBQXlDLEtBQUsxRCxLQUFMLENBQVcwRCxLQUF2RSxHQUErRWMsU0FGdEUsRUFHVCxLQUFLeEUsS0FBTCxDQUFXbUMsU0FIRixDQUZiO0FBT0UsaUJBQU8sS0FBS3NGLGNBQUwsRUFQVDtBQVFFLG1CQUFTO0FBQUEsbUJBQUssT0FBS0osT0FBTCxDQUFhNUcsQ0FBYixDQUFMO0FBQUE7QUFSWDtBQVVHLGFBQUtULEtBQUwsQ0FBVzJEO0FBVmQsT0FERjtBQWNEOzs7O0VBM0RpQyxnQkFBTVIsUzs7a0JBQXJCaUUsTTs7Ozs7O0FDSHJCLGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJyZWFjdC1jYWxjcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcImNsYXNzLW5hbWVzXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwicHJvcC10eXBlc1wiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wibnVtZXJhbFwiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiYWUzNzRlMzVlNDU4Y2Q1MGZhZiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJjbGFzcyBHbG9iYWxcbntcbiAgZ2V0IGN1cnJlbnRDYWxjbGF0b3IoKXtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGNsYXRvclxuICB9XG5cbiAgc2V0IGN1cnJlbnRDYWxjbGF0b3IodmFsdWUpe1xuICAgIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3IgPSB2YWx1ZVxuICB9XG59XG5cbmNvbnN0IGcgPSBuZXcgR2xvYmFsKClcbmV4cG9ydCBkZWZhdWx0IGc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9HbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJ1xuXG5jb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3Ipe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLnByb3BzLmJ1dHRvbnMuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goYnRuID0+IHtcbiAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJ0bi5hY3Rpb24oR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IsIGJ0biwgZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0b3JSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuYnV0dG9uUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgaWYodGhpcy5wcm9wcy5pbml0aWFsVmFsdWUgIT0gcHJldlByb3BzLmluaXRpYWxWYWx1ZSAmJiB0aGlzLnN0YXRlLnZhbHVlICE9IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyd2YWx1ZSc6IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlfSlcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBwcmV2UHJvcHMubG9jYWxlKXtcbiAgICAgIG51bWVyYWwubG9jYWxlKHRoaXMucHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tQaWNrZXIoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMucHJvcHMuc2hvdWxkT3BlbigpID09PSBmYWxzZSl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwKXtcbiAgICAgIGxldCBhbHJlYWR5T3BlbmQgPSBmYWxzZVxuICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5mb3JFYWNoKHBpY2tlciA9PiB7XG4gICAgICAgIGlmKHBpY2tlciA9PT0gdGhpcykgYWxyZWFkeU9wZW5kID0gdHJ1ZVxuICAgICAgICBpZihwaWNrZXIuc3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgICAgIHBpY2tlci5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYoIWFscmVhZHlPcGVuZCl7XG4gICAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAucHVzaCh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLnZhbHVlICE9IHZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0pXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncmVhY3QtY2FsY3BpY2tlcicsIHRoaXMucHJvcHMud3JhcHBlckNsYXNzKX0+XG4gICAgICAgIDxidXR0b24gcmVmPXt0aGlzLmJ1dHRvblJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLmJ1dHRvbkNsYXNzKX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja1BpY2tlcihlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS52YWx1ZSkuZm9ybWF0KHRoaXMucHJvcHMuZm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICYmIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrICYmXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICAgICAgekluZGV4OiB0aGlzLnByb3BzLnpJbmRleFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgcmVmPXt0aGlzLmNhbGN1bGF0b3JSZWZ9XG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgICAgcG9zaXRpb25zPXt0aGlzLnByb3BzLnBvc2l0aW9uc31cbiAgICAgICAgICAgICAgYnV0dG9ucz17dGhpcy5wcm9wcy5idXR0b25zfVxuICAgICAgICAgICAgICBvbkNhbGN1bGF0ZWQ9e3ZhbHVlID0+IHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgICBjbG9zZUJ1dHRvbj17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgY2xvc2VPbkVudGVyQWN0aW9uPXt0aGlzLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbn1cbiAgICAgICAgICAgICAgYnV0dG9uV2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICAgIGJ1dHRvbkhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICAgIGJ1dHRvbk1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAgIHpJbmRleD17dGhpcy5wcm9wcy56SW5kZXggKyAxfVxuICAgICAgICAgICAgICBidXR0b249e3RoaXMuYnV0dG9uUmVmLmN1cnJlbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICwgZG9jdW1lbnQuYm9keSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhbGNQaWNrZXIucHJvcFR5cGVzID0ge1xuICBpbml0aWFsVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9zaXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0pKSxcbiAgYnV0dG9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2xpZ2h0JywgJ2RhcmsnLCAnd2FybmluZyddKSxcbiAgICAgICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBdKS5yZXF1aXJlLFxuICAgICAgICBzcGFuOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlclxuICAgICAgICB9KSxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBrZXlEb3duOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfSlcbiAgICApXG4gICksXG4gIGJ1dHRvbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbk1hcmdpbjogUHJvcFR5cGVzLm51bWJlcixcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJ1dHRvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICBdKSxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xvc2VPbkVudGVyQWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VPbk91dHNpZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGV4Y2x1c2lvbkdyb3VwOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNob3VsZE9wZW46IFByb3BUeXBlcy5mdW5jXG59XG5cbkNhbGNQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBpbml0aWFsVmFsdWU6IDAsXG4gIGZvcm1hdDogXCIwLDBbLl0wMFwiLFxuICBwb3NpdGlvbnM6IFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdLFxuICBjbG9zZUJ1dHRvbjogJ8OXJyxcbiAgYnV0dG9uczogW1xuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwiQUNcIiwgYWN0aW9uOiBBY3Rpb24uYWxsQ2xlYXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0NsZWFyJ30sXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIuKGkFwiLCBhY3Rpb246IEFjdGlvbi5iYWNrc3BhY2UsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0JhY2tzcGFjZSd9LFxuICAgICAge3N0eWxlOiBcImxpZ2h0XCIsIGRpc3BsYXk6IFwiJVwiLCBhY3Rpb246IEFjdGlvbi5wZXJjZW50LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICclJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsO3XCIsIGFjdGlvbjogQWN0aW9uLmRpdmlzaW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcvJ30sXG4gICAgXSxcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjdcIiwgYWN0aW9uOiBBY3Rpb24uc2V2ZW4sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzcnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOFwiLCBhY3Rpb246IEFjdGlvbi5laWdodCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI5XCIsIGFjdGlvbjogQWN0aW9uLm5pbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzknfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw5dcIiwgYWN0aW9uOiBBY3Rpb24ubXVsdGlwbGljYXRpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyonfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNFwiLCBhY3Rpb246IEFjdGlvbi5mb3VyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc0J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjVcIiwgYWN0aW9uOiBBY3Rpb24uZml2ZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI2XCIsIGFjdGlvbjogQWN0aW9uLnNpeCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNid9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCItXCIsIGFjdGlvbjogQWN0aW9uLm1pbnVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICctJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjFcIiwgYWN0aW9uOiBBY3Rpb24ub25lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcxJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjJcIiwgYWN0aW9uOiBBY3Rpb24udHdvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcyJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjNcIiwgYWN0aW9uOiBBY3Rpb24udGhyZWUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzMnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiK1wiLCBhY3Rpb246IEFjdGlvbi5wbHVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcrJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjBcIiwgYWN0aW9uOiBBY3Rpb24uemVybywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwMFwiLCBhY3Rpb246IEFjdGlvbi5kb3VibGVaZXJvLCBrZXlEb3duOiBlID0+IGUua2V5Q29kZSA9PSA0OCAmJiBlLnNoaWZ0S2V5fSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiLlwiLCBhY3Rpb246IEFjdGlvbi5kZWNpbWFsLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcuJ30sXG4gICAgICB7c3R5bGU6IFwid2FybmluZ1wiLCBkaXNwbGF5OiBcIj1cIiwgYWN0aW9uOiBBY3Rpb24uZW50ZXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJz0nIHx8IGUua2V5ID09ICdFbnRlcid9LFxuICAgIF1cbiAgXSxcbiAgY2xvc2VPbkVudGVyQWN0aW9uOiB0cnVlLFxuICBidXR0b25XaWR0aDogNDgsXG4gIGJ1dHRvbkhlaWdodDogMzIsXG4gIGJ1dHRvbk1hcmdpbjogMyxcbiAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgZXhjbHVzaW9uR3JvdXA6IHVuZGVmaW5lZCxcbiAgc2hvdWxkT3BlbjogKCkgPT4gdHJ1ZSxcbiAgekluZGV4OiAxXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJsb2NhbGVzXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiY29tbW9uanNcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiYW1kXCI6XCJudW1lcmFsL2xvY2FsZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLndyYXBwZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgYWRqdXN0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLndyYXBwZXJSZWYuY3VycmVudCl7XG4gICAgICBjb25zdCB3aW5kb3dSZWN0ID0gUmVjdC5jcmVhdGVXaXRoV2luZG93KClcbiAgICAgIGNvbnN0IGJ1dHRvblJlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucHJvcHMuYnV0dG9uKTtcbiAgICAgIGNvbnN0IGNhbGNSZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLndyYXBwZXJSZWYuY3VycmVudCwgdGhpcy5zdGF0ZS54LCB0aGlzLnN0YXRlLnkpO1xuICAgICAgY29uc3QgcmVjdHMgPSBbXVxuICAgICAgbGV0IG5ld0NhbGNSZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb3NLZXkgPSB0aGlzLnByb3BzLnBvc2l0aW9uc1tpXVxuICAgICAgICBsZXQgcmVjdDtcbiAgICAgICAgaWYocG9zS2V5ID09IFJlY3QuV0lORE9XX0NFTlRFUil7XG4gICAgICAgICAgcmVjdCA9IHdpbmRvd1JlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVjdCA9IGJ1dHRvblJlY3QuZ2V0UmVsYXRpdmVSZWN0KGNhbGNSZWN0LCBwb3NLZXkpXG4gICAgICAgIH1cblxuICAgICAgICByZWN0cy5wdXNoKHJlY3QpXG4gICAgICAgIGlmKHdpbmRvd1JlY3QuY29udGFpbnMocmVjdCkpe1xuICAgICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighbmV3Q2FsY1JlY3Qpe1xuICAgICAgICByZWN0cy5zb3J0KChhLCBiKSA9PiB3aW5kb3dSZWN0LmdldE92ZXJsYXBwaW5nUmVjdChiKS5hcmVhIC0gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYSkuYXJlYSlcbiAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0c1swXVxuICAgICAgfVxuXG4gICAgICBpZihuZXdDYWxjUmVjdCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHg6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVgsXG4gICAgICAgICAgeTogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRUb0Rpc3BsYXkobnVtYmVyKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBzdHJEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKHN0ckRpc3BsYXkgIT09ICcwJyAmJiB0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNwbGF5OiBzdHJEaXNwbGF5ICsgbnVtYmVyLFxuICAgICAgICB9LCByZXNvbHZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICAgIH0sIHJlc29sdmUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQodmFsdWUsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgICB0aGlzLmV4ZWN1dGUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sIHJlc29sdmUpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgICAgdmFsdWU6IG9wZXJhdG9yLFxuICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LCByZXNvbHZlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt1bml0OiB7XG4gICAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgICAgfX0sIHJlc29sdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9LCByZXNvbHZlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjbGVhcigpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICB1bml0OiB7fSxcbiAgICAgICAgfSwgcmVzb2x2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhbGxDbGVhcigpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgIHVuaXQ6IHt9LFxuICAgICAgfSwgcmVzb2x2ZSlcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgICBsZXQgbmV3RGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgICAgIGlmKG5ld0Rpc3BsYXkgPT09ICcwJyl7XG4gICAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgbmV3RGlzcGxheSA9IG5ld0Rpc3BsYXkuc3Vic3RyKDAsIG5ld0Rpc3BsYXkubGVuZ3RoIC0gMSk7XG4gICAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhbmV3RGlzcGxheSA/IDAgOiBuZXdEaXNwbGF5O1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlLCByZXNvbHZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5hZGp1c3RQb3NpdGlvbigpXG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGlmKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID09PSB0aGlzKSB7XG4gICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMucHJvcHMub25DYWxjdWxhdGVkKSB0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCh0aGlzLnN0YXRlLnZhbHVlKVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGJ0blByb3BzLCBldmVudCl7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzO1xuICAgIGJ0blByb3BzLmFjdGlvbih0aGlzLCBidG5Qcm9wcywgZXZlbnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLndyYXBwZXJSZWZ9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItdGl0bGVcIiBzdHlsZT17e3dpZHRoOiAoKHRoaXMucHJvcHMuYnV0dG9uV2lkdGggKiA0KSArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDYpKSAtIHRoaXMuY2xvc2VCdXR0b25TaXplfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCIgc3R5bGU9e3ttYXJnaW46IHRoaXMucHJvcHMuYnV0dG9uTWFyZ2lufX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfVxuICAgICAgICAgICAgICAgICAgICBwcmV2QnV0dG9uPXtidG5LZXkgPiAwID8gcm93W2J0bktleSAtIDFdIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0bi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbj17YnRuLnNwYW59XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2J0bi5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0J1dHRvbihidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==