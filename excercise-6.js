function meleeRangedGrouping (str) {
    if (str.length === 0) {
        return [];
    }
    var output = [[],[]];
    str1 = str.split(',');
    for (var i=0; i<str1.length; i++) {
        str2 = str1[i].split('-');
        if (str2[1] === 'Ranged') {
            output[0].push(str2[0]);
        } else {
            output[1].push(str2[0]);
        }
    }
    return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []