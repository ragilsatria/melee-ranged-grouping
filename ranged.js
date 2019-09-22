function meleeRangedGrouping (str) {
    //your code here

    if (str === ''){
      return []
    }
    
    var splitArr = str.split(",")
    var arrSplit = []

    for (var i = 0; i < splitArr.length; i++) {
      arrSplit.push(splitArr[i].split("-"))
    }
    var Ranged = []
    var Melee = []
    
    for (var i = 0; i < arrSplit.length; i++) {
      if (arrSplit[i][1] === 'Melee') {
        Melee.push(arrSplit[i][0])
      } else if (arrSplit[i][1] === 'Ranged') {
        Ranged.push(arrSplit[i][0])
      }
    }
    var result = []
    
    result.push(Ranged)
    result.push(Melee)
    return result
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []