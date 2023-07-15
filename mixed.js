function createTeams(wGroupA, mGroupB, mGroupA, wGroupB) {

    const teamPairs = [];

    // Shuffle each category
    // mGroupA.sort(() => Math.random() - 0.5); 
    // wGroupA.sort(() => Math.random() - 0.5); 
    mGroupB.sort(() => Math.random() - 0.5); 
    wGroupB.sort(() => Math.random() - 0.5); 
  
    while (wGroupA.length > 0 && mGroupB.length > 0) {
      const playerA = wGroupA.shift();
      const playerB = mGroupB.shift(); // Remove the first player from groupB
      teamPairs.push([playerA, playerB]);
    }

    while (mGroupA.length > 0 && wGroupB.length > 0) {
        const playerA = mGroupA.shift();
        const playerB = wGroupB.shift(); // Remove the first player from groupB
        teamPairs.push([playerA, playerB]);
    }

    while (mgroupB.length > 0 && wGroupB.length > 0) {
        const playerB1 = mGroupB.shift();
        const playerB2 = wGroupB.shift();
        teamPairs.push([playerB1, playerB2]);
    }
    // console.log(mGroupB);
    // console.log(wGroupB);
  
    // if (groupB.length === 1) {
    //   teamPairs.push([groupB[0], null]);
    // }
  
    return teamPairs;
}

const wGroupA = ["Olivia", "Dancia", "Samantha", "Jessica"];
const mgroupB = ["David", "SimonR", "John", "Roman", "LucasN", "Lewis", "Oliver", "Abdul", "Azam", "Daniel", "Andy"];

const mGroupA = ["Paul", "Gurney", "Baldwin"];
const wGroupB = ["Beth", "Alice", "Allison", "Emily", "Izzy", "Georgia", "Katie", "Jo", "Kassandra", "Mathilde"];

const teams = createTeams(wGroupA, mgroupB, mGroupA, wGroupB);

teams.forEach(pair => {
  const [playerA, playerB] = pair;
  if (playerB === null) {
    console.log(playerA);
  } else {
    console.log(playerA + ' and ' + playerB);
  }
});