import proxy from "./Utility.js";

export default class EventManager {
	constructor(events){
		this.events = events;
	}

	getEvents(){
		return this.events;
	}

	addEventListener(evtName,listener,ctx){
		if (this.events.indexOf(evtName) === -1){
			throw new Error('The object does not support the event "'+evtName+'".');
		}
		this.listeners = this.listeners || {};
		this.listeners[evtName] = this.listeners[evtName] || [];
		var fn = ctx?proxy(listener,ctx):listener;
		fn.fn = listener;
		this.listeners[evtName].push(fn);
	}

	removeEventListener(evtName,listener){
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