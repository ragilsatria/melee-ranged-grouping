 function meleeRangedGrouping (str) {
  //your code here
  var heroclass = []
  var melee = []
  var ranged = []
  var result = []
  
  var hero = str.split(',')
    // console.log(hero)

  for (let i = 0; i < hero.length; i++){
      heroclass.push(hero[i].split('-'))
  }

  for (let j = 0; j < heroclass.length; j++){
      if (heroclass[j][1] === 'Melee'){
          melee.push(heroclass[j][0])
      } else
      if (heroclass[j][1] === 'Ranged'){
          ranged.push(heroclass[j][0])
      }
  }
  result.push(ranged, melee)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []