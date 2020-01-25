function meleeRangedGrouping (str) {
    var temp = ""
    var result = []

    if ( !str.length ) {
        return []
    }

    var hero = []
    var grup = []
    for ( i = 0 ; i <= str.length ; i++ ) {
        if ( str[i] == "," || i == str.length ) {
            hero.push(temp)
            temp = ""
            grup.push(hero)
            hero = []
        } else if (str[i] == "-" ) {
            hero.push(temp)
            temp = ""
        } else {
            temp += str[i]
        }
    }
    var ranged = []
    var melee = []
    for ( i = 0 ; i < grup.length ; i++ ) {
        if ( grup[i][1] == "Ranged") {
            ranged.push(grup[i][0])
        } else {
            melee.push(grup[i][0])
        }
    } 
    result.push(ranged)
    result.push(melee)
    return result
  } 
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []