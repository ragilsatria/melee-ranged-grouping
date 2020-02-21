function meleeRangedGrouping (str) {
  //your code here
  
  var result = []
  var tampung = ''
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < str[i].length; j++){
        if(str[i] === '-' || str[i][j] === ','){
            result.push(tampung)
            tampung = ''
        } else {
            tampung += str[i][j]
        }  
    }
  }
  
  result.push(tampung)

  var result2 = []
  var result3 = []
  var result4 = []
  for(var i = 1; i < result.length; i++){
      if(result[i] === 'Ranged'){
          result2.push(result[i-1])
      } else if (result[i] === 'Melee') {
          result3.push(result[i-1])
      }
  }
  result4.push(result2)
  result4.push(result3)

  if(str === ''){
      return []
  }
  return result4
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []