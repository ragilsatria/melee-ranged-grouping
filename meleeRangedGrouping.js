function meleeRangedGrouping (str) {
    //your code here
    var hasil0 = []
    if(str.length === 0){
        return hasil0
    }

    var splitStr = []
    var temp = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] === ','){
            splitStr.push(temp)
            temp = ''
        } else {
            temp += str[i]
        }
    }
    splitStr.push(temp)

    var splitStr2 = []
    var temp2 = ''
    for( var j = 0; j < splitStr.length; j++){
        var data = []
        for( var k = 0; k < splitStr[j].length; k++){
            if( splitStr[j][k] !== '-'){
                temp2 += splitStr[j][k]
            } else {
                data.push(temp2)
                temp2 = ''
            }
            
        }
        splitStr2.push(data)
        data.push(temp2)
        temp2 = ''      
    }
    
    var ranged = []
    var melee = []
    for(var l = 0; l < splitStr2.length; l++){
        if(splitStr2[l][1] === 'Ranged'){
            ranged.push(splitStr2[l][0])
        } else {
            melee.push(splitStr2[l][0])
        }
    }
    hasil0.push(ranged)
    hasil0.push(melee)
    return hasil0

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []