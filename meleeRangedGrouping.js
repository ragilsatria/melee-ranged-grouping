function meleeRangedGrouping (str) {
    //your code here
    var result = [];

    if (!str) return result;

    var ranged = []
    var melee = []
    
    var newArr = str.split(',');

    for (let i = 0; i < newArr.length; i++) {
        var arrSplit = newArr[i].split('-');
              
        if (arrSplit[1] === 'Ranged'){
            ranged.push(arrSplit[0])
        } else {
            melee.push(arrSplit[0])
        }
    }

    result.push(ranged, melee)

    return result
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []