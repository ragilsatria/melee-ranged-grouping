function meleeRangedGrouping (str) {
    //your code here
    if (!str) return []
    var splitStr = str.split(',')
    var splitGroup = []
    var ranged = []
    var melee = []
    var hasil = []
  
    for (var i = 0; i < splitStr.length; i++) {
      splitGroup.push(splitStr[i].split('-'))
    }
  
    for (var j = 0; j < splitGroup.length; j++) {
      if (splitGroup[j][1] === 'Melee') {
        melee.push(splitGroup[j][0])
      } else if (splitGroup[j][1] === 'Ranged') {
        ranged.push(splitGroup[j][0])
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