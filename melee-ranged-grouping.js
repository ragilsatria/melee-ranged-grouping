function meleeRangedGrouping(str) {
    function split(str, divider) {
        var result = []
        var temp = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] == divider) {
                result.push(temp)
                temp = ''
            } else {
                temp += str[i]
            }
        }
        result.push(temp)
        return result
    }
    if (str.length == 0) {
        return []
    }
    var step_1 = split(str, ',')
    var step_2 = []
    for (let i = 0; i < step_1.length; i++) {
        step_2.push(split(step_1[i], '-'))
    }
    var obj = {}
    obj.Ranged = []
    obj.Melee = []
    for (let i = 0; i < step_2.length; i++) {
        for (let keys in obj) {
            if (keys == step_2[i][1]) {
                obj[keys].push(step_2[i][0])
            }
        }
    }
    var result = []
    for (let keys in obj) {
        result.push(obj[keys])
    }
    return result
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []