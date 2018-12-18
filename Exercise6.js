function meleeRangedGrouping(str) {
  var result = [];
  var temp1 = [];
  var temp2 = [];
  var strSplit = str.split(",");
  for (var i = 0; i < strSplit.length; i++) {
    var strArr = strSplit[i].split("-");
    if (strArr[1] === "Ranged") {
      temp1.push(strArr[0]);
    } else {
      temp2.push(strArr[0]);
    }
    if(str === ''){
        return []
    }

  }
  result.push(temp1, temp2);
  return result;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
[ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
