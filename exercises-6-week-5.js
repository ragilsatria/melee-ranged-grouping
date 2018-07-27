function meleeRangedGrouping (str) {
  //your code here
  var res = []
  var tipeRanged =[], tipeMelee = []
  var arr=[], arr2 =[]

  if (str.length === 0) {
    return []
  }
    arr = str.split(',')

    for ( var i =0; i < arr.length; i++)
    {
      arr2.push(arr[i].split('-'))
    }

    for (var j=0; j < arr2.length; j++)
    {
      if (arr2[j][1] === 'Ranged')
      {
        tipeRanged.push(arr2[j][0])
      } else if (arr2[j][1] === 'Melee'){
        tipeMelee.push(arr2[j][0])
      }
    }
    res.push(tipeRanged, tipeMelee)
  
  return res
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []