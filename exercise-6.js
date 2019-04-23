// BELUM SELESAIII
function meleeRangedGrouping (str) {
  //your code here
  if (str.length == 0) {
    return []
  }
  
  var newArr = []
  var oneData = []
  var oneVal = ''

  for (var x = 0; x < str.length; x++) {
    if (str[x] == '-') {
      oneData.push(oneVal)
      oneVal = ''
    } else if (str[x] == ',') {
      oneData.push(oneVal)
      newArr.push(oneData)
      oneData = []
      oneVal = ''
    } else if (x == str.length - 1) {
      oneVal += str[x]
      oneData.push(oneVal)
      newArr.push(oneData)
    } else {
      oneVal += str[x]
    }
  }

  var ranged = []
  var melee = []

  for (var x = 0; x < newArr.length; x++) {
    if (newArr[x][1] == 'Ranged') {
      ranged.push(newArr[x][0])
    } else {
      melee.push(newArr[x][0])
    }
  }
  return [ranged, melee]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []