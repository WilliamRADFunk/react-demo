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

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				{ style: centerBlack },
				'Discover Your Secret Identity'
			),
			React.createElement(
				'h2',
				{ style: leftGreen },
				'Answer the following questions;'
			),
			React.createElement(
				'h3',
				{ style: centerBlue },
				'solve the puzzles...'
			),
			React.createElement(
				'h4',
				{ style: rightRed },
				'and discover the truth about yourself.'
			)
		);
	}
});
var StartButton = React.createClass({
	displayName: 'StartButton',

	render: function () {
		return React.createElement(
			'button',
			{ id: 'start-button' },
			'START!'
		);
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