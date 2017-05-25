function Game(name, teams, players) {
    this.gameName = name;
    this.teams = teams;
    this.players = players;
}

function Team(name, players, target, status) {
    this.teamName = name;
    this.players = players;
    this.target = target;
    this.alive = status;
}

function Player(name, id, captain, kill, status) {
    this.playerName = name;
    this.id = id;
    this.captain = captain;
    this.kill = kill;
    this.status = status;
}

function Rules() {
    //print out rules
}




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


var player1 = new Player();








function startGame() {
    //make data
    var player1 = {name: "Kostya", isAlive: false};
    var player2 = {name: "Teige", isAlive: true};

    var players = [player1, player2];

    setData(players,"data");

}