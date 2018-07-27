function meleeRangedGrouping (str) {
  if (str.length === 0) return []
  str = str.split(',')
  var heroesArr = [], ranged = [], melee = []
  for (let i = 0;i < str.length; i++) {
    var hero = str[i].split('-')
    hero[1] === 'Ranged' ? ranged.push(hero[0]) : melee.push(hero[0])
  }
  heroesArr.push(ranged, melee)
  return heroesArr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
