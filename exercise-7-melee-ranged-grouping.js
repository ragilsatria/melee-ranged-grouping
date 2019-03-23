function meleeRangedGrouping (str) {
    //your code here
    if (str.length === 0 ){
        return []
    }

    var grouped = str.split(',')
    var each = []
    var output = []
    
    for (var i = 0; i < grouped.length; i++){
        // console.log (grouped[i])
        each.push(grouped[i].split('-'))
    }

    var melee = []
    var ranged = []

    for (var i = 0; i < each.length; i++){
        // console.log (each[i])
        if (each[i][1] === 'Ranged'){
            ranged.push(each[i][0])
        } else if (each[i][1] === 'Melee'){
            melee.push(each[i][0])
        }
    }
    output.push(ranged)
    output.push(melee)

    return output
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []