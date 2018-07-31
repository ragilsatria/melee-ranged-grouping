function meleeRangedGrouping (str) {
  //your code here
  var split = str.split(',')

  var arr = []
  
  for (var i = 0; i < split.length; i++) {
    var pisah = split[i].split('-')
    arr.push(pisah) 
  }

  var heroRange = []
  var heroMelee = []
  for (var j = 0; j < arr.length; j++) {
    if (arr[j][1] === 'Ranged') {
      heroRange.push(arr[j][0])
    } else {
      heroMelee.push(arr[j][0])
    }
  }
  var newArr = []

  if (str === '') {
    return newArr
  }
  
  newArr.push(heroRange ,heroMelee)

  return newArr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []