function createTeams(groupA, groupB) {
    const teamPairs = [];
    groupA.sort(() => Math.random() - 0.5)  // Shuffle the players in groupA
    groupB.sort(() => Math.random() - 0.5); // Shuffle the players in groupB
  
    while (groupA.length > 0 && groupB.length > 0) {
      const playerA = groupA.shift();
      const playerB = groupB.shift(); // Remove the first player from groupB
      teamPairs.push([playerA, playerB]);
    }
  
    while (groupB.length > 1) {
      const playerB1 = groupB.shift(); // Remove the first player from groupB
      const playerB2 = groupB.shift(); // Remove the second player from groupB
      teamPairs.push([playerB1, playerB2]);
    }
  
    if (groupB.length === 1) {
      teamPairs.push([groupB[0], null]);
    }
  
    return teamPairs;
}
  
const groupA = ["Paul", "Gurney", "Jessica", "Samantha", "Baldwin"];
const groupB = ["David", "SimonR", "John", "Roman", "LucasN", "Lewis", "Oliver", "Abdul", "Azam", "Daniel", "Andy"];

const teams = createTeams(groupA, groupB);

teams.forEach(pair => {
  const [playerA, playerB] = pair;
  if (playerB === null) {
    console.log(playerA);
  } else {
    console.log(playerA + ' and ' + playerB);
  }
});

// Jessica and Roman
// Gurney and Lewis
// Baldwin and Andy
// Paul and Daniel
// Samantha and John
// Azam and Abdul
// SimonR and Oliver
// David and LucasN