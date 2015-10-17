// import "./Init.js";
export function proxy(){
	var c = ctx || this,
		args = Array.prototype.slice.call(arguments,2); 
	return function(){
		var a = Array.prototype.slice.call(arguments,0); 
		fn.apply(ctx,args.concat(a)); 
	};
}

// window.suh.util = {};
// window.suh.util.proxy = proxy;