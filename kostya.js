function Name(name, teams, players) {
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


