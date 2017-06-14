teamName = [];
teamPin = [];
teamName.push(t4.name);
teamPin.push(t4.pin);

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
            var team = new Team(inputName,)
        }
    }
    else if (inputPin != getData(inputPin)) {
        prompt('Your Pin is incorrect!')
    }
    else if (inputPin == getData(inputPin) && inputName == getData(inputName)) {
        console.log("HI")
        teamText();
    }
    else {
        console.log("NOT WORKING")
    }
    console.log(teamName);
    console.log(teamPin);
}

function dictionary (input) {
    if (input == true) {
        return "alive"
    }
    if (input == false) {
        return "dead"
    }
}

function teamText() {
    console.log(t4.name);
    document.getElementById("para1").innerHTML = t4.teamName;
    document.getElementById("para2").innerHTML = dictionary(t4.alive);
}