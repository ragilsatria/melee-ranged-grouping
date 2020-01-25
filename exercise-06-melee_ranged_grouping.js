function meleeRangedGrouping (str) {
    
    var groupsArr = [[],[]], tmpStr = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] === '-' && str[i+1] === 'R') {
            if (!groupsArr[0].length) {groupsArr[0] = [];}
            groupsArr[0].push(tmpStr);
            tmpStr = '';
        } else if (str[i] === '-' && str[i+1] === 'M') {
            groupsArr[1].push(tmpStr);
            tmpStr = '';
        } else if (str[i] === ',') {
            tmpStr = '';
        } else {
            tmpStr += str[i];
        }
    }
    return !groupsArr[0].length && !groupsArr[1].length ? [] : groupsArr;
    
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []