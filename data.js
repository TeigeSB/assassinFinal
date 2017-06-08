function Game(name) {
    this.gameName = name;
}

function Team(name, players, captain, status) {
    this.teamName = name;
    this.players = players;
    this.captain = captain;
    this.alive = status;
}

function Player(name, id, captain, kills, status) {
    this.playerName = name;
    this.id = id;
    this.captain = captain;
    this.kills = kills;
    this.status = status;
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
    console.log("starting game");
    assassin = new Game("assassin");

    p0 = new Player("player1", 000, true, 0, true);
    p1 = new Player("player2", 001, false, 0, true);
    p2 = new Player("player3", 002, false, 0, true);
    p3 = new Player("player4", 003, true, 0, true);
    p4 = new Player("player5", 004, false, 0, true);
    p5 = new Player("player6", 005, false, 0, true);
    p6 = new Player("player7", 006, true, 0, true);
    p7 = new Player("player8", 007, false, 0, true);
    p8 = new Player("player9", 008, false, 0, true);

    players = [p0, p1, p2, p3, p4, p5, p6, p7, p8];


    t0 = new Team("team1", players.slice(0,3), p0, true);
    t1 = new Team("team2", players.slice(3,6), p3, true);
    t2 = new Team("team3", players.slice(6,9), p6, true);

    t0.target = t1.teamName;
    t1.target = t2.teamName;
    t2.target = t0.teamName;

    p0.team = t0;
    p1.team = t0;
    p2.team = t0;
    p3.team = t1;
    p4.team = t1;
    p5.team = t1;
    p6.team = t2;
    p7.team = t2;
    p8.team = t2;


    teams = [t0, t1, t2];

    assassin.teams = teams;
    assassin.players = players;
}