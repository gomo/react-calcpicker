(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("class-names"), require("numeral/locales"), require("react-portal"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "class-names", "numeral/locales", "react-portal", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("class-names"), require("numeral/locales"), require("react-portal"), require("prop-types"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["classNames"], root["locales"], root["Portal"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
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

var _reactPortal = __webpack_require__(11);

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Rect = __webpack_require__(1);

var _Rect2 = _interopRequireDefault(_Rect);

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
    return _this;
  }

  _createClass(CalcPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.locale != nextProps.locale) {
        _numeral2.default.locale(nextProps.locale);
      }

      if (this.props.initialValue != nextProps.initialValue) {
        this.setState({ 'value': nextProps.initialValue });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.openCalculator !== prevState.openCalculator) {
        if (this.state.openCalculator === true) {
          _Global2.default.currentCalclator = this.refs.calculator;
        }
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.openCalculator !== nextState.openCalculator) {
        if (nextState.openCalculator !== true && _Global2.default.currentCalclator === this.refs.calculator) {
          _Global2.default.currentCalclator = undefined;
        }
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
  }
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
    return _this;
  }

  _createClass(Calculator, [{
    key: 'adjustPosition',
    value: function adjustPosition() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOTQxNGM2YmZlYmVlN2E4OTc1MiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUG9ydGFsXCIsXCJjb21tb25qczJcIjpcInJlYWN0LXBvcnRhbFwiLFwiY29tbW9uanNcIjpcInJlYWN0LXBvcnRhbFwiLFwiYW1kXCI6XCJyZWFjdC1wb3J0YWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9Il0sIm5hbWVzIjpbIlJlY3QiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImNlbnRlciIsIngiLCJ5Iiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlY3QiLCJyZXN1bHQiLCJyaWdodCIsImJvdHRvbSIsIm9yaWdpbkJvdHRvbSIsIm9yaWdpblJpZ2h0IiwicG9zaXRpb24iLCJSSUdIVF9CT1RUT00iLCJjbG9uZSIsInRyYW5zZm9ybSIsIkxFRlRfQk9UVE9NIiwiTEVGVF9UT1AiLCJSSUdIVF9UT1AiLCJXSU5ET1dfQ0VOVEVSIiwiZXhwZWN0ZWRSZWN0IiwiZ2V0Q2VudGVyUmVjdCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJjcmVhdGVXaXRoRWxlbWVudCIsImVsZW0iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNyZWF0ZVdpdGhXaW5kb3ciLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJHbG9iYWwiLCJfY3VycmVudENhbGNsYXRvciIsImciLCJBY3Rpb24iLCJvbmUiLCJjYWxjIiwiYnRuUHJvcHMiLCJldmVudCIsImlucHV0VG9EaXNwbGF5IiwidHdvIiwidGhyZWUiLCJmb3VyIiwiZml2ZSIsInNpeCIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwiemVybyIsImRvdWJsZVplcm8iLCJkZWNpbWFsIiwiaW5wdXREZWNpbWFsIiwicGVyY2VudCIsImlucHV0UGVyY2VudCIsInBsdXMiLCJpbnB1dE9wZXJhdG9yIiwibWludXMiLCJtdWx0aXBsaWNhdGlvbiIsImRpdmlzaW9uIiwiZW50ZXIiLCJleGVjdXRlIiwiZml4IiwicHJvcHMiLCJjbG9zZU9uRW50ZXJBY3Rpb24iLCJjbG9zZSIsImFsbENsZWFyIiwiY2xlYXIiLCJiYWNrc3BhY2UiLCJkZWxldGUiLCJDYWxjUGlja2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJsb2NhbGUiLCJzdGF0ZSIsIm9wZW5DYWxjdWxhdG9yIiwiaW5pdGlhbFZhbHVlIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsIm5leHRTdGF0ZSIsInVuZGVmaW5lZCIsInNob3VsZE9wZW4iLCJleGNsdXNpb25Hcm91cCIsImFscmVhZHlPcGVuZCIsInBpY2tlciIsInB1c2giLCJvbkNoYW5nZSIsIndyYXBwZXJDbGFzcyIsImNsYXNzTmFtZSIsImJ1dHRvbkNsYXNzIiwib25DbGlja1BpY2tlciIsImZvcm1hdCIsImNsb3NlT25PdXRzaWRlQ2xpY2siLCJvbkNsb3NlUG9ydGFsIiwidGl0bGUiLCJidXR0b24iLCJwb3NpdGlvbnMiLCJjaGFuZ2VWYWx1ZSIsImNsb3NlQnV0dG9uIiwiekluZGV4IiwiYnV0dG9uV2lkdGgiLCJidXR0b25IZWlnaHQiLCJidXR0b25NYXJnaW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJhcnJheU9mIiwib25lT2YiLCJzaGFwZSIsInN0eWxlIiwiZGlzcGxheSIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInJlcXVpcmUiLCJzcGFuIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJrZXkiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJDYWxjdWxhdG9yIiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsImNsb3NlQnV0dG9uU2l6ZSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJzdHJEaXNwbGF5IiwidG9TdHJpbmciLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwibmV3RGlzcGxheSIsInN1YnN0ciIsIm9uQ2FsY3VsYXRlZCIsIm9uQ2xpY2tDbG9zZSIsImxvY2FsZURhdGEiLCJtYXJnaW4iLCJtYXAiLCJyb3dLZXkiLCJidG5LZXkiLCJjb21wb25lbnQiLCJvbkNsaWNrQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsInRvdGFsTWFyZ2luIiwicHJldkJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJnZXRCdXR0b25TdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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SixPQUFMLENBQWF6RyxDQUFiLENBQUw7QUFBQTtBQVJYO0FBVUcsYUFBS1QsS0FBTCxDQUFXNEQ7QUFWZCxPQURGO0FBY0Q7Ozs7RUEzRGlDLGdCQUFNUixTOztrQkFBckI2RCxNOzs7Ozs7QUNIckIsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJyZWFjdC1wb3J0YWxcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM5NDE0YzZiZmViZWU3YTg5NzUyIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RcbntcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCB0cmFuc2Zvcm1YID0gMCwgdHJhbnNmb3JtWSA9IDApIHtcbiAgICB0aGlzLnRvcCA9IHRvcFxuICAgIHRoaXMubGVmdCA9IGxlZnRcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRyYW5zZm9ybVhcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0cmFuc2Zvcm1ZXG4gIH1cblxuICBnZXQgYm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBvcmlnaW5Ub3AoKXtcbiAgICByZXR1cm4gdGhpcy50b3AgLSB0aGlzLnRyYW5zZm9ybVk7XG4gIH1cblxuICBnZXQgb3JpZ2luTGVmdCgpe1xuICAgIHJldHVybiB0aGlzLmxlZnQgLSB0aGlzLnRyYW5zZm9ybVg7XG4gIH1cblxuICBnZXQgb3JpZ2luQm90dG9tKCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luVG9wICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXQgb3JpZ2luUmlnaHQoKXtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW5MZWZ0ICsgdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCBhcmVhKCl7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldENlbnRlclJlY3Qod2lkdGgsIGhlaWdodCl7XG4gICAgY29uc3QgY2VudGVyID0ge1xuICAgICAgeDogdGhpcy5sZWZ0ICsgKHRoaXMud2lkdGggLyAyKSxcbiAgICAgIHk6IHRoaXMudG9wICsgKHRoaXMuaGVpZ2h0IC8gMiksXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxuICAgICAgY2VudGVyLnkgLSAoaGVpZ2h0IC8gMiksXG4gICAgICBjZW50ZXIueCAtICh3aWR0aCAvIDIpLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApXG4gIH1cblxuICBjbG9uZSgpe1xuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIHRoaXMudG9wLFxuICAgICAgdGhpcy5sZWZ0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy50cmFuc2Zvcm1YLFxuICAgICAgdGhpcy50cmFuc2Zvcm1ZXG4gICAgKVxuICB9XG5cbiAgdHJhbnNmb3JtKHgsIHkpe1xuICAgIHRoaXMudG9wID0gdGhpcy5vcmlnaW5Ub3AgKyB5O1xuICAgIHRoaXMubGVmdCA9IHRoaXMub3JpZ2luTGVmdCArIHg7XG4gICAgdGhpcy50cmFuc2Zvcm1YID0geDtcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGFpbnMocmVjdCl7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5sZWZ0IDw9IHJlY3QubGVmdFxuICAgICAgJiZcbiAgICAgIHRoaXMucmlnaHQgPj0gcmVjdC5yaWdodFxuICAgICAgJiZcbiAgICAgIHRoaXMudG9wIDw9IHJlY3QudG9wXG4gICAgICAmJlxuICAgICAgdGhpcy5ib3R0b20gPj0gcmVjdC5ib3R0b207XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZHVtcCgpe1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgb3JpZ2luVG9wOiB0aGlzLm9yaWdpblRvcCxcbiAgICAgIG9yaWdpbkxlZnQ6IHRoaXMub3JpZ2luTGVmdCxcbiAgICAgIG9yaWdpbkJvdHRvbTogdGhpcy5vcmlnaW5Cb3R0b20sXG4gICAgICBvcmlnaW5SaWdodDogdGhpcy5vcmlnaW5SaWdodCxcbiAgICAgIHRyYW5zZm9ybVg6IHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRyYW5zZm9ybVk6IHRoaXMudHJhbnNmb3JtWSxcbiAgICB9XG4gIH1cblxuICBnZXRSZWxhdGl2ZVJlY3QocmVjdCwgcG9zaXRpb24pe1xuICAgIHN3aXRjaChwb3NpdGlvbil7XG4gICAgICBjYXNlIFJlY3QuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy5ib3R0b20gLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuTEVGVF9CT1RUT006XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMucmlnaHQgLSByZWN0Lm9yaWdpblJpZ2h0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIHRoaXMubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICB0aGlzLnRvcCAtIHJlY3Qub3JpZ2luQm90dG9tXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5XSU5ET1dfQ0VOVEVSOlxuICAgICAgICBjb25zdCBleHBlY3RlZFJlY3QgPSB0aGlzLmdldENlbnRlclJlY3QocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpXG4gICAgICAgIHJldHVybiByZWN0LmNsb25lKCkudHJhbnNmb3JtKFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIGV4cGVjdGVkUmVjdC50b3AgLSByZWN0Lm9yaWdpblRvcFxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSWxsZWdhbCBwb3NpdGlvbktleSBgJyArIHBvc2l0aW9uICsgJ2AgaXMgc3BlY2lmaWVkJztcbiAgICB9XG4gIH1cblxuICBnZXRPdmVybGFwcGluZ1JlY3QocmVjdCl7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgodGhpcy50b3AsIHJlY3QudG9wKVxuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCh0aGlzLmxlZnQsIHJlY3QubGVmdClcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKHRoaXMucmlnaHQsIHJlY3QucmlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHRoaXMuYm90dG9tLCByZWN0LmJvdHRvbSk7XG5cbiAgICB2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICBpZiAod2lkdGggPiAwICYmIGhlaWdodCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cblJlY3QuY3JlYXRlV2l0aEVsZW1lbnQgPSAoZWxlbSwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSA9PiB7XG4gIGlmKCFlbGVtKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoMCwwLDAsMClcbiAgfVxuICBjb25zdCBib3VuZGluZ1JlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gIHJldHVybiBuZXcgUmVjdChcbiAgICBib3VuZGluZ1JlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgIGJvdW5kaW5nUmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgYm91bmRpbmdSZWN0LndpZHRoLFxuICAgIGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgdHJhbnNmb3JtWCxcbiAgICB0cmFuc2Zvcm1ZXG4gIClcbn1cblxuUmVjdC5jcmVhdGVXaXRoV2luZG93ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICApXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnUklHSFRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJSSUdIVF9UT1BcIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnTEVGVF9UT1AnLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIkxFRlRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfQk9UVE9NXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfQk9UVE9NJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdXSU5ET1dfQ0VOVEVSJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJXSU5ET1dfQ0VOVEVSXCJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvUmVjdC5qcyIsImNsYXNzIEdsb2JhbFxue1xuICBnZXQgY3VycmVudENhbGNsYXRvcigpe1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2FsY2xhdG9yXG4gIH1cblxuICBzZXQgY3VycmVudENhbGNsYXRvcih2YWx1ZSl7XG4gICAgdGhpcy5fY3VycmVudENhbGNsYXRvciA9IHZhbHVlXG4gIH1cbn1cblxuY29uc3QgZyA9IG5ldyBHbG9iYWwoKVxuZXhwb3J0IGRlZmF1bHQgZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzcy1uYW1lc1wiLFwiY29tbW9uanNcIjpcImNsYXNzLW5hbWVzXCIsXCJhbWRcIjpcImNsYXNzLW5hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnXG5cbmNvbnN0IEFjdGlvbiA9ICB7XG4gIG9uZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcxJylcbiAgfSxcbiAgdHdvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzInKVxuICB9LFxuICB0aHJlZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCczJylcbiAgfSxcbiAgZm91cjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc0JylcbiAgfSxcbiAgZml2ZTogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc1JylcbiAgfSxcbiAgc2l4OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzYnKVxuICB9LFxuICBzZXZlbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc3JylcbiAgfSxcbiAgZWlnaHQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOCcpXG4gIH0sXG4gIG5pbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnOScpXG4gIH0sXG4gIHplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMCcpXG4gIH0sXG4gIGRvdWJsZVplcm86IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMDAnKVxuICB9LFxuICBkZWNpbWFsOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXREZWNpbWFsKClcbiAgfSxcbiAgcGVyY2VudDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0UGVyY2VudChidG5Qcm9wcylcbiAgfSxcbiAgcGx1czogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJysnLCBidG5Qcm9wcylcbiAgfSxcbiAgbWludXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCctJywgYnRuUHJvcHMpXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignKicsIGJ0blByb3BzKVxuICB9LFxuICBkaXZpc2lvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJy8nLCBidG5Qcm9wcylcbiAgfSxcbiAgZW50ZXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5leGVjdXRlKCgpID0+IHtcbiAgICAgIGNhbGMuZml4KClcbiAgICAgIGlmKGNhbGMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9uKXtcbiAgICAgICAgY2FsYy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgYWxsQ2xlYXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5hbGxDbGVhcigpXG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuY2xlYXIoKVxuICB9LFxuICBiYWNrc3BhY2U6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5kZWxldGUoKVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9BY3Rpb24uanMiLCJpbXBvcnQgQ2FsY1BpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsY1BpY2tlcic7XG5pbXBvcnQgUmVjdCBmcm9tICcuL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9jbGFzc2VzL0FjdGlvbidcblxuZXhwb3J0IHtDYWxjUGlja2VyLCBSZWN0LCBBY3Rpb259XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvcmVhY3QtY2FsY3BpY2tlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgJ251bWVyYWwvbG9jYWxlcydcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4vQ2FsY3VsYXRvcidcbmltcG9ydCBQb3J0YWwgZnJvbSAncmVhY3QtcG9ydGFsJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL2NsYXNzZXMvUmVjdCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9BY3Rpb24nXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYoR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3Ipe1xuICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLnByb3BzLmJ1dHRvbnMuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goYnRuID0+IHtcbiAgICAgIGlmKGJ0bi5rZXlEb3duICYmIGJ0bi5rZXlEb3duKGUpKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJ0bi5hY3Rpb24oR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IsIGJ0biwgZSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY1BpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBudW1lcmFsLmxvY2FsZShwcm9wcy5sb2NhbGUpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5DYWxjdWxhdG9yOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgaWYodGhpcy5wcm9wcy5sb2NhbGUgIT0gbmV4dFByb3BzLmxvY2FsZSl7XG4gICAgICBudW1lcmFsLmxvY2FsZShuZXh0UHJvcHMubG9jYWxlKVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlICE9IG5leHRQcm9wcy5pbml0aWFsVmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7J3ZhbHVlJzogbmV4dFByb3BzLmluaXRpYWxWYWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSBwcmV2U3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PT0gdHJ1ZSl7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdGhpcy5yZWZzLmNhbGN1bGF0b3JcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSBuZXh0U3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgaWYobmV4dFN0YXRlLm9wZW5DYWxjdWxhdG9yICE9PSB0cnVlICYmIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID09PSB0aGlzLnJlZnMuY2FsY3VsYXRvcil7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1BpY2tlcihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYodGhpcy5wcm9wcy5zaG91bGRPcGVuKCkgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXApe1xuICAgICAgbGV0IGFscmVhZHlPcGVuZCA9IGZhbHNlXG4gICAgICB0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwLmZvckVhY2gocGlja2VyID0+IHtcbiAgICAgICAgaWYocGlja2VyID09PSB0aGlzKSBhbHJlYWR5T3BlbmQgPSB0cnVlXG4gICAgICAgIGlmKHBpY2tlci5zdGF0ZS5vcGVuQ2FsY3VsYXRvcil7XG4gICAgICAgICAgcGlja2VyLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZighYWxyZWFkeU9wZW5kKXtcbiAgICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5wdXNoKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbG9zZVBvcnRhbCgpe1xuICAgIC8vU2V0IHRoZSBvcGVuQ2FsY3VsYXRvciB0byBmYWxzZSB3aGVuIGNsaWNraW5nIHRoZSBvdmVybGF5IG9yIGNsb3Npbmcgd2l0aCB0aGUgRVNDIGtleS5cbiAgICBpZih0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yID09IHRydWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpe1xuICAgIGlmKHRoaXMuc3RhdGUudmFsdWUgIT0gdmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyZWFjdC1jYWxjcGlja2VyJywgdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3MpfT5cbiAgICAgICAgPGJ1dHRvbiByZWY9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuYnV0dG9uQ2xhc3MpfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vbkNsaWNrUGlja2VyKGUpfT5cbiAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLnZhbHVlKS5mb3JtYXQodGhpcy5wcm9wcy5mb3JtYXQpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPFBvcnRhbCBjbG9zZU9uRXNjIGNsb3NlT25PdXRzaWRlQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VPbk91dHNpZGVDbGlja30gaXNPcGVuZWQ9e3RoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3J9IG9uQ2xvc2U9eygpID0+IHRoaXMub25DbG9zZVBvcnRhbCgpfT5cbiAgICAgICAgICA8Q2FsY3VsYXRvclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICByZWY9J2NhbGN1bGF0b3InXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pfVxuICAgICAgICAgICAgYnV0dG9uPXt0aGlzLnJlZnMuYnV0dG9ufVxuICAgICAgICAgICAgcG9zaXRpb25zPXt0aGlzLnByb3BzLnBvc2l0aW9uc31cbiAgICAgICAgICAgIGJ1dHRvbnM9e3RoaXMucHJvcHMuYnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2FsY3VsYXRlZD17dmFsdWUgPT4gdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSl9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgIGNsb3NlT25FbnRlckFjdGlvbj17dGhpcy5wcm9wcy5jbG9zZU9uRW50ZXJBY3Rpb259XG4gICAgICAgICAgICB6SW5kZXg9e3RoaXMucHJvcHMuekluZGV4fVxuICAgICAgICAgICAgYnV0dG9uV2lkdGg9e3RoaXMucHJvcHMuYnV0dG9uV2lkdGh9XG4gICAgICAgICAgICBidXR0b25IZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgYnV0dG9uTWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQ2FsY1BpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3NpdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZihbXG4gICAgUmVjdC5SSUdIVF9CT1RUT00sXG4gICAgUmVjdC5MRUZUX0JPVFRPTSxcbiAgICBSZWN0LlJJR0hUX1RPUCxcbiAgICBSZWN0LkxFRlRfVE9QLFxuICAgIFJlY3QuV0lORE9XX0NFTlRFUixcbiAgXSkpLFxuICBidXR0b25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnbGlnaHQnLCAnZGFyaycsICd3YXJuaW5nJ10pLFxuICAgICAgICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIF0pLnJlcXVpcmUsXG4gICAgICAgIHNwYW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICAgIH0pLFxuICAgICAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleURvd246IFByb3BUeXBlcy5mdW5jXG4gICAgICB9KVxuICAgIClcbiAgKSxcbiAgYnV0dG9uV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uTWFyZ2luOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaW9uR3JvdXA6IFByb3BUeXBlcy5hcnJheSxcbiAgc2hvdWxkT3BlbjogUHJvcFR5cGVzLmZ1bmNcbn1cblxuQ2FsY1BpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxWYWx1ZTogMCxcbiAgZm9ybWF0OiBcIjAsMFsuXTAwXCIsXG4gIHBvc2l0aW9uczogW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0sXG4gIGNsb3NlQnV0dG9uOiAnw5cnLFxuICBidXR0b25zOiBbXG4gICAgW1xuICAgICAge3N0eWxlOiBcImRhcmtcIiwgZGlzcGxheTogXCJBQ1wiLCBhY3Rpb246IEFjdGlvbi5hbGxDbGVhciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQ2xlYXInfSxcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwi4oaQXCIsIGFjdGlvbjogQWN0aW9uLmJhY2tzcGFjZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnQmFja3NwYWNlJ30sXG4gICAgICB7c3R5bGU6IFwibGlnaHRcIiwgZGlzcGxheTogXCIlXCIsIGFjdGlvbjogQWN0aW9uLnBlcmNlbnQsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyUnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw7dcIiwgYWN0aW9uOiBBY3Rpb24uZGl2aXNpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy8nfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiN1wiLCBhY3Rpb246IEFjdGlvbi5zZXZlbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNyd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI4XCIsIGFjdGlvbjogQWN0aW9uLmVpZ2h0LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc4J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjlcIiwgYWN0aW9uOiBBY3Rpb24ubmluZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOSd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCLDl1wiLCBhY3Rpb246IEFjdGlvbi5tdWx0aXBsaWNhdGlvbiwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnKid9LFxuICAgIF0sW1xuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI0XCIsIGFjdGlvbjogQWN0aW9uLmZvdXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzQnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNVwiLCBhY3Rpb246IEFjdGlvbi5maXZlLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc1J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjZcIiwgYWN0aW9uOiBBY3Rpb24uc2l4LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc2J30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIi1cIiwgYWN0aW9uOiBBY3Rpb24ubWludXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy0nfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMVwiLCBhY3Rpb246IEFjdGlvbi5vbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzEnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMlwiLCBhY3Rpb246IEFjdGlvbi50d28sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzInfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiM1wiLCBhY3Rpb246IEFjdGlvbi50aHJlZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMyd9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCIrXCIsIGFjdGlvbjogQWN0aW9uLnBsdXMsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJysnfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiMFwiLCBhY3Rpb246IEFjdGlvbi56ZXJvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcwJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjAwXCIsIGFjdGlvbjogQWN0aW9uLmRvdWJsZVplcm8sIGtleURvd246IGUgPT4gZS5rZXlDb2RlID09IDQ4ICYmIGUuc2hpZnRLZXl9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIuXCIsIGFjdGlvbjogQWN0aW9uLmRlY2ltYWwsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJy4nfSxcbiAgICAgIHtzdHlsZTogXCJ3YXJuaW5nXCIsIGRpc3BsYXk6IFwiPVwiLCBhY3Rpb246IEFjdGlvbi5lbnRlciwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnPScgfHwgZS5rZXkgPT0gJ0VudGVyJ30sXG4gICAgXVxuICBdLFxuICBjbG9zZU9uRW50ZXJBY3Rpb246IHRydWUsXG4gIGJ1dHRvbldpZHRoOiA0OCxcbiAgYnV0dG9uSGVpZ2h0OiAzMixcbiAgYnV0dG9uTWFyZ2luOiAzLFxuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiB0cnVlLFxuICBleGNsdXNpb25Hcm91cDogdW5kZWZpbmVkLFxuICBzaG91bGRPcGVuOiAoKSA9PiB0cnVlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjUGlja2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJsb2NhbGVzXCIsXCJjb21tb25qczJcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiY29tbW9uanNcIjpcIm51bWVyYWwvbG9jYWxlc1wiLFwiYW1kXCI6XCJudW1lcmFsL2xvY2FsZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uL2NsYXNzZXMvR2xvYmFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkaXNwbGF5OiBwcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgIGZvcm1hdDogJzAsMFsuXTBbMDAwMDAwMDAwMDAwXScsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VCdXR0b25TaXplID0gMzA7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB0aGlzLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBhZGp1c3RQb3NpdGlvbigpe1xuICAgIGlmKHRoaXMucmVmcy5jYWxjdWxhdG9yKXtcbiAgICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhXaW5kb3coKVxuICAgICAgY29uc3QgYnV0dG9uUmVjdCA9IFJlY3QuY3JlYXRlV2l0aEVsZW1lbnQodGhpcy5wcm9wcy5idXR0b24pO1xuICAgICAgY29uc3QgY2FsY1JlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucmVmcy5jYWxjdWxhdG9yLCB0aGlzLnN0YXRlLngsIHRoaXMuc3RhdGUueSk7XG5cbiAgICAgIGNvbnN0IHJlY3RzID0gW11cbiAgICAgIGxldCBuZXdDYWxjUmVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zS2V5ID0gdGhpcy5wcm9wcy5wb3NpdGlvbnNbaV1cbiAgICAgICAgbGV0IHJlY3Q7XG4gICAgICAgIGlmKHBvc0tleSA9PSBSZWN0LldJTkRPV19DRU5URVIpe1xuICAgICAgICAgIHJlY3QgPSB3aW5kb3dSZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY3QgPSBidXR0b25SZWN0LmdldFJlbGF0aXZlUmVjdChjYWxjUmVjdCwgcG9zS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdHMucHVzaChyZWN0KVxuICAgICAgICBpZih3aW5kb3dSZWN0LmNvbnRhaW5zKHJlY3QpKXtcbiAgICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIW5ld0NhbGNSZWN0KXtcbiAgICAgICAgcmVjdHMuc29ydCgoYSwgYikgPT4gd2luZG93UmVjdC5nZXRPdmVybGFwcGluZ1JlY3QoYikuYXJlYSAtIHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGEpLmFyZWEpXG4gICAgICAgIG5ld0NhbGNSZWN0ID0gcmVjdHNbMF1cbiAgICAgIH1cblxuICAgICAgaWYobmV3Q2FsY1JlY3Qpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB4OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1YLFxuICAgICAgICAgIHk6IG5ld0NhbGNSZWN0LnRyYW5zZm9ybVksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0VG9EaXNwbGF5KG51bWJlcil7XG4gICAgY29uc3Qgc3RyRGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheS50b1N0cmluZygpXG4gICAgaWYoc3RyRGlzcGxheSAhPT0gJzAnICYmIHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogc3RyRGlzcGxheSArIG51bWJlcixcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhcHBlbmRNb2RlOiB0cnVlLFxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGMobGVmdCwgb3BlcmF0b3IsIHJpZ2h0KXtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0ICsgcmlnaHQ7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICogKHJpZ2h0IC8gMTAwKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICBsZWZ0IC0gcmlnaHQ7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgaWYodGhpcy5zdGF0ZS51bml0LnZhbHVlID09ICclJyl7XG4gICAgICAgICAgcmlnaHQgPSByaWdodCAvIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodFxuICAgICAgY2FzZSAnKic6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93ICdJbnZhbGlkIG9wZXJhdG9yICcgKyBvcGVyYXRvciArICcgc3BlY2lmaWVkLic7XG4gICAgfVxuICB9XG5cbiAgZXhlY3V0ZShjYWxsYmFjayA9ICgpID0+IHt9KXtcbiAgICBsZXQgZGlzcGxheSA9IHRoaXMuc3RhdGUuZGlzcGxheTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGxldCBjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSl7XG4gICAgICBkaXNwbGF5ID0gdGhpcy5jYWxjKHBhcnNlRmxvYXQodmFsdWUsIDEwKSwgdGhpcy5zdGF0ZS5vcGVyYXRvci52YWx1ZSwgcGFyc2VGbG9hdChkaXNwbGF5LCAxMCkpO1xuICAgICAgY2FsY3VsYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBkaXNwbGF5O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICB1bml0OiB7fSxcbiAgICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxuXG4gIGlucHV0T3BlcmF0b3Iob3BlcmF0b3IsIGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5leGVjdXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVyYXRvcjoge1xuICAgICAgICAgIHZhbHVlOiBvcGVyYXRvcixcbiAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpbnB1dERlY2ltYWwoKXtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXkuaW5kZXhPZignLicpID09PSAtMSl7XG4gICAgICB0aGlzLmlucHV0VG9EaXNwbGF5KCcuJylcbiAgICB9XG4gIH1cblxuICBpbnB1dFBlcmNlbnQoYnRuUHJvcHMpe1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW5pdDoge1xuICAgICAgICB2YWx1ZTonJScsXG4gICAgICAgIGRpc3BsYXk6IGJ0blByb3BzLmRpc3BsYXlcbiAgICAgIH19KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5OiB0aGlzLnN0YXRlLmRpc3BsYXkgLyAxMDB9KVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICB1bml0OiB7fSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWxsQ2xlYXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc3BsYXk6ICcwJyxcbiAgICAgIHZhbHVlOiAnMCcsXG4gICAgICBvcGVyYXRvcjoge30sXG4gICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgIHVuaXQ6IHt9LFxuICAgIH0pXG4gIH1cblxuICBkZWxldGUoKXtcbiAgICBpZih0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7fVxuICAgICAgbGV0IG5ld0Rpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgICAgaWYobmV3RGlzcGxheSA9PT0gJzAnKXtcbiAgICAgICAgbmV3U3RhdGVbJ3VuaXQnXSA9IHt9XG4gICAgICB9XG4gICAgICBuZXdEaXNwbGF5ID0gbmV3RGlzcGxheS5zdWJzdHIoMCwgbmV3RGlzcGxheS5sZW5ndGggLSAxKTtcbiAgICAgIG5ld1N0YXRlWydkaXNwbGF5J10gPSAhbmV3RGlzcGxheSA/IDAgOiBuZXdEaXNwbGF5O1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuYWRqdXN0UG9zaXRpb24oKVxuICB9XG5cbiAgZml4KCl7XG4gICAgaWYodGhpcy5wcm9wcy5vbkNhbGN1bGF0ZWQpIHRoaXMucHJvcHMub25DYWxjdWxhdGVkKHRoaXMuc3RhdGUudmFsdWUpXG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMucHJvcHMub25DbGlja0Nsb3NlKClcbiAgfVxuXG4gIG9uQ2xpY2tCdXR0b24oYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXM7XG4gICAgYnRuUHJvcHMuYWN0aW9uKHRoaXMsIGJ0blByb3BzLCBldmVudClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGxvY2FsZSA9IG51bWVyYWwubG9jYWxlRGF0YSgpO1xuICAgIGNvbnN0IHN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RoaXMuc3RhdGUueH1weCwgJHt0aGlzLnN0YXRlLnl9cHgpYH1cbiAgICBpZih0aGlzLnByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHN0eWxlWyd6SW5kZXgnXSA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9XCJjYWxjdWxhdG9yXCIgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvclwiIHN0eWxlPXtzdHlsZX0gb25DbGljaz17ZSA9PiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlci10aXRsZVwiIHN0eWxlPXt7d2lkdGg6ICgodGhpcy5wcm9wcy5idXR0b25XaWR0aCAqIDQpICsgKHRoaXMucHJvcHMuYnV0dG9uTWFyZ2luICogNikpIC0gdGhpcy5jbG9zZUJ1dHRvblNpemV9fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLWNsb3NlXCJcbiAgICAgICAgICAgICAgZGlzcGxheT17dGhpcy5wcm9wcy5jbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZSgpfVxuICAgICAgICAgICAgICB3aWR0aD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5jbG9zZUJ1dHRvblNpemV9XG4gICAgICAgICAgICAgIG1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXlcIiBzdHlsZT17e21hcmdpbjogdGhpcy5wcm9wcy5idXR0b25NYXJnaW59fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItZGlzcGxheS1vcGVyYXRvclwiPnt0aGlzLnN0YXRlLm9wZXJhdG9yLmRpc3BsYXl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktbnVtYmVyXCI+XG4gICAgICAgICAgICB7bnVtZXJhbCh0aGlzLnN0YXRlLmRpc3BsYXkpLmZvcm1hdCh0aGlzLnN0YXRlLmZvcm1hdCl9e3RoaXMuc3RhdGUudW5pdC5kaXNwbGF5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoKHJvdywgcm93S2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyb3dLZXl9IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uc1wiPlxuICAgICAgICAgICAgICB7cm93Lm1hcCgoYnRuLCBidG5LZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsZW0gPT4gYnRuLmNvbXBvbmVudCA9IGVsZW19XG4gICAgICAgICAgICAgICAgICAgIHByZXZCdXR0b249e2J0bktleSA+IDAgPyByb3dbYnRuS2V5IC0gMV0gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvd0tleSArICctJyArIGJ0bktleX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidG4uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnRuLnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBzcGFuPXtidG4uc3Bhbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17YnRuLmRpc3BsYXl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrQnV0dG9uKGJ0biwgZSl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuYnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzcy1uYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJ1dHRvblN0eWxlKCl7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5tYXJnaW4pe1xuICAgICAgc3R5bGUubWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW47XG4gICAgfVxuXG4gICAgaWYodGhpcy5wcm9wcy5zcGFuKXtcbiAgICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4uaGVpZ2h0ID49IDIpe1xuICAgICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnNwYW4uaGVpZ2h0IC0gMSkgKiAyKVxuICAgICAgICBzdHlsZS5oZWlnaHQgPSAoc3R5bGUuaGVpZ2h0ICogdGhpcy5wcm9wcy5zcGFuLmhlaWdodCkgKyB0b3RhbE1hcmdpblxuICAgICAgICBzdHlsZS50b3AgPSAtKCh0aGlzLnByb3BzLmhlaWdodCAqICh0aGlzLnByb3BzLnNwYW4uaGVpZ2h0IC0gMSkpICsgdG90YWxNYXJnaW4pXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMucHJvcHMuc3Bhbi53aWR0aCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLndpZHRoIC0gMSkgKiAyKVxuICAgICAgICBzdHlsZS53aWR0aCA9IChzdHlsZS53aWR0aCAqIHRoaXMucHJvcHMuc3Bhbi53aWR0aCkgKyB0b3RhbE1hcmdpblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMucHJldkJ1dHRvbiAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3BhbiAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAmJiB0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCA+PSAyKXtcbiAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoICogMikgKyAxKVxuICAgICAgc3R5bGUubWFyZ2luTGVmdCA9ICh0aGlzLnByb3BzLndpZHRoICogdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImVsZW1lbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvblwiLFxuICAgICAgICAgIHRoaXMucHJvcHMuc3R5bGUgPyBcInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItYnV0dG9uLVwiICsgdGhpcy5wcm9wcy5zdHlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17dGhpcy5nZXRCdXR0b25TdHlsZSgpfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBvcnRhbFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1wb3J0YWxcIixcImNvbW1vbmpzXCI6XCJyZWFjdC1wb3J0YWxcIixcImFtZFwiOlwicmVhY3QtcG9ydGFsXCJ9XG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==