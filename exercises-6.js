function meleeRangedGrouping (str) 
{
    var result = []
  
    if (str.length === 0) {
      return result
    } else {
      for (var i = 0; i < 2; i++) 
      {
        result.push([])}
      var strArr0 = str.split(",")
      for (var i = 0; i < strArr0.length; i++) 
      {
        var strArr1 = strArr0[i].split("-")
        if (strArr1[1] === "Ranged") {
          result[0].push(strArr1[0])
        } 
        else {
          result[1].push(strArr1[0])
        }
      }
    }
    return result 
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []