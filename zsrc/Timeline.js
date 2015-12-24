class Timeline {
	constructor(items){
		this.name = 'Suhail';
		this.playing = false;
		this.buttons = {};
		this.timelineMap = new TimelineMap();
	}

	onButtonClicked(e,btnComponent,iconComponent){
		var k = btnComponent.props.buttonKey;
		k =  'on'+k.substr(0,1).toUpperCase()+k.substr(1)+'Clicked';
		this[k](e,btnComponent,iconComponent);
	}

	onPlayClicked(e,btnComponent,iconComponent){
		this.playing = !this.playing;
		iconComponent.setAlternative(this.playing);
	}

	onPrevClicked(){
		
	}

	onNextClicked(){

	}

	onStopClicked(){
		this.playing = false;
		this.buttons.play._iconComponent.setAlternative(false);

	}

	onButtonMounted(key,button){
		this.buttons[key] = button;
	}
	
	render(parentEl){
		this.el = parentEl || $('body').get(0);
		this.el = $(this.el);
		this.timelineMap.render();
		this.component = ReactDOM.render(<TimelineComponent items={['Name','Age','Gender']} controller={this} />,this.el.get(0));
	}
}

var timeline = new Timeline(); 
timeline.render($('#canvas').get(0));
