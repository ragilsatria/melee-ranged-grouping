function meleeRangedGrouping(str) {
    //your code here

    var a = str.split(',')

    var temp = []
    var hasilRan = []
    var hasilMel = []
    var hasil = []

    if (str === '') {
        return []
    }

    for (var i = 0; i < a.length; i++) {
        temp.push(a[i].split('-'))
    }

    for (var j = 0; j < temp.length; j++) {
        if (temp[j][1] === 'Ranged') {
            hasilRan.push(temp[j][0])
        } else {
            hasilMel.push(temp[j][0])
        }
    }

    hasil.push(hasilRan, hasilMel)

    return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []