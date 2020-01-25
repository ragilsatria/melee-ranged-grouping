function meleeRangedGrouping(str) {
    var temp = '';
    var output = [];
    if (str.length == 0) {
        return []
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] != '-' && str[i] != ',') {
            temp += str[i]
        } else if (str[i] == '-' || str[i] == ',') {
            output.push(temp)
            temp = ''
        }
    }
    output.push(temp)

    var result = [
        [],
        []
    ]

    for (let i = 0; i < output.length; i++) {
        if (output[i + 1] == 'Ranged') {
            result[0].push(output[i])
        } else if (output[i + 1] == 'Melee') {
            result[1].push(output[i])
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