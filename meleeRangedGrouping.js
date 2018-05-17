function meleeRangedGrouping (str) {
  var containHeroes = []
  var containHerro = []
  var stringContain = ''
  str += ','
  for (var a = 0; a < str.length; a++) {
    if (str[a] === ',') {
      containHerro.push(stringContain)
      containHeroes.push(containHerro)
      containHerro = []
      stringContain = ''
    } else if (str[a] === '-') {
      containHerro.push(stringContain)
      stringContain = ''
    } else {
      stringContain += str[a]
    }
  }
  // console.log(containHeroes)
  var groupingHeroes = []
  for (var b = 0; b < 2; b++) {
    groupingHeroes.push([])
  }
  // console.log(groupingHeroes)
  for (var i = 0; i < containHeroes.length; i++) {
    if(containHeroes[i][1] === 'Ranged') {
      groupingHeroes[0].push(containHeroes[i][0])
    } else if (containHeroes[i][1] === 'Melee') {
      groupingHeroes[1].push(containHeroes[i][0])
    }
  }
  if (str.length === 1) {
    return []
  }
  return groupingHeroes
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []