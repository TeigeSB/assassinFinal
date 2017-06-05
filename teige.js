/**
 * Created by h205p3 on 5/22/17.
 */

userNames = [];
passWords = [];

$("#login").click(function() {
    for (var i = 0; i < userNames.length; i++) {
        if ($("#clear-demo") !== userNames[i]) {
            setData(userNames, $("#clear-demo"));
            console.log($("#clear-demo"));
        } else if ($("#username") == userNames[i] && $("#password") == passWords[i]) {

        }

    }
});


function saveLogin () {
    for (var i = 0; i < userNames.length; i++) {
        if ($("#clear-demo") !== userNames[i]) {
            setData(userNames, $("#clear-demo"));
            console.log($("#clear-demo"));
        } else if ($("#username") == userNames[i] && $("#password") == passWords[i]) {

        } else {
            console.log($("#clear-demo"))
        }
    }
        $( "#clear-demo" ).textinput();
    console.log($("#clear-demo"))
}

