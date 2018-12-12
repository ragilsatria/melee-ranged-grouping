function meleeRangedGrouping (str) {
    //your code here
    var strSplit = str.split(',')
    var resultRanged = []
    var resultMelee = []
    var result = []

    if (str === ''){
        return []
    }
    
    for (var i = 0; i < strSplit.length; i++){
        var strSplitName = strSplit[i].split('-')
        // console.log(strSplitName);

        if(strSplit[i].indexOf('Ranged') !== -1){
            resultRanged.push(strSplitName[0])
        }
        if(strSplit[i].indexOf('Melee') !== -1){
            resultMelee.push(strSplitName[0])
        }
    }
    result.push(resultRanged, resultMelee)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []