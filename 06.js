function meleeRangedGrouping (str) {
    //your code here
    var result = []
    var ranged = []
    var melee = []
    var hero = str.split(',')
    // console.log(hero)
    if ( str === '' ) {
        return []
    }
    for ( let i = 0; i < hero.length; i++ ) {
        // console.log(hero[i])
        var heroes = hero[i].split('-')
        // console.log(heroes[0])
        if ( heroes[1] === 'Ranged' ) {
            ranged.push(heroes[0])
        }
        else if ( heroes[1] === 'Melee' ) {
            melee.push(heroes[0])
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