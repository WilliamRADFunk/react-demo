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
	render: function() {
		return (
			<div>
				<h1 style={centerBlack}>Discover Your Secret Identity</h1>
				<h2 style={leftGreen}>Answer the following questions;</h2>
				<h3 style={centerBlue}>solve the puzzles...</h3>
				<h4 style={rightRed}>and discover the truth about yourself.</h4>
			</div> );
	}
});
var StartButton = React.createClass({
	start: function() {
		console.log("Starting...");
	},
	render: function() {
		return (
			<button id="start-button" onclick={this.start}>
				START!
			</button> );
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