function meleeRangedGrouping (str) {
  // your code here
  if (str.length === 0) {
    str = []
    return str
  }
  var hero = str
    .split('-')
    .join()
    .split(',')
    .join()
    .split(',')
  var result = []
  var heroType = []
  for (var i = 0; i < hero.length; i++) {
    if (i % 2 === 0) {
      heroType.push([hero[i], hero[i + 1]])
    }
  }

  var obj = {}
  for (var j = 0; j < heroType.length; j++) {
    var name = heroType[j][0]
    var type = heroType[j][1]
    if (obj[type] === undefined) {
      obj[type] = []
      obj[type].push(name)
    } else {
      obj[type].push(name)
    }
  }
  result = Object.values(obj)
  return result
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'
  )
)
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged')
)
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')) // []
