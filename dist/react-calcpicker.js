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
          _react2.default.createElement('div', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5OTUzYzYzNmE0ZjcwZWE5NDdlNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0RE9NXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIn0iXSwibmFtZXMiOlsiUmVjdCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybVgiLCJ0cmFuc2Zvcm1ZIiwiY2VudGVyIiwieCIsInkiLCJvcmlnaW5Ub3AiLCJvcmlnaW5MZWZ0IiwicmVjdCIsInJlc3VsdCIsInJpZ2h0IiwiYm90dG9tIiwib3JpZ2luQm90dG9tIiwib3JpZ2luUmlnaHQiLCJwb3NpdGlvbiIsIlJJR0hUX0JPVFRPTSIsImNsb25lIiwidHJhbnNmb3JtIiwiTEVGVF9CT1RUT00iLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIldJTkRPV19DRU5URVIiLCJleHBlY3RlZFJlY3QiLCJnZXRDZW50ZXJSZWN0IiwiTWF0aCIsIm1heCIsIm1pbiIsImNyZWF0ZVdpdGhFbGVtZW50IiwiZWxlbSIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHkiLCJkb2N1bWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwiY3JlYXRlV2l0aFdpbmRvdyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ2YWx1ZSIsIkdsb2JhbCIsIl9jdXJyZW50Q2FsY2xhdG9yIiwiZyIsIkFjdGlvbiIsIm9uZSIsImNhbGMiLCJidG5Qcm9wcyIsImV2ZW50IiwiaW5wdXRUb0Rpc3BsYXkiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4Iiwic2V2ZW4iLCJlaWdodCIsIm5pbmUiLCJ6ZXJvIiwiZG91YmxlWmVybyIsImRlY2ltYWwiLCJpbnB1dERlY2ltYWwiLCJwZXJjZW50IiwiaW5wdXRQZXJjZW50IiwicGx1cyIsImlucHV0T3BlcmF0b3IiLCJtaW51cyIsIm11bHRpcGxpY2F0aW9uIiwiZGl2aXNpb24iLCJlbnRlciIsImV4ZWN1dGUiLCJmaXgiLCJwcm9wcyIsImNsb3NlT25FbnRlckFjdGlvbiIsImNsb3NlIiwiYWxsQ2xlYXIiLCJjbGVhciIsImJhY2tzcGFjZSIsImRlbGV0ZSIsIkNhbGNQaWNrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRDYWxjbGF0b3IiLCJidXR0b25zIiwiZm9yRWFjaCIsInJvdyIsImJ0biIsImtleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsImxvY2FsZSIsInN0YXRlIiwib3BlbkNhbGN1bGF0b3IiLCJpbml0aWFsVmFsdWUiLCJjYWxjdWxhdG9yUmVmIiwiY3JlYXRlUmVmIiwiYnV0dG9uUmVmIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwic2hvdWxkT3BlbiIsImV4Y2x1c2lvbkdyb3VwIiwiYWxyZWFkeU9wZW5kIiwicGlja2VyIiwicHVzaCIsIm9uQ2hhbmdlIiwid3JhcHBlckNsYXNzIiwiY2xhc3NOYW1lIiwiYnV0dG9uQ2xhc3MiLCJvbkNsaWNrUGlja2VyIiwiZm9ybWF0IiwiY3JlYXRlUG9ydGFsIiwib25DbG9zZVBvcnRhbCIsInpJbmRleCIsInRpdGxlIiwicG9zaXRpb25zIiwiY2hhbmdlVmFsdWUiLCJjbG9zZUJ1dHRvbiIsImJ1dHRvbldpZHRoIiwiYnV0dG9uSGVpZ2h0IiwiYnV0dG9uTWFyZ2luIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9uZU9mIiwic2hhcGUiLCJzdHlsZSIsImRpc3BsYXkiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJyZXF1aXJlIiwic3BhbiIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImNsb3NlT25PdXRzaWRlQ2xpY2siLCJhcnJheSIsImRlZmF1bHRQcm9wcyIsImtleSIsImtleUNvZGUiLCJzaGlmdEtleSIsIkNhbGN1bGF0b3IiLCJhcHBlbmRNb2RlIiwib3BlcmF0b3IiLCJ1bml0IiwiY2xvc2VCdXR0b25TaXplIiwib25yZXNpemUiLCJhZGp1c3RQb3NpdGlvbiIsIndyYXBwZXJSZWYiLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImJ1dHRvbiIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJzdHJEaXNwbGF5IiwidG9TdHJpbmciLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwibmV3RGlzcGxheSIsInN1YnN0ciIsIm9uQ2FsY3VsYXRlZCIsIm9uQ2xpY2tDbG9zZSIsIm1hcmdpbiIsIm1hcCIsInJvd0tleSIsImJ0bktleSIsImNvbXBvbmVudCIsIm9uQ2xpY2tCdXR0b24iLCJCdXR0b24iLCJvbkNsaWNrIiwidG90YWxNYXJnaW4iLCJwcmV2QnV0dG9uIiwibWFyZ2luTGVmdCIsImdldEJ1dHRvblN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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WCxHQUFtQixLQUFLbUYsS0FBTCxDQUFXcUgsVUFBWCxDQUFzQnRELElBQXRCLENBQTJCbEosS0FBL0MsR0FBd0R1TSxhQUEzRTtBQUNEOztBQUVELGFBQU8xRCxLQUFQO0FBQ0Q7Ozs2QkFFTztBQUFBOztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsZUFBSSxTQUROO0FBRUUscUJBQVcsMEJBQ1QscUNBRFMsRUFFVCxLQUFLMUQsS0FBTCxDQUFXMEQsS0FBWCxHQUFtQix5Q0FBeUMsS0FBSzFELEtBQUwsQ0FBVzBELEtBQXZFLEdBQStFOUIsU0FGdEUsRUFHVCxLQUFLNUIsS0FBTCxDQUFXcUMsU0FIRixDQUZiO0FBT0UsaUJBQU8sS0FBS2tGLGNBQUwsRUFQVDtBQVFFLG1CQUFTO0FBQUEsbUJBQUssT0FBS0osT0FBTCxDQUFhMUcsQ0FBYixDQUFMO0FBQUE7QUFSWDtBQVVHLGFBQUtULEtBQUwsQ0FBVzJEO0FBVmQsT0FERjtBQWNEOzs7O0VBM0RpQyxnQkFBTVIsUzs7a0JBQXJCK0QsTTs7Ozs7O0FDSHJCLGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJyZWFjdC1jYWxjcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJudW1lcmFsXCIpLCByZXF1aXJlKFwiY2xhc3MtbmFtZXNcIiksIHJlcXVpcmUoXCJudW1lcmFsL2xvY2FsZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibnVtZXJhbFwiLCBcImNsYXNzLW5hbWVzXCIsIFwibnVtZXJhbC9sb2NhbGVzXCIsIFwicHJvcC10eXBlc1wiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdENhbGNQaWNrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wibnVtZXJhbFwiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJsb2NhbGVzXCJdLCByb290W1wiUHJvcFR5cGVzXCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5OTUzYzYzNmE0ZjcwZWE5NDdlNyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJjbGFzcyBHbG9iYWxcbntcbiAgZ2V0IGN1cnJlbnRDYWxjbGF0b3IoKXtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGNsYXRvclxuICB9XG5cbiAgc2V0IGN1cnJlbnRDYWxjbGF0b3IodmFsdWUpe1xuICAgIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3IgPSB2YWx1ZVxuICB9XG59XG5cbmNvbnN0IGcgPSBuZXcgR2xvYmFsKClcbmV4cG9ydCBkZWZhdWx0IGc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9HbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJ1xuXG5jb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3Ipe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLnByb3BzLmJ1dHRvbnMuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goYnRuID0+IHtcbiAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJ0bi5hY3Rpb24oR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IsIGJ0biwgZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0b3JSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuYnV0dG9uUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gcHJldlN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT09IHRydWUpe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXMuY2FsY3VsYXRvclJlZi5jdXJyZW50XG4gICAgICB9IGVsc2UgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPT09IHRoaXMuY2FsY3VsYXRvclJlZi5jdXJyZW50KSB7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5pbml0aWFsVmFsdWUgIT0gcHJldlByb3BzLmluaXRpYWxWYWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHsndmFsdWUnOiB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZX0pXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gcHJldlByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZSh0aGlzLnByb3BzLmxvY2FsZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIGlmKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID09PSB0aGlzLmNhbGN1bGF0b3JSZWYuY3VycmVudCkge1xuICAgICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrUGlja2VyKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0aGlzLnByb3BzLnNob3VsZE9wZW4oKSA9PT0gZmFsc2Upe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cCl7XG4gICAgICBsZXQgYWxyZWFkeU9wZW5kID0gZmFsc2VcbiAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAuZm9yRWFjaChwaWNrZXIgPT4ge1xuICAgICAgICBpZihwaWNrZXIgPT09IHRoaXMpIGFscmVhZHlPcGVuZCA9IHRydWVcbiAgICAgICAgaWYocGlja2VyLnN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgICAgICBwaWNrZXIuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmKCFhbHJlYWR5T3BlbmQpe1xuICAgICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLnB1c2godGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IHRydWV9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkNsb3NlUG9ydGFsKCl7XG4gICAgLy9TZXQgdGhlIG9wZW5DYWxjdWxhdG9yIHRvIGZhbHNlIHdoZW4gY2xpY2tpbmcgdGhlIG92ZXJsYXkgb3IgY2xvc2luZyB3aXRoIHRoZSBFU0Mga2V5LlxuICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT0gdHJ1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS52YWx1ZSAhPSB2YWx1ZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogdmFsdWV9KVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3JlYWN0LWNhbGNwaWNrZXInLCB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyl9PlxuICAgICAgICA8YnV0dG9uIHJlZj17dGhpcy5idXR0b25SZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5idXR0b25DbGFzcyl9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9uQ2xpY2tQaWNrZXIoZSl9PlxuICAgICAgICAgIHtudW1lcmFsKHRoaXMuc3RhdGUudmFsdWUpLmZvcm1hdCh0aGlzLnByb3BzLmZvcm1hdCl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAmJiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiB0aGlzLnByb3BzLnpJbmRleFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYWxjdWxhdG9yXG4gICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICByZWY9e3RoaXMuY2FsY3VsYXRvclJlZn1cbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pfVxuICAgICAgICAgICAgICBwb3NpdGlvbnM9e3RoaXMucHJvcHMucG9zaXRpb25zfVxuICAgICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgICAgIG9uQ2FsY3VsYXRlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9ufVxuICAgICAgICAgICAgICBjbG9zZU9uRW50ZXJBY3Rpb249e3RoaXMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9ufVxuICAgICAgICAgICAgICBidXR0b25XaWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgYnV0dG9uTWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgekluZGV4PXt0aGlzLnByb3BzLnpJbmRleCArIDF9XG4gICAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5idXR0b25SZWYuY3VycmVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgLCBkb2N1bWVudC5ib2R5KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIHNwYW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICAgIH0pLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleURvd246IFByb3BUeXBlcy5mdW5jXG4gICAgICB9KVxuICAgIClcbiAgKSxcbiAgYnV0dG9uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uTWFyZ2luOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaW9uR3JvdXA6IFByb3BUeXBlcy5hcnJheSxcbiAgc2hvdWxkT3BlbjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWUsXG4gIGJ1dHRvbldpZHRoOiA0OCxcbiAgYnV0dG9uSGVpZ2h0OiAzMixcbiAgYnV0dG9uTWFyZ2luOiAzLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICBleGNsdXNpb25Hcm91cDogdW5kZWZpbmVkLFxuICBzaG91bGRPcGVuOiAoKSA9PiB0cnVlLFxuICB6SW5kZXg6IDFcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi4vY2xhc3Nlcy9HbG9iYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGN1bGF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRpc3BsYXk6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgZm9ybWF0OiAnMCwwWy5dMFswMDAwMDAwMDAwMDBdJyxcbiAgICAgIG9wZXJhdG9yOiB7fSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUJ1dHRvblNpemUgPSAzMDtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuYWRqdXN0UG9zaXRpb24oKTtcblxuICAgIHRoaXMud3JhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMud3JhcHBlclJlZi5jdXJyZW50KXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMud3JhcHBlclJlZi5jdXJyZW50LCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG4gICAgICBjb25zdCByZWN0cyA9IFtdXG4gICAgICBsZXQgbmV3Q2FsY1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc0tleSA9IHRoaXMucHJvcHMucG9zaXRpb25zW2ldXG4gICAgICAgIGxldCByZWN0O1xuICAgICAgICBpZihwb3NLZXkgPT0gUmVjdC5XSU5ET1dfQ0VOVEVSKXtcbiAgICAgICAgICByZWN0ID0gd2luZG93UmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWN0ID0gYnV0dG9uUmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3RzLnB1c2gocmVjdClcbiAgICAgICAgaWYod2luZG93UmVjdC5jb250YWlucyhyZWN0KSl7XG4gICAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFuZXdDYWxjUmVjdCl7XG4gICAgICAgIHJlY3RzLnNvcnQoKGEsIGIpID0+IHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGIpLmFyZWEgLSB3aW5kb3dSZWN0LmdldE92ZXJsYXBwaW5nUmVjdChhKS5hcmVhKVxuICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3RzWzBdXG4gICAgICB9XG5cbiAgICAgIGlmKG5ld0NhbGNSZWN0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgeDogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWCxcbiAgICAgICAgICB5OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1ZLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dFRvRGlzcGxheShudW1iZXIpe1xuICAgIGNvbnN0IHN0ckRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgIGlmKHN0ckRpc3BsYXkgIT09ICcwJyAmJiB0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6IHN0ckRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBsZXQgY2FsY3VsYXRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgZGlzcGxheSA9IHRoaXMuY2FsYyhwYXJzZUZsb2F0KHZhbHVlLCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhbHVlID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICB2YWx1ZTogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCBuZXdEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKG5ld0Rpc3BsYXkgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgbmV3RGlzcGxheSA9IG5ld0Rpc3BsYXkuc3Vic3RyKDAsIG5ld0Rpc3BsYXkubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIW5ld0Rpc3BsYXkgPyAwIDogbmV3RGlzcGxheTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMucHJvcHMub25DYWxjdWxhdGVkKSB0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCh0aGlzLnN0YXRlLnZhbHVlKVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGJ0blByb3BzLCBldmVudCl7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzO1xuICAgIGJ0blByb3BzLmFjdGlvbih0aGlzLCBidG5Qcm9wcywgZXZlbnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLndyYXBwZXJSZWZ9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItdGl0bGVcIiBzdHlsZT17e3dpZHRoOiAoKHRoaXMucHJvcHMuYnV0dG9uV2lkdGggKiA0KSArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDYpKSAtIHRoaXMuY2xvc2VCdXR0b25TaXplfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCIgc3R5bGU9e3ttYXJnaW46IHRoaXMucHJvcHMuYnV0dG9uTWFyZ2lufX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfVxuICAgICAgICAgICAgICAgICAgICBwcmV2QnV0dG9uPXtidG5LZXkgPiAwID8gcm93W2J0bktleSAtIDFdIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0bi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbj17YnRuLnNwYW59XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2J0bi5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0J1dHRvbihidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RET01cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwifVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==