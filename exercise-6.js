function meleeRangedGrouping (str) {
  
  if (str === '') {
    return []
  }
  var newArr = str.split(',');
  var RMarr = [[],[]];

  for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] === '-') {
        if (newArr[i][j + 1] === 'R') {
          RMarr[0].push(newArr[i].substr(0, j))
        } else if (newArr[i][j + 1] === 'M') {
          RMarr[1].push(newArr[i].substr(0, j))
        }
      }
    }
  }
  return RMarr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
