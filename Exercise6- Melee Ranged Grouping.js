function meleeRangedGrouping(str) {
  if (str.length == 0) {
    return [];
  }

  var splitGroup = [];
  var tempSplit = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ",") {
      tempSplit += str[i];
    } else {
      splitGroup.push(tempSplit);
      tempSplit = "";
    }
  }

  splitGroup.push(tempSplit);

  var ranged = [];
  var melee = [];
  for (var j = 0; j < splitGroup.length; j++) {
    if (splitGroup[j][splitGroup[j].length - 1] == "d") {
      ranged.push(splitGroup[j]);
    } else if (splitGroup[j][splitGroup[j].length - 1] == "e") {
      melee.push(splitGroup[j]);
    }
  }

  var tempRanged = "";
  var arrRanged = [];

  for (var k = 0; k < ranged.length; k++) {
    for (var l = 0; l < ranged[k].length; l++) {
      if (ranged[k][l] != "-") {
        tempRanged += ranged[k][l];
      } else if (ranged[k][l] == "-") {
        arrRanged.push(tempRanged);
        tempRanged = "";
        break;
      }
    }
  }

  var result = [];

  result.push(arrRanged);

  var tempMelee = "";
  var arrMelee = [];
  for (var k = 0; k < melee.length; k++) {
    for (var l = 0; l < melee[k].length; l++) {
      if (melee[k][l] != "-") {
        tempMelee += melee[k][l];
      } else if (melee[k][l] == "-") {
        arrMelee.push(tempMelee);
        tempMelee = "";
        break;
      }
    }
  }

  result.push(arrMelee);
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
