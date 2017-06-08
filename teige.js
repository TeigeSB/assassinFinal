
userNames = ["user"];
passWords = ["pw"];

function saveLogin () {

    var user = getData('hey');
    var pass = getData(passWords);
    console.log(user);
    var inputPass= $("#clear-demo").val();
    var inputName = $("#password1").val();



    for (var i = 0; i < user.length; i++) {
        if (inputPass !== getData(inputPass) && inputName !== getData(inputName)) {
            setData(userNames, inputPass);
            setData(passWords, inputName);
            console.log(inputPass);
        } else if (inputPass !== getData(inputPass)) {
            prompt('Your Username is incorrect!')
        }
            else if (inputPass == getData(inputPass) && inputName == getData(inputName)) {
            console.log("HI")
        } else {
            console.log('NOT WORKING')
        }
    }
    console.log(user);
    console.log(pass)
}

