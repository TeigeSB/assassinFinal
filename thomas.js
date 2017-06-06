function kill(player,playerDead) {
    for(var i = 0; i < players.length; i++) {
        if(players[i].playerName === player) {
            players[i].kills += 1;
        }
        if(players[i].playerName === playerDead) {
            players[i].status = false;
        }
    }
}