

class DisplaySquare{
	constructor( clickCallbackFunction ){
		this.clickCallback = clickCallbackFunction;
		this.domElements = {
			container: null,
			displayText: null
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		console.log('display was clicked');
		this.clickCallback( this );
	}
	changeText( newText ){
		this.domElements.displayText.text( newText );
	}
	render(){
		var container = $("<div>",{
			'class': 'displayContainer',
			on: {
				click: this.handleClick
			}
		});
		var textDisplay = $("<div>",{
			'class': 'displayText',
			text: '?'
		});
		container.append(textDisplay);
		this.domElements.container = container;
		this.domElements.displayText = textDisplay;
		return this.domElements.container;
	}
}