//Exercise 6 Logic Challenge: Melee Ranged Grouping

/*
Problem
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  var output = []; // inisiasi var output sebagai array kosong
  var split1 = str.split(','); //pertama kita split dahulu input string dengan karakter ',' disimpan di variable split1
  for (var i = 0 ; i < split1.length ; i++) { //lakukan perulangan sepanjang array split1
    var split2 = split1[i].split('-'); //split lagi tiap value index split1 dengan karakter '-' , dan simpan di variabel split2
    if (split2[1] === "Ranged") { //setelah di split lagi, bandingkan value array kedua apakah ada 'Ranged' jika iya masukkan ke array output index pertama
      if (output[0] === undefined) {
        output[0] = [];
      }
      output[0].push(split2[0]);
    } else if(split2[1] === "Melee") { //setelah di split lagi, bandingkan value array kedua apakah ada 'Melee' jika iya masukkan ke array output index kedua
      if (output[1] === undefined) {
        output[1] = [];
      }
      output[1].push(split2[0]);
    }
  }
    return output;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
