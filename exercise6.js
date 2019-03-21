function meleeRangedGrouping (str) {
  //your code here
  if (str.length === 0 || str === undefined) {
    return []
  }
  var result = []
  var arr = str.split(',')
  var newArr = []
  var obj = {}
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('-'))
  }

  for (var i = 0; i < newArr.length; i++) {
    if (obj[newArr[i][1]] === undefined) {
      obj[newArr[i][1]] = []
    }
    obj[newArr[i][1]].push(newArr[i][0])
  }
  
  var key = Object.keys(obj)
  for (var i = 0; i < key.length; i++) {
    result.push(obj[key[i]])
  }

  // for (var key in obj) {
  //   result.push(obj[key])
  // } 

  if (result.length < 2) {
    result.push([])
  }
  console.log(obj)
  console.log(key)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []