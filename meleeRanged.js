function meleeRangedGrouping(str) {
  //your code here
  //1.cari nama
  //2. pemisah

  str = cariNama(str)
  str = pemisah(str)

  let tampung = []

  let Ranged = []

  let melee = []

  // if (str.length == 0) {

  //   return []
  // }

  for (let i = 0; i < str.length; i++) {


    if (str[i][1] == 'Ranged') {

      Ranged.push(str[i][0])
      // console.log(Ranged)
    } else if (str[i][1] == 'Melee') {

      melee.push(str[i][0])
      // console.log(melee)
    }



  }

  if (Ranged == 0) {
    return []
  }


  tampung.push(Ranged, melee)



  return tampung

}


function cariNama(str) {

  let hasil = []

  let tempt = ''


  for (let i = 0; i < str.length; i++) {

    if (str[i] != ',') {

      tempt += str[i]
      // console.log(tempt)
    } else {

      hasil.push(tempt)

      tempt = ''

    }

  }

  hasil.push(tempt)//terakhir untuk di tampung, 
  return hasil


}
function pemisah(str) {

  let hasil = []

  // let tempt = []

  let role = []

  for (let i = 0; i < str.length; i++) {

    let nama = []

    let tempt = ''
    for (let j = 0; j < str[i].length; j++) {


      if (str[i][j] != '-') {

        tempt += str[i][j]
      } else {

        nama.push(tempt)

        tempt = ''

        // tempt = []
      }
    }
    nama.push(tempt)

    hasil.push(nama)

  }

  return hasil
}



// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe']]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []





// var b = [
//   'Razor-Ranged',
//   'Invoker-Ranged',
//   'Meepo-Melee',
//   'Axe-Melee',
//   'Sniper-Ranged'
// ]


// console.log(cariNama(a))
// console.log(pemisah(b))



//1.cari nama
//2. pemisah