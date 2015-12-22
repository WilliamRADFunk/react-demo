var HelloWorld = React.createClass({
	displayName: 'HelloWorld',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Hello World'
			),
			React.createElement(
				'p',
				null,
				'This is some text'
			)
		);
	}
});
function run() {
	ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}