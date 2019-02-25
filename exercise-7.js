function meleeRangedGrouping(str) {
    //your code here
    //let's eat space like a hog
    if (str == undefined || str == '') return [];
    let splitted = str.split(',');
    for (let i = 0; i < splitted.length; i++) {
        splitted[i] = splitted[i].split('-');
    }
    let result = [
        [],
        []
    ];
    for (let i = 0; i < splitted.length; i++) {

        if (splitted[i][1] == 'Ranged') {
            result[0].push(splitted[i][0]);
        } else if (splitted[i][1] == 'Melee') {
            result[1].push(splitted[i][0]);
        }
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []