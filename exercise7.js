//Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
  if (str.length === 0 ) {
    return [];
  }
//Split the elements of string input 
  var copy = str.split(',');
  var newArr = [];
  for (var i = 0; i < copy.length; i++) {
    newArr.push(copy[i].split('-'));
  }
//Group the name into result array
  var result = [[],[]];
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i][1] === 'Ranged') {
      result[0].push(newArr[i][0]);
    } else if (newArr[i][1] === 'Melee') {
      result[1].push(newArr[i][0]);
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