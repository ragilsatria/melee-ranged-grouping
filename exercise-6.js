function meleeRangedGrouping (str) {
    var str = str.split(",")
    var strArr = []
    var result = []
    result[0] = []
    result[1] = []
    for(i = 0; i < str.length; i++){
        strArr.push(str[i].split("-"))
    }
    for(i = 0; i < strArr.length; i++){
        if(strArr[i][1] === "Ranged"){
            result[0].push(strArr[i][0])
        }
        else if(strArr[i][1] === "Melee"){
            result[1].push(strArr[i][0])
        }
    }
    if(result[0].length === 0 && result[1].length ===0){
        return []
    }
    else{
        console.log(str)
    return result
    }
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []