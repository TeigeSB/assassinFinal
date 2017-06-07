/**
 * Created by h205p3 on 5/22/17.
 */

userNames = [];
passWords = [];

function saveLogin () {
    var user = getData(userNames);
    var pass = getData(passWords);
    var inputPass= $("#clear-demo").val();
    var inputName = $("#password1").val();

    setData(userNames, 'hey');

    for (var i = 0; i < user.length; i++) {
        if (inputPass !== user[i]) {
            setData(userNames, inputPass);
            console.log(inputPass);
        } else if (inputPass == user[i] && inputName == pass[i]) {
            console.log("HI")
        } else {
            console.log('NOT WORKING')
        }
    }
    console.log('hey');
    console.log(user);
    console.log(pass)
}

