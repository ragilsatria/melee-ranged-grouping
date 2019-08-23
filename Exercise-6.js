function meleeRangedGrouping(str) {
  var split = str.split(",");
  var group = [];
  var group2 = [];
  var result = [];
  var result2 = [];
  var final = [];
  if (str.length < 1) {
    return final;
  }
  for (var i = 0; i < split.length; i++) {
    group.push([split[i]]);
  }
  for (var i = 0; i < group.length; i++) {
    for (var j = 0; j < group[i].length; j++) {
      var split2 = group[i][j].split("-");
      group2.push(split2);
    }
  }
  for (var i = 0; i < group2.length; i++) {
    if (group2[i][1] === "Ranged") {
      result.push(group2[i][0]);
    } else {
      result2.push(group2[i][0]);
    }
  }
  final.push(result);
  final.push(result2);
  return final;
}

// TEST CASE

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
