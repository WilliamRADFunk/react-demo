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
			phase4: false,
			phase5: false
		});
	},
	onPersonalityChange: function(data)
	{
		console.log("Personality Components are " + data); //DEBUG
		digestPersonality(data);
	},
	onCharacterChange: function(data)
	{
		console.log("Character Components are " + data); //DEBUG
		digestCharacter(data);
	},
	onTimeManagementChange: function(data)
	{
		console.log("Character Components are " + data); //DEBUG
		digestTimeManagement(data);
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
		else if((oldPhase === "phase4"))
		{
			console.log("Changing to phase 5"); //DEBUG
			this.setState({phase4:false});
			this.setState({phase5:true});
		}
		else
		{
			console.log("Changing to end phase"); //DEBUG
			this.setState({phase5:false});
		}
	},
	render: function()
	{
		return (
			<div>
				<Introduction display={this.state.phase1}/>
				<StartButton display={this.state.phase1} onPhaseChange={this.onPhaseChange}/>
				<PersonalityPortion onPersonalityChange={this.onPersonalityChange} display={this.state.phase2} onPhaseChange={this.onPhaseChange}/>
				<CharacterPortion onCharacterChange={this.onCharacterChange} display={this.state.phase3} onPhaseChange={this.onPhaseChange}/>
				<TimeManagementPortion onTimeManagementChange={this.onTimeManagementChange} display={this.state.phase4} onPhaseChange={this.onPhaseChange}/>
				<BackgroundPortion display={this.state.phase5} onPhaseChange={this.onPhaseChange}/>
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
		var data = [];
		var listItems = $("#strength li");
		var listItems2 = $("#flaw li");
		listItems.each(function(index, li) { if(li.firstChild.checked) data.push(li.firstChild.value); });
		listItems2.each(function(index, li) { if(li.firstChild.checked) data.push(li.firstChild.value); });
		this.props.onCharacterChange(data);
		this.props.onPhaseChange("phase3");
		killEvent(event);
	},
	renderDisplay: function()
	{
		return (
			<form>
				<div id="strongest-characteristic">
					<label>What&#39;s your strongest character trait?</label>
					<ul id="strength">
						<li><input name="character-info-strong" type="radio" value="independence" />Independence</li>
						<li><input name="character-info-strong" type="radio" value="courage" />Courage</li>
						<li><input name="character-info-strong" type="radio" value="trustworthiness" />Trustworthiness</li>
						<li><input name="character-info-strong" type="radio" value="punctuality" />Punctuality</li>
						<li><input name="character-info-strong" type="radio" value="reliability" />Reliability</li>
						<li><input name="character-info-strong" type="radio" value="kind" />Kind-Hearted</li>
						<li><input name="character-info-strong" type="radio" value="empathy" />Empathetic</li>
						<li><input name="character-info-strong" type="radio" value="initiative" />Self-Motivated</li>
						<li><input name="character-info-strong" type="radio" value="intelligent" />Intelligent</li>
						<li><input name="character-info-strong" type="radio" value="strong" />Physically-Strong</li>
					</ul>
				</div>
				<div id="biggest-flaw">
					<label>What&#39;s your biggest character flaw?</label>
					<ul id="flaw">
						<li><input name="character-info-flaw" type="radio" value="tardy" />Tardiness</li>
						<li><input name="character-info-flaw" type="radio" value="distracted" />Easily-Distracted</li>
						<li><input name="character-info-flaw" type="radio" value="greedy" />Greedy</li>
						<li><input name="character-info-flaw" type="radio" value="weak" />Physically-Weak</li>
						<li><input name="character-info-flaw" type="radio" value="insecure" />Self-Conscious</li>
						<li><input name="character-info-flaw" type="radio" value="rude" />Rude</li>
						<li><input name="character-info-flaw" type="radio" value="lazy" />Procrastinator</li>
						<li><input name="character-info-flaw" type="radio" value="humorless" />Humorless</li>
						<li><input name="character-info-flaw" type="radio" value="competitive" />Hyper-Competitive</li>
						<li><input name="character-info-flaw" type="radio" value="workaholic" />Workaholic</li>
					</ul>
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
var TimeManagementPortion = React.createClass
({
	getInitialState: function()
	{
		return {
			fitValue: 20,
			restValue: 60,
			learningValue: 30,
			practicingValue: 0
		};
	},
	handleChange: function(event)
	{
		if(event.currentTarget.id === "physical-fitness")
		{
			var valChange = this.state.fitValue - event.currentTarget.valueAsNumber;
			this.setState({ fitValue: event.currentTarget.valueAsNumber });
			var restVal = this.state.restValue + (valChange * 0.4);
			this.setState({ restValue: restVal });
			var learningVal = this.state.learningValue + (valChange * 0.8);
			this.setState({ learningValue: learningVal });
			var practicingVal = this.state.practicingValue + (valChange * 0.6);
			this.setState({ practicingValue: practicingVal });
		}
		else if(event.currentTarget.id === "rest")
		{
			var valChange = this.state.restValue - event.currentTarget.valueAsNumber;
			this.setState({ restValue: event.currentTarget.valueAsNumber });
			var fitVal = this.state.fitValue + (valChange * 0.4);
			this.setState({ fitValue: fitVal });
			var learningVal = this.state.learningValue + (valChange * 0.8);
			this.setState({ learningValue: learningVal });
			var practicingVal = this.state.practicingValue + (valChange * 0.6);
			this.setState({ practicingValue: practicingVal });
		}
		else if(event.currentTarget.id === "learning")
		{
			var valChange = this.state.learningValue - event.currentTarget.valueAsNumber;
			this.setState({ learningValue: event.currentTarget.valueAsNumber });
			var fitVal = this.state.fitValue + (valChange * 0.4);
			this.setState({ fitValue: fitVal });
			var restVal = this.state.restValue + (valChange * 0.8);
			this.setState({ restValue: restVal });
			var practicingVal = this.state.practicingValue + (valChange * 0.6);
			this.setState({ practicingValue: practicingVal });
		}
		else if(event.currentTarget.id === "practicing")
		{
			var valChange = this.state.practicingValue - event.currentTarget.valueAsNumber;
			this.setState({ practicingValue: event.currentTarget.valueAsNumber });
			var fitVal = this.state.fitValue + (valChange * 0.4);
			this.setState({ fitValue: fitVal });
			var restVal = this.state.restValue + (valChange * 0.6);
			this.setState({ restValue: restVal });
			var learningVal = this.state.learningValue + (valChange * 0.8);
			this.setState({ learningValue: learningVal });
		}
	},
	handleClick: function(event)
	{
		var data = [];
		this.props.onTimeManagementChange(data);
		this.props.onPhaseChange("phase4");
		killEvent(event);
	},
	renderDisplay: function()
	{
		return (
			<form id="time-management-info" name="time-management-info">
				<h4>Show your daily priorities:</h4>
				<label>Physical Fitness</label>
				<input id="physical-fitness" ref="physical-fitness" name="time-management-info" onChange={this.handleChange} type="range" value={this.state.fitValue} />
				<label>Sleep/Rest</label>
				<input id="rest" name="time-management-info" onChange={this.handleChange} type="range" value={this.state.restValue} />
				<label>Learning New Skills</label>
				<input id="learning" name="time-management-info" onChange={this.handleChange} type="range" value={this.state.learningValue} />
				<label>Practicing Old Skills</label>
				<input id="practicing" name="time-management-info" onChange={this.handleChange} type="range" value={this.state.practicingValue} /><br/>
				<button onClick={this.handleClick}>SUBMIT</button>
			</form> );
	},
	render: function()
	{
		return (this.props.display ? this.renderDisplay() : null );
	}
});
/**********Phase4 Elements end here ***************************************************************/
/**********Phase5 Elements start here *************************************************************/
var BackgroundPortion = React.createClass
({
	handleClick: function(event)
	{
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase5");
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
/**********Phase5 Elements end here ***************************************************************/
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