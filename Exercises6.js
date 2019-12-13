// [Exercises 6] Melee Ranged Grouping
function split(word1, word2) {

    var pemisah1 = []
    var tamp = ''
    for (var i = 0; i < word1.length; i++) {
        if (word1[i] == word2) {
            pemisah1.push(tamp)
            tamp = ''
        } else {
            tamp += word1[i]
        }
    }
    pemisah1.push(tamp)
    return pemisah1
}

function meleeRangedGrouping(str) {
    //your code here
    
    var hasilPisah = split(str, ',')
    var arr = []
    for (var j = 0; j < hasilPisah.length; j++) {
        var hasilPisah2 = split(hasilPisah[j], '-')
        arr.push(hasilPisah2)
    }
    // console.log(arr)
    //   return arr

    var temp = [[], []]
    for (var k = 0; k < arr.length; k++) {
            if (arr[k][1] == 'Ranged') {
                temp[0].push(arr[k][0])
            } else if (arr[k][1] == 'Melee') {
                temp[1].push(arr[k][0])
        }
    }
    return temp
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []