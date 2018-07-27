function meleeRangedGrouping (str) {
  var result = []
  if (str.length !== 0) {
    var strSplit = str.split(',')
    var tempR = []
    var tempM = []
    for (var i = 0; i < strSplit.length; i++){
      if (strSplit[i][strSplit[i].length-1] === 'd'){
        var temp = strSplit[i].split('-')
        tempR.push(temp[0])
      } else if (strSplit[i][strSplit[i].length-1] === 'e'){
        var temp = strSplit[i].split('-')
        tempM.push(temp[0])
      }
    }
    result.push(tempR)
    result.push(tempM)
  }
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
