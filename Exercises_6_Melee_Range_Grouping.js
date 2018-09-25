function meleeRangedGrouping(str) {
  //your code here
  if (str.length < 1) {
    return []
  }
  else {
    var strPisah = str.split(',')
    var array = []
    var arrayRanged = []
    var arrayMelee = []
    for (var i = 0; i < strPisah.length; i++) {
      var kata = ''
      for (var j = 0; j < strPisah[i].length; j++) {
        if (strPisah[i][j] !== '-') {
          kata = kata + strPisah[i][j]
        }
        else {
          array.push(kata)
          kata = ''
        }
      }
      array.push(kata)
    }

    for (var i = 0; i < array.length; i = i + 2) {
      kata = array[i]
      // return kata
      // return kata[i+1]
      if (array[i + 1] === 'Ranged') {
        arrayRanged.push(kata)
        // return arrayRanged
      }
      else if (array[i + 1] === 'Melee') {
        arrayMelee.push(kata)
      }
    }

    var arrayTotal = [arrayRanged, arrayMelee]
    return arrayTotal
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []