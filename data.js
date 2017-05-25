/**
 * Created by h205p3 on 5/25/17.
 */
//this will save an array of objects to a local storage
function setData(array, name) {
    var json = JSON.stringify(array);
    localStorage.setItem(name, json);
}

//this retrieves data from local storage
function getData(name) {
    var text = localStorage.getItem(name);
    var obj = JSON.parse(text);
    return obj;
}


function startGame() {
    //make data
    var player1 = {name: "Kostya", isAlive: false};
    var player2 = {name: "Teige", isAlive: true};

    var players = [player1, player2];

    setData(players,"data");

}



function getNextVictim() {
    var players = getData("data");

    //iterate through players array, find an alive person

    ///change to assigned, etc

    setData(players,"data");

}