function meleeRangedGrouping(str) {
    //your code here
    if (str.length === 0) {
        return []
    }

    var result = []
    var ranged = []
    var melee = []

    var comaSplit = str.split(",")
    var pisah = ""

    for (i = 0; i < comaSplit.length; i++) {
        pisah = comaSplit[i].split("-")
        for (j = 0; j < pisah.length; j++) {
            if (pisah[j + 1] === "Ranged") {
                ranged.push(pisah[j])
            } else if (pisah[j + 1] === "Melee"){
                melee.push(pisah[j])
            }
        }
        result.push(ranged, melee)
    }

    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []