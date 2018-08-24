function meleeRangedGrouping (str) {
  if (str === '') {
    return [];
  }

  var namaDanTipe = str.split(',');
  var tampung = [];

  for (var i = 0; i < namaDanTipe.length; i++) {
    var namaPisah = namaDanTipe[i].split('-');
    tampung.push(namaPisah);
  }

  var ranged = [];
  var melee = [];
  var result = [];

  for (var j = 0; j < tampung.length; j++) {
    if (tampung[j][1] === 'Ranged') {
      ranged.push(tampung[j][0]);
    } else {
      melee.push(tampung[j][0]);
    }
  }
  result.push(ranged, melee);
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
