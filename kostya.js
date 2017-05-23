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


