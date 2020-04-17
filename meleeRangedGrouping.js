
function meleeRangedGrouping (str) {
    //your code here
    if (str.length == 0) return []
    var result = []
    var melee = []
    var ranged = []
    var batas = 0

    for (var i = 0; i <= str.length; i++) {
        if (str[i] == ',' || str[i] == undefined) {
            var text = ''
            for (var j = batas; j < i; j++) {
                if (str[j] == '-') {
                    var hero = text
                    text = ''
                    j++
                }
                text += str[j]
            }
            j++
            batas = j
 
            if (text == 'Ranged') {
                ranged.push(hero)
            } else {
                melee.push(hero)
            }
        }
    }

    result.push(ranged, melee)
    return result
    
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []