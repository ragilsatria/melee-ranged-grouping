function meleeRangedGrouping (str) {
  var potongKoma = str.split(',');   
  var jagoan = [];

  for(var i = 0; i < potongKoma.length; i++) {
    jagoan.push(potongKoma[i].split('-'));
  }

  var r = [];
  var m = [];
  var hero = []

  for (var j = 0; j < jagoan.length; j++) {
    if(jagoan[j][1] == 'Ranged') {
      r.push(jagoan[j][0]);
    } else {
      m.push(jagoan[j][0]);
    }
  }
  hero.push(r,m);
  
  return hero;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
