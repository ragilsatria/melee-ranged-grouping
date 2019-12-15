function splitManual(arr1, arr2) {
    var temp = ''
    var split1 = []
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2) {
            split1.push(temp)
            temp = ''
        }
        else {
            temp += arr1[i]
        }
    }
    split1.push(temp)
    return split1

}


function meleeRangedGrouping(str) {

    if (str.length == 0) {
        return '[]'
    }
    var split2 = splitManual(str, ',')

    var arr = []
    for (var k = 0; k < split2.length; k++) {
        var splitakhir = splitManual(split2[k], '-')
        arr.push(splitakhir)

    }
    var result = [[], []]
    for (var j = 0; j < arr.length; j++) {
        if (arr[j][1] == 'Ranged') {
            result[0].push(arr[j][0])
        }
        else if (arr[j][1] == 'Melee') {
            result[1].push(arr[j][0])
        }
    }
    return result
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []