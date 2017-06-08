function kill(player,playerDead) {
    console.log("kill: " + player + " " + playerDead);
    for(var i = 0; i < players.length; i++) {
        if(players[i].playerName === player) {

            players[i].kills += 1;
            var team = players[i].team;
        }
        if(players[i].playerName === playerDead) {
            players[i].status = false;
            var killedTeam = players[i].team;

            console.log(players[i].playerName + " is dead");

            killTeam(team, killedTeam);
        }
    }
}


function killTeam (team, killedTeam) {
    if (killedTeam.captain.status == false) {
        killedTeam.status = false;

        console.log(killedTeam.teamName + " is dead");


        reassignTeam(team,killedTeam)
    }
}


function reassignTeam(team,killedTeam){
    var newTeamTarget = killedTeam.target;

    if(killedTeam.target === team) {
        return "You Won the Game"
    }
    else {
        team.target = newTeamTarget;
        killedTeam.target = "none";

        console.log(team.teamName  + "'s new target is " + team.target)
    }
}
