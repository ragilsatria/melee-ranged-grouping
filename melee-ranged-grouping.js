function meleeRangedGrouping(str) {
  //your code here
  // input check
  if (!str || typeof str !== "string") {
    return [];
  }
  var heroes = [],
    temp = "",
    result = [[], []];
  // split ","
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      heroes.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  heroes.push(temp); // push last element
  // loop thru heroes
  for (let i = 0; i < heroes.length; i++) {
    var name = "";
    for (let j = 0; j < heroes[i].length; j++) {
      if (heroes[i][j] === "-" && heroes[i][j + 1] === "M") {
        result[1].push(name);
        break;
      } else if (heroes[i][j] === "-" && heroes[i][j + 1] === "R") {
        result[0].push(name);
        break;
      } else {
        name += heroes[i][j];
      }
    }
  }
  return result;
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
