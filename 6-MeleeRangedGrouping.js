function meleeRangedGrouping(str) {
  var result = [];
  var ranged = [];
  var melee = [];
  var temp = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] == "-" && str[i + 1] == "R") {
      ranged.push(temp);
      temp = "";
    } else if (str[i] == "-" && str[i + 1] == "M") {
      melee.push(temp);
      temp = "";
    } else if (str[i] == ",") temp = "";
    else temp += str[i];
  }

  result.push(ranged);
  result.push(melee);

  if (str.length == 0) return [];
  else return result;
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
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
