function meleeRangedGrouping (str) {
    //your code here
    var result = [];
    var ranged = [];
    var melee = [];
    var splitted = str.split(',')
    
    if (str === '') return result

    for (let range of splitted) {
        var subSplit = range.split('-')
        if (subSplit[1] === 'Ranged') {
            ranged.push(subSplit[0])
        } else {
            melee.push(subSplit[0])
        }
    }

    result.push(ranged, melee)
    return result

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []