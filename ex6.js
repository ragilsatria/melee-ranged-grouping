function meleeRangedGrouping (str) {
        //your code here
    if (str === '') {
        return [];
    }
    else {
        var result = [];
        var melee = [];
        var ranged = [];
        var group = str.split(",");
        for (var i=0; i<group.length; i++) {
            var hero = group[i].split("-");
            var name = hero[0];
            var type = hero[1];
            if (type === 'Ranged') {
                ranged.push(name);
            }
            else {
                melee.push(name);
            }
        }
    }
    result.push(ranged,melee);
    // result.push(ranged);
    return result;    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
  