function meleeRangedGrouping(str) {
  //your code here
  if (str.length === 0) {
    return [];
  }
  let heroes = [[], []];
  let temp = [];
  let tempStr = "";

  // spliting without built in function
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "," || i === str.length - 1) {
      temp.push(tempStr);
      tempStr = "";
    } else {
      tempStr += str[i];
    }
  }

  // looping each item in temp array
  // and check word after character "-"
  // if "R" push to heroes index [0]
  // if "M" push to heroes index [1]
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      if (temp[i][j] === "-") {
        if (temp[i][j + 1] === "R") {
          heroes[0].push(tempStr);
        } else if (temp[i][j + 1] === "M") {
          heroes[1].push(tempStr);
        }
        tempStr = "";
        break;
      } else {
        tempStr += temp[i][j];
      }
    }
  }
  return heroes;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
