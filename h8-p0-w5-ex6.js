function splitManual(str, delimiter) {
  let result = [''];

  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter) {
      j++;
      result.push('');
    } else result[j] += str[i];
  }

  return result;
}

function meleeRangedGrouping(str) {
  //your code here
  if (str === '') return [];

  const arr = splitManual(str, ',');
  const newArr = [];
  const result = [];
  for (let v of arr) newArr.push(splitManual(v, '-'));

  for (let v of newArr) {
    if (result[0] === undefined) result.push([]);
    if (result[1] === undefined) result.push([]);
    v[1] === 'Ranged' ? result[0].push(v[0]) : result[1].push(v[0]);
  }

  return result;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged')
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
