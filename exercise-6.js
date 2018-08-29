function meleeRangedGrouping (str) {
    //your code here
    var arrFirst = str.split(',');
    var arrSplit = [];
    var arrMelee = [], arrRanged = [];
    var results = [];
    
    if (str === '') {
      return [];
    }
    
    // Split hero & weapon type
    for (var i = 0; i < arrFirst.length; i++) {
      arrSplit.push(arrFirst[i].split('-'));
    }
    
    //console.log(arrSplit);
    
    // Grouping the hero based on the weapon type
    for (var j = 0; j < arrSplit.length; j++) {
      if (arrSplit[j][1] === 'Melee') {
        arrMelee.push(arrSplit[j][0]);
      } else if (arrSplit[j][1] === 'Ranged') {
        arrRanged.push(arrSplit[j][0]);
      }
    }
    
    results.push(arrRanged, arrMelee);
    
    return results;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  // console.log(meleeRangedGrouping('')); // []