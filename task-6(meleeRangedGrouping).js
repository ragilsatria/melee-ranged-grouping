function meleeRangedGrouping (str) {
    if (str === '' || str === undefined) {
        return []
    }
    var split = str.split(',')
    var group = [[],[]]
    for (var i = 0; i < split.length; i++) {
        if (split[i].indexOf('Ranged') !== -1) {
            group[0].push(split[i].slice(0, split[i].indexOf('-')))
        } else {
            group[1].push(split[i].slice(0, split[i].indexOf('-')))
        }
    }
    return group
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []