function meleeRangedGrouping(str) {
  //your code here
  if (str=="") return []

  //Split words sperated  by coma
  var arrSplit = [];
  var char = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      char += str[i];
    } else if (str[i] == ",") {
      arrSplit.push(char);
      char = "";
    }
  }
  arrSplit.push(char);
  // console.log(arrSplit);
  var temp = [];
  //grouping hero and weapo
  for (i = 0; i < arrSplit.length; i++) {
    var split2 = [];
    var char2 = "";
    for (j = 0; j < arrSplit[i].length; j++) {
      if (arrSplit[i][j] !== "-") {
        char2 += arrSplit[i][j];
      } else if (arrSplit[i][j] == "-") {
        split2.push(char2);
        char2 = "";
      }
    }
    split2.push(char2);
    temp.push(split2);
  }
  var res = [];
  var ranged = [],
    melee = [];
  for (i = 0; i < temp.length; i++) {
    if (temp[i][1] === "Ranged") {
      ranged.push(temp[i][0]);
    } else if (temp[i][1] === "Melee") {
      melee.push(temp[i][0]);
    }
  }
  res.push(ranged, melee);
  return res
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
