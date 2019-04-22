function meleeRangedGrouping (str) {
    //your code here
    if (str.length === 0){
      return [];
    }
    var arr = str.split(',');
    var ranged = [];
    var melee = [];
    for(var i = 0; i < arr.length; i++){
      var type = arr[i].split('-')[1];
      if (type === 'Ranged'){
        ranged.push(arr[i].split('-')[0]);
      }
      else if (type === 'Melee'){
        melee.push(arr[i].split('-')[0]);
      }
    }
    return [ranged, melee]
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []