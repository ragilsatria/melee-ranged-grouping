function meleeRangedGrouping (str) {
  //your code here
  if (str.length<1) {
    return []
  } else {
  var heroes = []
  var heroes2 =[]
  heroes = str.split(",")
  // console.log(heroes)
  for (var i=0; i<heroes.length; i++) {
    var cage =[]
    cage.push(heroes[i].split("-"))
    heroes2.push(cage)
  }
  // console.log(heroes2)
  var cageR= []
  var cageM= []
  for (var j=0; j<heroes2.length;j++) {
    if (heroes2[j][0][1] === "Ranged") {
      cageR.push(heroes2[j][0][0])
    } else if (heroes2[j][0][1] === "Melee") {
      cageM.push(heroes2[j][0][0])
    }
  }
  
  var heroes3 =[]
  heroes3.push(cageR)
  heroes3.push(cageM)
  return heroes3
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []