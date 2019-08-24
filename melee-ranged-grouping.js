function meleeRangedGrouping (str) {
    if(str.length === 0) {
        return [];
    }
    var arrHeroes = str.split(',');
    var arrResult = [[], []]
    for(var i = 0; i < arrHeroes.length; i++) {
        if(arrHeroes[i].split('-')[1] === 'Ranged') {
            arrResult[0].push(arrHeroes[i].split('-')[0]);
        } else {
            arrResult[1].push(arrHeroes[i].split('-')[0]);
        }
    }

    return arrResult;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []