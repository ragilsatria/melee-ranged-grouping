function meleeRangedGrouping(str) {
  // handle kosong
  if (str.length === 0) return [];

  // pisahkan koma
  var tempData = "";
  var tempResult = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      tempData += str[i];
    } else {
      tempResult.push(tempData);
      tempData = "";
    }

    if (i === str.length - 1) {
      tempResult.push(tempData);
    }
  }

  //   console.log(tempResult[0]);

  // pisahkan tanda -
  var tempResult3 = [];

  for (var j = 0; j < tempResult.length; j++) {
    var tempData2 = "";
    var tempResult2 = [];
    for (var k = 0; k < tempResult[j].length; k++) {
      if (tempResult[j][k] !== "-") {
        tempData2 += tempResult[j][k];
      } else {
        tempResult2.push(tempData2);
        tempData2 = "";
      }

      if (k === tempResult[j].length - 1) {
        tempResult2.push(tempData2);
      }
    }
    tempResult3.push(tempResult2);
  }

  //   console.log(tempResult3);

  // kelompokkan ranged dan melee
  var rangedGroup = [];
  var meleeGroup = [];

  for (var l = 0; l < tempResult3.length; l++) {
    if (tempResult3[l][1] === "Ranged") {
      rangedGroup.push(tempResult3[l][0]);
    } else if (tempResult3[l][1] === "Melee") {
      meleeGroup.push(tempResult3[l][0]);
    }
  }

  return [rangedGroup, meleeGroup];
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
