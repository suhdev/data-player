(function(){
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
	class EventManager {

		constructor(events){
			this.events = events;
			this.listeners = {};
		}

		getEvents(){
			return this.events;
		}

		removeListeners(){
			this.listeners = {};
		}

		addEventListener(evtName,listener,ctx){
			if (this.events.indexOf(evtName) === -1){
				throw new Error('The object does not support the event "'+evtName+'".');
			}
			this.listeners[evtName] = this.listeners[evtName] || [];
			var fn = ctx?proxy(listener,ctx):listener;
			fn.fn = listener;
			this.listeners[evtName].push(fn);
		}

		removeEventListener(evtName,listener):void{
			if (!this.listeners[evtName]){
				throw new Error("Event '"+evtName+"' is not registered.");
			}
			var i=0,list=this.listeners[evtName],l=list.length,idx =-1;
			for(;i<l;i++){
				if (list[i].fn === listener){
					idx = i;
					break;
				}
			}
			if (i !== -1){
				this.listeners[evtName].splice(i,1);
			}
		}


		trigger(evtName,e){
			if (this.listeners[evtName]){
				var list = this.listeners[evtName],i,l;
				for(i=0,l=list.length;i<l;i++){
					list[i](e);
				}
			}
		}
		
		on(evt,fn,ctx){
			return this.addEventListener(evt,fn,ctx);
		}

		off(evtName,listener){
			return this.removeEventListener(evtName,listener);
		}
	}


	root.shui = root.shui || {};
	root.shui.util = root.shui.util || {};
	root.shui.util.EventManager = EventManager;

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
      return root.shui.EventManager;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      freeModule.exports = EventManager;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports.EventManager = EventManager;
    }
  }
  else {
    // Export for a browser or Rhino.
    root.shui = root.shui || {};
    root.shui.util = root.shui.util || {};
    root.shui.util.EventManager = EventManager;
  }

}.call(this));