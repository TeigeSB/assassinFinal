function kill(player,playerDead) {
    var playerObject = findObject(player);
    var deadPlayerObject = findObject(playerDead);


    if(playerObject.team.target === deadPlayerObject.team.teamName) {
        deadPlayerObject.status = false;
        var killedTeam = deadPlayerObject.team;
        var team = playerObject.team;

        console.log(deadPlayerObject.playerName + " is dead");

        killTeam(team, killedTeam);
    }
    else{
        console.log("you cannot kill that player");
    }
}


function killTeam (team, killedTeam) {
    if (killedTeam.captain.status == false) {
        killedTeam.status = false;

        console.log(killedTeam.teamName + " is dead");


        reassignTeam(team,killedTeam);
    }
    else{
        console.log("you still have not killed all of " + killedTeam.teamName + ", that is still your target.");
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




function submitKill() {
    whoKilled = document.getElementById("whoKilled").value;
    whoDied = document.getElementById("whoDied").value;

    kill(whoKilled,whoDied);
}




function findObject(name) {
    for (var i = 0; i < players.length; i++) {
        if (name === players[i].playerName) {
            return players[i];
        }
    }
}