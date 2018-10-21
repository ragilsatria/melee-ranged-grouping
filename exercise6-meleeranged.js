// Logic Challenge: Melee Ranged Grouping

// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

// Submit Tugas Disini

function meleeRangedGrouping (str) {
  var split1 = str.split(',')
  var split2 = []
  var result = []
  for (let i = 0; i < split1.length; i++) {
      split2.push(split1[i].split('-'))
  }

  var arrRanged = []
  var arrMelee = []
  for (let j = 0; j < split2.length; j++) {
      if(split2[j][1] === 'Ranged') {
        arrRanged.push(split2[j][0])
      }else if( split2[j][1] === 'Melee') {
        arrMelee.push(split2[j][0])
      }
  }
  result.push(arrRanged,arrMelee)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []