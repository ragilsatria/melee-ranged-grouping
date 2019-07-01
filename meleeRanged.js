function meleeRangedGrouping (str) {
  //your code here
  var result = []
  if(str.length == 0){
    return result
  } else {
    var newGroup = str.split(',')
    var splitGroup = []
    var ranged = []
    var melee = []
    var result1 = []
    for(i = 0; i < newGroup.length;i++){
      splitGroup.push(newGroup[i].split('-'))
        if(splitGroup[i][1] === 'Ranged'){
      ranged.push(splitGroup[i][0])
      } else if (splitGroup[i][1] === 'Melee'){
      melee.push(splitGroup[i][0])
    }
  }
  result1.push(ranged, melee)
  return result1
}
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []