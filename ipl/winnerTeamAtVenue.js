function result(venue,matches){
    const team = {};
    for(match of matches){
        if(venue === match.venue){
            if(team[match.winner]){
                team[match.winner] += 1;
            }else{
                team[match.winner] = 1;
            }
        }
    }
    return team;
}

function winnerTeam(matches){
    // console.log("okey");
    const temp = {};
    for(match of matches){
        // console.log(match);
        const venue = match.venue;
        temp[venue] = result(venue,matches);
    }
    // console.log(temp);
    return temp;
}

module.exports = winnerTeam;