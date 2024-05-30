// code your solution here
function superbowlWin(superbowlData) {
    const winningYear = superbowlData.find(game => game.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
  
  // Example usage
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ...
  ];
  
  const winningYear = superbowlWin(record);
  
  if (winningYear) {
    console.log(`Super Bowl win: ${winningYear}`);
  } else {
    console.log("No Super Bowl wins found.");
  }
  