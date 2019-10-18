function meleeRangedGrouping (str) {
  if(str.length == 0) return [];

  var heroes = str.split(',');
  var ranged = [];
  var melee = [];
  var groupedHeroes = [];
  var typeTrimmed = '';

  for(var i in heroes) {
    if(heroes[i].includes('Ranged')) {
      typeTrimmed = heroes[i].replace('-Ranged', '');
      ranged.push(typeTrimmed);
    } else {
      typeTrimmed = heroes[i].replace('-Melee', '');
      melee.push(typeTrimmed);
    }
  }

  groupedHeroes.push(ranged);
  groupedHeroes.push(melee);

  return groupedHeroes;

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []