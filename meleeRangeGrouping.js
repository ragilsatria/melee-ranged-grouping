function meleeRangedGrouping (str) {
    newSplit = str.split(',')
    newArr = [];
    for(i=0;i<newSplit.length;i++){
      newArr.push(newSplit[i].split('-'))
    }

    result = [];
    ranged = []
    melee = []
    for(i=0;i<newArr.length;i++){
      if(newArr[i][1] === 'Ranged'){
        ranged.push(newArr[i][0])
      } else if (newArr[i][1] === 'Melee'){
        melee.push(newArr[i][0])
      }
    }

    if(ranged.length < 1 && melee.length < 1 ) {
      return result;
    } else {
    result.push(ranged,melee);
    return result;
    }
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []