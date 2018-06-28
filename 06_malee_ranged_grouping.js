function meleeRangedGrouping (str) {
  if (str.length == 0) {
    return [];
  } 

  var hero = str.split(',');

  var ranged = [];
  var melee = [];

  for (var i = 0; i < hero.length; i++) {
    // lakukan split untuk memisah nama dengan jenis hero
    // nama berada pada indeks 0 dan jenis hero di indeks 1
    var pisah = hero[i].split('-')
    if (pisah[1] === 'Ranged'){
      ranged.push(pisah[0])
    } else {
      melee.push(pisah[0])
    }
  }
  return [ranged, melee];

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []