function Game(name) {
    this.gameName = name;
}

function Team(name, players, status) {
    this.teamName = name;
    this.players = players;
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

    assassin = new Game("assassin");


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


    t1 = new Team("team1", players[0,2], true);
    t2 = new Team("team2", players[3,5], true);
    t3 = new Team("team3", players[6,8], true);

    t1.target = t2;
    t2.target = t3;
    t3.target = t1;

    teams = [t1, t2, t3];

    assassin.teams = teams;
    assassin.players = players;
}