// import "./Init.js";
import EventManager from "./EventManager.js";

export default class Timer extends EventManager{
	constructor(timeSpan,max){
		super(['resumed','paused','tick','stopped','started']);
		this._timeSpan = timeSpan || 200;
		this._max = max || 0;
		this._step = 0;
		this._players = [];
	}

	addPlayer(player){
		if (player.update && typeof player.update === "function"){
			this._players.push(player);
			return true;
		}
		return false;
	}

	setTimeSpan(timespan){
		this._timeSpan = timespan;
	}

	_update(step){
		if (this._players.length > 0){
			for(var i=0,l=this._players.length;i<l;i++){
				this._players[i].update(step);
			}
		}
	}

	removePlayer(player){
		var idx = this._players.indexOf(player); 
		if (idx !== -1){
			this._players.splice(idx,1);
			return true;
		}
		return false;
	}

	start(){
		this._step = 0;
		this._max = max || this._max;
		this.resume(true);
		this.trigger('started',{});
	}

	pause(){
		if (this._timer === -1){
			return false;
		}
		clearInterval(this._timer);
		this._timer = -1;
		if(!force){
			this.trigger("paused",{
				step:this._step
			});
		}
	}

	setMax(max){
		this._max = max;
	}

	resume(force){
		if (this._timer !== -1){
			this.stop();
			clearInterval(this._timer);
		}
		if (!force){
			this.trigger("resumed",{
				step:this._step
			});
		}
		this._timer = setInterval(proxy(this.tick,this),this._timeSpan);
	}

	stop(){
		this.pause(true);
		this._step = 0;
		this.trigger('stopped',{
			
		});
		this._update(0);
	}

	next(){
		this.pause();
		if (this._step < (this._max-1)){
			this._step++;
			this.trigger('change',{
				step:this._step
			});
			this._update(this._step);
		}
	}

	prev(){
		this.pause();
		if (this._step > 0){
			this._step--;
			this._update(this._step);
			this.trigger('change',{
				step:this._step
			});
		}
	}

	setStep(step){
		this._step = step;
		this.pause();
		this._step = (step<0)?this._max+step:(step>=this._max)?this._max-step:step;
		this._update(this._step);
	}

	getStep(){
		return this._step;
	}

	tick(){
		this._step++;
		if (this._step >= this._max){
			clearInterval(this._timer);
			this._timer = -1;
			this._step = 0;
			return false;
		}
		this._update(this._step);
		this.trigger('tick',{
			index:this._step
		});
	}
}

// window.suh.Timer = Timer;