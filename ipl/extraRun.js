function extraRun(deliver){
    // return (deliver.slice(0,536));
    const result = {};
    for(let d of deliver){
        const id = parseInt(d.match_id);
        const team = d.bowling_team;
        const extra_run = parseInt(d.extra_runs);
        // console.log(id,team,extra_run)
        if(576 < id && id < 637){
            if(result[team]){
                result[team] += extra_run;
            } else{
                result[team] = extra_run;
            }
        }
    }
    return result;
}


module.exports = extraRun;