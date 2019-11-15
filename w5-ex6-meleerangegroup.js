/*
[Exercises 6] Melee Ranged Grouping
Nama: Hamzah Abdullah Mubarak


Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {

  if (str.length === 0){
    return []
  }

  let arr = []
  let string = ''
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ',' || str[i] === '-' || i === str.length){
      arr.push(string)
      string = ''
    }
    else {
      string += str[i]
    }
  }

  let hasil = [[], []]
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (i % 2 !== 0){
      if (arr[i] === 'Ranged'){
        hasil[0].push(arr[i-1])
      }
      else{
        hasil[1].push(arr[i-1])
      }
    }
  }
  // console.log(arr)
  // console.log(hasil)
  return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []