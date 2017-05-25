function Game(name, teams, players) {
    this.name = name;
    this.teams = teams;
    this.players = players;
}

function Player(captain, kill, dead) {
    this.captain = captain;
    this.kill = kill;
    this.dead = dead;
}


function Team(name, players, status) {
    this.teamName = name;
    this.players = players;
    this.alive = status;
}


function Rules(select) {
    this.select = select;
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



function startGame() {
    //make data
    var player1 = {name: "Kostya", isAlive: false};
    var player2 = {name: "Teige", isAlive: true};

    var players = [player1, player2];

    setData(players,"data");

}