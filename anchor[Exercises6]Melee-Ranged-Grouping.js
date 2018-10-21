
function meleeRangedGrouping(str) {
    var heroGroup = [
        [],
        []
    ]
    var hero_n_tipe = []
    var strSplit = str.split(",")
        // console.log(strSplit)


    for (var i = 0; i < strSplit.length; i++) {
        var a = strSplit[i].split("-")
        hero_n_tipe.push(a)
    }

    // console.log(hero_n_tipe)

    if (str.length === 0) {
        return []
    } else {
        for (var i = 0; i < hero_n_tipe.length; i++) {
            if (hero_n_tipe[i][1] === "Ranged") {
                heroGroup[0].push(hero_n_tipe[i][0])
            } else {
                heroGroup[1].push(hero_n_tipe[i][0])
            }
        }
    }
    // console.log(heroGroup)
    return heroGroup
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []