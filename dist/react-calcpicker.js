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
      if (this.props.initialValue != prevProps.initialValue) {
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
    }
  }, {
    key: 'inputDecimal',
    value: function inputDecimal() {
      if (this.state.display.indexOf('.') === -1) {
        this.inputToDisplay('.');
      }
    }
  }, {
    key: 'inputPercent',
    value: function inputPercent(btnProps) {
      if (this.state.operator.value) {
        this.setState({ unit: {
            value: '%',
            display: btnProps.display
          } });
      } else {
        this.setState({ display: this.state.display / 100 });
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      if (this.state.appendMode) {
        this.setState({
          display: '0',
          appendMode: false,
          unit: {}
        });
      }
    }
  }, {
    key: 'allClear',
    value: function allClear() {
      this.setState({
        display: '0',
        value: '0',
        operator: {},
        appendMode: false,
        unit: {}
      });
    }
  }, {
    key: 'delete',
    value: function _delete() {
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
      var _this3 = this;

      var style = { transform: 'translate(' + this.state.x + 'px, ' + this.state.y + 'px)' };
      if (this.props.zIndex !== undefined) {
        style['zIndex'] = this.props.zIndex;
      }
      return _react2.default.createElement(
        'div',
        { ref: this.wrapperRef, className: 'react-calcpicker__calculator', style: style, onClick: function onClick(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NDk1N2VjMGM0MGJhNWUzNGQ4ZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iXSwibmFtZXMiOlsiUmVjdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiY2VudGVyIiwieCIsInkiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVjdCIsInJlc3VsdCIsInJpZ2h0IiwiYm90dG9tIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsIlJJR0hUX0JPVFRPTSIsImNsb25lIiwidHJhbnNmb3JtIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIldJTkRPV19DRU5URVIiLCJleHBlY3RlZFJlY3QiLCJnZXRDZW50ZXJSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImNyZWF0ZVdpdGhFbGVtZW50IiwiZWxlbSIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyIsIkFjdGlvbiIsIm9uZSIsImNhbGMiLCJidG5Qcm9wcyIsImV2ZW50IiwiaW5wdXRUb0Rpc3BsYXkiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImRlY2ltYWwiLCJpbnB1dERlY2ltYWwiLCJwZXJjZW50IiwiaW5wdXRQZXJjZW50IiwicGx1cyIsImlucHV0T3BlcmF0b3IiLCJtaW51cyIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJlbnRlciIsImV4ZWN1dGUiLCJmaXgiLCJwcm9wcyIsImNsb3NlT25FbnRlckFjdGlvbiIsImNsb3NlIiwiYWxsQ2xlYXIiLCJjbGVhciIsImJhY2tzcGFjZSIsImRlbGV0ZSIsIkNhbGNQaWNrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRDYWxjbGF0b3IiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJpbml0aWFsVmFsdWUiLCJjYWxjdWxhdG9yUmVmIiwiY3JlYXRlUmVmIiwiYnV0dG9uUmVmIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic2V0U3RhdGUiLCJzaG91bGRPcGVuIiwiZXhjbHVzaW9uR3JvdXAiLCJhbHJlYWR5T3BlbmQiLCJwaWNrZXIiLCJwdXNoIiwib25DaGFuZ2UiLCJ3cmFwcGVyQ2xhc3MiLCJjbGFzc05hbWUiLCJidXR0b25DbGFzcyIsIm9uQ2xpY2tQaWNrZXIiLCJmb3JtYXQiLCJjcmVhdGVQb3J0YWwiLCJjbG9zZU9uT3V0c2lkZUNsaWNrIiwib25DbG9zZVBvcnRhbCIsInpJbmRleCIsInRpdGxlIiwicG9zaXRpb25zIiwiY2hhbmdlVmFsdWUiLCJjbG9zZUJ1dHRvbiIsImJ1dHRvbldpZHRoIiwiYnV0dG9uSGVpZ2h0IiwiYnV0dG9uTWFyZ2luIiwiY3VycmVudCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheSIsImRlZmF1bHRQcm9wcyIsImtleSIsImtleUNvZGUiLCJzaGlmdEtleSIsInVuZGVmaW5lZCIsIkNhbGN1bGF0b3IiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndyYXBwZXJSZWYiLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImJ1dHRvbiIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJzdHJEaXNwbGF5IiwidG9TdHJpbmciLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwibmV3RGlzcGxheSIsInN1YnN0ciIsIm9uQ2FsY3VsYXRlZCIsIm9uQ2xpY2tDbG9zZSIsIm1hcmdpbiIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsIm9uQ2xpY2tCdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwidG90YWxNYXJnaW4iLCJwcmV2QnV0dG9uIiwibWFyZ2luTGVmdCIsImdldEJ1dHRvblN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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LENBQVcwRCxLQUF2RSxHQUErRWMsU0FGdEUsRUFHVCxLQUFLeEUsS0FBTCxDQUFXbUMsU0FIRixDQUZiO0FBT0UsaUJBQU8sS0FBS29GLGNBQUwsRUFQVDtBQVFFLG1CQUFTO0FBQUEsbUJBQUssT0FBS0osT0FBTCxDQUFhMUcsQ0FBYixDQUFMO0FBQUE7QUFSWDtBQVVHLGFBQUtULEtBQUwsQ0FBVzJEO0FBVmQsT0FERjtBQWNEOzs7O0VBM0RpQyxnQkFBTVIsUzs7a0JBQXJCK0QsTTs7Ozs7O0FDSHJCLGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJyZWFjdC1jYWxjcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcImNsYXNzLW5hbWVzXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwicHJvcC10eXBlc1wiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wibnVtZXJhbFwiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NDk1N2VjMGM0MGJhNWUzNGQ4ZiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJjbGFzcyBHbG9iYWxcbntcbiAgZ2V0IGN1cnJlbnRDYWxjbGF0b3IoKXtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGNsYXRvclxuICB9XG5cbiAgc2V0IGN1cnJlbnRDYWxjbGF0b3IodmFsdWUpe1xuICAgIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3IgPSB2YWx1ZVxuICB9XG59XG5cbmNvbnN0IGcgPSBuZXcgR2xvYmFsKClcbmV4cG9ydCBkZWZhdWx0IGc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9HbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJ1xuXG5jb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3Ipe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLnByb3BzLmJ1dHRvbnMuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goYnRuID0+IHtcbiAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJ0bi5hY3Rpb24oR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IsIGJ0biwgZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0b3JSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuYnV0dG9uUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgaWYodGhpcy5wcm9wcy5pbml0aWFsVmFsdWUgIT0gcHJldlByb3BzLmluaXRpYWxWYWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHsndmFsdWUnOiB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZX0pXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gcHJldlByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZSh0aGlzLnByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrUGlja2VyKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0aGlzLnByb3BzLnNob3VsZE9wZW4oKSA9PT0gZmFsc2Upe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cCl7XG4gICAgICBsZXQgYWxyZWFkeU9wZW5kID0gZmFsc2VcbiAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAuZm9yRWFjaChwaWNrZXIgPT4ge1xuICAgICAgICBpZihwaWNrZXIgPT09IHRoaXMpIGFscmVhZHlPcGVuZCA9IHRydWVcbiAgICAgICAgaWYocGlja2VyLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgICBwaWNrZXIuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmKCFhbHJlYWR5T3BlbmQpe1xuICAgICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLnB1c2godGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IHRydWV9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlUG9ydGFsKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3JlYWN0LWNhbGNwaWNrZXInLCB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyl9PlxuICAgICAgICA8YnV0dG9uIHJlZj17dGhpcy5idXR0b25SZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5idXR0b25DbGFzcyl9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uQ2xpY2tQaWNrZXIoZSl9PlxuICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUudmFsdWUpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAmJiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGljayAmJlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xvc2VQb3J0YWwoKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXhcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYWxjdWxhdG9yUmVmfVxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICAgIGJ1dHRvbnM9e3RoaXMucHJvcHMuYnV0dG9uc31cbiAgICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIGNsb3NlT25FbnRlckFjdGlvbj17dGhpcy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb259XG4gICAgICAgICAgICAgIGJ1dHRvbldpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgICBidXR0b25IZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgICBidXR0b25NYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgICB6SW5kZXg9e3RoaXMucHJvcHMuekluZGV4ICsgMX1cbiAgICAgICAgICAgICAgYnV0dG9uPXt0aGlzLmJ1dHRvblJlZi5jdXJyZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAsIGRvY3VtZW50LmJvZHkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxjUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvc2l0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdKSksXG4gIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdsaWdodCcsICdkYXJrJywgJ3dhcm5pbmcnXSksXG4gICAgICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgXSkucmVxdWlyZSxcbiAgICAgICAgc3BhbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBidXR0b25XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25NYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpb25Hcm91cDogUHJvcFR5cGVzLmFycmF5LFxuICBzaG91bGRPcGVuOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIkFDXCIsIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCLihpBcIiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiBcIiVcIiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDt1wiLCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI3XCIsIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjhcIiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOVwiLCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsOXXCIsIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjRcIiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI1XCIsIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNlwiLCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiLVwiLCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIxXCIsIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIyXCIsIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIzXCIsIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIitcIiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwXCIsIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMDBcIiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIi5cIiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogXCI9XCIsIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZSxcbiAgYnV0dG9uV2lkdGg6IDQ4LFxuICBidXR0b25IZWlnaHQ6IDMyLFxuICBidXR0b25NYXJnaW46IDMsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGV4Y2x1c2lvbkdyb3VwOiB1bmRlZmluZWQsXG4gIHNob3VsZE9wZW46ICgpID0+IHRydWUsXG4gIHpJbmRleDogMVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uU2l6ZSA9IDMwO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuXG4gICAgdGhpcy53cmFwcGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGFkanVzdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy53cmFwcGVyUmVmLmN1cnJlbnQpe1xuICAgICAgY29uc3Qgd2luZG93UmVjdCA9IFJlY3QuY3JlYXRlV2l0aFdpbmRvdygpXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy53cmFwcGVyUmVmLmN1cnJlbnQsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgY29uc3Qgc3RyRGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgaWYoc3RyRGlzcGxheSAhPT0gJzAnICYmIHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogc3RyRGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQodmFsdWUsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIHZhbHVlOiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IG5ld0Rpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYobmV3RGlzcGxheSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICBuZXdEaXNwbGF5ID0gbmV3RGlzcGxheS5zdWJzdHIoMCwgbmV3RGlzcGxheS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhbmV3RGlzcGxheSA/IDAgOiBuZXdEaXNwbGF5O1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpc1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBpZihHbG9iYWwuY3VycmVudENhbGNsYXRvciA9PT0gdGhpcykge1xuICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBmaXgoKXtcbiAgICBpZih0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCkgdGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQodGhpcy5zdGF0ZS52YWx1ZSlcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrQ2xvc2UoKVxuICB9XG5cbiAgb25DbGlja0J1dHRvbihidG5Qcm9wcywgZXZlbnQpe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpcztcbiAgICBidG5Qcm9wcy5hY3Rpb24odGhpcywgYnRuUHJvcHMsIGV2ZW50KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dGhpcy5zdGF0ZS54fXB4LCAke3RoaXMuc3RhdGUueX1weClgfVxuICAgIGlmKHRoaXMucHJvcHMuekluZGV4ICE9PSB1bmRlZmluZWQpe1xuICAgICAgc3R5bGVbJ3pJbmRleCddID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17dGhpcy53cmFwcGVyUmVmfSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yXCIgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtlID0+IEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLXRpdGxlXCIgc3R5bGU9e3t3aWR0aDogKCh0aGlzLnByb3BzLmJ1dHRvbldpZHRoICogNCkgKyAodGhpcy5wcm9wcy5idXR0b25NYXJnaW4gKiA2KSkgLSB0aGlzLmNsb3NlQnV0dG9uU2l6ZX19PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci1idXR0b25cIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tY2xvc2VcIlxuICAgICAgICAgICAgICBkaXNwbGF5PXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlKCl9XG4gICAgICAgICAgICAgIHdpZHRoPXt0aGlzLmNsb3NlQnV0dG9uU2l6ZX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLmNsb3NlQnV0dG9uU2l6ZX1cbiAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheVwiIHN0eWxlPXt7bWFyZ2luOiB0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW9wZXJhdG9yXCI+e3RoaXMuc3RhdGUub3BlcmF0b3IuZGlzcGxheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1udW1iZXJcIj5cbiAgICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUuZGlzcGxheSkuZm9ybWF0KHRoaXMuc3RhdGUuZm9ybWF0KX17dGhpcy5zdGF0ZS51bml0LmRpc3BsYXl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zLm1hcCgocm93LCByb3dLZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd0tleX0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25zXCI+XG4gICAgICAgICAgICAgIHtyb3cubWFwKChidG4sIGJ0bktleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWxlbSA9PiBidG4uY29tcG9uZW50ID0gZWxlbX1cbiAgICAgICAgICAgICAgICAgICAgcHJldkJ1dHRvbj17YnRuS2V5ID4gMCA/IHJvd1tidG5LZXkgLSAxXSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cm93S2V5ICsgJy0nICsgYnRuS2V5fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0bi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidG4uc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHNwYW49e2J0bi5zcGFufVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtidG4uZGlzcGxheX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2tCdXR0b24oYnRuLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17dGhpcy5wcm9wcy5idXR0b25IZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY3VsYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0QnV0dG9uU3R5bGUoKXtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLm1hcmdpbil7XG4gICAgICBzdHlsZS5tYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbjtcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNwYW4pe1xuICAgICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcbiAgICAgIGlmKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgLSAxKSAqIDIpXG4gICAgICAgIHN0eWxlLmhlaWdodCA9IChzdHlsZS5oZWlnaHQgKiB0aGlzLnByb3BzLnNwYW4uaGVpZ2h0KSArIHRvdGFsTWFyZ2luXG4gICAgICAgIHN0eWxlLnRvcCA9IC0oKHRoaXMucHJvcHMuaGVpZ2h0ICogKHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQgLSAxKSkgKyB0b3RhbE1hcmdpbilcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLndpZHRoID49IDIpe1xuICAgICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnNwYW4ud2lkdGggLSAxKSAqIDIpXG4gICAgICAgIHN0eWxlLndpZHRoID0gKHN0eWxlLndpZHRoICogdGhpcy5wcm9wcy5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5wcmV2QnV0dG9uICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoICYmIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoID49IDIpe1xuICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggKiAyKSArIDEpXG4gICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMucHJvcHMud2lkdGggKiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCkgKyB0b3RhbE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPVwiZWxlbWVudFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uXCIsXG4gICAgICAgICAgdGhpcy5wcm9wcy5zdHlsZSA/IFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b24tXCIgKyB0aGlzLnByb3BzLnN0eWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt0aGlzLmdldEJ1dHRvblN0eWxlKCl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5fVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=