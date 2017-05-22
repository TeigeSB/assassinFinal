function game(name, teams, players) {
    this.name = name;
    this.teams = teams;
    this.players = players;
}


function team(name, players, status) {
    this.teamName = name;
    this.players = players;
    this.alive = status;
}


