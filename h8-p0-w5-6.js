function meleeRangedGrouping (str) {
    //your code here

    var newarr = str.split(',')
    var newarr2 = newarr.join('-')
    var newarr3 = newarr2.split('-')
    var arrranged = []
    var arrMelee = []
    var result = []

    for(var i = 0; i < newarr3.length; i++){
        if(newarr3[i] === 'Ranged'){
            arrranged.push(newarr3[i-1])

        }else if(newarr3[i] === 'Melee'){
            arrMelee.push(newarr3[i-1])

        }

    }
    result.push(arrranged, arrMelee)
    
    return result

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []