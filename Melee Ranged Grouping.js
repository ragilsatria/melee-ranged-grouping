function meleeRangedGrouping (str) {
    var output = [[], []];
    var hero = str.split(`,`);

    if (!str) {
        return [];
    }

    for (var i = 0; i < hero.length; i++) {
        var range = hero[i].split(`-`);

        switch (range[1]) {
            case `Ranged`:
                output[0].push(range[0]);
                
                break;

            case `Melee`:
                output[1].push(range[0]);
                
                break;
        }
    }

    return output;
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []