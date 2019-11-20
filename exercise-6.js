// Logic Challenge: Melee Ranged Grouping
// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

// Submit Tugas Disini

function meleeRangedGrouping (str) {
  //your code here
  var output = [];
  var ranged = [];
  var melee = [];
  if(str.length === 0){
    return output
  }
  ////
  var split = str.split(',')
  console.log(split);
  
  for(var i = 0 ; i < split.length ; i ++){    
    var lagi = split[i].split('-')
    // console.log(lagi);
    // for(var j = 0 ; j < lagi.length ; j++){
      if(lagi[1] === 'Ranged'){
        ranged.push(lagi[0]);
      } else {
        melee.push(lagi[0])
      }
    // }
  }
  output.push(ranged,melee)
  return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []