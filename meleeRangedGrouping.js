function meleeRangedGrouping (str) {
    //your code here
    var result = [];
    var split = str.split(',');
    var meleeHeros = [];
    var rangedHeros = [];
    if (str.length === 0) {
        return result;
    }
    for (var i = 0; i < split.length; i++) {
        var typeOfAttack = split[i].split('-');
        if (typeOfAttack[1] == 'Ranged') {
            rangedHeros.push(typeOfAttack[0])
        }else {
            meleeHeros.push(typeOfAttack[0])
        }
    }
    result.push(rangedHeros, meleeHeros);
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []