function meleeRangedGrouping(str) {
    //your code here
    var arr = str.split(',')
    var arrTemp = []
    if (!str) {
        return []
    }
    for (var i = 0; i < arr.length; i++) {
        var spl = arr[i].split('-')
        arrTemp.push(spl)
    }
    var obj = {Ranged: [], Melee: []}
    for (var i = 0; i < arrTemp.length; i++) {
        obj[arrTemp[i][1]] = []
    }
    for (var i = 0; i < arrTemp.length; i++) {
        obj[arrTemp[i][1]].push(arrTemp[i][0])
    }
    return Object.values(obj)
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

