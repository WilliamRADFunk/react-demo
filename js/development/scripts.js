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
var Project = React.createClass
({
	getInitialState: function()
	{
		return (
		{
			phase1: true,
			phase2: false,
			phase3: false,
			phase4: false
		});
	},
	onPhaseChange: function(oldPhase)
	{
		console.log("Old phase was " + oldPhase);
	},
	render: function()
	{
		if(StartButton.value == "dirty")
		{
			console.log("Let me know.");
		}
		console.log("Hello.");
		return (
			<div>
				<Introduction display={this.state.phase1} />
				<StartButton display={this.state.phase1} onPhaseChange={this.onPhaseChange}/>
			</div> );
	}
});
var Introduction = React.createClass
({
	getInitialState: function()
	{
		return {displayMessage: this.props.display};
	},
	render: function() {
		return (
			this.state.displayMessage ? (
			<div>
				<h1 style={centerBlack}>Discover Your Destined Career Path:</h1>
				<h2 style={leftGreen}>answer the following questions;</h2>
				<h3 style={centerBlue}>solve the puzzles...</h3>
				<h4 style={rightRed}>and discover the truth about your future.</h4>
			</div> ) : null );
	}
});
var StartButton = React.createClass
({
	getInitialState: function()
	{
		return {displayMessage: this.props.display};
	},
	handleClick: function(event)
	{
		console.log("Starting...");
		this.setState({displayMessage: false});
		this.props.onPhaseChange("phase1");
	},
	render: function()
	{
		return (this.state.displayMessage ? (
			<button id="start-button" onClick={this.handleClick}>
				START!
			</button> ) : null );
	}
});
function run()
{
	ReactDOM.render(<Project />, document.getElementById("react-container"));
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