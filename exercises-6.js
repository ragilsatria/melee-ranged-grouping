function meleeRangedGrouping (str) {
  var result = [], ranged = [], melee = [];
  if (!str.length) return result;
  str = str.split(',');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].split('-');
    if (str[i][1] === 'Ranged') {
      ranged.push(str[i][0]);
    } else if (str[i][1] === 'Melee') {
      melee.push(str[i][0]);
    }
  }
  result.push(ranged, melee);
  return result;
}

// function meleeRangedGrouping (str) {
//   var result = [], ranged = [], melee = [];
//   if (!str.length) return result;
//
//   var tmp = '';
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === '-' && str[i+1] === 'R') {
//       ranged.push(tmp);
//     } else if (str[i] === ',') {
//       i++;
//       tmp = '';
//     } else if (str[i] === '-' && str[i+1] === 'M') {
//       melee.push(tmp);
//     }
//     tmp += str[i];
//   }
//   result.push(ranged, melee)
//   return result;
// }

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
//
console.log(meleeRangedGrouping('')); // []
