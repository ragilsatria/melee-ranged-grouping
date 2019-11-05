function meleeRangedGrouping(str) {
  //your code here
  if (str === "") {
    return [];
  }
  var arr = str.split(",");

  var nameClass = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split("-");
    nameClass.push(temp);
  }

  var result = [[], []];
  for (var i = 0; i < nameClass.length; i++) {
    if (nameClass[i][1] === "Ranged") {
      result[0].push(nameClass[i][0]);
    } else if (nameClass[i][1] === "Melee") {
      result[1].push(nameClass[i][1]);
    }
  }
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
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
