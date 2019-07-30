/* Logic Challenge: Melee Ranged Grouping
Diberikan
function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: < nama_hero > - < tipe_hero > , < nama_hero > - < tipe - hero > , ...

    Output yang diharapkan: [
        [ < daftar_hero_dengan_tipe_ranged > ],
        [ < daftar_hero_dengan_tipe_melee > ]
    ]

Jika input adalah string kosong('') maka
return array kosong

Submit Tugas Disini */

function meleeRangedGrouping(str) {
    //your code here
    if(str.length == 0){
        return []
    }

    let result = []
    let ranged = []
    let melee = []

    let array = str.split(",")
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split("-")        
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i][1] === 'Ranged'){
            ranged.push(array[i][0])
        } else if (array[i][1] === 'Melee') {
            melee.push(array[i][0])
        }     
    }

    result.push(ranged)
    result.push(melee)

    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []