function meleeRangedGrouping (str) {
    // CHECK VALID
    if(str == false){
        return []
    }
    // SPLIT
    var display = []
    var arr = []
    var tmp = ''
    for (i = 0; i < str.length; i++) {
        
        if(str[i] === '-'){
            arr.push(tmp)
            tmp = ''
        } else if(str[i] === ','){
            arr.push(tmp)
            display.push(arr)
            arr = []
            tmp = ''
        } else {
            tmp += str[i]
        }
    }
    arr.push(tmp)
    display.push(arr)
    // RESULT
    var result = []
    var ranged = []
    var melee = []
    for (i = 0; i < display.length; i++) {
        if(display[i][1] === 'Ranged'){
            ranged.push(display[i][0])
        } else{
            melee.push(display[i][0])
        }
    }
    result.push(ranged,melee)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []