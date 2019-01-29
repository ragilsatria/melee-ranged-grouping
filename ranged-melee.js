function meleeRangedGrouping(str) {
  var split = str.split(',');
  var [ranged, melee, result, result2] = [
    [],
    [],
    [],
    []
  ];
  for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < split[i].length; j++) {
      if (typeof split[i] === "undefined") {
        return [];
      } else {
        if (split[i][j] === "-" && split[i][j + 1] === "R") {
          ranged.push(split[i]);
        } else if (split[i][j] === "-" && split[i][j + 1] === "M") {
          melee.push(split[i]);
        };
      };
    };
  };
  for (i of ranged) {
    var dash = i.split("-");
    result.push(dash[0]);
  };
  for (j of melee) {
    var dash = j.split("-");
    result2.push(dash[0]);
  };
  if (result[0] === undefined && result2[0] === undefined) {
    return [];
  } else {
    return [result, result2];
  };
};


console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
