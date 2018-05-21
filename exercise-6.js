function meleeRangedGrouping(str) {
  var pisah = str.split(',');
  var arrRanged = [];
  var arrMeele = [];
  var arrParent = [];
  if (str === '') {
    return [];
  }else {
    for (var i = 0; i < pisah.length; i++) {
      var pisahArr = pisah[i].split('-');
        for (var j = 0; j < pisahArr.length-1; j++) {
          if (pisahArr[j+1] === 'Ranged') {
            arrRanged.push(pisahArr[j])
          }else if (pisahArr[j+1] === 'Melee') {
            arrMeele.push(pisahArr[j])
          }
        }
      }
    arrParent.push(arrRanged,arrMeele);
  }
  return arrParent;
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
