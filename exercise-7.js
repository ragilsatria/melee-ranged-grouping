const meleeRangedGrouping = str => {
  const RESULT = new Array(),
        RANGED_GROUPING = new Array(),
        MELEE_GROUPING = new Array();

  if (str === '') return RESULT;
  for (let i = 0; i < str.split(',').length; i++) {
      str.split(',')[i].split('-')[1].toLowerCase() === 'melee' 
        ? MELEE_GROUPING[MELEE_GROUPING.length] = (str.split(',')[i].split('-')[0])
        : RANGED_GROUPING[RANGED_GROUPING.length] = (str.split(',')[i].split('-')[0]); 
  }
  RESULT[RESULT.length] = RANGED_GROUPING;
  RESULT[RESULT.length] = MELEE_GROUPING;
  return RESULT;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'))
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')) // []
