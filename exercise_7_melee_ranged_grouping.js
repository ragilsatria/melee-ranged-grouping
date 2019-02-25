function indexOf (string, keyword) {
    var found = undefined
    var i = 0
    while (found === undefined && i < string.length) {
        found = str[i] === keyword ? i : undefined
        i++
    }
    return found !== undefined ? found : -1
}

function substring (string, start, end) {
    var result = ''
    for (var i = start; i < end; i++) {
        result += string[i]
    }
    return result
}

function meleeRangedGrouping (str) {
    if (str.length === 0) {
        return []
    }
    
    var hero = substring(str, 0, indexOf(str, ','))
    var name = substring(hero, 0, indexOf(hero, '-'))
    var type = substring(hero, indexOf(hero, '-', hero.length))
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []