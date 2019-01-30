function meleeRangedGrouping (str) {
  var container = []
  var group = []
  var ranged = []
  var melee = []
  var strSplit = str.split(',') 
  
  if (str === '') {
      return []
  }

  for (i = 0; i < strSplit.length; i++) {
      group.push(strSplit[i].split('-'))
  }

  for (j = 0; j < group.length; j++) {
    if (group[j][1] == 'Ranged') {
        ranged.push(group[j][0])
    } else if (group[j][1] == 'Melee') {
        melee.push(group[j][0])
    } 
  }
 container.push(ranged)
 container.push(melee)
 return container
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []