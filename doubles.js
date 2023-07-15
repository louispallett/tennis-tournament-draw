function createTeams(groupA, groupB) {

    const teamPairs = [];

    // Shuffle each group
    groupA.sort(() => Math.random() - 0.5)  
    groupB.sort(() => Math.random() - 0.5);
  
    while (groupA.length > 0 && groupB.length > 0) {
      //One player from groupA, one from groupB
      const playerA = groupA.shift();
      const playerB = groupB.shift();
      teamPairs.push([playerA, playerB]);
    }
  
    while (groupB.length > 1) {
      // Remaining players from groupB matched
      const playerB1 = groupB.shift(); 
      const playerB2 = groupB.shift(); 
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