function meleeRangedGrouping (str) {
  //your code here
  if (str.length == 0) {
    return [];
  }
  var firstSplit = str.split(',');
  var ranged = [];
  var melee = [];
  var result = [];
  for (let i = 0; i < firstSplit.length; i++) {
    var bufferSplit = firstSplit[i].split('-');
    if (bufferSplit[1] == 'Melee') {
      melee.push(bufferSplit[0]);
    } else if (bufferSplit[1] == 'Ranged') {
      ranged.push(bufferSplit[0]);
    }
  } 
  result.push(ranged);
  result.push(melee);
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []