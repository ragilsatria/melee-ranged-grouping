/*
 * [Exercises 6] Melee Ranged Grouping
 * johanesi
 * https://github.com/hacktiv8/phase-0-activities/blob/master/modules/challenge-melee-ranged-grouping.md
*/

/*
Logic Challenge: Melee Ranged Grouping

Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini
*/

function meleeRangedGrouping (str) {
    if (str==='') {
        return [];
    } else {
        //https://www.w3schools.com/jsref/jsref_obj_string.asp
        //https://www.w3schools.com/jsref/jsref_split.asp
        var array = [];
        var melee = [];
        var ranged = [];
        var output = [];
        var hero = str.split(',');
    
        for (var a=0; a<hero.length; a++) {
            // console.log(heroArray[a]);
            var heroArray = hero[a].split('-')
            array.push(heroArray);
        }
        // console.log(array);
        for (var b=0; b<array.length; b++) {
            // console.log(array[b][1]);
            var heroType = array[b][1];
            var heroName = array[b][0];
            if (heroType === 'Melee') {
                melee.push(heroName);
                // console.log(heroName);
            } else if (heroType === 'Ranged') {
                ranged.push(heroName);
                // console.log(heroName);
            }
        }
        output.push(ranged);
        output.push(melee);
        return output;
    }
}



// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []


/* IGNORE THE CODES UNDER THIS LINE ----------------------------------------
function meleeRangedGrouping (str) {
    var output = [];
    var hero = [];
    // var tipe = [];
    var tipe1 = 'ranged';
    var tipe2 = 'melee';
    var perTipe = ''

    for (var a=0; a<str.length; a++) {
        // var perHero  = '';
        // perHero += str[a];
        if (str[a] === '-') {
            perTipe += str[a]
            if (str[a] === ','){
                var check = perTipe;
            }
            if (check === tipe1) {
                hero.push('test');
            }
        }
    }
    console.log(hero);
    // console.log(tipe);
}

*/