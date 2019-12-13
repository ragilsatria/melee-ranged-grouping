function meleeRangedGrouping(str) {
    //your code here
    var hasil = []
    var ranged = []
    var melee = []
    if (!str) {
        return []
    }

    var nama = str.split(',')
    //   console.log(nama)
    for (var i = 0; i < nama.length; i++) {
        var nama2 = nama[i].split('-')
        // console.log(nama2)
        if (nama2[1] == 'Ranged') {
            ranged.push(nama2[0])
        }
        else {
            melee.push(nama2[0])
        }
    }
    hasil.push(ranged, melee)
    return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []