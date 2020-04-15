/*
Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array
seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,
<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ],
[ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

Submit Tugas Disini
*/

function meleeRangedGrouping (str) {
  var hasil = '';
  if (str.length == 0) {
    hasil = [];
  } else {
    var type = ['Ranged', 'Melee'];

    // memecah string berdasarkan koma ','
    var pecahKoma = [];
    var kata1 = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== ',') {
        kata1 += str[i];
        if (i == str.length - 1) {
          pecahKoma.push(kata1);
        }
      } else {
        pecahKoma.push(kata1);
        kata1 = '';
      }
    }

    // memecah string berdasarkan tanda strip '-'
    var pecahStrip = [];
    for (var i = 0; i < pecahKoma.length; i++) {
      var pecah = [];
      var kata2 = '';
      for (var j = 0; j < pecahKoma[i].length; j++) {
        if (pecahKoma[i][j] !== '-') {
          kata2 += pecahKoma[i][j];
          if (j == pecahKoma[i].length - 1) {
            pecah.push(kata2);
          }
        } else {
          pecah.push(kata2);
          kata2 = '';
        }
      }
      pecahStrip.push(pecah);
    }

    // mencocokkan type dengan name
    var hasil = [];
    for (var i = 0; i < type.length; i++) {
      var name = [];
      for (var j = 0; j < pecahStrip.length; j++) {
        if (type[i] == pecahStrip[j][1]) {
          name.push(pecahStrip[j][0]);
        }
      }
      hasil.push(name);
    }
  }

  return hasil;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []