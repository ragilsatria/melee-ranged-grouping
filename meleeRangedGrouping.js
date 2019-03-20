function meleeRangedGrouping (str) {
    //your code here
    var output = []
    var Ranged = []
    var Melee = []
    var strUp = ''
    for( var i = 0 ; i < str.length ; i++){
        
        if(str[i] === '-'){
            var check = ''
            for( var j = i+1 ; j < i+7 ; j++){
                check += str[j]
            }
            if( check === 'Ranged'){
                Ranged.push(strUp)
                strUp = ''
                i = i + 7
            }
            var check2 = ''
            for( var j = i+1 ; j < i+6 ; j++){
                check2 += str[j]
            }
            if( check2 === 'Melee' ){
                Melee.push(strUp)
                strUp = ''
                i = i + 6
            }
        }
        else{
            strUp += str[i]
        }
    }
    output.push(Ranged,Melee)

    return output
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  //console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  //console.log(meleeRangedGrouping('')); // []