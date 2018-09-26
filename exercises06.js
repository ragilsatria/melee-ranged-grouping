/*Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini
*/
function meleeRangedGrouping(str) {
    //your code here
    let out = [
            [],
            []
        ],
        strSplit = str.split(',')
    if (!str) {
        return []
    } else {
        for (let i = 0; i < strSplit.length; i++) {
            let pisahGroup = strSplit[i].split('-')
            if (pisahGroup[1] === 'Ranged') {
                out[0].push(pisahGroup[0])
            } else if (pisahGroup[1] === 'Melee') {
                out[1].push(pisahGroup[0])
            }
        }
        return out
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []