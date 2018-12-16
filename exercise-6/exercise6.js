function meleeRangedGrouping (str) {
    if ( str.length == 0){
        return []
    }
    var newStr = str.split(',')
    var result = []
    var heroMelee = []
    var heroRange = []

    var temp = ''
    for ( var i = 0; i < newStr.length; i++){
        for ( var j = 0; j < newStr[i].length; j++){
            if ( newStr[i][j] !== '-'){
                temp += newStr[i][j]
            
            }
            else if ( newStr[i][j] === '-'){
                if ( newStr[i][j+1] === 'R'){
                    heroRange.push(temp)
                    temp = ''
                    break;
                }
                else if ( newStr[i][j+1] === 'M' ){
                    heroMelee.push(temp)
                    temp=''
                    break;
                }
            }
        }
    }
    result.push(heroRange,heroMelee)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []