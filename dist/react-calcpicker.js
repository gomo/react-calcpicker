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
            { key: rowKey, className: 'react-calcpicker__calculator-buttons', style: { height: _this8.props.buttonHeight + _this8.props.buttonMargin * 2 } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYjY3NjM4Yjg0ZGI3YjY2MjFhYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iXSwibmFtZXMiOlsiUmVjdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiY2VudGVyIiwieCIsInkiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVjdCIsInJlc3VsdCIsInJpZ2h0IiwiYm90dG9tIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsIlJJR0hUX0JPVFRPTSIsImNsb25lIiwidHJhbnNmb3JtIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIldJTkRPV19DRU5URVIiLCJleHBlY3RlZFJlY3QiLCJnZXRDZW50ZXJSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImNyZWF0ZVdpdGhFbGVtZW50IiwiZWxlbSIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyIsIkFjdGlvbiIsIm9uZSIsImNhbGMiLCJidG5Qcm9wcyIsImV2ZW50IiwiaW5wdXRUb0Rpc3BsYXkiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImRlY2ltYWwiLCJpbnB1dERlY2ltYWwiLCJwZXJjZW50IiwiaW5wdXRQZXJjZW50IiwicGx1cyIsImlucHV0T3BlcmF0b3IiLCJtaW51cyIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJlbnRlciIsImV4ZWN1dGUiLCJmaXgiLCJwcm9wcyIsImNsb3NlT25FbnRlckFjdGlvbiIsImNsb3NlIiwiYWxsQ2xlYXIiLCJjbGVhciIsImJhY2tzcGFjZSIsImRlbGV0ZSIsIkNhbGNQaWNrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRDYWxjbGF0b3IiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJpbml0aWFsVmFsdWUiLCJjYWxjdWxhdG9yUmVmIiwiY3JlYXRlUmVmIiwiYnV0dG9uUmVmIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic2V0U3RhdGUiLCJzaG91bGRPcGVuIiwiZXhjbHVzaW9uR3JvdXAiLCJhbHJlYWR5T3BlbmQiLCJwaWNrZXIiLCJwdXNoIiwib25DaGFuZ2UiLCJ3cmFwcGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJidXR0b25DbGFzcyIsIm9uQ2xpY2tQaWNrZXIiLCJmb3JtYXQiLCJjcmVhdGVQb3J0YWwiLCJjbG9zZU9uT3V0c2lkZUNsaWNrIiwib25DbG9zZVBvcnRhbCIsInpJbmRleCIsInRpdGxlIiwicG9zaXRpb25zIiwiY2hhbmdlVmFsdWUiLCJjbG9zZUJ1dHRvbiIsImJ1dHRvbldpZHRoIiwiYnV0dG9uSGVpZ2h0IiwiYnV0dG9uTWFyZ2luIiwiY3VycmVudCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheSIsImRlZmF1bHRQcm9wcyIsImtleSIsImtleUNvZGUiLCJzaGlmdEtleSIsInVuZGVmaW5lZCIsIkNhbGN1bGF0b3IiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndyYXBwZXJSZWYiLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImJ1dHRvbiIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJQcm9taXNlIiwic3RyRGlzcGxheSIsInRvU3RyaW5nIiwicmVzb2x2ZSIsImNhbGxiYWNrIiwiY2FsY3VsYXRlZCIsInBhcnNlRmxvYXQiLCJpbmRleE9mIiwibmV3U3RhdGUiLCJuZXdEaXNwbGF5Iiwic3Vic3RyIiwib25DYWxjdWxhdGVkIiwib25DbGlja0Nsb3NlIiwibWFyZ2luIiwibWFwIiwicm93S2V5IiwiYnRuS2V5IiwiY29tcG9uZW50Iiwib25DbGlja0J1dHRvbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJ0b3RhbE1hcmdpbiIsInByZXZCdXR0b24iLCJtYXJnaW5MZWZ0IiwiZ2V0QnV0dG9uU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNB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QUFNUixTOztrQkFBckJpRSxNOzs7Ozs7QUNIckIsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJwcm9wLXR5cGVzXCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZiNjc2MzhiODRkYjdiNjYyMWFjIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBhcmVhKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5XSU5ET1dfQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cblxuICBnZXRPdmVybGFwcGluZ1JlY3QocmVjdCl7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIHJlY3QudG9wKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0aGlzLmxlZnQsIHJlY3QubGVmdClcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKHRoaXMucmlnaHQsIHJlY3QucmlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRoaXMuYm90dG9tLCByZWN0LmJvdHRvbSk7XG5cbiAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICBpZiAod2lkdGggPiAwICYmIGhlaWdodCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdXSU5ET1dfQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJXSU5ET1dfQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsImNsYXNzIEdsb2JhbFxue1xuICBnZXQgY3VycmVudENhbGNsYXRvcigpe1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsY2xhdG9yXG4gIH1cblxuICBzZXQgY3VycmVudENhbGNsYXRvcih2YWx1ZSl7XG4gICAgdGhpcy5fY3VycmVudENhbGNsYXRvciA9IHZhbHVlXG4gIH1cbn1cblxuY29uc3QgZyA9IG5ldyBHbG9iYWwoKVxuZXhwb3J0IGRlZmF1bHQgZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnXG5cbmNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGNhbGMuZml4KClcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZihHbG9iYWwuY3VycmVudENhbGNsYXRvcil7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgaWYoYnRuLmtleURvd24gJiYgYnRuLmtleURvd24oZSkpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnRuLmFjdGlvbihHbG9iYWwuY3VycmVudENhbGNsYXRvciwgYnRuLCBlKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZVxuICAgIH1cblxuICAgIHRoaXMuY2FsY3VsYXRvclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5idXR0b25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnByb3BzLmluaXRpYWxWYWx1ZSAhPSBwcmV2UHJvcHMuaW5pdGlhbFZhbHVlICYmIHRoaXMuc3RhdGUudmFsdWUgIT0gdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7J3ZhbHVlJzogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWV9KVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IHByZXZQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUodGhpcy5wcm9wcy5sb2NhbGUpXG4gICAgfVxuICB9XG5cbiAgb25DbGlja1BpY2tlcihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYodGhpcy5wcm9wcy5zaG91bGRPcGVuKCkgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXApe1xuICAgICAgbGV0IGFscmVhZHlPcGVuZCA9IGZhbHNlXG4gICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLmZvckVhY2gocGlja2VyID0+IHtcbiAgICAgICAgaWYocGlja2VyID09PSB0aGlzKSBhbHJlYWR5T3BlbmQgPSB0cnVlXG4gICAgICAgIGlmKHBpY2tlci5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgICAgcGlja2VyLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZighYWxyZWFkeU9wZW5kKXtcbiAgICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5wdXNoKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZVBvcnRhbCgpe1xuICAgIC8vU2V0IHRoZSBvcGVuQ2FsY3VsYXRvciB0byBmYWxzZSB3aGVuIGNsaWNraW5nIHRoZSBvdmVybGF5IG9yIGNsb3Npbmcgd2l0aCB0aGUgRVNDIGtleS5cbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09IHRydWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpe1xuICAgIGlmKHRoaXMuc3RhdGUudmFsdWUgIT0gdmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyZWFjdC1jYWxjcGlja2VyJywgdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3MpfT5cbiAgICAgICAgPGJ1dHRvbiByZWY9e3RoaXMuYnV0dG9uUmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuYnV0dG9uQ2xhc3MpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrUGlja2VyKGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLnZhbHVlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgJiYgUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNsb3NlT25PdXRzaWRlQ2xpY2sgJiZcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsb3NlUG9ydGFsKCl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMucHJvcHMuekluZGV4XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICByZWY9e3RoaXMuY2FsY3VsYXRvclJlZn1cbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pfVxuICAgICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgICAgIG9uQ2FsY3VsYXRlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgICBjbG9zZU9uRW50ZXJBY3Rpb249e3RoaXMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9ufVxuICAgICAgICAgICAgICBidXR0b25XaWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgYnV0dG9uTWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgekluZGV4PXt0aGlzLnByb3BzLnpJbmRleCArIDF9XG4gICAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5idXR0b25SZWYuY3VycmVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgLCBkb2N1bWVudC5ib2R5KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIHNwYW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICAgIH0pLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleURvd246IFByb3BUeXBlcy5mdW5jXG4gICAgICB9KVxuICAgIClcbiAgKSxcbiAgYnV0dG9uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uTWFyZ2luOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaW9uR3JvdXA6IFByb3BUeXBlcy5hcnJheSxcbiAgc2hvdWxkT3BlbjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWUsXG4gIGJ1dHRvbldpZHRoOiA0OCxcbiAgYnV0dG9uSGVpZ2h0OiAzMixcbiAgYnV0dG9uTWFyZ2luOiAzLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICBleGNsdXNpb25Hcm91cDogdW5kZWZpbmVkLFxuICBzaG91bGRPcGVuOiAoKSA9PiB0cnVlLFxuICB6SW5kZXg6IDFcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUJ1dHRvblNpemUgPSAzMDtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcblxuICAgIHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMud3JhcHBlclJlZi5jdXJyZW50KXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMud3JhcHBlclJlZi5jdXJyZW50LCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG4gICAgICBjb25zdCByZWN0cyA9IFtdXG4gICAgICBsZXQgbmV3Q2FsY1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc0tleSA9IHRoaXMucHJvcHMucG9zaXRpb25zW2ldXG4gICAgICAgIGxldCByZWN0O1xuICAgICAgICBpZihwb3NLZXkgPT0gUmVjdC5XSU5ET1dfQ0VOVEVSKXtcbiAgICAgICAgICByZWN0ID0gd2luZG93UmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWN0ID0gYnV0dG9uUmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3RzLnB1c2gocmVjdClcbiAgICAgICAgaWYod2luZG93UmVjdC5jb250YWlucyhyZWN0KSl7XG4gICAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFuZXdDYWxjUmVjdCl7XG4gICAgICAgIHJlY3RzLnNvcnQoKGEsIGIpID0+IHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGIpLmFyZWEgLSB3aW5kb3dSZWN0LmdldE92ZXJsYXBwaW5nUmVjdChhKS5hcmVhKVxuICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3RzWzBdXG4gICAgICB9XG5cbiAgICAgIGlmKG5ld0NhbGNSZWN0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgeDogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWCxcbiAgICAgICAgICB5OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1ZLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dFRvRGlzcGxheShudW1iZXIpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHN0ckRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYoc3RyRGlzcGxheSAhPT0gJzAnICYmIHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXk6IHN0ckRpc3BsYXkgKyBudW1iZXIsXG4gICAgICAgIH0sIHJlc29sdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICAgIGRpc3BsYXk6IG51bWJlcixcbiAgICAgICAgfSwgcmVzb2x2ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2FsYyhsZWZ0LCBvcGVyYXRvciwgcmlnaHQpe1xuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgKyByaWdodDtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKiAocmlnaHQgLyAxMDApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIGxlZnQgLSByaWdodDtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAvIHJpZ2h0XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0ludmFsaWQgb3BlcmF0b3IgJyArIG9wZXJhdG9yICsgJyBzcGVjaWZpZWQuJztcbiAgICB9XG4gIH1cblxuICBleGVjdXRlKGNhbGxiYWNrID0gKCkgPT4ge30pe1xuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5O1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgbGV0IGNhbGN1bGF0ZWQgPSBmYWxzZTtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLmNhbGMocGFyc2VGbG9hdCh2YWx1ZSwgMTApLCB0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlLCBwYXJzZUZsb2F0KGRpc3BsYXksIDEwKSk7XG4gICAgICBjYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGRpc3BsYXk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9KVxuICB9XG5cbiAgaW5wdXRPcGVyYXRvcihvcGVyYXRvciwgYnRuUHJvcHMpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSwgcmVzb2x2ZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIHJlc29sdmUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlucHV0RGVjaW1hbCgpe1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheS5pbmRleE9mKCcuJykgPT09IC0xKXtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIGlucHV0UGVyY2VudChidG5Qcm9wcyl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheVxuICAgICAgICB9fSwgcmVzb2x2ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheSAvIDEwMH0sIHJlc29sdmUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIHVuaXQ6IHt9LFxuICAgICAgICB9LCByZXNvbHZlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgICAgdmFsdWU6ICcwJyxcbiAgICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9LCByZXNvbHZlKVxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9XG4gICAgICAgIGxldCBuZXdEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgICAgaWYobmV3RGlzcGxheSA9PT0gJzAnKXtcbiAgICAgICAgICBuZXdTdGF0ZVsndW5pdCddID0ge31cbiAgICAgICAgfVxuICAgICAgICBuZXdEaXNwbGF5ID0gbmV3RGlzcGxheS5zdWJzdHIoMCwgbmV3RGlzcGxheS5sZW5ndGggLSAxKTtcbiAgICAgICAgbmV3U3RhdGVbJ2Rpc3BsYXknXSA9ICFuZXdEaXNwbGF5ID8gMCA6IG5ld0Rpc3BsYXk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUsIHJlc29sdmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXNcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPT09IHRoaXMpIHtcbiAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUudmFsdWUpXG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0Nsb3NlKClcbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXM7XG4gICAgYnRuUHJvcHMuYWN0aW9uKHRoaXMsIGJ0blByb3BzLCBldmVudClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH1cbiAgICBpZih0aGlzLnByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0eWxlWyd6SW5kZXgnXSA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMud3JhcHBlclJlZn0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvclwiIHN0eWxlPXtzdHlsZX0gb25DbGljaz17ZSA9PiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci10aXRsZVwiIHN0eWxlPXt7d2lkdGg6ICgodGhpcy5wcm9wcy5idXR0b25XaWR0aCAqIDQpICsgKHRoaXMucHJvcHMuYnV0dG9uTWFyZ2luICogNikpIC0gdGhpcy5jbG9zZUJ1dHRvblNpemV9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCJcbiAgICAgICAgICAgICAgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZSgpfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIiBzdHlsZT17e21hcmdpbjogdGhpcy5wcm9wcy5idXR0b25NYXJnaW59fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiIHN0eWxlPXt7aGVpZ2h0OiB0aGlzLnByb3BzLmJ1dHRvbkhlaWdodCArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDIpfX0+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxlbSA9PiBidG4uY29tcG9uZW50ID0gZWxlbX1cbiAgICAgICAgICAgICAgICAgICAgcHJldkJ1dHRvbj17YnRuS2V5ID4gMCA/IHJvd1tidG5LZXkgLSAxXSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidG4uc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHNwYW49e2J0bi5zcGFufVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtidG4uZGlzcGxheX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2tCdXR0b24oYnRuLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QnV0dG9uU3R5bGUoKXtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLm1hcmdpbil7XG4gICAgICBzdHlsZS5tYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbjtcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNwYW4pe1xuICAgICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcbiAgICAgIGlmKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgLSAxKSAqIDIpXG4gICAgICAgIHN0eWxlLmhlaWdodCA9IChzdHlsZS5oZWlnaHQgKiB0aGlzLnByb3BzLnNwYW4uaGVpZ2h0KSArIHRvdGFsTWFyZ2luXG4gICAgICAgIHN0eWxlLnRvcCA9IC0oKHRoaXMucHJvcHMuaGVpZ2h0ICogKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgLSAxKSkgKyB0b3RhbE1hcmdpbilcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLndpZHRoID49IDIpe1xuICAgICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnNwYW4ud2lkdGggLSAxKSAqIDIpXG4gICAgICAgIHN0eWxlLndpZHRoID0gKHN0eWxlLndpZHRoICogdGhpcy5wcm9wcy5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5wcmV2QnV0dG9uICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoID49IDIpe1xuICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggKiAyKSArIDEpXG4gICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMucHJvcHMud2lkdGggKiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCkgKyB0b3RhbE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPVwiZWxlbWVudFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt0aGlzLmdldEJ1dHRvblN0eWxlKCl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5fVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=