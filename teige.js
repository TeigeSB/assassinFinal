
userNames = ["user"];
passWords = ["pw"];

function saveLogin () {

    var inputPass= $("#clear-demo").val();
    var inputName = $("#password1").val();

    console.log();

    if (inputPass !== getData(inputPass) && inputName !== getData(inputName)) {
            setData(userNames, inputPass);
            setData(passWords, inputName);
            prompt('Username and Password are incorrect, would you like to create an account?');
            console.log(inputPass);
    } else if (inputPass !== getData(inputPass)) {
            prompt('Your Username is incorrect!')
    } else if (inputPass == getData(inputPass) && inputName == getData(inputName)) {
            console.log("HI")
    } else {
            console.log('NOT WORKING')
        }
}

