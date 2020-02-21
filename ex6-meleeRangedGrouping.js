// Nama: Hamzah Abdullah Mubarak

function meleeRangedGrouping (str) {
    
    var player = split(str, ',')
    // console.log(player);

    var oke = []
    for (let i = 0; i < player.length; i++) {
        var details = split(player[i], '-')
        oke.push(details)
    }
    // console.log(oke);
    
    var hasil = []
    var ranged = []
    var melee = []
    for (let j = 0; j < oke.length; j++) {
        if (oke[j][1] == 'Ranged') {
            ranged.push(oke[j][0])
        }
        else {
            melee.push(oke[j][0])
        }
    }
    hasil.push(ranged, melee)
    if (str == '') {
        hasil = []
    }
    return hasil
}

function split(str, haram){

    var arr = []
    var string = ''
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == haram || i == str.length) {
            arr.push(string)
            string = ''
        }
        else {
            string += str[i]
        }
    }
    return arr
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []