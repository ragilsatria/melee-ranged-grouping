function meleeRangedGrouping(str) {
  //your code here
  if (str.length <= 0) return [];

  let result = [[],[]],
    arrStr = str.split(',').join('-').split('-');

  for (let i = 1; i < arrStr.length; i += 2) {
    if (arrStr[i] === 'Ranged') result[0].push(arrStr[i - 1])
    else if (arrStr[i] === 'Melee') result[1].push(arrStr[i - 1])
  }
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []