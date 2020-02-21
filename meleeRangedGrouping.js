// Nama : Fahrul Muhammad Neor
// exercise 7 week 5 phase 0

/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    if (str.length === 0){
        return []
    }
    var arr = []
    var string = ''
    for (i = 0; i <= str.length; i++) {
        if (str[i] === ',' || str[i] === '-' || i === str.length){
            arr.push(string)
            string = ''
        }
        else {
            string += str[i]
        }
    }
    
    var result = [[], []]
    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0){
            if (arr[i] === 'Ranged'){
                result[0].push(arr[i-1])
            }
            else{
                result[1].push(arr[i-1])
            }
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