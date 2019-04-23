function meleeRangedGrouping(str) {
    //your code here
    var tempRanged = []
    var tempMelee = []
    var result = []
    var splitStr = str.split(',')

    if (str === '') {
        return []
    }

    for (var i = 0; i < splitStr.length; i++) {
        var splitStrName = splitStr[i].split('-')
        if (splitStr[i].indexOf('Ranged') !== -1) {
            tempRanged.push(splitStrName[0])
        }
        if (splitStr[i].indexOf('Melee') !== -1) {
            tempMelee.push(splitStrName[0])
        }
    }
    result.push(tempRanged, tempMelee)
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []