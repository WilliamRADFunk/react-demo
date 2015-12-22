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
	displayName: 'Introduction',

	statics: {
		changeState: function (newState) {
			this.setState({ displayMessage: false });
		}
	},
	getInitialState: function () {
		return { displayMessage: true };
	},
	render: function () {
		return this.state.displayMessage ? React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				{ style: centerBlack },
				'Discover Your Destined Career Path:'
			),
			React.createElement(
				'h2',
				{ style: leftGreen },
				'answer the following questions;'
			),
			React.createElement(
				'h3',
				{ style: centerBlue },
				'solve the puzzles...'
			),
			React.createElement(
				'h4',
				{ style: rightRed },
				'and discover the truth about your future.'
			)
		) : null;
	}
});
var StartButton = React.createClass({
	displayName: 'StartButton',

	getInitialState: function () {
		return { displayMessage: true };
	},
	handleClick: function (event) {
		console.log("Starting...");
		this.setState({ displayMessage: false });
		Introduction.setState({ displayMessage: false });
	},
	render: function () {
		return this.state.displayMessage ? React.createElement(
			'button',
			{ id: 'start-button', onClick: this.handleClick },
			'START!'
		) : null;
	}
});
function run() {
	ReactDOM.render(React.createElement(
		'div',
		null,
		React.createElement(Introduction, null),
		React.createElement(StartButton, null)
	), document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}