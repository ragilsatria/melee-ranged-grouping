function meleeRangedGrouping (str) {
    //your code here
    var koma = str.split(`,`)
    var strip = []
    var ranged = []
    var melee = []
    var output = []

    for (var i = 0; i < koma.length; i++) {
        strip.push(koma[i].split(`-`))
    }
    
    for (var i = 0; i < strip.length; i++) {
        if (strip[i][1] === `Ranged`) {
            ranged.push(strip[i][0])
        } else {
            melee.push(strip[i][0])
        }
    }
    if (str.length === 0) {
        return []
    } else {
        output.push(ranged)
        output.push(melee)
    }
    return output
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []