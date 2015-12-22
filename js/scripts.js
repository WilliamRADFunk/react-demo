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
var Project = React.createClass({
	displayName: 'Project',

	getInitialState: function () {
		return {
			phase1: true,
			phase2: false,
			phase3: false,
			phase4: false
		};
	},
	onPhaseChange: function (oldPhase) {
		console.log("Old phase was " + oldPhase);
	},
	render: function () {
		if (StartButton.value == "dirty") {
			console.log("Let me know.");
		}
		console.log("Hello.");
		return React.createElement(
			'div',
			null,
			React.createElement(Introduction, { display: this.state.phase1 }),
			React.createElement(StartButton, { display: this.state.phase1, onPhaseChange: this.onPhaseChange })
		);
	}
});
var Introduction = React.createClass({
	displayName: 'Introduction',

	getInitialState: function () {
		return { displayMessage: this.props.display };
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
		return { displayMessage: this.props.display };
	},
	handleClick: function (event) {
		console.log("Starting...");
		this.setState({ displayMessage: false });
		this.props.onPhaseChange("phase1");
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
	ReactDOM.render(React.createElement(Project, null), document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}