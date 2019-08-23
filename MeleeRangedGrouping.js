// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

function meleeRangedGrouping (str) {
    //your code here
    var str = str.split(",")
    var arr = []
    var hero = []
    var ranged = []
    var result = []

    for (var i = 0; i < str.length; i++) {
        arr.push(str[i].split("-"))
    }
    for (var j = 0; j < arr.length; j++) {
        // console.log(arr[j][1])
        if (arr[j][1] === "Melee") {
            hero.push(arr[j][0])
        }
        if (arr[j][1] === "Ranged") {
            ranged.push(arr[j][0])
        }
    }
    if (str.length === '') {
        return []
    }
    result.push(ranged, hero)
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []