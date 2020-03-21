function meleeRangedGrouping (str) {
  str += ',';
  var ranged = [];
  var melee = [];
  var temp = '';
  var hero;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      hero = temp;
      temp = '';
    } else if (str[i] === ',') {
      if (temp === 'Ranged') {
        ranged.push(hero);
      } else if (temp === 'Melee') {
        melee.push(hero);
      }
      temp = '';
    } else {
      temp += str[i];
    }
  }
  if (str === ',') {
    return [];
  }
  return [ranged, melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []