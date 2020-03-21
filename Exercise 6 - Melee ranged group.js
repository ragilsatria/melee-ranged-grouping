/* Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

*/

function meleeRangedGrouping (str) {
  //your code here
  if (str == '' || str == null) {
      return [];
  }

  var hasil = [];
  var ranged = [];
  var melee = [];
  var sementara = "";

  for (let a = 0; a < str.length; a++) {
      if (str[a] == "-") {
          if (str[a + 1] == "R") {
              ranged.push(sementara);
              sementara = "";
              a += 7;
          } else if (str[a + 1] == "M") {
              melee.push(sementara);
              sementara = "";
              a += 6;
          }
      } else {
          sementara += str[a];
      }
  }
  hasil.push(ranged, melee);
  return hasil;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []