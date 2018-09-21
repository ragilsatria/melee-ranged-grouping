function meleeRangedGrouping (str) {
  var arrOfHero = str.split(',');
  var arrOfClass = [];
  var melee = [];
  var ranged = [];
  var result = [];
  for (let i=0; i<arrOfHero.length; i++) {
    arrOfClass = arrOfHero[i].split('-');
    switch(arrOfClass[1]) {
      case 'Ranged':
        ranged.push(arrOfClass[0]);
        break;
      case 'Melee':
        melee.push(arrOfClass[0]);
        break;
    }
  }
  if (ranged.length > 0 || melee.length > 0) {
    result.push(ranged);
    result.push(melee);
  }
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []