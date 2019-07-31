function meleeRangedGrouping (str) {
    var newStr = str.split(',');
    var temp = []
    for (var i = 0 ; i < newStr.length ; i++) {
        newSplit = newStr[i].split('-');
        temp.push(newSplit)
    }
    if (temp.length == 1) {
        return [];
    }
    var rangedArr = [];
    var meleeArr = [];
    var result = [];
    for (var i = 0 ; i < temp.length ; i++) {
        if (temp[i][1] === 'Ranged') {
            rangedArr.push(temp[i][0]);
        } else if (temp[i][1] === 'Melee') {
            meleeArr.push(temp[i][0]);
        }
    }
    result.push(rangedArr, meleeArr);
    return result;
}
  
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []