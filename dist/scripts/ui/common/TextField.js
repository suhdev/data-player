'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (R) {
  var objectTypes = {
    'function': true,
    'object': true
  };
  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

  /** Detect free variable `self`. */
  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

  /** Detect free variable `window`. */
  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal || freeWindow !== (this && this.window) && freeWindow || freeSelf || this;

  var SHTextField = (function (_R$Component) {
    _inherits(SHTextField, _R$Component);

    function SHTextField(props) {
      _classCallCheck(this, SHTextField);

      _get(Object.getPrototypeOf(SHTextField.prototype), 'constructor', this).call(this, props);
      this.props = props;
      this.state = {
        enabled: props.enabled,
        text: props.text,
        valid: props.valid
      };
    }

    _createClass(SHTextField, [{
      key: 'setEnabled',
      value: function setEnabled(enabled) {
        this.setState({
          enabled: enabled
        });
      }
    }, {
      key: 'isValid',
      value: function isValid() {
        return this.state.valid;
      }
    }, {
      key: 'onTextChanged',
      value: function onTextChanged(evt) {
        this.setState({
          text: evt.target.value,
          valid: this.props.validate(evt.target.value)
        });
      }
    }, {
      key: 'onClicked',
      value: function onClicked(evt) {
        if (!this.state.enabled) {
          return false;
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var onUpdate = this.props.onUpdate;
        onUpdate(this.state.text, this);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'shui-textfield', 'data-valid': this.state.valid, 'data-state': this.state.enabled ? 'enabled' : 'disabled', 'data-textfield-type': this.props.textFieldType, onClick: this.onClicked.bind(this) },
          React.createElement('input', { type: this.props.fieldType, value: this.state.text, onChange: this.onTextChanged.bind(this) })
        );
      }
    }]);

    return SHTextField;
  })(R.Component);

  SHTextField.defaultProps = {
    onUpdate: function onUpdate() {},
    validate: function validate() {
      return true;
    },
    enabled: false,
    valid: true,
    textFieldType: 'default'
  };

  root.shui = root.shui || {};
  root.shui.SHTextField = SHTextField;

  // Some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose lodash to the global object when an AMD loader is present to avoid
    // errors in cases where lodash is loaded by a script tag and not intended
    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
    // more details.
    root.shui = root.shui;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function () {
      return;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
      // Export for Node.js or RingoJS.
      if (moduleExports) {
        freeModule.exports = SHTextField;
      }
      // Export for Rhino with CommonJS support.
      else {
          freeExports.SHTextField = SHTextField;
        }
    } else {
      // Export for a browser or Rhino.
      root.shui = root.shui || {};
      root.shui.SHTextField = SHTextField;
      // root.SHTextField = _;
    }
}).call(undefined, React || {});