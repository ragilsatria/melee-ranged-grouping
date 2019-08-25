function meleeRangedGrouping(str) {
  //your code here
  if (str.length === 0) {
    return [];
  } else {
    var result = [[], []];
    var arr = str.split(",");
    for (i = 0; i < arr.length; i++) {
      var heroes = arr[i].split("-");
      if (heroes[1] === "Ranged") {
        result[0].push(heroes[0]);
      } else {
        result[1].push(heroes[0]);
      }
    }
    return result;
  }
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
