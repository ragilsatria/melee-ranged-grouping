function meleeRangedGrouping (str) {
  //your code here
  var output = []
  if(str.length === 0) {
    return output
  }

  var string = str.split(',')
  var result = [[], []]

  for(var i = 0; i < string.length; i++) {
    var tampung = ''
    for(var j = 0; j < string[i].length; j++) {
      if(string[i][j] === '-' && string[i][j+1] === 'R') {
        result[0].push(tampung)
      } else if (string[i][j] === '-' && string[i][j+1] === 'M') {
        result[1].push(tampung)
      }
      tampung += string[i][j]
    }
  }
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []