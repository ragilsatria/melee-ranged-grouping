function meleeRangedGrouping (str) {
    //your code here
    if (str.length == '' || str.length<1){
      return [];
    }
    var split = str.split(',');
    var ranged = [];
    var malee = [];
    var result = [];
    for (var i=0; i<split.length; i++){
      if (split[i].split('-')[1] == 'Ranged'){
        ranged.push(split[i].split('-')[0]);
      } else {
        malee.push(split[i].split('-')[0]);
      }
    }
    result.push(ranged);
    result.push(malee);
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []