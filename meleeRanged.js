function meleeRangedGrouping(str) {
  if (str.length === 0) {
    return [];
  } else {
    str += ",";
    strArr = [];
    var temp = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ",") {
        strArr.push(temp);
        temp = "";
      } else {
        temp += str[i];
      }
    }
    temp = "";
    var noDash = [];
    for (let i = 0; i < strArr.length; i++) {
      noDash.push([]);
      strArr[i] += "-";
      for (let j = 0; j < strArr[i].length; j++) {
        if (strArr[i][j] === "-") {
          noDash[i].push(temp);
          temp = "";
        } else {
          temp += strArr[i][j];
        }
      }
    }

    var result = [[], []];
    for (let i = 0; i < noDash.length; i++)
      if (noDash[i][1] === "Ranged") {
        result[0].push(noDash[i][0]);
      } else if (noDash[i][1] === "Melee") {
        result[1].push(noDash[i][0]);
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
