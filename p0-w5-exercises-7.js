function reduce (arr, cb, accumulator) {
  let start

  if (accumulator !== undefined) {
    start = 0
  } else {
    start = 1
    accumulator = arr[0]
  }

  for (let i = start; i < arr.length; i++) {
    accumulator = cb(accumulator, arr[i], i, arr)
  }

  return accumulator
}

function meleeRangedGrouping (str) {
  //your code here
  if (!str) {
    return []
  }
  
  str = str.split(',')

  let temp = reduce(str, (a, v) => {
    let data = v.split('-')
    a[data[1]].push(data[0])
    return a
  }, {'Ranged': [], 'Melee': []})

  return Object.values(temp)
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
