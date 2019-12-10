/**
 * HACKTIV8 Phase 0 - Logic Challenge - Melee Ranged Grouping
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/


/* Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
    
Jika input adalah string kosong ('') maka return array kosong. 
*/





function meleeRangedGrouping(str) {
    //your code here
    if (str.length === 0) {
        return [];
    }
    
    let strArray = str.split(','); 4
    let result = [[], []];
    let tempResult = [];
    // Splitting
    for (let i = 0; i < strArray.length; i++) {
        tempResult.push(strArray[i].split('-'));
    }
    
    for (let j = 0; j < tempResult.length; j++) {
        if (tempResult[j][1] === 'Ranged') {
            result[0].push(tempResult[j][0]);
        } else if (tempResult[j][1] === 'Melee') {
            result[1].push(tempResult[j][0]);
        }
    }

    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []