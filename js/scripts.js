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
		if (oldPhase === "phase1") {
			console.log("Changing to phase 2");
			this.setState({ phase1: false });
			this.setState({ phase2: true });
		} else if (oldPhase === "phase2") {
			console.log("Changing to phase 3");
			this.setState({ phase2: false });
			this.setState({ phase3: true });
		} else if (oldPhase === "phase3") {
			console.log("Changing to phase 4");
			this.setState({ phase3: false });
			this.setState({ phase4: true });
		} else {
			console.log("Changing to end phase");
			this.setState({ phase4: false });
		}
	},
	render: function () {
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

	render: function () {
		return this.props.display ? React.createElement(
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

	handleClick: function (event) {
		console.log("Starting...");
		this.props.onPhaseChange("phase1");
	},
	render: function () {
		return this.props.display ? React.createElement(
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