function meleeRangedGrouping (str) {
    var array = str.split(',');
    var melee = [];
    var range = [];

    if(str.length == 0) {
        return [];
    } else {
        for(var i = 0; i < array.length; i++) {
            array[i] = array[i].split('-');

            if(array[i][1] == 'Ranged') {
                range.push(array[i][0]);
            } else {
                melee.push(array[i][0]);
            }
        }
        return [range, melee];
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []