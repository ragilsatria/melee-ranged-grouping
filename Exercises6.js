/*
Problem
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    if(str === ''){
        return []
    }

    var newStr = str.split(',')
    var result = [[],[]]

    for(var i = 0; i < newStr.length; i++){
        var getStr = ''
        for(var j = 0; j < newStr[i].length; j++){
            if(newStr[i][j] === '-' && newStr[i][j+1] === 'R'){
                result[0].push(getStr)
            } else if(newStr[i][j] === '-' && newStr[i][j+1] === 'M'){
                result[1].push(getStr)
            }
            getStr += newStr[i][j]
        }
    }
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []