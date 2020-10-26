function topEconomicBowler(matches){
    result = {};
    for(let i=0;i<12;i++){
        if(i === 0){
            result[2008] = economicalBolwer(59,118,matches)
        }else if(i === 1){
            result[2009] = economicalBolwer(117,175,matches)
        }else if(i === 2){
            result[2010] = economicalBolwer(174,235,matches)
        }else if(i === 3){
            result[2011] = economicalBolwer(234,308,matches)
        }else if(i === 4){
            result[2012] = economicalBolwer(307,382,matches)
        }else if(i === 5){
            result[2013] = economicalBolwer(381,458,matches)
        }else if(i === 6){
            result[2014] = economicalBolwer(457,518,matches)
        }else if(i === 7){
            result[2015] = economicalBolwer(517,577,matches)
        }else if(i === 8){
            result[2016] = economicalBolwer(576,637,matches)
        }else if(i === 9){
            result[2017] = economicalBolwer(0,60,matches)
        }else if(i === 10){
            result[2018] = economicalBolwer(7893,7954,matches)
        }else if(i === 11){
            result[2019] = economicalBolwer(11136,11416,matches)
        }
    }
    console.log(result);
    return result;
}




function economicalBolwer(s,e,matches){
    const result = {};
    const over = {};
    for(let bol of matches){
        const id = parseInt(bol.match_id);
        const run = parseInt(bol.total_runs);
        if( s < id && id < e){
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

module.exports = topEconomicBowler;