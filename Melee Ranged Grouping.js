function meleeRangedGrouping (str) {
    var result = []
    var arrStr = str.split(',')
    var arrStr2 = []
    var tempArr = []
    var tempArr1 = []
    
    if(str.length === 0){
        return result
    }
    for(var i=0;i<arrStr.length;i++){
        arrStr2.push(arrStr[i].split('-'))
        for(var j=0;j<arrStr2[i].length;j++){
            if(arrStr2[i][j] === 'Ranged'){
                tempArr.push(arrStr2[i][0])
            }else if( arrStr2[i][j] === 'Melee'){
                tempArr1.push(arrStr2[i][0])
            }
        }
    }
    result.push(tempArr,tempArr1)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []