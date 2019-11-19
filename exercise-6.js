function meleeRangedGrouping (str) {
  if(str.length === 0) { return [] };
  var result = [[],[]];
  var arr = str.split(',');
  for(var i = 0; i < arr.length; i++) {
    var hero = arr[i].split('-');
    if(hero[1] === 'Ranged') {
      result[0].push(hero[0]);
    } else {
      result[1].push(hero[0]);
    }
  }
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []