const fs = require("fs");
const csv = require("csvtojson");
const mathcesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonedPerYear = require("./ipl/matchesWonPerYear");
const extraRun = require("./ipl/extraRun");
const enomicalBowlers = require("./ipl/economicalBowler");
const winnerTeam = require("./ipl/winnerTeamAtVenue");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_SEC = "./public/dataSecond.json";
const EXTRA_RUN_FILE_PATH = "./public/extraRun.json";
const TOP_BOWLER_FILE_PATH = "./public/topBowler.json";
const WINNER_TEAMS_FILE_PATH = "./public/winnerTeams.json";

function main(){
    csv().fromFile(MATCHES_FILE_PATH).then(matches=>{
        csv().fromFile(DELIVERIES_FILE_PATH).then(deliveries=>{
            let result = mathcesPlayedPerYear(matches);
            saveMatchesPlayedPerYear(result);
            // console.log("Deliver Data");
            // console.log(deliveries.slice(0,1))
            // console.log("match Data");
            // console.log(matches.slice(0,1));

            // second graph
            // console.log(matchesWonedPerYear(matches));
            let result2 = matchesWonedPerYear(matches);
            saveMatchesWonPerYear(result2);
            // Thried Graph
            let result3 = extraRun(deliveries);
            // console.log(result3);
            saveExtraRuns(result3);

            // 4th Graph economic bowler
            let result4 = enomicalBowlers(deliveries);
            // console.log(result4);
            saveBowler(result4);

            // 5th Graph
            let result5 = winnerTeam(matches);
            saveWinnerTeams(result5);
            
        });
    });
};

// Fisrt Graph
function saveMatchesPlayedPerYear(result){
    const jsonData = {matchesPlayedPerYear:result};
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString,"utf8", err=>{
        if(err){
            console.log(err);
        }
    });
};



// Second Graph
function saveMatchesWonPerYear(result2){
    const jsonData = {matchesWonPerYear : result2};
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH_SEC,jsonString,"utf8", err => {
        if(err){
            console.log(err)
        }
    })
}

// Thrid Graph
function saveExtraRuns(result){
    const jsonData = {extraRun:result};
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(EXTRA_RUN_FILE_PATH, jsonString, "utf8", err=>{
        if(err){
            console.log(err)
        }
    });
};

// 4th graph
function saveBowler(result){
    const jsonData = {economicBolwer:result};
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(TOP_BOWLER_FILE_PATH,jsonString,"utf8",err=>{
        if(err){
            console.log(err)
        }
    })
};

// 5th Graph
function saveWinnerTeams(result){
    const jsonData = {venues:result};
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(WINNER_TEAMS_FILE_PATH,jsonString,"utf8",err=>{
        if(err){
            console.log(err);
        }
    });
}
main()