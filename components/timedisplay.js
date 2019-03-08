

class TimeDisplay{
	constructor( targetTimeDisplay ){
		this.currentTime = new Date();
		this.availableDisplayModes = ['12 hour', '24 hour'];
		this.currentDisplayMode = 0;
		this.displayObjects = [];
		this.parentElement = $( targetTimeDisplay );
		this.neededDisplayElements = 4;
	}
	createDisplayObjects(){
		for( var displayIndex = 0; displayIndex < this.neededDisplayElements; displayIndex++){
			var display = new DisplaySquare( this.handleChildClick );
			this.displayObjects.push( display );
			var displayDomElement = display.render();
			this.parentElement.append( displayDomElement );
		}
	}
	handleChildClick(){

	}
}