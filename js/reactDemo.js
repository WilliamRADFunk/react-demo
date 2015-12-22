var helloWorld = React.createClass({
	displayName: "helloWorld",

	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Hello World"
			),
			React.createElement(
				"p",
				null,
				"This is some text"
			)
		);
	}
});
function initReact() {
	ReactDOM.render(React.createElement("helloWorld", null), document.getElementById("react-container"));
}