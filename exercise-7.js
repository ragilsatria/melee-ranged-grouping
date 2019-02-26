function meleeRangedGrouping (str) {
    //your code here
    var newStr = str.split(',')
    var result = []
    if (str === ''){
        return result
    }
    var tempMelee = []
    var tempRanged = []
    for(var i = 0 ; i< newStr.length ; i++){
       var strNew = newStr[i].split('-')
       if(strNew[1] === 'Ranged'){
         tempRanged.push(strNew[0])
        }
       if(strNew[1] === 'Melee'){
         tempMelee.push(strNew[0])
        }
    }
    result.push(tempRanged , tempMelee)
    return result
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []