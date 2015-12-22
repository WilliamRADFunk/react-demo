var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello World</h1>
				<p>This is some text</p>
			</div> );
	}
});
function run()
{
	ReactDOM.render(<HelloWorld />, document.getElementById("react-container"));
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