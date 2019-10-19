function meleeRangedGrouping(str) {
    if (str === '') {
        return []
    }
    var buangKoma = str.split(',')
    var buangStrip = []
    var melee = []
    var ranged = []
    var hasil = []
    for (var i = 0; i < buangKoma.length; i++) {
        buangStrip.push(buangKoma[i].split('-'))
    }
    for (var j = 0; j < buangStrip.length; j++) {
        if (buangStrip[j][1] === 'Ranged') {
            ranged.push(buangStrip[j][0])
        } else if (buangStrip[j][1] === 'Melee') {
            melee.push(buangStrip[j][0])
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