(function(R){
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
  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	class SHMapView extends R.Component{
		constructor(props){
			super(props);
			this.props = props;
      this.state = {
        enabled:props.enabled
      };
		}

    setEnabled(enabled){
      this.setState({
        enabled:enabled
      });
    }

    onClicked(evt){
      if (!this.state.enabled){
        return false;
      }
    }

    componentDidMound(){
      var provider = this.props.mapProvider;
      if (!provider){
        throw new Error("No map provider");
      }
      this.map = provider.createMap(this.findDOMNode(),this.props.mapOptions); 
    }

		render(){
			return (
				<div className="shui-mapview" data-state={this.state.enabled?'enabled':'disabled'} data-mapview-type={this.props.mapviewType} onClick={this.onClicked.bind(this)} >
					
				</div>
				);
		}
	}

  SHMapView.defaultProps = {
      enabled:false,
      buttonType:'default',
  }

	root.shui = root.shui || {}
	root.shui.SHMapView = SHMapView;

	// Some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose lodash to the global object when an AMD loader is present to avoid
    // errors in cases where lodash is loaded by a script tag and not intended
    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
    // more details.
    root.shui = root.shui;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function() {
      return SHMapView;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      freeModule.exports = SHMapView;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports.SHMapView = SHMapView;
    }
  }
  else {
    // Export for a browser or Rhino.
    root.shui = root.shui || {};
    root.shui.SHMapView = SHMapView;
    // root.SHButton = _;
  }

}.call(this,React||{}));