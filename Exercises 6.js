// [Exercises 6] Melee Ranged Grouping

function meleeRangedGrouping(str) {
    var resultZ = [[], []]
    var strSplit = str.split(',');
    if (str !== '') {
        for (var i = 0; i < strSplit.length; i++) {
            var temp = strSplit[i].split('-');
            if (temp[1] === 'Ranged') {
                resultZ[0].push(temp[0])
            } else {
                resultZ[1].push(temp[0])
            }
        }
        return resultZ
    } else {
        return []
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
