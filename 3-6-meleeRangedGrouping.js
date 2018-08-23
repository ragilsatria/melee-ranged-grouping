function meleeRangedGrouping (str) {
  //your code here
  var splitted = str.split(',');
  var indivSplitted = [[],[]];

  if(str.length == 0) {
    indivSplitted = [];
  }
  //work work work
  else {
    for(let i = 0; i < splitted.length; i++) {
      if (splitted[i].search('Ranged') == -1) {
        indivSplitted[1].push(splitted[i].replace('-Melee', ''));
      }
      else if (splitted[i].search('Ranged') != -1) {
        indivSplitted[0].push(splitted[i].replace('-Ranged', ''));
      }
    }
  }
  return indivSplitted;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
