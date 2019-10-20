function separator(str, sep) {
    var result = [];
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== sep) {
            temp += str[i];
        } else {
            result.push(temp);
            temp = '';
        }
    }
    result.push(temp);
    return result;
}

// console.log(separator('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged', ','))

function meleeRangedGrouping (str) {
    if (!str) {return []};
    var arr = separator(str, ',');
    var temp = [];
    var arrSplited = [];
    for (var i = 0; i < arr.length; i++) {
        temp = separator(arr[i], '-');
        arrSplited.push(temp);
    }
    
    var result = [[],[]];
    for (var i = 0; i < arrSplited.length; i++) {
        if (arrSplited[i][1] === 'Ranged') {
            result[0].push(arrSplited[i][0]);
        } else {
            result[1].push(arrSplited[i][0]);
        }
    }
    return result;
}
  
  // TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

// ready