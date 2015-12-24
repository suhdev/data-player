import proxy from "./Utility.js";

module Events {
	export interface Event{
		type: string;
		data: any;

		getType(): string;
		getData(): any;
	}

	export interface EventHandler{
		(event: Event): any;
		(event: Event, extra: any): any;
		(): any;
	}

	export class EventManager {
		events: Array<string>;
		listeners: Object;

		constructor(events:string[]){
			this.events = events;
			this.listeners = {};
		}

		getEvents():string[]{
			return this.events;
		}

		removeListeners():void{
			this.listeners = {};
		}

		addEventListener(evtName:string,listener:EventHandler,ctx:Object):void{
			if (this.events.indexOf(evtName) === -1){
				throw new Error('The object does not support the event "'+evtName+'".');
			}
			this.listeners[evtName] = this.listeners[evtName] || [];
			var fn = ctx?proxy(listener,ctx):listener;
			fn.fn = listener;
			this.listeners[evtName].push(fn);
		}

		removeEventListener(evtName:string,listener:EventHandler):void{
			if (!this.listeners[evtName]){
				throw new Error("Event '"+evtName+"' is not registered.");
			}
			var i:number=0,list=this.listeners[evtName],l=list.length,idx =-1;
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


	trigger(evtName,e:Event){
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