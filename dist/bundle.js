(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/create"),__esModule:!0};

},{"core-js/library/fn/object/create":10}],2:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/define-property"),__esModule:!0};

},{"core-js/library/fn/object/define-property":11}],3:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0};

},{"core-js/library/fn/object/get-own-property-descriptor":12}],4:[function(require,module,exports){
module.exports={"default":require("core-js/library/fn/object/set-prototype-of"),__esModule:!0};

},{"core-js/library/fn/object/set-prototype-of":13}],5:[function(require,module,exports){
"use strict";exports["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},exports.__esModule=!0;

},{}],6:[function(require,module,exports){
"use strict";var _Object$defineProperty=require("babel-runtime/core-js/object/define-property")["default"];exports["default"]=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),_Object$defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),exports.__esModule=!0;

},{"babel-runtime/core-js/object/define-property":2}],7:[function(require,module,exports){
"use strict";var _Object$getOwnPropertyDescriptor=require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];exports["default"]=function(e,r,t){for(var o=!0;o;){var i=e,u=r,n=t;v=c=a=void 0,o=!1,null===i&&(i=Function.prototype);var v=_Object$getOwnPropertyDescriptor(i,u);if(void 0!==v){if("value"in v)return v.value;var a=v.get;return void 0===a?void 0:a.call(n)}var c=Object.getPrototypeOf(i);if(null===c)return void 0;e=c,r=u,t=n,o=!0}},exports.__esModule=!0;

},{"babel-runtime/core-js/object/get-own-property-descriptor":3}],8:[function(require,module,exports){
"use strict";var _Object$create=require("babel-runtime/core-js/object/create")["default"],_Object$setPrototypeOf=require("babel-runtime/core-js/object/set-prototype-of")["default"];exports["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=_Object$create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_Object$setPrototypeOf?_Object$setPrototypeOf(e,t):e.__proto__=t)},exports.__esModule=!0;

},{"babel-runtime/core-js/object/create":1,"babel-runtime/core-js/object/set-prototype-of":4}],9:[function(require,module,exports){
"use strict";exports["default"]=function(e){return e&&e.__esModule?e:{"default":e}},exports.__esModule=!0;

},{}],10:[function(require,module,exports){
var $=require("../../modules/$");module.exports=function(e,r){return $.create(e,r)};

},{"../../modules/$":25}],11:[function(require,module,exports){
var $=require("../../modules/$");module.exports=function(e,r,u){return $.setDesc(e,r,u)};

},{"../../modules/$":25}],12:[function(require,module,exports){
var $=require("../../modules/$");require("../../modules/es6.object.get-own-property-descriptor"),module.exports=function(e,r){return $.getDesc(e,r)};

},{"../../modules/$":25,"../../modules/es6.object.get-own-property-descriptor":29}],13:[function(require,module,exports){
require("../../modules/es6.object.set-prototype-of"),module.exports=require("../../modules/$.core").Object.setPrototypeOf;

},{"../../modules/$.core":17,"../../modules/es6.object.set-prototype-of":30}],14:[function(require,module,exports){
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};

},{}],15:[function(require,module,exports){
var isObject=require("./$.is-object");module.exports=function(e){if(!isObject(e))throw TypeError(e+" is not an object!");return e};

},{"./$.is-object":24}],16:[function(require,module,exports){
var toString={}.toString;module.exports=function(t){return toString.call(t).slice(8,-1)};

},{}],17:[function(require,module,exports){
var core=module.exports={version:"1.2.1"};"number"==typeof __e&&(__e=core);

},{}],18:[function(require,module,exports){
var aFunction=require("./$.a-function");module.exports=function(n,r,t){if(aFunction(n),void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,u){return n.call(r,t,u)};case 3:return function(t,u,e){return n.call(r,t,u,e)}}return function(){return n.apply(r,arguments)}};

},{"./$.a-function":14}],19:[function(require,module,exports){
var global=require("./$.global"),core=require("./$.core"),PROTOTYPE="prototype",ctx=function(e,o){return function(){return e.apply(o,arguments)}},$def=function(e,o,n){var f,t,r,c,l=e&$def.G,$=e&$def.P,d=l?global:e&$def.S?global[o]:(global[o]||{})[PROTOTYPE],i=l?core:core[o]||(core[o]={});l&&(n=o);for(f in n)t=!(e&$def.F)&&d&&f in d,t&&f in i||(r=t?d[f]:n[f],l&&"function"!=typeof d[f]?c=n[f]:e&$def.B&&t?c=ctx(r,global):e&$def.W&&d[f]==r?!function(e){c=function(o){return this instanceof e?new e(o):e(o)},c[PROTOTYPE]=e[PROTOTYPE]}(r):c=$&&"function"==typeof r?ctx(Function.call,r):r,i[f]=c,$&&((i[PROTOTYPE]||(i[PROTOTYPE]={}))[f]=r))};$def.F=1,$def.G=2,$def.S=4,$def.P=8,$def.B=16,$def.W=32,module.exports=$def;

},{"./$.core":17,"./$.global":22}],20:[function(require,module,exports){
module.exports=function(o){if(void 0==o)throw TypeError("Can't call method on  "+o);return o};

},{}],21:[function(require,module,exports){
module.exports=function(r){try{return!!r()}catch(t){return!0}};

},{}],22:[function(require,module,exports){
var UNDEFINED="undefined",global=module.exports=typeof window!=UNDEFINED&&window.Math==Math?window:typeof self!=UNDEFINED&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global);

},{}],23:[function(require,module,exports){
var cof=require("./$.cof");module.exports=0 in Object("z")?Object:function(e){return"String"==cof(e)?e.split(""):Object(e)};

},{"./$.cof":16}],24:[function(require,module,exports){
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};

},{}],25:[function(require,module,exports){
var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach};

},{}],26:[function(require,module,exports){
module.exports=function(e,r){var c=require("./$.def"),i=(require("./$.core").Object||{})[e]||Object[e],t={};t[e]=r(i),c(c.S+c.F*require("./$.fails")(function(){i(1)}),"Object",t)};

},{"./$.core":17,"./$.def":19,"./$.fails":21}],27:[function(require,module,exports){
var getDesc=require("./$").getDesc,isObject=require("./$.is-object"),anObject=require("./$.an-object"),check=function(e,t){if(anObject(e),!isObject(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,c){try{c=require("./$.ctx")(Function.call,getDesc(Object.prototype,"__proto__").set,2),c(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,r){return check(e,r),t?e.__proto__=r:c(e,r),e}}({},!1):void 0),check:check};

},{"./$":25,"./$.an-object":15,"./$.ctx":18,"./$.is-object":24}],28:[function(require,module,exports){
var IObject=require("./$.iobject"),defined=require("./$.defined");module.exports=function(e){return IObject(defined(e))};

},{"./$.defined":20,"./$.iobject":23}],29:[function(require,module,exports){
var toIObject=require("./$.to-iobject");require("./$.object-sap")("getOwnPropertyDescriptor",function(t){return function(e,r){return t(toIObject(e),r)}});

},{"./$.object-sap":26,"./$.to-iobject":28}],30:[function(require,module,exports){
var $def=require("./$.def");$def($def.S,"Object",{setPrototypeOf:require("./$.set-proto").set});

},{"./$.def":19,"./$.set-proto":27}],31:[function(require,module,exports){
"use strict";var _createClass=require("babel-runtime/helpers/create-class")["default"],_classCallCheck=require("babel-runtime/helpers/class-call-check")["default"],_interopRequireDefault=require("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(exports,"__esModule",{value:!0});var _UtilityJs=require("./Utility.js"),_UtilityJs2=_interopRequireDefault(_UtilityJs),EventManager=function(){function e(t){_classCallCheck(this,e),this.events=t}return _createClass(e,[{key:"getEvents",value:function(){return this.events}},{key:"addEventListener",value:function(e,t,r){if(-1===this.events.indexOf(e))throw new Error('The object does not support the event "'+e+'".');this.listeners=this.listeners||{},this.listeners[e]=this.listeners[e]||[];var s=r?(0,_UtilityJs2["default"])(t,r):t;s.fn=t,this.listeners[e].push(s)}},{key:"removeEventListener",value:function(e,t){if(!this.listeners[e])throw new Error("Event '"+e+"' is not registered.");for(var r=0,s=this.listeners[e],i=s.length,n=-1;i>r;r++)if(s[r].fn===t){n=r;break}-1!==r&&this.listeners[e].splice(r,1)}},{key:"trigger",value:function(e,t){if(this.listeners[e]){var r,s,i=this.listeners[e];for(r=0,s=i.length;s>r;r++)i[r](t)}}},{key:"on",value:function(e,t,r){return this.addEventListener(e,t,r)}},{key:"off",value:function(e,t){return this.removeEventListener(e,t)}}]),e}();exports["default"]=EventManager,module.exports=exports["default"];

},{"./Utility.js":33,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/interop-require-default":9}],32:[function(require,module,exports){
"use strict";var _get=require("babel-runtime/helpers/get")["default"],_inherits=require("babel-runtime/helpers/inherits")["default"],_createClass=require("babel-runtime/helpers/create-class")["default"],_classCallCheck=require("babel-runtime/helpers/class-call-check")["default"],_interopRequireDefault=require("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(exports,"__esModule",{value:!0});var _EventManagerJs=require("./EventManager.js"),_EventManagerJs2=_interopRequireDefault(_EventManagerJs),Timer=function(e){function t(e,s){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,["resumed","paused","tick","stopped","started"]),this._timeSpan=e||200,this._max=s||0,this._step=0,this._players=[]}return _inherits(t,e),_createClass(t,[{key:"addPlayer",value:function(e){return e.update&&"function"==typeof e.update?(this._players.push(e),!0):!1}},{key:"setTimeSpan",value:function(e){this._timeSpan=e}},{key:"_update",value:function(e){if(this._players.length>0)for(var t=0,s=this._players.length;s>t;t++)this._players[t].update(e)}},{key:"removePlayer",value:function(e){var t=this._players.indexOf(e);return-1!==t?(this._players.splice(t,1),!0):!1}},{key:"start",value:function(){this._step=0,this._max=max||this._max,this.resume(!0),this.trigger("started",{})}},{key:"pause",value:function(){return-1===this._timer?!1:(clearInterval(this._timer),this._timer=-1,void(force||this.trigger("paused",{step:this._step})))}},{key:"setMax",value:function(e){this._max=e}},{key:"resume",value:function(e){-1!==this._timer&&(this.stop(),clearInterval(this._timer)),e||this.trigger("resumed",{step:this._step}),this._timer=setInterval(proxy(this.tick,this),this._timeSpan)}},{key:"stop",value:function(){this.pause(!0),this._step=0,this.trigger("stopped",{}),this._update(0)}},{key:"next",value:function(){this.pause(),this._step<this._max-1&&(this._step++,this.trigger("change",{step:this._step}),this._update(this._step))}},{key:"prev",value:function(){this.pause(),this._step>0&&(this._step--,this._update(this._step),this.trigger("change",{step:this._step}))}},{key:"setStep",value:function(e){this._step=e,this.pause(),this._step=0>e?this._max+e:e>=this._max?this._max-e:e,this._update(this._step)}},{key:"getStep",value:function(){return this._step}},{key:"tick",value:function(){return this._step++,this._step>=this._max?(clearInterval(this._timer),this._timer=-1,this._step=0,!1):(this._update(this._step),void this.trigger("tick",{index:this._step}))}}]),t}(_EventManagerJs2["default"]);exports["default"]=Timer,module.exports=exports["default"];

},{"./EventManager.js":31,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":7,"babel-runtime/helpers/inherits":8,"babel-runtime/helpers/interop-require-default":9}],33:[function(require,module,exports){
"use strict";function proxy(){var r=(ctx||this,Array.prototype.slice.call(arguments,2));return function(){var t=Array.prototype.slice.call(arguments,0);fn.apply(ctx,r.concat(t))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.proxy=proxy;

},{}]},{},[32]);
