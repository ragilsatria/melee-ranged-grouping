// Melee Ranged Grouping

function meleeRangedGrouping (str) {
    var output = []
    var arrMelee = []
    var arrRanged = []

    var newStr = str.split(',')
    //console.log(newStr)
    for (var i = 0; i < newStr.length; i++){
        var newStr1 = newStr[i].split('-')
        //console.log(newStr1)
    if (newStr1[1] == "Ranged"){
        arrRanged.push(newStr1[0])
    }
    else if (newStr1[1] == "Melee"){
        arrMelee.push(newStr1[0])
        
    } 
    else if ( str === ""){
        return []
    }
   
  }
  output.push(arrRanged, arrMelee)

return output
  
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []