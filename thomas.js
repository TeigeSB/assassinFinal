function kill(player,playerDead) {
    var playerObject = findObject(player);
    var deadPlayerObject = findObject(playerDead);

    document.getElementById("killedStuff2").innerHTML = '';
    document.getElementById("killedStuff").innerHTML ='';
    document.getElementById("killedStuff3").innerHTML = '';
    document.getElementById("killedStuff1").innerHTML = '';
    document.getElementById("killFail").innerHTML = '';
    document.getElementById("youWon").innerHTML = '';

    if(playerObject.team.target === deadPlayerObject.team.teamName) {
        deadPlayerObject.status = false;
        var killedTeam = deadPlayerObject.team;
        var team = playerObject.team;

        console.log(deadPlayerObject.playerName + " is dead");

            document.getElementById("killedStuff").innerHTML = deadPlayerObject.playerName + " is dead";
        killTeam(team, killedTeam);
    }
    else{

            document.getElementById("killFail").innerHTML = (" you cannot kill that player");
    }
}


function killTeam (team, killedTeam) {
    if (killedTeam.captain.status == false) {
        killedTeam.status = false;

        document.getElementById("killedStuff1").innerHTML = (killedTeam.teamName + " is dead");


        reassignTeam(team,killedTeam);
    }
    else{

            document.getElementById("killedStuff2").innerHTML = (" you still have not killed all of " + killedTeam.teamName + ", that is still your target.");
    }
}

function reassignTeam(team,killedTeam){
    var newTeamTarget = killedTeam.target;

    if(killedTeam.target === team.teamName) {
        document.getElementById("youWon").innerHTML = ("your team won the Game!");
        return "You Won the Game"
    }
    else {
        team.target = newTeamTarget;
        killedTeam.target = "none";

        document.getElementById("killedStuff3").innerHTML = (team.teamName  + "'s new target is " + team.target)
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