function meleeRangedGrouping (str) {
  //your code here
  if (str === ''){
    return []
  }
  var pisah = str.split(',')
  var ranged = []
  var melee = []
  var temp = []
  var hasil = []

  for (var i = 0; i < pisah.length; i++){
    // console.log(pisah[i])
    var pisah2 = pisah[i].split('-')
    temp.push(pisah2)
    // console.log(pisah2)
  } 


  for (var j = 0; j < temp.length; j++){
    // console.log(temp[j])
    if (temp[j][1] === 'Ranged') {
      ranged.push(temp[j][0])
      // console.length(ranged)
    } else {
      melee.push(temp[j][1])
    }
  }
  // return pisah
  hasil.push(ranged)
  hasil.push(melee)
  return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // [] 