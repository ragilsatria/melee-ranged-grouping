function meleeRangedGrouping (str) {
    if (str.length === 0) {
        return `''`;
    }

    var splitHero = str.split(','); // [hero-class, hero-class, hero-class]
    var splitClass = []; // [[hero, class], [hero, class], [hero, class]]
    for (var i = 0; i < splitHero.length; i++) {
        splitClass.push(splitHero[i].split('-'));
    }

    var output = []; // [[<list hero ranged>], [<list hero melee>]]
    var ranged = [];
    var melee = [];

    //iterasi splitClass, cek Ranged/Melee, push nama hero ke var ranged/melee
    for (var j = 0; j < splitClass.length; j++) {
        if (splitClass[j][1] === 'Ranged') {
            ranged.push(splitClass[j][0]);
        } else if (splitClass[j][1] === 'Melee') {
            melee.push(splitClass[j][0]);
        }
    }
    output.push(ranged, melee);
    return output;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []