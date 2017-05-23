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
