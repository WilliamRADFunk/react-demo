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
var Project = React.createClass({
	displayName: 'Project',

	getInitialState: function () {
		return {
			phase1: true,
			phase2: false,
			phase3: false,
			phase4: false,
			phase5: false
		};
	},
	onPersonalityChange: function (data) {
		console.log("Personality Components are " + data); //DEBUG
		digestPersonality(data);
	},
	onCharacterChange: function (data) {
		console.log("Character Components are " + data); //DEBUG
		digestCharacter(data);
	},
	onTimeManagementChange: function (data) {
		console.log("Character Components are " + data); //DEBUG
		digestTimeManagement(data);
	},
	onPhaseChange: function (oldPhase) {
		console.log("Old phase was " + oldPhase); //DEBUG
		if (oldPhase === "phase1") {
			console.log("Changing to phase 2"); //DEBUG
			this.setState({ phase1: false });
			this.setState({ phase2: true });
		} else if (oldPhase === "phase2") {
			console.log("Changing to phase 3"); //DEBUG
			this.setState({ phase2: false });
			this.setState({ phase3: true });
		} else if (oldPhase === "phase3") {
			console.log("Changing to phase 4"); //DEBUG
			this.setState({ phase3: false });
			this.setState({ phase4: true });
		} else if (oldPhase === "phase4") {
			console.log("Changing to phase 5"); //DEBUG
			this.setState({ phase4: false });
			this.setState({ phase5: true });
		} else {
			console.log("Changing to end phase"); //DEBUG
			this.setState({ phase5: false });
		}
	},
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(Introduction, { display: this.state.phase1 }),
			React.createElement(StartButton, { display: this.state.phase1, onPhaseChange: this.onPhaseChange }),
			React.createElement(PersonalityPortion, { onPersonalityChange: this.onPersonalityChange, display: this.state.phase2, onPhaseChange: this.onPhaseChange }),
			React.createElement(CharacterPortion, { onCharacterChange: this.onCharacterChange, display: this.state.phase3, onPhaseChange: this.onPhaseChange }),
			React.createElement(TimeManagementPortion, { onTimeManagementChange: this.onTimeManagementChange, display: this.state.phase4, onPhaseChange: this.onPhaseChange }),
			React.createElement(BackgroundPortion, { display: this.state.phase5, onPhaseChange: this.onPhaseChange })
		);
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Phase1 Elements start here *************************************************************/
var Introduction = React.createClass({
	displayName: 'Introduction',

	renderDisplay: function () {
		return React.createElement(
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
		);
	},
	render: function () {
		return this.props.display ? this.renderDisplay() : null;
	}
});
var StartButton = React.createClass({
	displayName: 'StartButton',

	handleClick: function (event) {
		this.props.onPhaseChange("phase1");
	},
	renderDisplay: function () {
		return React.createElement(
			'button',
			{ id: 'start-button', onClick: this.handleClick },
			'START!'
		);
	},
	render: function () {
		return this.props.display ? this.renderDisplay() : null;
	}
});
/**********Phase1 Elements end here ***************************************************************/
/**********Phase2 Elements start here *************************************************************/
var PersonalityPortion = React.createClass({
	displayName: 'PersonalityPortion',

	handleClick: function (event) {
		var data = [];
		var listItems = $("#personality-form li");
		listItems.each(function (index, li) {
			if (li.firstChild.checked) data.push(li.firstChild.value);
		});
		this.props.onPersonalityChange(data);
		this.props.onPhaseChange("phase2");
		killEvent(event);
	},
	renderDisplay: function () {
		return React.createElement(
			'form',
			{ name: 'personality' },
			React.createElement(
				'label',
				null,
				'Check the following that apply to you:'
			),
			React.createElement(
				'ul',
				{ id: 'personality-form' },
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'outdoors' }),
					'I don\'t like feeling cooped up (Outdoor Work)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'indoors' }),
					'Being outside is over-rated (Indoor Work)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'social' }),
					'I like working in a team environment (Social)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'antisocial' }),
					'Other people slow me down. I\'m a lone wolf (Anti-social)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'manual' }),
					'I like working and working out simultaneously (Manual Labor)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'thoughtless' }),
					'Give me a simple, repetitive task anytime (No Real Thinking)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'challenge' }),
					'Make me work for my money (Mentally Stimulating)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'bigbucks' }),
					'Show me the money! (High Priority: Money / Low Priority: Job Satisfaction)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'satisfaction' }),
					'I need passion in my work (High Priority: Job Satisfaction / Low Priority: Money)'
				),
				React.createElement(
					'li',
					null,
					React.createElement('input', { name: 'personality', type: 'checkbox', value: 'freedom' }),
					'Give me freedom, or give me a different job (Work Remotely)'
				)
			),
			React.createElement(
				'button',
				{ onClick: this.handleClick },
				'SUBMIT'
			)
		);
	},
	render: function () {
		return this.props.display ? this.renderDisplay() : null;
	}
});
/**********Phase2 Elements end here ***************************************************************/
/**********Phase3 Elements start here *************************************************************/
var CharacterPortion = React.createClass({
	displayName: 'CharacterPortion',

	handleClick: function (event) {
		var data = [];
		var listItems = $("#strength li");
		var listItems2 = $("#flaw li");
		listItems.each(function (index, li) {
			if (li.firstChild.checked) data.push(li.firstChild.value);
		});
		listItems2.each(function (index, li) {
			if (li.firstChild.checked) data.push(li.firstChild.value);
		});
		this.props.onCharacterChange(data);
		this.props.onPhaseChange("phase3");
		killEvent(event);
	},
	renderDisplay: function () {
		return React.createElement(
			'form',
			null,
			React.createElement(
				'div',
				{ id: 'strongest-characteristic' },
				React.createElement(
					'label',
					null,
					'What\'s your strongest character trait?'
				),
				React.createElement(
					'ul',
					{ id: 'strength' },
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'independence' }),
						'Independence'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'courage' }),
						'Courage'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'trustworthiness' }),
						'Trustworthiness'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'punctuality' }),
						'Punctuality'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'reliability' }),
						'Reliability'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'kind' }),
						'Kind-Hearted'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'empathy' }),
						'Empathetic'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'initiative' }),
						'Self-Motivated'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'intelligent' }),
						'Intelligent'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'strong' }),
						'Physically-Strong'
					)
				)
			),
			React.createElement(
				'div',
				{ id: 'biggest-flaw' },
				React.createElement(
					'label',
					null,
					'What\'s your biggest character flaw?'
				),
				React.createElement(
					'ul',
					{ id: 'flaw' },
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'tardy' }),
						'Tardiness'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'distracted' }),
						'Easily-Distracted'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'greedy' }),
						'Greedy'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'weak' }),
						'Physically-Weak'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'insecure' }),
						'Self-Conscious'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'rude' }),
						'Rude'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'lazy' }),
						'Procrastinator'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'humorless' }),
						'Humorless'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'competitive' }),
						'Hyper-Competitive'
					),
					React.createElement(
						'li',
						null,
						React.createElement('input', { name: 'character-info-flaw', type: 'radio', value: 'workaholic' }),
						'Workaholic'
					)
				)
			),
			React.createElement(
				'button',
				{ onClick: this.handleClick },
				'SUBMIT'
			)
		);
	},
	render: function () {
		return this.props.display ? this.renderDisplay() : null;
	}
});
/**********Phase3 Elements end here ***************************************************************/
/**********Phase4 Elements start here *************************************************************/
var TimeManagementPortion = React.createClass({
	displayName: 'TimeManagementPortion',

	getInitialState: function () {
		return {
			fitValue: 20,
			restValue: 60,
			learningValue: 30,
			practicingValue: 0
		};
	},
	handleChange: function (event) {
		if (event.currentTarget.id === "physical-fitness") {
			var valChange = this.state.fitValue - event.currentTarget.valueAsNumber;
			this.setState({ fitValue: event.currentTarget.valueAsNumber });
			var restVal = this.state.restValue + valChange * 0.4;
			this.setState({ restValue: restVal });
			var learningVal = this.state.learningValue + valChange * 0.8;
			this.setState({ learningValue: learningVal });
			var practicingVal = this.state.practicingValue + valChange * 0.6;
			this.setState({ practicingValue: practicingVal });
		} else if (event.currentTarget.id === "rest") {
			var valChange = this.state.restValue - event.currentTarget.valueAsNumber;
			this.setState({ restValue: event.currentTarget.valueAsNumber });
			var fitVal = this.state.fitValue + valChange * 0.4;
			this.setState({ fitValue: fitVal });
			var learningVal = this.state.learningValue + valChange * 0.8;
			this.setState({ learningValue: learningVal });
			var practicingVal = this.state.practicingValue + valChange * 0.6;
			this.setState({ practicingValue: practicingVal });
		} else if (event.currentTarget.id === "learning") {
			var valChange = this.state.learningValue - event.currentTarget.valueAsNumber;
			this.setState({ learningValue: event.currentTarget.valueAsNumber });
			var fitVal = this.state.fitValue + valChange * 0.4;
			this.setState({ fitValue: fitVal });
			var restVal = this.state.restValue + valChange * 0.8;
			this.setState({ restValue: restVal });
			var practicingVal = this.state.practicingValue + valChange * 0.6;
			this.setState({ practicingValue: practicingVal });
		} else if (event.currentTarget.id === "practicing") {
			var valChange = this.state.practicingValue - event.currentTarget.valueAsNumber;
			this.setState({ practicingValue: event.currentTarget.valueAsNumber });
			var fitVal = this.state.fitValue + valChange * 0.4;
			this.setState({ fitValue: fitVal });
			var restVal = this.state.restValue + valChange * 0.6;
			this.setState({ restValue: restVal });
			var learningVal = this.state.learningValue + valChange * 0.8;
			this.setState({ learningValue: learningVal });
		}
	},
	handleClick: function (event) {
		var data = [];
		this.props.onTimeManagementChange(data);
		this.props.onPhaseChange("phase4");
		killEvent(event);
	},
	renderDisplay: function () {
		return React.createElement(
			'form',
			{ id: 'time-management-info', name: 'time-management-info' },
			React.createElement(
				'h4',
				null,
				'Show your daily priorities:'
			),
			React.createElement(
				'label',
				null,
				'Physical Fitness'
			),
			React.createElement('input', { id: 'physical-fitness', ref: 'physical-fitness', name: 'time-management-info', onChange: this.handleChange, type: 'range', value: this.state.fitValue }),
			React.createElement(
				'label',
				null,
				'Sleep/Rest'
			),
			React.createElement('input', { id: 'rest', name: 'time-management-info', onChange: this.handleChange, type: 'range', value: this.state.restValue }),
			React.createElement(
				'label',
				null,
				'Learning New Skills'
			),
			React.createElement('input', { id: 'learning', name: 'time-management-info', onChange: this.handleChange, type: 'range', value: this.state.learningValue }),
			React.createElement(
				'label',
				null,
				'Practicing Old Skills'
			),
			React.createElement('input', { id: 'practicing', name: 'time-management-info', onChange: this.handleChange, type: 'range', value: this.state.practicingValue }),
			React.createElement('br', null),
			React.createElement(
				'button',
				{ onClick: this.handleClick },
				'SUBMIT'
			)
		);
	},
	render: function () {
		return this.props.display ? this.renderDisplay() : null;
	}
});
/**********Phase4 Elements end here ***************************************************************/
/**********Phase5 Elements start here *************************************************************/
var BackgroundPortion = React.createClass({
	displayName: 'BackgroundPortion',

	handleClick: function (event) {
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase5");
		killEvent(event);
	},
	renderDisplay: function () {
		return React.createElement(
			'form',
			{ name: 'background-info' },
			React.createElement('input', { name: 'background-info', type: 'text' }),
			React.createElement('input', { name: 'background-info', type: 'checkbox', value: 'answer2' }),
			React.createElement(
				'button',
				{ onClick: this.handleClick },
				'SUBMIT'
			)
		);
	},
	render: function () {
		return this.props.display ? this.renderDisplay() : null;
	}
});
/**********Phase5 Elements end here ***************************************************************/
/**********Loadup JavaScript starts here **********************************************************/
function run() {
	ReactDOM.render(React.createElement(Project, null), document.getElementById("react-container"));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
	run();
} else {
	window.addEventListener('DOMContentLoaded', run, false);
}
/**********Loadup JavaScript ends here ************************************************************/