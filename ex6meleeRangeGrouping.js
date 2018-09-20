
function meleeRangedGrouping(str) {
  var string = str.split(',')
  var arrTmp = []
  var Ranged = []
  var Melee = []
  var output = []

  if (str.length === 0) {
    return []
  }
  for (var i = 0; i < string.length; i++) {
    arrTmp.push(string[i].split('-'))
  }
  for (var i = 0; i < arrTmp.length; i++) {
    if (arrTmp[i][1] === 'Ranged') {
      Ranged.push(arrTmp[i][0])
    }
    else {
      Melee.push(arrTmp[i][0])
    }
  }
  output.push(Ranged)
  output.push(Melee)
  
  return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []