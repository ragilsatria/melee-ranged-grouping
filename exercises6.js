/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  var meleeRangedGrouping = []

  //Membuat array hero
  var heroarr = str.split(",")

  //Memisahkan nama hero dan tipe hero menjadi array
  var herotypearr = []
  for (var i = 0; i < heroarr.length; i++) {
    herotypearr.push(heroarr[i].split("-"))
  }

  //Membuat grouping type herro
  var ranged = []
  var melee = []

  for (var j = 0; j < herotypearr.length; j++) {
    if (herotypearr[j][1] === "Ranged") {
      ranged.push(herotypearr[j][0])
    }
    else {
      melee.push(herotypearr[j][0])
    }
  }
  //Push grouping jadi satu array
  meleeRangedGrouping.push(ranged)
  meleeRangedGrouping.push(melee)

  if (str.length === 0) {
    return []
  }
  else {
    return meleeRangedGrouping
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
