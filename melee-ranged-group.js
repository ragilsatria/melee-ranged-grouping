function meleeRangedGrouping (str) {
  if(str.length === 0 || str === '' || str === undefined) return []

  let split = str.split(',')
  let rangedGroup = []
  let meleeGroup = []
  let results = []

  for(let i = 0; i < split.length; i++) {
    let type = split[i].split('-')
    if(type[1] === 'Ranged') {
      rangedGroup.push(type[0])
    } else if(type[1] === 'Melee') {
      meleeGroup.push(type[0])
    }
  }
  
  results.push(rangedGroup, meleeGroup)
  return results;
}
// TEST CASE
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []