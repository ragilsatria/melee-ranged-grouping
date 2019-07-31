function meleeRangedGrouping (str) {
  //your code here
  var arrAwal = str.split(',');
  var arrSplit = [];
  var arrMelee = [], arrRanged = [];
  var hasil = [];
  
  if (str === '') {
    return [];
  }
  
  // Split hero & weapon type
  for (let i = 0; i < arrAwal.length; i++) {
    arrSplit.push(arrAwal[i].split('-'));
  }
  
  //console.log(arrSplit);
  
  // Grouping the hero based on the weapon type
  for (let j = 0; j < arrSplit.length; j++) {
    if (arrSplit[j][1] === 'Melee') {
      arrMelee.push(arrSplit[j][0]);
    } else if (arrSplit[j][1] === 'Ranged') {
      arrRanged.push(arrSplit[j][0]);
    }
  }
  
  hasil.push(arrRanged, arrMelee);
  
  return hasil;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []