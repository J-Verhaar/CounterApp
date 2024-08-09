let homeScore = 0;
let awayScore = 0;

let homeScoreEl = document.getElementById("home-score-el");
let awayScoreEl = document.getElementById("away-score-el");

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
  } else if (team === "away") {
    awayScore += points;
    awayScoreEl.textContent = awayScore;
  } else {
    throw new console.error("no team");
  }
}

function resetPoints() {
  homeScore = 0;
  awayScore = 0;
  homeScoreEl.textContent = homeScore;
  awayScoreEl.textContent = awayScore;
}
