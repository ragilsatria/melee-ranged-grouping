function meleeRangedGrouping (str) {
    //your code here
    if(str === ''){
        return []
    }

    var newStr = str.split(',')
    var result = [[],[]]

    for(var i = 0; i < newStr.length; i++){
        var getStr = ''
        for(var j = 0; j < newStr[i].length; j++){
            if(newStr[i][j] === '-' && newStr[i][j+1] === 'R'){
                result[0].push(getStr)
            } else if(newStr[i][j] === '-' && newStr[i][j+1] === 'M'){
                result[1].push(getStr)
            }
            getStr += newStr[i][j]
        }
    }
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []