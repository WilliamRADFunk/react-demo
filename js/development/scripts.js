var centerBlack = {
	color: 'black',
	textAlign: 'center'
};
var centerBlue = {
	color: 'blue',
	textAlign: 'center'
};
var leftGreen = {
	color: 'green',
	textAlign: 'left'
};
var rightRed = {
	color: 'red',
	textAlign: 'right'
};
var Introduction = React.createClass({
	statics:
	{
		changeState: function(newState)
		{
			this.setState({displayMessage: false});
		}
	},
	getInitialState: function()
	{
		return {displayMessage: true};
	},
	render: function() {
		return (this.state.displayMessage ? (
			<div>
				<h1 style={centerBlack}>Discover Your Destined Career Path:</h1>
				<h2 style={leftGreen}>answer the following questions;</h2>
				<h3 style={centerBlue}>solve the puzzles...</h3>
				<h4 style={rightRed}>and discover the truth about your future.</h4>
			</div> ) : null);
	}
});
var StartButton = React.createClass
({
	getInitialState: function()
	{
		return {displayMessage: true};
	},
	handleClick: function(event)
	{
		console.log("Starting...");
		this.setState({displayMessage: false});
		Introduction.setState({displayMessage: false});
	},
	render: function()
	{
		return (this.state.displayMessage ? (
			<button id="start-button" onClick={this.handleClick}>
				START!
			</button> ) : null);
	}
});
function run()
{
	ReactDOM.render(<div>
						<Introduction />
						<StartButton />
					</div>, document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body)
{
	run();
}
else
{
	window.addEventListener('DOMContentLoaded', run, false);
}