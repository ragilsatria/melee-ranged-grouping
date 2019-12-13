// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong

function meleeRangedGrouping (str) {
    //your code here
    if (str === '') {
      return []
    }
    let string = ''
    let hero = []
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ',') {
        hero.push(string)
        string = ''
      }
      else {
        string += str[i]
      }
      if (i === str.length-1) {
        hero.push(string)
      }
    }
    

    let arr = []
    let string2 = ''
    for (let i = 0; i < hero.length; i++) {
      let arr2 = []
      for (let j = 0; j < hero[i].length; j++) {
        if (hero[i][j] === '-') {
          arr2.push(string2)
          string2 = ''
        }
        else {
          string2 += hero[i][j]
        }
        if (j === hero[i].length-1) {
          arr2.push(string2)
          string2 = ''
        }
      }
      arr.push(arr2)
    }
    arr

    let melee = []
    for (let i = 0; i < arr.length; i++) {
      melee.push(arr[i][1])
    }
    melee
    
    let result = []
    let result2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === arr[0][1]) {
          result.push(arr[i][0])
        }
        else {
          result2.push(arr[i][0])
        }
    }
    return [result, result2]
  }
  // console.log(arr)

  
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []