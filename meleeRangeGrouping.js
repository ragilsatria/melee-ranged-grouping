function meleeRangedGrouping(str) {
  if (!str) return []

  let temp = ''
  const result = []
  const heroes = []
  const ranged = []
  const melee = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      temp += str[i]
    } else {
      heroes.push(temp)
      temp = []
    }
    if (i === str.length - 1) heroes.push(temp)
  }

  for (let j = 0; j < heroes.length; j++) {
    for (let k = 0; k < heroes[j].length; k++) {
      if (heroes[j][k] === '-' && heroes[j][k + 1] === 'R') {
        const getHeroName = heroes[j].substring(0, k)
        ranged.push(getHeroName)
      } else if (heroes[j][k] === '-' && heroes[j][k + 1] === 'M') {
        const getHeroName = heroes[j].substring(0, k)
        melee.push(getHeroName)
      }
    }
  }

  result.push(ranged, melee)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'))
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')) // []
