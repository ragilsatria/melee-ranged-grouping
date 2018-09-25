function meleeRangedGrouping (str) {
  var strSplit = str.split(',');
  var output = [];
  var ranged = [];
  var melee = [];
  var temp = [];

  for (var i = 0; i < strSplit.length; i++) {
    var string = '';
    string += strSplit[i];
    var stringSplit = string.split('-');
    temp.push(stringSplit);
  }

  for (var j = 0; j < temp.length; j++) {
    if (temp[j][1] === 'Ranged') {
      ranged.push(temp[j][0])
    } else if (temp[j][1] === 'Melee') {
      melee.push(temp[j][0])
    }
  }
  output.push(ranged);
  output.push(melee);

  if (str === '') {
    return [];
  } else {
    return output;
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []
