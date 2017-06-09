
teamName = [];
teamPin = [];


function teamCreator () {
    var inputName = $("#teamNam").val();
    var inputPin = $("#teamPi").val();
    if (inputPin != getData(inputPin) && inputName != getData(inputName)) {
        var answer = confirm('Team Name and Team Pin are incorrect, would you like to create an account?');
        if (answer == true) {
            teamName.push(inputName);
            teamPin.push(inputPin);
            setData(teamName, inputName);
            setData(teamPin, inputPin);
            console.log("new account")
        }
    }
    else if (inputPin != getData(inputPin)) {
        prompt('Your Pin is incorrect!')
    }
    else if (inputPin == getData(inputPin) && inputName == getData(inputName)) {
        console.log("HI")
    }
    else {
        console.log("NOT WORKING")
    }
    console.log(teamName);
    console.log(teamPin);
}

