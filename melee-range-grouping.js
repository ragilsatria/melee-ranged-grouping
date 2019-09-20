function meleeRangedGrouping(str) {
    //your code here

    var result = []

    var temp = []

    var string = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            temp.push(string)
            string = ''
        } else if (str[i] === ',') {
            temp.push(string)
            result.push(temp)
            temp = []
            string = ''
        } else {
            string += str[i]
        }
    }
    temp.push(string)
    result.push(temp)

    var group = [
        [],
        []
    ]

    for (var i = 0; i < result.length; i++) {
        if (result[i][1] === 'Ranged') {
            group[0].push(result[i][0])
        } else if (result[i][1] === 'Melee') {
            group[1].push(result[i][0])
        }
    }

    return group

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []