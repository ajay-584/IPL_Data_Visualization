function bolwer_data(name,matches){
    const result = {};
    const runs = 0;
    const over = 0;
    for(let bol of matches){
        const id = parseInt(bol.match_id);
        const run = parseInt(bol.total_runs);
        const bolwer_over = parseInt(bol.over);
        if( 517 < id && id < 577){
            if(result[bol.bowler]){
                result[bol.bowler] += run;
                // over = bolwer_over;
            }else{
                result[bol.bowler] = run;
            }
        }
    }
    console.log(result);
    // return over
}


function economicalBolwer(matches){
    const result = {};
    const over = {};
    for(let bol of matches){
        const id = parseInt(bol.match_id);
        const run = parseInt(bol.total_runs);
        const bover = parseInt(bol.over);
        if( 517 < id && id < 577){
            if(result[bol.bowler]){
                result[bol.bowler] += run;
                // over[bol.bowler] = bover;
            }else{
                result[bol.bowler] = run;
                // over[bol.bowler] = ball;
            }
            if(over[bol.bowler]){
                over[bol.bowler] += 1;
            }else{
                over[bol.bowler]  = 1;
            }
        }
    }
    for(let b in over){
        over[b] = parseInt(over[b]/6);
        // arr.push(over[b])
    }
    // console.log(arr);
    let arr = [];
    for(x in result){
        for(y in over){
            if(x===y){
                result[x] = parseFloat(result[x]/over[y]).toFixed(2)
                arr.push(parseFloat(result[x]));
            }
        }
    }
    arr.sort(function(i,j){return i - j});
    // console.log(arr);
    let new_result = {};
    for(let i = 0; i<10; i++){
        for(x in result){
            if(result[x]==arr[i]){
                new_result[x] = arr[i];
            }
        }
    }
    // console.log(result);
    // console.log(result," Balls ",over);
    // return over
    return new_result;
}

module.exports = economicalBolwer;