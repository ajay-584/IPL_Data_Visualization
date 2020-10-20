function check(year,matches){
    const result = {};
    for(let match of matches){
        const season = match.season;
        const winner = match.winner;
        if(parseInt(season) == year){
            if(result[winner]){
                result[winner] += 1;
            } else{
                result[winner] = 1;
            }
        }
    }
    // console.log("Winner List");
    // console.log(result)
    return result;
}

function matchesWonPerYear(matches){
    let arr = []
    for(let i = 2008; i < 2020; i++){
        arr.push(check(i,matches));
    }
    // console.log("array obj");
    return arr
}
module.exports = matchesWonPerYear;