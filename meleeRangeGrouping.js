function splitStr(str, operator = '') {
  const result = []
  let temp = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== operator) {
      temp += str[i]
    } else {
      result.push(temp)
      temp = ''
    }
    if (i === str.length - 1) result.push(temp)
  }
  return result
}

function meleeRangedGrouping(str) {
  if (!str) return []

  const heroesType = {
    ranged: 'ranged',
    melee: 'melee'
  }

  const result = []
  const ranged = []
  const melee = []
  const arrTwoD = []
  const splitComma = splitStr(str, ',')

  for (let i = 0; i < splitComma.length; i++) {
    const splitDash = splitStr(splitComma[i], '-')
    arrTwoD.push(splitDash)
  }

  for (let i = 0; i < arrTwoD.length; i++) {
    if (arrTwoD[i][1].toLowerCase() == heroesType.ranged) {
      ranged.push(arrTwoD[i][0])
    } else {
      melee.push(arrTwoD[i][0])
    }
  }

  result.push(ranged, melee)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'))
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')) // []
