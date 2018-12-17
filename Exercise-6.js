function meleeRangedGrouping(str) {
  if (str === '') {
      return []
  }

  var data = str.split(',');
  var hasil = []
  var ranged = []
  var melee = []

  for ( i = 0; i < data.length; i++) {
      var data2 = data[i].split('-')

      if (data2[1] === 'Ranged') {
          ranged.push(data2[0])
      } 
      else if (data2[1] === 'Melee') {
          melee.push(data2[0])
      }

  }
  
  hasil.push(ranged, melee)
  return hasil
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []