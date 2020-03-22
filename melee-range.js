function meleeRangedGrouping (str) {
    //your code here
    if (str.length === 0){
        return [];
    }

    var pisah = '';
    var temp = [];
    var arr = [];
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === ',' || i === str.length) {
            arr.push(pisah);
            pisah = '';
        }
        else {
            pisah += str[i];
        }
    }
    pisah = '';
    for (var i = 0; i < arr.length; i++) {
        temp.push([]);
    }
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j <= arr[i].length; j++) {
            if (arr[i][j] === '-' || j === arr[i].length) {
                temp[i].push(pisah);
                pisah = '';
            }
            else {
                pisah += arr[i][j];
            }
        }
    }
    var result = [];
    for (var i = 0; i < 2; i++) {
        result.push([]);
    }
    for (var i = 0; i < temp.length; i++) {
        if (temp[i][1] === 'Ranged') {
            result[0].push(temp[i][0]);
        }
        else {
            result[1].push(temp[i][0]);
        }
    }
    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
  