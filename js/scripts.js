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
			React.createElement(PersonalityPortion, { display: this.state.phase2, onPhaseChange: this.onPhaseChange }),
			React.createElement(BackgroundInfo, { display: this.state.phase3, onPhaseChange: this.onPhaseChange })
		);
	}
});
/**********Root Elements ends here ****************************************************************/
/**********Phase1 Elements start here *************************************************************/
var Introduction = React.createClass({
	displayName: 'Introduction',

	render: function () {
		return this.props.display ? React.createElement(
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
		) : null;
	}
});
var StartButton = React.createClass({
	displayName: 'StartButton',

	handleClick: function (event) {
		console.log("Starting..."); //DEBUG
		this.props.onPhaseChange("phase1");
		killEvent(event);
	},
	render: function () {
		return this.props.display ? React.createElement(
			'button',
			{ id: 'start-button', onClick: this.handleClick },
			'START!'
		) : null;
	}
});
/**********Phase1 Elements end here ***************************************************************/
/**********Phase2 Elements start here *************************************************************/
var PersonalityPortion = React.createClass({
	displayName: 'PersonalityPortion',

	handleClick: function (event) {
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase2");
		killEvent(event);
	},
	render: function () {
		return this.props.display ? React.createElement(
			'form',
			{ name: 'personality' },
			React.createElement(
				'label',
				null,
				'Check the following that apply to you:'
			),
			React.createElement(
				'ul',
				null,
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
		) : null;
	}
});
/**********Phase2 Elements end here ***************************************************************/
/**********Phase3 Elements start here *************************************************************/
var BackgroundInfo = React.createClass({
	displayName: 'BackgroundInfo',

	handleClick: function (event) {
		console.log("Submitting..."); //DEBUG
		this.props.onPhaseChange("phase3");
		killEvent(event);
	},
	render: function () {
		return this.props.display ? React.createElement(
			'form',
			{ name: 'background-info' },
			React.createElement('input', { name: 'background-info', type: 'text' }),
			React.createElement('input', { name: 'background-info', type: 'checkbox', value: 'answer2' }),
			React.createElement(
				'button',
				{ onClick: this.handleClick },
				'SUBMIT'
			)
		) : null;
	}
});
/**********Phase3 Elements end here ***************************************************************/
/**********Phase4 Elements start here *************************************************************/

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