/* Logic Challenge: Melee Ranged Grouping

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan 
meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

*/

function meleeRangedGrouping(str) {
    if (str.length == 0) {
        return []
    } else {

        var result = []
        var data = []

        var temp = ""
        for (var i = 0; i < str.length; i++) {
            if (str[i] == "-") {
                data.push(temp)
                temp = ""
            } else if (str[i] == ",") {
                data.push(temp)
                result.push(data)
                data = []
                temp = ""
            } else {
                temp += str[i]
            }
        }

        var ranged = []
        var malee = []
        for (var i = 0; i < result.length; i++) {
            if (result[i][1] == "Ranged") {
                // console.log(result[i])
                ranged.push(result[i][0])
            }
            if (result[i][1] == "Melee") {
                malee.push(result[i][0])
            }
            // console.log(result[i])
        }

        return [ranged, malee]
    }

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []