
userNames = [];
passWords = [];

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
            console.log(getData(inputName));
            console.log(getData(inputPass));

        } else if (!yesNo) {
            alert('Please enter your username and password correctly.')
        }
    } else if (inputPass != getData(inputPass)) {
            alert('Your Password is incorrect!')
    } else if (inputName != getData(inputName)) {
            alert('Your Username is incorrect')
    } else if (inputPass == getData(inputPass) && inputName == getData(inputName)) {
            console.log("HI");
        console.log(getData(inputName));
        console.log(getData(inputPass));
    } else {
            console.log('NOT WORKING')
        }

}

