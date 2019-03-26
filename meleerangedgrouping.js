function meleeRangedGrouping (str) {
  //your code here

  var arrSplitkoma = str.split(',')
  var arrHasilsplit = []
  var arrRanged = []
  var arrMelee = []

  if (str === '') {
    return []
  }
  
  for (var i = 0; i < arrSplitkoma.length; i++) {
    arrHasilsplit.push(arrSplitkoma[i].split('-'))
  }
  
  var output =[]
  for (var j = 0; j < arrHasilsplit.length; j++) {
   		if (arrHasilsplit[j][1]==='Ranged') {
  			arrRanged.push(arrHasilsplit[j][0])
  		} else {
  			arrMelee.push(arrHasilsplit[j][0])
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
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []