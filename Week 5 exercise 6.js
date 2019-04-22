function meleeRangedGrouping (str) {
  
  if(str == ''){
    return []
  }

  var arr = str.split(',')
  var temp = []
  for(var i = 0; i < arr.length; i++){
    var tamp = arr[i].split('-')
    temp.push(tamp)
  }

  var hasil = []
  var ranged = []
  var melee = []
  for(var i = 0; i < temp.length; i++){
    if(temp[i][1] == 'Ranged'){
      ranged.push(temp[i][0])
    }
    if(temp[i][1] == 'Melee'){
      melee.push(temp[i][0])
    }
  }


  hasil.push(ranged, melee)

  return hasil
  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []