function meleeRangedGrouping(str) {
    if (str.length == 0) {
        return []
    } else {
        arrHeroes = str.split(",")
        result = [
            [],
            []
        ]

        for (var i = 0; i < arrHeroes.length; i++) {
            arrHeroes[i] = arrHeroes[i].split("-")
            if (arrHeroes[i][1] == "Ranged") {
                result[0].push(arrHeroes[i][0])
            } else if (arrHeroes[i][1] == "Melee") {
                result[1].push(arrHeroes[i][0])
            }

        }
        return result

    }


}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []