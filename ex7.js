function meleeRangedGrouping(str) {
  if (str.length === 0) {
    return [];
  }
  srr = "";
  var temp = [];
  var gab = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      temp.push(srr);
      srr = "";
    } else if (str[i] === ",") {
      temp.push(srr);
      gab.push(temp);
      temp = [];
      srr = "";
    } else {
      srr += str[i];
    }
  }
  temp.push(srr);
  gab.push(temp);

  var ranged = [];
  var melee = [];
  for (i = 0; i < gab.length; i++) {
    if (gab[i][1] === "Ranged") {
      ranged.push(gab[i][0]);
    } else {
      melee.push(gab[i][0]);
    }
  }
  var jadi = [ranged, melee];
  return jadi;
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
