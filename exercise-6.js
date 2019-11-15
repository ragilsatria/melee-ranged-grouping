function meleeRangedGrouping (str) {
  //your code here
if (str == '') {
    return [];
}

  var obj = {
      Melee : [],
      Ranged : [],
  };
  
  var tempStr = '';
  for (var i = 0; i <= str.length; i++) {
    if (str[i] == '-') {
        switch (str[i+1]) {
            case 'R':
                obj.Ranged.push(tempStr);
                break;

            case 'M':
                obj.Melee.push(tempStr);
                break;
        
            default:
                break;
        }
        tempStr = '';
    } else if (str[i] == ',') {
        tempStr = '';
    } else if(str[i] != '-'){
        tempStr += str[i];
    }
  }
  return [obj.Ranged, obj.Melee];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []