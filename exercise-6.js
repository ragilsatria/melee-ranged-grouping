function meleeRangedGrouping (str) {
  //your code here
  var arr = str.split(',');
  var result = [[], []];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].substr(arr[i].length-6) === 'Ranged') {
        result[0].push(arr[i].substring(0, arr[i].length-7));
    } else {
        result[1].push(arr[i].substring(0, arr[i].length-6));
    }
  }
  if (str.length === 0) {
      return [];
  }
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []