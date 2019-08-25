function meleeRangedGrouping (str) {

    var result = []
    var tampungString = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] != ','){
            // tampung.push(str[i])
            tampungString += str[i]
        } else {
            result.push(tampungString)
            tampungString = ''
        }
    }
    result.push(tampungString)
    // console.log('TampungString: ', tampungString)
    // console.log('Result: ', result)
    // console.log('------------------------')
  
  
    var tampungArrRanged = []
    var tampungArrMelee = []
    for(var j=0; j < result.length; j++){
        if(result[j][result[j].length-1] == 'd'){
            tampungArrRanged.push(result[j])
        } else if (result[j][result[j].length-1] == 'e'){
            tampungArrMelee.push(result[j])
        }
    }
    
  
    // console.log('Ranged = ', tampungArrRanged)
    // console.log('Melee = ', tampungArrMelee)
  
    // console.log('----------------------------------------')
  
    var biasaRanged = ''
    var arrRanged = []
    for(var k = 0; k < tampungArrRanged.length; k++){
        for(var l = 0; l < tampungArrRanged[k].length; l++){
            
            if(tampungArrRanged[k][l] != '-'){
            biasaRanged += tampungArrRanged[k][l]
            } else if(tampungArrRanged[k][l] == '-'){
            arrRanged.push(biasaRanged)
            biasaRanged = ''
            break
            }
        }
    }
    
    var biasaMelee = ''
    var arrMelee = []
    for(var k = 0; k < tampungArrMelee.length; k++){
        for(var l = 0; l < tampungArrMelee[k].length; l++){
    
            if(tampungArrMelee[k][l] != '-'){
            biasaMelee += tampungArrMelee[k][l]
            } else if(tampungArrMelee[k][l] == '-'){
            arrMelee.push(biasaMelee)
            biasaMelee = ''
            break
            }
        }
    }
  
    var output= []
  
    if(str.length == 0){
        return []
    } else {
        output.push(arrRanged)
        output.push(arrMelee)
    }
  
    
    return output
}
  
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []