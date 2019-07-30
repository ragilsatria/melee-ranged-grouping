/* Phase 0 Week 5 Exercise 7 */
/* Melee Ranged Grouping */

function meleeRangedGrouping (str) {
    // Buat variabel array ranged untuk menampung char range dan array melee untuk char melee
    var ranged = [];
    var melee = [];
    // Buat variabel array result untuk hasil akhir
    var result = [];
    // Split string bedasarkan koma
    var arrStr = str.split(",");
    // Lakukan sebanyak jumlah char
    for (var i = 0; i < arrStr.length; i++) {
        // Pisahkan antara nama dan class
        var arrClass = arrStr[i].split("-");
        // Jika class ranged maka push ke array range
        if (arrClass[1] === "Ranged") {
            ranged.push(arrClass[0]);
        } 
        // Jika class melee maka push ke array melee
        else if (arrClass[1] === "Melee") {
            melee.push(arrClass[0]);
        }
    }
    // Jika array melee dan ranged kosong maka tampilkan array kosong
    if (ranged.length !== 0 || melee.length !== 0) {
        result.push(ranged, melee);
    }
    return result;
}


console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []