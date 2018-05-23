function meleeRangedGrouping (str) {
  var split = str.split(',');
  var arr = [[],[]];

  for (var i = 0; i < split.length; i++) {
    if (split[i].split('-')[1] === 'Ranged') {
      arr[0].push(split[i].split('-')[0]);
    }else if (split[i].split('-')[1] === 'Melee') {
      arr[1].push(split[i].split('-')[0]);
    }
  }
  if (!str) {
    return [];
  }
  return arr;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
