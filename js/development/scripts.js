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
	onPersonalityChange: function(data)
	{
		console.log("Personality Components are " + data); //DEBUG
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
				<PersonalityPortion onPersonalityChange={this.onPersonalityChange} display={this.state.phase2} onPhaseChange={this.onPhaseChange}/>
				<CharacterPortion display={this.state.phase3} onPhaseChange={this.onPhaseChange}/>
				<BackgroundPortion display={this.state.phase4} onPhaseChange={this.onPhaseChange}/>
			</div> );
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Phase1 Elements start here *************************************************************/
var Introduction = React.createClass
({
	renderDisplay: function()
	{
		return (
			<div>
				<h1 style={centerBlack}>Discover Your Destined Career Path:</h1>
				<h2 style={leftGreen}>answer the following questions;</h2>
				<h3 style={centerBlue}>solve the puzzles...</h3>
				<h4 style={rightRed}>and discover the truth about your future.</h4>
			</div> );
	},
	render: function()
	{
		return (this.props.display ? this.renderDisplay() : null );
	}
});
var StartButton = React.createClass
({
	handleClick: function(event)
	{
		this.props.onPhaseChange("phase1");
	},
	renderDisplay: function()
	{
		return (
			<button id="start-button" onClick={this.handleClick}>
				START!
			</button> );
	},
	render: function()
	{
		return (this.props.display ? this.renderDisplay() : null );
	}
});
/**********Phase1 Elements end here ***************************************************************/
/**********Phase2 Elements start here *************************************************************/
var PersonalityPortion = React.createClass
({
	handleClick: function(event)
	{
		var data = [];
		var listItems = $("#personality-form li");
		listItems.each(function(index, li) { if(li.firstChild.checked) data.push(li.firstChild.value); });
		this.props.onPersonalityChange(data);
		this.props.onPhaseChange("phase2");
		killEvent(event);
	},
	renderDisplay: function()
	{
		return (
			<form name="personality">
				<label>Check the following that apply to you:</label>
				<ul id="personality-form">
					<li><input name="personality" type="checkbox" value="outdoors" />I don&#39;t like feeling cooped up (Outdoor Work)</li>
					<li><input name="personality" type="checkbox" value="indoors" />Being outside is over-rated (Indoor Work)</li>
					<li><input name="personality" type="checkbox" value="social" />I like working in a team environment (Social)</li>
					<li><input name="personality" type="checkbox" value="antisocial" />Other people slow me down. I&#39;m a lone wolf (Anti-social)</li>
					<li><input name="personality" type="checkbox" value="manual" />I like working and working out simultaneously (Manual Labor)</li>
					<li><input name="personality" type="checkbox" value="thoughtless" />Give me a simple, repetitive task anytime (No Real Thinking)</li>
					<li><input name="personality" type="checkbox" value="challenge" />Make me work for my money (Mentally Stimulating)</li>
					<li><input name="personality" type="checkbox" value="bigbucks" />Show me the money! (High Priority: Money / Low Priority: Job Satisfaction)</li>
					<li><input name="personality" type="checkbox" value="satisfaction" />I need passion in my work (High Priority: Job Satisfaction / Low Priority: Money)</li>
					<li><input name="personality" type="checkbox" value="freedom" />Give me freedom, or give me a different job (Work Remotely)</li>
				</ul>
				<button onClick={this.handleClick}>SUBMIT</button>
			</form> );
	},
	render: function()
	{
		return (this.props.display ? this.renderDisplay() : null );
	}
});
/**********Phase2 Elements end here ***************************************************************/
/**********Phase3 Elements start here *************************************************************/
var CharacterPortion = React.createClass
({
	handleClick: function(event)
	{
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase3");
		killEvent(event);
	},
	renderDisplay: function()
	{
		return (
			<form name="character-info-strong">
				<div id="strongest-characteristic">
					<label>What&#39;s your strongest character trait?</label>
					<ul>
						<input name="character-info-strong" type="radio" value="independence" />Independence
						<input name="character-info-strong" type="radio" value="courage" />Courage
						<input name="character-info-strong" type="radio" value="trustworthiness" />Trustworthiness
						<input name="character-info-strong" type="radio" value="punctuality" />Punctuality
						<input name="character-info-strong" type="radio" value="reliability" />Reliability
						<input name="character-info-strong" type="radio" value="kind" />Kind-Hearted
						<input name="character-info-strong" type="radio" value="independence" />Independence
						<input name="character-info-strong" type="radio" value="courage" />Courage
						<input name="character-info-strong" type="radio" value="independence" />Independence
						<input name="character-info-strong" type="radio" value="courage" />Courage

					</ul>
				</div>
				<div id="weakest-characteristic">

				</div>
				<button onClick={this.handleClick}>SUBMIT</button>
			</form> );
	},
	render: function()
	{
		return (this.props.display ? this.renderDisplay() : null );
	}
});
/**********Phase3 Elements end here ***************************************************************/
/**********Phase4 Elements start here *************************************************************/
var BackgroundPortion = React.createClass
({
	handleClick: function(event)
	{
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase4");
		killEvent(event);
	},
	renderDisplay: function()
	{
		return (
			<form name="background-info">
				<input name="background-info" type="text" />
				<input name="background-info" type="checkbox" value="answer2" />
				<button onClick={this.handleClick}>SUBMIT</button>
			</form> );
	},
	render: function()
	{
		return (this.props.display ? this.renderDisplay() : null );
	}
});
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
/**********Anytime JavaScript starts here *********************************************************/
function killEvent(e)
{
	e.preventDefault();
    e.stopPropagation();
}
/**********Anytime JavaScript ends here ***********************************************************/