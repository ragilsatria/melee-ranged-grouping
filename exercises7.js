function meleeRangedGrouping (str) {
    var testArray = str.split(',')
    // console.log(testArray)
    // console.log(testArray[0].split('-')[1])
    // console.log(str.length)
    if(!str.length){
        return []
    }
    var result = []
    var arrSplit = []
    var arrRanged = []
    var arrMelee = []
    for(var i = 0; i < testArray.length; i++){
        if(testArray[i].split('-')[1] === "Ranged"){
            arrRanged.push(testArray[i].split('-')[0])
        } else if(testArray[i].split('-')[1] === "Melee"){
            arrMelee.push(testArray[i].split('-')[0])
        }
    }
    result.push(arrRanged)
    result.push(arrMelee)
    return result

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []