function meleeRangedGrouping (str) {
    //your code here

    if (str.length === 0) { return [];}
    var result = [[], []];
    var str2Arr = str.split(',');

    for (var i = 0; i < str2Arr.length; i++) {
        var temp = str2Arr[i].split('-');
        if (temp[1] === 'Ranged') { result[0].push(temp[0]); }
        else { result[1].push(temp[0]); }
    }

    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []