/**
 * Created by h205p3 on 5/22/17.
 */

function onLoad() {
    $("#page2go").hide
}

function showP2() {
    if($("#password1") !== "" && $("#username") !== "") {
        $("#page2go").show
    }
}

