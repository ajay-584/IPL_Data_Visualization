function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

// ================================================================================Scond Graph=========================
function fetchAndVisualizeDataSecondGraph(){
  fetch("./dataSecond.json").then(data => data.json()).then(visualizeDataSecondGraph);
}

fetchAndVisualizeDataSecondGraph();

function visualizeDataSecondGraph(secondData){
  visualizeMatchWonPerYear(secondData.matchesWonPerYear);
  return;
}

function visualizeMatchWonPerYear(matchesWonPerYear){
  // console.log(matchesWonPerYear)
  const team = []
  for(x of matchesWonPerYear){
    for(y in x){
      if(team.indexOf(y) < 0 && y.length > 0){
        team.push(y)
      }
    }
  }
  // console.log(team)
  const Kolkata = [];
  const Bangalore = [];
  const Chennai = [];
  const Punjab = [];
  const Rajasthan =[];
  const Delhi = [];
  const Mumbai = [];
  const Deccan = [];
  const Kerala = [];
  const Pune = [];
  const none = [];
  const Hyderabad = [];
  const Rising_pune = [];
  const Gujarat = [];
  const Delhi_cap = [];
  for(let won in matchesWonPerYear){
    // console.log(won);
    Kolkata.push(matchesWonPerYear[won]['Kolkata Knight Riders']);
    Bangalore.push(matchesWonPerYear[won]['Royal Challengers Bangalore']);
    Chennai.push(matchesWonPerYear[won]['Chennai Super Kings'] || "");
    Punjab.push(matchesWonPerYear[won]['Kings XI Punjab']);
    Rajasthan.push(matchesWonPerYear[won]['Rajasthan Royals'] || "");
    Delhi.push(matchesWonPerYear[won]['Delhi Daredevils'] || "");
    Mumbai.push(matchesWonPerYear[won]['Mumbai Indians'] || "");
    Deccan.push(matchesWonPerYear[won]['Deccan Chargers'] || "");
    Kerala.push(matchesWonPerYear[won]['Kochi Tuskers Kerala'] || "");
    Pune.push(matchesWonPerYear[won]['Pune Warriors'] || "");
    none.push(matchesWonPerYear[won][''] || "");
    Hyderabad.push(matchesWonPerYear[won]['Sunrisers Hyderabad'] || "");
    Rising_pune.push(matchesWonPerYear[won]['Rising Pune Supergiants'] || "");
    Gujarat.push(matchesWonPerYear[won]['Gujarat Lions'] || "");
    Delhi_cap.push(matchesWonPerYear[won]['Delhi Capitals'] || "");
  }

Highcharts.chart('container', {
  chart: {
      type: 'column'
  },
  title: {
      text: '2.Number of matches won by each team over all the years of IPL'
  },
  subtitle: {
      text: 'Source: Data set'
  },
  xAxis: {
      categories: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Matches Won'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
    name: team[0],
    data: Kolkata

  }, {
      name: team[1],
      data: Chennai

  }, {
      name: team[2],
      data: Delhi

  }, {
      name: team[3],
      data: Bangalore

  }, {
    name: team[4],
    data: Rajasthan

}, {
  name: team[5],
  data: Punjab

}, {
  name: team[6],
  data: Deccan

}, {
  name: team[7],
  data: Mumbai

}, {
  name: team[8],
  data: Pune

}, {
  name: team[9],
  data: Kerala

}, {
  name: team[10],
  data: Hyderabad

}, {
  name: team[11],
  data: Rising_pune

}, {
  name: team[12],
  data: Gujarat
}, {
  name: team[13],
  data: Rising_pune
}, {
  name: team[14],
  data: Delhi_cap

}]
});

}
// =============================================Third graph======================================
function fetchExtraRun(){
  fetch("./extraRun.json").then(data=> data.json()).then(visualizeExtraRun);
}
fetchExtraRun();
function visualizeExtraRun(data){
  extraRunData(data.extraRun);
  return;
}
function extraRunData(data){
  let result = []
  for(team in data){
    result.push([team, data[team]])
  }
  // console.log(result)

Highcharts.chart("container3", {
  chart: {
    type: "column"
  },
  title: {
    text: "3.Extra runs conceded by each team in 2016"
  },
  subtitle: {
    text:
      'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "Extra Runs"
    }
  },
  series: [
    {
      name: "Teams",
      data: result
    }
  ]
});

}
// ================================================= 4th Graph economic bowler ===================================
function fetchbolwer(){
  fetch("./topBowler.json").then(data=> data.json()).then(visualizeBowler);
}
fetchbolwer();
function visualizeBowler(data){
  topbowler(data.economicBolwer);
  return;
}
function topbowler(data){
  let bolwerData = [];
  for(bowler in data){
    bolwerData.push([bowler, data[bowler]])
  }
  // console.log(bolwerData);

Highcharts.chart("container4", {
  chart: {
    type: "column"
  },
  title: {
    text: "4.Top 10 Economical Bowlers in  2015"
  },
  subtitle: {
    text:
      'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "Economy"
    }
  },
  series: [
    {
      name: "Bowlers",
      data: bolwerData
    }
  ]
});

}

// ================================================= 5th graph winner teams at venue ===================================

function fetchStory(){
  fetch("./winnerTeams.json").then(data=>data.json()).then(stroyDataVisualization);
}

fetchStory();
function stroyDataVisualization(data){
  storyData(data.venues);
  return;
}
function socre(team,result){
  const arr = [];
  for(let i in result){
    let a = true;
    for(let j in result[i]){
      // console.log(result[i][j]);
      if(team === j){
        // console.log(result[i][j])
        arr.push(result[i][j])
        a = false;
      }
    }
    if(a){
      arr.push(0);
    }
  }
  return arr;
}
function storyData(result){
  const venue = [];
  for(ven in result){
    venue.push(ven);
  }
  // console.log(venue)
  let data = [];
  for(v in result){
    // console.log(result[v]);
    let temp = {};
    for(team in result[v]){
      // console.log(team,result[v][team]);
      temp["name"] = team;
      temp["data"] = socre(team,result);
    }
    let y = true;
    for(x of data){
      // console.log(x.name,temp.name);
      if(x.name === temp.name){
        y = false;
      }
      // console.log(y);
    }
    if(y){
      data.push(temp);
    }
    
  }
  // console.log(venue);
  // console.log(data);
  Highcharts.chart('container5', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5. Story: Matches Won by each team per veneue'
    },
    xAxis: {
        categories: venue
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Numbers of matches won by teams'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: data
});
}