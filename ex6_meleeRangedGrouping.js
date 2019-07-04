function meleeRangedGrouping (str) {
    var arr = str.split(',')
    var ranged = []
    var melee = []

    if (str == undefined || str.length == 0) {
      return []
    }
    for (var i = 0; i < arr.length; i++) {
      var newArr = []
      newArr.push(arr[i].split('-'))
     for (var j = 0; j < newArr.length; j++) {
     if (newArr[j][1] == 'Ranged') {
      ranged.push(newArr[j][0])
     } else {
       melee.push(newArr[j][0])
     }
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