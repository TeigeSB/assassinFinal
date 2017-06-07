function Game(name, teams, players) {
    this.gameName = name;
    this.teams = teams;
    this.players = players;
}

function Team(name, players, target, status) {
    this.teamName = name;
    this.players = players;
    this.target = target;

    //true = alive
    this.alive = status;
}

function Player(name, id, captain, kills, status) {
    this.playerName = name;
    this.id = id;

    //true = team captain
    this.captain = captain;
    this.kills = kills;

    //true = alive
    this.status = status;
}

function Rules() {
    //print out rules
}




//this will save an array of objects to a local storage
function setData(dataToSet, name) {
    var json = JSON.stringify(dataToSet);
    localStorage.setItem(name, json);
}

//this retrieves data from local storage
function getData(name) {
    var text = localStorage.getItem(name);
    var obj = JSON.parse(text);
    return obj;
}




function startGame() {
    assassin = new Game("assassin", teams, players);
    p1 = new Player("player1", 001, true, 0, true);
    p2 = new Player("player2", 002, false, 0, true);
    p3 = new Player("player3", 003, false, 0, true);
    p4 = new Player("player4", 004, true, 0, true);
    p5 = new Player("player5", 005, false, 0, true);
    p6 = new Player("player6", 006, false, 0, true);
    p7 = new Player("player7", 007, true, 0, true);
    p8 = new Player("player8", 008, false, 0, true);
    p9 = new Player("player9", 009, false, 0, true);
    players = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
    t1 = new Team("team1", players[0, 2], t2, true);
    t2 = new Team("team2", players[3, 5], t3, true);
    t3 = new Team("team3", players[6, 8], t1, true);
    teams = [t1, t2, t3];
}