function meleeRangedGrouping(str) {
    //your code here
    if (str.length === 0) {
        return []
    }
    var temp = []
    var result = []
    var estring = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ",") {
            temp.push(estring)
            result.push(temp)
            estring = ""
            temp = []
        } else if (str[i] === "-") {
            temp.push(estring)
            estring = ""
        } else {
            estring = estring + str[i]
        }
    }
    temp.push(estring)
    result.push(temp)
    // console.log(result)
    var ranger = []
    var meleeist = []
    var finalResult = []
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].length; j++) {
            if (result[i][j] === "Ranged") {
                ranger.push(result[i][0])
            } else if (result[i][j] === "Melee") {
                meleeist.push(result[i][0])
            }
        }
    }
    finalResult.push(ranger, meleeist)
    return finalResult

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []