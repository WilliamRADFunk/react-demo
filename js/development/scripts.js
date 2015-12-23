/**********Inline CSS starts here *****************************************************************/
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
/**********Inline CSS ends here *******************************************************************/
/**********Root Element starts here ***************************************************************/
var Project = React.createClass
({
	getInitialState: function()
	{
		return (
		{
			phase1: true,
			phase2: false,
			phase3: false,
			phase4: false
		});
	},
	onPhaseChange: function(oldPhase)
	{
		console.log("Old phase was " + oldPhase); //DEBUG
		if(oldPhase === "phase1")
		{
			console.log("Changing to phase 2"); //DEBUG
			this.setState({phase1:false});
			this.setState({phase2:true});
		}
		else if((oldPhase === "phase2"))
		{
			console.log("Changing to phase 3"); //DEBUG
			this.setState({phase2:false});
			this.setState({phase3:true});
		}
		else if((oldPhase === "phase3"))
		{
			console.log("Changing to phase 4"); //DEBUG
			this.setState({phase3:false});
			this.setState({phase4:true});
		}
		else
		{
			console.log("Changing to end phase"); //DEBUG
			this.setState({phase4:false});
		}
	},
	render: function()
	{
		return (
			<div>
				<Introduction display={this.state.phase1}/>
				<StartButton display={this.state.phase1} onPhaseChange={this.onPhaseChange}/>
				<PersonalityPortion display={this.state.phase2} onPhaseChange={this.onPhaseChange}/>
				<BackgroundInfo display={this.state.phase3} onPhaseChange={this.onPhaseChange}/>
			</div> );
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Phase1 Elements start here *************************************************************/
var Introduction = React.createClass
({
	render: function() {
		return (
			this.props.display ? (
			<div>
				<h1 style={centerBlack}>Discover Your Destined Career Path:</h1>
				<h2 style={leftGreen}>answer the following questions;</h2>
				<h3 style={centerBlue}>solve the puzzles...</h3>
				<h4 style={rightRed}>and discover the truth about your future.</h4>
			</div> ) : null );
	}
});
var StartButton = React.createClass
({
	handleClick: function(event)
	{
		console.log("Starting..."); //DEBUG
		this.props.onPhaseChange("phase1");
	},
	render: function()
	{
		return (this.props.display ? (
			<button id="start-button" onClick={this.handleClick}>
				START!
			</button> ) : null );
	}
});
/**********Phase1 Elements end here ***************************************************************/
/**********Phase2 Elements start here *************************************************************/
var PersonalityPortion = React.createClass
({
	handleClick: function(event)
	{
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase2");
		return false;
	},
	render: function()
	{
		return (this.props.display ? (
			<form name="personality">
				<label>Check the following that apply to you:</label>
				<input name="personality" type="checkbox" value="outdoors" />I don&#39t like feeling cooped up (Outdoor Work)<br/>
				<input name="personality" type="checkbox" value="indoors" />Being outside is over-rated (Indoor Work)<br/>
				<input name="personality" type="checkbox" value="social" />I like working in a team environment (Social)<br/>
				<input name="personality" type="checkbox" value="antisocial" />Other people slow me down. I&#39m a lone wolf (Anti-social)<br/>
				<input name="personality" type="checkbox" value="manual" />I like working and working out simultaneously (Manual Labor)<br/>
				<input name="personality" type="checkbox" value="thoughtless" />Give me a simple, repetitive task anytime (No Real Thinking)<br/>
				<input name="personality" type="checkbox" value="challenge" />Make me work for my money (Mentally Stimulating)<br/>
				<input name="personality" type="checkbox" value="bigbucks" />Show me the money! (High Priority: Money / Low Priority: Job Satisfaction)<br/>
				<input name="personality" type="checkbox" value="satisfaction" />I need passion in my work (High Priority: Job Satisfaction / Low Priority: Money)<br/>
				<input name="personality" type="checkbox" value="freedom" />Give me freedom, or give me a different job (Work Remotely)<br/>
				<button onClick={return this.handleClick}>SUBMIT</button>
			</form> ) : null );
	}
});
/**********Phase2 Elements end here ***************************************************************/
/**********Phase3 Elements start here *************************************************************/
var BackgroundInfo = React.createClass
({
	handleClick: function(event)
	{
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase3");
		return false;
	},
	render: function()
	{
		return (this.props.display ? (
			<form name="background-info">
				<input name="background-info" type="text" />
				<input name="background-info" type="checkbox" value="answer2" />
				<button onClick={this.handleClick}>SUBMIT</button>
			</form> ) : null );
	}
});
/**********Phase3 Elements end here ***************************************************************/
/**********Phase4 Elements start here *************************************************************/




/**********Phase4 Elements end here ***************************************************************/
/**********Loadup JavaScript starts here **********************************************************/
function run()
{
	ReactDOM.render(<Project />, document.getElementById("react-container"));
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
/**********Loadup JavaScript ends here ************************************************************/