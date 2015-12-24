'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

  var EventManager = (function () {
    function EventManager(events, strict) {
      _classCallCheck(this, EventManager);

      this.events = events;
      this.__id = 0;
      this.listeners = {};
      this.strict = strict || false;
    }

    _createClass(EventManager, [{
      key: 'addEventListener',
      value: function addEventListener(eventName, fn, ctx) {
        var fx = this.strict && this.events.indexOf(eventName) !== -1 && fn || !this.strict && fn;
        if (!fx) {
          throw new Error('The provided event is not registered or the callback is invalid.');
        }
        (this.listeners[eventName] = this.listeners[eventName] || []).push(f);
      }
    }, {
      key: 'setEnabled',
      value: function setEnabled(enabled) {
        this.setState({
          enabled: enabled
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
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          { className: 'shui-button', 'data-state': this.state.enabled ? 'enabled' : 'disabled', 'data-button-type': this.props.buttonType, onClick: this.onClicked.bind(this) },
          React.createElement('i', { className: "shui-button-icon " + this.props.icon }),
          React.createElement(
            'span',
            { className: 'shui-button-label' },
            this.props.label
          )
        );
      }
    }]);

    return EventManager;
  })();

  EventManager.defaultProps = {
    events: []
  };

  root.shui = root.shui || {};
  root.shui.EventManager = EventManager;

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
      return SHButton;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
      // Export for Node.js or RingoJS.
      if (moduleExports) {
        freeModule.exports = SHButton;
      }
      // Export for Rhino with CommonJS support.
      else {
          freeExports.SHButton = SHButton;
        }
    } else {
      // Export for a browser or Rhino.
      root.shui = root.shui || {};
      root.shui.SHButton = SHButton;
      // root.SHButton = _;
    }
}).call(undefined, React || {});