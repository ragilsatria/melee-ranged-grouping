function meleeRangedGrouping (str) {
    var arr = str.split(',')
    var newArr = [];
    var ranged = [];
    var melee = [];
    for(var i = 0; i < arr.length; i ++) {
        // console.log(arr[i].split('-'));
        var hero = arr[i].split('-');
        if(hero[1] === 'Ranged') {
            ranged.push(hero[0]);
        } else if(hero[1] === 'Melee') {
            melee.push(hero[0])
        }
    }
    newArr.push(ranged, melee)
    if(str === '') {
        return [];
    }
    return newArr;
}



console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []