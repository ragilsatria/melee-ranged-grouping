function meleeRangedGrouping(str) {
  //your code here
  if (!str) {
    return [];
  }
  var pisahKoma = [];
  var temp = "";
  for (var i = 0; i <= str.length; i++) {
    if (str[i] === "," || i === str.length) {
      pisahKoma.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  var pisahDash = [];
  for (var i = 0; i < pisahKoma.length; i++) {
    var split = [];
    var temp1 = "";
    for (var j = 0; j <= pisahKoma[i].length; j++) {
      if (pisahKoma[i][j] === "-" || j === pisahKoma[i].length) {
        split.push(temp1);
        temp1 = "";
      } else {
        temp1 += pisahKoma[i][j];
      }
    }
    pisahDash.push(split);
  }
  var melee = [];
  var ranged = [];
  for (var i = 0; i < pisahDash.length; i++) {
    if (pisahDash[i][1] === "Melee") {
      melee.push(pisahDash[i][0]);
    } else {
      ranged.push(pisahDash[i][0]);
    }
  }
  var hasil = [ranged, melee];
  return hasil;
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
