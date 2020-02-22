function split(str) {
    var result = []
    var tmp = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] != ',') {
            tmp += str[i]
        }
        else if (str[i] == ',') {
            result.push(tmp)
            tmp = ''
        }
        if (i == str.length - 1) {
            result.push(tmp)
            tmp = ''
        }
    }
    return result
}

function sorting(str) {
    var result = [[], []]

    if (str == '') {
        return '[]'
    }

    else {
        for (var i = 0; i < str.length; i++) {
            var tmp1 = ''
            var tmp2 = ''
            for (var j = 0; j < str[i].length; j++) {
                if (str[i][j] != '-') {
                    tmp1 += str[i][j]
                }
                else if (str[i][j] == '-') {
                    tmp2 = tmp1
                    tmp1 = ''
                }
                if (j == str[i].length - 1) {
                    if (tmp1 == 'Ranged') {
                        result[0].push(tmp2)
                    }
                    else if (tmp1 == 'Melee') {
                        result[1].push(tmp2)

                    }
                }
            }
        }
        return result
    }
}

function meleeRangedGrouping(str) {
    //your code here
    var splitMystr = split(str)
    var grouping = sorting(splitMystr)
    return grouping
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []