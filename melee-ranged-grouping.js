function meleeRangedGrouping (str) {
    //your code here
    var diSplit = str.split(',')
    //console.log(split)

    if(str === ''){
        return []
    }

/*
OUTPUT: 
[ 'Razor-Ranged', 'Invoker-Ranged', 'Meepo-Melee', 'Axe-Melee', 'Sniper-Ranged' ]
[ 'Drow Ranger-Ranged', 'Chen-Ranged', 'Dazzle-Ranged', 'Io-Ranged' ]
[ '' ]
*/

    var arrayRanged = []
    var arrayMelee = []
    var hasil = []


    for(var i = 0; i < diSplit.length; i++){
        var splitLagi = diSplit[i].split('-')
        //console.log(splitLagi)

            if(splitLagi[1] === 'Ranged'){
                arrayRanged.push(splitLagi[0])
                //console.log(arrayRanged)
            }else{
                arrayMelee.push(splitLagi[0])
                //console.log(arrayMelee)
            }
    }

    hasil.push(arrayRanged)
    hasil.push(arrayMelee)
    return hasil
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []