function meleeRangedGrouping (str) {
    //your code here

    var result = []
    var ranged = []
    var melee = []

    var temp = ''

    for (var i = 0; i < str.length; i++) {

        if (str[i] === '-') {
            if (str[i+1] === 'R') {
                ranged.push(temp)
            }
            else if(str[i+1] === 'M') {
                melee.push(temp)
            }
        }
        else if (str[i] === ',') {temp = ''}
        else {temp += str[i]}
    }
    result.push(ranged)
    result.push(melee)
    if (ranged.length === 0 && melee.length === 0) {return []}
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []