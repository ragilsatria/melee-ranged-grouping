function meleeRangedGrouping (str) {
  //your code here
  var input = str.split(',');
  var temp = [];
  var res = [[], []]
  for(var i = 0; i<input.length; i++) {
    temp.push(input[i].split('-'));
  }
  

  for (var j = 0; j<temp.length; j++) {
    
    if(temp[j][1] === 'Ranged') {
      res[0].push(temp[j][0]);
    } else if(temp[j][1] === 'Melee') {
      res[1].push(temp[j][0]);
    }
  } return (res[0].length < 1 && res[1].length <1 ) ?  [] : res;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []