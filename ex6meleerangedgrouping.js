function meleeRangedGrouping (str) {
    var arr = [];
    var groupRanged = [];
    var groupMelee = [];
    var diff = str.split(',');
    // console.log(diff);

    for (var i = 0; i < diff.length; i++) {
        for (var j = 0; j < diff[i].length; j++) {
            if (diff[i][j] === '-' && diff[i][j+1] === 'R') {
                groupRanged.push(diff[i].slice(0, j));
            } else if (diff[i][j] === '-' && diff[i][j+1] === 'M'){
                groupMelee.push(diff[i].slice(0, j));
            }
        }
    }
    arr.push(groupRanged, groupMelee);
    return arr;
}


// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []