function meleeRangedGrouping (str) {
    //your code here
    var result = [[],[]]

    if(str.length === 0){
        return []
    }
    var groupedArray = groupArray(str);

    for(var i=0; i<groupedArray.length; i++){
        
        if(groupedArray[i][1] === "Ranged"){
            result[0].push(groupedArray[i][0])
        }
        else if(groupedArray[i][1] === "Melee"){
            result[1].push(groupedArray[i][0])
        }
    }

    return result;

  }

  function groupArray(arrStr){
    var arrWithOutComa = arrStr.split(",")
    var res = []
    for(var i=0; i<arrWithOutComa.length; i++){
        res.push(arrWithOutComa[i].split("-"))
    }
    
    return res
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
   console.log(meleeRangedGrouping('')); // []