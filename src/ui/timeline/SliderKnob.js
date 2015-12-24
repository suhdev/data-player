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
  class SHSliderNob extends R.Component {
    constructor(props){
      super(props);
      this.state = {
        position:props.position
      };
    }

    onMouseDown(e){
      this.props.slider.startDragging();
    }

    onTooltipMounted(e){
      this._tooltip = e;
    }

    setPosition(e){
      var el = ReactDOM.findDOMNode(this);
      $(el).css('left',e);
      this._tooltip.setText((parseInt(e).toFixed(2)));
    }

    render(){
      return (
        <div className="shui-slider-nob" onMouseDown={this.onMouseDown.bind(this)}>
          <SliderTooltip text={this.props.position} ref={this.onTooltipMounted.bind(this)} />
        </div>
        );
    }
  }
	

  SHSliderNob.defaultProps = {
    onUpdate:function(){},
    validate:function(){return true},
    enabled:false,
    valid:true,
    textFieldType:'default'
  }

	root.shui = root.shui || {}
	root.shui.SHSliderNob = SHSliderNob;

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
      return SHSliderNob;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      freeModule.exports = SHSliderNob;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports.SHSliderNob = SHSliderNob;
    }
  }
  else {
    // Export for a browser or Rhino.
    root.shui = root.shui || {};
    root.shui.SHSliderNob = SHSliderNob;
    // root.SHTextField = _;
  }

}.call(this,React||{}));