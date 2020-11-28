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
      if (this.state.openCalculator !== prevState.openCalculator) {
        if (this.state.openCalculator === true) {
          _Global2.default.currentCalclator = this.calculatorRef.current;
        } else if (_Global2.default.currentCalclator === this.calculatorRef.current) {
          _Global2.default.currentCalclator = undefined;
        }
      }

      if (this.props.initialValue != prevProps.initialValue) {
        this.setState({ 'value': this.props.initialValue });
      }

      if (this.props.locale != prevProps.locale) {
        _numeral2.default.locale(this.props.locale);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_Global2.default.currentCalclator === this.calculatorRef.current) {
        _Global2.default.currentCalclator = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODY1MzFhODUzMDQxMGMyZTdkNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iXSwibmFtZXMiOlsiUmVjdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiY2VudGVyIiwieCIsInkiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVjdCIsInJlc3VsdCIsInJpZ2h0IiwiYm90dG9tIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsIlJJR0hUX0JPVFRPTSIsImNsb25lIiwidHJhbnNmb3JtIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIldJTkRPV19DRU5URVIiLCJleHBlY3RlZFJlY3QiLCJnZXRDZW50ZXJSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImNyZWF0ZVdpdGhFbGVtZW50IiwiZWxlbSIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyIsIkFjdGlvbiIsIm9uZSIsImNhbGMiLCJidG5Qcm9wcyIsImV2ZW50IiwiaW5wdXRUb0Rpc3BsYXkiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImRlY2ltYWwiLCJpbnB1dERlY2ltYWwiLCJwZXJjZW50IiwiaW5wdXRQZXJjZW50IiwicGx1cyIsImlucHV0T3BlcmF0b3IiLCJtaW51cyIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJlbnRlciIsImV4ZWN1dGUiLCJmaXgiLCJwcm9wcyIsImNsb3NlT25FbnRlckFjdGlvbiIsImNsb3NlIiwiYWxsQ2xlYXIiLCJjbGVhciIsImJhY2tzcGFjZSIsImRlbGV0ZSIsIkNhbGNQaWNrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRDYWxjbGF0b3IiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJpbml0aWFsVmFsdWUiLCJjYWxjdWxhdG9yUmVmIiwiY3JlYXRlUmVmIiwiYnV0dG9uUmVmIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwic2hvdWxkT3BlbiIsImV4Y2x1c2lvbkdyb3VwIiwiYWxyZWFkeU9wZW5kIiwicGlja2VyIiwicHVzaCIsIm9uQ2hhbmdlIiwid3JhcHBlckNsYXNzIiwiY2xhc3NOYW1lIiwiYnV0dG9uQ2xhc3MiLCJvbkNsaWNrUGlja2VyIiwiZm9ybWF0IiwiY3JlYXRlUG9ydGFsIiwiY2xvc2VPbk91dHNpZGVDbGljayIsIm9uQ2xvc2VQb3J0YWwiLCJ6SW5kZXgiLCJ0aXRsZSIsInBvc2l0aW9ucyIsImNoYW5nZVZhbHVlIiwiY2xvc2VCdXR0b24iLCJidXR0b25XaWR0aCIsImJ1dHRvbkhlaWdodCIsImJ1dHRvbk1hcmdpbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFycmF5T2YiLCJvbmVPZiIsInNoYXBlIiwic3R5bGUiLCJkaXNwbGF5Iiwib25lT2ZUeXBlIiwib2JqZWN0IiwicmVxdWlyZSIsInNwYW4iLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheSIsImRlZmF1bHRQcm9wcyIsImtleSIsImtleUNvZGUiLCJzaGlmdEtleSIsIkNhbGN1bGF0b3IiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndyYXBwZXJSZWYiLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImJ1dHRvbiIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJzdHJEaXNwbGF5IiwidG9TdHJpbmciLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwibmV3RGlzcGxheSIsInN1YnN0ciIsIm9uQ2FsY3VsYXRlZCIsIm9uQ2xpY2tDbG9zZSIsIm1hcmdpbiIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsIm9uQ2xpY2tCdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwidG90YWxNYXJnaW4iLCJwcmV2QnV0dG9uIiwibWFyZ2luTGVmdCIsImdldEJ1dHRvblN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7O0FDN0RBLCtDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQkEsSTtBQUVuQixnQkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzRTtBQUFBLFFBQWhDQyxVQUFnQyx1RUFBbkIsQ0FBbUI7QUFBQSxRQUFoQkMsVUFBZ0IsdUVBQUgsQ0FBRzs7QUFBQTs7QUFDcEUsU0FBS0wsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O2tDQThCYUgsSyxFQUFPQyxNLEVBQU87QUFDMUIsVUFBTUcsU0FBUztBQUNiQyxXQUFHLEtBQUtOLElBQUwsR0FBYSxLQUFLQyxLQUFMLEdBQWEsQ0FEaEI7QUFFYk0sV0FBRyxLQUFLUixHQUFMLEdBQVksS0FBS0csTUFBTCxHQUFjO0FBRmhCLE9BQWY7O0FBS0EsYUFBTyxJQUFJSixJQUFKLENBQ0xPLE9BQU9FLENBQVAsR0FBWUwsU0FBUyxDQURoQixFQUVMRyxPQUFPQyxDQUFQLEdBQVlMLFFBQVEsQ0FGZixFQUdMQSxLQUhLLEVBSUxDLE1BSkssQ0FBUDtBQU1EOzs7NEJBRU07QUFDTCxhQUFPLElBQUlKLElBQUosQ0FDTCxLQUFLQyxHQURBLEVBRUwsS0FBS0MsSUFGQSxFQUdMLEtBQUtDLEtBSEEsRUFJTCxLQUFLQyxNQUpBLEVBS0wsS0FBS0MsVUFMQSxFQU1MLEtBQUtDLFVBTkEsQ0FBUDtBQVFEOzs7OEJBRVNFLEMsRUFBR0MsQyxFQUFFO0FBQ2IsV0FBS1IsR0FBTCxHQUFXLEtBQUtTLFNBQUwsR0FBaUJELENBQTVCO0FBQ0EsV0FBS1AsSUFBTCxHQUFZLEtBQUtTLFVBQUwsR0FBa0JILENBQTlCO0FBQ0EsV0FBS0gsVUFBTCxHQUFrQkcsQ0FBbEI7QUFDQSxXQUFLRixVQUFMLEdBQWtCRyxDQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NkJBRVFHLEksRUFBSztBQUNaLFVBQU1DLFNBQVMsS0FBS1gsSUFBTCxJQUFhVSxLQUFLVixJQUFsQixJQUViLEtBQUtZLEtBQUwsSUFBY0YsS0FBS0UsS0FGTixJQUliLEtBQUtiLEdBQUwsSUFBWVcsS0FBS1gsR0FKSixJQU1iLEtBQUtjLE1BQUwsSUFBZUgsS0FBS0csTUFOdEI7QUFPQSxhQUFPRixNQUFQO0FBQ0Q7OzsyQkFFSztBQUNKLGFBQU87QUFDTFosYUFBSyxLQUFLQSxHQURMO0FBRUxDLGNBQU0sS0FBS0EsSUFGTjtBQUdMYSxnQkFBUSxLQUFLQSxNQUhSO0FBSUxELGVBQU8sS0FBS0EsS0FKUDtBQUtMWCxlQUFPLEtBQUtBLEtBTFA7QUFNTEMsZ0JBQVEsS0FBS0EsTUFOUjtBQU9MTSxtQkFBVyxLQUFLQSxTQVBYO0FBUUxDLG9CQUFZLEtBQUtBLFVBUlo7QUFTTEssc0JBQWMsS0FBS0EsWUFUZDtBQVVMQyxxQkFBYSxLQUFLQSxXQVZiO0FBV0xaLG9CQUFZLEtBQUtBLFVBWFo7QUFZTEMsb0JBQVksS0FBS0E7QUFaWixPQUFQO0FBY0Q7OztvQ0FFZU0sSSxFQUFNTSxRLEVBQVM7QUFDN0IsY0FBT0EsUUFBUDtBQUNFLGFBQUtsQixLQUFLbUIsWUFBVjtBQUNFLGlCQUFPUCxLQUFLUSxLQUFMLEdBQWFDLFNBQWIsQ0FDTCxLQUFLbkIsSUFBTCxHQUFZVSxLQUFLRCxVQURaLEVBRUwsS0FBS0ksTUFBTCxHQUFjSCxLQUFLRixTQUZkLENBQVA7QUFJRixhQUFLVixLQUFLc0IsV0FBVjtBQUNFLGlCQUFPVixLQUFLUSxLQUFMLEdBQWFDLFNBQWIsQ0FDTCxLQUFLUCxLQUFMLEdBQWFGLEtBQUtLLFdBRGIsRUFFTCxLQUFLRixNQUFMLEdBQWNILEtBQUtGLFNBRmQsQ0FBUDtBQUlGLGFBQUtWLEtBQUt1QixRQUFWO0FBQ0UsaUJBQU9YLEtBQUtRLEtBQUwsR0FBYUMsU0FBYixDQUNMLEtBQUtQLEtBQUwsR0FBYUYsS0FBS0ssV0FEYixFQUVMLEtBQUtoQixHQUFMLEdBQVdXLEtBQUtJLFlBRlgsQ0FBUDtBQUlGLGFBQUtoQixLQUFLd0IsU0FBVjtBQUNFLGlCQUFPWixLQUFLUSxLQUFMLEdBQWFDLFNBQWIsQ0FDTCxLQUFLbkIsSUFBTCxHQUFZVSxLQUFLRCxVQURaLEVBRUwsS0FBS1YsR0FBTCxHQUFXVyxLQUFLSSxZQUZYLENBQVA7QUFJRixhQUFLaEIsS0FBS3lCLGFBQVY7QUFDRSxjQUFNQyxlQUFlLEtBQUtDLGFBQUwsQ0FBbUJmLEtBQUtULEtBQXhCLEVBQStCUyxLQUFLUixNQUFwQyxDQUFyQjtBQUNBLGlCQUFPUSxLQUFLUSxLQUFMLEdBQWFDLFNBQWIsQ0FDTEssYUFBYXhCLElBQWIsR0FBb0JVLEtBQUtELFVBRHBCLEVBRUxlLGFBQWF6QixHQUFiLEdBQW1CVyxLQUFLRixTQUZuQixDQUFQO0FBSUY7QUFDRSxnQkFBTSwwQkFBMEJRLFFBQTFCLEdBQXFDLGdCQUEzQztBQTVCSjtBQThCRDs7O3VDQUVrQk4sSSxFQUFLO0FBQ3RCLFVBQU1YLE1BQU0yQixLQUFLQyxHQUFMLENBQVMsS0FBSzVCLEdBQWQsRUFBbUJXLEtBQUtYLEdBQXhCLENBQVo7QUFDQSxVQUFNQyxPQUFPMEIsS0FBS0MsR0FBTCxDQUFTLEtBQUszQixJQUFkLEVBQW9CVSxLQUFLVixJQUF6QixDQUFiO0FBQ0EsVUFBTVksUUFBUWMsS0FBS0UsR0FBTCxDQUFTLEtBQUtoQixLQUFkLEVBQXFCRixLQUFLRSxLQUExQixDQUFkO0FBQ0EsVUFBTUMsU0FBU2EsS0FBS0UsR0FBTCxDQUFTLEtBQUtmLE1BQWQsRUFBc0JILEtBQUtHLE1BQTNCLENBQWY7O0FBRUEsVUFBSVosUUFBUVcsUUFBUVosSUFBcEI7QUFDQSxVQUFJRSxTQUFTVyxTQUFTZCxHQUF0QjtBQUNBLFVBQUlFLFFBQVEsQ0FBUixJQUFhQyxTQUFTLENBQTFCLEVBQTZCO0FBQ3pCLGVBQU8sSUFBSUosSUFBSixDQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLEtBQXBCLEVBQTJCQyxNQUEzQixDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFQO0FBQ0g7QUFDRjs7O3dCQXZJVztBQUNWLGFBQU8sS0FBS0gsR0FBTCxHQUFXLEtBQUtHLE1BQXZCO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBS0YsSUFBTCxHQUFZLEtBQUtDLEtBQXhCO0FBQ0Q7Ozt3QkFFYztBQUNiLGFBQU8sS0FBS0YsR0FBTCxHQUFXLEtBQUtLLFVBQXZCO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBS0osSUFBTCxHQUFZLEtBQUtHLFVBQXhCO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsYUFBTyxLQUFLSyxTQUFMLEdBQWlCLEtBQUtOLE1BQTdCO0FBQ0Q7Ozt3QkFFZ0I7QUFDZixhQUFPLEtBQUtPLFVBQUwsR0FBa0IsS0FBS1IsS0FBOUI7QUFDRDs7O3dCQUVTO0FBQ1IsYUFBTyxLQUFLQSxLQUFMLEdBQWEsS0FBS0MsTUFBekI7QUFDRDs7Ozs7O2tCQXJDa0JKLEk7OztBQXFKckJBLEtBQUsrQixpQkFBTCxHQUF5QixVQUFDQyxJQUFELEVBQTBDO0FBQUEsTUFBbkMzQixVQUFtQyx1RUFBdEIsQ0FBc0I7QUFBQSxNQUFuQkMsVUFBbUIsdUVBQU4sQ0FBTTs7QUFDakUsTUFBRyxDQUFDMEIsSUFBSixFQUFTO0FBQ1AsV0FBTyxJQUFJaEMsSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUDtBQUNEO0FBQ0QsTUFBTWlDLGVBQWVELEtBQUtFLHFCQUFMLEVBQXJCOztBQUdBLE1BQU1DLE9BQU9DLFNBQVNELElBQXRCO0FBQ0EsTUFBTUUsUUFBUUQsU0FBU0UsZUFBdkI7O0FBRUEsTUFBTUMsWUFBWUMsT0FBT0MsV0FBUCxJQUFzQkosTUFBTUUsU0FBNUIsSUFBeUNKLEtBQUtJLFNBQWhFO0FBQ0EsTUFBTUcsYUFBYUYsT0FBT0csV0FBUCxJQUFzQk4sTUFBTUssVUFBNUIsSUFBMENQLEtBQUtPLFVBQWxFOztBQUVBLE1BQU1FLFlBQVlQLE1BQU1PLFNBQU4sSUFBbUJULEtBQUtTLFNBQXhCLElBQXFDLENBQXZEO0FBQ0EsTUFBTUMsYUFBYVIsTUFBTVEsVUFBTixJQUFvQlYsS0FBS1UsVUFBekIsSUFBdUMsQ0FBMUQ7O0FBRUEsU0FBTyxJQUFJN0MsSUFBSixDQUNMaUMsYUFBYWhDLEdBQWIsR0FBbUJzQyxTQUFuQixHQUErQkssU0FEMUIsRUFFTFgsYUFBYS9CLElBQWIsR0FBb0J3QyxVQUFwQixHQUFpQ0csVUFGNUIsRUFHTFosYUFBYTlCLEtBSFIsRUFJTDhCLGFBQWE3QixNQUpSLEVBS0xDLFVBTEssRUFNTEMsVUFOSyxDQUFQO0FBUUQsQ0F4QkQ7O0FBMEJBTixLQUFLOEMsZ0JBQUwsR0FBd0IsWUFBTTtBQUM1QixTQUFPLElBQUk5QyxJQUFKLENBQ0x3QyxPQUFPQyxXQUFQLElBQXNCTCxTQUFTRSxlQUFULENBQXlCQyxTQUQxQyxFQUVMQyxPQUFPRyxXQUFQLElBQXNCUCxTQUFTRSxlQUFULENBQXlCSSxVQUYxQyxFQUdMTixTQUFTRSxlQUFULENBQXlCUyxXQUhwQixFQUlMWCxTQUFTRSxlQUFULENBQXlCVSxZQUpwQixDQUFQO0FBTUQsQ0FQRDs7QUFTQUMsT0FBT0MsY0FBUCxDQUFzQmxELElBQXRCLEVBQTRCLFdBQTVCLEVBQXlDO0FBQ3ZDbUQsY0FBWSxLQUQyQjtBQUV2Q0MsZ0JBQWMsS0FGeUI7QUFHdkNDLFlBQVUsS0FINkI7QUFJdkNDLFNBQU87QUFKZ0MsQ0FBekM7O0FBT0FMLE9BQU9DLGNBQVAsQ0FBc0JsRCxJQUF0QixFQUE0QixVQUE1QixFQUF3QztBQUN0Q21ELGNBQVksS0FEMEI7QUFFdENDLGdCQUFjLEtBRndCO0FBR3RDQyxZQUFVLEtBSDRCO0FBSXRDQyxTQUFPO0FBSitCLENBQXhDOztBQU9BTCxPQUFPQyxjQUFQLENBQXNCbEQsSUFBdEIsRUFBNEIsY0FBNUIsRUFBNEM7QUFDMUNtRCxjQUFZLEtBRDhCO0FBRTFDQyxnQkFBYyxLQUY0QjtBQUcxQ0MsWUFBVSxLQUhnQztBQUkxQ0MsU0FBTztBQUptQyxDQUE1Qzs7QUFPQUwsT0FBT0MsY0FBUCxDQUFzQmxELElBQXRCLEVBQTRCLGFBQTVCLEVBQTJDO0FBQ3pDbUQsY0FBWSxLQUQ2QjtBQUV6Q0MsZ0JBQWMsS0FGMkI7QUFHekNDLFlBQVUsS0FIK0I7QUFJekNDLFNBQU87QUFKa0MsQ0FBM0M7O0FBT0FMLE9BQU9DLGNBQVAsQ0FBc0JsRCxJQUF0QixFQUE0QixlQUE1QixFQUE2QztBQUMzQ21ELGNBQVksS0FEK0I7QUFFM0NDLGdCQUFjLEtBRjZCO0FBRzNDQyxZQUFVLEtBSGlDO0FBSTNDQyxTQUFPO0FBSm9DLENBQTdDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcE5NQyxNOzs7Ozs7O3dCQUVrQjtBQUNwQixhQUFPLEtBQUtDLGlCQUFaO0FBQ0QsSztzQkFFb0JGLEssRUFBTTtBQUN6QixXQUFLRSxpQkFBTCxHQUF5QkYsS0FBekI7QUFDRDs7Ozs7O0FBR0gsSUFBTUcsSUFBSSxJQUFJRixNQUFKLEVBQVY7a0JBQ2VFLEM7Ozs7OztBQ1pmLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNQyxTQUFVO0FBQ2RDLE9BQUssYUFBU0MsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNsQ0YsU0FBS0csY0FBTCxDQUFvQixHQUFwQjtBQUNELEdBSGE7QUFJZEMsT0FBSyxhQUFTSixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ2xDRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0FOYTtBQU9kRSxTQUFPLGVBQVNMLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDcENGLFNBQUtHLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxHQVRhO0FBVWRHLFFBQU0sY0FBU04sSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNuQ0YsU0FBS0csY0FBTCxDQUFvQixHQUFwQjtBQUNELEdBWmE7QUFhZEksUUFBTSxjQUFTUCxJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ25DRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0FmYTtBQWdCZEssT0FBSyxhQUFTUixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ2xDRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0FsQmE7QUFtQmRNLFNBQU8sZUFBU1QsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNwQ0YsU0FBS0csY0FBTCxDQUFvQixHQUFwQjtBQUNELEdBckJhO0FBc0JkTyxTQUFPLGVBQVNWLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDcENGLFNBQUtHLGNBQUwsQ0FBb0IsR0FBcEI7QUFDRCxHQXhCYTtBQXlCZFEsUUFBTSxjQUFTWCxJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ25DRixTQUFLRyxjQUFMLENBQW9CLEdBQXBCO0FBQ0QsR0EzQmE7QUE0QmRTLFFBQU0sY0FBU1osSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUNuQ0YsU0FBS0csY0FBTCxDQUFvQixHQUFwQjtBQUNELEdBOUJhO0FBK0JkVSxjQUFZLG9CQUFTYixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3pDRixTQUFLRyxjQUFMLENBQW9CLElBQXBCO0FBQ0QsR0FqQ2E7QUFrQ2RXLFdBQVMsaUJBQVNkLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDdENGLFNBQUtlLFlBQUw7QUFDRCxHQXBDYTtBQXFDZEMsV0FBUyxpQkFBU2hCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDdENGLFNBQUtpQixZQUFMLENBQWtCaEIsUUFBbEI7QUFDRCxHQXZDYTtBQXdDZGlCLFFBQU0sY0FBU2xCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDbkNGLFNBQUttQixhQUFMLENBQW1CLEdBQW5CLEVBQXdCbEIsUUFBeEI7QUFDRCxHQTFDYTtBQTJDZG1CLFNBQU8sZUFBU3BCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDcENGLFNBQUttQixhQUFMLENBQW1CLEdBQW5CLEVBQXdCbEIsUUFBeEI7QUFDRCxHQTdDYTtBQThDZG9CLGtCQUFnQix3QkFBU3JCLElBQVQsRUFBZUMsUUFBZixFQUF5QkMsS0FBekIsRUFBK0I7QUFDN0NGLFNBQUttQixhQUFMLENBQW1CLEdBQW5CLEVBQXdCbEIsUUFBeEI7QUFDRCxHQWhEYTtBQWlEZHFCLFlBQVUsa0JBQVN0QixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3ZDRixTQUFLbUIsYUFBTCxDQUFtQixHQUFuQixFQUF3QmxCLFFBQXhCO0FBQ0QsR0FuRGE7QUFvRGRzQixTQUFPLGVBQVN2QixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3BDRixTQUFLd0IsT0FBTCxDQUFhLFlBQU07QUFDakJ4QixXQUFLeUIsR0FBTDtBQUNBLFVBQUd6QixLQUFLMEIsS0FBTCxDQUFXQyxrQkFBZCxFQUFpQztBQUMvQjNCLGFBQUs0QixLQUFMO0FBQ0Q7QUFDRixLQUxEO0FBTUQsR0EzRGE7QUE0RGRDLFlBQVUsa0JBQVM3QixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3ZDRixTQUFLNkIsUUFBTDtBQUNELEdBOURhO0FBK0RkQyxTQUFPLGVBQVM5QixJQUFULEVBQWVDLFFBQWYsRUFBeUJDLEtBQXpCLEVBQStCO0FBQ3BDRixTQUFLOEIsS0FBTDtBQUNELEdBakVhO0FBa0VkQyxhQUFXLG1CQUFTL0IsSUFBVCxFQUFlQyxRQUFmLEVBQXlCQyxLQUF6QixFQUErQjtBQUN4Q0YsU0FBS2dDLE1BQUw7QUFDRDtBQXBFYSxDQUFoQjs7a0JBdUVlbEMsTTs7Ozs7Ozs7Ozs7Ozs7QUN6RWY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFFUW1DLFU7UUFBWTdGLEk7UUFBTTBELE07Ozs7Ozs7Ozs7Ozs7OztBQ0oxQjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBbEIsT0FBT3NELGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN4QyxNQUFHLGlCQUFPQyxnQkFBVixFQUEyQjtBQUN6QixxQkFBT0EsZ0JBQVAsQ0FBd0JWLEtBQXhCLENBQThCVyxPQUE5QixDQUFzQ0MsT0FBdEMsQ0FBOEM7QUFBQSxhQUFPQyxJQUFJRCxPQUFKLENBQVksZUFBTztBQUN0RSxZQUFHRSxJQUFJQyxPQUFKLElBQWVELElBQUlDLE9BQUosQ0FBWU4sQ0FBWixDQUFsQixFQUFpQztBQUMvQkEsWUFBRU8sY0FBRjtBQUNBRixjQUFJRyxNQUFKLENBQVcsaUJBQU9QLGdCQUFsQixFQUFvQ0ksR0FBcEMsRUFBeUNMLENBQXpDO0FBQ0Q7QUFDRixPQUxvRCxDQUFQO0FBQUEsS0FBOUM7QUFNRDtBQUNGLENBVEQ7O0lBV3FCRixVOzs7QUFFbkIsc0JBQVlQLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsc0JBQVFrQixNQUFSLENBQWVsQixNQUFNa0IsTUFBckI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLEtBREw7QUFFWHBELGFBQU9nQyxNQUFNcUI7QUFGRixLQUFiOztBQUtBLFVBQUtDLGFBQUwsR0FBcUIsZ0JBQU1DLFNBQU4sRUFBckI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLGdCQUFNRCxTQUFOLEVBQWpCO0FBVGlCO0FBVWxCOzs7O3VDQUVrQkUsUyxFQUFXQyxTLEVBQVU7QUFDdEMsVUFBRyxLQUFLUCxLQUFMLENBQVdDLGNBQVgsS0FBOEJNLFVBQVVOLGNBQTNDLEVBQTBEO0FBQ3hELFlBQUcsS0FBS0QsS0FBTCxDQUFXQyxjQUFYLEtBQThCLElBQWpDLEVBQXNDO0FBQ3BDLDJCQUFPVixnQkFBUCxHQUEwQixLQUFLWSxhQUFMLENBQW1CSyxPQUE3QztBQUNELFNBRkQsTUFFTyxJQUFHLGlCQUFPakIsZ0JBQVAsS0FBNEIsS0FBS1ksYUFBTCxDQUFtQkssT0FBbEQsRUFBMkQ7QUFDaEUsMkJBQU9qQixnQkFBUCxHQUEwQmtCLFNBQTFCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFHLEtBQUs1QixLQUFMLENBQVdxQixZQUFYLElBQTJCSSxVQUFVSixZQUF4QyxFQUFxRDtBQUNuRCxhQUFLUSxRQUFMLENBQWMsRUFBQyxTQUFTLEtBQUs3QixLQUFMLENBQVdxQixZQUFyQixFQUFkO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLckIsS0FBTCxDQUFXa0IsTUFBWCxJQUFxQk8sVUFBVVAsTUFBbEMsRUFBeUM7QUFDdkMsMEJBQVFBLE1BQVIsQ0FBZSxLQUFLbEIsS0FBTCxDQUFXa0IsTUFBMUI7QUFDRDtBQUNGOzs7MkNBRXFCO0FBQ3BCLFVBQUcsaUJBQU9SLGdCQUFQLEtBQTRCLEtBQUtZLGFBQUwsQ0FBbUJLLE9BQWxELEVBQTJEO0FBQ3pELHlCQUFPakIsZ0JBQVAsR0FBMEJrQixTQUExQjtBQUNEO0FBQ0Y7OztrQ0FFYW5CLEMsRUFBRTtBQUFBOztBQUNkQSxRQUFFTyxjQUFGO0FBQ0EsVUFBRyxLQUFLaEIsS0FBTCxDQUFXOEIsVUFBWCxPQUE0QixLQUEvQixFQUFxQztBQUNuQyxlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFHLEtBQUs5QixLQUFMLENBQVcrQixjQUFkLEVBQTZCO0FBQzNCLFlBQUlDLGVBQWUsS0FBbkI7QUFDQSxhQUFLaEMsS0FBTCxDQUFXK0IsY0FBWCxDQUEwQm5CLE9BQTFCLENBQWtDLGtCQUFVO0FBQzFDLGNBQUdxQixpQkFBSCxFQUFvQkQsZUFBZSxJQUFmO0FBQ3BCLGNBQUdDLE9BQU9kLEtBQVAsQ0FBYUMsY0FBaEIsRUFBK0I7QUFDN0JhLG1CQUFPSixRQUFQLENBQWdCLEVBQUNULGdCQUFnQixLQUFqQixFQUFoQjtBQUNEO0FBQ0YsU0FMRDs7QUFPQSxZQUFHLENBQUNZLFlBQUosRUFBaUI7QUFDZixlQUFLaEMsS0FBTCxDQUFXK0IsY0FBWCxDQUEwQkcsSUFBMUIsQ0FBK0IsSUFBL0I7QUFDRDtBQUNGO0FBQ0QsV0FBS0wsUUFBTCxDQUFjLEVBQUNULGdCQUFnQixJQUFqQixFQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7OztvQ0FFYztBQUNiO0FBQ0EsVUFBRyxLQUFLRCxLQUFMLENBQVdDLGNBQVgsSUFBNkIsSUFBaEMsRUFBcUM7QUFDbkMsYUFBS1MsUUFBTCxDQUFjLEVBQUNULGdCQUFnQixLQUFqQixFQUFkO0FBQ0Q7QUFDRjs7O2dDQUVXcEQsSyxFQUFNO0FBQ2hCLFVBQUcsS0FBS21ELEtBQUwsQ0FBV25ELEtBQVgsSUFBb0JBLEtBQXZCLEVBQTZCO0FBQzNCLGFBQUs2RCxRQUFMLENBQWMsRUFBQzdELE9BQU9BLEtBQVIsRUFBZDtBQUNBLGFBQUtnQyxLQUFMLENBQVdtQyxRQUFYLENBQW9CbkUsS0FBcEI7QUFDRDtBQUNGOzs7NkJBRU87QUFBQTs7QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsMEJBQVcsa0JBQVgsRUFBK0IsS0FBS2dDLEtBQUwsQ0FBV29DLFlBQTFDLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQVEsS0FBSyxLQUFLWixTQUFsQixFQUE2QixXQUFXLDBCQUFXLEtBQUt4QixLQUFMLENBQVdxQyxTQUF0QixFQUFpQyxLQUFLckMsS0FBTCxDQUFXc0MsV0FBNUMsQ0FBeEMsRUFBa0csU0FBUyxpQkFBQzdCLENBQUQ7QUFBQSxxQkFBTyxPQUFLOEIsYUFBTCxDQUFtQjlCLENBQW5CLENBQVA7QUFBQSxhQUEzRztBQUNHLGlDQUFRLEtBQUtVLEtBQUwsQ0FBV25ELEtBQW5CLEVBQTBCd0UsTUFBMUIsQ0FBaUMsS0FBS3hDLEtBQUwsQ0FBV3dDLE1BQTVDO0FBREgsU0FERjtBQUlHLGFBQUtyQixLQUFMLENBQVdDLGNBQVgsSUFBNkIsbUJBQVNxQixZQUFULENBQzVCO0FBQUEsMEJBQU8sUUFBUDtBQUFBO0FBQ0csZUFBS3pDLEtBQUwsQ0FBVzBDLG1CQUFYLElBQ0M7QUFDRSxxQkFBUztBQUFBLHFCQUFLLE9BQUtDLGFBQUwsRUFBTDtBQUFBLGFBRFg7QUFFRSxtQkFBTztBQUNML0csd0JBQVUsT0FETDtBQUVMZixxQkFBTyxNQUZGO0FBR0xDLHNCQUFRLE1BSEg7QUFJTEgsbUJBQUssQ0FKQTtBQUtMQyxvQkFBTSxDQUxEO0FBTUxZLHFCQUFPLENBTkY7QUFPTEMsc0JBQVEsQ0FQSDtBQVFMbUgsc0JBQVEsS0FBSzVDLEtBQUwsQ0FBVzRDO0FBUmQ7QUFGVCxZQUZKO0FBZ0JFO0FBQ0UsbUJBQU8sS0FBSzVDLEtBQUwsQ0FBVzZDLEtBRHBCO0FBRUUsaUJBQUssS0FBS3ZCLGFBRlo7QUFHRSwwQkFBYyxLQUFLSCxLQUFMLENBQVduRCxLQUgzQjtBQUlFLDBCQUFjO0FBQUEscUJBQU0sT0FBSzZELFFBQUwsQ0FBYyxFQUFDVCxnQkFBZ0IsS0FBakIsRUFBZCxDQUFOO0FBQUEsYUFKaEI7QUFLRSx1QkFBVyxLQUFLcEIsS0FBTCxDQUFXOEMsU0FMeEI7QUFNRSxxQkFBUyxLQUFLOUMsS0FBTCxDQUFXVyxPQU50QjtBQU9FLDBCQUFjO0FBQUEscUJBQVMsT0FBS29DLFdBQUwsQ0FBaUIvRSxLQUFqQixDQUFUO0FBQUEsYUFQaEI7QUFRRSx5QkFBYSxLQUFLZ0MsS0FBTCxDQUFXZ0QsV0FSMUI7QUFTRSxnQ0FBb0IsS0FBS2hELEtBQUwsQ0FBV0Msa0JBVGpDO0FBVUUseUJBQWEsS0FBS0QsS0FBTCxDQUFXaUQsV0FWMUI7QUFXRSwwQkFBYyxLQUFLakQsS0FBTCxDQUFXa0QsWUFYM0I7QUFZRSwwQkFBYyxLQUFLbEQsS0FBTCxDQUFXbUQsWUFaM0I7QUFhRSxvQkFBUSxLQUFLbkQsS0FBTCxDQUFXNEMsTUFBWCxHQUFvQixDQWI5QjtBQWNFLG9CQUFRLEtBQUtwQixTQUFMLENBQWVHO0FBZHpCO0FBaEJGLFNBRDRCLEVBa0M1QjdFLFNBQVNELElBbENtQjtBQUpoQyxPQURGO0FBMENEOzs7O0VBdEhxQyxnQkFBTXVHLFM7O2tCQUF6QjdDLFU7OztBQXlIckJBLFdBQVc4QyxTQUFYLEdBQXVCO0FBQ3JCaEMsZ0JBQWMsb0JBQVVpQyxNQURIO0FBRXJCZCxVQUFRLG9CQUFVZSxNQUZHO0FBR3JCVCxhQUFXLG9CQUFVVSxPQUFWLENBQWtCLG9CQUFVQyxLQUFWLENBQWdCLENBQzNDLGVBQUs1SCxZQURzQyxFQUUzQyxlQUFLRyxXQUZzQyxFQUczQyxlQUFLRSxTQUhzQyxFQUkzQyxlQUFLRCxRQUpzQyxFQUszQyxlQUFLRSxhQUxzQyxDQUFoQixDQUFsQixDQUhVO0FBVXJCd0UsV0FBUyxvQkFBVTZDLE9BQVYsQ0FDUCxvQkFBVUEsT0FBVixDQUNFLG9CQUFVRSxLQUFWLENBQWdCO0FBQ2RDLFdBQU8sb0JBQVVGLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixPQUF2QixFQUFnQyxNQUFoQyxFQUF3QyxTQUF4QyxDQUFoQixDQURPO0FBRWRHLGFBQVMsb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDM0Isb0JBQVVDLE1BRGlCLEVBRTNCLG9CQUFVUCxNQUZpQixDQUFwQixFQUdOUSxPQUxXO0FBTWRDLFVBQU0sb0JBQVVOLEtBQVYsQ0FBZ0I7QUFDcEI3SSxhQUFPLG9CQUFVeUksTUFERztBQUVwQnhJLGNBQVEsb0JBQVV3STtBQUZFLEtBQWhCLENBTlE7QUFVZHJDLFlBQVEsb0JBQVVnRCxJQUFWLENBQWVDLFVBVlQ7QUFXZG5ELGFBQVMsb0JBQVVrRDtBQVhMLEdBQWhCLENBREYsQ0FETyxDQVZZO0FBMkJyQmhCLGVBQWEsb0JBQVVLLE1BM0JGO0FBNEJyQkosZ0JBQWMsb0JBQVVJLE1BNUJIO0FBNkJyQkgsZ0JBQWMsb0JBQVVHLE1BN0JIO0FBOEJyQmpCLGFBQVcsb0JBQVVrQixNQTlCQTtBQStCckJuQixnQkFBYyxvQkFBVW1CLE1BL0JIO0FBZ0NyQmpCLGVBQWEsb0JBQVVpQixNQWhDRjtBQWlDckJQLGVBQWEsb0JBQVVhLFNBQVYsQ0FBb0IsQ0FDL0Isb0JBQVVDLE1BRHFCLEVBRS9CLG9CQUFVUCxNQUZxQixDQUFwQixDQWpDUTtBQXFDckJyQyxVQUFRLG9CQUFVcUMsTUFyQ0c7QUFzQ3JCcEIsWUFBVSxvQkFBVThCLElBQVYsQ0FBZUMsVUF0Q0o7QUF1Q3JCakUsc0JBQW9CLG9CQUFVa0UsSUF2Q1Q7QUF3Q3JCdkIsVUFBUSxvQkFBVVUsTUF4Q0c7QUF5Q3JCVCxTQUFPLG9CQUFVVSxNQXpDSTtBQTBDckJiLHVCQUFxQixvQkFBVXlCLElBMUNWO0FBMkNyQnBDLGtCQUFnQixvQkFBVXFDLEtBM0NMO0FBNENyQnRDLGNBQVksb0JBQVVtQztBQTVDRCxDQUF2Qjs7QUErQ0ExRCxXQUFXOEQsWUFBWCxHQUEwQjtBQUN4QmhELGdCQUFjLENBRFU7QUFFeEJtQixVQUFRLFVBRmdCO0FBR3hCTSxhQUFXLENBQ1QsZUFBS2pILFlBREksRUFFVCxlQUFLRyxXQUZJLEVBR1QsZUFBS0UsU0FISSxFQUlULGVBQUtELFFBSkksRUFLVCxlQUFLRSxhQUxJLENBSGE7QUFVeEI2RyxlQUFhLEdBVlc7QUFXeEJyQyxXQUFTLENBQ1AsQ0FDRSxFQUFDZ0QsT0FBTyxNQUFSLEVBQWdCQyxTQUFTLElBQXpCLEVBQStCM0MsUUFBUSxpQkFBT2QsUUFBOUMsRUFBd0RZLFNBQVM7QUFBQSxhQUFLTixFQUFFNkQsR0FBRixJQUFTLE9BQWQ7QUFBQSxLQUFqRSxFQURGLEVBRUUsRUFBQ1gsT0FBTyxNQUFSLEVBQWdCQyxTQUFTLEdBQXpCLEVBQThCM0MsUUFBUSxpQkFBT1osU0FBN0MsRUFBd0RVLFNBQVM7QUFBQSxhQUFLTixFQUFFNkQsR0FBRixJQUFTLFdBQWQ7QUFBQSxLQUFqRSxFQUZGLEVBR0UsRUFBQ1gsT0FBTyxPQUFSLEVBQWlCQyxTQUFTLEdBQTFCLEVBQStCM0MsUUFBUSxpQkFBTzNCLE9BQTlDLEVBQXVEeUIsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQWhFLEVBSEYsRUFJRSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPckIsUUFBaEQsRUFBMERtQixTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBbkUsRUFKRixDQURPLEVBT1AsQ0FDRSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPbEMsS0FBaEQsRUFBdURnQyxTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBaEUsRUFERixFQUVFLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzNDLFFBQVEsaUJBQU9qQyxLQUFoRCxFQUF1RCtCLFNBQVM7QUFBQSxhQUFLTixFQUFFNkQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUFoRSxFQUZGLEVBR0UsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDM0MsUUFBUSxpQkFBT2hDLElBQWhELEVBQXNEOEIsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQS9ELEVBSEYsRUFJRSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPdEIsY0FBaEQsRUFBZ0VvQixTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBekUsRUFKRixDQVBPLEVBWUwsQ0FDQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPckMsSUFBaEQsRUFBc0RtQyxTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBL0QsRUFEQSxFQUVBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzNDLFFBQVEsaUJBQU9wQyxJQUFoRCxFQUFzRGtDLFNBQVM7QUFBQSxhQUFLTixFQUFFNkQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUEvRCxFQUZBLEVBR0EsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDM0MsUUFBUSxpQkFBT25DLEdBQWhELEVBQXFEaUMsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQTlELEVBSEEsRUFJQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPdkIsS0FBaEQsRUFBdURxQixTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBaEUsRUFKQSxDQVpLLEVBaUJMLENBQ0EsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDM0MsUUFBUSxpQkFBTzVDLEdBQWhELEVBQXFEMEMsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQTlELEVBREEsRUFFQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPdkMsR0FBaEQsRUFBcURxQyxTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBOUQsRUFGQSxFQUdBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxHQUE1QixFQUFpQzNDLFFBQVEsaUJBQU90QyxLQUFoRCxFQUF1RG9DLFNBQVM7QUFBQSxhQUFLTixFQUFFNkQsR0FBRixJQUFTLEdBQWQ7QUFBQSxLQUFoRSxFQUhBLEVBSUEsRUFBQ1gsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDM0MsUUFBUSxpQkFBT3pCLElBQWhELEVBQXNEdUIsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQS9ELEVBSkEsQ0FqQkssRUFzQkwsQ0FDQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPL0IsSUFBaEQsRUFBc0Q2QixTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFkO0FBQUEsS0FBL0QsRUFEQSxFQUVBLEVBQUNYLE9BQU8sU0FBUixFQUFtQkMsU0FBUyxJQUE1QixFQUFrQzNDLFFBQVEsaUJBQU85QixVQUFqRCxFQUE2RDRCLFNBQVM7QUFBQSxhQUFLTixFQUFFOEQsT0FBRixJQUFhLEVBQWIsSUFBbUI5RCxFQUFFK0QsUUFBMUI7QUFBQSxLQUF0RSxFQUZBLEVBR0EsRUFBQ2IsT0FBTyxTQUFSLEVBQW1CQyxTQUFTLEdBQTVCLEVBQWlDM0MsUUFBUSxpQkFBTzdCLE9BQWhELEVBQXlEMkIsU0FBUztBQUFBLGFBQUtOLEVBQUU2RCxHQUFGLElBQVMsR0FBZDtBQUFBLEtBQWxFLEVBSEEsRUFJQSxFQUFDWCxPQUFPLFNBQVIsRUFBbUJDLFNBQVMsR0FBNUIsRUFBaUMzQyxRQUFRLGlCQUFPcEIsS0FBaEQsRUFBdURrQixTQUFTO0FBQUEsYUFBS04sRUFBRTZELEdBQUYsSUFBUyxHQUFULElBQWdCN0QsRUFBRTZELEdBQUYsSUFBUyxPQUE5QjtBQUFBLEtBQWhFLEVBSkEsQ0F0QkssQ0FYZTtBQXdDeEJyRSxzQkFBb0IsSUF4Q0k7QUF5Q3hCZ0QsZUFBYSxFQXpDVztBQTBDeEJDLGdCQUFjLEVBMUNVO0FBMkN4QkMsZ0JBQWMsQ0EzQ1U7QUE0Q3hCVCx1QkFBcUIsSUE1Q0c7QUE2Q3hCWCxrQkFBZ0JILFNBN0NRO0FBOEN4QkUsY0FBWTtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBOUNZO0FBK0N4QmMsVUFBUTtBQS9DZ0IsQ0FBMUIsQzs7Ozs7O0FDOUxBLCtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI2QixVOzs7QUFFbkIsc0JBQVl6RSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUttQixLQUFMLEdBQWE7QUFDWHlDLGVBQVM1RCxNQUFNcUIsWUFESjtBQUVYckQsYUFBT2dDLE1BQU1xQixZQUZGO0FBR1hxRCxrQkFBWSxJQUhEO0FBSVhsQyxjQUFRLHVCQUpHO0FBS1htQyxnQkFBVSxFQUxDO0FBTVhDLFlBQU0sRUFOSztBQU9YMUosU0FBRyxDQVBRO0FBUVhDLFNBQUc7QUFSUSxLQUFiOztBQVdBLFVBQUswSixlQUFMLEdBQXVCLEVBQXZCOztBQUVBM0gsV0FBTzRILFFBQVAsR0FBa0I7QUFBQSxhQUFNLE1BQUtDLGNBQUwsRUFBTjtBQUFBLEtBQWxCOztBQUVBLFVBQUtDLFVBQUwsR0FBa0IsZ0JBQU16RCxTQUFOLEVBQWxCO0FBakJpQjtBQWtCbEI7Ozs7cUNBRWU7QUFDZCxVQUFHLEtBQUt5RCxVQUFMLENBQWdCckQsT0FBbkIsRUFBMkI7QUFDekIsWUFBTXNELGFBQWEsZUFBS3pILGdCQUFMLEVBQW5CO0FBQ0EsWUFBTTBILGFBQWEsZUFBS3pJLGlCQUFMLENBQXVCLEtBQUt1RCxLQUFMLENBQVdtRixNQUFsQyxDQUFuQjtBQUNBLFlBQU1DLFdBQVcsZUFBSzNJLGlCQUFMLENBQXVCLEtBQUt1SSxVQUFMLENBQWdCckQsT0FBdkMsRUFBZ0QsS0FBS1IsS0FBTCxDQUFXakcsQ0FBM0QsRUFBOEQsS0FBS2lHLEtBQUwsQ0FBV2hHLENBQXpFLENBQWpCO0FBQ0EsWUFBTWtLLFFBQVEsRUFBZDtBQUNBLFlBQUlDLGNBQWMxRCxTQUFsQjtBQUNBLGFBQUssSUFBSTJELElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLdkYsS0FBTCxDQUFXOEMsU0FBWCxDQUFxQjBDLE1BQXpDLEVBQWlERCxHQUFqRCxFQUFzRDtBQUNwRCxjQUFNRSxTQUFTLEtBQUt6RixLQUFMLENBQVc4QyxTQUFYLENBQXFCeUMsQ0FBckIsQ0FBZjtBQUNBLGNBQUlqSyxhQUFKO0FBQ0EsY0FBR21LLFVBQVUsZUFBS3RKLGFBQWxCLEVBQWdDO0FBQzlCYixtQkFBTzJKLFdBQVdTLGVBQVgsQ0FBMkJOLFFBQTNCLEVBQXFDSyxNQUFyQyxDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0xuSyxtQkFBTzRKLFdBQVdRLGVBQVgsQ0FBMkJOLFFBQTNCLEVBQXFDSyxNQUFyQyxDQUFQO0FBQ0Q7O0FBRURKLGdCQUFNbkQsSUFBTixDQUFXNUcsSUFBWDtBQUNBLGNBQUcySixXQUFXVSxRQUFYLENBQW9CckssSUFBcEIsQ0FBSCxFQUE2QjtBQUMzQmdLLDBCQUFjaEssSUFBZDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxZQUFHLENBQUNnSyxXQUFKLEVBQWdCO0FBQ2RELGdCQUFNTyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVViLFdBQVdjLGtCQUFYLENBQThCRCxDQUE5QixFQUFpQ0UsSUFBakMsR0FBd0NmLFdBQVdjLGtCQUFYLENBQThCRixDQUE5QixFQUFpQ0csSUFBbkY7QUFBQSxXQUFYO0FBQ0FWLHdCQUFjRCxNQUFNLENBQU4sQ0FBZDtBQUNEOztBQUVELFlBQUdDLFdBQUgsRUFBZTtBQUNiLGVBQUt6RCxRQUFMLENBQWM7QUFDWjNHLGVBQUdvSyxZQUFZdkssVUFESDtBQUVaSSxlQUFHbUssWUFBWXRLO0FBRkgsV0FBZDtBQUlEO0FBQ0Y7QUFDRjs7O21DQUVjc0ksTSxFQUFPO0FBQ3BCLFVBQU0yQyxhQUFhLEtBQUs5RSxLQUFMLENBQVd5QyxPQUFYLENBQW1Cc0MsUUFBbkIsRUFBbkI7QUFDQSxVQUFHRCxlQUFlLEdBQWYsSUFBc0IsS0FBSzlFLEtBQUwsQ0FBV3VELFVBQXBDLEVBQStDO0FBQzdDLGFBQUs3QyxRQUFMLENBQWM7QUFDWitCLG1CQUFTcUMsYUFBYTNDO0FBRFYsU0FBZDtBQUdELE9BSkQsTUFJTztBQUNMLGFBQUt6QixRQUFMLENBQWM7QUFDWjZDLHNCQUFZLElBREE7QUFFWmQsbUJBQVNOO0FBRkcsU0FBZDtBQUlEO0FBQ0Y7Ozt5QkFFSTFJLEksRUFBTStKLFEsRUFBVW5KLEssRUFBTTtBQUN6QixjQUFRbUosUUFBUjtBQUNFLGFBQUssR0FBTDtBQUNFLGNBQUcsS0FBS3hELEtBQUwsQ0FBV3lELElBQVgsQ0FBZ0I1RyxLQUFoQixJQUF5QixHQUE1QixFQUFnQztBQUM5QnhDLG9CQUFRWixRQUFRWSxRQUFRLEdBQWhCLENBQVI7QUFDRDs7QUFFRCxpQkFBUVosT0FBT1ksS0FBZjtBQUNGLGFBQUssR0FBTDtBQUNFLGNBQUcsS0FBSzJGLEtBQUwsQ0FBV3lELElBQVgsQ0FBZ0I1RyxLQUFoQixJQUF5QixHQUE1QixFQUFnQztBQUM5QnhDLG9CQUFRWixRQUFRWSxRQUFRLEdBQWhCLENBQVI7QUFDRDs7QUFFRCxpQkFBUVosT0FBT1ksS0FBZjtBQUNGLGFBQUssR0FBTDtBQUNFLGNBQUcsS0FBSzJGLEtBQUwsQ0FBV3lELElBQVgsQ0FBZ0I1RyxLQUFoQixJQUF5QixHQUE1QixFQUFnQztBQUM5QnhDLG9CQUFRQSxRQUFRLEdBQWhCO0FBQ0Q7O0FBRUQsaUJBQU9aLE9BQU9ZLEtBQWQ7QUFDRixhQUFLLEdBQUw7QUFDRSxjQUFHLEtBQUsyRixLQUFMLENBQVd5RCxJQUFYLENBQWdCNUcsS0FBaEIsSUFBeUIsR0FBNUIsRUFBZ0M7QUFDOUJ4QyxvQkFBUUEsUUFBUSxHQUFoQjtBQUNEOztBQUVELGlCQUFPWixPQUFPWSxLQUFkO0FBQ0Y7QUFDRSxnQkFBTSxzQkFBc0JtSixRQUF0QixHQUFpQyxhQUF2QztBQTFCSjtBQTRCRDs7OzhCQUUyQjtBQUFBLFVBQXBCd0IsUUFBb0IsdUVBQVQsWUFBTSxDQUFFLENBQUM7O0FBQzFCLFVBQUl2QyxVQUFVLEtBQUt6QyxLQUFMLENBQVd5QyxPQUF6QjtBQUNBLFVBQUk1RixRQUFRLEtBQUttRCxLQUFMLENBQVduRCxLQUF2QjtBQUNBLFVBQUlvSSxhQUFhLEtBQWpCO0FBQ0EsVUFBRyxLQUFLakYsS0FBTCxDQUFXd0QsUUFBWCxDQUFvQjNHLEtBQXZCLEVBQTZCO0FBQzNCNEYsa0JBQVUsS0FBS3RGLElBQUwsQ0FBVStILFdBQVdySSxLQUFYLEVBQWtCLEVBQWxCLENBQVYsRUFBaUMsS0FBS21ELEtBQUwsQ0FBV3dELFFBQVgsQ0FBb0IzRyxLQUFyRCxFQUE0RHFJLFdBQVd6QyxPQUFYLEVBQW9CLEVBQXBCLENBQTVELENBQVY7QUFDQXdDLHFCQUFhLElBQWI7QUFDRDs7QUFFRHBJLGNBQVE0RixPQUFSOztBQUVBLFdBQUsvQixRQUFMLENBQWM7QUFDWjhDLGtCQUFVLEVBREU7QUFFWkMsY0FBTSxFQUZNO0FBR1poQixpQkFBU0EsT0FIRztBQUlaNUYsZUFBT0EsS0FKSztBQUtaMEcsb0JBQVk7QUFMQSxPQUFkLEVBTUcsWUFBTTtBQUNQeUI7QUFDRCxPQVJEO0FBU0Q7OztrQ0FFYXhCLFEsRUFBVXBHLFEsRUFBUztBQUFBOztBQUMvQixVQUFHLEtBQUs0QyxLQUFMLENBQVd1RCxVQUFkLEVBQXlCO0FBQ3ZCLGFBQUs1RSxPQUFMLENBQWEsWUFBTTtBQUNqQixpQkFBSytCLFFBQUwsQ0FBYztBQUNaNkMsd0JBQVksS0FEQTtBQUVaQyxzQkFBVTtBQUNSM0cscUJBQU8yRyxRQURDO0FBRVJmLHVCQUFTckYsU0FBU3FGO0FBRlY7QUFGRSxXQUFkO0FBT0QsU0FSRDtBQVNELE9BVkQsTUFVTztBQUNMLGFBQUsvQixRQUFMLENBQWM7QUFDWjhDLG9CQUFVO0FBQ1IzRyxtQkFBTzJHLFFBREM7QUFFUmYscUJBQVNyRixTQUFTcUY7QUFGVjtBQURFLFNBQWQ7QUFNRDtBQUNGOzs7bUNBRWE7QUFDWixVQUFHLEtBQUt6QyxLQUFMLENBQVd5QyxPQUFYLENBQW1CMEMsT0FBbkIsQ0FBMkIsR0FBM0IsTUFBb0MsQ0FBQyxDQUF4QyxFQUEwQztBQUN4QyxhQUFLN0gsY0FBTCxDQUFvQixHQUFwQjtBQUNEO0FBQ0Y7OztpQ0FFWUYsUSxFQUFTO0FBQ3BCLFVBQUcsS0FBSzRDLEtBQUwsQ0FBV3dELFFBQVgsQ0FBb0IzRyxLQUF2QixFQUE2QjtBQUMzQixhQUFLNkQsUUFBTCxDQUFjLEVBQUMrQyxNQUFNO0FBQ25CNUcsbUJBQU0sR0FEYTtBQUVuQjRGLHFCQUFTckYsU0FBU3FGO0FBRkMsV0FBUCxFQUFkO0FBSUQsT0FMRCxNQUtPO0FBQ0wsYUFBSy9CLFFBQUwsQ0FBYyxFQUFDK0IsU0FBUyxLQUFLekMsS0FBTCxDQUFXeUMsT0FBWCxHQUFxQixHQUEvQixFQUFkO0FBQ0Q7QUFDRjs7OzRCQUVNO0FBQ0wsVUFBRyxLQUFLekMsS0FBTCxDQUFXdUQsVUFBZCxFQUF5QjtBQUN2QixhQUFLN0MsUUFBTCxDQUFjO0FBQ1orQixtQkFBUyxHQURHO0FBRVpjLHNCQUFZLEtBRkE7QUFHWkUsZ0JBQU07QUFITSxTQUFkO0FBS0Q7QUFDRjs7OytCQUVTO0FBQ1IsV0FBSy9DLFFBQUwsQ0FBYztBQUNaK0IsaUJBQVMsR0FERztBQUVaNUYsZUFBTyxHQUZLO0FBR1oyRyxrQkFBVSxFQUhFO0FBSVpELG9CQUFZLEtBSkE7QUFLWkUsY0FBTTtBQUxNLE9BQWQ7QUFPRDs7OzhCQUVPO0FBQ04sVUFBRyxLQUFLekQsS0FBTCxDQUFXdUQsVUFBZCxFQUF5QjtBQUN2QixZQUFNNkIsV0FBVyxFQUFqQjtBQUNBLFlBQUlDLGFBQWEsS0FBS3JGLEtBQUwsQ0FBV3lDLE9BQVgsQ0FBbUJzQyxRQUFuQixFQUFqQjtBQUNBLFlBQUdNLGVBQWUsR0FBbEIsRUFBc0I7QUFDcEJELG1CQUFTLE1BQVQsSUFBbUIsRUFBbkI7QUFDRDtBQUNEQyxxQkFBYUEsV0FBV0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQkQsV0FBV2hCLE1BQVgsR0FBb0IsQ0FBekMsQ0FBYjtBQUNBZSxpQkFBUyxTQUFULElBQXNCLENBQUNDLFVBQUQsR0FBYyxDQUFkLEdBQWtCQSxVQUF4QztBQUNBLGFBQUszRSxRQUFMLENBQWMwRSxRQUFkO0FBQ0Q7QUFDRjs7O3dDQUVrQjtBQUNqQixXQUFLeEIsY0FBTDtBQUNEOzs7MEJBRUk7QUFDSCxVQUFHLEtBQUsvRSxLQUFMLENBQVcwRyxZQUFkLEVBQTRCLEtBQUsxRyxLQUFMLENBQVcwRyxZQUFYLENBQXdCLEtBQUt2RixLQUFMLENBQVduRCxLQUFuQztBQUM3Qjs7OzRCQUVNO0FBQ0wsV0FBS2dDLEtBQUwsQ0FBVzJHLFlBQVg7QUFDRDs7O2tDQUVhcEksUSxFQUFVQyxLLEVBQU07QUFDNUIsdUJBQU9rQyxnQkFBUCxHQUEwQixJQUExQjtBQUNBbkMsZUFBUzBDLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IxQyxRQUF0QixFQUFnQ0MsS0FBaEM7QUFDRDs7OzZCQUVPO0FBQUE7O0FBQ04sVUFBTW1GLFFBQVEsRUFBQzVILDBCQUF3QixLQUFLb0YsS0FBTCxDQUFXakcsQ0FBbkMsWUFBMkMsS0FBS2lHLEtBQUwsQ0FBV2hHLENBQXRELFFBQUQsRUFBZDtBQUNBLFVBQUcsS0FBSzZFLEtBQUwsQ0FBVzRDLE1BQVgsS0FBc0JoQixTQUF6QixFQUFtQztBQUNqQytCLGNBQU0sUUFBTixJQUFrQixLQUFLM0QsS0FBTCxDQUFXNEMsTUFBN0I7QUFDRDtBQUNELGFBQ0U7QUFBQTtBQUFBLFVBQUssS0FBSyxLQUFLb0MsVUFBZixFQUEyQixXQUFVLDhCQUFyQyxFQUFvRSxPQUFPckIsS0FBM0UsRUFBa0YsU0FBUztBQUFBLG1CQUFLLGlCQUFPakQsZ0JBQVAsU0FBTDtBQUFBLFdBQTNGO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxxQ0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsMkNBQWYsRUFBMkQsT0FBTyxFQUFDN0YsT0FBUyxLQUFLbUYsS0FBTCxDQUFXaUQsV0FBWCxHQUF5QixDQUExQixHQUFnQyxLQUFLakQsS0FBTCxDQUFXbUQsWUFBWCxHQUEwQixDQUEzRCxHQUFpRSxLQUFLMEIsZUFBOUUsRUFBbEU7QUFDRyxpQkFBSzdFLEtBQUwsQ0FBVzZDO0FBRGQsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNENBQWY7QUFDRTtBQUNFLHlCQUFVLDJDQURaO0FBRUUsdUJBQVMsS0FBSzdDLEtBQUwsQ0FBV2dELFdBRnRCO0FBR0UsdUJBQVM7QUFBQSx1QkFBTSxPQUFLOUMsS0FBTCxFQUFOO0FBQUEsZUFIWDtBQUlFLHFCQUFPLEtBQUsyRSxlQUpkO0FBS0Usc0JBQVEsS0FBS0EsZUFMZjtBQU1FLHNCQUFRLEtBQUs3RSxLQUFMLENBQVdtRDtBQU5yQjtBQURGO0FBSkYsU0FERjtBQWdCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNDQUFmLEVBQXNELE9BQU8sRUFBQ3lELFFBQVEsS0FBSzVHLEtBQUwsQ0FBV21ELFlBQXBCLEVBQTdEO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSwrQ0FBZjtBQUFnRSxpQkFBS2hDLEtBQUwsQ0FBV3dELFFBQVgsQ0FBb0JmO0FBQXBGLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZDQUFmO0FBQ0csbUNBQVEsS0FBS3pDLEtBQUwsQ0FBV3lDLE9BQW5CLEVBQTRCcEIsTUFBNUIsQ0FBbUMsS0FBS3JCLEtBQUwsQ0FBV3FCLE1BQTlDLENBREg7QUFDMEQsaUJBQUtyQixLQUFMLENBQVd5RCxJQUFYLENBQWdCaEI7QUFEMUU7QUFGRixTQWhCRjtBQXNCRyxhQUFLNUQsS0FBTCxDQUFXVyxPQUFYLENBQW1Ca0csR0FBbkIsQ0FBdUIsVUFBQ2hHLEdBQUQsRUFBTWlHLE1BQU4sRUFBaUI7QUFDdkMsaUJBQ0U7QUFBQTtBQUFBLGNBQUssS0FBS0EsTUFBVixFQUFrQixXQUFVLHNDQUE1QjtBQUNHakcsZ0JBQUlnRyxHQUFKLENBQVEsVUFBQy9GLEdBQUQsRUFBTWlHLE1BQU4sRUFBaUI7QUFDeEIscUJBQ0U7QUFDRSxxQkFBSztBQUFBLHlCQUFRakcsSUFBSWtHLFNBQUosR0FBZ0J0SyxJQUF4QjtBQUFBLGlCQURQO0FBRUUsNEJBQVlxSyxTQUFTLENBQVQsR0FBYWxHLElBQUlrRyxTQUFTLENBQWIsQ0FBYixHQUErQixJQUY3QztBQUdFLHFCQUFLRCxTQUFTLEdBQVQsR0FBZUMsTUFIdEI7QUFJRSwyQkFBV2pHLElBQUl1QixTQUpqQjtBQUtFLHVCQUFPdkIsSUFBSTZDLEtBTGI7QUFNRSxzQkFBTTdDLElBQUlrRCxJQU5aO0FBT0UseUJBQVNsRCxJQUFJOEMsT0FQZjtBQVFFLHlCQUFTO0FBQUEseUJBQUssT0FBS3FELGFBQUwsQ0FBbUJuRyxHQUFuQixFQUF3QkwsQ0FBeEIsQ0FBTDtBQUFBLGlCQVJYO0FBU0UsdUJBQU8sT0FBS1QsS0FBTCxDQUFXaUQsV0FUcEI7QUFVRSx3QkFBUSxPQUFLakQsS0FBTCxDQUFXa0QsWUFWckI7QUFXRSx3QkFBUSxPQUFLbEQsS0FBTCxDQUFXbUQ7QUFYckIsZ0JBREY7QUFlRCxhQWhCQTtBQURILFdBREY7QUFxQkQsU0F0QkE7QUF0QkgsT0FERjtBQWdERDs7OztFQTNRcUMsZ0JBQU1DLFM7O2tCQUF6QnFCLFU7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJ5QyxNOzs7QUFFbkIsa0JBQVlsSCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkdBQ1hBLEtBRFc7QUFFbEI7Ozs7NEJBRU9TLEMsRUFBRTtBQUNSQSxRQUFFTyxjQUFGO0FBQ0EsV0FBS2hCLEtBQUwsQ0FBV21ILE9BQVgsQ0FBbUIxRyxDQUFuQjtBQUNBLGFBQU8sS0FBUDtBQUNEOzs7cUNBRWU7QUFDZCxVQUFNa0QsUUFBUTtBQUNaOUksZUFBTyxLQUFLbUYsS0FBTCxDQUFXbkYsS0FETjtBQUVaQyxnQkFBUSxLQUFLa0YsS0FBTCxDQUFXbEY7QUFGUCxPQUFkOztBQUtBLFVBQUcsS0FBS2tGLEtBQUwsQ0FBVzRHLE1BQWQsRUFBcUI7QUFDbkJqRCxjQUFNaUQsTUFBTixHQUFlLEtBQUs1RyxLQUFMLENBQVc0RyxNQUExQjtBQUNEOztBQUVELFVBQUcsS0FBSzVHLEtBQUwsQ0FBV2dFLElBQWQsRUFBbUI7QUFDakJMLGNBQU0vSCxRQUFOLEdBQWlCLFVBQWpCO0FBQ0EsWUFBRyxLQUFLb0UsS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQmxKLE1BQWhCLElBQTBCLENBQTdCLEVBQStCO0FBQzdCLGNBQU1zTSxjQUFjLEtBQUtwSCxLQUFMLENBQVc0RyxNQUFYLElBQXFCLENBQUMsS0FBSzVHLEtBQUwsQ0FBV2dFLElBQVgsQ0FBZ0JsSixNQUFoQixHQUF5QixDQUExQixJQUErQixDQUFwRCxDQUFwQjtBQUNBNkksZ0JBQU03SSxNQUFOLEdBQWdCNkksTUFBTTdJLE1BQU4sR0FBZSxLQUFLa0YsS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQmxKLE1BQWhDLEdBQTBDc00sV0FBekQ7QUFDQXpELGdCQUFNaEosR0FBTixHQUFZLEVBQUcsS0FBS3FGLEtBQUwsQ0FBV2xGLE1BQVgsSUFBcUIsS0FBS2tGLEtBQUwsQ0FBV2dFLElBQVgsQ0FBZ0JsSixNQUFoQixHQUF5QixDQUE5QyxDQUFELEdBQXFEc00sV0FBdkQsQ0FBWjtBQUNEOztBQUVELFlBQUcsS0FBS3BILEtBQUwsQ0FBV2dFLElBQVgsQ0FBZ0JuSixLQUFoQixJQUF5QixDQUE1QixFQUE4QjtBQUM1QixjQUFNdU0sZUFBYyxLQUFLcEgsS0FBTCxDQUFXNEcsTUFBWCxJQUFxQixDQUFDLEtBQUs1RyxLQUFMLENBQVdnRSxJQUFYLENBQWdCbkosS0FBaEIsR0FBd0IsQ0FBekIsSUFBOEIsQ0FBbkQsQ0FBcEI7QUFDQThJLGdCQUFNOUksS0FBTixHQUFlOEksTUFBTTlJLEtBQU4sR0FBYyxLQUFLbUYsS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQm5KLEtBQS9CLEdBQXdDdU0sWUFBdEQ7QUFDRDtBQUNGOztBQUVELFVBQUcsS0FBS3BILEtBQUwsQ0FBV3FILFVBQVgsSUFBeUIsS0FBS3JILEtBQUwsQ0FBV3FILFVBQVgsQ0FBc0JyRCxJQUEvQyxJQUF1RCxLQUFLaEUsS0FBTCxDQUFXcUgsVUFBWCxDQUFzQnJELElBQXRCLENBQTJCbkosS0FBbEYsSUFBMkYsS0FBS21GLEtBQUwsQ0FBV3FILFVBQVgsQ0FBc0JyRCxJQUF0QixDQUEyQm5KLEtBQTNCLElBQW9DLENBQWxJLEVBQW9JO0FBQ2xJLFlBQU11TSxnQkFBYyxLQUFLcEgsS0FBTCxDQUFXNEcsTUFBWCxJQUFzQixLQUFLNUcsS0FBTCxDQUFXcUgsVUFBWCxDQUFzQnJELElBQXRCLENBQTJCbkosS0FBM0IsR0FBbUMsQ0FBcEMsR0FBeUMsQ0FBOUQsQ0FBcEI7QUFDQThJLGNBQU0yRCxVQUFOLEdBQW9CLEtBQUt0SCxLQUFMLENBQVduRixLQUFYLEdBQW1CLEtBQUttRixLQUFMLENBQVdxSCxVQUFYLENBQXNCckQsSUFBdEIsQ0FBMkJuSixLQUEvQyxHQUF3RHVNLGFBQTNFO0FBQ0Q7O0FBRUQsYUFBT3pELEtBQVA7QUFDRDs7OzZCQUVPO0FBQUE7O0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRSxlQUFJLFNBRE47QUFFRSxxQkFBVywwQkFDVCxxQ0FEUyxFQUVULEtBQUszRCxLQUFMLENBQVcyRCxLQUFYLEdBQW1CLHlDQUF5QyxLQUFLM0QsS0FBTCxDQUFXMkQsS0FBdkUsR0FBK0UvQixTQUZ0RSxFQUdULEtBQUs1QixLQUFMLENBQVdxQyxTQUhGLENBRmI7QUFPRSxpQkFBTyxLQUFLa0YsY0FBTCxFQVBUO0FBUUUsbUJBQVM7QUFBQSxtQkFBSyxPQUFLSixPQUFMLENBQWExRyxDQUFiLENBQUw7QUFBQTtBQVJYO0FBVUcsYUFBS1QsS0FBTCxDQUFXNEQ7QUFWZCxPQURGO0FBY0Q7Ozs7RUEzRGlDLGdCQUFNUixTOztrQkFBckI4RCxNOzs7Ozs7QUNIckIsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJwcm9wLXR5cGVzXCIsIFwicmVhY3QtZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ4NjUzMWE4NTMwNDEwYzJlN2Q3IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBhcmVhKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5XSU5ET1dfQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cblxuICBnZXRPdmVybGFwcGluZ1JlY3QocmVjdCl7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIHJlY3QudG9wKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0aGlzLmxlZnQsIHJlY3QubGVmdClcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKHRoaXMucmlnaHQsIHJlY3QucmlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRoaXMuYm90dG9tLCByZWN0LmJvdHRvbSk7XG5cbiAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICBpZiAod2lkdGggPiAwICYmIGhlaWdodCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdXSU5ET1dfQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJXSU5ET1dfQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsImNsYXNzIEdsb2JhbFxue1xuICBnZXQgY3VycmVudENhbGNsYXRvcigpe1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsY2xhdG9yXG4gIH1cblxuICBzZXQgY3VycmVudENhbGNsYXRvcih2YWx1ZSl7XG4gICAgdGhpcy5fY3VycmVudENhbGNsYXRvciA9IHZhbHVlXG4gIH1cbn1cblxuY29uc3QgZyA9IG5ldyBHbG9iYWwoKVxuZXhwb3J0IGRlZmF1bHQgZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnXG5cbmNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGNhbGMuZml4KClcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jbGFzc2VzL0FjdGlvbidcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZihHbG9iYWwuY3VycmVudENhbGNsYXRvcil7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IucHJvcHMuYnV0dG9ucy5mb3JFYWNoKHJvdyA9PiByb3cuZm9yRWFjaChidG4gPT4ge1xuICAgICAgaWYoYnRuLmtleURvd24gJiYgYnRuLmtleURvd24oZSkpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnRuLmFjdGlvbihHbG9iYWwuY3VycmVudENhbGNsYXRvciwgYnRuLCBlKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIG51bWVyYWwubG9jYWxlKHByb3BzLmxvY2FsZSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbkNhbGN1bGF0b3I6IGZhbHNlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZVxuICAgIH1cblxuICAgIHRoaXMuY2FsY3VsYXRvclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5idXR0b25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSBwcmV2U3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PT0gdHJ1ZSl7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpcy5jYWxjdWxhdG9yUmVmLmN1cnJlbnRcbiAgICAgIH0gZWxzZSBpZihHbG9iYWwuY3VycmVudENhbGNsYXRvciA9PT0gdGhpcy5jYWxjdWxhdG9yUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmluaXRpYWxWYWx1ZSAhPSBwcmV2UHJvcHMuaW5pdGlhbFZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyd2YWx1ZSc6IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlfSlcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmxvY2FsZSAhPSBwcmV2UHJvcHMubG9jYWxlKXtcbiAgICAgIG51bWVyYWwubG9jYWxlKHRoaXMucHJvcHMubG9jYWxlKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPT09IHRoaXMuY2FsY3VsYXRvclJlZi5jdXJyZW50KSB7XG4gICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tQaWNrZXIoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMucHJvcHMuc2hvdWxkT3BlbigpID09PSBmYWxzZSl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwKXtcbiAgICAgIGxldCBhbHJlYWR5T3BlbmQgPSBmYWxzZVxuICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5mb3JFYWNoKHBpY2tlciA9PiB7XG4gICAgICAgIGlmKHBpY2tlciA9PT0gdGhpcykgYWxyZWFkeU9wZW5kID0gdHJ1ZVxuICAgICAgICBpZihwaWNrZXIuc3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgICAgIHBpY2tlci5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYoIWFscmVhZHlPcGVuZCl7XG4gICAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAucHVzaCh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLnZhbHVlICE9IHZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0pXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncmVhY3QtY2FsY3BpY2tlcicsIHRoaXMucHJvcHMud3JhcHBlckNsYXNzKX0+XG4gICAgICAgIDxidXR0b24gcmVmPXt0aGlzLmJ1dHRvblJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLmJ1dHRvbkNsYXNzKX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja1BpY2tlcihlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS52YWx1ZSkuZm9ybWF0KHRoaXMucHJvcHMuZm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICYmIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jbG9zZU9uT3V0c2lkZUNsaWNrICYmIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xvc2VQb3J0YWwoKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXhcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5jYWxjdWxhdG9yUmVmfVxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2tDbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSl9XG4gICAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICAgIGJ1dHRvbnM9e3RoaXMucHJvcHMuYnV0dG9uc31cbiAgICAgICAgICAgICAgb25DYWxjdWxhdGVkPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIGNsb3NlT25FbnRlckFjdGlvbj17dGhpcy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb259XG4gICAgICAgICAgICAgIGJ1dHRvbldpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgICBidXR0b25IZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgICBidXR0b25NYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgICB6SW5kZXg9e3RoaXMucHJvcHMuekluZGV4ICsgMX1cbiAgICAgICAgICAgICAgYnV0dG9uPXt0aGlzLmJ1dHRvblJlZi5jdXJyZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAsIGRvY3VtZW50LmJvZHkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYWxjUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvc2l0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdKSksXG4gIGJ1dHRvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdsaWdodCcsICdkYXJrJywgJ3dhcm5pbmcnXSksXG4gICAgICAgIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgXSkucmVxdWlyZSxcbiAgICAgICAgc3BhbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgICAgfSksXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgICAgIH0pXG4gICAgKVxuICApLFxuICBidXR0b25XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25NYXJnaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25DbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsb3NlT25FbnRlckFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpb25Hcm91cDogUHJvcFR5cGVzLmFycmF5LFxuICBzaG91bGRPcGVuOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5DYWxjUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiAwLFxuICBmb3JtYXQ6IFwiMCwwWy5dMDBcIixcbiAgcG9zaXRpb25zOiBbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSxcbiAgY2xvc2VCdXR0b246ICfDlycsXG4gIGJ1dHRvbnM6IFtcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIkFDXCIsIGFjdGlvbjogQWN0aW9uLmFsbENsZWFyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdDbGVhcid9LFxuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCLihpBcIiwgYWN0aW9uOiBBY3Rpb24uYmFja3NwYWNlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICdCYWNrc3BhY2UnfSxcbiAgICAgIHtzdHlsZTogXCJsaWdodFwiLCBkaXNwbGF5OiBcIiVcIiwgYWN0aW9uOiBBY3Rpb24ucGVyY2VudCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnJSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDt1wiLCBhY3Rpb246IEFjdGlvbi5kaXZpc2lvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLyd9LFxuICAgIF0sXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI3XCIsIGFjdGlvbjogQWN0aW9uLnNldmVuLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc3J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjhcIiwgYWN0aW9uOiBBY3Rpb24uZWlnaHQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzgnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOVwiLCBhY3Rpb246IEFjdGlvbi5uaW5lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc5J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsOXXCIsIGFjdGlvbjogQWN0aW9uLm11bHRpcGxpY2F0aW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcqJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjRcIiwgYWN0aW9uOiBBY3Rpb24uZm91ciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI1XCIsIGFjdGlvbjogQWN0aW9uLmZpdmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzUnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNlwiLCBhY3Rpb246IEFjdGlvbi5zaXgsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzYnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiLVwiLCBhY3Rpb246IEFjdGlvbi5taW51cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLSd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIxXCIsIGFjdGlvbjogQWN0aW9uLm9uZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIyXCIsIGFjdGlvbjogQWN0aW9uLnR3bywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMid9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIzXCIsIGFjdGlvbjogQWN0aW9uLnRocmVlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICczJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIitcIiwgYWN0aW9uOiBBY3Rpb24ucGx1cywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKyd9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwXCIsIGFjdGlvbjogQWN0aW9uLnplcm8sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzAnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMDBcIiwgYWN0aW9uOiBBY3Rpb24uZG91YmxlWmVybywga2V5RG93bjogZSA9PiBlLmtleUNvZGUgPT0gNDggJiYgZS5zaGlmdEtleX0sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIi5cIiwgYWN0aW9uOiBBY3Rpb24uZGVjaW1hbCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnLid9LFxuICAgICAge3N0eWxlOiBcIndhcm5pbmdcIiwgZGlzcGxheTogXCI9XCIsIGFjdGlvbjogQWN0aW9uLmVudGVyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc9JyB8fCBlLmtleSA9PSAnRW50ZXInfSxcbiAgICBdXG4gIF0sXG4gIGNsb3NlT25FbnRlckFjdGlvbjogdHJ1ZSxcbiAgYnV0dG9uV2lkdGg6IDQ4LFxuICBidXR0b25IZWlnaHQ6IDMyLFxuICBidXR0b25NYXJnaW46IDMsXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGV4Y2x1c2lvbkdyb3VwOiB1bmRlZmluZWQsXG4gIHNob3VsZE9wZW46ICgpID0+IHRydWUsXG4gIHpJbmRleDogMVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uU2l6ZSA9IDMwO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuXG4gICAgdGhpcy53cmFwcGVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGFkanVzdFBvc2l0aW9uKCl7XG4gICAgaWYodGhpcy53cmFwcGVyUmVmLmN1cnJlbnQpe1xuICAgICAgY29uc3Qgd2luZG93UmVjdCA9IFJlY3QuY3JlYXRlV2l0aFdpbmRvdygpXG4gICAgICBjb25zdCBidXR0b25SZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnByb3BzLmJ1dHRvbik7XG4gICAgICBjb25zdCBjYWxjUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy53cmFwcGVyUmVmLmN1cnJlbnQsIHRoaXMuc3RhdGUueCwgdGhpcy5zdGF0ZS55KTtcbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgY29uc3Qgc3RyRGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgaWYoc3RyRGlzcGxheSAhPT0gJzAnICYmIHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogc3RyRGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQodmFsdWUsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIHZhbHVlOiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IG5ld0Rpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYobmV3RGlzcGxheSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICBuZXdEaXNwbGF5ID0gbmV3RGlzcGxheS5zdWJzdHIoMCwgbmV3RGlzcGxheS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhbmV3RGlzcGxheSA/IDAgOiBuZXdEaXNwbGF5O1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUudmFsdWUpXG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0Nsb3NlKClcbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXM7XG4gICAgYnRuUHJvcHMuYWN0aW9uKHRoaXMsIGJ0blByb3BzLCBldmVudClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH1cbiAgICBpZih0aGlzLnByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0eWxlWyd6SW5kZXgnXSA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMud3JhcHBlclJlZn0gY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvclwiIHN0eWxlPXtzdHlsZX0gb25DbGljaz17ZSA9PiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci10aXRsZVwiIHN0eWxlPXt7d2lkdGg6ICgodGhpcy5wcm9wcy5idXR0b25XaWR0aCAqIDQpICsgKHRoaXMucHJvcHMuYnV0dG9uTWFyZ2luICogNikpIC0gdGhpcy5jbG9zZUJ1dHRvblNpemV9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCJcbiAgICAgICAgICAgICAgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZSgpfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIiBzdHlsZT17e21hcmdpbjogdGhpcy5wcm9wcy5idXR0b25NYXJnaW59fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19XG4gICAgICAgICAgICAgICAgICAgIHByZXZCdXR0b249e2J0bktleSA+IDAgPyByb3dbYnRuS2V5IC0gMV0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvd0tleSArICctJyArIGJ0bktleX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidG4uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnRuLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBzcGFuPXtidG4uc3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17YnRuLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrQnV0dG9uKGJ0biwgZSl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJ1dHRvblN0eWxlKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5tYXJnaW4pe1xuICAgICAgc3R5bGUubWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW47XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5zcGFuKXtcbiAgICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4uaGVpZ2h0ID49IDIpe1xuICAgICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnNwYW4uaGVpZ2h0IC0gMSkgKiAyKVxuICAgICAgICBzdHlsZS5oZWlnaHQgPSAoc3R5bGUuaGVpZ2h0ICogdGhpcy5wcm9wcy5zcGFuLmhlaWdodCkgKyB0b3RhbE1hcmdpblxuICAgICAgICBzdHlsZS50b3AgPSAtKCh0aGlzLnByb3BzLmhlaWdodCAqICh0aGlzLnByb3BzLnNwYW4uaGVpZ2h0IC0gMSkpICsgdG90YWxNYXJnaW4pXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMucHJvcHMuc3Bhbi53aWR0aCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLndpZHRoIC0gMSkgKiAyKVxuICAgICAgICBzdHlsZS53aWR0aCA9IChzdHlsZS53aWR0aCAqIHRoaXMucHJvcHMuc3Bhbi53aWR0aCkgKyB0b3RhbE1hcmdpblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMucHJldkJ1dHRvbiAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3BhbiAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCA+PSAyKXtcbiAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoICogMikgKyAxKVxuICAgICAgc3R5bGUubWFyZ2luTGVmdCA9ICh0aGlzLnByb3BzLndpZHRoICogdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImVsZW1lbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvblwiLFxuICAgICAgICAgIHRoaXMucHJvcHMuc3R5bGUgPyBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zdHlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17dGhpcy5nZXRCdXR0b25TdHlsZSgpfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdERPTVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9