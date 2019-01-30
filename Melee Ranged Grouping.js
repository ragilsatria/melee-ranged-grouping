function meleeRangedGrouping(str) {
    //your code here

    var Melee = []
    var Ranged = []
    var result = []
    var strBaru = str.split(',')
    var temp = []

    if (str == '') return '[]'

    for (var i = 0; i < strBaru.length; i++) {
        temp.push(strBaru[i].split('-'))
    }


    for (var i = 0; i < temp.length; i++) {
        if (temp[i][1] === 'Ranged') {
            Melee.push(temp[i][0])
        } else if (temp[i][1] === 'Melee') {
            Ranged.push(temp[i][0])
        }
    }

    result.push(Melee, Ranged)

    return result

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []