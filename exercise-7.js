function meleeRangedGrouping(str) {
  //your code here
  if (!str) {
    return [];
  }

  var strArr = str.split(',');

  var arr = []
  for (var i = 0; i < strArr.length; i++) {
    arr.push(strArr[i].split('-'));
  }

  // console.log(arr)
  var result = [[], []];

  for (var j = 0; j < arr.length; j++) {
    if (arr[j][1] === 'Ranged') {
      result[0].push(arr[j][0]);
    } else {
      result[1].push(arr[j][0]);

    }
  }

  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []