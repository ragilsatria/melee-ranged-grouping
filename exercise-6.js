function meleeRangedGrouping (str) {
    if (str.length === 0) {
        return []
    }
    var array = [[],[]]
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '-' && str[i+1] === 'R') {
            array[0].push(temp)
        } else if (str[i] === '-' && str[i+1] === 'M') {
            array[1].push(temp)
        } else if (str[i] === ',') {
            temp = ''
        } else {
            temp += str[i]
        }
    }
    return array
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []