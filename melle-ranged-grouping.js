/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
</tipe-hero>
Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini
*/
function meleeRangedGrouping (str) {
    var input = str.split(',');
    // console.log(input);
    var masukan = [];
    for(var j = 0; j < input.length; j++){
         var inputSeparated = input[j].split('-');
         masukan.push(inputSeparated);
    }
    // console.log(masukan);
    if(str.length < 1){
        return [];
    }
    var output = [[],[]];
    for (var i = 0; i<masukan.length; i++){
        if(masukan[i][1] === 'Ranged'){
            output[0].push(masukan[i][0]);
        } else if (masukan[i][1] === 'Melee'){
            output[1].push(masukan[i][0])
        }
    }
    return output;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []