function meleeRangedGrouping (str) {
  //your code here
  
    var melee = []
    var ranged = []
    var result = []
    // var check = false
    var temp = str.split(',')
    // console.log(temp)
    var hero = []
    for (var i = 0; i < temp.length; i++) {
        hero.push(temp[i].split('-'))
    }
    // console.log(hero)
    for (var j = 0; j < hero.length; j++) {
        if (hero[j][1] === 'Ranged') {
            ranged.push(hero[j][0])//push ke arr ranged
        } else if (hero[j][1] === 'Melee') {
            melee.push(hero[j][0])//push ke arr hero
        }
    
    }
    result.push(ranged, melee)//krn array multidimensi
    if(str.length === 0) {
        return []
    }
    
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []