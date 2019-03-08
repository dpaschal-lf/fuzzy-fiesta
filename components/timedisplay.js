

class TimeDisplay{
	constructor( targetTimeDisplay ){
		this.currentTime = new Date();
		this.availableDisplayModes = ['12 hour', '24 hour'];
		this.currentDisplayMode = 0;
		this.displayObjects = [];
		this.parentElement = $( targetTimeDisplay );
	}
}