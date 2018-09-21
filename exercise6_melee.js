function meleeRangedGrouping(str) {
  //your code here
  var hasil = []
  var karakterMelee = []
  var karakterRanged = []
  var arrayKarakter = str.split(',')
  var arrayKarakter2 = []
  // console.log(arrayKarakter)
  if (!str.length) {
    return []
  }
  for (var i = 0; i < arrayKarakter.length; i++) {
    arrayKarakter2[i] = arrayKarakter[i].split("-")
  }
  for (var j = 0; j < arrayKarakter2.length; j++) {
    if (arrayKarakter2[j][1] === 'Ranged') {
      karakterRanged.push(arrayKarakter2[j][0])
    } else {
      karakterMelee.push(arrayKarakter2[j][0])
    }
  }
  hasil.push(karakterRanged)
  hasil.push(karakterMelee)

  return hasil

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

  console.log(meleeRangedGrouping('')); // []