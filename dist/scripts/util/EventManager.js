'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
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
		function EventManager(events) {
			_classCallCheck(this, EventManager);

			this.events = events;
			this.listeners = {};
		}

		_createClass(EventManager, [{
			key: 'getEvents',
			value: function getEvents() {
				return this.events;
			}
		}, {
			key: 'removeListeners',
			value: function removeListeners() {
				this.listeners = {};
			}
		}, {
			key: 'addEventListener',
			value: function addEventListener(evtName, listener, ctx) {
				if (this.events.indexOf(evtName) === -1) {
					throw new Error('The object does not support the event "' + evtName + '".');
				}
				this.listeners[evtName] = this.listeners[evtName] || [];
				var fn = ctx ? proxy(listener, ctx) : listener;
				fn.fn = listener;
				this.listeners[evtName].push(fn);
			}
		}, {
			key: 'removeEventListener',
			value: function removeEventListener(evtName, listener) {
				if (!this.listeners[evtName]) {
					throw new Error("Event '" + evtName + "' is not registered.");
				}
				var i = 0,
				    list = this.listeners[evtName],
				    l = list.length,
				    idx = -1;
				for (; i < l; i++) {
					if (list[i].fn === listener) {
						idx = i;
						break;
					}
				}
				if (i !== -1) {
					this.listeners[evtName].splice(i, 1);
				}
			}
		}, {
			key: 'trigger',
			value: function trigger(evtName, e) {
				if (this.listeners[evtName]) {
					var list = this.listeners[evtName],
					    i,
					    l;
					for (i = 0, l = list.length; i < l; i++) {
						list[i](e);
					}
				}
			}
		}, {
			key: 'on',
			value: function on(evt, fn, ctx) {
				return this.addEventListener(evt, fn, ctx);
			}
		}, {
			key: 'off',
			value: function off(evtName, listener) {
				return this.removeEventListener(evtName, listener);
			}
		}]);

		return EventManager;
	})();

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
		define(function () {
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
		} else {
			// Export for a browser or Rhino.
			root.shui = root.shui || {};
			root.shui.util = root.shui.util || {};
			root.shui.util.EventManager = EventManager;
		}
}).call(undefined);