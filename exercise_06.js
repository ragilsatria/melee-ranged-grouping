// Melee Ranged Grouping

function meleeRangedGrouping (str) {

  // buat arr kosong untuk menampung str yg sudah displit per koma

  var arr = [];

  //  base case jika tidak ada input str

  if (str.length < 1) {
    return arr;
  }

  // buat temp yg akan menyimpan kata sebelum dipush 
  
  var temp = '';

  // loop sampai panjang str

  for (i = 0; i < str.length; i++) {

    // jika str[i] bkn koma maka ditambahkan di temp, jika sudah ketemu koma maka dipush dan setelah itu kosongkan lg temp

    if (str[i] !== ',') {
      temp += str[i];
    }
    else {
      arr.push (temp);
      temp = '';
    }
  }

  // pastikan klo kata terakhir setelah koma jg dipush

  arr.push (temp);
  temp = '';

  // siapkan dua array, satu menampung nama heroes dan satu menampung types nya

  var arrHeroes = [];
  var arrTypes = [];

  // loop dgn limit arr--yg sebelumnya sudah memisahkan per koma

  for (i = 0; i < arr.length; i++) {

    // loop kedua untuk dpt mengakses huruf di dalam arr[i], masukkan kata ke temp sebelum ketemu dash

    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== '-') {
        temp += arr[i][j];
      }
      else {
        arrHeroes.push (temp);
        temp = '';
      }
    }
    arrTypes.push (temp);
    temp = '';
    
  }
  
  // buat var obj u/ menampung heroes yg sudah dipisahkan per type 

  var obj = {};

  // loop arrTypes--arr yg menyimpan tipe2 tiap hero

  for (i = 0; i < arrTypes.length; i++) {

    // jika di obj blm ada tipenya maka buat baru yg menyimpan arr 

    if (obj[arrTypes[i]] === undefined) {
      obj[arrTypes[i]] = [];
    }
  }

  // buat var u/ menampung hasil akhir

  var res = [];

  // loop keys yg ada di obj

  for (i = 0; i < Object.keys(obj).length; i++) {

    // loop untuk menyamakan key dgn tipe hero, jika sama maka push value ke keyName tsb
    
    for (j = 0; j < arrTypes.length; j++) {

      if (Object.keys(obj)[i] === arrTypes[j]) {
        obj[arrTypes[j]].push (arrHeroes[j]);
      }
    }

    // push keys yg sudah lengkap menampung berbagai semua hero ke res
    
    res.push (obj[Object.keys(obj)[i]]);
  }

  // sesuaikan dgn test case dmn tipe hanya terbagi dua (ranged dan melee) dan yg tipenya tdk ada tetap ditampilkan sebagai arr kosong
  
  if (Object.keys(obj).length < 2) {
    res.push ([]);
  }
  
  return res;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []