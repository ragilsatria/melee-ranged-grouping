function meleeRangedGrouping (str) {
    //your code here
    var arrRanged = []
    var arrMalee = []
    var result = []
    var strSplit = str.split(',')

    if (str.length === 0){
        return str
    }
    var temp = []
    for (var i=0; i<strSplit.length; i++){
       temp.push(strSplit[i].split('-'))
    }

    // console.log(temp)
    for (var j = 0; j < temp.length; j++) {
      if (temp[j][1] === 'Ranged'){
        arrRanged.push(temp[j][0])
      } else if (temp[j][1] === "Melee"){
        arrMalee.push(temp[j][0])
      }
    }
    result.push(arrRanged, arrMalee)
    return result

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
//   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []