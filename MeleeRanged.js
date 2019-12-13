// Logic Challenge: Melee Ranged Grouping

// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
// implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

function meleeRangedGrouping(str) {
    //your code here

    // +++++++ MANUAL +++++++++++
    // let temp = []
    // let strTemp = ''
    // for (let i = 0; i < str.length; i++) {
    //     // console.log(str[i] !== ',' && str[i] !== '-')
    //     if (str[i] !== ',' && str[i] !== '-') {
    //         strTemp += str[i]
    //     } else {
    //         temp.push(strTemp)
    //         strTemp = ''
    //     }
    // }
    // temp.push(strTemp)
    // // console.log(temp)

    // let temp2 = []
    // for (let i = 0; i < temp.length; i += 2) {
    //     if (temp[i + 1] !== undefined) {
    //         temp2.push([temp[i], temp[i + 1]])
    //     }
    // }
    // // console.log(temp2)

    // let ranger = []
    // let melee = []
    // for (let i = 0; i < temp2.length; i++) {
    //     switch (temp2[i][1].toLowerCase()) {
    //         case 'ranged':
    //             ranger.push(temp2[i][0])
    //             break
    //         case 'melee':
    //             melee.push(temp2[i][0])
    //             break
    //     }
    // }
    // // console.log(ranger, melee)
    // let result = []
    // result.push(ranger, melee)
    // // console.log(result)
    // return str.length === 0 ? [] : result


    // +++++++++++ MENGGUNAKAN SPLIT +++++++++++++
    if (str.length === 0) {
        return []
    } else {
        let ranged = []
        let melee = []
        for (let i = 0; i < str.split(',').length; i++) {
            // console.log(str.split(',')[i].split('-')[1])

            switch (str.split(',')[i].split('-')[1].toLowerCase()) {
                case 'ranged':
                    ranged.push(str.split(',')[i].split('-')[0])
                    break
                case 'melee':
                    melee.push(str.split(',')[i].split('-')[0])
                    break
            }
        }
        let result = []
        result.push(ranged, melee)
        return result
    }
}

// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []