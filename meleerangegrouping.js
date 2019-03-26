function meleeRangedGrouping (str) {
  //your code here

var arr = str.split(',')
  var split = []
  var arrRanged = []
  var arrMelee = []

  if (str === '') {
    return []
  }
  
  for (var i = 0; i < arr.length; i++) {
    split.push(arr[i].split('-'))
  }
  
  var output =[]
  for (var j = 0; j < split.length; j++) {
   		if (split[j][1]==='Ranged') {
  			arrRanged.push(split[j][0])
  		} else {
  			arrMelee.push(split[j][0])
  		}
    }
    output.push(arrRanged)
    output.push(arrMelee)
    return output


}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []