function meleeRangedGrouping (str) {
    //your code here
    var array = []
    array = str.split(',')
    var dashSplit = []
    var output = [[] , []]
  
    if (str.length === 0) {
      return []
    }
  
  
    for (i = 0; i < array.length; i++) {
     dashSplit.push(array[i].split('-'))
    }
    //return dashSplit;
  
    // [ [ 'Razor', 'Ranged' ],
    //   [ 'Invoker', 'Ranged' ],
    //   [ 'Meepo', 'Melee' ],
    //   [ 'Axe', 'Melee' ],
    //   [ 'Sniper', 'Ranged' ] ]
    // [ [ 'Drow Ranger', 'Ranged' ],
    //   [ 'Chen', 'Ranged' ],
    //   [ 'Dazzle', 'Ranged' ],
    //   [ 'Io', 'Ranged' ] ]
    // [ [ '' ] ]
  
    for (var j = 0; j < dashSplit.length; j++) {
      if (dashSplit[j][1] === 'Ranged') {
        output[0].push(dashSplit[j][0])
      } else {output[1].push(dashSplit[j][0])}
    }
  
    return output;
  
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []