var helloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello World</h1>
				<p>This is some text</p>
			</div> );
	}
});
ReactDOM.render(<helloWorld />, document.body);