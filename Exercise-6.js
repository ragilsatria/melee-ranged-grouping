function meleeRangedGrouping (str) {
  //your code here
  var arr = [];
  var ranged = [], melee = [];
  for (i=0; i< str.length; i++) {
    if(i===0) {
      start = i;
    }
    if(str[i] === '-') {
      let string = ''
      if(str[i+1] === 'R') {
        for(j=start; j<i; j++) {
          string += str[j];
        }
        ranged.push(string)
        start = i+8;
      }
      if(str[i+1] === 'M') {
        for(j=start; j<i; j++) {
          string += str[j];
        }
        melee.push(string)
        start = i+7;
      }

    }
    if(i===str.length-1) {
      arr.push(ranged);
      arr.push(melee);
    }
  }
  return arr;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
