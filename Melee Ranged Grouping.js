function meleeRangedGrouping (str) {
    if(str.length === 0){
        return []
    }
    var temp1 = []
    var temp2 = []
    var result = []
    var splitted1 = str.split(',')
    for(i = 0; i < splitted1.length; i++){
        var splitted2 = splitted1[i].split('-')
            if(splitted2[1] === 'Ranged'){
                temp1.push(splitted2[0])
            }
            else if(splitted2[1] === 'Melee'){
                temp2.push(splitted2[0])
        }
    }
    result.push(temp1)
    result.push(temp2)
    return result
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []