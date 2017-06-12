
userNames = [];
passWords = [];
p14 = '';

function Player(name, id, captain, kills, status, password) {
    this.playerName = name;
    this.id = id;
    this.captain = captain;
    this.kills = kills;
    this.status = status;
    this.password = password
}

function Team(name, players, pin, captain, status) {
    this.teamName = name;
    this.players = players;
    this.pin = pin;
    this.captain = captain;
    this.alive = status;
}

function saveLogin () {

    var inputName= $("#clear-demo").val();
    var inputPass = $("#password1").val();

    console.log();

    if (inputPass != getData(inputPass) && inputName != getData(inputName)) {
            var yesNo = confirm('Username and Password are incorrect, would you like to create an account?');
        if (yesNo) {
            userNames.push(inputName);
            passWords.push(inputPass);
            setData(userNames, inputName);
            setData(passWords, inputPass);

            p14 = new Player(inputName, 014, true, 0, false, inputPass);

            event.preventDefault()
        } else if (!yesNo) {
            alert('Please enter your username and password correctly.')
            event.preventDefault()
        }
    } else if (inputPass != getData(inputPass)) {
            alert('Your Password is incorrect!')
        event.preventDefault()
    } else if (inputName != getData(inputName)) {
            alert('Your Username is incorrect')
        event.preventDefault()
    } else if (inputPass == getData(inputPass) && inputName == getData(inputName)) {
            console.log("HI");
        console.log(getData(inputName));
        console.log(getData(inputPass));
    } else {
            console.log('NOT WORKING')
        }

}

