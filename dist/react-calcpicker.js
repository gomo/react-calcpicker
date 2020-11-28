(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("numeral"), require("class-names"), require("numeral/locales"), require("react-portal"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "numeral", "class-names", "numeral/locales", "react-portal", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalcPicker"] = factory(require("react"), require("numeral"), require("class-names"), require("numeral/locales"), require("react-portal"), require("prop-types"));
	else
		root["ReactCalcPicker"] = factory(root["React"], root["numeral"], root["classNames"], root["locales"], root["Portal"], root["PropTypes"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMTk1YTRiY2JmNjEwNDc0Y2JiNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibnVtZXJhbFwiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbFwiLFwiYW1kXCI6XCJudW1lcmFsXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzLW5hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3MtbmFtZXNcIixcImFtZFwiOlwiY2xhc3MtbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWFjdC1jYWxjcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NhbGNQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcImxvY2FsZXNcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJjb21tb25qc1wiOlwibnVtZXJhbC9sb2NhbGVzXCIsXCJhbWRcIjpcIm51bWVyYWwvbG9jYWxlc1wifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUG9ydGFsXCIsXCJjb21tb25qczJcIjpcInJlYWN0LXBvcnRhbFwiLFwiY29tbW9uanNcIjpcInJlYWN0LXBvcnRhbFwiLFwiYW1kXCI6XCJyZWFjdC1wb3J0YWxcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9Il0sIm5hbWVzIjpbIlJlY3QiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm1YIiwidHJhbnNmb3JtWSIsImNlbnRlciIsIngiLCJ5Iiwib3JpZ2luVG9wIiwib3JpZ2luTGVmdCIsInJlY3QiLCJyZXN1bHQiLCJyaWdodCIsImJvdHRvbSIsIm9yaWdpbkJvdHRvbSIsIm9yaWdpblJpZ2h0IiwicG9zaXRpb24iLCJSSUdIVF9CT1RUT00iLCJjbG9uZSIsInRyYW5zZm9ybSIsIkxFRlRfQk9UVE9NIiwiTEVGVF9UT1AiLCJSSUdIVF9UT1AiLCJXSU5ET1dfQ0VOVEVSIiwiZXhwZWN0ZWRSZWN0IiwiZ2V0Q2VudGVyUmVjdCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJjcmVhdGVXaXRoRWxlbWVudCIsImVsZW0iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJkb2NFbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsImNyZWF0ZVdpdGhXaW5kb3ciLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJHbG9iYWwiLCJfY3VycmVudENhbGNsYXRvciIsImciLCJBY3Rpb24iLCJvbmUiLCJjYWxjIiwiYnRuUHJvcHMiLCJldmVudCIsImlucHV0VG9EaXNwbGF5IiwidHdvIiwidGhyZWUiLCJmb3VyIiwiZml2ZSIsInNpeCIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwiemVybyIsImRvdWJsZVplcm8iLCJkZWNpbWFsIiwiaW5wdXREZWNpbWFsIiwicGVyY2VudCIsImlucHV0UGVyY2VudCIsInBsdXMiLCJpbnB1dE9wZXJhdG9yIiwibWludXMiLCJtdWx0aXBsaWNhdGlvbiIsImRpdmlzaW9uIiwiZW50ZXIiLCJleGVjdXRlIiwiZml4IiwicHJvcHMiLCJjbG9zZU9uRW50ZXJBY3Rpb24iLCJjbG9zZSIsImFsbENsZWFyIiwiY2xlYXIiLCJiYWNrc3BhY2UiLCJkZWxldGUiLCJDYWxjUGlja2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50Q2FsY2xhdG9yIiwiYnV0dG9ucyIsImZvckVhY2giLCJyb3ciLCJidG4iLCJrZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJsb2NhbGUiLCJzdGF0ZSIsIm9wZW5DYWxjdWxhdG9yIiwiaW5pdGlhbFZhbHVlIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJyZWZzIiwiY2FsY3VsYXRvciIsIm5leHRTdGF0ZSIsInVuZGVmaW5lZCIsInNob3VsZE9wZW4iLCJleGNsdXNpb25Hcm91cCIsImFscmVhZHlPcGVuZCIsInBpY2tlciIsInB1c2giLCJvbkNoYW5nZSIsIndyYXBwZXJDbGFzcyIsImNsYXNzTmFtZSIsImJ1dHRvbkNsYXNzIiwib25DbGlja1BpY2tlciIsImZvcm1hdCIsImNsb3NlT25PdXRzaWRlQ2xpY2siLCJvbkNsb3NlUG9ydGFsIiwidGl0bGUiLCJidXR0b24iLCJwb3NpdGlvbnMiLCJjaGFuZ2VWYWx1ZSIsImNsb3NlQnV0dG9uIiwiekluZGV4IiwiYnV0dG9uV2lkdGgiLCJidXR0b25IZWlnaHQiLCJidXR0b25NYXJnaW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJhcnJheU9mIiwib25lT2YiLCJzaGFwZSIsInN0eWxlIiwiZGlzcGxheSIsIm9uZU9mVHlwZSIsIm9iamVjdCIsInJlcXVpcmUiLCJzcGFuIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJrZXkiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJDYWxjdWxhdG9yIiwiYXBwZW5kTW9kZSIsIm9wZXJhdG9yIiwidW5pdCIsImNsb3NlQnV0dG9uU2l6ZSIsIm9ucmVzaXplIiwiYWRqdXN0UG9zaXRpb24iLCJ3aW5kb3dSZWN0IiwiYnV0dG9uUmVjdCIsImNhbGNSZWN0IiwicmVjdHMiLCJuZXdDYWxjUmVjdCIsImkiLCJsZW5ndGgiLCJwb3NLZXkiLCJnZXRSZWxhdGl2ZVJlY3QiLCJjb250YWlucyIsInNvcnQiLCJhIiwiYiIsImdldE92ZXJsYXBwaW5nUmVjdCIsImFyZWEiLCJzdHJEaXNwbGF5IiwidG9TdHJpbmciLCJjYWxsYmFjayIsImNhbGN1bGF0ZWQiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwibmV3RGlzcGxheSIsInN1YnN0ciIsIm9uQ2FsY3VsYXRlZCIsIm9uQ2xpY2tDbG9zZSIsImxvY2FsZURhdGEiLCJtYXJnaW4iLCJtYXAiLCJyb3dLZXkiLCJidG5LZXkiLCJjb21wb25lbnQiLCJvbkNsaWNrQnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsInRvdGFsTWFyZ2luIiwicHJldkJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJnZXRCdXR0b25TdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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SixPQUFMLENBQWF6RyxDQUFiLENBQUw7QUFBQTtBQVJYO0FBVUcsYUFBS1QsS0FBTCxDQUFXNEQ7QUFWZCxPQURGO0FBY0Q7Ozs7RUEzRGlDLGdCQUFNUixTOztrQkFBckI2RCxNOzs7Ozs7QUNIckIsZ0Q7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InJlYWN0LWNhbGNwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm51bWVyYWxcIiksIHJlcXVpcmUoXCJjbGFzcy1uYW1lc1wiKSwgcmVxdWlyZShcIm51bWVyYWwvbG9jYWxlc1wiKSwgcmVxdWlyZShcInJlYWN0LXBvcnRhbFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJudW1lcmFsXCIsIFwiY2xhc3MtbmFtZXNcIiwgXCJudW1lcmFsL2xvY2FsZXNcIiwgXCJyZWFjdC1wb3J0YWxcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Q2FsY1BpY2tlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibnVtZXJhbFwiKSwgcmVxdWlyZShcImNsYXNzLW5hbWVzXCIpLCByZXF1aXJlKFwibnVtZXJhbC9sb2NhbGVzXCIpLCByZXF1aXJlKFwicmVhY3QtcG9ydGFsXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RDYWxjUGlja2VyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJudW1lcmFsXCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcImxvY2FsZXNcIl0sIHJvb3RbXCJQb3J0YWxcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMTk1YTRiY2JmNjEwNDc0Y2JiNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0XG57XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCwgdHJhbnNmb3JtWCA9IDAsIHRyYW5zZm9ybVkgPSAwKSB7XG4gICAgdGhpcy50b3AgPSB0b3BcbiAgICB0aGlzLmxlZnQgPSBsZWZ0XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLnRyYW5zZm9ybVggPSB0cmFuc2Zvcm1YXG4gICAgdGhpcy50cmFuc2Zvcm1ZID0gdHJhbnNmb3JtWVxuICB9XG5cbiAgZ2V0IGJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgb3JpZ2luVG9wKCl7XG4gICAgcmV0dXJuIHRoaXMudG9wIC0gdGhpcy50cmFuc2Zvcm1ZO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkxlZnQoKXtcbiAgICByZXR1cm4gdGhpcy5sZWZ0IC0gdGhpcy50cmFuc2Zvcm1YO1xuICB9XG5cbiAgZ2V0IG9yaWdpbkJvdHRvbSgpe1xuICAgIHJldHVybiB0aGlzLm9yaWdpblRvcCArIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IG9yaWdpblJpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luTGVmdCArIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXQgYXJlYSgpe1xuICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRDZW50ZXJSZWN0KHdpZHRoLCBoZWlnaHQpe1xuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgIHg6IHRoaXMubGVmdCArICh0aGlzLndpZHRoIC8gMiksXG4gICAgICB5OiB0aGlzLnRvcCArICh0aGlzLmhlaWdodCAvIDIpLFxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdChcbiAgICAgIGNlbnRlci55IC0gKGhlaWdodCAvIDIpLFxuICAgICAgY2VudGVyLnggLSAod2lkdGggLyAyKSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgY2xvbmUoKXtcbiAgICByZXR1cm4gbmV3IFJlY3QoXG4gICAgICB0aGlzLnRvcCxcbiAgICAgIHRoaXMubGVmdCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWCxcbiAgICAgIHRoaXMudHJhbnNmb3JtWVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSh4LCB5KXtcbiAgICB0aGlzLnRvcCA9IHRoaXMub3JpZ2luVG9wICsgeTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLm9yaWdpbkxlZnQgKyB4O1xuICAgIHRoaXMudHJhbnNmb3JtWCA9IHg7XG4gICAgdGhpcy50cmFuc2Zvcm1ZID0geTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRhaW5zKHJlY3Qpe1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGVmdCA8PSByZWN0LmxlZnRcbiAgICAgICYmXG4gICAgICB0aGlzLnJpZ2h0ID49IHJlY3QucmlnaHRcbiAgICAgICYmXG4gICAgICB0aGlzLnRvcCA8PSByZWN0LnRvcFxuICAgICAgJiZcbiAgICAgIHRoaXMuYm90dG9tID49IHJlY3QuYm90dG9tO1xuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGR1bXAoKXtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG9yaWdpblRvcDogdGhpcy5vcmlnaW5Ub3AsXG4gICAgICBvcmlnaW5MZWZ0OiB0aGlzLm9yaWdpbkxlZnQsXG4gICAgICBvcmlnaW5Cb3R0b206IHRoaXMub3JpZ2luQm90dG9tLFxuICAgICAgb3JpZ2luUmlnaHQ6IHRoaXMub3JpZ2luUmlnaHQsXG4gICAgICB0cmFuc2Zvcm1YOiB0aGlzLnRyYW5zZm9ybVgsXG4gICAgICB0cmFuc2Zvcm1ZOiB0aGlzLnRyYW5zZm9ybVksXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVSZWN0KHJlY3QsIHBvc2l0aW9uKXtcbiAgICBzd2l0Y2gocG9zaXRpb24pe1xuICAgICAgY2FzZSBSZWN0LlJJR0hUX0JPVFRPTTpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5sZWZ0IC0gcmVjdC5vcmlnaW5MZWZ0LFxuICAgICAgICAgIHRoaXMuYm90dG9tIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgY2FzZSBSZWN0LkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLnJpZ2h0IC0gcmVjdC5vcmlnaW5SaWdodCxcbiAgICAgICAgICB0aGlzLmJvdHRvbSAtIHJlY3Qub3JpZ2luVG9wXG4gICAgICAgIClcbiAgICAgIGNhc2UgUmVjdC5MRUZUX1RPUDpcbiAgICAgICAgcmV0dXJuIHJlY3QuY2xvbmUoKS50cmFuc2Zvcm0oXG4gICAgICAgICAgdGhpcy5yaWdodCAtIHJlY3Qub3JpZ2luUmlnaHQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuUklHSFRfVE9QOlxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICB0aGlzLmxlZnQgLSByZWN0Lm9yaWdpbkxlZnQsXG4gICAgICAgICAgdGhpcy50b3AgLSByZWN0Lm9yaWdpbkJvdHRvbVxuICAgICAgICApXG4gICAgICBjYXNlIFJlY3QuV0lORE9XX0NFTlRFUjpcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRSZWN0ID0gdGhpcy5nZXRDZW50ZXJSZWN0KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KVxuICAgICAgICByZXR1cm4gcmVjdC5jbG9uZSgpLnRyYW5zZm9ybShcbiAgICAgICAgICBleHBlY3RlZFJlY3QubGVmdCAtIHJlY3Qub3JpZ2luTGVmdCxcbiAgICAgICAgICBleHBlY3RlZFJlY3QudG9wIC0gcmVjdC5vcmlnaW5Ub3BcbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgJ0lsbGVnYWwgcG9zaXRpb25LZXkgYCcgKyBwb3NpdGlvbiArICdgIGlzIHNwZWNpZmllZCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3ZlcmxhcHBpbmdSZWN0KHJlY3Qpe1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMudG9wLCByZWN0LnRvcClcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgodGhpcy5sZWZ0LCByZWN0LmxlZnQpXG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbih0aGlzLnJpZ2h0LCByZWN0LnJpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih0aGlzLmJvdHRvbSwgcmVjdC5ib3R0b20pO1xuXG4gICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG4gICAgaWYgKHdpZHRoID4gMCAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5SZWN0LmNyZWF0ZVdpdGhFbGVtZW50ID0gKGVsZW0sIHRyYW5zZm9ybVggPSAwLCB0cmFuc2Zvcm1ZID0gMCkgPT4ge1xuICBpZighZWxlbSl7XG4gICAgcmV0dXJuIG5ldyBSZWN0KDAsMCwwLDApXG4gIH1cbiAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICByZXR1cm4gbmV3IFJlY3QoXG4gICAgYm91bmRpbmdSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBib3VuZGluZ1JlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgIGJvdW5kaW5nUmVjdC53aWR0aCxcbiAgICBib3VuZGluZ1JlY3QuaGVpZ2h0LFxuICAgIHRyYW5zZm9ybVgsXG4gICAgdHJhbnNmb3JtWVxuICApXG59XG5cblJlY3QuY3JlYXRlV2l0aFdpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBSZWN0KFxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ1JJR0hUX1RPUCcsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiUklHSFRfVE9QXCJcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdCwgJ0xFRlRfVE9QJywge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IGZhbHNlLFxuICB2YWx1ZTogXCJMRUZUX1RPUFwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdSSUdIVF9CT1RUT00nLCB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIHZhbHVlOiBcIlJJR0hUX0JPVFRPTVwiXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QsICdMRUZUX0JPVFRPTScsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiTEVGVF9CT1RUT01cIlxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LCAnV0lORE9XX0NFTlRFUicsIHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgdmFsdWU6IFwiV0lORE9XX0NFTlRFUlwiXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jbGFzc2VzL1JlY3QuanMiLCJjbGFzcyBHbG9iYWxcbntcbiAgZ2V0IGN1cnJlbnRDYWxjbGF0b3IoKXtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENhbGNsYXRvclxuICB9XG5cbiAgc2V0IGN1cnJlbnRDYWxjbGF0b3IodmFsdWUpe1xuICAgIHRoaXMuX2N1cnJlbnRDYWxjbGF0b3IgPSB2YWx1ZVxuICB9XG59XG5cbmNvbnN0IGcgPSBuZXcgR2xvYmFsKClcbmV4cG9ydCBkZWZhdWx0IGc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY2xhc3Nlcy9HbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIm51bWVyYWxcIixcImNvbW1vbmpzMlwiOlwibnVtZXJhbFwiLFwiY29tbW9uanNcIjpcIm51bWVyYWxcIixcImFtZFwiOlwibnVtZXJhbFwifVxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImNsYXNzTmFtZXNcIixcImNvbW1vbmpzMlwiOlwiY2xhc3MtbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzcy1uYW1lc1wiLFwiYW1kXCI6XCJjbGFzcy1uYW1lc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJ1xuXG5jb25zdCBBY3Rpb24gPSAge1xuICBvbmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMScpXG4gIH0sXG4gIHR3bzogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCcyJylcbiAgfSxcbiAgdGhyZWU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnMycpXG4gIH0sXG4gIGZvdXI6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNCcpXG4gIH0sXG4gIGZpdmU6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNScpXG4gIH0sXG4gIHNpeDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0VG9EaXNwbGF5KCc2JylcbiAgfSxcbiAgc2V2ZW46IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFRvRGlzcGxheSgnNycpXG4gIH0sXG4gIGVpZ2h0OiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzgnKVxuICB9LFxuICBuaW5lOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzknKVxuICB9LFxuICB6ZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAnKVxuICB9LFxuICBkb3VibGVaZXJvOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRUb0Rpc3BsYXkoJzAwJylcbiAgfSxcbiAgZGVjaW1hbDogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0RGVjaW1hbCgpXG4gIH0sXG4gIHBlcmNlbnQ6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dFBlcmNlbnQoYnRuUHJvcHMpXG4gIH0sXG4gIHBsdXM6IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcrJywgYnRuUHJvcHMpXG4gIH0sXG4gIG1pbnVzOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuaW5wdXRPcGVyYXRvcignLScsIGJ0blByb3BzKVxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmlucHV0T3BlcmF0b3IoJyonLCBidG5Qcm9wcylcbiAgfSxcbiAgZGl2aXNpb246IGZ1bmN0aW9uKGNhbGMsIGJ0blByb3BzLCBldmVudCl7XG4gICAgY2FsYy5pbnB1dE9wZXJhdG9yKCcvJywgYnRuUHJvcHMpXG4gIH0sXG4gIGVudGVyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICBjYWxjLmZpeCgpXG4gICAgICBpZihjYWxjLnByb3BzLmNsb3NlT25FbnRlckFjdGlvbil7XG4gICAgICAgIGNhbGMuY2xvc2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGFsbENsZWFyOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuYWxsQ2xlYXIoKVxuICB9LFxuICBjbGVhcjogZnVuY3Rpb24oY2FsYywgYnRuUHJvcHMsIGV2ZW50KXtcbiAgICBjYWxjLmNsZWFyKClcbiAgfSxcbiAgYmFja3NwYWNlOiBmdW5jdGlvbihjYWxjLCBidG5Qcm9wcywgZXZlbnQpe1xuICAgIGNhbGMuZGVsZXRlKClcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NsYXNzZXMvQWN0aW9uLmpzIiwiaW1wb3J0IENhbGNQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGNQaWNrZXInO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY2xhc3Nlcy9BY3Rpb24nXG5cbmV4cG9ydCB7Q2FsY1BpY2tlciwgUmVjdCwgQWN0aW9ufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3JlYWN0LWNhbGNwaWNrZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuaW1wb3J0ICdudW1lcmFsL2xvY2FsZXMnXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JlYWN0LXBvcnRhbCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9jbGFzc2VzL1JlY3QnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4uL2NsYXNzZXMvQWN0aW9uJ1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzLW5hbWVzJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yKXtcbiAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvci5wcm9wcy5idXR0b25zLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBpZihidG4ua2V5RG93biAmJiBidG4ua2V5RG93bihlKSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBidG4uYWN0aW9uKEdsb2JhbC5jdXJyZW50Q2FsY2xhdG9yLCBidG4sIGUpXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGNQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbntcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbnVtZXJhbC5sb2NhbGUocHJvcHMubG9jYWxlKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuQ2FsY3VsYXRvcjogZmFsc2UsXG4gICAgICB2YWx1ZTogcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIGlmKHRoaXMucHJvcHMubG9jYWxlICE9IG5leHRQcm9wcy5sb2NhbGUpe1xuICAgICAgbnVtZXJhbC5sb2NhbGUobmV4dFByb3BzLmxvY2FsZSlcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmluaXRpYWxWYWx1ZSAhPSBuZXh0UHJvcHMuaW5pdGlhbFZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyd2YWx1ZSc6IG5leHRQcm9wcy5pbml0aWFsVmFsdWV9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gcHJldlN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKHRoaXMuc3RhdGUub3BlbkNhbGN1bGF0b3IgPT09IHRydWUpe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHRoaXMucmVmcy5jYWxjdWxhdG9yXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSl7XG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gbmV4dFN0YXRlLm9wZW5DYWxjdWxhdG9yKXtcbiAgICAgIGlmKG5leHRTdGF0ZS5vcGVuQ2FsY3VsYXRvciAhPT0gdHJ1ZSAmJiBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9PT0gdGhpcy5yZWZzLmNhbGN1bGF0b3Ipe1xuICAgICAgICBHbG9iYWwuY3VycmVudENhbGNsYXRvciA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tQaWNrZXIoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMucHJvcHMuc2hvdWxkT3BlbigpID09PSBmYWxzZSl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLmV4Y2x1c2lvbkdyb3VwKXtcbiAgICAgIGxldCBhbHJlYWR5T3BlbmQgPSBmYWxzZVxuICAgICAgdGhpcy5wcm9wcy5leGNsdXNpb25Hcm91cC5mb3JFYWNoKHBpY2tlciA9PiB7XG4gICAgICAgIGlmKHBpY2tlciA9PT0gdGhpcykgYWxyZWFkeU9wZW5kID0gdHJ1ZVxuICAgICAgICBpZihwaWNrZXIuc3RhdGUub3BlbkNhbGN1bGF0b3Ipe1xuICAgICAgICAgIHBpY2tlci5zZXRTdGF0ZSh7b3BlbkNhbGN1bGF0b3I6IGZhbHNlfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYoIWFscmVhZHlPcGVuZCl7XG4gICAgICAgIHRoaXMucHJvcHMuZXhjbHVzaW9uR3JvdXAucHVzaCh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogdHJ1ZX0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xvc2VQb3J0YWwoKXtcbiAgICAvL1NldCB0aGUgb3BlbkNhbGN1bGF0b3IgdG8gZmFsc2Ugd2hlbiBjbGlja2luZyB0aGUgb3ZlcmxheSBvciBjbG9zaW5nIHdpdGggdGhlIEVTQyBrZXkuXG4gICAgaWYodGhpcy5zdGF0ZS5vcGVuQ2FsY3VsYXRvciA9PSB0cnVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5DYWxjdWxhdG9yOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKXtcbiAgICBpZih0aGlzLnN0YXRlLnZhbHVlICE9IHZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0pXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncmVhY3QtY2FsY3BpY2tlcicsIHRoaXMucHJvcHMud3JhcHBlckNsYXNzKX0+XG4gICAgICAgIDxidXR0b24gcmVmPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLmJ1dHRvbkNsYXNzKX0gb25DbGljaz17KGUpID0+IHRoaXMub25DbGlja1BpY2tlcihlKX0+XG4gICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS52YWx1ZSkuZm9ybWF0KHRoaXMucHJvcHMuZm9ybWF0KX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxQb3J0YWwgY2xvc2VPbkVzYyBjbG9zZU9uT3V0c2lkZUNsaWNrPXt0aGlzLnByb3BzLmNsb3NlT25PdXRzaWRlQ2xpY2t9IGlzT3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5DYWxjdWxhdG9yfSBvbkNsb3NlPXsoKSA9PiB0aGlzLm9uQ2xvc2VQb3J0YWwoKX0+XG4gICAgICAgICAgPENhbGN1bGF0b3JcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgcmVmPSdjYWxjdWxhdG9yJ1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DbGlja0Nsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuQ2FsY3VsYXRvcjogZmFsc2V9KX1cbiAgICAgICAgICAgIGJ1dHRvbj17dGhpcy5yZWZzLmJ1dHRvbn1cbiAgICAgICAgICAgIHBvc2l0aW9ucz17dGhpcy5wcm9wcy5wb3NpdGlvbnN9XG4gICAgICAgICAgICBidXR0b25zPXt0aGlzLnByb3BzLmJ1dHRvbnN9XG4gICAgICAgICAgICBvbkNhbGN1bGF0ZWQ9e3ZhbHVlID0+IHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgY2xvc2VCdXR0b249e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICBjbG9zZU9uRW50ZXJBY3Rpb249e3RoaXMucHJvcHMuY2xvc2VPbkVudGVyQWN0aW9ufVxuICAgICAgICAgICAgekluZGV4PXt0aGlzLnByb3BzLnpJbmRleH1cbiAgICAgICAgICAgIGJ1dHRvbldpZHRoPXt0aGlzLnByb3BzLmJ1dHRvbldpZHRofVxuICAgICAgICAgICAgYnV0dG9uSGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgIGJ1dHRvbk1hcmdpbj17dGhpcy5wcm9wcy5idXR0b25NYXJnaW59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNhbGNQaWNrZXIucHJvcFR5cGVzID0ge1xuICBpbml0aWFsVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9zaXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoW1xuICAgIFJlY3QuUklHSFRfQk9UVE9NLFxuICAgIFJlY3QuTEVGVF9CT1RUT00sXG4gICAgUmVjdC5SSUdIVF9UT1AsXG4gICAgUmVjdC5MRUZUX1RPUCxcbiAgICBSZWN0LldJTkRPV19DRU5URVIsXG4gIF0pKSxcbiAgYnV0dG9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2xpZ2h0JywgJ2RhcmsnLCAnd2FybmluZyddKSxcbiAgICAgICAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBdKS5yZXF1aXJlLFxuICAgICAgICBzcGFuOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlclxuICAgICAgICB9KSxcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBrZXlEb3duOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfSlcbiAgICApXG4gICksXG4gIGJ1dHRvbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvbk1hcmdpbjogUHJvcFR5cGVzLm51bWJlcixcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJ1dHRvbkNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICBdKSxcbiAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xvc2VPbkVudGVyQWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xvc2VPbk91dHNpZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGV4Y2x1c2lvbkdyb3VwOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNob3VsZE9wZW46IFByb3BUeXBlcy5mdW5jXG59XG5cbkNhbGNQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBpbml0aWFsVmFsdWU6IDAsXG4gIGZvcm1hdDogXCIwLDBbLl0wMFwiLFxuICBwb3NpdGlvbnM6IFtcbiAgICBSZWN0LlJJR0hUX0JPVFRPTSxcbiAgICBSZWN0LkxFRlRfQk9UVE9NLFxuICAgIFJlY3QuUklHSFRfVE9QLFxuICAgIFJlY3QuTEVGVF9UT1AsXG4gICAgUmVjdC5XSU5ET1dfQ0VOVEVSLFxuICBdLFxuICBjbG9zZUJ1dHRvbjogJ8OXJyxcbiAgYnV0dG9uczogW1xuICAgIFtcbiAgICAgIHtzdHlsZTogXCJkYXJrXCIsIGRpc3BsYXk6IFwiQUNcIiwgYWN0aW9uOiBBY3Rpb24uYWxsQ2xlYXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0NsZWFyJ30sXG4gICAgICB7c3R5bGU6IFwiZGFya1wiLCBkaXNwbGF5OiBcIuKGkFwiLCBhY3Rpb246IEFjdGlvbi5iYWNrc3BhY2UsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJ0JhY2tzcGFjZSd9LFxuICAgICAge3N0eWxlOiBcImxpZ2h0XCIsIGRpc3BsYXk6IFwiJVwiLCBhY3Rpb246IEFjdGlvbi5wZXJjZW50LCBrZXlEb3duOiBlID0+IGUua2V5ID09ICclJ30sXG4gICAgICB7c3R5bGU6IFwicHJpbWFyeVwiLCBkaXNwbGF5OiBcIsO3XCIsIGFjdGlvbjogQWN0aW9uLmRpdmlzaW9uLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcvJ30sXG4gICAgXSxcbiAgICBbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjdcIiwgYWN0aW9uOiBBY3Rpb24uc2V2ZW4sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzcnfSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiOFwiLCBhY3Rpb246IEFjdGlvbi5laWdodCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnOCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI5XCIsIGFjdGlvbjogQWN0aW9uLm5pbmUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzknfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiw5dcIiwgYWN0aW9uOiBBY3Rpb24ubXVsdGlwbGljYXRpb24sIGtleURvd246IGUgPT4gZS5rZXkgPT0gJyonfSxcbiAgICBdLFtcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiNFwiLCBhY3Rpb246IEFjdGlvbi5mb3VyLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICc0J30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjVcIiwgYWN0aW9uOiBBY3Rpb24uZml2ZSwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNSd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCI2XCIsIGFjdGlvbjogQWN0aW9uLnNpeCwga2V5RG93bjogZSA9PiBlLmtleSA9PSAnNid9LFxuICAgICAge3N0eWxlOiBcInByaW1hcnlcIiwgZGlzcGxheTogXCItXCIsIGFjdGlvbjogQWN0aW9uLm1pbnVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICctJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjFcIiwgYWN0aW9uOiBBY3Rpb24ub25lLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcxJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjJcIiwgYWN0aW9uOiBBY3Rpb24udHdvLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcyJ30sXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjNcIiwgYWN0aW9uOiBBY3Rpb24udGhyZWUsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJzMnfSxcbiAgICAgIHtzdHlsZTogXCJwcmltYXJ5XCIsIGRpc3BsYXk6IFwiK1wiLCBhY3Rpb246IEFjdGlvbi5wbHVzLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcrJ30sXG4gICAgXSxbXG4gICAgICB7c3R5bGU6IFwiZGVmYXVsdFwiLCBkaXNwbGF5OiBcIjBcIiwgYWN0aW9uOiBBY3Rpb24uemVybywga2V5RG93bjogZSA9PiBlLmtleSA9PSAnMCd9LFxuICAgICAge3N0eWxlOiBcImRlZmF1bHRcIiwgZGlzcGxheTogXCIwMFwiLCBhY3Rpb246IEFjdGlvbi5kb3VibGVaZXJvLCBrZXlEb3duOiBlID0+IGUua2V5Q29kZSA9PSA0OCAmJiBlLnNoaWZ0S2V5fSxcbiAgICAgIHtzdHlsZTogXCJkZWZhdWx0XCIsIGRpc3BsYXk6IFwiLlwiLCBhY3Rpb246IEFjdGlvbi5kZWNpbWFsLCBrZXlEb3duOiBlID0+IGUua2V5ID09ICcuJ30sXG4gICAgICB7c3R5bGU6IFwid2FybmluZ1wiLCBkaXNwbGF5OiBcIj1cIiwgYWN0aW9uOiBBY3Rpb24uZW50ZXIsIGtleURvd246IGUgPT4gZS5rZXkgPT0gJz0nIHx8IGUua2V5ID09ICdFbnRlcid9LFxuICAgIF1cbiAgXSxcbiAgY2xvc2VPbkVudGVyQWN0aW9uOiB0cnVlLFxuICBidXR0b25XaWR0aDogNDgsXG4gIGJ1dHRvbkhlaWdodDogMzIsXG4gIGJ1dHRvbk1hcmdpbjogMyxcbiAgY2xvc2VPbk91dHNpZGVDbGljazogdHJ1ZSxcbiAgZXhjbHVzaW9uR3JvdXA6IHVuZGVmaW5lZCxcbiAgc2hvdWxkT3BlbjogKCkgPT4gdHJ1ZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ2FsY1BpY2tlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwibG9jYWxlc1wiLFwiY29tbW9uanMyXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImNvbW1vbmpzXCI6XCJudW1lcmFsL2xvY2FsZXNcIixcImFtZFwiOlwibnVtZXJhbC9sb2NhbGVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vY2xhc3Nlcy9SZWN0J1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuLi9jbGFzc2VzL0dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogcHJvcHMuaW5pdGlhbFZhbHVlLFxuICAgICAgdmFsdWU6IHByb3BzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGFwcGVuZE1vZGU6IHRydWUsXG4gICAgICBmb3JtYXQ6ICcwLDBbLl0wWzAwMDAwMDAwMDAwMF0nLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlQnV0dG9uU2l6ZSA9IDMwO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5hZGp1c3RQb3NpdGlvbigpO1xuICB9XG5cbiAgYWRqdXN0UG9zaXRpb24oKXtcbiAgICBpZih0aGlzLnJlZnMuY2FsY3VsYXRvcil7XG4gICAgICBjb25zdCB3aW5kb3dSZWN0ID0gUmVjdC5jcmVhdGVXaXRoV2luZG93KClcbiAgICAgIGNvbnN0IGJ1dHRvblJlY3QgPSBSZWN0LmNyZWF0ZVdpdGhFbGVtZW50KHRoaXMucHJvcHMuYnV0dG9uKTtcbiAgICAgIGNvbnN0IGNhbGNSZWN0ID0gUmVjdC5jcmVhdGVXaXRoRWxlbWVudCh0aGlzLnJlZnMuY2FsY3VsYXRvciwgdGhpcy5zdGF0ZS54LCB0aGlzLnN0YXRlLnkpO1xuXG4gICAgICBjb25zdCByZWN0cyA9IFtdXG4gICAgICBsZXQgbmV3Q2FsY1JlY3QgPSB1bmRlZmluZWQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvc0tleSA9IHRoaXMucHJvcHMucG9zaXRpb25zW2ldXG4gICAgICAgIGxldCByZWN0O1xuICAgICAgICBpZihwb3NLZXkgPT0gUmVjdC5XSU5ET1dfQ0VOVEVSKXtcbiAgICAgICAgICByZWN0ID0gd2luZG93UmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWN0ID0gYnV0dG9uUmVjdC5nZXRSZWxhdGl2ZVJlY3QoY2FsY1JlY3QsIHBvc0tleSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3RzLnB1c2gocmVjdClcbiAgICAgICAgaWYod2luZG93UmVjdC5jb250YWlucyhyZWN0KSl7XG4gICAgICAgICAgbmV3Q2FsY1JlY3QgPSByZWN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFuZXdDYWxjUmVjdCl7XG4gICAgICAgIHJlY3RzLnNvcnQoKGEsIGIpID0+IHdpbmRvd1JlY3QuZ2V0T3ZlcmxhcHBpbmdSZWN0KGIpLmFyZWEgLSB3aW5kb3dSZWN0LmdldE92ZXJsYXBwaW5nUmVjdChhKS5hcmVhKVxuICAgICAgICBuZXdDYWxjUmVjdCA9IHJlY3RzWzBdXG4gICAgICB9XG5cbiAgICAgIGlmKG5ld0NhbGNSZWN0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgeDogbmV3Q2FsY1JlY3QudHJhbnNmb3JtWCxcbiAgICAgICAgICB5OiBuZXdDYWxjUmVjdC50cmFuc2Zvcm1ZLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dFRvRGlzcGxheShudW1iZXIpe1xuICAgIGNvbnN0IHN0ckRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXkudG9TdHJpbmcoKVxuICAgIGlmKHN0ckRpc3BsYXkgIT09ICcwJyAmJiB0aGlzLnN0YXRlLmFwcGVuZE1vZGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc3BsYXk6IHN0ckRpc3BsYXkgKyBudW1iZXIsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXBwZW5kTW9kZTogdHJ1ZSxcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjKGxlZnQsIG9wZXJhdG9yLCByaWdodCl7XG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCArIHJpZ2h0O1xuICAgICAgY2FzZSAnLSc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCAqIChyaWdodCAvIDEwMClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgbGVmdCAtIHJpZ2h0O1xuICAgICAgY2FzZSAnLyc6XG4gICAgICAgIGlmKHRoaXMuc3RhdGUudW5pdC52YWx1ZSA9PSAnJScpe1xuICAgICAgICAgIHJpZ2h0ID0gcmlnaHQgLyAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHRcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICBpZih0aGlzLnN0YXRlLnVuaXQudmFsdWUgPT0gJyUnKXtcbiAgICAgICAgICByaWdodCA9IHJpZ2h0IC8gMTAwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyAnSW52YWxpZCBvcGVyYXRvciAnICsgb3BlcmF0b3IgKyAnIHNwZWNpZmllZC4nO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWN1dGUoY2FsbGJhY2sgPSAoKSA9PiB7fSl7XG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmRpc3BsYXk7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBsZXQgY2FsY3VsYXRlZCA9IGZhbHNlO1xuICAgIGlmKHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUpe1xuICAgICAgZGlzcGxheSA9IHRoaXMuY2FsYyhwYXJzZUZsb2F0KHZhbHVlLCAxMCksIHRoaXMuc3RhdGUub3BlcmF0b3IudmFsdWUsIHBhcnNlRmxvYXQoZGlzcGxheSwgMTApKTtcbiAgICAgIGNhbGN1bGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhbHVlID0gZGlzcGxheTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgdW5pdDoge30sXG4gICAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBpbnB1dE9wZXJhdG9yKG9wZXJhdG9yLCBidG5Qcm9wcyl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIHRoaXMuZXhlY3V0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFwcGVuZE1vZGU6IGZhbHNlLFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICB2YWx1ZTogb3BlcmF0b3IsXG4gICAgICAgICAgZGlzcGxheTogYnRuUHJvcHMuZGlzcGxheSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaW5wdXREZWNpbWFsKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5LmluZGV4T2YoJy4nKSA9PT0gLTEpe1xuICAgICAgdGhpcy5pbnB1dFRvRGlzcGxheSgnLicpXG4gICAgfVxuICB9XG5cbiAgaW5wdXRQZXJjZW50KGJ0blByb3BzKXtcbiAgICBpZih0aGlzLnN0YXRlLm9wZXJhdG9yLnZhbHVlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VuaXQ6IHtcbiAgICAgICAgdmFsdWU6JyUnLFxuICAgICAgICBkaXNwbGF5OiBidG5Qcm9wcy5kaXNwbGF5XG4gICAgICB9fSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5IC8gMTAwfSlcbiAgICB9XG4gIH1cblxuICBjbGVhcigpe1xuICAgIGlmKHRoaXMuc3RhdGUuYXBwZW5kTW9kZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGlzcGxheTogJzAnLFxuICAgICAgICBhcHBlbmRNb2RlOiBmYWxzZSxcbiAgICAgICAgdW5pdDoge30sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFsbENsZWFyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5OiAnMCcsXG4gICAgICB2YWx1ZTogJzAnLFxuICAgICAgb3BlcmF0b3I6IHt9LFxuICAgICAgYXBwZW5kTW9kZTogZmFsc2UsXG4gICAgICB1bml0OiB7fSxcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlKCl7XG4gICAgaWYodGhpcy5zdGF0ZS5hcHBlbmRNb2RlKXtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge31cbiAgICAgIGxldCBuZXdEaXNwbGF5ID0gdGhpcy5zdGF0ZS5kaXNwbGF5LnRvU3RyaW5nKClcbiAgICAgIGlmKG5ld0Rpc3BsYXkgPT09ICcwJyl7XG4gICAgICAgIG5ld1N0YXRlWyd1bml0J10gPSB7fVxuICAgICAgfVxuICAgICAgbmV3RGlzcGxheSA9IG5ld0Rpc3BsYXkuc3Vic3RyKDAsIG5ld0Rpc3BsYXkubGVuZ3RoIC0gMSk7XG4gICAgICBuZXdTdGF0ZVsnZGlzcGxheSddID0gIW5ld0Rpc3BsYXkgPyAwIDogbmV3RGlzcGxheTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmFkanVzdFBvc2l0aW9uKClcbiAgfVxuXG4gIGZpeCgpe1xuICAgIGlmKHRoaXMucHJvcHMub25DYWxjdWxhdGVkKSB0aGlzLnByb3BzLm9uQ2FsY3VsYXRlZCh0aGlzLnN0YXRlLnZhbHVlKVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tDbG9zZSgpXG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGJ0blByb3BzLCBldmVudCl7XG4gICAgR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzO1xuICAgIGJ0blByb3BzLmFjdGlvbih0aGlzLCBidG5Qcm9wcywgZXZlbnQpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZURhdGEoKTtcbiAgICBjb25zdCBzdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt0aGlzLnN0YXRlLnh9cHgsICR7dGhpcy5zdGF0ZS55fXB4KWB9XG4gICAgaWYodGhpcy5wcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCl7XG4gICAgICBzdHlsZVsnekluZGV4J10gPSB0aGlzLnByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwiY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3JcIiBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2UgPT4gR2xvYmFsLmN1cnJlbnRDYWxjbGF0b3IgPSB0aGlzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1oZWFkZXItdGl0bGVcIiBzdHlsZT17e3dpZHRoOiAoKHRoaXMucHJvcHMuYnV0dG9uV2lkdGggKiA0KSArICh0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbiAqIDYpKSAtIHRoaXMuY2xvc2VCdXR0b25TaXplfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWNhbGNwaWNrZXJfX2NhbGN1bGF0b3ItaGVhZGVyLWJ1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1jbG9zZVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e3RoaXMucHJvcHMuY2xvc2VCdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2UoKX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3RoaXMuY2xvc2VCdXR0b25TaXplfVxuICAgICAgICAgICAgICBtYXJnaW49e3RoaXMucHJvcHMuYnV0dG9uTWFyZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5XCIgc3R5bGU9e3ttYXJnaW46IHRoaXMucHJvcHMuYnV0dG9uTWFyZ2lufX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWRpc3BsYXktb3BlcmF0b3JcIj57dGhpcy5zdGF0ZS5vcGVyYXRvci5kaXNwbGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1kaXNwbGF5LW51bWJlclwiPlxuICAgICAgICAgICAge251bWVyYWwodGhpcy5zdGF0ZS5kaXNwbGF5KS5mb3JtYXQodGhpcy5zdGF0ZS5mb3JtYXQpfXt0aGlzLnN0YXRlLnVuaXQuZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKChyb3csIHJvd0tleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm93S2V5fSBjbGFzc05hbWU9XCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAge3Jvdy5tYXAoKGJ0biwgYnRuS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtlbGVtID0+IGJ0bi5jb21wb25lbnQgPSBlbGVtfVxuICAgICAgICAgICAgICAgICAgICBwcmV2QnV0dG9uPXtidG5LZXkgPiAwID8gcm93W2J0bktleSAtIDFdIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3dLZXkgKyAnLScgKyBidG5LZXl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnRuLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J0bi5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgc3Bhbj17YnRuLnNwYW59XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e2J0bi5kaXNwbGF5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0J1dHRvbihidG4sIGUpfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy5idXR0b25XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmJ1dHRvbkhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt0aGlzLnByb3BzLmJ1dHRvbk1hcmdpbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3MtbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCdXR0b25TdHlsZSgpe1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMubWFyZ2luKXtcbiAgICAgIHN0eWxlLm1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc3Bhbil7XG4gICAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgICAgaWYodGhpcy5wcm9wcy5zcGFuLmhlaWdodCA+PSAyKXtcbiAgICAgICAgY29uc3QgdG90YWxNYXJnaW4gPSB0aGlzLnByb3BzLm1hcmdpbiAqICgodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpICogMilcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gKHN0eWxlLmhlaWdodCAqIHRoaXMucHJvcHMuc3Bhbi5oZWlnaHQpICsgdG90YWxNYXJnaW5cbiAgICAgICAgc3R5bGUudG9wID0gLSgodGhpcy5wcm9wcy5oZWlnaHQgKiAodGhpcy5wcm9wcy5zcGFuLmhlaWdodCAtIDEpKSArIHRvdGFsTWFyZ2luKVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnByb3BzLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICAgIGNvbnN0IHRvdGFsTWFyZ2luID0gdGhpcy5wcm9wcy5tYXJnaW4gKiAoKHRoaXMucHJvcHMuc3Bhbi53aWR0aCAtIDEpICogMilcbiAgICAgICAgc3R5bGUud2lkdGggPSAoc3R5bGUud2lkdGggKiB0aGlzLnByb3BzLnNwYW4ud2lkdGgpICsgdG90YWxNYXJnaW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnByZXZCdXR0b24gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4gJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggJiYgdGhpcy5wcm9wcy5wcmV2QnV0dG9uLnNwYW4ud2lkdGggPj0gMil7XG4gICAgICBjb25zdCB0b3RhbE1hcmdpbiA9IHRoaXMucHJvcHMubWFyZ2luICogKCh0aGlzLnByb3BzLnByZXZCdXR0b24uc3Bhbi53aWR0aCAqIDIpICsgMSlcbiAgICAgIHN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5wcm9wcy53aWR0aCAqIHRoaXMucHJvcHMucHJldkJ1dHRvbi5zcGFuLndpZHRoKSArIHRvdGFsTWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICByZWY9XCJlbGVtZW50XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwicmVhY3QtY2FsY3BpY2tlcl9fY2FsY3VsYXRvci1idXR0b25cIixcbiAgICAgICAgICB0aGlzLnByb3BzLnN0eWxlID8gXCJyZWFjdC1jYWxjcGlja2VyX19jYWxjdWxhdG9yLWJ1dHRvbi1cIiArIHRoaXMucHJvcHMuc3R5bGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3RoaXMuZ2V0QnV0dG9uU3R5bGUoKX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLm9uQ2xpY2soZSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXl9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9CdXR0b24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQb3J0YWxcIixcImNvbW1vbmpzMlwiOlwicmVhY3QtcG9ydGFsXCIsXCJjb21tb25qc1wiOlwicmVhY3QtcG9ydGFsXCIsXCJhbWRcIjpcInJlYWN0LXBvcnRhbFwifVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=