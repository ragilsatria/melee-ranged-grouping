// by Renaldy Pratama

function meleeRangedGrouping (str) {
  var arr = str.split(',');
  var i = 0;
  var arrMelee = [];
  var arrRanged = [];
  var arrResult = [];

  if (str.length === 0) {
    return arrResult;
  }

  while (i < arr.length) {
    var j = 0;
    while (j < arr[i].length) {
      if (arr[i][j] !== '-') {
        j++;
      } else {
        break;
      }
    }
    var potong = arr[i].slice(j+1);
    if (potong === 'Melee') {
      arrMelee.push(arr[i].slice(0, j));
    } else if (potong === 'Ranged') {
      arrRanged.push(arr[i].slice(0, j));
    }
    i++;
  }
  arrResult.push(arrRanged, arrMelee);
  return arrResult;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []