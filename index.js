function meleeRangedGrouping (str) {
    if(str.length == 0){
        return []
    }
    
    str += ','
    var tempHero = []
    var tempIns = []

    var temp = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] == '-'){
            tempHero.push(temp)
            temp = ''
        }else if(str[i] == ',') {
            tempIns.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }

    var result = [[], []]

    for(var i = 0; i < tempHero.length; i++){
        if(tempIns[i] == 'Ranged'){
            result[0].push(tempHero[i])
        } else if(tempIns[i] == 'Melee'){
            result[1].push(tempHero[i])
        }
    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []