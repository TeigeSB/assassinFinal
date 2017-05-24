function Game(name, teams, players) {
    this.name = name;
    this.teams = teams;
    this.players = players;

}


function Team(name, teamid, players, status) {
    this.teamName = name;
    this.teamid = teamid;
    this.players = players;
    this.alive = status;
}


function Player(name, captain, id, kills, status) {
    this.name = name;
    this.id = id;
    this.captain = captain;
    this.alive = status;
    this.kills = kills;
}


//this will save an array of objects to a local storage
function download(array, name) {
    var json = JSON.stringify(array);
    localStorage.setItem(name, json);
}

//this retrieves data from local storage
function reload(name) {
    var text = localStorage.getItem(name);
    var obj = JSON.parse(text);
    return obj;
}





function startGame() {
    //assign every team a target of a different team
}


function kill(player,playerDead) {
    //change player status to dead
    //add 1 to the players kill count
}


function eliminateTeam() {
    //once player dies see if whole team is dead
    //if whole team or team captain is dead change team status to dead
}


function reassignTeam() {
    //once team is dead, assign team who killed them their new team
    //if no more teams are left to assign then they won the game
}
