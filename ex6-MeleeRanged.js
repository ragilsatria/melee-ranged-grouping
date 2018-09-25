function meleeRangedGrouping(str) {
  var strSplit = str.split(',');
  var resultArr = [];

  if (str.length === 0) {
    return '[]';
  } else {
    var arrSplit = [];
    for (let i = 0; i < strSplit.length; i++) {
      arrSplit.push(strSplit[i].split('-'));
    }

    arrRanged = [];
    arrMelee = [];
    for (let i = 0; i < arrSplit.length; i++) {
      if (arrSplit[i][1] === 'Ranged') {
        arrRanged.push(arrSplit[i][0]);
      } else {
        arrMelee.push(arrSplit[i][0]);
      }
    }
    resultArr.push(arrRanged);
    resultArr.push(arrMelee);
    return resultArr;
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []