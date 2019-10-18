////////////////////////////////////////
//                                    //
//            IMPROVEMENT             //
//                                    //
////////////////////////////////////////

function meleeRangedGrouping (str) {
    if (!str) {
        return [];
    }

    let separate = str.split(',');
    let result = [];
    let ranged = [];
    let melee = [];

    for (let i = 0; i < separate.length; i++) {
        result.push(separate[i].split('-'));
        if (result[i][1] === 'Ranged') {
            ranged.push(result[i][0]);
        }
        if (result[i][1] === 'Melee') {
            melee.push(result[i][0]);
        }
    }
    return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []