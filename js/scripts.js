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
			phase4: false
		};
	},
	onPersonalityChange: function (data) {
		console.log("Personality Components are " + data); //DEBUG
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
		} else {
			console.log("Changing to end phase"); //DEBUG
			this.setState({ phase4: false });
		}
	},
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(Introduction, { display: this.state.phase1 }),
			React.createElement(StartButton, { display: this.state.phase1, onPhaseChange: this.onPhaseChange }),
			React.createElement(PersonalityPortion, { onPersonalityChange: this.onPersonalityChange, display: this.state.phase2, onPhaseChange: this.onPhaseChange }),
			React.createElement(CharacterPortion, { display: this.state.phase3, onPhaseChange: this.onPhaseChange }),
			React.createElement(BackgroundPortion, { display: this.state.phase4, onPhaseChange: this.onPhaseChange })
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
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase3");
		killEvent(event);
	},
	renderDisplay: function () {
		return React.createElement(
			'form',
			{ name: 'character-info-strong' },
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
					null,
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'independence' }),
					'Independence',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'courage' }),
					'Courage',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'trustworthiness' }),
					'Trustworthiness',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'punctuality' }),
					'Punctuality',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'reliability' }),
					'Reliability',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'kind' }),
					'Kind-Hearted',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'independence' }),
					'Independence',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'courage' }),
					'Courage',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'independence' }),
					'Independence',
					React.createElement('input', { name: 'character-info-strong', type: 'radio', value: 'courage' }),
					'Courage'
				)
			),
			React.createElement('div', { id: 'weakest-characteristic' }),
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
var BackgroundPortion = React.createClass({
	displayName: 'BackgroundPortion',

	handleClick: function (event) {
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase4");
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
/**********Phase4 Elements end here ***************************************************************/
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
/**********Anytime JavaScript starts here *********************************************************/
function killEvent(e) {
	e.preventDefault();
	e.stopPropagation();
}
/**********Anytime JavaScript ends here ***********************************************************/