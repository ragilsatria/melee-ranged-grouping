// Logic Challenge: Melee Ranged Grouping
//
// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
//
// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
//
// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
//
// Jika input adalah string kosong ('') maka return array kosong
//
// Submit Tugas Disini

function meleeRangedGrouping (str) {
  //your code here
  var kosong = []
  if (str.length === 0) {
    return kosong
  }
  var potongKoma = str.split(',');
  var arr = [];

  for(var i = 0; i < potongKoma.length; i++) {
    arr.push(potongKoma[i].split('-'));
  }

  var r = [];
  var m = [];
  var hero = []

  for (var j = 0; j < arr.length; j++) {
    if(arr[j][1] == 'Ranged') {
      r.push(arr[j][0]);
    } else {
      m.push(arr[j][0]);
    }
  }
  hero.push(r,m);

  return hero;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
