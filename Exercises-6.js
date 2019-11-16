function meleeRangedGrouping (str) {
  //your code here
  var result = [[],[]]
  var arr = str.split(',')
  var smt = []
  for(i=0; i<arr.length; i++){
    var temp = arr[i].split('-')
    smt.push(temp)
  }
  for(j=0; j<smt.length; j++){
    if(smt[j][1] == 'Ranged')
    {result[0].push(smt[j][0])}
    if(smt[j][1] == 'Melee')
    {result[1].push(smt[j][0])}
  } return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
