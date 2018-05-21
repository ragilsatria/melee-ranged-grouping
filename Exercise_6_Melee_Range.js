/* Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
    
ika input adalah string kosong ('') maka return array kosong */

function meleeRangedGrouping(str) {
    //your code here
    //var str1 = str.split(',')
    var newarr = []
    var totalarr = []
    //var grouping = {}
    var result = []
    //var arrKosong = []
    var tmp = ''
    str += ','

    if (str.length <= 1 ) {
        return []
    } else {
        for (var i = 0; i < str.length; i++) {
       //newarr.push(str[i])
            if (str[i] === ',') {
                newarr.push(tmp)
                totalarr.push(newarr)
                tmp = ''
                newarr = []
            } else if (str[i] === '-') {
                newarr.push(tmp)
                tmp = ''
            } else {
                tmp = tmp + str[i]
                //newarr.push(tmp)
           /*
           1. nampung 'Razor' ketika ketemu sama '-', si 'Razor' Di push kedalam newArr, lalu tmp di kosongin
           2. nampung 'Ranged' ketika ketemu sama ',' si 'Ranged' di push kedalam newArr, lalu newArr di kosongin dan tmp di kosongin
           */
           //console.log(tmp)
            }
        }
   }
   
   // [[], []]
   for (var j = 0; j < 2; j++) {
       result.push([])
    }

    for (var k = 0; k < totalarr.length; k++) {
        if (totalarr[k][1] === "Ranged") {
            result[0].push(totalarr[k][0])
        } else if (totalarr[k][1] === "Melee") {
            result[1].push(totalarr[k][0])
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