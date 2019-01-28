function meleeRangedGrouping (str) {
  //your code here
  if (str.length === 0) {
    return [];
  }
  var char = [];
  var grouping = [];
  var obj = {
    Ranged: [],
    Melee: []
  };
  var strTemp = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "," && str[i] !== "-") {
      strTemp += str[i];
    }
    if (str[i] === "," || str[i] === "-") {
      char.push(strTemp);
      strTemp = "";
    }
    if (i === str.length - 1) {
      char.push(strTemp);
    }
  }

  for (var j = 0; j < char.length - 1; j += 2) {
    grouping.push([char[j], char[j + 1]]);
  }

  for (var k = 0; k < grouping.length; k++) {
    if (obj[grouping[k][1]]) {
      obj[grouping[k][1]].push(grouping[k][0]);
    }
  }

  return Object.values(obj);
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []