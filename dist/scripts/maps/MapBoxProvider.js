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

  var MapBoxProvider = (function () {
    function MapBoxProvider(props) {
      _classCallCheck(this, MapBoxProvider);

      this.map = null;
    }

    _createClass(MapBoxProvider, [{
      key: 'create',
      value: function create(el, mapOptions) {
        this.map = L.mapbox.map(el, mapOptions.mapId, {
          center: mapOptions.center,
          zoom: mapOptions.zoom || 4
        });
        this.featureGroup = L.featureGroup().addTo(this.map);
      }
    }, {
      key: 'invalidateSize',
      value: function invalidateSize() {
        this.map.invalidateSize.apply(this.map, Array.prototype.slice.call(arguments, 0));
      }
    }, {
      key: 'addMarker',
      value: function addMarker(m, onClick) {
        var marker;
        (marker = L.marker(m.latLng, m.options)).addTo(this.map);
        marker.on('click', onClick(m, marker, this.map));
        return marker;
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

    return MapBoxProvider;
  })();

  MapBoxProvider.defaultProps = {
    onUpdate: function onUpdate() {},
    validate: function validate() {
      return true;
    },
    enabled: false,
    valid: true,
    textFieldType: 'default'
  };

  root.shui = root.shui || {};
  root.shui.maps = root.shui.maps || {};
  root.shui.maps.MapBoxProvider = MapBoxProvider;

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
        freeModule.exports = MapBoxProvider;
      }
      // Export for Rhino with CommonJS support.
      else {
          freeExports.MapBoxProvider = MapBoxProvider;
        }
    } else {
      // Export for a browser or Rhino.
      root.shui = root.shui || {};
      root.shui.SHTextField = SHTextField;
      // root.SHTextField = _;
    }
}).call(undefined, React || {});