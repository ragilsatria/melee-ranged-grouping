function meleeRangedGrouping(str) {
  //your code here
  if (str === "") {
    return [];
  }
  var range = [];
  var mele = [];
  var result = [];
  var strSplitKoma = str.split(",");
  for (var i = 0; i < strSplitKoma.length; i++) {
    var strSplitStrip = strSplitKoma[i].split("-");
    if (strSplitStrip[1] === "Ranged") {
      range.push(strSplitStrip[0]);
      // console.log(range)
    } else {
      mele.push(strSplitStrip[0]);
    }
  }
  result.push(range, mele);
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
