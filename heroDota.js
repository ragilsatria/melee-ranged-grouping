function split(data, operator) {

    var array = []
    var string1 = ''
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== operator) {
            string1 += data[i]
        } else {
            array.push(string1)
            string1 = ''
        }
    }
    array.push(string1)
    return array
}

function meleeRangedGrouping(str) {
    //your code here
    if (!str.length) return []
    var splitKoma = split(str, ',')

    var hero = []
    for (var i = 0; i < splitKoma.length; i++) {
        hero.push(split(splitKoma[i], '-'))
    }
    var heroDota = {
        Ranged: [],
        Melee: []
    }
    for (var j = 0; j < hero.length; j++) {
        if (hero[j][1] == 'Melee') {
            heroDota.Melee.push(hero[j][0])
        }
        if (hero[j][1] == 'Ranged') {
            heroDota.Ranged.push(hero[j][0])
        }

    }

    return Object.values(heroDota)
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []