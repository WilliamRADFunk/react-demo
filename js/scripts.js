/**********Main Variables start here **************************************************************/
var careerChain = [0, 0, 0, 0, 0];
/**********Main Variables end here ****************************************************************/
/**********Anytime JavaScript starts here *********************************************************/
function digestPersonality(data) {
	var antisocial_social = careerChain[0];
	var manual_mental = careerChain[1];
	var satisfaction_salary = careerChain[2];
	var rigid_flexible = careerChain[3];
	var unskilled_skilled = careerChain[4];

	// Outdoors-Indoors
	if ($.inArray("outdoors", data) !== -1 && $.inArray("indoors", data) !== -1) {
		antisocial_social += 5;
		rigid_flexible += 5;
	} else if ($.inArray("outdoors", data) !== -1) {
		antisocial_social += 2;
		manual_mental -= 2;
		rigid_flexible -= 2;
	} else if ($.inArray("indoors", data) !== -1) {
		antisocial_social -= 2;
		manual_mental += 2;
		rigid_flexible -= 2;
	}
	// Sociability
	if ($.inArray("social", data) !== -1 && $.inArray("antisocial", data) !== -1) {
		rigid_flexible += 5;
	} else if ($.inArray("social", data) !== -1) {
		antisocial_social += 5;
	} else if ($.inArray("antisocial", data) !== -1) {
		antisocial_social -= 5;
	}
	// Greed/Passion
	if ($.inArray("bigbucks", data) !== -1 && $.inArray("satisfaction", data) !== -1) {
		manual_mental += 2;
		rigid_flexible -= 5;
		unskilled_skilled += 5;
	} else if ($.inArray("bigbucks", data) !== -1) {
		manual_mental += 2;
		rigid_flexible += 2;
		satisfaction_salary += 5;
		unskilled_skilled += 2;
	} else if ($.inArray("satisfaction", data) !== -1) {
		rigid_flexible += 2;
		satisfaction_salary -= 5;
	}
	// Hands/Head
	if ($.inArray("manual", data) !== -1 && $.inArray("challenge", data) !== -1) {
		rigid_flexible -= 5;
		satisfaction_salary -= 5;
		unskilled_skilled += 5;
	} else if ($.inArray("manual", data) !== -1) {
		manual_mental += 5;
		rigid_flexible += 2;
		satisfaction_salary -= 5;
		unskilled_skilled -= 2;
	} else if ($.inArray("challenge", data) !== -1) {
		manual_mental -= 5;
		rigid_flexible += 2;
		satisfaction_salary -= 5;
	}
	// Airhead
	if ($.inArray("thoughtless", data) !== -1) {
		antisocial_social -= 2;
		manual_mental -= 5;
		rigid_flexible += 2;
		unskilled_skilled -= 5;
	}
	// Free-Spirit
	if ($.inArray("freedom", data) !== -1) {
		satisfaction_salary -= 5;
	}
	careerChain[0] = antisocial_social;
	careerChain[1] = manual_mental;
	careerChain[2] = rigid_flexible;
	careerChain[3] = satisfaction_salary;
	careerChain[4] = unskilled_skilled;
}
function digestCharacter(data) {}
function digestTimeManagement(data) {}
function killEvent(e) {
	e.preventDefault();
	e.stopPropagation();
}
/**********Anytime JavaScript ends here ***********************************************************/