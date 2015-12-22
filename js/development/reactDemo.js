var helloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello World</h1>
				<p>This is some text</p>
			</div> );
	}
});
function initReact()
{
	ReactDOM.render(<helloWorld />, document.getElementById("react-container"));
}