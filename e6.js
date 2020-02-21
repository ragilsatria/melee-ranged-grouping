function meleeRangedGrouping(str) {
    //your code here
    var word = ''
    var arr = []
    for (var i = 0; i < str.length + 1; i++) {
        if (str[i] == ',' || str[i] == '-' || str[i] == undefined) {
            arr.push(word)
            word = ''
        } else word += str[i]
    }
    var out = []
    for (var i = 0; i < arr.length; i += 2) {
        if (arr[i + 1] == 'Ranged' || arr[i + 1] == 'Melee') {
            out.push([], [])
            for (var j = 0; j < arr.length; j += 2) {
                if (arr[j + 1] == 'Ranged') {
                    out[0].push(arr[j])
                }
                if (arr[j + 1] == 'Melee') {
                    out[1].push(arr[j])
                }
            }
            break
        }
    }
    return out
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []