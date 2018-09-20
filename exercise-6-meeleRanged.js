function meleeRangedGrouping(str) {
    var splitAwal = str.split(',').join(' ');
    var splitAkhir = splitAwal.split('-').join(' ');
    var splitArr = splitAkhir.split(' ');
    var arrMelee = [];
    var arrRanged = [];
    var finalArr = [];
    for (var i = 0; i < splitArr.length; i++) {
        if (splitArr[i + 1] === 'Ranged') {
            arrRanged.push(splitArr[i]);
        } else if (splitArr[i + 1] === 'Melee') {
            arrMelee.push(splitArr[i]);
        }
    }
    finalArr.push(arrRanged, arrMelee);
    return finalArr;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []